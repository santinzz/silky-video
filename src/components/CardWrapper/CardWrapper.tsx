import React from 'react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

interface CardWrapperProps {
  title: string;
  description: string;
  anchorHref: string;
  anchorText: string;
  children: React.ReactNode;
}

function CardWrapper({
  title,
  description,
  anchorHref,
  anchorText,
  children,
}: CardWrapperProps) {
  return (
    <Card className="w-[420px]">
      <CardHeader>
        <CardTitle className="text-4xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        {children}
      </CardContent>
      <CardFooter className="pb-2">
        <Button asChild variant="link" className="w-full">
          <Link href={anchorHref}>
            {anchorText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
