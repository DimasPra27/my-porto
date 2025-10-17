import styles from "./ProjectsStyles.module.css";
import { forwardRef } from "react";

import viberr from "./../../assets/viberr.png";
import freshBurger from "./../../assets/fresh-burger.png";
import hipsster from "./../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

import { useProfile } from "../../common/ProfileContext";

const Projects = forwardRef((props, ref) => {
  const profile = useProfile();

  return (
    <section id="projects" ref={ref} className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {(() => {
          const arr = [];
          profile.projects.forEach((project) => {
            arr.push(
              <ProjectCard
                src={project.logo}
                link={"_blank"}
                h3={project.name}
                p={project.description}
              />
            );
          });
          return arr;
        })()}
      </div>
    </section>
  );
});

export default Projects;
