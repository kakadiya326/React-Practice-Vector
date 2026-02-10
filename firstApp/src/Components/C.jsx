import BackButton from "./BackButton";

let C = (props) => {
    console.log(props.name);
    
    return (
        <div>
            <BackButton/>
            <strong>{props.name}</strong>
        </div>
    )
}
export default C