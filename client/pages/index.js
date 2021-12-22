import { useReducer } from 'react'
import Head from 'next/head'
import Cart from '../components/cart'
import Products from '../components/products'

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

function Home() {
  const [cart, cartAction] = useReducer(cartReducer, new Map())

  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The Book Shop</h1>

        <h2>Cart</h2>

        <Cart cart={cart} />

        <h2>Books</h2>

        <Products cartAction={cartAction} />
      </main>
    </>
  )
}

export default Home
