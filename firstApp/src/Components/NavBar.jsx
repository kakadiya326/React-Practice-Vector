import React from 'react'
import { Link } from 'react-router-dom'

let comInfo = [
  {
    "to": "def01",
    "head": "Static Variable",
    "content": "Simple static variable shown in the component."
  },
  {
    "to": "def02",
    "head": "Object Render",
    "content": "Rendering object values inside a component."
  },
  {
    "to": "def03",
    "head": "Array of String",
    "content": "Rendering array of strings using list format."
  },
  {
    "to": "def04",
    "head": "Array of Object (Table)",
    "content": "Rendering array of objects inside a table."
  },
  {
    "to": "def05",
    "head": "Array of Object (Cards)",
    "content": "Rendering array of objects in card layout."
  },
  {
    "to": "def06-01",
    "head": "Props Example",
    "content": "Passing and displaying props in component."
  },
  {
    "to": "def06-02",
    "head": "Props Example",
    "content": "Using props with different values."
  },
  {
    "to": "def06-03",
    "head": "Props Example",
    "content": "Reusing component with dynamic props."
  },
  {
    "to": "def07-01",
    "head": "Props with Style",
    "content": "Passing styles as props to button."
  },
  {
    "to": "def07-02",
    "head": "Props with Style",
    "content": "Dynamic button styling using props."
  },
  {
    "to": "def07-03",
    "head": "Props with Style",
    "content": "Reusable styled button component."
  },
  {
    "to": "def08",
    "head": "Component Iteration",
    "content": "Iterating array of objects and rendering child components."
  },
  {
    "to": "def09",
    "head": "State Management",
    "content": "Managing component state using useState."
  },
  {
    "to": "def10",
    "head": "Conditional Rendering",
    "content": "Rendering UI based on conditions."
  },
  {
    "to": "def11",
    "head": "Form Data Collection",
    "content": "Collecting form input values using state."
  },
  {
    "to": "def12",
    "head": "Todo Application",
    "content": "Simple todo app with add and delete functionality."
  },
  {
    "to": "def13",
    "head": "Form Data Collection",
    "content": "Collecting form input values using state."
  },
  {
    "to": "def14",
    "head": "Lifecycle Methods",
    "content": "Understanding component lifecycle using hooks."
  },
  {
    "to": "def15",
    "head": "BMI Calculator",
    "content": "Calculating BMI using user input."
  },
  {
    "to": "def16",
    "head": "Digital Clock",
    "content": "Real-time digital clock using setInterval."
  },
  {
    "to": "def17",
    "head": "Stopwatch",
    "content": "Stopwatch with start, stop and reset features."
  },
  {
    "to": "def18",
    "head": "Axios API Call",
    "content": "Fetching data from API using Axios."
  },
  {
    "to": "def19",
    "head": "Weather API",
    "content": "Displaying weather data using external API."
  },
  {
    "to": "def20",
    "head": "Carousel",
    "content": "Image carousel with navigation controls."
  },
  {
    "to": "def21",
    "head": "Accordion",
    "content": "Accordion UI for expandable content."
  },
  {
    "to": "def22",
    "head": "Prop Drilling",
    "content": "Passing Data to parent component to it's child most component is called Prop drilling."
  },
  {
    "to": "def23",
    "head": "Use of Context",
    "content": "To overcome props drilling problem useContext is used."
  },
  {
    "to": "def24",
    "head": "State Lifting",
    "content": "To send back props data State Lifting concept is used."
  },
]


function NavBar() {
  return (
    <nav>
      <div className="nav-con">
        {
          comInfo.map((obj, ind) => {
            return (
              <div className="acc">
                <strong>{ind + 1} )</strong> &nbsp;&nbsp;
                <Link to={obj.to} key={ind}>{obj.head}</Link>
                <p>{obj.content}</p>
              </div>
            )
          })
        }
      </div>
    </nav>
  )
}

export default NavBar