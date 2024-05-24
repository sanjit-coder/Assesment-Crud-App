import React from "react";
import { sideDrawerList } from "../../utils/constants/sideDrawerList";
import roundstatus from "../../assets/images/roundstatus.svg";

const SideDrawer = ({ activeKey, children }) => {
  return (
    <div className="parentContainer">
      <div className="sideDrawerContainer">
        <div className="listContainer">
          {sideDrawerList &&
            sideDrawerList.map((item) => {
              return (
                <div
                  className={`listItem ${
                    activeKey === item?.key ? "listItem_active" : ""
                  }`}
                  key={item?.id}
                >
                  <img className="listItem_icon" src={item?.icon}></img>
                  <div className="listItem_text">{item?.text}</div>
                </div>
              );
            })}
        </div>
        <div className="adminSection">
          <button className="adminSection_button">Admin</button>
          <div className="listItem">
            <img className="listItem_icon" src={roundstatus}></img>
            <div className="listItem_text">Round Status</div>
          </div>
        </div>
      </div>
      <div className="overviewContainer">{children}</div>
    </div>
  );
};

export default SideDrawer;
