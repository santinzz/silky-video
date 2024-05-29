import React from 'react';

import { CardWrapper } from '@/components/CardWrapper';
import { LoginForm } from '@/components/LoginForm';
import cardWrapperProps from './config';

const {
  title, description, anchorHref, anchorText,
} = cardWrapperProps;

function LoginPage() {
  return (
    <CardWrapper
      title={title}
      description={description}
      anchorHref={anchorHref}
      anchorText={anchorText}
    >
      <LoginForm />
    </CardWrapper>
  );
}

export default LoginPage;
