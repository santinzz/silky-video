import React from 'react';

import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface FormErrorProps {
  message: string | null;
}

function FormError({ message = null }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="p-3 bg-destructive/20 text-destructive rounded-md flex items-center gap-4">
      <ExclamationTriangleIcon className="size-7 text-destructive" />
      <p className="text-sm">{message}</p>
    </div>
  );
}

export default FormError;
