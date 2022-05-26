import YameroLogo from '../../../public/images/yamero-logo';

// import { useTheme } from 'next-themes';
// import Image from 'next/image';
const Header = (props) => {
  return (
    <header
      className={`flex top-0 bg-transparent justify-between items-center px-5 py-3 sm:px-8 md:px-16 md:py-4 dark:border-light-grey w-full ${props.className}`}
    >
      <YameroLogo />
      <nav className="flex w-full items-center justify-end gap-x-2">
        {1 ? (
          <div className="flex flex-row space-x-3">
            <button
              className="bg-teal-500 font-medium px-6 py-2 text-white rounded-lg transition-all hover:shadow-lg duration-100 active:scale-95 dark:hover:bg-teal-600"
              onClick={() => {}} // signout function
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            className="bg-purple-500 dark:bg-purple-400 hover:bg-purple-600 hover:shadow-lg active:scale-[.95] transition-all duration-100 font-semibold px-6 py-2 rounded-full text-white"
            onClick={() => {}} // signin function
          >
            Sign in
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
