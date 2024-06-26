import React from "react";
import styles from "./About.module.css";


/**
 * About component representing the About Us page.
 * @returns {JSX.Element} About JSX element
 */
const About = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <h1>About Us</h1>
        <p>This is About Page</p>
      </div>
    </div>
  );
};

export default About;
