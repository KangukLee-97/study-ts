{
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (x, y) => {
    return x + y;
  };

  console.log(add(1, 2));

  interface IsAdult {
    (age: number): boolean;
  }

  const a: IsAdult = (age) => {
    return age > 19;
  };

  console.log(a(20));
}
