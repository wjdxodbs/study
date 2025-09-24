"use client";

import { createReviewAction } from "@/actions/creat-review.action";
import { useActionState } from "react";
import { useEffect } from "react";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form action={formAction} className="flex flex-col gap-2.5">
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea
          required
          name="content"
          placeholder="리뷰 내용"
          disabled={isPending}
          className="w-full h-24 resize-y p-2.5 border border-gray-300 rounded-md"
        />
        <div className="flex gap-1.5 justify-end">
          <input
            required
            name="author"
            placeholder="작성자"
            disabled={isPending}
            className="p-2.5 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={isPending}
            className="p-2.5 bg-blue-400 text-white rounded-md cursor-pointer"
          >
            {isPending ? "작성 중..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
