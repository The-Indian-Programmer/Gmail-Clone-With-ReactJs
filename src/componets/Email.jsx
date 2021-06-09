import { IconButton } from '@material-ui/core'

import React from 'react'
import "./Email.css"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailList from './EmailList';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import EmailMiddle from './EmailMiddle';

const Email = () => {
    return (
        <div className="email">
            <div className="email_header">
                <div className="email_header_left">
                        <CheckBoxOutlineBlankIcon/>
                        <ExpandMoreIcon/>
                        <ArrowForwardIcon/>
                        <MoreVertIcon/>
                </div>
                <div className="email_header_right">
                    <KeyboardArrowLeftIcon/>
                    <KeyboardArrowRightIcon/>
                    <KeyboardIcon/>
                    <SettingsIcon/>
                </div>
            </div>
            <div className="emailmiddle">
                <EmailMiddle title="Primary" Icon={InboxIcon} color="#d93025" />
                <EmailMiddle title="Social" Icon={InboxIcon} color="#1a73e8" />
                <EmailMiddle title="Promotions" Icon={InboxIcon} color="#188038" />
            </div>

            <div className="email_lists" >
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
                <EmailList/>
            </div>
        </div>
    )
}

export default Email
