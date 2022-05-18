// 추상 클래스
// 추상 클래스는 new를 통해서 객체를 만들 수 없음. 오로지 상속된 곳에서만 가능!
// 추상 메서드는 상속된 곳에서 꼭 수정을 거쳐야함. 선언 필수!

abstract class Car4 {
  name: string = 'car';
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void; // 추상 메서드 -> 상속받은 곳에서 선언해줘야한다.
}

// const car = new Car4('red');  -> 추상 클래스는 new를 통해서 객체를 만들 수 없음.

class Bmw2 extends Car4 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
  doSomething() {
    alert(3);
  }
}
