import React from 'react';

import { CardWrapper } from '@/components/CardWrapper';
import { RegisterForm } from '@/components/RegisterForm';
import cardWrapperProps from './config';

const {
  title, description, anchorHref, anchorText,
} = cardWrapperProps;

function RegisterPage() {
  return (
    <CardWrapper
      title={title}
      description={description}
      anchorHref={anchorHref}
      anchorText={anchorText}
    >
      <RegisterForm />
    </CardWrapper>
  );
}

export default RegisterPage;
