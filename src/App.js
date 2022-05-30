import { useSelector, useDispatch } from 'react-redux'

import {incNumber, decNumber} from './actions'

function App() {

  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()

const handleAdd = () => {
  dispatch(incNumber(1))
}

const handleSub = () => {
  dispatch(decNumber(1))
}

  return (
    <div className="App">
      <div className="container">

        <div className="plus" onClick={handleAdd}>+</div>
        <div className="counter">{count}</div>
        <div className="minus" onClick={handleSub}>-</div>

      </div>
    </div>
  );
}

export default App;
