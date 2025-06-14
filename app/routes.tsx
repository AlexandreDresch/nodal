import React from 'react';

import {
  HomeIcon,
  ShoppingCartIcon,
  BarChartIcon,
  User2Icon,
  LockIcon,
} from 'lucide-react';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <ShoppingCartIcon className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <BarChartIcon className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <User2Icon className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <LockIcon className="h-6 w-6" />,
  },
];
export default routes;