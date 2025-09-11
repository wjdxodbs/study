"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  // const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (search.trim() === "") return;
  //   router.push(`/search?q=${search}`);
  // };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <input
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
        value={search}
      />
      <button type="submit">검색</button>
    </form>
  );
}
