import React, { useState, useEffect } from "react";
import agenda from "../../assets/images/agenda.svg";
import peopleIcon from "../../assets/images/peopleIcon.svg";
import attachIcon from "../../assets/images/attachIcon.svg";
import globeIcon from "../../assets/images/globeIcon.svg";
import Modal from "../Modal";
import { assessmentData } from "../../utils/constants/assessmentData";
import AssessmentBox from "../AssessmentBox";

const AssessmentSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="assessmentHeadingContainer">
        <div className="assessmentHeadingContainer_headingText">
          <span>Assessment</span>
        </div>
        <div className="assessmentHeadingContainer_tabText">
          <span>My Assessments</span>
          <span className="assessmentHeadingContainer_tabBorder">&nbsp;</span>
        </div>
      </div>
      <div className="assesmentOverview">
        <div className="assesmentOverview_heading">Assessments Overview</div>
        <div className="assessmentDetailsContainer">
          <div className="assessmentDetails">
            <div className="assessmentDetails_heading">Total Assessment</div>

            <div className="assessmentDetails_bottomContainer">
              <div className="assessmentDetails_bottomContainer_icon">
                <img src={agenda} alt="agenda"></img>
              </div>
              <div className="assessmentDetails_bottomContainer_number">34</div>
            </div>
          </div>

          <div className="assessmentDetails">
            <div className="assessmentDetails_heading">Candidates</div>

            <div className="assessmentDetails_bottomContainer">
              <div className="assessmentDetails_bottomContainer_icon">
                <img src={peopleIcon} alt="agenda"></img>
              </div>
              <div className="multipleDetailsParentContainer">
                <div className="multipleDetailsContainer">
                  <div className="multipleDetailsContainer_topSection">
                    <div className="topSectionText">11,145</div>
                    <div className="topSectionSecondaryText">+89</div>
                  </div>
                  <div className="multipleDetailsContainer_bottomSection">
                    Total Candidate
                  </div>
                </div>

                <div className="multipleDetailsContainer">
                  <div className="multipleDetailsContainer_topSection">
                    <div className="topSectionText">114</div>
                    <div className="topSectionSecondaryText">+89</div>
                  </div>
                  <div className="multipleDetailsContainer_bottomSection">
                    Who attempted
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="assessmentDetails">
            <div className="assessmentDetails_heading">Candidates Source</div>

            <div className="assessmentDetails_bottomContainer">
              <div className="assessmentDetails_bottomContainer_icon">
                <img src={globeIcon} alt="agenda"></img>
              </div>
              <div className="multipleDetailsParentContainer">
                <div className="multipleDetailsContainer">
                  <div className="multipleDetailsContainer_topSection">
                    <div className="topSectionText">11,000</div>
                    <div className="topSectionSecondaryText">+89</div>
                  </div>
                  <div className="multipleDetailsContainer_bottomSection">
                    E-mail
                  </div>
                </div>

                <div className="multipleDetailsContainer">
                  <div className="multipleDetailsContainer_topSection">
                    <div className="topSectionText">145</div>
                    <div className="topSectionSecondaryText">+89</div>
                  </div>
                  <div className="multipleDetailsContainer_bottomSection">
                    Social Share
                  </div>
                </div>

                <div className="multipleDetailsContainer">
                  <div className="multipleDetailsContainer_topSection">
                    <div className="topSectionText">145</div>
                    <div className="topSectionSecondaryText">+89</div>
                  </div>
                  <div className="multipleDetailsContainer_bottomSection">
                    Unique Link
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="assessmentDetails">
            <div className="assessmentDetails_heading">Total Purpose</div>

            <div className="assessmentDetails_bottomContainer">
              <div className="assessmentDetails_bottomContainer_icon">
                <img src={attachIcon} alt="attach"></img>
              </div>
              <div className="assessmentDetails_bottomContainer_number">11</div>
            </div>
          </div>
        </div>
      </div>

      <AssessmentBox
        handleOpenModal={() => openModal()}
        assessmentData={assessmentData}
      />

      {modalOpen && (
        <Modal handleClose={() => closeModal()} isOpen={modalOpen} />
      )}
    </>
  );
};

export default AssessmentSection;
