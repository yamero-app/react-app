export default function PostQuestionBtn({ handlePostAnswer }) {
  return (
    <div className="relative mb-8">
      <div className="w-full px-4">
        <button
          onClick={handlePostAnswer}
          className="w-full rounded-full font-bold px-6 py-3 bg-purple-500 hover:bg-purple-400 active:scale-[.98] shadow transition-all duration-100 text-white">
          Answer
        </button>
      </div>
    </div>
  );
}
