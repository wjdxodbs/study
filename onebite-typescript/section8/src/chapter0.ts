// 인덱스드 엑세스 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[0]['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '이정환',
    age: 20,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
