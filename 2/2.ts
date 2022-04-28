'use strict';

// 2. 기본 타입

{
  let car: string = 'bmw';
  car = 'benz'; // 수정 가능
  // car = 3; -> 수정 불가능 (type 불일치)
  // 선언해줄 때 굳이 type 안붇혀도 된다.
}

{
  let age: number = 30;
  let isAdult: boolean = true;
  let a: number[] = [1, 2, 3];
  let a2: Array<number> = [1, 2, 3];
  let s: string[] = ['hello', 'world'];
  let s2: Array<string> = ['hello', 'world'];
  // a.push('hello!'); -> a는 숫자 배열이기 때문에 에러 발생
}

{
  // 튜플(tuple): 요소의 타입과 개수가 고정된 배열
  // index 별로 타입이 다를 때 주로 사용한다.
  let b: [string, number];
  b = ['z', 1];
  // b = [1, 'z']; -> 선언해준 것과 타입이 맞지않아 에러 발생;
}

{
  // void, never
  // void는 아무것도 반환을 하지 않는 곳에 표시 가능
  // 변수는 undefined와 null에만 할당 가능
  // never는 항상 에러를 발생시키거나 영원히 끝나지 않는 것에 표시 가능

  let temp: void = undefined; // 가능!
  /// let temp2: void = 'hello!';   // 불가능!

  function showError(): void {
    throw new Error();
  }
  function showError2(): never {
    throw new Error();
  }
  function infLoop(): never {
    while (true) {
      // do something...
    }
  }
}

{
  // enum: 비슷한 값들끼리 묶여져 있는 것
  // JS에는 없는 Type
  enum Os {
    Window = 3,
    Ios = 10,
    Android, // 자동으로 11
  }

  console.log(Os[10]); // "Ios"
  console.log(Os['Ios']); // 10

  enum Os2 {
    Window = 'win',
    Ios = 'ios',
    Android = 'and',
  }

  let myOs: Os;
  myOs = Os.Window;
  console.log(myOs); // win
}

{
  // null과 undefined
  let a: null = null;
  let b: undefined = undefined;
}

{
  // Any: 모든 타입에 대해서 허용하는 것
  let a: any = 'hi';
  let b: any = 2;
  let c: any = true;
}
