import style from "./[id].module.css";
import { GetStaticPropsContext } from "next";
import fetchBook from "@/lib/fetch-book";
import { InferGetStaticPropsType } from "next";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchBook(id as string);
  return { props: { book } };
};

export default function Book({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!book) {
    return <div>Book not found</div>;
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: `url(${coverImgUrl})` }}
        className={style.cover_img_container}
      >
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
