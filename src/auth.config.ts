import { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { findUserByEmail } from './services/findUser';
import { loginSchema } from './schemas/login';

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const validatedData = loginSchema.safeParse(credentials);

        const { data } = validatedData;

        if (validatedData.error || !data) return null;

        const user = await findUserByEmail(data.email);

        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid) return null;

        const { password, ...rest } = user;

        return rest;
      },
    }),
  ],
} satisfies NextAuthConfig;
