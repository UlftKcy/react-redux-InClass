import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { sellPhone } from '../redux2/actions/actions';

const PhoneComp = () => {
    const numberOfPhones = useSelector((state)=>state.phone.numberOfPhones)
    const dispatch = useDispatch()
    const [number,setNumber] = useState(1) 

    return(
        <div className="container">
            <h2>Phones -- Hooks--</h2>
            <h3>Number Of Phones : {numberOfPhones}</h3>
            <input
                type="number"
                value = {number}
                onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(sellPhone(number))}>Sell Phones</button>
        </div>
    )
}
export default PhoneComp;