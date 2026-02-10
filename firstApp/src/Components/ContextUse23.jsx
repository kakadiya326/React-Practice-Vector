import { useContext } from "react"
import MyContext from "./MyContext"
import BackButton from "./BackButton"

let ContextUse23 = () => {
    let obj = useContext(MyContext)
    return (
        <div>
            <BackButton/>
            <strong>
                {obj.Name}
            </strong>
        </div>
    )

}
export default ContextUse23