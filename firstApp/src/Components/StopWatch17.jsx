import { useEffect, useState } from 'react'
import '../css/card.css'
import BackButton from './BackButton';

let StopWatch17 = () => {
    let [s, setS] = useState(0);
    let [m, setM] = useState(0);
    let [h, setH] = useState(0);
    let [iid, setIid] = useState(-1);

    let inc = () => {
        setS(prev => prev + 1)
    }

    useEffect(() => {
        if (s == 60) {
            setS(0)
            setM(m + 1)
        } else if (m == 60) {
            setM(0)
            setH(h + 1)
        } else if (h == 24) {
            setH(0)
            setM(0)
            setS(0)
        }
    }, [s])

    let startF = () => {
        if (iid == -1) {
            setIid(setInterval(inc, 1000));
        }
    }
    let stopF = () => {
        clearInterval(iid);
        setIid(-1)
    }
    let resetF = () => {
        stopF()
        setH(0)
        setM(0)
        setS(0)
    }

    return (
        <>
            <BackButton/>
            <div className="clock-con">
                <span>{h < 10 ? "0" + h : h}</span>:
                <span>{m < 10 ? "0" + m : m}</span>:
                <span>{s < 10 ? "0" + s : s}</span>
            </div>
            <div className="stop-btns">
                <button onClick={startF}>Start</button>
                <button onClick={stopF}>Stop</button>
                <button onClick={resetF}>Reset</button>
            </div>
        </>
    )
}
export default StopWatch17