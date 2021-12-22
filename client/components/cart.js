import { useEffect, useReducer } from 'react'

function addToCart(cart, key) {
  if (cart.has(key)) {
    return new Map(
      [...cart, [key, {count: cart.get(key).count + 1}]]
    )
  }

  return new Map([[key, {count: 1}], ...cart])
}

function removeFromCart(cart, key) {
  cart.delete(key)

  return new Map(cart)
}

function cartReducer(cart, action) {
  switch (action.type) {
    case 'add':
      return addToCart(cart, action.payload)
    case 'remove':
      return removeFromCart(cart, action.payload)
  }
}

function Cart() {
  const [cart, cartAction] = useReducer(cartReducer, new Map())

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-add-to-cart')) {
        const isbn = e.target.getAttribute('data-isbn') 

        cartAction({
          type: 'add',
          payload: isbn,
        })
      }

      if (e.target.classList.contains('js-remove-from-cart')) {
        const isbn = e.target.getAttribute('data-isbn') 

        cartAction({
          type: 'remove',
          payload: isbn,
        })
      }

    })
  }, [])

  return (
    <ul>  
      {[...cart].map((item) => (
        <li key={item[0]}>
          <p>{`isbn: ${item[0]}, count: ${item[1].count}`}</p>
          <button data-isbn={item[0]} className="js-remove-from-cart">Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default Cart