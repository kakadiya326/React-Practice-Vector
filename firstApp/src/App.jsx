import './App.css'
import RenderVariable1 from './Components/RenderVariable1'
import RenderObj2 from './Components/RenderObj2'
import RenderArrStr3 from './Components/RenderArrStr3'
import RenderArrObj from './Components/RenderArrObj4'
import RenderArrObj5 from './Components/RenderArrObj5'
import RenderProps6 from './Components/RenderProps6'
import RenderPropsBtn7 from './Components/RenderPropsBtn7'
import RCompIterateArrObj8 from './Components/RCompIterateArrObj8'
import StateManage9 from './Components/StateManage9'
import ConditionalRen10 from './Components/ConditionalRen10'
import Todo12 from './Components/todo12'
import CollectFormData13 from './Components/CollectFormData13'
import LifeCycle14 from './Components/lifeCycle14'
import BmiCalculator15 from './Components/bmiCalculator15'
import DigitalClock16 from './Components/DigitalClock16'
import StopWatch17 from './Components/StopWatch17'
import AxiosUse18 from './Components/AxiosUse18'
import WeatherAPI19 from './Components/weartherAPI19'
import Carousel20 from './Components/Carousel20'
import Accordian21 from './Components/Accordian21'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import InputDataCollect11 from './Components/InputDataCollect11'
import BackButton from './Components/BackButton'
import PropDrilling22 from './Components/PropDrilling22'
import ContextUse23 from './Components/ContextUse23'
import MyContext from './Components/MyContext'
import StateLifting24 from './Components/StateLifting24'

function App() {

  let students = [
    {
      "Id": 1,
      "Name": "Chiranj Patel",
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
      <BrowserRouter>
        <MyContext.Provider value={students[0]}>

          <Routes>
            <Route path="/" element={<NavBar />} />

            {/* def-01 */}
            <Route path="/def01" element={<RenderVariable1 />} />

            {/* def-02 */}
            <Route path="/def02" element={<RenderObj2 />} />

            {/* def-03 */}
            <Route path="/def03" element={<RenderArrStr3 />} />


            {/* def-04 */}
            <Route path="/def04" element={<RenderArrObj />} />


            {/* def-05 */}
            <Route path="/def05" element={<RenderArrObj5 />} />


            {/* def-06 */}
            <Route path="/def06-01" element={<RenderProps6 title="Chiranj" desc="Admin" status="Active" />} />
            <Route path="/def06-02" element={<RenderProps6 title="Prince" desc="Admin" status="Deactive" />} />
            <Route path="/def06-03" element={<RenderProps6 title="Jatin" desc="Admin" status="Deactive" />} />


            {/* def-07 */}
            <Route path="/def07-01" element={<RenderPropsBtn7 label="Click" sty={sty1} />} />
            <Route path="/def07-02" element={<RenderPropsBtn7 label="Login" sty={sty2} />} />
            <Route path="/def07-03" element={<RenderPropsBtn7 label="Logout" sty={sty3} />} />


            {/* def-08 */}
            <Route path="/def08" element={<div className='con'>
              <BackButton />
              {

                students.map((obj) => {
                  return <RCompIterateArrObj8 key={obj.Id} student={obj} />
                })
              }
            </div>} />


            {/* def-09 */}
            <Route path="/def09" element={<StateManage9 />} />


            {/* def-10 */}
            <Route path="/def10" element={<ConditionalRen10 />} />


            {/* def-11 */}
            <Route path="/def11" element={<InputDataCollect11 />} />


            {/* def-12 */}
            <Route path="/def12" element={<Todo12 />} />


            {/* def-13 */}
            <Route path="/def13" element={<CollectFormData13 />} />


            {/* def-14 */}
            <Route path="/def14" element={<LifeCycle14 />} />


            {/* def-15 */}
            <Route path="/def15" element={<BmiCalculator15 />} />


            {/* def-16 */}
            <Route path="/def16" element={<DigitalClock16 />} />


            {/* def-17 */}
            <Route path="/def17" element={<StopWatch17 />} />


            {/* def-18 */}
            <Route path="/def18" element={<AxiosUse18 />} />


            {/* def-19 */}
            <Route path="/def19" element={<WeatherAPI19 />} />


            {/* def-20 */}
            <Route path="/def20" element={<Carousel20 />} />


            {/* def-21 */}
            <Route path="/def21" element={<Accordian21 />} />

            {/* def-22 */}
            <Route path="/def22" element={<PropDrilling22 name="Kakadiya" />} />

            {/* def-23 */}
            <Route path="/def23" element={<ContextUse23 />} />

            {/* def-24 */}
            <Route path="/def24" element={<StateLifting24 />} />



          </Routes>
        </MyContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App
