import '../css/card.css'
import BackButton from './BackButton'
let RenderProps6 = (props) => {
    return (
        <div className="card">
            <BackButton/>
            <p>Title : {props.title}</p>
            <p>Desc : {props.desc}</p>
            <p>Status : {props.status}</p>
        </div>
    )
}

export default RenderProps6 