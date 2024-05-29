'use server';

import { prisma } from '@/db';

import { IRegisterSchema, registerSchema } from '@/schemas/register';
import { findUserByEmail } from '@/services/findUser';
import { User } from '@prisma/client';

import bcrypt from 'bcryptjs';

import { ZodError } from 'zod';

type RegisterResponse = [string | null, User | null];

export const register = async (
  data: IRegisterSchema
): Promise<RegisterResponse> => {
  try {
    registerSchema.parse(data);
    const user = await findUserByEmail(data.email);

    if (user !== null) {
      return [new Error('User already exists').message, null];
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        name: data.username,
        password: hashedPassword,
      },
    });

    return [null, newUser];
  } catch (error) {
    if (error instanceof ZodError) {
      return [new Error(error.errors[0].message).message, null];
    }

    if (error instanceof Error) {
      return [error.message, null];
    }
  }

  return [new Error('An error occurred').message, null];
};

export default register;
