import { Checkbox } from '@material-ui/core'
import React from 'react'
import "./EmailList.css"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
const EmailList = ({id,sentby,timestamp,receivermessage,sentemail,receiversubject,sentprofile,sentuid}) => {
    const history = useHistory();
    return (
        <div className="email_list" onClick={() => history.push(`/mail/${id}`)}>
            <div className="email_list_icon">
                <Checkbox/>
                <StarOutlineIcon/>
                <LabelImportantIcon/>
            </div>
            <div className="email_info">
                <h5 className="email_info_name">{sentby}</h5>
                <p className="email_info_subject">{receiversubject}</p>
                <p className="email_info_time">{timestamp}</p>
            </div>
        </div>
    )
}

export default EmailList
