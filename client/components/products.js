import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cart-context'

function Products() {
  const [products, setProducts] = useState([]);
  const {cartAction} = useContext(CartContext)

  useEffect(() => {
    (async () => {
      const url = 'https://fakerapi.it/api/v1/books?_quantity=4';
      const response = await fetch(url);
      const { data } = await response.json();
      setProducts(data);
    })();
  }, []);

  return (
    <ul>
      {products.map((item) => {
        return (
          <li key={item.isbn} className="product">
            <h2>{item.title}</h2>

            <button
              onClick={() => {
                cartAction({
                  type: 'add',
                  payload: item.isbn,
                })}
              }
            >
              Add to cart
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Products