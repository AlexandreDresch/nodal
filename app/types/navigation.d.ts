export interface IRoute {
  name: string;
  layout: string;
  icon: JSX.Element | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any;
  path: string;
  secondary?: boolean | undefined;
}
interface RoutesType {
  name: string;
  layout: string;
  icon: JSX.Element | string;
  path: string;
  secondary?: boolean | undefined;
}
