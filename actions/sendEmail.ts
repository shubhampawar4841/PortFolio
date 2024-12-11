"use server";

// app/actions/sendEmail.ts

export const sendEmail = async (formData: FormData) => {
    const { senderEmail, message } = Object.fromEntries(formData);
  
    try {
      // Assuming you have AWS SDK setup for SES
      const AWS = require('aws-sdk');
      AWS.config.update({
        region: 'your-region', // Replace with your AWS region
        accessKeyId: 'your-access-key-id',  // Replace with your AWS Access Key ID
        secretAccessKey: 'your-secret-access-key'  // Replace with your AWS Secret Access Key
      });
  
      const ses = new AWS.SES();
  
      const params = {
        Source: senderEmail,
        Destination: {
          ToAddresses: ['recipient@example.com'] // Replace with recipient email
        },
        Message: {
          Subject: {
            Data: 'Contact Form Message'
          },
          Body: {
            Text: {
              Data: message
            }
          }
        }
      };
  
      await ses.sendEmail(params).promise();
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  };
  