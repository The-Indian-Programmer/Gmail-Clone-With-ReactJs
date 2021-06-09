import { Button, IconButton } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.css";
import Sidebaroption from "./Sidebaroption";
import DuoOutlinedIcon from "@material-ui/icons/DuoOutlined";
import InboxIcon from "@material-ui/icons/Inbox";
import PhoneIcon from "@material-ui/icons/Phone";
import StarIcon from "@material-ui/icons/Star";
import TimerIcon from "@material-ui/icons/Timer";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeSharpIcon from "@material-ui/icons/NearMeSharp";
import NoteSharpIcon from "@material-ui/icons/NoteSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useSelector, useDispatch } from "react-redux";
import { formopen, formclose } from "../action/index";

const Sidebar = () => {
  const myState = useSelector((state) => state.formhandle);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div className="sidebar_button">
        <Button className="composebtn"  onClick={() => dispatch(formopen())} startIcon={<AddIcon />} fontSize="large">
          Compose
        </Button>
      </div>

      <div className="sidebar_options">
        <Sidebaroption Icon={InboxIcon} title="Inbox" number="54" />
        <Sidebaroption Icon={StarIcon} title="Starred" number="54" />
        <Sidebaroption Icon={TimerIcon} title="Snoozed" number="54" />
        <Sidebaroption
          Icon={LabelImportantIcon}
          title="Important"
          number="54"
        />
        <Sidebaroption Icon={NearMeSharpIcon} title="Sent" number="54" />
        <Sidebaroption Icon={NoteSharpIcon} title="Drafts" number="54" />
        <Sidebaroption Icon={ExpandMoreSharpIcon} title="More" number="54" />
      </div>

      <div className="sidebaricon">
        <IconButton>
          <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <DuoOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <PhoneIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
