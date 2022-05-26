import { useState, useEffect } from 'react';
import QuestionCard from '../Common/QuestionCard';
import { useStore } from '../../lib/store';

export default function QuestionsFlow() {
  const anon = useStore((state) => state.anon);
  const feedQuestions = useStore((state) => state.feedQuestions);

  const [ques, setQues] = useState();

  useEffect(() => {
    setQues(feedQuestions);
  }, [feedQuestions]);

  return (
    <div className="flex flex-col space-y-4 w-full sm:w-[500px] xl:w-1/2 mx-auto">
      {ques?.map((query, index) => {
        return (
          <QuestionCard
            user={anon}
            que={query.que}
            ans={query.ans}
            key={index + 1}
          />
        );
      })}
    </div>
  );
}
