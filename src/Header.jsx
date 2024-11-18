import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
function Header() {
  return (
    <div className="">
      <div className="">
        <AccountCircleIcon
          className=""
          //   alt={user?.displayName}
          //   src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="">
        <SearchIcon />
        <input type="text" placeholder="Search Clever Programming" />
      </div>
      <div className=" "></div>
    </div>
  );
}

export default Header;
