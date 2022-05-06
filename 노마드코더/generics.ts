/**
 * Generic은 내가 요구한 대로 signature를 생성해줄 수 있는 도구이다.
 */
{
  type SuperPrint = <T, M>(a: T[], b: M) => T;

  const superPrint: SuperPrint = (a) => a[0];

  const a = superPrint([1, 2, 3, 4], 'x');
  const b = superPrint([true, false, true, true], 1);
  const c = superPrint(['a', 'b', 'c'], false);
  const d = superPrint([1, 2, true, false], 'hello');
}

{
  //  위의 코드를 조금 더 간단하게 작성!
  function superPrint<V>(a: V[]) {
    return a[0];
  }

  const a = superPrint([1, 2, 3, 4]);
  const b = superPrint([true, false, true, true]);
  const c = superPrint(['a', 'b', 'c']);
  const d = superPrint([1, 2, true, false]);
}

{
  type Player<E> = {
    name: string;
    extraInfo: E;
  };
  type KangukExtra = {
    favFood: string;
  };
  type KangukPlayer = Player<KangukExtra>;

  const kanguk: KangukPlayer = {
    name: 'kanguk',
    extraInfo: {
      favFood: 'kimchi',
    },
  };

  const kanguk2: Player<null> = {
    name: 'kanguk2',
    extraInfo: null,
  };
}

{
  type A = Array<number>;

  let a: A = [1, 2, 3, 4, 5];

  function printAllNumbers(arr: Array<number>) {
    // Array<number> = number[]
  }
}
