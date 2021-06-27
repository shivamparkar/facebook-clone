import React from "react";
import "./SidebarRow.css";
import FaceIcon from '@material-ui/icons/Face';

function SidebarRow({ src, Icon, title }) {
	return(
	 <div className="SidebarRow">
	 {src && <FaceIcon src={src} />}
	 {Icon && <Icon />}

	 <h4>{title}</h4>
	 </div>
	};
)

export default SidebarRow;