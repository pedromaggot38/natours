const z = require('zod');

const userZodSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').toLowerCase().trim(),
    photoUrl: z.string().url('Invalid URL').optional(),
    role: z.enum(['user', 'guide', 'lead-guide', 'admin']).default('user'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    passwordConfirm: z.string().min(6),
    passwordChangedAt: z
      .preprocess(
        (arg) => (typeof arg === 'string' ? new Date(arg) : arg),
        z.date(),
      )
      .optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  });

const userUpdateMeZodSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  email: z.string().email('Invalid email').toLowerCase().trim().optional(),
  photoUrl: z.string().url('Invalid URL').optional(),
});

const updatePasswordZodSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    passwordConfirm: z.string().min(6),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  });

module.exports = {
  userZodSchema, // Para criação de usuário
  userUpdateMeZodSchema, // Para PATCH /updateMe
  updatePasswordZodSchema, // Para rotas de troca de senha
};
