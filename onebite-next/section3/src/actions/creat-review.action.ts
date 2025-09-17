"use server";

import { revalidatePath } from "next/cache";

export const createReviewAction = async (form: FormData) => {
  const bookId = form.get("bookId")?.toString();
  const content = form.get("content")?.toString();
  const author = form.get("author")?.toString();

  if (!bookId || !content || !author) {
    return;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    if (!res.ok) {
      throw new Error("리뷰 작성에 실패했습니다.");
    }
    console.log(res.status);

    revalidatePath(`/book/${bookId}`);
  } catch (error) {
    console.error(error);
    return;
  }
};
