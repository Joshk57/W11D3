import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decrementCart } from '../../store/cart';


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(removeFromCart(item.id))
  }

  const handleIncrement = (e) => {
    e.preventDefault()

    dispatch(addToCart(item.id))
  }

  const handleDecrement = (e) => {
    e.preventDefault()

    dispatch(decrementCart(item.id))
  }
  // useEffect((e) => {
  //   dispatch(removeFromCart(e.item.id))
  // },[handleSubmit])


  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button onClick={handleIncrement}
          className="cart-item-button"
        >
          +
        </button>
        <button onClick={handleDecrement}
          className="cart-item-button"
        >
          -
        </button>
        <button onClick={handleSubmit}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;