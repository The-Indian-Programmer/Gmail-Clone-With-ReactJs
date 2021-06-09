import { Avatar, IconButton } from "@material-ui/core";
import "./MailDetail.css";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import PlaylistAddCheckOutlinedIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { useHistory } from "react-router";
const MailDetail = () => {
    const history = useHistory();
  return (
    <div className="mailbody">
      <div className="mailbody_header">
        <IconButton onClick={()=>history.push("/")}>
          <ArrowBackIcon />
        </IconButton>
        <div className="mailbody_header_left">
          <div className="left_left">
            <ArchiveIcon />
            <ReportOutlinedIcon />
            <DeleteIcon />
          </div>
          <div className="left_middle">
            <EmailOutlinedIcon />
            <WatchLaterOutlinedIcon />
            <PlaylistAddCheckOutlinedIcon />
          </div>
          <div className="left_right">
            <RestoreFromTrashOutlinedIcon />
            <LabelImportantOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div className="mailbody_header_right">
            <p className="emailcounter">1 of 348</p>
            <KeyboardArrowLeftIcon/>
            <KeyboardArrowRightIcon/>
            <KeyboardIcon/>
        </div>
      </div>
      <div className="mail-detail">
            <h2 className="mailsubject">
                This is the mail subject
            </h2>
            <div className="mail_user_info">
                <Avatar/>
                <h4 className="username">
                    Sumit Kosta
                </h4>
                <p className="usermailtime">
                    10PM
                </p>
            </div>
            <div className="mailinformation">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>
      </div>
    </div>
  );
};

export default MailDetail;
