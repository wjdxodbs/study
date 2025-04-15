import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = "http://localhost:12345/book";

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
