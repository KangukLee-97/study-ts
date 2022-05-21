{
  let user: object;

  user = {
    name: 'xx',
    age: 30,
  };

  // console.log(user.name); // Error!
  // object에는 특정 속성 값에 대한 정보가 없기 때문에 에러가 발생!
  // property를 사용해서 객체를 표현하고자 할 때 interface를 사용한다!
}

{
  type Score = 'A' | 'B' | 'C' | 'F';

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
  }

  let user: User = {
    name: 'kanguk',
    age: 26,
    birthYear: 2000,
    1: 'A',
    2: 'B',
  };

  user.age = 10;
  user.gender = 'male';
  // user.birthYear = 1997;   // 읽기 전용 속성이기 때문에 수정x

  console.log(user.age);
  console.log(user.gender);
  console.log(user[1]);
}
