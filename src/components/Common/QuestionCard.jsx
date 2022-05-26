import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  StarIcon,
} from '@heroicons/react/solid';
import AnswerModal from './AnswerModal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function QuestionCard({ user, que, ans }) {
  const [openAnsModal, setOpenAnsModal] = useState(false);
  const [showmore, setShowmore] = useState(false);

  const MenuBtn = () => (
    <div className="flex-shrink-0 self-center flex w-max absolute top-4 right-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="-m-2 p-2 rounded-full hover:bg-gray-50 flex items-center text-gray-400 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://google.com"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex px-4 py-2 text-sm',
                    )}
                  >
                    <StarIcon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Add to favorites</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://google.com"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex px-4 py-2 text-sm',
                    )}
                  >
                    <CodeIcon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Embed</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://google.com"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex px-4 py-2 text-sm',
                    )}
                  >
                    <FlagIcon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Report content</span>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );

  const AnswerBtn = () => (
    <div>
      <button
        type="button"
        onClick={() => setOpenAnsModal(true)}
        className="px-6 py-2 bg-teal-500 shadow hover:bg-[#57c4b4] text-white duration-100 font-semibold rounded-full mt-2"
      >
        Answer
      </button>
    </div>
  );

  const ShowMore = () => (
    <div className="flex justify-end">
      {!showmore ? (
        <button
          type="button"
          onClick={() => setShowmore(true)}
          className="text-blue-400"
        >
          (more)
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setShowmore(false)}
          className="text-blue-400"
        >
          (less)
        </button>
      )}
    </div>
  );

  return (
    <div className="flex relative flex-col px-4 py-3 sm:px-6 rounded-lg hover:shadow-lg border border-gray-200">
      <AnswerModal isOpen={openAnsModal} setIsOpen={setOpenAnsModal} />
      <div className="flex flex-row items-center space-x-3 py-3">
        <div className="flex">
          <img
            className="rounded-full h-12 w-12"
            src={user.pfp}
            alt="profile"
          />
        </div>
        <div className="flex-1">
          {/* User Name */}
          <p className="font-medium text-gray-900">
            <a
              href="https://google.com"
              className="hover:text-gray-600 text-sm font-bold"
            >
              {user.name}
            </a>
          </p>
          {/* User Label */}
          <p className="text-sm font-normal text-gray-600 font- tracking-wide">
            @{user.username}
          </p>
        </div>
      </div>
      <div>
        <div>
          {/* Question Section */}
          <section className="font-bold py-2 text-base">
            <p>{que}</p>
          </section>
          {/* Answer Section */}
          <section>
            <p className={showmore ? 'line-clamp-none' : 'line-clamp-2'}>
              {ans}
            </p>
            {/* Answer Button */}
            <AnswerBtn />
          </section>
        </div>
        <ShowMore />
        <MenuBtn />
      </div>
    </div>
  );
}
