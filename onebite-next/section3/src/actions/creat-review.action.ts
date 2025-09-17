"use server";

import { revalidatePath, revalidateTag } from "next/cache";

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

    // 1. 특정 주소의 해당하는 페이지만 재검증
    // revalidatePath(`/book/${bookId}`);

    // 2. 특정 경로의 모든 동적 페이지를 재검증
    // revalidatePath("/book/[id]", "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지를 재검증
    // revalidatePath("/(with-searchbar)", "layout");

    // 4. 전체 페이지 재검증
    // revalidatePath("/", "layout");

    // 5. 태그 기준, 데이터 캐시를 재검증
    revalidateTag(`review-${bookId}`);
  } catch (error) {
    console.error(error);
    return;
  }
};
