import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/BookListSkeleton";
import { BookData } from "@/types";
import { Suspense } from "react";

async function SearchBooks({ q }: { q: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`
  );
  if (!res.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const searchBooks: BookData[] = await res.json();

  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense key={q} fallback={<BookListSkeleton count={2} />}>
      <SearchBooks q={q || ""} />
    </Suspense>
  );
}
