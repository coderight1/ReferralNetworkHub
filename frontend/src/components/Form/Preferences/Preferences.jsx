import React from "react";
import { FiInfo } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import styles from "../Form.module.css";
import styles1 from "./Preferences.module.css";
import { handleChange } from "../formHelperFunc";
import ChipTextField from "../ChipTextField/ChipTextField";

const Preferences = ({ preferences, setPreferences }) => {
  return (
    <div className={styles.preferences}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <h3>Preferences</h3>
          <FiInfo className={styles1.icon} data-tip data-for="info-tooltip" />
        </div>
      </div>
      <Tooltip
        anchorSelect={`.${styles1.icon}`}
        place="top"
        id="info-tooltip"
        type="light"
        effect="solid"
      >
        <span className={styles.tooltipContent}>
          Selecting "I am able to provide referrals to others" <br></br>& "Both"
          your profile will be publicly visible <br></br>
          on the Explore page for referral requests.<br></br>
          Selecting "I am looking for referrals," your information
          <br></br>
          will be visible to users from whom you request referrals
        </span>
      </Tooltip>
      <div className={styles.inputRow}>
        <select
          className={styles.selectField}
          name="availabilityForReferrals"
          defaultValue=""
          onChange={(e) => handleChange(e, setPreferences)}
        >
          <option value="" disabled>
            Availability for Referrals
          </option>
          <option>I am able to provide referrals to others</option>
          <option>I am looking for referrals</option>
          <option>
            I can both provide referrals in my current company and am looking
            for referrals
          </option>
        </select>
        <ChipTextField
          placeholder={"Job Preferences"}
          inputName={"jobPreferences"}
          chips={preferences.jobPreferences}
          setChips={setPreferences}
        />
      </div>
    </div>
  );
};

export default Preferences;
