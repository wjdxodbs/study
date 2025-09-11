export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const params = await searchParams;
  console.log(params);

  return <div>검색 페이지 : {params.q}</div>;
}
