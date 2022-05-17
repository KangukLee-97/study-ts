// Literal Types

const userName1 = 'Bob'; // 문자열 Literal type
let userName2: string | number = 'Tom';

userName2 = 3;

type Job = 'police' | 'developer' | 'teacher';

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: 'Bob',
  // job: 'student', -> 에러 발생! Job type에는 student가 없음
  job: 'police',
};

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3; // |를 유니온 타입이라고 한다.
}
