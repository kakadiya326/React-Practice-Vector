import C from "./C"

let B = (props) => {
    console.log(props);
    
    return (
        <>
            <C name={props.name} />
        </>
    )
}
export default B