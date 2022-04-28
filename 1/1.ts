{
  function add(num1: number, num2: number) {
    console.log(num1 + num2);
  }

  add(1, 2);
  /**
   * 아래 3줄의 코드는 에러가 발생하는 코드이다.
   * JS는 아래의 코드를 실행시켜도 에러가 발생하지 않는다.
   * 하지만 TS는 다음 코드에서 에러가 발생한다.
   */
  // add();
  // add(1, 2, 3);
  // add(1, 'hello!');
}

{
  function showItems(arr: number[]) {
    arr.forEach((item) => {
      console.log(item);
    });
  }

  showItems([1, 2, 3]);
  // showItems(1,2,3);   -> 배열이 아니기 때문에 에러 발생
}
