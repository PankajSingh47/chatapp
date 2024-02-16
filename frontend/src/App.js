
import './App.css';
import { useState } from 'react';

function Mybutton({count,onClick}){
  

  return(
    <>
    <button onClick={onClick}>
      click on me {count} + count times
    </button>
    </>
  )
}

function Greetings({name}){
  return(
    <>
    <h1 className='greeting'>hello dear... {name}</h1>
    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const Listitems=products.map(product=>
  <li key={product.key}>
    {product.title}
  </li>
)

function App() {

  const [count,setcount] = useState(0);

  function handleclick(){
    setcount(count+2)
  }

  return (
    <>
    <div className='App'>
    <Mybutton count={count} onClick={handleclick}/>
    <Mybutton count={count} onClick={handleclick}/>
    
     </div>
    </>
  );
}

export default App;
