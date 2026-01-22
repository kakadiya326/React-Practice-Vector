import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderVariable1 from './Components/RenderVariable1'
import RenderObj2 from './Components/RenderObj2'
import RenderArrStr3 from './Components/RenderArrStr3'
import RenderArrObj from './Components/RenderArrObj4'
import RenderArrObj5 from './Components/RenderArrObj5'
import RenderProps6 from './Components/RenderProps6'
import RenderPropsBtn7 from './Components/RenderPropsBtn7'
import RCompIterateArrObj8 from './Components/RCompIterateArrObj8'

function App() {

  let students = [
    {
      "Id": 1,
      "Name": "Aarav Patel",
      "Age": 20,
      "Grade": "A",
      "Email": "aarav.patel@example.com"
    },
    {
      "Id": 2,
      "Name": "Neha Sharma",
      "Age": 21,
      "Grade": "B+",
      "Email": "neha.sharma@example.com"
    },
    {
      "Id": 3,
      "Name": "Rohan Mehta",
      "Age": 19,
      "Grade": "A-",
      "Email": "rohan.mehta@example.com"
    },
    {
      "Id": 4,
      "Name": "Priya Verma",
      "Age": 22,
      "Grade": "B",
      "Email": "priya.verma@example.com"
    },
    {
      "Id": 5,
      "Name": "Karan Singh",
      "Age": 20,
      "Grade": "A",
      "Email": "karan.singh@example.com"
    },
    {
      "Id": 6,
      "Name": "Ananya Iyer",
      "Age": 21,
      "Grade": "A+",
      "Email": "ananya.iyer@example.com"
    },
    {
      "Id": 7,
      "Name": "Vikram Joshi",
      "Age": 23,
      "Grade": "B-",
      "Email": "vikram.joshi@example.com"
    },
    {
      "Id": 8,
      "Name": "Sneha Kulkarni",
      "Age": 19,
      "Grade": "A",
      "Email": "sneha.kulkarni@example.com"
    },
    {
      "Id": 9,
      "Name": "Rahul Nair",
      "Age": 22,
      "Grade": "B+",
      "Email": "rahul.nair@example.com"
    },
    {
      "Id": 10,
      "Name": "Pooja Choudhary",
      "Age": 20,
      "Grade": "A-",
      "Email": "pooja.choudhary@example.com"
    }
  ]


  let sty1 = {
    "color": "blue",
    "background": "yellow",
    "border": "2px solid crimson",
    "borderRadius": "0px",
  }
  let sty2 = {
    "color": "white",
    "background": "green",
    "border": "2px solid black",
    "borderRadius": "10px",
  }
  let sty3 = {
    "color": "white",
    "background": "red",
    "border": "2px solid crimson",
    "borderRadius": "30px",
  }

  return (
    <>
      {/* def-01 */}
      {/* <RenderVariable1/>  */}

      {/* def-02 */}
      {/* <RenderObj2/> */}

      {/* def-03 */}
      {/* <RenderArrStr3/> */}

      {/* def-04 */}
      {/* <RenderArrObj/> */}

      {/* def-05 */}
      {/* <RenderArrObj5/> */}

      {/* def-06 */}
      {/* <RenderProps6 title="Chiranj" desc="Admin" status="Active"/>
      <RenderProps6 title="Prince" desc="Admin" status="Deactive"/>
      <RenderProps6 title="Jatin" desc="Admin" status="Deactive" /> */}

      {/* def-07 */}
      {/* <RenderPropsBtn7 label="Click" sty={sty1} />
      <RenderPropsBtn7 label="Login" sty={sty2} />
      <RenderPropsBtn7 label="Logout" sty={sty3} /> */}

      {/* def-08 */}

      <div className='con'>
        {
          students.map((obj) => {
            return <RCompIterateArrObj8 key={obj.Id} student={obj} />
          })
        }
      </div>



    </>
  )
}

export default App
