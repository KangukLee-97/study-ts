// Intersection Types (교차 타입)

interface Car2 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

// 교차 타입은 여러개의 type을 합쳐준다.
// 따라서 모든 요소들을 넣어줘야 한다.
const toyCar: Toy & Car2 = {
  name: '타요',
  start() {},
  color: 'red',
  price: 1000,
};
