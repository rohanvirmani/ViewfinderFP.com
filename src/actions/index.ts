import { ActionError, defineAction } from 'astro:actions';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    // Define the schema to validate the incoming form data
    input: z.object({
      firstName: z.string().min(1, { message: 'First name is required.' }),
      lastName: z.string().min(1, { message: 'Last name is required.' }),
      email: z.string().email({ message: 'A valid email is required.' }),
      message: z.string().min(1, { message: 'Message cannot be empty.' }),
      subscribe: z.boolean().default(false),
    }),
    handler: async ({ firstName, lastName, email, message, subscribe }) => {
      try {
        const { data, error } = await resend.emails.send({
          from: 'info@viewfinderfp.com',
          to: ['dilani@viewfinderfp.com'], // Replace with your receiving email address
          subject: `New Contact from ${firstName} ${lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p><strong>Newsletter Subscription:</strong> ${subscribe ? 'Yes' : 'No'}</p>
          `,
        });
  
        if (error) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: error.message,
          });
        }
        return data;
      } catch (error) {
        console.error('Failed to send email:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send email. Please try again later.',
        });
      }
    },
  }),
};