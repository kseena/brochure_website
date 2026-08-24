import React from "react";
import {
  SiCss,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import girl from "../../../../assets/girlo.png";
import houseBg from "../../../../assets/house-bg.png";
import styles from "./House.module.css";

export const House: React.FC = () => {
  return (
  
     <div className={styles.building} style={{ backgroundImage: `url(${houseBg})` }}>
     <div className={styles.rooms}>


        {/* 4th floor */}
    <div className={styles.fourthFloor}>
      <div className={styles.aboutMeRoom}>
       <div className={styles.girlCharacter} style={{ backgroundImage: `url(${girl})` }}></div>

        <span>About me</span>
    </div>

  <div className={styles.techRoom}>
    <div className={styles.techIcons}>
      <SiReact className={`${styles.techIcon} ${styles.reactIcon}`} />
      <SiTypescript className={`${styles.techIcon} ${styles.typescriptIcon}`} />
      <SiJavascript className={`${styles.techIcon} ${styles.javascriptIcon}`} />
      <SiPython className={`${styles.techIcon} ${styles.pythonIcon}`} />
      <SiNodedotjs className={`${styles.techIcon} ${styles.nodeIcon}`} />
      <SiGit className={`${styles.techIcon} ${styles.gitIcon}`} />
      <SiDocker className={`${styles.techIcon} ${styles.dockerIcon}`} />
      <SiHtml5 className={`${styles.techIcon} ${styles.htmlIcon}`} />
      <SiCss className={`${styles.techIcon} ${styles.cssIcon}`} />
    </div>

    <span>
      Tech stack
    </span>
  </div>
</div>

        {/* 3d floor */}
        <div className={styles.tirdFloor}>
          <div>Education</div>
          <div>Experience</div>
          <div>Skills</div>
        </div>

        {/* 2d floor */}
        <div className={styles.secondFloor}>
          <div>Code room</div>
          <div>Playground</div>
        </div>

        {/* 1st floor */}
        <div className={styles.firstFloor}>
          <div>Tools and integrations</div>
          <div>Contacts</div>
        </div>
      </div> 
    </div>
  );
};
