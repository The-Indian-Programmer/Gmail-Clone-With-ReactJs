import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  const myuser = useSelector((state) => state.signin);
  // console.log("The myuser is ",myuser)
  // console.log("The myuser.state is ",myuser.state)

  // const name = myuser.state.user.displayName;
  return (
    <div className="header">
      <div className="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
        <div className="header_left ml-8 text-lg text-gray-700 hidden md:flex">
          <MenuIcon />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="gmailicon"
          />
          <h1 className="gmailtext">Gmail</h1>
        </div>
        <span className="input-field w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <div className="searchicon">
            <SearchIcon />
          </div>
          <input
            type="search"
            name="serch"
            placeholder="Search Mail Here"
            className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
          <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
        </span>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="flex flex-row-reverse mr-8 hidden md:flex">
          <IconButton>
            <Avatar src={myuser.state.photoURL}/>
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <AppsIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
