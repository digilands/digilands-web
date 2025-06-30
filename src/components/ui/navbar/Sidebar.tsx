'use client';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { NavItems } from './config';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../../public/placeholder.png'
export default function SideNav() {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

    useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      setIsSidebarExpanded(saved !== null ? JSON.parse(saved) : true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isSidebarExpanded !== null) {
      window.localStorage.setItem(
        'sidebarExpanded',
        JSON.stringify(isSidebarExpanded),
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

   if (isSidebarExpanded === null) {

    return null;
  }

  return (
    <div className="pr-0">
      <div
        className={cn(
          isSidebarExpanded ? 'w-[200px]' : 'w-[68px]',
          'transition-all duration-300 ease-in-out transform hidden sm:flex h-screen bg-sidebar',
        )}
      >
        <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden">
          {/* Top */}
          <div className="mt-4 relative pb-2">
            <Image src={logo} alt='logo' className='mx-auto mb-8 mt-4 w-10 h-4'  width={40} height={40}/>
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => (
                <Fragment key={idx}>
                  <SideNavItem
                    label={item.name}
                    icon={item.icon}
                    path={item.href}
                    active={item.active}
                    isSidebarExpanded={isSidebarExpanded}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </aside>

        <div className="mt-[calc(90vh-40px)] relative">
          <button
            type="button"
            className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-primary/20 rounded-full bg-primary text-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} className="stroke-white" />
            ) : (
              <ChevronRight size={16} className="stroke-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  const baseClasses =
    'h-full relative flex items-center whitespace-nowrap rounded-md text-sm font-normal transition-colors duration-100';

  const activeClasses =
    'bg-primary-light text-text-secondary shadow-sm';

  const inactiveClasses =
    'text-text-secondary hover:bg-primary-light';

  return isSidebarExpanded ? (
    <Link
      href={path}
      className={cn(baseClasses, active ? activeClasses : inactiveClasses)}
    >
      <div className="py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  ) : (
    <TooltipProvider delayDuration={70}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={path}
            className={cn(baseClasses, active ? activeClasses : inactiveClasses, 'p-2 py-1.5')}
          >
            <div className="flex flex-row items-center space-x-2 rounded-md">
              {icon}
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className="px-3 py-1.5 text-xs"
          sideOffset={10}
        >
          <span>{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
