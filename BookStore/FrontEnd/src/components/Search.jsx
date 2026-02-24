import React, { useState } from 'react';
import './style.css';

const Search = () => {
  let [s, setS] = useState("");
  let [data, setData] = useState([]);

  let updF = (e) => {
    setS(e.target.value)
  }

  let searchF = () => {
    // axios.get('').then((res) => {
    //   setData(res.data)
    // }).catch((e) => {
    //   console.log(e, 'Error while searching');
    // })
  }
  return (
    <div className='search'>
      <input type="search" name="search" id="search" placeholder='search here...!!' onChange={updF} value={s} />
      <button onClick={searchF}>Search</button>
    </div>
  )
}

export default Search