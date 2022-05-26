import { useEffect, useState } from 'react';
import { useStore } from '../../lib/store';
import ProfileHeader from './ProfileHeader';
import UsersQuestions from './UsersQustions';

const Profile = () => {
  const user = useStore((state) => state.user);
  const userQuestions = useStore((state) => state.userQuestions);

  const [queLength, setQueLength] = useState();

  useEffect(() => {
    setQueLength(userQuestions.length);
  }, [userQuestions]);

  // Dummy User Karma-data: Karma is the stats of a user
  const userKarma = {
    questions: queLength,
    answers: 4,
    karma: 63,
  };

  return (
    <div>
      <ProfileHeader user={user} userKarma={userKarma} />
      <UsersQuestions user={user} />
    </div>
  );
};

export default Profile;
