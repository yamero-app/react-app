import NavSideBar from './Common/NavSideBar';

export default function Layout({ children }) {
  return (
    <div className="font-sans flex flex-col min-h-screen text-gray-800 bg-white transition duration-300">
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 flex-shrink-0">
        <NavSideBar />
      </div>
      <div className="lg:pl-64 px-10 flex flex-col flex-1">{children}</div>
    </div>
  );
}
