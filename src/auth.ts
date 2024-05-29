import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { prisma } from './db';
import authConfig from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        // eslint-disable-next-line no-param-reassign
        session.userId = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  ...authConfig,
});
