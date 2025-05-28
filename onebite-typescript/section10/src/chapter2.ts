// Pick
// 뽑다, 고르다
// 특정 프로퍼티만 선택적으로 가져오는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '제목',
  content: '내용',
};

// Omit
// 빼다, 생략하다
// 특정 프로퍼티만 제외하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
  tags: ['tag1', 'tag2'],
  content: '내용',
  thumbnailURL: 'URL',
};

// Record

type Record<K extends keyof any, T> = {
  [key in K]: T;
};

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;
