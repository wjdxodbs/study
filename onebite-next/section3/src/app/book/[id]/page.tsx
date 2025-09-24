import { BookData, ReviewData } from "@/types";
import { ReviewItem } from "@/components/review-item";
import ReviewEditor from "@/components/review-edtior";
import Image from "next/image";
import { Metadata } from "next";
import { api } from "@/lib/api";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
//   );

//   if (!res.ok) {
//     throw new Error(`Book fetch failed : ${res.statusText}`);
//   }

//   const book: BookData = await res.json();

//   return {
//     title: `도서 ${book.title}`,
//     description: `${book.description}`,
//     openGraph: {
//       title: `도서 ${book.title}`,
//       description: `${book.description}`,
//       images: [book.coverImgUrl],
//     },
//   };
// }

async function BookDetail({ id }: { id: string }) {
  const book: BookData = await api(`/book/${id}`);

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section className="flex flex-col gap-2.5">
      <div
        className="flex justify-center p-5 bg-center bg-cover bg-no-repeat relative before:absolute before:inset-0 before:bg-black/70"
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <Image
          src={coverImgUrl}
          alt={`도서 ${title}의 표지`}
          width={240}
          height={300}
          className="z-1"
        />
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="text-gray-400">{subTitle}</div>
      <div className="text-gray-400">
        {author} | {publisher}
      </div>
      <div className="bg-gray-100 p-4 whitespace-pre-line rounded-md">
        {description}
      </div>
    </section>
  );
}

async function ReviewList({ bookId }: { bookId: string }) {
  const reviews: ReviewData[] = await api(`/review/book/${bookId}`, {
    next: {
      tags: [`review-${bookId}`],
    },
  });

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-12">
      <BookDetail id={id} />
      <ReviewEditor bookId={id} />
      <ReviewList bookId={id} />
    </div>
  );
}
