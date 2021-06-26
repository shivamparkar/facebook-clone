import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';

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
	     <input type="text" />
	    </div>
	   </div>

	    <div className="header__middle">
	        <div className="header__option">
	          <HomeIcon fontsize="large" />
	    </div>  
	    <div className="header__option">
	          <FlagIcon fontsize="large" />
	    </div>
	    <div className="header__option">
	       <SubscriptionsIcon fontsize="large" />
	    </div> 
	    <div className="StorefrontIcon">
	       <StorefrontIcon fontsize="large" />
	    </div>   
	    </div>

	    <div className="header_right"></div>
	</div>
  )
};
export default Header;