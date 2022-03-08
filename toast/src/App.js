import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { sendToIpfs } from './ipfs';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App(){

  const notify = () => {
    toast.promise(
      sendToIpfs('test string'),
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
    )
  }
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default App;