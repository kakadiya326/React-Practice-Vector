import { useState } from "react"
import "../css/card.css"
import BackButton from "./BackButton"

let StateManager9 = () => {
    let [c, setC] = useState(0)

    let inc = () => setC(c + 1)

    let dec = () => {
        if (c > 0) {
            setC(c - 1)
        }
    }

    let rest = () => setC(c = 0)

    return (
        <div className="container">
            <BackButton/>
            <p>{c}</p>
            <div className="btnsCon">
                <button onClick={inc} className="incbtn">Increment</button>
                <button onClick={dec} className="decbtn">Decrement</button>
                <button onClick={rest} className="resetbtn">Reset</button>
            </div>
        </div>
    )
}
export default StateManager9