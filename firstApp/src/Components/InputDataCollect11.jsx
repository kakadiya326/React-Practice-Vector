import { useState } from "react";
import BackButton from "./BackButton";

let InputDataCollect11 = () => {
    let [data, setData] = useState("");
    let fun = (event) => {
        setData(event.target.value.toLowerCase())
    }

    return (
        <div>
            <BackButton/>
            <input type="text" onChange={fun} />
            <div>{data}</div>
        </div>
    );
}
export default InputDataCollect11