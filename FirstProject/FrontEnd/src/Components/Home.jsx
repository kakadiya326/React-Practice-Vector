import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    let [arr, setArr] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/data').then((res) => {
            setArr(res.data)
        }).catch(() => {
            console.log('Error in fetching data');

        })
    }, [])

    return (
        <table border={2}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((obj, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{obj.name}</td>
                                <td>{obj.place}</td>
                                <td>{obj.phno}</td>
                                <td>{obj.dob}</td>
                                <td>{obj.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Home