// Generic
// 아래와 같이 매개변수에 숫자배열, 문자열배열, boolean배열 등이 올 때마다 타입 선언을 해줘야 하는데 비효율적이다.
// 이 경우 제네릭을 사용한다.

{
  function getSize(arr: number[] | string[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize(arr1); // 3

  const arr2 = ['a', 'b', 'c'];
  getSize(arr2);
}

{
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize(arr1);
}
