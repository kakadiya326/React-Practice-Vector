import { useState } from "react"
import '../css/card.css'

let StateManager9 = () => {
    let [c, setC] = useState(0)
    let inc = () => setC(c + 1)
    let dec = () => {
        if (c > 0) {
            setC(c - 1)
        }
    }

    return (
        <div className="container">
            <p>{c}</p>
            <div className="btnsCon">
                <button onClick={inc} className="incbtn">Increment</button>
                <button onClick={dec} className="decbtn">Decrement</button>
            </div>
        </div>
    )
}
export default StateManager9