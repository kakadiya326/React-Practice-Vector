import { useState } from "react"
import BackButton from "./BackButton"

let Todo12 = () => {
    let [data, setData] = useState("")
    let [arr, setArr] = useState([])
    let [f, setF] = useState(true)
    let [i, setI] = useState(-1)

    let fun = (event) => {
        setData(event.target.value);
    }

    let add = () => {
        setArr([...arr, data]);
        setData("");
    }

    let edit = (ind) => {
        setF(false);
        setData(arr[ind]);
        setI(ind);
    }

    let del = (ind) => {
        arr.splice(ind, 1);
        setArr([...arr]);
    }

    let upd = () => {
        arr[i] = data;
        setArr([...arr,]);
        setF(true);
        setData("");
    }
    return (
        <div >
            <BackButton/>
            <input type="text" className="text-dark bg-white p-2 text-end ps-5 border-4 rounded-pill m-4 " placeholder="Enter your task..." onChange={fun} value={data} />
            {f && <button onClick={add}>Add</button>}
            {!f && <button onClick={upd}>Update</button>}
            <ol>
                {
                    arr.map(
                        (ele, ind) => {
                            return (
                                <li>{ele}
                                    <button onClick={() => edit(ind)}>Edit</button>
                                    <button onClick={() => del(ind)}>Del</button>
                                </li>
                            )
                        }
                    )
                }
            </ol>
        </div>
    )
}
export default Todo12