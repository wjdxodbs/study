// 프로미스
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject('에러 발생');
  }, 3000);
});

promise
  .then((value) => {
    console.log(value * 10);
  })
  .catch((error) => {
    if (typeof error === 'string') {
      console.log(error);
    }
  });

// 프로미스를 반환하는 함수 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchData(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 내용',
      });
    }, 1000);
  });
}

fetchData()
  .then((post) => {
    console.log(post.title);
  })
  .catch((error) => {
    console.log(error);
  });
