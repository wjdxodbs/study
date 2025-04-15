import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  console.log(id);

  return <h1>책 페이지 {id}</h1>;
}
