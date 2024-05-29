import React from 'react';
import { auth } from '@/auth';

import { Logo } from '@/components/Logo';
import { UnloggedNavbar } from './subcomponents/UnloggedNavbar';
import { LoggedNavbar } from './subcomponents/LoggedNavbar';

async function Navbar() {
  const session = await auth();

  return (
    <header className="fixed flex top-0 justify-between w-full h-24 p-8 items-center border border-gray-300 bg-white">
      <nav>
        <Logo />
      </nav>
      {session ? <LoggedNavbar session={session} /> : <UnloggedNavbar />}
    </header>
  );
}

export default Navbar;
