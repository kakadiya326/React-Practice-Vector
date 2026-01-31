import { useEffect, useState } from "react"

const LifeCycle14 = () => {

    let [c, setC] = useState(0);

    useEffect(() => {
        console.log("Mount Added");
    }, [])

    useEffect(() => {
        console.log("Mount Update");
    }, [c])

    useEffect(() => {
        console.log("Mount Removed");
    }, [])


    return (
        <div>
            <p>{c}</p>
            <div className="btndis">
                <button onClick={() => setC(c + 1)}>Add</button>
            </div>
        </div>
    )

}
export default LifeCycle14