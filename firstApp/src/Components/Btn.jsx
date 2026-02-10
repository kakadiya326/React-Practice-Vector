import React from 'react'

const Btn = (props) => {
    return (
        <button onClick={props.fun} className={props.cn}>{props.label}</button>
    )
}

export default Btn