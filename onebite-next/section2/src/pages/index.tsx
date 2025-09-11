import SearchableLayout from "@/components/SearchableLayout";
import style from "./index.module.css";
import { ReactNode } from "react";
import { InferGetStaticPropsType } from "next";
import fetchRandomBooks from "@/lib/fetch-random-books";
import fetchBooks from "@/lib/fetch-books";
import BookItem from "@/components/BookItem";
import Head from "next/head";

export const getStaticProps = async () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
  const [allBooks, randomBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, randomBooks },
    revalidate: 10,
  };
};

export default function Home({
  allBooks,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta
          property="og:image"
          content="https://onebite-next.vercel.app/og-image.png"
        />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {randomBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => (
  <SearchableLayout>{page}</SearchableLayout>
);
