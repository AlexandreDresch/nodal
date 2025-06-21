import React from "react";

import {
  HomeIcon,
  BarChartIcon,
  User2Icon,
  RouteIcon,
} from "lucide-react";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "default",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    name: "Routes",
    layout: "/dashboard",
    path: "routes",
    icon: <RouteIcon className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/dashboard",
    icon: <BarChartIcon className="h-6 w-6" />,
    path: "data-tables",
  },
  {
    name: "Profile",
    layout: "/dashboard",
    path: "profile",
    icon: <User2Icon className="h-6 w-6" />,
  },
];
export default routes;
