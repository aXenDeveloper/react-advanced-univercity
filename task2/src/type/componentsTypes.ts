export type ProduictItemMapType = {
  name: string;
  price: number;
};

export type ProductItemType = {
  name: string;
  price: number;
  basket: number;
  setBasket(el: number): void;
};

export type BasketType = {
  basket: number;
  setBasket(el: number): void;
};
