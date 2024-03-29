'use client';

import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="fixed inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative max-w-sm w-full"
      >
        {children}
      </div>
    </div>
  );
};
