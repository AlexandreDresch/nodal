import { ReactNode } from "react";
import { ChevronsRight } from "lucide-react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  className?: string;
  colSpan?: "default" | "double";
};

export function FeatureCard({
  icon,
  title,
  description,
  items,
  bgImage,
  bgPosition = "bg-right",
  bgSize = "bg-[length:40%]",
  className = "",
  colSpan = "default",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white/80 h-full p-6 lg:p-12 aspect-square lg:aspect-auto flex justify-around sm:justify-between flex-col 
      ${colSpan === "double" ? "lg:col-span-2" : ""}
      ${bgImage ? `sm:bg-[url(${bgImage})] bg-no-repeat ${bgPosition} ${bgSize}` : ""}
      ${className}`}
    >
      {icon}
      <div className="flex flex-col">
        <h3 className="text-base sm:text-xl tracking-tight">{title}</h3>
        <p className="text-muted-foreground max-w-xl text-xs">{description}</p>
        <ul className="flex flex-col gap-2 my-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-muted-foreground max-w-xl text-sm sm:text-base flex gap-1"
            >
              <ChevronsRight className="text-teal-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}