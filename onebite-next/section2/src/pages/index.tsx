import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
// import fetchRandomBooks from "@/lib/fetch-random-books";
// import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에서 사용할 데이터를 가져올 수 있음
  // const [allBooks, randomBooks] = await Promise.all([
  //   fetchBooks(),
  //   fetchRandomBooks(),
  // ]);

  const data = "hello";

  return {
    props: { data },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect(() => {
    // 브라우저에서만 실행되는 코드
    console.log(window);
  }, []);

  return <h1 className={style.title}>인덱스 페이지</h1>;
}

Home.getLayout = (page: ReactNode) => (
  <SearchableLayout>{page}</SearchableLayout>
);
