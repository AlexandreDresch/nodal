import React from 'react';
import Dropdown from '@/components/dropdown';
import { EllipsisIcon, EllipsisVerticalIcon, LightbulbIcon, SettingsIcon, ShoppingBasketIcon, UserRoundIcon } from 'lucide-react';

export default function CardMenu(props: { transparent?: boolean; vertical?: boolean }) {
  const { transparent, vertical } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center text-xl hover:cursor-pointer ${
            transparent
              ? 'bg-none text-white hover:bg-none active:bg-none'
              : vertical
              ? 'bg-none text-navy-700 dark:text-white'
              : 'bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10'
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          {vertical ? (
            <p className="text-[24px] hover:cursor-pointer">
              <EllipsisVerticalIcon />
            </p>
          ) : (
            <EllipsisIcon className="h-6 w-6" />
          )}
        </button>
      }
      animation={'origin-top-right transition-all duration-300 ease-in-out'}
      classNames={`${transparent ? 'top-8' : 'top-11'} right-0 w-max`}
    >
      <div className="z-50 w-max rounded-xl bg-white px-4 py-3 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
          <span>
            <UserRoundIcon />
          </span>
          Panel 1
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <span>
            <ShoppingBasketIcon />
          </span>
          Panel 2
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <span>
            <LightbulbIcon />
          </span>
          Panel 3
        </p>
        <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <span>
            <SettingsIcon />
          </span>
          Panel 4
        </p>
      </div>
    </Dropdown>
  );
}
