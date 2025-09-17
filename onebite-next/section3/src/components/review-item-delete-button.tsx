"use client";

import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState } from "react";
import { useEffect } from "react";

const ReviewItemDeleteButton = ({
  id,
  bookId,
}: {
  id: number;
  bookId: number;
}) => {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input name="reviewId" value={id} hidden readOnly />
      <input name="bookId" value={bookId} hidden readOnly />
      <button type="submit" disabled={isPending}>
        {isPending ? "삭제 중..." : "삭제하기"}
      </button>
    </form>
  );
};

export default ReviewItemDeleteButton;
