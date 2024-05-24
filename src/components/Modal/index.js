import React, { useEffect, useRef, useState } from "react";
import crossIcon from "../../assets/images/crossIcon.svg";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import Skills from "../SkillsInput";
import {
  purposeOptions,
  descriptionOptions,
} from "../../utils/constants/dropdownOptions";

const Modal = ({ isOpen, handleClose, handleSaveClick }) => {
  const modalRef = useRef(null);
  const [closed, setClosed] = useState(false);
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    console.log("VALUES ARE", title, purpose, duration, description);
    const data = {
      title,
      purpose,
      description,
      duration,
    };
    handleSaveClick(data);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
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
      <div className="backdrop">
        <div
          className={`modalContainer ${
            isOpen && !closed ? "modalOpen" : "modalClosed"
          }`}
          ref={modalRef}
        >
          <div className="modalContainer_header">
            <div className="modalContainer_header_text">
              Create new Assessment
            </div>
            <div
              className="modalContainer_header_icon"
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
          <div className="modalContainer_inputs">
            <TextInput
              label="Name of assessment"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <SelectInput
              label="Purpose of the test is"
              options={purposeOptions}
              value={purpose}
              onChange={(value) => setPurpose(value)}
            />
            <SelectInput
              label="Description"
              options={descriptionOptions}
              value={description}
              onChange={(value) => setDescription(value)}
            />
            <Skills />
            <TextInput
              label="Duration of assessment"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="modalContainer_footerSection">
            <button className="saveBtn" onClick={() => handleSave()}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
