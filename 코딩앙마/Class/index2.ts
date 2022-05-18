// 접근 제한자: public, private, protected
// JS에서는 접근 제한자를 지원하지 않았지만 TS에서는 지원함

// Public: 자식 클래스 및 클래스 인스턴스에서 모두 사용 가능하다.
// Private: 해당 클래스 내부에서만 사용 가능하다. (변수 앞에 #도 가능)
// Protected: 자식 클래스에서만 사용 가능하다.

class Car3 {
  name: string = 'car';
  #name2: string = 'car2'; // private 상태
  color: string;
  static wheels = 4; // 정적 변수 -> this가 아닌 class명으로 사용
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
    // console.log(this.wheels); -> static 변수는 this가 아닌 class로
    console.log(Car3.wheels);
  }
}

class Bmw extends Car3 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw('black');
z4.name = 'zzzzzz'; // 수정 안하고 싶으면 readonly 속성 추가
