import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에서 사용할 데이터를 가져올 수 있음
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
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
