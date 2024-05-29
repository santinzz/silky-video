import { Navbar } from '@/components/Navbar';
import React from 'react';

function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mt-24">
        {children}
      </main>
    </>
  );
}

export default LandingLayout;
