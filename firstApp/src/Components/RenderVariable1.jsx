import '../css/card.css'
export default function RenderVariable1() {
  let id = "V25HSF2-K1";
  let name = "KAKADIYA CHIRANJ";
  let course = "MERN STACK";
  return (
    <div className='card'>
      <div>ID : {id}</div>
      <div>Name : {name}</div>
      <div>Course : {course}</div>
    </div>
  )
}