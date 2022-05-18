interface User_ {
  name: string;
  age: number;
}

interface Car_ {
  name: string;
  color: string;
}

interface Book_ {
  price: number;
}

const user_: User_ = { name: 'a', age: 10 };
const car_: Car_ = { name: 'bmw', color: 'black' };
const book_: Book_ = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user_);
showName(car_);
// showName(book_); -> T extends { name: string }

// book_에는 name property가 없다.
// T extends { name: string }: name property를 가지고 있는 type만 가능하다는 뜻
