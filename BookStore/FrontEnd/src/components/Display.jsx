import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Display() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/Book/").then((res) => setData(res.data))
  }, [])
  console.log(data);

  return (
    <div>Display</div>
  )
}

export default Display