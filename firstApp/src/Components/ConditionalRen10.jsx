import { useState } from "react"
import '../css/card.css'
import BackButton from "./BackButton"
let ConditionalRen10 = () => {
    let [f, setF] = useState(false)
    let [themeToggle, setThemeToggle] = useState(false)

    return (
        <div>
            <BackButton/>
            {
                f && <div>Chiranj Patel</div>
            }
            <button onClick={() => setF(!f)}>{f ? "Hide" : "Show"}</button>

            <div className={themeToggle ? 'dt' : 'lt'}>
                <button onClick={() => { setThemeToggle(!themeToggle) }}>{themeToggle ? "Light" : "Dark"}</button>
            </div>
        </div>
    )
}
export default ConditionalRen10