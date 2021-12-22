import Head from 'next/head'
import Cart from '../components/cart'
import Products from '../components/products'

function Home() {
  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The Book Shop</h1>

        <h2>Cart</h2>

        <Cart />

        <h2>Books</h2>

        <Products />
      </main>
    </>
  )
}

export default Home
