const ProfileHeader = ({ user, userKarma }) => {
  const profileImage = '/images/chandra.png';

  return (
    <div className="flex items-center justify-center w-full py-8">
      {/* Card code block start */}
      <div className="border border-gray-200 rounded-xl">
        <div className="relative">
          {/* Cover */}
          <div className="h-56 w-full shadow rounded-t-xl object-cover object-center bg-gradient-to-tr from-[#ff9f4a] to-[#ff3683]" />
          {/* Profile Image */}
          <div className="inset-0 m-auto w-24 h-24 absolute -mb-12 md:ml-10 rounded-full shadow-md">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full ring-4 ring-white h-24 w-24"
            />
          </div>
        </div>
        {/* Bottom Part // description */}
        <div className="px-5 md:px-10 pb-10 mt-2">
          <div className="pt-3 md:pt-5 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="md:pr-16 w-full md:w-2/3">
              <div className="text-center  md:text-left mb-3 md:mb-0 flex flex-col md:flex-row items-center justify-between md:justify-start">
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row items-center mt-6">
                    <h2 className="mb-3 md:mb-0 md:mr-4 text-xl font-semibold text-gray-800 tracking-normal">
                      {user.name}
                    </h2>
                    <div className="bg-yellow-300 px-3 text-sm py-0.5 rounded-full">
                      Private
                    </div>
                  </div>
                  <p className="text-[#555454] mt-2 md:mt-0 mb-2 md:mb-0 text-sm">
                    @{user.username}
                  </p>
                </div>
              </div>
              <p className="text-center md:text-left mt-2 text-sm tracking-normal leading-5">
                {user.bio}
              </p>
            </div>
            <div className="md:px-10 w-full py-5 flex items-start justify-center md:w-1/3">
              <div className="mr-6 md:mr-10">
                <h2 className="text-gray-600 font-bold text-xl md:text-md leading-6 mb-2 text-center">
                  {userKarma.questions}
                </h2>
                <p className="text-gray-800 text-sm md:text-base leading-5">
                  Questions
                </p>
              </div>
              <div className="mr-6 md:mr-10">
                <h2 className="text-gray-600 font-bold text-xl md:text-md leading-6 mb-2 text-center">
                  {userKarma.answers}
                </h2>
                <p className="text-gray-800 text-sm md:text-base leading-5">
                  Answers
                </p>
              </div>
              <div className="mr-6 md:mr-10">
                <h2 className="text-gray-600 font-bold text-xl md:text-md leading-6 mb-2 text-center">
                  {userKarma.karma}
                </h2>
                <p className="text-gray-800 text-sm md:text-base leading-5">
                  Karma Points
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </div>
  );
};

export default ProfileHeader;
