{
  interface User {
    name: string;
  }

  const Sam: User = { name: 'Sam' };

  function showName(this: User, age: number, gender: 'm' | 'f') {
    console.log(this.name, age, gender);
  }

  const a = showName.bind(Sam);
  a(30, 'm');
}
