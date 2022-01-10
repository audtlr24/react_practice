import React from 'react';
import Web3 from 'web3';

function App() {

  const onClick = async ()=>{
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      console.log(1);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log(2);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }

    const web3 = window.web3;
    const account = await web3.eth.getAccounts().then(function(array)
    {return array[0]});

    console.log(account);

  }

  return (
    <div className="App">
      <p>test!</p>
      <button onClick={onClick}>get account</button>
    </div>
  );
}

export default App;
