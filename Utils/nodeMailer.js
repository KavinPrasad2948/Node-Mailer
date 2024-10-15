import nodemailer from 'nodemailer';

// Create transporter using nodemailer
const transporter = nodemailer.createTransport({
    secure: true,
    host:'smtp.gmail.com',
    port: 465, // Secure SMTP port
    auth: {
        user: 'Enter your email address',  
        pass: `Enter your password`,  
    },
    
});

// Verify email configuration
transporter.verify((err, success) => {
    if (err) {
        console.log('Error in email verification:', err);
    } else {
        console.log('Email server is ready to take messages');
    }
});

// Function to send an email
export const sendEmail = async (to, from, subject) => {
    try {
        const mailOptions = {
            from,         // Sender's email
            to,           // Recipient's email
            subject,      // Email subject
            text: 'This is a test email'  // Email message
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.log('Error sending email:', error);
    }
};
