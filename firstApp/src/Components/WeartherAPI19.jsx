import axios from "axios";
import { useState } from "react";
import '../css/card.css';
import BackButton from "./BackButton";

let WeatherAPI19 = () => {
    const url = "";
    let [place, setPlace] = useState("");
    let [msg, setMSG] = useState("");
    let [info, setInfo] = useState({});

    let getInfo = () => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6988bb3bcd7948aeb33114155260402&q=Gujarat&aqi=no`)
            .then(
                (res) => {
                    setInfo(res.data);
                    setPlace("");
                    setMSG("");
                }
            ).catch(() => {
                setMSG("Check the place name...");
                setInfo({});
            })
    }
    console.log(info);

    return (
        <div className="card w-con">
            <BackButton />
            <h2>{msg}</h2>
            <input type="text" placeholder="Enter place name..." onChange={(e) => setPlace(e.target.value)} value={place} />
            <button onClick={getInfo}>Get Info</button>
            {
                info.location != undefined &&
                <div className="d-grid w-card">
                    <div>
                        <div className="row">
                            <h2 className="col-6">Place: {info.location.name}</h2>
                            <div className="col-6">
                                <h3 className="">localtime: {info.location.localtime}</h3>
                                <h4 className="">region : {info.location.region}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">latitude : {info.location.lat}</div>
                            <div className="col-4">longitude : {info.location.lon}</div>
                            <img src={info.current.condition.icon} className="w-icon" title="icon"></img>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default WeatherAPI19