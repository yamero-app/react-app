import { useEffect, useState } from "react";
import QuestionsFlow from "./QuestionsFlow";
import { useStore } from "../../lib/store.js";

export default function FeedPage() {
  const user = useStore((state) => state.user);
  const firstName = user.name.split(" ")[0];

  return (
    <main className="flex-1 py-6 text-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <p className="text-3xl font-bold">Hello, {firstName}</p>
          <p className="text-gray-500 font-medium">Welcome, exploring the fabulous Queries</p>
        </div>
        {/* Feed Container */}
        <div className="py-6">
            <QuestionsFlow />
        </div>
      </div>
    </main>
  );
}
