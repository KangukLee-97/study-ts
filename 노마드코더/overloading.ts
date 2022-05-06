// Overloading: 함수가 서로 다른 여러개의 call-signature를 가지고 있을 때 발생!

{
  type Add = {
    // call signature
    (a: number, b: number): number;
    (a: number, b: string): number;
  };

  const add: Add = (a, b) => {
    if (typeof b === 'string') return a;
    else return a + b;
  };
}

{
  type Config = {
    path: string;
    state: object;
  };
  type Push = {
    (path: string): void;
    (config: Config): void;
  };

  // config에는 path라는 string 또는 config라는 Config type를 보낼 수 있다
  // 이럴 경우에는 typeof를 이용해서 구분한다.
  const push: Push = (config) => {
    if (typeof config === 'string') {
      console.log(config);
    } else {
      console.log(config.path, config.state);
    }
  };
}

{
  // 매개변수 갯수가 다를 경우!
  type Add = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number; // 마지막 c는 optional
  };

  const add: Add = (a, b, c?: number) => {
    if (c) return a + b + c;
    else return a + b;
  };

  add(1, 2);
  add(1, 2, 3);
}
