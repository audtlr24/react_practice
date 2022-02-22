import React, { useEffect, useState, useCallback } from 'react';

const App = ()=>{

  const [test, setTest] = useState('test');

  useEffect(()=>{
    console.log('useEffect');
  });

  const onClick = ()=>{
    console.log('click');
    clickEvent();
    console.log(test);
  }

  const clickEvent = useCallback(()=>{
    console.log('click2');
  },[])

  return(
    <div>
      <div>test</div>
      <button onClick={onClick}>btn</button>
    </div>
  )
}

export default App;
