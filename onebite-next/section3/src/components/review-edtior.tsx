import { createReviewAction } from "@/actions/creat-review.action";
import style from "./review-edtior.module.css";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form action={createReviewAction} className={style.form_container}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성</button>
        </div>
      </form>
    </section>
  );
}
