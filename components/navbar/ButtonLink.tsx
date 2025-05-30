'use client';

import { useRouter } from 'next/navigation';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  const router = useRouter(); // ✅ Mover el hook adentro del componente

  return (
    <button className='w-full text-left capitalize' onClick={() => router.push(href)}>
      {children}
    </button>
  );
}
