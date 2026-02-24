import React, { useState } from 'react'

const Add = () => {
  let [obj, setObj] = useState({
    "id": "",
    "title": "",
    "author": "",
    "price": "",
    "dt": "",
  })

  let fun = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value })
  }
  return (
    <div className="con">
      <form>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" placeholder='Enter your id..!!' onChange={fun} value={obj.id} />
      </form>
    </div>
  )
}

export default Add