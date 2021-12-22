import { useState, useEffect } from 'react'

function Products() {
  const [products, setProducts] = useState([]);

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
            <button data-isbn={item.isbn} className="js-add-to-cart">
              Add to cart
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Products