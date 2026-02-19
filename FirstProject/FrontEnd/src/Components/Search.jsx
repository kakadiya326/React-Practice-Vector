import axios from 'axios'
import { useState } from 'react'

const Search = () => {
    let [data, setData] = useState("");
    let [obj, setObj] = useState("");
    let searchF = () => {
        axios.get(`http://localhost:5000/search/${data}`).then((res) => {
            console.log(res.data);
            setObj(res.data);
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <div>
            {/* {obj.name==undefined&& <div>No data found!</div>} */}
            <input type="search" name="find" id="find" onChange={(e) => setData(e.target.value)} value={data} />
            <button onClick={searchF}>Search</button>
            {obj != "" && <div className="card">
                {obj.map((obb, idx) => {
                    return (
                        <>
                            <p>Name:{obb.name}</p>
                            <p>Place:{obb.place}</p>
                            <p>Phone:{obb.phno}</p>
                            <p>DOB:{obb.dob}</p>
                            <p>Email:{obb.email}</p>
                        </>
                    )
                })}
            </div>}
        </div>
    )
}

export default Search