import { IRoute } from '@/app/types/navigation';

export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute | null => {
  if (!isWindowAvailable()) return null;

  for (const route of routes) {
    if (!!route.items) {
      const found = findCurrentRoute(route.items, pathname);
      if (!!found) return found;
    }
    if (pathname?.match(route.path) && route) return route;
  }
  return null;
};

export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || 'Main Dashboard';
};

export const getActiveNavbar = (
  routes: IRoute[],
  pathname: string,
): boolean => {
  const route = findCurrentRoute(routes, pathname);
  return !!route?.secondary;
};

export const getActiveNavbarText = (
  routes: IRoute[],
  pathname: string,
): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};