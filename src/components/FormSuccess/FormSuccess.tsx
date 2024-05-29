import React from 'react';

import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
  message: string | null;
}

function FormSuccess({ message = null }: FormSuccessProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="p-3 bg-green-600/20 text-sm text-green-600 rounded-md flex items-center gap-4">
      <ExclamationTriangleIcon className="size-6 text-green-600" />
      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;
