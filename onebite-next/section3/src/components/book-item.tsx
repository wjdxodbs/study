import type { BookData } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link
      href={`/book/${id}`}
      className="flex gap-4 py-5 px-2.5 border-b border-gray-300"
    >
      <Image
        src={coverImgUrl}
        width={80}
        height={105}
        alt={`도서 ${title}의 표지`}
      />
      <div>
        <div className="font-bold">{title}</div>
        <div className="break-keep">{subTitle}</div>
        <br />
        <div className="text-gray-400">
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
