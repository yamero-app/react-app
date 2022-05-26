import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

export default function PopoverMenu({ children }) {
  const solutions = [
    {
      name: 'Log Out',
      function: () => {},
    },
    {
      name: 'Profile',
      function: () => {},
    },
  ];

  return (
    <Popover className="relative">
      <>
        <Popover.Button className="w-full">{children}</Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 transform translate-x-7 -mt-56 w-screen max-w-xs sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white sm:gap-8 sm:p-6">
                {solutions.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    href={item.href}
                    className="-m-3 py-3 block bg-gray-50 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                    onClick={item.function}
                  >
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
