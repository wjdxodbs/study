import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Modal>
      <BookPage params={params} />
    </Modal>
  );
}
