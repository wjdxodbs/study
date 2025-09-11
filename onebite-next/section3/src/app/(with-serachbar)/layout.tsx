import SearchBar from "./search/SearchBar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
