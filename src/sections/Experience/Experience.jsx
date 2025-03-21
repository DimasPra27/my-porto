import styles from "./ExperienceStyles.module.css";
// import itBinus from "../../assets/Experience/it_binus_logo.jpg";
import ExperienceList from "../../common/ExperienceList";

import { useProfile } from "../../common/ProfileContext";

function Experience() {
  const profile = useProfile();
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <ExperienceList styles={styles} experiences={profile.workingExperience} />
    </section>
  );
}

export default Experience;
