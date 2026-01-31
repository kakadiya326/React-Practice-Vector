import { useState } from "react"

let CollectFormData13 = () => {
    let [data, setData] = useState({
        "title": "",
        "desc": "",
        "dept": "",
        "dl": "",
    });

    let [arr, setArr] = useState([]);
    let [f, setF] = useState(true);
    let [ind, setInd] = useState(-1);

    let fun = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    let add = () => {

        if (validation()) {
            setArr([...arr, data])
            setData({
                "title": "",
                "desc": "",
                "dept": "",
                "dl": "",
            });
        }
    }

    let edit = (ind) => {
        setF(false)
        setInd(ind)
        setData(
            {
                "title": arr[ind].title,
                "desc": arr[ind].desc,
                "dept": arr[ind].dept,
                "dl": arr[ind].dl,
            }
        )
    }

    let del = (ind) => {
        arr.splice(ind, 1);
        setArr([...arr])
    }

    let upd = () => {
        arr[ind] = data
        setArr([...arr])
        setF(true)
        setData({
            "title": "",
            "desc": "",
            "dept": "",
            "dl": "",
        });
    }

    let validation = () => {
        if (data.title == "" || data.desc == "" || data.dept == "" || data.dl == "") {
            return false
        }
        return true
    }

    return (
        <div>
            <div className="container-fluid w-100 border rounded-4">
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="text-bg-light border-2 rounded p-1" name="title" id="title" placeholder="Enter title..." value={data.title} onChange={fun} />
                </div>
                <div className="row">
                    <label htmlFor="desc">Desciption</label>
                    <textarea name="desc" className="text-bg-light border-2 rounded p-1" id="desc" placeholder="Enter desciption..." value={data.desc} onChange={fun}></textarea>
                </div>
                <div className="row">
                    <label htmlFor="dept">Department</label>
                    <select value={data.dept} className="text-bg-light border-2 rounded p-1" name="dept" onChange={fun}>
                        <option value="" disabled>--- Select Department ---</option>
                        <option value="MCA">MCA</option>
                        <option value="B.Tech">B. Tech</option>
                        <option value="BE">BE</option>
                    </select>
                </div>
                <div className="row">
                    <label htmlFor="dl">Deadline</label>
                    <input type="date" className="text-bg-light border-2 rounded p-1" name="dl" id="dl" onChange={fun} value={data.dl} />
                </div>
                {f && <button className="btn-outline-secondary" onClick={add}>Add</button>}
                {!f && <button className="btn-outline-secondary" onClick={upd}>Update</button>}
            </div>
            {
                arr.length > 0 && <table className="table table-bordered-5 w-100 table-striped table-light table-hover table-responsive ">
                    <thead>
                        <tr>
                            <th>Srno</th>
                            <th>Title</th>
                            <th>Desc</th>
                            <th>Dept</th>
                            <th>Dl</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((obj, ind) => {
                                return <tr key={ind}>
                                    <td>{ind + 1}</td>
                                    <td>{obj.title}</td>
                                    <td>{obj.desc}</td>
                                    <td>{obj.dept}</td>
                                    <td>{obj.dl}</td>
                                    <td>
                                        <button onClick={() => edit(ind)}>Edit</button>
                                        <button onClick={() => del(ind)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}
export default CollectFormData13