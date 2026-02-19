import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
    let [data, setData] = useState({
        name: "",
        place: "",
        phno: "",
        dob: "",
        email: "",
    });

    let funcollect = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    let addF = () => {
        axios.post('http://localhost:5000/add', data).then((res) => {
            console.log(res);

        }).catch((e) => {
            console.log(e);

        })
    }

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={funcollect} value={data.name} />

            <label htmlFor="place">Place</label>
            <input type="text" name="place" id="place" onChange={funcollect} value={data.place} />

            <label htmlFor="phno">Phone</label>
            <input type="tel" name="phno" id="phno" onChange={funcollect} value={data.phno} />

            <label htmlFor="dob">DOB</label>
            <input type="date" name="dob" id="dob" onChange={funcollect} value={data.dob} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={funcollect} value={data.email} />
            <button onClick={addF}>Add Data</button>
        </div>
    )
}

export default Add