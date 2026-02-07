import { useEffect, useState } from "react";
import '../css/Carousel.css';
import BackButton from "./BackButton";
let arr = [
    { id: 1, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnJAbhL9nlViJJTfngOT2DCfU0HGibfJn3A&s", heading: "Introduction", content: "Welcome to the guide." },
    { id: 2, "img": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/a9/99/ac.jpg", heading: "Installation", content: "Install via npm install." },
    { id: 3, "img": "https://nishnaiholidays.com/wp-content/uploads/2022/12/caption.jpg", heading: "Setup", content: "Configure your environment variables." },
    { id: 4, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKtJhnVE7y0Jc-kFpS5EYIOrD96HK3ko1Tg&s", heading: "Usage", content: "Import and use the components." },
    { id: 5, "img": "https://www.propertyfinder.ae/blog/wp-content/uploads/2024/09/All-About-IMG-Worlds-of-Adventure1.jpg", heading: "API", content: "View the API documentation here." },
    { id: 6, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw3h6mW8ZoRtj68LT-BgiGRKs0n2ZGGSLnA&s", heading: "Components", content: "Explore available UI elements." },
    { id: 7, "img": "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg", heading: "Hooks", content: "Leverage React hooks for logic." },
    { id: 8, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFcvmHKM1inSOApmGcIYGT_XsE4KF9Pazuw&s", heading: "Styling", content: "Customize with CSS modules." },
    { id: 9, "img": "https://hoppingfeet.com/wp-content/uploads/2018/11/IMG_E9565-1024x768.jpg", heading: "Testing", content: "Run tests using Jest." },
    { id: 10, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOfbpKwLRP91JD52SV4ptdAUSqhcFcFYjDg&s", heading: "Deployment", content: "Deploy to production." }
]
let Carousel20 = () => {
    let [i, setI] = useState(0);

    let fwd = () => {
        console.log('fwd');
        
        setI(i => (i + 1) % arr.length)
    }
    
    let bwd = () => {
        if (i == 0) {
            setI(arr.length - 1)
        }
        else {
            setI(i => i - 1)
        }
    }

    useEffect(() => {
        let iid = setInterval(fwd, 3000);
        return () => clearInterval(iid);
    }, [])

    return (
        <div className="bnr">
            <BackButton/>
            <img src={arr[i].img} alt="title" />
            <div className="bnrcon">
                <h1>{arr[i].heading}</h1>
                <p>{arr[i].content}</p>
                <button>Know More...</button>
            </div>
            <button className="c-btn lt" onClick={bwd}>&lt;</button>
            <button className="c-btn gt" onClick={fwd}>&gt;</button>
            <div className="dotcon">
                {arr.map((obj, ind) => {
                    return (
                        <i class={i==ind?"fa-solid fa-circle":"fa-regular fa-circle"} onClick={()=>setI(ind)}></i>
                    )
                })}
            </div>
        </div>
    )

}
export default Carousel20