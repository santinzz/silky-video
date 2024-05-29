import Image from 'next/image';
import React from 'react';
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';
import { name } from './config';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] });

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image src="/logo.svg" alt="Logo" width={80} height={80} />
      <h1 className={cn('hidden md:block text-2xl font-bold text-slate-700', montserrat.className)}>{name}</h1>
    </div>
  );
}

export default Logo;
