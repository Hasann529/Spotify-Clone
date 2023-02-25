import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Header = ({ spotify }) => {

    const {user} = useSelector(state => state.users)

  return (
    <div className="header">
      <div className="header__left">
      <SearchIcon />
      <input className="inp" type='text' placeholder="Search for Artists, Songs, or Podcasts">

      </input>
      </div>
      <div className="header__right">
         <Avatar className="avatar" src={user?.images[0].url} alt={user?.display_name} /> 
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
