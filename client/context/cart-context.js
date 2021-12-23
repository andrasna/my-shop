import { useReducer, createContext } from 'react'

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

const CartContext = createContext()

function CartContextContainer({children}) {
  const [cart, cartAction] = useReducer(cartReducer, new Map())

  return(
    <CartContext.Provider value={{cart, cartAction}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextContainer }