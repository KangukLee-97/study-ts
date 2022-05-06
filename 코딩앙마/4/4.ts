'use strict';

// 4. 함수
{
  function add(num1: number, num2: number): void {
    console.log(num1 + num2);
  }

  function isAdult(age: number): boolean {
    return age > 19;
  }

  // Optional parameter -> ?를 사용하면 parameter 안써도 됨.
  function hello(name?: string) {
    return `Hello, ${name || 'world'}`; // name이 없으면 world를 출력하는 코드
  }

  function hello2(name = 'world') {
    return `Hello, ${name}`;
  }

  const result = hello();
  const result2 = hello('Sam!');
}
