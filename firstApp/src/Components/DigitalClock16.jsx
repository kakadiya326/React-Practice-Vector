import { useEffect, useState } from 'react'
import '../css/card.css'
import BackButton from './BackButton';

let DigitalClock16 = () => {
    let [time, setTime] = useState(new Date());

    let updTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        console.log('amount');
        
        let iid = setInterval(updTime, 1000);
        return () => {
            clearInterval(iid);
        }
    }, [])

    return (
        <div className="clock-con">
            <BackButton/>
            <span>{time.toLocaleTimeString()}</span>
        </div>
    )
}
export default DigitalClock16