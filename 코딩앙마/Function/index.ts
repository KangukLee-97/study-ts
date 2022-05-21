{
  function hello(name?: string) {
    return `Hello, ${name || 'world'}`;
  }

  function hello2(name = 'world') {
    return `Hello, ${name}`;
  }

  const result = hello();
  const result2 = hello('kanguk');
}

{
  function hello(name: string, age?: number) {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age}.`;
    } else {
      return `Hello, ${name}`;
    }
  }
}
