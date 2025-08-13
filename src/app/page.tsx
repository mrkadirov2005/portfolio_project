"use client";
import React, { useEffect, useState } from "react";
import Styles from "./stats/stats.module.css";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaDatabase, FaFileCode, FaJava, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript, SiPython, SiTypescript } from "react-icons/si";

const statsData = [
  { icon: <FaProjectDiagram />, label: "Real Projects", value: 10, suffix: "+" },
  { icon: <FaLaptopCode />, label: "Practice Projects", value: 50, suffix: "+" },
  { icon: <FaCode />, label: "Programming Languages", value: 5, suffix: "" },
  { icon: <FaDatabase />, label: "Databases Used", value: 2, suffix: "" },
];

const languages = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaFileCode />, name: "VBA" },
];

const databases = [
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "SQL (MySQL, SQL Workbench)" },
];

export default function StatisticsPage() {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const Counter = ({ value, suffix }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = value;
      const duration = 1000; // 1s
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }, [value]);
    return (
      <span className={Styles.counter}>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className={Styles.container}>
      {/* Page Heading */}
      <motion.h1
        className={Styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Statistics
      </motion.h1>

      {/* Stats Grid */}
      <div className={Styles.statsGrid}>
        {statsData.map((stat, i) => (
          <motion.div
            className={Styles.statCard}
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={Styles.icon}>{stat.icon}</div>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.div
        className={Styles.section}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Programming Languages</h2>
        <div className={Styles.techGrid}>
          {languages.map((lang, idx) => (
            <div key={idx} className={Styles.techItem}>
              <span className={Styles.techIcon}>{lang.icon}</span>
              {lang.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Databases */}
      <motion.div
        className={Styles.section}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Databases & Tools</h2>
        <div className={Styles.techGrid}>
          {databases.map((db, idx) => (
            <div key={idx} className={Styles.techItem}>
              <span className={Styles.techIcon}>{db.icon}</span>
              {db.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        className={Styles.about}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Full-stack Web Developer</strong> with expertise in both frontend and backend technologies.
          My experience includes building <strong>10+ real projects</strong> and <strong>50+ practice projects</strong> in different tech stacks.
        </p>
        <p>
          I love exploring <strong>modern web frameworks</strong>, integrating <strong>databases</strong>, and writing clean, scalable code.
        </p>
      </motion.div>
    </div>
  );
}