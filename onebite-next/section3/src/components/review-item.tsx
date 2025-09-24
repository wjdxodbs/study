import ReviewItemDeleteButton from "./review-item-delete-button";
import { ReviewData } from "@/types";

export const ReviewItem = ({ review }: { review: ReviewData }) => {
  const { content, author, createdAt, id, bookId } = review;

  return (
    <div className="flex flex-col gap-1.5 py-4">
      <div className="text-sm">{author}</div>
      <div className="py-4 px-2.5 bg-gray-100 rounded-md">{content}</div>
      <div className="flex gap-2.5 text-gray-400 text-sm">
        <div>{new Date(createdAt).toLocaleString()}</div>
        <ReviewItemDeleteButton id={id} bookId={bookId} />
      </div>
    </div>
  );
};
