import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
    return (
        <div className='back-btn-con'>
            <Link to={'/'}>
                <i className="fa-solid fa-caret-left"></i>
            </Link>
        </div>
    )
}

export default BackButton