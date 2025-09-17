"use client";
import React, { useEffect, useState } from "react";
import { motion, easeOut, easeInOut } from "framer-motion";
import { FaCode, FaDatabase, FaFileCode, FaJava, FaLaptopCode, FaProjectDiagram } from "react-icons/fa"; 
import { SiMongodb, SiMysql, SiJavascript, SiPython, SiTypescript } from "react-icons/si"; 

const statsData = [ 
  { icon: <FaProjectDiagram />, label: "Real Projects", value: 10, suffix: "+", color: "#FF6B6B" }, 
  { icon: <FaLaptopCode />, label: "Practice Projects", value: 60, suffix: "+", color: "#4ECDC4" }, 
  { icon: <FaCode />, label: "Programming Languages", value: 5, suffix: "", color: "#FFD166" },
  { icon: <FaDatabase />, label: "Databases Used", value: 2, suffix: "", color: "#6A0572" },
];

const languages = [
  { icon: <SiJavascript />, name: "JavaScript", color: "#F0DB4F" },
  { icon: <SiPython />, name: "Python", color: "#306998" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#007ACC" },
  { icon: <FaJava />, name: "Java", color: "#EA2D2E" },
  { icon: <FaFileCode />, name: "VBA", color: "#867DB1" },
];

const databases = [
  { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
  { icon: <SiMysql />, name: "SQL (MySQL, SQL Workbench)", color: "#005C84" },
];

export default function StatisticsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const Counter = ({ value, suffix, color }: { value: number; suffix?: string; color: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let start = 0;
      const end = value;
      const duration = 2000;
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
    }, [value, isVisible]);
    
    return (
      <motion.span 
        style={{ ...styles.counter, color }}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}{suffix}
      </motion.span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Animated Background Elements */}
      <div style={styles.backgroundElements}>
        <motion.div 
          style={styles.circle1}
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity }
          }}
        />
        <motion.div 
          style={styles.circle2}
          animate={{ 
            rotate: -360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity }
          }}
        />
        <motion.div 
          style={styles.circle3}
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
      </div>

      {/* Page Heading */}
      <motion.div
        style={styles.headingContainer}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h1 style={styles.heading}>My <span style={styles.headingGradient}>Statistics</span></h1>
        <div style={styles.underline}></div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        style={styles.statsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {statsData.map((stat, i) => (
          <motion.div
            style={{ ...styles.statCard, backgroundColor: stat.color }}
            key={i}
            variants={itemVariants}
            whileHover="hover"
            custom={i}
          >
            <motion.div 
              style={styles.iconContainer}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            >
              <div style={styles.icon}>{stat.icon}</div>
            </motion.div>
            <Counter value={stat.value} suffix={stat.suffix} color="#FFFFFF" />
            <p style={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Languages Section */}
      <motion.div
        style={styles.section}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <h2 style={styles.sectionTitle}>Programming <span style={styles.titleHighlight}>Languages</span></h2>
        <div style={styles.techGrid}>
          {languages.map((lang, idx) => (
            <motion.div 
              key={idx} 
              style={{...styles.techItem, backgroundColor: lang.color, color: "#FFFFFF"}}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span style={styles.techIcon}>{lang.icon}</span>
              {lang.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Databases Section */}
      <motion.div
        style={styles.section}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <h2 style={styles.sectionTitle}>Databases & <span style={styles.titleHighlight}>Tools</span></h2>
        <div style={styles.techGrid}>
          {databases.map((db, idx) => (
            <motion.div 
              key={idx} 
              style={{...styles.techItem, backgroundColor: db.color, color: "#FFFFFF"}}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span style={styles.techIcon}>{db.icon}</span>
              {db.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        style={styles.about}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <h2 style={styles.aboutTitle}>About <span style={styles.titleHighlight}>Me</span></h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: easeOut }}
        >
          <p style={styles.aboutText}>
            Dynamic and skilled Software Engineer with more than 2 years of hands-on experience in the field. Proficient HTML, CSS, JavaScript, React.js, Next.js, TypeScript, and Redux Toolkit, Mongo, Node, ExpressJS, Python, Java and OOP. Demonstrated expertise in delivering successful projects, having completed more than 10 projects. Eager to leverage my experience and passion for creating exceptional user experiences to exceed user expectations.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* CSS-in-JS styles */
const styles: { [key: string]: React.CSSProperties } = {
  // ... (same as your version, unchanged)
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Inter', sans-serif",
    color: "#2D3748",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #F5F7FA 0%, #E4E7EB 100%)",
  },
  backgroundElements: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: "hidden" },
  circle1: { position: "absolute", top: "10%", right: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,107,0.2) 0%, rgba(255,107,107,0) 70%)", zIndex: 0 },
  circle2: { position: "absolute", bottom: "15%", left: "5%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(78,205,196,0.2) 0%, rgba(78,205,196,0) 70%)", zIndex: 0 },
  circle3: { position: "absolute", top: "60%", right: "20%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,209,102,0.2) 0%, rgba(255,209,102,0) 70%)", zIndex: 0 },
  headingContainer: { textAlign: "center", marginBottom: "4rem", position: "relative", zIndex: 2 },
  heading: { fontSize: "3.5rem", fontWeight: 800, color: "#2D3748", marginBottom: "1rem" },
  headingGradient: { background: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFD166 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  underline: { height: "6px", width: "100px", background: "linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFD166)", margin: "0 auto", borderRadius: "3px" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "6rem", position: "relative", zIndex: 2 },
  statCard: { padding: "2.5rem 1.5rem", borderRadius: "1.5rem", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "all 0.3s ease", cursor: "default", position: "relative", overflow: "hidden", color: "white" },
  iconContainer: { display: "inline-flex", justifyContent: "center", alignItems: "center", marginBottom: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "50%", width: "80px", height: "80px" },
  icon: { fontSize: "3rem", color: "#FFFFFF" },
  counter: { fontSize: "3rem", fontWeight: 800, display: "block", marginBottom: "0.5rem", textShadow: "0 2px 4px rgba(0,0,0,0.2)" },
  statLabel: { fontSize: "1.1rem", fontWeight: 600, color: "rgba(255, 255, 255, 0.9)", margin: 0, textShadow: "0 1px 2px rgba(0,0,0,0.2)" },
  section: { marginBottom: "5rem", position: "relative", zIndex: 2 },
  sectionTitle: { fontSize: "2.2rem", fontWeight: 700, color: "#2D3748", marginBottom: "2rem" },
  titleHighlight: { background: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  techGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" },
  techItem: { display: "flex", alignItems: "center", gap: "1rem", padding: "1.2rem 1.5rem", borderRadius: "1rem", fontWeight: 600, boxShadow: "0 5px 15px rgba(0,0,0,0.1)", transition: "all 0.3s ease", cursor: "default" },
  techIcon: { fontSize: "1.8rem", filter: "brightness(0) invert(1)" },
  about: { backgroundColor: "#FFFFFF", padding: "3rem", borderRadius: "1.5rem", boxShadow: "0 15px 35px rgba(0,0,0,0.1)", marginTop: "3rem", position: "relative", zIndex: 2, background: "linear-gradient(135deg, #FFFFFF 0%, #F7FAFC 100%)", border: "2px solid #E2E8F0" },
  aboutTitle: { fontSize: "2.2rem", fontWeight: 700, color: "#2D3748", marginBottom: "1.5rem" },
  aboutText: { fontSize: "1.1rem", lineHeight: "1.7", color: "#4A5568", marginBottom: "1.5rem" },
  highlight: { background: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700 }
};
