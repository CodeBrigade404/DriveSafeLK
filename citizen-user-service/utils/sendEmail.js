import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port : 465,
    secure : true,
    auth: {
        user: "hewagesenumi@gmail.com",
        pass: "tanbqpkdhovnvjfk"
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

