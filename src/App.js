
import './App.css';
import {useReducer, useState} from "react";
import {Cats} from "./components/Сats"
import {Dogs} from "./components/Dogs";

const reducer = (state, action) => {
  switch (action.type){
    case 'cat':
      return{...state, cats:[...state.cats, action.payload]}
    case 'dog':
      return{...state,dogs:[...state.dogs, action.payload]}
  }
}

function App() {
  const[state, dispatch]=useReducer(reducer, {cats:[], dogs:[] })
  const[catName, setCatName]=useState('')
  const [dogName, setDogName]=useState('')
  return (
    <div className="App">
      <div className="inputs">
        <div className="cats-input">
          <label>Cats :<input onChange={event => setCatName(event.target.value)} type="text"/> </label>
          <button onClick={()=>dispatch({type: 'cat', payload: catName})}>Send Cat</button>
        </div>
        <div className="dogs-input">
          <label>Dogs :<input onChange={event => setDogName(event.target.value)} type="text"/></label>
          <button onClick={()=> dispatch({type: 'dog', payload: dogName})}>Send Dog</button>
        </div>
        <div className="pets">
          <div className="cats">
            <h2>Cats List:</h2>
            {state.cats.map(cat=>< Cats cat={cat}/>)}
          </div>
          <div className="dogs">
            <h2>Dogs List:</h2>
            {state.dogs.map(dog=>< Dogs dog={dog}/> )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
