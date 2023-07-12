import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';

function ProduceList() {
  // const dispatch = useDispatch()
  const produce = useSelector(state => state.produce);

  const produceArr = Object.values(produce);

  // const toggleLike = (e) => {
  //   e.preventDefault();
  //   debugger
  //   dispatch(addToCart(e.target.key))
  // }
  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;