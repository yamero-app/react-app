import { useState, useEffect } from 'react';
import QuestionCard from '../Common/QuestionCard';
import { useStore } from '../../lib/store';

export default function UsersQuestions({ user }) {
  const userQuestions = useStore((state) => state.userQuestions);

  const [ques, setQues] = useState();

  useEffect(() => {
    setQues(userQuestions);
  }, [userQuestions]);

  return (
    <div className="flex flex-col space-y-4 w-full sm:w-[500px] xl:w-1/2 mx-auto">
      {ques?.map((query, index) => (
        <QuestionCard
          user={user}
          que={query.que}
          ans={query.ans}
          key={index + 1}
        />
      ))}
    </div>
  );
}
