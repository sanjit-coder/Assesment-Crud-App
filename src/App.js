import "./App.css";
import { useState, useEffect } from "react";
import AssessmentSection from "./components/AssessmentSection";
import SideDrawer from "./components/SideDrawer";
import "./styles/scss/main.scss";
import MobileDrawer from "./components/MobileDrawer/index";
import AssessmentBox from "./components/AssessmentBox";
import Modal from "./components/Modal";
import { assessmentData } from "./utils/constants/assessmentData";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tabSelected, setTabSelected] = useState("myAssessments");
  const [modalData, setModalData] = useState([]);

  const handleChangeTab = (value) => {
    setTabSelected(value);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addAssessment = (data) => {
    if (modalData.length <= 3) {
      const myData = [...modalData, data];
      setModalData(myData);
    } else {
      const myData = [...modalData.slice(0, 3), data, ...modalData.slice(3)];
      setModalData(myData);
    }

    closeModal();
  };

  useEffect(() => {
    setModalData(assessmentData);
  }, []);
  return (
    <>
      <div className="App">
        <SideDrawer activeKey={"assessment"}>
          <AssessmentSection />
        </SideDrawer>
        <MobileDrawer
          activeKey={"assessment"}
          heading="Assessment"
          hasTabs={true}
          tabSelected={tabSelected}
          handleChangeTab={(value) => handleChangeTab(value)}
        >
          <AssessmentBox
            handleOpenModal={() => setModalOpen(true)}
            assessmentData={modalData}
          />
        </MobileDrawer>

        {modalOpen && (
          <Modal
            handleClose={() => closeModal()}
            isOpen={modalOpen}
            handleSaveClick={(data) => addAssessment(data)}
          />
        )}
      </div>
    </>
  );
}

export default App;
