import React from 'react';
import Link from 'next/link';
import { ExitIcon } from '@radix-ui/react-icons';
import type { Session } from 'next-auth';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { CameraIcon } from '@/components/icons/CameraIcon';
import { Button } from '@/components/ui/button';

export function LoggedNavbar({ session }: { session: Session | null }) {
  return (
    <nav className="flex gap-2 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full px-3 py-6 hover:bg-gray-300 transition"
              asChild
            >
              <Link href="/create">
                <CameraIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent align="center" className="bg-gray-200 text-slate-800 border border-slate-800">Upload a video</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage
                src={session?.user?.image ?? undefined}
                alt={`Avatar de ${session?.user?.name}`}
              />
              <AvatarFallback className="text-2xl bg-orange-400">{session?.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Button className="space-x-2" variant="outline">
                <ExitIcon />
                <span>Logout</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
