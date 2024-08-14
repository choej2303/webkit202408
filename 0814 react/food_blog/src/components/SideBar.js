import React from "react";

function SideBar ({sidebarItems, w3_close}) {
    return (
        <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left"
             style={{display: "none", zIndex: "2", width: "40%", minWidth: "300px"}} id="mySidebar">
            <a href="javascript:void(0)" onClick={w3_close}
               className="w3-bar-item w3-button">Close Menu</a>
            {sidebarItems.map(((item, idx) => {
                return <a href={item.href} onClick={w3_close} className="w3-bar-item w3-button">{item.label}</a>
            }))}
        </nav>
    )
}

export default SideBar