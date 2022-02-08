
import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc1':
      return {...state, count1: state.count1 + 1}
    case 'dec1':
      return {...state, count1: state.count1 - 1}
    case 'reset1':
      return {...state, count1: 0}
    case 'inc2':
      return {...state, count2: state.count2 + 1}
    case 'dec2':
      return {...state, count2: state.count2 - 1}
    case 'reset2':
      return {...state, count2: 0}
    case 'inc3':
      return {...state, count3: state.count3 + 1}
    case 'dec3':
      return {...state, count3: state.count3 - 1}
    case 'reset3':
      return {...state, count3: 0}
    default:
      throw new Error('Error')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

  return (
      <div className="App">
        <div className="count1">
          <h2>Count 1</h2>
          <h3>{state.count1}</h3>
          <button onClick={() => dispatch({type: 'inc1'})}>Increment</button>
          <button onClick={() => dispatch({type: 'dec1'})}>Decrement</button>
          <button onClick={() => dispatch({type: 'reset1'})}>RESET</button>
        </div>
        <div className="count2">
          <h2>Count 2</h2>
          <h3>{state.count2}</h3>
          <button onClick={() => dispatch({type: 'inc2'})}>Increment</button>
          <button onClick={() => dispatch({type: 'dec2'})}>Decrement</button>
          <button onClick={() => dispatch({type: 'reset2'})}>RESET</button>
        </div>
        <div className="count3">
          <h2>Count 3</h2>
          <h3>{state.count3}</h3>
          <button onClick={() => dispatch({type: 'inc3'})}>Increment</button>
          <button onClick={() => dispatch({type: 'dec3'})}>Decrement</button>
          <button onClick={() => dispatch({type: 'reset3'})}>RESET</button>
        </div>
      </div>
  );
}

export default App;