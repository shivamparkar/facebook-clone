import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
	return (
	<div className="header">
	  <div className="header__left">
	  <img
	    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
	    alt=""
	    />
	    <div className="header__input">
	     <SearchIcon />
	     <input placeholder="Search Facebook" 
	     type="text" />
	    </div>
	   </div>

	    <div className="header__center">
	        <div className="header__option
	        header__option--active">
	          <HomeIcon fontsize="large" />
	    </div>  
	    <div className="header__option">
	          <FlagIcon fontsize="large" />
	    </div>
	    <div className="header__option">
	       <SubscriptionsIcon fontsize="large" />
	    </div> 
	    <div className="header__option">
	       <StorefrontIcon fontsize="large" />
	    </div>   
	    </div>

	    <div className="header_right">
	    <div className="header__info">
	    <PersonIcon />
	    <h4>gun_kelly_12</h4>
	    </div>

	    
	    <AddIcon />
	    <NotificationsIcon />
	    <ExpandMoreIcon />
	    <AccountCircleIcon />
	    </div>
	  </div>  
  );
}
export default Header;