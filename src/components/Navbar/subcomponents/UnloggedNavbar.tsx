import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { navLinks } from '../config';

export function UnloggedNavbar() {
  return (
    <nav className="space-x-4">
      {navLinks.map(({ id, href, label }) => (
        <Button key={id} asChild>
          <Link href={href}>{label}</Link>
        </Button>
      ))}
    </nav>
  );
}
