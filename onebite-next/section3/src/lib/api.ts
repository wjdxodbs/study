import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function api(url: string, options?: RequestInit) {
  try {
    const res = await fetch(`${BASE_URL}${url}`, options);

    if (!res.ok) {
      if (res.status === 404) {
        notFound();
      }

      throw new Error(`HTTP Error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    // notFound()가 던진 에러인지 확인
    if (error && typeof error === "object" && "digest" in error) {
      throw error;
    }

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    // HTTP 에러인 경우 원래 에러 메시지 그대로 전달
    if (errorMessage.startsWith("HTTP Error!")) {
      throw error;
    }

    // 네트워크 에러 등 기타 에러는 별도 메시지 설정
    throw new Error(`Network Error: ${errorMessage}`);
  }
}
