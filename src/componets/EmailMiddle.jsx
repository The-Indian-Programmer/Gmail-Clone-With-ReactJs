import React from 'react'
import "./EmailMiddle.css";

const EmailMiddle = ({Icon,title,color}) => {
    const style={
        color:`${color}`,
        borderBottom:`3px solid ${color}`
    }
    return (
        <div class="email_middle_component" style={style}>
            <Icon/>
            <h4 className="email_middle_title">{title}</h4>
        </div>
    )
}

export default EmailMiddle
