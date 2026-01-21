import '../css/card.css'
export default function RenderObj2() {
    let data = {
        "ID": "V25HSF2",
        "NAME": "KAKADIYA CHIRANJ",
        "COURSE": "MERN STACK",
        "CITY": "HYD",
    }
    return (
        <div className="card">
            <div>ID : { data.ID }</div>
            <div>NAME : { data.NAME }</div>
            <div>COURSE : { data.COURSE }</div>
            <div>CITY : { data.CITY }</div>
        </div>
    )
}
