import Customer from '../model/CustomerModel.js';
import Token from '../model/Token.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { auth } from '../middleware/auth.js';
import { sendEmail } from '../utils/sendEmail.js';
import {  resetPassword } from '../utils/emailTemplate.js';

///register
const register = async (req, res) => {
    try {
        const existingCustomer = await Customer.findOne({ email: req.body.email });
        if (existingCustomer) {
            return res.status(409).json({
                status: false,
                message: "Email already exists",
                data: undefined
            });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const customer = new Customer({ ...req.body, password: hashedPassword });
        const savedCustomer = await customer.save();

        return res.status(201).json({
            status: true,
            message: "Customer created successfully",
            data: savedCustomer
        });
    } catch (err) {
        console.error('Error creating customer:', err);
        return res.status(500).json({
            status: false,
            message: err.message,
            data: undefined
        });
    }
};

const login = async (req, res) => {
    try {
      const customer = await Customer.findOne({ email: req.body.email }).exec();
      if (!customer) {
        return res.status(401).json({
          status: false,
          message: 'User not found',
          data: undefined,
        });
      }
  
      const result = await new Promise((resolve, reject) => {
        bcrypt.compare(req.body.password, customer.password, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
  
      if (result) {
        const token = jwt.sign(
          {
            email: customer.email,
            customerId: customer._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: '1h',
          }
        );
  
        const tokenDoc = await Token.findOneAndUpdate(
          { _customerId: customer._id, tokenType: 'login' },
          { token },
          { new: true, upsert: true }
        ).exec();
  
        return res.status(200).json({
          status: true,
          message: 'Auth successful',
          data: {
            token: tokenDoc.token,
            customer,
          },
        });
      } else {
        return res.status(401).json({
          status: true,
          message: 'Wrong password',
          data: undefined,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        message: 'Server Error',
        data: undefined,
      });
    }
  };

  const logout = async (req, res) => {
    try {
     
      await Token.findOneAndDelete({
        _customerId: req.customerId,
        tokenType: 'login',
      }).exec();
  
      return res.status(200).json({
        status: true,
        message: 'Logout successful',
        data: undefined,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        message: 'Server Error',
        data: undefined,
      });
    }
  };
  
  const authUser = async (req, res) => {
    const customerId = req.customerId
    Customer.findById(customerId, (err, customer) => {
        if(err){
            return res.status(401).json({
                status: false,
                message: "Authentication failed",
                data: undefined
            })
        }
        if(customer){
            res.status(200).json({
                data: customer,
                message: "Authentication successfully!",
                status: true,
            })
        }
    })
};

const forgetPassword = async (req, res) => {
    try {
        const email = req.body.email;
        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.status(401).json({
                status: false,
                message: 'User not found',
                data: undefined,
            });
        }

        const token = jwt.sign(
            {
                email: customer.email,
                customerId: customer._id,
            },
            process.env.JWT_RESET_PW_KEY,
            {
                expiresIn: '20m',

            }
        );

        const tokenDoc = await Token.findOneAndUpdate(
            { _customerId: customer._id, tokenType: 'resetPassword' },
            { token: token },
            { new: true, upsert: true }
        );
        
        if (tokenDoc) {
            const emailTemplate = resetPassword(email, token);
            sendEmail(emailTemplate);
            res.status(200).json({
                status: true,
                message: "Email sent successfully",
                data: undefined
            });
        } else {
            return res.status(401).json({
                status: false,
                message: 'Error saving token',
                data: undefined,
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: false,
            message: 'Error sending email',
            data: undefined,
        });
    }
};

const resetPasswordcon = async (req, res) => {
  try {
    const token = req.params.token;
    const { newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_RESET_PW_KEY);
    const doc = await Token.findOne({_customerId: decoded.customerId, token: token, tokenType:'resetPassword'});
    if (!doc) {
      return res.status(500).json({
        status: false,
        message: "Invalid token",
        data: err,
      });
    }
    const customer = await Customer.findOne({ email: decoded.email });
    const hash = await bcrypt.hash(newPassword, 10);
    customer.password = hash;
    const result = await customer.save();
    await Token.findOneAndDelete({_customerId: customer.id, tokenType:'resetPassword'});
    res.status(200).json({
      status: true,
      message: "Password reset successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Server error",
      data: error,
    });
  }
};


const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const customerId = req.customerId;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(401).json({
        status: false,
        message: "User not found",
        data: undefined,
      });
    }

    bcrypt.compare(oldPassword, customer.password, async (err, isMatch) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Server error",
          data: undefined,
        });
      }

      if (isMatch) {
        bcrypt.hash(newPassword, 10, async (err, hash) => {
          if (err) {
            return res.status(500).json({
              status: false,
              message: "Error, cannot encrypt password",
              data: undefined,
            });
          }

          customer.password = hash;
          await customer.save().then((updatedCustomer) => {
            return res.status(200).json({
              status: true,
              message: "Password updated successfully",
              data: updatedCustomer,
            });
          });
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "Password not match",
          data: undefined,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Server error",
      data: undefined,
    });
  }
};

const getuser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Customer.findById(userId);
    
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};








export { register, login , logout , authUser, forgetPassword, resetPasswordcon, changePassword ,getuser};
