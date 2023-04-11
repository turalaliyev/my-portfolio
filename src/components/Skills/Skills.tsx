import React, { useEffect, useState } from 'react';

import ReactLogo from '../../images/React.png';
import JSLogo from '../../images/JavaScript.png';
import TSLogo from '../../images/Typescript.svg';
import HTMLLogo from '../../images/Html.png';
import CSSLogo from '../../images/Css.png';
import FigmaLogo from '../../images/Figma.png';
import Git from '../../images/Git.png';
import Vue from '../../images/Vue.png';
import TailwindLogo from '../../images/TailwindLogo.png';

import styles from './Skills.module.css';
import Skill from '../UI/SkillBadge/Skill';
import Button from '../UI/Button/Button';

const Skills = () => {
  const [skills, setSkills] = useState<{ title: string; image: string }[]>([]);

  useEffect(() => {
    setSkills([
      { title: 'React', image: ReactLogo },
      { title: 'JavaScript', image: JSLogo },
      { title: 'TypeScript', image: TSLogo },
      { title: 'HTML', image: HTMLLogo },
      { title: 'CSS', image: CSSLogo },
      { title: 'Figma', image: FigmaLogo },
      { title: 'Git', image: Git },
      { title: 'Vue', image: Vue },
      { title: 'Tailwind', image: TailwindLogo },
    ]);
  }, []);

  return (
    <>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          {skills.map(skill => {
            return <Skill title={skill.title} image={skill.image} />;
          })}
        </div>
        <div className={styles.projects}>
          <h1>Projects</h1>
        </div>
      </div>
      <Button to="/contact" text="Contact Me" />
    </>
  );
};

export default Skills;
