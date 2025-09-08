// src/actions/index.ts
import { ActionError, defineAction } from 'astro:actions';
import { z } from 'zod';
import { Resend } from 'resend';

export const server = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      firstName: z.string().min(1, { message: 'First name is required.' }),
      lastName: z.string().min(1, { message: 'Last name is required.' }),
      email: z.string().email({ message: 'A valid email is required.' }),
      message: z.string().min(1, { message: 'Message cannot be empty.' }),
      subscribe: z.boolean().default(false),
    }),
    // The `env` parameter is now correctly typed
    handler: async (data, env) => { 
      // Correctly access env from the context object
      const resend = new Resend(env.RESEND_API_KEY);

      try {
        const { data: resendData, error } = await resend.emails.send({
          from: 'info@viewfinderfp.com',
          to: ['dilani@viewfinderfp.com'],
          subject: `New Contact from ${data.firstName} ${data.lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
            <p><strong>Newsletter Subscription:</strong> ${data.subscribe ? 'Yes' : 'No'}</p>
          `,
        });
  
        if (error) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: error.message,
          });
        }
        return resendData;
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