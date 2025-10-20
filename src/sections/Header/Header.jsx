import styles from "./HeaderStyles.module.css";
import React, { useState, useEffect } from "react";

import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import { useProfile } from "../../common/ProfileContext";

function Header({ refs }) {
  const { heroRef, projectRef, experienceRef, skillRef, contactRef } = refs;
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const profile = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // kalau scroll ke bawah -> sembunyikan
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true);
      } else {
        // kalau scroll ke atas -> tampilkan lagi
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (ref) => {
    console.log(ref);
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="header"
      className={`${styles.container} ${hideHeader ? styles.hidden : ""}`}
    >
      <nav className={styles.header}>
        <div className={styles.navContainer}>
          <ul className={styles.navList}>
            <li onClick={() => scrollToSection(heroRef)}>Home</li>
            <li onClick={() => scrollToSection(projectRef)}>Projects</li>
            <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li onClick={() => scrollToSection(skillRef)}>Skills</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>

          <div className={styles.iconGroup}>
            <a href="">
              <img src={twitterDark} alt="twitter icon" />
            </a>
            <a
              href={profile.socialmedia.githubUrl}
              target={profile.socialmedia.githubUrl}
            >
              <img src={githubDark} alt="github icon" />
            </a>
            <a
              href={profile.socialmedia.linkedinUrl}
              target={profile.socialmedia.linkedinUrl}
            >
              <img src={linkedinDark} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
