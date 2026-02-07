import '../css/card.css'
import BackButton from './BackButton';
export default function RenderVariable1() {
  let id = "V25HSF2-K1";
  let name = "KAKADIYA CHIRANJ";
  let course = "MERN STACK";
  return (
    <div className='card'>
      <BackButton/>
      <div>ID : {id}</div>
      <div>Name : {name}</div>
      <div>Course : {course}</div>
    </div>
  )
}