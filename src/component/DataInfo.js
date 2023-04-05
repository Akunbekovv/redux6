import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addInput, clearInput} from "../redux/actions";

const DataInfo = () => {
    const dispatch = useDispatch()
    const [inp, setInp] = useState('')

    const {list} = useSelector(state => state.inputReducer)

    const inputAdd = () => {
        dispatch(addInput(inp))
        setInp('')
    }

    const onChange = ({target}) => {
        setInp(target.value)
    }

    const clear = () => {
        dispatch(clearInput())
    }

    return (
        <div>
            <input type="text" value={inp} onChange={onChange}/>
            <button onClick={inputAdd}>add</button>
            <button onClick={clear}>clear</button>
            <ul style={{listStyle: "none"}}>
                {
                    list.map((e,k)=> <li key={k}>{e}</li>)
                }
            </ul>
        </div>
    );
};

export default DataInfo;