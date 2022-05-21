// implements

{
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const benz: Benz = {
    color: 'yellow',
    wheels: 6,
    door: 5,
    start() {
      console.log('Go!');
    },
    stop() {
      console.log('stop!');
    },
  };

  class Bmw implements Car {
    color;
    wheels = 4;

    constructor(c: string) {
      this.color = c;
    }
    start() {
      console.log('Go!');
    }
  }

  const b = new Bmw('green');
  console.log(b);
  b.start();
}

{
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }
  interface Toy {
    name: string;
  }

  interface ToyCar extends Car, Toy {
    price: number;
  }
}
