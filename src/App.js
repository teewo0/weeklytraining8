// import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Products from './components/Products';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isLog, setIsLog] = useState(false);

  



  // const url = 'https://randomuser.me/api/?results=30';


    const handleClick = () => {
        setCount(count + 1);

    }

  const handleLogClick = () => {
    setIsLog(!isLog);
  }

  return (
    <div className="App">
      <First />

      <Products />

      {/* {isLog  ? <p>We are logged In</p> : <p>You are logged Out, Please sign In</p>}
      <button onClick={handleLogClick}>{isLog ? <span>logout</span> : <span>Log In</span>}</button> */}

      <Products count={count} handleClick={handleClick} />

      {isLog  ? <p>you have no items in your cart</p> : <p>Too much money in the bag</p>}
      <button onClick={handleLogClick}>Cart</button>

      
    </div>
  );
}

export default App;
