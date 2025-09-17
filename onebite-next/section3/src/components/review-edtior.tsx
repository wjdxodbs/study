"use client";

import { createReviewAction } from "@/actions/creat-review.action";
import style from "./review-edtior.module.css";
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
      <form action={formAction} className={style.form_container}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea
          required
          name="content"
          placeholder="리뷰 내용"
          disabled={isPending}
        />
        <div className={style.submit_container}>
          <input
            required
            name="author"
            placeholder="작성자"
            disabled={isPending}
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "작성 중..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
