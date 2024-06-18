import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import styles from "../Form.module.css";
import styles1 from "./ProfessionalInfo.module.css";

const ProfessionalInfo = ({ handleOptionClick, selectedOption }) => {
  return (
    <div className={styles.professionalInfo}>
      <div className={styles1.header}>
        <div className={styles1.headerInfo}>
          <h3>Professional Information</h3>
          <FiInfo className={styles1.icon} data-tip data-for="info-tooltip" />
        </div>
        <div className={styles1.options}>
          <span
            className={selectedOption === "Experienced" ? styles1.active : ""}
            onClick={() => handleOptionClick("Experienced")}
          >
            Experienced
          </span>
          <span>/</span>
          <span
            className={selectedOption === "Fresher" ? styles1.active : ""}
            onClick={() => handleOptionClick("Fresher")}
          >
            Fresher
          </span>
        </div>
      </div>
      <Tooltip
        anchorSelect={`.${styles1.icon}`}
        place="top"
        id="info-tooltip"
        type="light"
        effect="solid"
      >
        <span className={styles1.tooltipContent}>
          If you're experienced but not working,<br></br>
          fill in 'Industry' & 'Years of Experience' only.<br></br>
          Enter 'NA' for job title, company name, etc.<br></br>
        </span>
      </Tooltip>
      <div className={styles.inputRow}>
        <input
          type="text"
          placeholder="Current Job Title"
          className={styles.inputField}
          disabled={selectedOption === "Fresher"}
          required={selectedOption === "Experienced"}
        />
        <input
          type="text"
          placeholder="Company Name"
          className={styles.inputField}
          disabled={selectedOption === "Fresher"}
          required={selectedOption === "Experienced"}
        />
      </div>
      <div className={styles.inputRow}>
        <input
          type="text"
          placeholder="Industry"
          className={styles.inputField}
          disabled={selectedOption === "Fresher"}
          required={selectedOption === "Experienced"}
        />
        <input
          type="text"
          placeholder="Years of Experience"
          className={styles.inputField}
          disabled={selectedOption === "Fresher"}
          required={selectedOption === "Experienced"}
        />
      </div>
    </div>
  );
};

export default ProfessionalInfo;