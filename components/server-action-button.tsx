'use client';

import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => Promise<void>;
  children: React.ReactNode;
};

export const ServerActionButton = ({ onClick, children }: Props) => {
  return (
    <div>
      <Button
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </Button>
    </div>
  )
}
