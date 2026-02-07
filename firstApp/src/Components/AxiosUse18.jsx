import axios from "axios";
import { useEffect, useState } from "react"
import BackButton from "./BackButton";

let AxiosUse18 = () => {
    let [arr, setArr] = useState([]);
    let [loader, setLoader] = useState(false);

    useEffect(() => {
        axios.get('https://fakestoreapiserver.reactbd.org/api/orders')
            .then(
                (res) => {
                    setArr(res.data.data);
                    setLoader(true);
                })
            .catch(
                () => {
                    setLoader(false);
                })
    }, [])

    return (
        <div>
            <BackButton/>
            {!loader &&
                <div className="spinner-grow"></div>
            }
            {loader && (
                <div className="d-grid">
                    {arr.map((obj, index) => {
                        const collapseId = `collapse-${index}`;

                        return (
                            <div className="row border border-2 p-2 mb-2" key={index}>

                                <div className="panel-group">
                                    <div className="panel panel-default">

                                        {/* HEADER */}
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <div className="col-12">
                                                    <div className="row align-items-center">

                                                        {/* Date - clickable */}
                                                        <div className="col-6">
                                                            <a
                                                                data-bs-toggle="collapse"
                                                                href={`#${collapseId}`}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                <strong>{obj.orderDate}</strong>
                                                            </a>
                                                        </div>

                                                        {/* Status + Price */}
                                                        <div className="col-6 text-end">
                                                            <div>{obj.status}</div>
                                                            <div>₹ {obj.totalAmount}</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </h4>
                                        </div>

                                        {/* COLLAPSE BODY */}
                                        <div id={collapseId} className="panel-collapse collapse">
                                            <div className="col-12 mt-2">
                                                {obj.items.map((item) => (
                                                    <div
                                                        className="row border-bottom py-1"
                                                        key={item.productId}
                                                    >
                                                        <div className="col-6">{item.name}</div>
                                                        <div className="col-3 text-center">
                                                            Qty: {item.quantity}
                                                        </div>
                                                        <div className="col-3 text-end">
                                                            ₹ {item.price}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}
export default AxiosUse18