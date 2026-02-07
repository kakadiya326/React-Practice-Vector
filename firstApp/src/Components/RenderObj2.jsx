import '../css/card.css'
import BackButton from './BackButton'
export default function RenderObj2() {
    let data = {
        "ID": "V25HSF2",
        "NAME": "KAKADIYA CHIRANJ",
        "COURSE": "MERN STACK",
        "CITY": "HYD",
    }
    return (
        <div className="card">
            <BackButton/>
            <div>ID : { data.ID }</div>
            <div>NAME : { data.NAME }</div>
            <div>COURSE : { data.COURSE }</div>
            <div>CITY : { data.CITY }</div>
        </div>
    )
}
