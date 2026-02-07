import { useState } from "react"
import '../css/card.css'
import BackButton from "./BackButton";
let arr = [
    {
        "id": 1,
        "heading": "What is React?",
        "text": "React is a JavaScript library used for building user interfaces."
    },
    {
        "id": 2,
        "heading": "What is JSON?",
        "text": "JSON stands for JavaScript Object Notation and is used to store and exchange data."
    },
    {
        "id": 3,
        "heading": "What is an Accordion?",
        "text": "An accordion is a UI component that allows content to be shown or hidden."
    }
]

const Accordian21 = () => {
    let [i, setI] = useState(-1);

    let fun = (ind) => {
        if (ind == i) {
            setI(-1)
        } else {
            setI(ind)
        }
    }
    return (
        <div className="ac-con">
            <BackButton/>
            {
                arr.map((obj, ind) => {
                    return (
                        <div className="acc">
                            <div className="hd">
                                <h5>{obj.heading}</h5>
                                <i className={i == ind ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"} onClick={() => fun(ind)}></i>
                            </div>
                            {
                                i == ind && <div className="cont">
                                    {obj.text}
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian21