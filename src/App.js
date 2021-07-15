import {useState} from 'react';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';

function App() {
  //let cout = 1;
  const [count, setCount] = useState(0)
  const handleClick = () => {
  //count += 1;
  setCount(pState => pState +=1)

  }
  return (
    <div>
      <p> Você clicou {count} vezes</p>
      <button onClick = {handleClick}>
      Clique Aqui!
      </button>
     
    </div>
  );
}

export default App;
