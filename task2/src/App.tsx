import { useState } from 'react';
import Basket from './components/Basket';
import Product from './components/Product';

const App = () => {
  const [basket, setBasket] = useState(0);

  return (
    <div className="container">
      <Basket basket={basket} setBasket={setBasket} />
      <Product basket={basket} setBasket={setBasket} />
    </div>
  );
};

export default App;
