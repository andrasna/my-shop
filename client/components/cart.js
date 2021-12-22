function Cart({cart}) {
  return (
    <ul>  
      {[...cart].map((item) => (
        <li key={item[0]}>{`isbn: ${item[0]}, qty: ${item[1].qty}`}</li>
      ))}
    </ul>
  );
}

export default Cart