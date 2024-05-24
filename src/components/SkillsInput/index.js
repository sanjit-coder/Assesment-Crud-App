import React, { useState } from "react";
import closeTag from "../../assets/images/closeTag.svg";

const Skills = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if ((e.key === "Enter" || e.keyCode === 13) && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagIndex) => {
    const updatedTags = tags.filter((tag, index) => index !== tagIndex);
    setTags(updatedTags);
  };

  return (
    <div className="skillsParentContainer">
      <div className="skillsParentContainer_heading">Skills</div>

      <div className="skillsContainer">
        {tags && tags?.length > 0 && (
          <div className="tagsContainer">
            {tags.map((tag, index) => (
              <div className="tag" key={index}>
                <span>{tag}</span>
                <div
                  onClick={() => handleTagRemove(index)}
                  className="tagCloseIcon"
                >
                  <img src={closeTag} alt="closeTag" />
                </div>
              </div>
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder="Type here and press enter"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className={`inputField ${tags.length === 0 ? "tagEmpty" : ""}`}
        />
      </div>
    </div>
  );
};

export default Skills;
