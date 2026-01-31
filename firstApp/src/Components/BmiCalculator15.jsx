import { useState } from "react"

let BmiCalculator15 = () => {
    let [data, setData] = useState({
        "height": "",
        "weight": "",
    })
    let [result, setResult] = useState(0);

    let collectData = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    let fun = () => {
        console.log(data.height);
        console.log(data.weight);

        result = data.weight / data.height ** 2
        setResult(result)
    }
    return (
        <div>
            <p>{result}</p>
            <input type="number" min={1.3} max={2.72} step={0.2} name="height" onChange={collectData} value={data.height} placeholder="Enter your height in meter..." />
            <input type="number" min={1} step={5} name="weight" onChange={collectData} value={data.weight} placeholder="Enter your weight in kgs..." />
            <button onClick={fun}>Submit</button>
        </div>
    )
}
export default BmiCalculator15