import React, { useState } from "react";
import addIcon from "../../assets/images/addIcon.svg";
import jobIcon from "../../assets/images/jobIcon.svg";
import editIcon from "../../assets/images/editIcon.svg";
import calendar from "../../assets/images/calendar.svg";
import link from "../../assets/images/link.svg";
import search from "../../assets/images/search.svg";
import filterlist from "../../assets/images/filterlist.svg";
import agenda from "../../assets/images/agenda.svg";
import peopleIcon from "../../assets/images/peopleIcon.svg";
import attachIcon from "../../assets/images/attachIcon.svg";
import globeIcon from "../../assets/images/globeIcon.svg";
import barchart from "../../assets/images/barchart.svg";

const AssessmentBox = ({ handleOpenModal, assessmentData }) => {
  const [showTotalAssessments, setShowTotalAssessments] = useState(false);
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setShowTotalAssessments(false);
    setClosed(false);
  };
  const newAssessmentBox = () => {
    return (
      <div className="assessmentNewBox" onClick={() => handleOpenModal()}>
        <div className="assessmentNewBox_icon">
          <img src={addIcon} alt="addIcon"></img>
        </div>
        <div className="assessmentNewBox_primaryText">New Assessment</div>
        <div className="assessmentNewBox_secondaryText">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </div>
      </div>
    );
  };

  return (
    <div className="createAssessmentSection">
      {showTotalAssessments && (
        <div className="totalAssessmentParentBox">
          <div class="container">
            <div class="section1">
              <div class="subsection border-right">
                <div className="titleContainer">
                  <div className="titleContainer_topSection">
                    Total Assessment
                  </div>
                  <div className="titleContainer_bottomSection">
                    <div className="titleContainer_bottomSection_icon">
                      <img src={agenda} />
                    </div>
                    <div className="titleContainer_bottomSection_heading">
                      34
                    </div>
                  </div>
                </div>
              </div>
              <div class="subsection ">
                <div className="titleContainer">
                  <div className="titleContainer_topSection">Total Purpose</div>
                  <div className="titleContainer_bottomSection">
                    <div className="titleContainer_bottomSection_icon">
                      <img src={agenda} />
                    </div>
                    <div className="titleContainer_bottomSection_heading">
                      11
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section2">
              <div className="assessmentDetails">
                <div className="assessmentDetails_heading">Candidates</div>

                <div className="assessmentDetails_bottomContainer">
                  <div className="assessmentDetails_bottomContainer_icon">
                    <img src={peopleIcon} alt="people"></img>
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
            </div>
            <div class="section3">
              <div className="assessmentDetails">
                <div className="assessmentDetails_heading">
                  Candidates Source
                </div>

                <div className="assessmentDetails_bottomContainer">
                  <div className="assessmentDetails_bottomContainer_icon">
                    <img
                      src={globeIcon}
                      alt="people"
                      style={{ width: "40px", height: "40px" }}
                    ></img>
                  </div>
                  <div className="multipleDetailsParentContainer">
                    <div className="multipleDetailsContainer">
                      <div className="multipleDetailsContainer_topSection">
                        <div className="topSectionText">11,000</div>
                        <div className="topSectionSecondaryText">+89</div>
                      </div>
                      <div className="multipleDetailsContainer_bottomSection">
                        Email
                      </div>
                    </div>

                    <div className="multipleDetailsContainer">
                      <div className="multipleDetailsContainer_topSection">
                        <div className="topSectionText">11,000</div>
                        <div className="topSectionSecondaryText">+89</div>
                      </div>
                      <div className="multipleDetailsContainer_bottomSection">
                        Social Share
                      </div>
                    </div>

                    <div className="multipleDetailsContainer">
                      <div className="multipleDetailsContainer_topSection">
                        <div className="topSectionText">11,000</div>
                        <div className="topSectionSecondaryText">+89</div>
                      </div>
                      <div className="multipleDetailsContainer_bottomSection">
                        Unique Link
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="createAssessmentSection_headingContainer">
        <div className="createAssessmentSection_headingContainer_heading">
          My Assessment
        </div>
        <div className="createAssessmentSection_headingContainer_icons">
          <img src={search} />
          <img src={filterlist} />
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: showTotalAssessments ? "#F2F8FE" : "transparent",
              border: showTotalAssessments ? "1px solid #0073E6" : "none",
              borderRadius: "50px",
              borderRadius: "50%",
            }}
          >
            <img
              src={barchart}
              onClick={() => {
                setShowTotalAssessments(!showTotalAssessments);
              }}
              style={{ display: "flex", alignSelf: "center" }}
            />
          </div>
        </div>
      </div>

      <div className="assessmentParentBox">
        {newAssessmentBox()}
        {assessmentData &&
          assessmentData.map((item) => {
            return (
              <div className="assessmentBox">
                <div className="assessmentBox_topSection">
                  <div className="leftSection">
                    <div className="leftSection_icon">
                      <img src={jobIcon} alt="jobIcon" />
                    </div>
                    <div className="leftSectionDetails">
                      <div className="leftSectionDetails_heading">
                        {item?.title}
                      </div>
                      <div className="leftSectionDetails_bottomSection">
                        <div className="leftSectionDetails_bottomSection_title">
                          Job
                        </div>
                        <div className="leftSectionDetails_bottomSection_date">
                          <div className="dateIcon">
                            <img src={calendar} alt="calendar" />
                          </div>
                          <div className="dateText">{item?.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightSection">
                    <img src={editIcon} alt="edit"></img>
                  </div>
                </div>
                <div className="assessmentBoxFooter">
                  <div className="assessmentBoxFooter_questionInfo">
                    <div className="questionDetailBox">
                      <div className="questionDetailBox_value">
                        {item?.duration}
                      </div>
                      <div className="questionDetailBox_text">Duration</div>
                    </div>
                    <div className="questionDetailBox">
                      <div className="questionDetailBox_value">
                        {item?.questions}
                      </div>
                      <div className="questionDetailBox_text">Questions</div>
                    </div>
                  </div>
                  <div className="assessmentBoxFooter_shareContainer">
                    <div className="assessmentBoxFooter_shareBox">
                      <div className="assessmentBoxFooter_shareBox_icon">
                        <img src={link} alt="link" />
                      </div>
                      <div className="assessmentBoxFooter_shareBox_text">
                        Share
                      </div>
                    </div>
                    {/* <div className="badge-container">
              <div class="badge">LP</div>
              <div className="badge">SK</div>
              <div className="badge">AB</div>
            </div> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AssessmentBox;
