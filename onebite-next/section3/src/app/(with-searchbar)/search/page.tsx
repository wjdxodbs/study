import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/BookListSkeleton";
import { BookData } from "@/types";
import { Suspense } from "react";
import { Metadata } from "next";
import { api } from "@/lib/api";
import styles from "./page.module.css";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}): Promise<Metadata> {
  // 현재 페이지 메타 데이터를 동적으로 생성
  const { q } = await searchParams;

  return {
    title: `검색 결과 - ${q}`,
    description: `검색 결과 - ${q}`,
    openGraph: {
      title: `검색 결과 - ${q}`,
      description: `검색 결과 - ${q}`,
      images: ["/thumbnail.png"],
    },
  };
}

async function SearchBooks({ q }: { q: string }) {
  const searchBooks: BookData[] = await api(`/book/search?q=${q}`);

  if (searchBooks.length === 0) {
    return (
      <div className={styles.noResults}>
        <div className={styles.icon}>📚</div>
        <h3 className={styles.title}>검색된 도서가 없습니다</h3>
        <p className={styles.description}>
          &quot;{q}&quot;에 대한 검색 결과를 찾을 수 없습니다.
          <br />
          다른 키워드로 검색해보세요.
        </p>
      </div>
    );
  }

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
