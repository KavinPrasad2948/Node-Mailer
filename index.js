import dotenv from 'dotenv';
import { sendEmail } from "./Utils/nodeMailer.js";

// Load environment variables from .env file
dotenv.config({
    path: './.env',
});

// Test email sending
sendEmail(
    'to address',  // Recipient email
    'from adress',       // Sender email from environment variable
    'Test Message'              // Subject
);
