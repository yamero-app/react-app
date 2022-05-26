export default function PostQuestionBtn({ handlePostQuestion }) {
  return (
    <div className="relative mb-8">
      <div className="w-full px-4">
        <button
          type="button"
          onClick={handlePostQuestion}
          className="w-full rounded-full font-bold px-6 py-3 bg-purple-500 hover:bg-purple-400 active:scale-[.98] shadow transition-all duration-100 text-white"
        >
          Ask Question
        </button>
      </div>
    </div>
  );
}
