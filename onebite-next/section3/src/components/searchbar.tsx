"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2.5 mb-5">
      <input
        value={search}
        onChange={onChangeSearch}
        className="flex-1 p-4 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-20 bg-blue-400 text-white rounded-md cursor-pointer"
      >
        검색
      </button>
    </form>
  );
}
