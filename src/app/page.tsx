"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaDatabase, FaFileCode, FaJava, FaLaptopCode, FaProjectDiagram } from "react-icons/fa"; 
import { SiMongodb, SiMysql, SiJavascript, SiPython, SiTypescript } from "react-icons/si"; 

const statsData = [
  { icon: <FaProjectDiagram />, label: "Real Projects", value: 10, suffix: "+" },
  { icon: <FaLaptopCode />, label: "Practice Projects", value: 60, suffix: "+" },
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
      const duration = 1000;
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
      <span style={styles.counter}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div style={styles.container}>
      {/* Page Heading */}
      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Statistics
      </motion.h1>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {statsData.map((stat, i) => (
          <motion.div
            style={styles.statCard}
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div style={styles.icon}>{stat.icon}</div>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.div
        style={styles.section}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Programming Languages</h2>
        <div style={styles.techGrid}>
          {languages.map((lang, idx) => (
            <div key={idx} style={styles.techItem}>
              <span style={styles.techIcon}>{lang.icon}</span>
              {lang.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Databases */}
      <motion.div
        style={styles.section}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Databases & Tools</h2>
        <div style={styles.techGrid}>
          {databases.map((db, idx) => (
            <div key={idx} style={styles.techItem}>
              <span style={styles.techIcon}>{db.icon}</span>
              {db.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        style={styles.about}
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

/* CSS-in-JS styles */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Inter', sans-serif",
    color: "#1f2937",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "3rem",
    color: "#4f46e5",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  },
  statCard: {
    backgroundColor: "#ffffff",
    padding: "2rem 1rem",
    borderRadius: "1.5rem",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#4f46e5",
    marginBottom: "0.5rem",
  },
  counter: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#1f2937",
  },
  section: {
    marginBottom: "3rem",
  },
  techGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem 2rem",
  },
  techItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "#f3f4f6",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    fontWeight: 500,
    transition: "transform 0.3s ease, background-color 0.3s ease",
    cursor: "default",
  },
  techIcon: {
    fontSize: "1.5rem",
    color: "#4f46e5",
  },
  about: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "1.5rem",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
};
