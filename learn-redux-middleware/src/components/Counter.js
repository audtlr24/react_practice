import React, {useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increaseAsync,decreaseAsync} from '../modules/counter_saga'

const Counter = ()=>{

    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=>dispatch(increaseAsync()),[dispatch]);
    const onDecrease = useCallback(()=>dispatch(decreaseAsync()),[dispatch]);

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
};

export default Counter;