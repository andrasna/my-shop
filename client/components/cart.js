import { useEffect, useReducer } from 'react'

function addToCart(cart, newItem) {
  const [key, obj] = newItem

  if (cart.has(key)) {
    return new Map(
      [...cart, [key, {qty: obj.qty + cart.get(key).qty}]]
    )
  }

  return new Map([newItem, ...cart])
}

function cartReducer(cart, action) {
  switch (action.type) {
    case 'add':
      return addToCart(cart, action.payload);
    case 'remove':
    // call remove function
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
          payload: [isbn, { qty: 1 }]
        })
      }
    })
  }, [])

  return (
    <ul>  
      {[...cart].map((item) => (
        <li key={item[0]}>{`isbn: ${item[0]}, qty: ${item[1].qty}`}</li>
      ))}
    </ul>
  );
}

export default Cart