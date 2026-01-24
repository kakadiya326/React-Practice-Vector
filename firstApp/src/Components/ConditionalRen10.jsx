import { useState } from "react"
import '../css/card.css'
let ConditionalRen10 = () => {
    let [f, setF] = useState(false)
    let [themeToggle, setThemeToggle] = useState(false)

    return (
        <div>
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