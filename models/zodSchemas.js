const z = require('zod');

const userZodSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').toLowerCase().trim(),
    photoUrl: z.string().url('Invalid URL').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    passwordConfirm: z.string().min(6),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  });

module.exports = { userZodSchema };
