export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>검색 페이지</h1>
      {children}
    </div>
  );
}
