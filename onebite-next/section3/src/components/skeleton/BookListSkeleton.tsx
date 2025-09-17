import BookItemSkeleton from "./BookItemSkeleton";

export default function BookListSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <BookItemSkeleton key={index} />
      ))}
    </>
  );
}
