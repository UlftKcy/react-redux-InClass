import React from 'react';
import "../App.css";
import {useSelector,useDispatch} from "react-redux";
import {arttır,eksilt,reset} from "../redux/action"; 

const ComponentA = ()=> {
    const myCounter = useSelector((state)=>state.counter)
    const dispatch = useDispatch();
    return (
        <div className="App" style={{backgroundColor:"yellow",height:"35vh"}}>
            <h2>ComponentA</h2>
            <h2>Count: {myCounter}</h2>
            <button onClick={()=>dispatch(arttır())}>ARTTIR</button>
            <button onClick={()=>dispatch(eksilt())}>AZALT</button>
            <button onClick={()=>dispatch(reset())}>RESET
            </button>
        </div>
    )
}
export default ComponentA;

