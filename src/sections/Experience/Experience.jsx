import styles from "./ExperienceStyles.module.css";
import React, { forwardRef } from "react";
// import itBinus from "../../assets/Experience/it_binus_logo.jpg";
import ExperienceList from "../../common/ExperienceList";

import { useProfile } from "../../common/ProfileContext";

// forwardRef() tidak boleh dipanggil di dalam fungsi lain.
// Harus langsung membungkus komponen dari luar, karena React perlu tahu sejak awal bahwa ini komponen dengan ref.

const Experience = forwardRef((props, ref) => {
  const profile = useProfile();

  return (
    <section id="projects" ref={ref} className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <ExperienceList styles={styles} experiences={profile.workingExperience} />
    </section>
  );
});

export default Experience;
