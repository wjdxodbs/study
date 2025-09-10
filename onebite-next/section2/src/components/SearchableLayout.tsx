import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styles from "./SearchableLayout.module.css";

interface Props {
  children: ReactNode;
}

export default function SearchableLayout({ children }: Props) {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const q = router.query.q as string;

  useEffect(() => {
    if (q) setSearch(q);
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "" || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <form className={styles.searchbar_container} onSubmit={onSubmitSearch}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChangeSearch}
          value={search}
        />
        <button type="submit">검색</button>
      </form>
      {children}
    </div>
  );
}
