import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/BookListSkeleton";
import { Metadata } from "next";
import { api } from "@/lib/api";

// export const dynamic = "force-dynamic";
// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// auto : 기본값, 아무것도 강제하지 않음
// force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정
// force-static : 페이지를 강제로 Static 페이지로 설정
// error : 페이지를 강제로 Static 페이지로 설정 (설정하면 안되는 이유 -> 빌드 오류)

export const metadata: Metadata = {
  title: "한입 북스",
  description: "한입 북스에 등록된 도서를 만나보세요",
  openGraph: {
    title: "한입 북스",
    description: "한입 북스에 등록된 도서를 만나보세요",
    images: ["/thumbnail.png"],
  },
};

async function AllBooks() {
  const allBooks: BookData[] = await api(`/book`);

  return (
    <>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}

async function RecoBooks() {
  const recoBooks: BookData[] = await api(`/book/random`, {
    next: { revalidate: 3 },
  });

  return (
    <>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h3 className="text-lg font-bold">지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={2} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3 className="text-lg font-bold">등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={2} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
