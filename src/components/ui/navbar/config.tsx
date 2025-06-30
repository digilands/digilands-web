import { usePathname } from 'next/navigation';

import { House, Folders, Wallet, ShoppingBag, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/home',
      icon: <House size={20} />,
      active: isNavItemActive(pathname, '/home'),
    },
    {
      name: 'Files',
      href: '/files',
      icon: <Folders size={20} />,
      active: isNavItemActive(pathname, '/files'),
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: <ShoppingBag size={20} />,
      active: isNavItemActive(pathname, '/marketplace'),
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: <User size={20} />,
      active: isNavItemActive(pathname, '/profile'),
    },
    {
      name: 'Wallet',
      href: '/wallet',
      icon: <Wallet size={20} />,
      active: isNavItemActive(pathname, '/wallet'),
    },
  ];
};