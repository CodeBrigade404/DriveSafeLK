let resetPassword = (email, token) => {
    const emailTemplate = {
        from: "noreply@gmail.com",
        to: email,
        subject: "Password Reset for" + email,
        text:
            "Please click the link below to reset your password \n\n" +
            "http://localhost:1670/resetPassword/" + token + "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
    };
    return emailTemplate;
};

export { resetPassword };
