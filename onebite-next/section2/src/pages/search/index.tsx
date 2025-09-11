import BookItem from "@/components/BookItem";
import SearchableLayout from "@/components/SearchableLayout";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react";
import fetchBooks from "@/lib/fetch-books";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;

  const books = await fetchBooks(q as string);

  return {
    props: { books },
  };
};

export default function Search({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => (
  <SearchableLayout>{page}</SearchableLayout>
);
