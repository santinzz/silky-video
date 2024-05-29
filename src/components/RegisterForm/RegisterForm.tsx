'use client';

import React, { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form, FormField, FormItem, FormLabel, FormControl,
} from '@/components/ui/form';
import { registerSchema, IRegisterSchema } from '@/schemas/register';
import registerAction from '@/actions/register';
import formFields from './config';
import { FormError } from '../FormError';
import { FormSuccess } from '../FormSuccess';

const [emailField, usernameField, passwordField, confirmPasswordField] = formFields;

function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const form = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: IRegisterSchema) => {
    startTransition(async () => {
      registerAction(data)
        .then((res) => {
          const [err, user] = res;

          setError(err);
          if (user) {
            setSuccess(`${user.name} has been registered successfully!`);

            router.replace('/auth/login');
          }
        });
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{emailField.label}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={emailField.placeholder} />
              </FormControl>
            </FormItem>
          )}
        />

				<FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{usernameField.label}</FormLabel>
              <FormControl>
                <Input
									{...field}
									placeholder={usernameField.placeholder}
									type={usernameField.type}
                />
              </FormControl>
            </FormItem>
          )}
				/>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{passwordField.label}</FormLabel>
              <FormControl>
                <Input
									{...field}
									placeholder={passwordField.placeholder}
									type={passwordField.type}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{confirmPasswordField.label}</FormLabel>
              <FormControl>
                <Input
									{...field}
									placeholder={confirmPasswordField.placeholder}
									type={confirmPasswordField.type}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />
				<Button className="w-full" size="lg" disabled={isPending}>
					Log In
				</Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
