/* snipet rfce */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Avatar ,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook_logo"
        />
      </div>

      <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Buscar" />
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option ">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>

        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SupervisorAccountIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
                <Avatar />
                <h4>Jesulujan</h4>
        </div>
      </div>

      <IconButton>
          <AddIcon/>
      </IconButton>
      <IconButton>
          <ForumIcon/>
      </IconButton>
      <IconButton>
          <NotificationsIcon/>
      </IconButton>
      <IconButton>
          <ExpandMoreIcon/>
      </IconButton>


    </div>
  );
}

export default Header;
