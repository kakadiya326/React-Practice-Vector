import BackButton from "./BackButton"

let RenderPropsBtn7 = (props) => {
    let { label, sty } = props
    return (
        <>
            <BackButton/>
            <button style={sty}>{label}</button>
        </>
    )
}
export default RenderPropsBtn7