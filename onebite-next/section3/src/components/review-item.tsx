import ReviewItemDeleteButton from "./review-item-delete-button";
import style from "./review-item.module.css";
import { ReviewData } from "@/types";

export const ReviewItem = ({ review }: { review: ReviewData }) => {
  const { content, author, createdAt, id, bookId } = review;

  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <ReviewItemDeleteButton id={id} bookId={bookId} />
      </div>
    </div>
  );
};
