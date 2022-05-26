import { useState } from 'react';

// External Lib imports
import { Link, useLocation } from 'react-router-dom';
import { FolderIcon, MenuIcon, UsersIcon } from '@heroicons/react/outline';

// Component imports
import NavSideSlideBar from './NavSideSlideBar';
import PostQuestionBtn from './PostQuestionBtn';
import QuestionModal from './QuestionModal';
import PopoverMenu from './PopoverMenu';
import { useStore } from '../../lib/store';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavSideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openQueModal, setOpenQueModal] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'feed',
      route: '/feed',
      icon: FolderIcon,
      current: location.pathname === '/feed'
    },
    {
      name: 'profile',
      route: '/user',
      icon: UsersIcon,
      current: location.pathname === '/user'
    },
  ];

  // Global States
  const user = useStore((state) => state.user);

  return (
    <>
      <NavSideSlideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
      />
      <QuestionModal isOpen={openQueModal} setIsOpen={setOpenQueModal} />
      {/* Static sidebar for desktop */}
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img src="/images/yamero-logo.svg" alt="logo" />
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-full transition-all duration-150',
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-500 dark:text-white'
                      : 'text-gray-400 dark:text-white dark:group-hover:text-gray-100',
                    'mr-3 flex-shrink-0 h-6 w-6',
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <PostQuestionBtn handlePostQuestion={() => setOpenQueModal(true)} />

        <PopoverMenu>
          <div className="flex-shrink-0 w-full flex cursor-pointer group hover:bg-gray-200 border-t border-gray-200 dark:border-gray-600 dark:bg-dark-grey p-4">
            <div className="flex items-center">
              {/* Profile image */}
              <div>
                <img
                  src={user.pfp}
                  alt="profile"
                  className="rounded-full h-10 w-10"
                />
              </div>
              <div className="ml-3 text-sm">
                <p className="font-medium text-gray-700 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                  {user.name}
                </p>
                <p className="w-max cursor-pointer font-medium text-gray-500 group-hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400">
                  {`@${user.username}`}
                </p>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </PopoverMenu>
      </div>
      <div className="flex items-center py-2 justify-end px-8 flex-1 sticky z-10 md:hidden">
        <button
          type="button"
          className="focus:outline-none focus:ring-0 w-max"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className=" h-8 w-8 dark:text-white" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
