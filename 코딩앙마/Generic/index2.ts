interface Mobile2<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile2<{ color: string; coupon: boolean }> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: Mobile2<string> = {
  name: 's20',
  price: 900,
  option: 'good',
};
