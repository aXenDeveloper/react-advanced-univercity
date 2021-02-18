import { FC, useState } from 'react';
import { ProductItemType } from '../type/componentsTypes';

const ProductItem: FC<ProductItemType> = ({ name, price, basket, setBasket }) => {
  const [ammount, setAmmount] = useState(0);

  const handleButton = () => {
    setBasket(basket + price);
    setAmmount(ammount + 1);
  };

  return (
    <li className="protucts_item">
      <span className="protucts_item:name">{name}</span>
      <span className="protucts_item:price">{price} zł</span>
      <span className="protucts_item:ammount">({ammount} szt.)</span>
      <button className="protucts_item:button" onClick={handleButton}>
        Add to basket
      </button>
    </li>
  );
};

export default ProductItem;
