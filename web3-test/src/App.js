//import './App.css';

import { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {

  const [web3,setWeb3] = useState();

  useEffect=(()=>{
    const web3 = new Web3(window.ethereum);
    setWeb3(web3);
  },[]);

  const onClick = ()=>{
    web3.eth.getAccounts()
    .then(console.log);
  }

  return (
    <div className="App">
      <h1>aaa</h1>
      <button onClick={onClick}></button>
    </div>
  );
}

export default App;
