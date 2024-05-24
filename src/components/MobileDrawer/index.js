import React, { useState, useRef, useEffect } from "react";
import { sideDrawerList } from "../../utils/constants/sideDrawerList";
import roundstatus from "../../assets/images/roundstatus.svg";
import crossIcon from "../../assets/images/crossIcon.svg";
import appIcon from "../../assets/images/appIcon.svg";

const MobileDrawer = ({
  activeKey,
  heading,
  children,
  hasTabs,
  tabSelected,
  handleChangeTab,
}) => {
  const drawerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setClosed(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setClosed(true);
        setTimeout(() => {
          handleClose();
        }, 500);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClose]);

  return (
    <>
      <div className="headerSection">
        <div className="headerSection_icon" onClick={() => setIsOpen(true)}>
          <img src={appIcon} />
        </div>
        <div className="headerSection_text">{heading}</div>
      </div>
      {hasTabs && (
        <div class="tabs">
          <button
            class={`tab ${tabSelected === "myAssessments" ? "active" : ""}`}
            onClick={() => handleChangeTab("myAssessments")}
          >
            My Assessments
          </button>
          <button
            class={`tab ${tabSelected === "unstopAssessments" ? "active" : ""}`}
            onClick={() => handleChangeTab("unstopAssessments")}
          >
            Unstop Assessments
          </button>
        </div>
      )}
      <div className="childrenSection">{children}</div>
      {isOpen && (
        <div
          className={`mobileDrawerContainer ${
            isOpen && !closed ? "drawerOpen" : "drawerClosed"
          }`}
          ref={drawerRef}
        >
          <div className="mobileDrawer">
            <div className="mobileDrawerTopSection">
              <div className="mobileDrawerTopSection_heading">Menu</div>
              <div
                className="mobileDrawerTopSection_closeIcon"
                onClick={() => {
                  setClosed(true);
                  setTimeout(() => {
                    handleClose();
                  }, 500);
                }}
              >
                <img src={crossIcon} alt="crossIcon" />
              </div>
            </div>
            <div className="mobileDrawerList">
              {sideDrawerList.map((item) => {
                return (
                  <div
                    className={`mobileDrawerListItem ${
                      activeKey === item?.key
                        ? "mobileDrawerListItem_active"
                        : ""
                    }`}
                    key={item?.key}
                  >
                    <div className="mobileDrawerListItem_icon">
                      <img src={item?.icon} />
                    </div>
                    <div className="mobileDrawerListItem_text">
                      {item?.text}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mobileDrawerAdminSection">
              <div className="leftContainer">
                <div className="leftContainer_icon">
                  <img src={roundstatus} />
                </div>
                <div className="leftContainer_text">Round Status</div>
              </div>
              <div className="adminBtn">Admin</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileDrawer;
