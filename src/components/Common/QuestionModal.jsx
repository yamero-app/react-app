import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useStore } from '../../lib/store';

// Question Asking Panel inside Modal
function Panel() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const userQuestions = useStore((state) => state.userQuestions);
  const feedQuestions = useStore((state) => state.feedQuestions);
  const setUserQuestions = useStore((state) => state.setUserQuestions);
  const setFeedQuestions = useStore((state) => state.setFeedQuestions);

  const handlePost = (event) => {
    event.preventDefault();
    const userObj = [{ que: title, ans: desc }, ...userQuestions];
    const feedObj = [{ que: title, ans: desc }, ...feedQuestions];
    setUserQuestions(userObj);
    setFeedQuestions(feedObj);
  };

  return (
    <form action="#" className="relative">
      <div className="outline-none ring-0 rounded-lg shadow-sm overflow-hidden">
        <label htmlFor="title" className="sr-only">
          z Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className="flex w-full border border-gray-300 focus:border-teal-500 px-2 rounded-lg py-1.5 outline-none ring-0 text-sm font-medium placeholder-gray-500 focus:ring-0"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description" className="sr-only">
          Question
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="border border-gray-300 mt-2 py-1.5 h-24 rounded-lg focus:border-teal-500 px-2 w-full outline-none ring-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Write your question..."
          onChange={(event) => setDesc(event.target.value)}
          value={desc}
        />
      </div>

      <div className="mt-2 flex text-sm items-center justify-between space-x-3">
        <p>
          {180 - title.length}
          characters left
        </p>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg hover:shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handlePost}>
          Post
        </button>
      </div>
    </form>
  );
}

export default function QuestionModal({ isOpen, setIsOpen }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative border inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="text-gray-500 dark:text-white hover:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0"
                    onClick={() => setIsOpen(false)}>
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 mb-3 text-left font-medium text-gray-900">
                    Ask your Question
                  </Dialog.Title>
                </div>
                <Panel />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
