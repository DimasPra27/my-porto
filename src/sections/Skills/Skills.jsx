import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

import { useProfile } from "../../common/ProfileContext";

function Skills() {
  const profile = useProfile();

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {(() => {
        const arr = [];
        Object.keys(profile.skills).forEach((test) => {
          const skills = [];
          profile.skills[test].forEach((value) => {
            skills.push(<SkillList src={checkMarkIcon} skill={value} />);
          });

          arr.push(<div className={styles.skillList}>{skills}</div>);
          arr.push(<hr />);
        });
        return arr;
      })()}
    </section>
  );
}

export default Skills;
