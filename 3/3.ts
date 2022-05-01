'use strict';

// 3. Interface
{
  type Score = 'A' | 'B' | 'C' | 'F';

  interface User {
    name: string;
    age: number;
    gender?: string; // optional property
    readonly birthYear: number; // 읽기 전용 속성
    [grade: number]: Score;
  }

  let user: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
    3: 'a', // 불가능! interface에서 타입이 Score이기 때문.
  };

  user.age = 10;
  user.gender = 'male';
  // user.birthYear = 1990; -> 수정 불가! (readonly)
}

{
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (x, y) => {
    return x + y;
  };

  add(10, 20);

  interface IsAdult {
    (age: number): boolean;
  }

  const a: IsAdult = (age) => {
    return age > 19;
  };

  a(33); // true
}

{
  // interface로 class를 정의 -> implements
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const benz: Benz = {
    door: 5,
    stop() {
      console.log('stop!');
    },
    color: 'black',
    wheels: 10,
    start() {
      console.log('start benz!');
    },
  };

  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }

    start() {
      console.log('Go!');
    }
  }

  const b = new Bmw('green');
  console.log(b); // { wheels: 4, color: green }
  b.start(); // Go!
}

{
  // 여러개의 interface도 상속이 가능하다!
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  interface Toy {
    name: string;
  }

  interface ToyCar extends Car, Toy {
    price: number;
  }
}
