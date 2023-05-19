import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port : 465,
    secure : true,
    auth: {
        user: "drivesafesliit.lk@gmail.com",
        pass: "eimrhtojnaspejrz"
    }
});



const sendEmail = (emailTemplate) => {
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err) {
            console.log(err);
        }
        console.log('Email sent: ' , info.response);
    });
}
export {sendEmail};

