import { useContext } from 'react'
import { CartContext } from '../context/cart-context'

function Cart() {
  const {cart, cartAction} = useContext(CartContext)

  return (
    <ul>  
      {[...cart].map((item) => (
        <li key={item[0]}>
          <p>{`isbn: ${item[0]}, count: ${item[1].count}`}</p>

          <button
            onClick={() => {
              cartAction({
                type: 'remove',
                payload: item[0],
              })}
            }
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Cart