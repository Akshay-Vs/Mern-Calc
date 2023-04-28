import React from 'react'
import { Link } from 'react-router-dom'

export const LinkBtn = ({ tosrc, imgsrc, text }) => {
    return (
        <div className="bar-img">
            <Link to={tosrc} target="_blank">
                <img src={imgsrc} alt={text} />
            </Link>
        </div>
    )
}