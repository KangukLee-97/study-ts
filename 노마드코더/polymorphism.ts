// polymorphism(다형성): 다양한 형태를 가질 수 있는 속성

{
  type SuperPrint = {
    (arr: number[]): void;
    (arr: boolean[]): void;
    (arr: string[]): void;
  };

  const superPrint: SuperPrint = (arr) => {
    arr.forEach((i) => console.log(i));
  };

  superPrint([1, 2, 3, 4]);
  superPrint([true, false, true, true]);
  superPrint(['a', 'b', 'c']);

  /*
    여러 형태의 매개변수를 받을 때마다 type에 추가해줘야 할까?
    위의 코드는 효율적이지 않은 코드이다!
    superPrint([1, 2, true, false]) => 다음과 같은 코드를 실행시키고 싶다면?
    => Generic를 사용하자! (제네릭: type의 placeholder)

    call signature에서 어떤 type을 사용해야 할 지 모르겠을 때 Generic 사용
  */
}

{
  type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  }; // 타입스크립트한테 타입을 유추해달라고 요청한 것!

  const superPrint: SuperPrint = (arr) => arr[0];

  const a = superPrint([1, 2, 3, 4]);
  const b = superPrint([true, false, true, true]);
  const c = superPrint(['a', 'b', 'c']);
  const d = superPrint([1, 2, true, false]); // number | boolean으로 받아줌!
}
