// import '../styles/globals.css'
import { CartContextContainer } from '../context/cart-context'

function App({ Component, pageProps }) {
  return(
    <CartContextContainer>
      <Component {...pageProps} />
    </CartContextContainer>
  ) 
}

export default App
