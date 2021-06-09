import React, { useState } from "react";
import "./Form.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { formopen, formclose } from "../action/index";
import { useForm } from "react-hook-form";
const Form = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const myState = useSelector((state) => state.formhandle);
  const dispatch = useDispatch();

  const {register,handleSubmit,watch,errors} = useForm();

 const formSubmit = (e) =>{
    
    setTo("");
    setSubject("");
    setMessage("");
 }

  return (
    <div className="form">
      <div className="formheader">
        <h2>New Message ... </h2>
        <IconButton onClick={() => dispatch(formclose())} >
          <CloseIcon />
        </IconButton>
      </div>
      <form>
        <input
          className="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          type="text"
          placeholder="To"
        />
        <input
          className="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="message"
          placeholder="Enter Your Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="button" onClick={formSubmit} className="formsubmit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
