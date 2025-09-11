import { BookData } from "@/types";

export default async function fetchBook(id: string): Promise<BookData | null> {
  try {
    const res = await fetch(`http://localhost:12345/book/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch book");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
