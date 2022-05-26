import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import YameroLogo from '../../../public/images/yamero-logo';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavSideSlideBar({ sidebarOpen, setSidebarOpen, navigation }) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full">
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}>
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto dark:bg-dark-grey">
              <div className="flex-shrink-0 flex items-center px-4">
                <YameroLogo />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-150'
                    )}>
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500 dark:text-white'
                          : 'text-gray-400 dark:text-white group-hover:text-gray-100',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-600 bg-dark-grey p-4">
              <div className="flex items-center">
                {/* Profile image */}
                <div className="rounded-full bg-gray-200 dark:bg-gray-600 w-10 h-10" />
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                    Sarthak Verma
                  </p>
                  <a href="/user">
                    <p className="text-sm w-max cursor-pointer font-medium text-gray-500 group-hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400">
                      View profile
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" />
      </Dialog>
    </Transition.Root>
  );
}
