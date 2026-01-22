let RCompIterateArrObj8 = ({ student = {} }) => {
    let { Id, Name, Age, Grade, Email } = student

    return (
        <div className="card">
            <p><span>ID :</span> {Id}</p>
            <p><span>Name :</span> {Name}</p>
            <p><span>Age :</span> {Age}</p>
            <p><span>Grade :</span> {Grade}</p>
            <p><span>Email :</span> {Email}</p>
        </div>
    )
}
export default RCompIterateArrObj8