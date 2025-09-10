import BookItem from "@/components/BookItem";
import books from "@/mock/books.json";
import SearchableLayout from "@/components/SearchableLayout";
// import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext } from "next";
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
