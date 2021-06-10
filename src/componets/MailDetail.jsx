import { Avatar, IconButton } from "@material-ui/core";
import "./MailDetail.css";
import React, { useEffect, useState } from "react";
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
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { useHistory, useParams } from "react-router";
import { db } from "../FirebaseCode";
const MailDetail = () => {
  const history = useHistory();
  const { key } = useParams();

  const [sendby, setSendby] = useState("SendBy");
  const [message, setMessage] = useState("This is the message");
  const [profile, setProfile] = useState("");
  const [timestamp, settimestamp] = useState("10AM");
  const [subject, setSubject] = useState("This is the subject");
  console.log(key);

  useEffect(() => {
    db.collection("allemail")
      .doc(key)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSendby(doc.data().sentby);
          setMessage(doc.data().receivermessage);
          setProfile(doc.data().sentprofile);
          settimestamp(doc.data().timestamp);
          setSubject(doc.data().receiversubject);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
  }, [message]);

  return (
    <div className="mailbody">
      <div className="mailbody_header">
        <IconButton onClick={() => history.push("/")}>
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
          <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
          <KeyboardIcon />
        </div>
      </div>
      <div className="mail-detail">
        <h2 className="mailsubject">{subject}</h2>
        <div className="mail_user_info">
          <Avatar src={profile} />
          <h4 className="username">{sendby}</h4>
          <p className="usermailtime">
            {new Date(timestamp?.seconds * 1000).toUTCString}
          </p>
        </div>
        <div className="mailinformation">{message}</div>
      </div>
    </div>
  );
};

export default MailDetail;
