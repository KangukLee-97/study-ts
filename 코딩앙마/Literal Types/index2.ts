// Union Types

interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  // gift.start(); -> Car에만 start가 있기 때문에 에러 발생

  // 다음과 같이 name을 비교해서 function을 다르게 호출
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}
