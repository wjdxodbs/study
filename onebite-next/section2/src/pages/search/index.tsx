import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Search() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <h1>검색 페이지 {id}</h1>;
}

Search.getLayout = (page: ReactNode) => (
  <SearchableLayout>{page}</SearchableLayout>
);
