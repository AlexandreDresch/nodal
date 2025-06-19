import { Card } from "./ui/card";
import { JSX } from "react";

export default function Widget(props: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}) {
  const { icon, title, subtitle } = props;
  return (
    <Card className="!flex-row flex-grow items-center rounded-[20px] w-full h-[90px]">
      <div className="ml-[18px] flex w-auto flex-row items-center">
        <div className="rounded-full">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
}
