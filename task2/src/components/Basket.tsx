import { FC } from 'react';
import { BasketType } from '../type/componentsTypes';

const Basket: FC<BasketType> = ({ basket }) => {
  const rounPrice = Math.round(basket * 100) / 100;
  return <div className="basket">{rounPrice} zł</div>;
};

export default Basket;
