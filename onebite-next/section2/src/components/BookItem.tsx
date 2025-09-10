import type { BookData } from "@/types";
import Link from "next/link";
import style from "./BookItem.module.css";

export default function BookItem(props: BookData) {
  const { id, title, subTitle, author, publisher, coverImgUrl } = props;
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt="" />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
