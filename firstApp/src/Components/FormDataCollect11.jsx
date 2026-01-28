import { useState } from "react";

let FormDataCollect11 = () => {
    let [data, setData] = useState("");
    let fun = (event) => {
        setData(event.target.value.toLowerCase())
    }

    return (
        <div>
            <input type="text" onChange={fun} />
            <div>{data}</div>
        </div>
    );
}
export default FormDataCollect11