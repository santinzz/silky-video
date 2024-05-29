'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes.config';
import { AuthError } from 'next-auth';

export const login = async (email: string, password: string) => {
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return [null, 'Successfully logged in.'];
  } catch (error) {
    if (error instanceof AuthError) {
      return [error.message, null];
    }

    throw error;
  }
};
