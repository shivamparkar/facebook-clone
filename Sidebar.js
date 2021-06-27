import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar(){
	return <div className="sidebar">
	<SidebarRow src="" title="" />
	<SidebarRow 
	Icon={localHospitalIcon}
	title="Covid-19 Information center" 
	/>
	 <SidebarRow Icon={EmojiflagsIcon} title="Pages" />
	 titles'Friends' />
	 <SidebarRow Icon={PeopleIcon} title="Friends" />
	 <SidebarRow Icon={ChatIcon} title="Messanger />
	 <SidebarRow Icon={StorefrontIcon} title="Marketplace" 
	 />
	 <SidebarRown Icon={VideoLibrabryIcon} title="Videos" />
	 <Sidebar Icons{ExpandMoreIcon} title="Marketplace" />
	</div>
}

export default Sidebar;