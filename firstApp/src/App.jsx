import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderVariable1 from './Components/RenderVariable1'
import RenderObj2 from './Components/RenderObj2'
import RenderArrStr3 from './Components/RenderArrStr3'
import RenderArrObj from './Components/RenderArrObj4'
import RenderArrObj5 from './Components/RenderArrObj5'

function App() {
  const [count, setCount] = useState(0)

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
      <RenderArrObj5/>

    </>
  )
}

export default App
