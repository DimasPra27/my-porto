import { forwardRef, useRef } from "react";

import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Profile/my-personal-photo.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useProfile } from "../../common/ProfileContext";

const Hero = forwardRef((props, ref) => {
  const { theme, toggleTheme } = useTheme();
  const profile = useProfile();

  // console.log(profile);

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" ref={ref} className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture"
          srcset=""
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          {profile.firstName} <br /> {profile.lastName}
        </h1>
        <h2>{profile.role}</h2>
        <span>
          <a href={profile.socialmedia.twitterUrl}>
            <img src={twitterIcon} alt="twitter icon" srcset="" />
          </a>
          <a
            href={profile.socialmedia.githubUrl}
            target={profile.socialmedia.githubUrl}
          >
            <img src={githubIcon} alt="github icon" srcset="" />
          </a>
          <a href={profile.socialmedia.linkedinUrl} target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" srcset="" />
          </a>
        </span>
        <p className={styles.description}>{profile.description}</p>
        <a href={profile.socialmedia.cvUrl} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
});

// function Hero() {}

export default Hero;
