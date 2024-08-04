 "use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function Sidebar({ user }: SiderbarProps) {
  const pathName = usePathname()

  return (
    <section className='sidebar'>
      <nav className="flex flex-col gap-4">
        <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
          <Image className='size-[24px] max-xl:size-14' src='/icons/logo.svg' alt='logo' width={34} height={34} />
          <h1 className="sidebar-logo">
            Horizon
          </h1>
        </Link>

        {sidebarLinks.map(item => {
          const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
          return (
            <Link href={item.route} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} key={item.label}>{item.label}</Link>
          )
        })}

      </nav>
    </section >
  );
}

export default Sidebar;