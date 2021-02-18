import { FC } from 'react';
import { BasketType, ProduictItemMapType } from '../type/componentsTypes';
import ProductItem from './ProductItem';

const product = [
  {
    name: 'Banana',
    price: 2.23
  },
  {
    name: 'Cola',
    price: 6
  },
  {
    name: 'Chripsy',
    price: 5.99
  }
];

const ProductList: FC<BasketType> = ({ basket, setBasket }) => (
  <ul className="products">
    {product.map(({ name, price }: ProduictItemMapType) => (
      <ProductItem key={name + price} name={name} price={price} basket={basket} setBasket={setBasket} />
    ))}
  </ul>
);

export default ProductList;
