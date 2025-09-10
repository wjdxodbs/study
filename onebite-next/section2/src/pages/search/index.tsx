import SearchableLayout from "@/components/SearchableLayout";
// import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context.query);
  // const { q } = context.query;

  // const books = await fetchBooks(q as string);

  return {
    props: {},
  };
};

export default function Search() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <h1>검색 페이지 {id}</h1>;
}

Search.getLayout = (page: ReactNode) => (
  <SearchableLayout>{page}</SearchableLayout>
);
