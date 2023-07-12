import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { toggleLike } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(produce.id))
  }

  const handleToggleLike = (e) => {
    e.preventDefault()
    dispatch(toggleLike(produce.id))
  }
  
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button onClick={handleToggleLike}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button type="submit" onClick={handleSubmit}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;