import { useEffect, useState } from "react"
import BackButton from "./BackButton";

const LifeCycle14 = () => {

    let [c, setC] = useState(0);

    useEffect(() => {
        console.log("Mount Added");        
    }, [])

    useEffect(() => {
        console.log("Mount Update");
    }, [c])

    useEffect(() => {
       return ()=>console.log("Mount Removed");
    }, [])

    return (
        <div>
            <BackButton/>
            <p>{c}</p>
            <div className="btndis">
                <button onClick={() => setC(c + 1)}>Add</button>
            </div>
        </div>
    )

}
export default LifeCycle14