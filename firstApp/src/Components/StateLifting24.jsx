import React, { useState } from 'react'
import Btn from './Btn';
import Display from './Display';

const StateLifting24 = () => {
    let [c, setC] = useState(0);
    let inc = () => setC(c + 1)
    let dec = () => c == 0 ? setC(0) : setC(c - 1)
    let reset = () => setC(0)
    return (
        <div>
            <Display c={c} />
            <Btn label="Increment" fun={inc} cn="Btn1" />
            <Btn label="Decrement" fun={dec} cn="Btn2" />
            <Btn label="Reset" fun={reset} cn="Btn3" />
        </div>
    )
}

export default StateLifting24