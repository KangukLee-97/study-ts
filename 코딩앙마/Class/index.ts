//  다음과 같이 constructor 앞에 변수를 선언해주거나
//  constructor의 매개변수란에서 접근 제한자와 함께 선언해줘도 무방하다.

class Car1 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

class Car2 {
  constructor(public color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

const bmw = new Car1('red');
