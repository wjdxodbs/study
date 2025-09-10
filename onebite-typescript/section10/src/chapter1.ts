// Partial
// 부분적인, 일부분의
// 모든 프로퍼티가 선택적(?)이 되는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: '제목',
  content: '내용',
};

// Required
// 필수의, 필수적인
// 모든 프로퍼티가 필수적이 되는 타입

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnail: Required<Post> = {
  title: '제목',
  tags: ['tag1', 'tag2'],
  content: '내용',
  thumbnailURL: 'URL',
};

// Readonly
// 읽기 전용의
// 모든 프로퍼티가 읽기 전용이 되는 타입

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '제목',
  tags: ['tag1', 'tag2'],
  content: '내용',
  thumbnailURL: 'URL',
};

// readonlyPost.title = '제목2';
