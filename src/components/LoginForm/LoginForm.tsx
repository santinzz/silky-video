'use client';

import React, { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormItem,
} from '@/components/ui/form';
import { loginSchema, type ILoginSchema } from '@/schemas/login';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/actions/login';
import { FormSuccess } from '../FormSuccess';
import { FormError } from '../FormError';
import formFields from './config';

const [emailField, passwordField] = formFields;

function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ILoginSchema) => {
    startTransition(async () => {
      login(data.email, data.password)
        .then(([err, succ]) => {
          if (err) {
            setError(err);
            setSuccess(null);
          }

          if (succ) {
            setSuccess(success);
            setError(null);
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

        <FormError message={error} />
        <FormSuccess message={success} />

				<Button className="w-full" size="lg" disabled={isPending}>
					Log In
				</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
