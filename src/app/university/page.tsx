"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChartLine, FaAward, FaBook, FaStar, FaCalendarAlt } from "react-icons/fa";

// Define a type for each university score row
interface UniversityScore {
  id: number;
  course: string;
  credit: string;
  score: string;
  semester: string;
  grade?: string;
}

export default function Home() { 
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); 

  const toggleSidebar = () => { 
    setSidebarOpen(!sidebarOpen); 
  };

  const universityScores: UniversityScore[] = [
    { id: 1, course: "Applied Mathematics 1", credit: "180 / 6", score: "100 / 5", semester: "1", grade: "A" },
    { id: 2, course: "Most Recent History of Uzbekistan", credit: "180 / 6", score: "91 / 5", semester: "1", grade: "A" },
    { id: 3, course: "English for Academic Purposes", credit: "180 / 6", score: "100 / 5", semester: "1", grade: "A" },
    { id: 4, course: "Introduction to Programming 1", credit: "180 / 6", score: "93 / 5", semester: "1", grade: "A" },
    { id: 5, course: "Applied Mathematics 2", credit: "180 / 6", score: "100 / 5", semester: "2", grade: "A" },
    { id: 6, course: "Philosophy", credit: "90 / 3", score: "97 / 5", semester: "2", grade: "A" },
    { id: 7, course: "Religious Studies", credit: "90 / 3", score: "87 / 4", semester: "2", grade: "B" },
    { id: 8, course: "Business Communication Skills", credit: "180 / 6", score: "100 / 5", semester: "2", grade: "A" },
    { id: 9, course: "English for Specific Purposes", credit: "180 / 6", score: "89 / 4", semester: "2", grade: "B" },
    { id: 10, course: "Introduction to Programming 2", credit: "180 / 6", score: "95 / 5", semester: "2", grade: "A" },
    { id: 11, course: "Introduction to IT", credit: "180 / 6", score: "93 / 5", semester: "2", grade: "A" },
    { id: 12, course: "Database Concepts", credit: "240 / 8", score: "100 / 5", semester: "3", grade: "A" },
    { id: 13, course: "Statistics", credit: "300 / 10", score: "100 / 5", semester: "3", grade: "A" },
    { id: 14, course: "Fundamentals of IT", credit: "180 / 6", score: "93 / 5", semester: "3", grade: "A" },
    { id: 15, course: "Computer Science I", credit: "180 / 6", score: "100 / 5", semester: "3", grade: "A" },
    { id: 16, course: "Algorithms and Data Structure", credit: "240 / 8", score: "98 / 5", semester: "4", grade: "A" },
    { id: 17, course: "Computer Networks", credit: "300 / 10", score: "95 / 5", semester: "4", grade: "A" },
    { id: 18, course: "Computer Science II", credit: "180 / 6", score: "100 / 5", semester: "4", grade: "A" },
    { id: 19, course: "Object Oriented Programming", credit: "180 / 6", score: "100 / 5", semester: "4", grade: "A" },
    { id: 20, course: "Web Development I", credit: "180 / 6", score: "Upcoming", semester: "5", grade: "-" },
    { id: 21, course: "Game Development", credit: "180 / 6", score: "Upcoming", semester: "5", grade: "-" },
    { id: 22, course: "Mobile App Development", credit: "180 / 6", score: "Upcoming", semester: "5", grade: "-" },
    { id: 23, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "5", grade: "-" },
    { id: 24, course: "Web Development II", credit: "180 / 6", score: "Upcoming", semester: "6", grade: "-" },
    { id: 25, course: "Computer Security", credit: "180 / 6", score: "Upcoming", semester: "6", grade: "-" },
    { id: 26, course: "Internship", credit: "180 / 6", score: "Upcoming", semester: "6", grade: "-" },
    { id: 27, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "6", grade: "-" },
    { id: 28, course: "Artificial Intelligence", credit: "180 / 6", score: "Upcoming", semester: "7", grade: "-" },
    { id: 29, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "7", grade: "-" },
    { id: 30, course: "Internship", credit: "180 / 6", score: "Upcoming", semester: "8", grade: "-" },
    { id: 31, course: "Final Thesis", credit: "180 / 6", score: "Upcoming", semester: "8", grade: "-" },
    { id: 32, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "8", grade: "-" },
  ];

  // Function to get color based on grade
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A": return "#4CAF50";
      case "B": return "#FF9800";
      case "C": return "#F44336";
      case "D": return "#9C27B0";
      default: return "#9E9E9E";
    }
  };

  // Function to get color based on semester
  const getSemesterColor = (semester: string) => {
    const colors = ["#FF6B6B", "#4ECDC4", "#5568FE", "#FFD166", "#6A0572", "#00C9FF", "#FF5E62", "#7F00FF"];
    return colors[parseInt(semester) - 1] || "#9E9E9E";
  };

  return (
    <main className="flex min-h-screen" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)" }}>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginLeft: sidebarOpen ? "250px" : "80px", transition: "all 0.3s", py: 4 }}>
        {/* Hero / About Me */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={3} sx={{ 
            padding: 4, 
            textAlign: "center", 
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "16px"
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image 
                src="/profile.jpg" 
                alt="Profile" 
                width={120} 
                height={120} 
                style={{ 
                  borderRadius: "50%", 
                  border: "4px solid white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                }} 
              />
            </motion.div>
            <Typography variant="h4" fontWeight="bold" mt={2} sx={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
              Muzaffar Abdukadirov
            </Typography>
            <Typography variant="subtitle1" mt={1} sx={{ opacity: 0.9 }}>
              Software Engineer | Frontend & Backend Developer
            </Typography>
            <Typography variant="body1" mt={2} sx={{ opacity: 0.9 }}>
              Passionate about building scalable, modern, and user-friendly applications. 
              Skilled in full-stack development with a strong background in algorithms and data structures.
            </Typography>
          </Paper>
        </motion.div>

        {/* Quick Stats (Flexbox, type-safe) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "24px", justifyContent: "space-between" }}
        >
          {[
            { label: "GPA", value: "4.93", icon: <FaStar />, color: "#FFD166" },
            { label: "Credits Earned", value: "120", icon: <FaBook />, color: "#4ECDC4" },
            { label: "Average Score", value: "95%+", icon: <FaChartLine />, color: "#FF6B6B" },
            { label: "Semesters Completed", value: "4", icon: <FaCalendarAlt />, color: "#5568FE" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ flex: "1 1 200px", minWidth: "200px" }}
            >
              <Paper elevation={2} sx={{ 
                padding: 3, 
                textAlign: "center", 
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                border: `1px solid ${stat.color}30`
              }}>
                <Box sx={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  width: "50px", 
                  height: "50px", 
                  borderRadius: "50%", 
                  backgroundColor: `${stat.color}20`,
                  color: stat.color,
                  mb: 1
                }}>
                  {stat.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold" color={stat.color}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </motion.div>

        {/* University Scores Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h4" mt={5} mb={3} fontWeight="bold" sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 1,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            <FaGraduationCap /> University Academic Record
          </Typography>
          
          <TableContainer component={Paper} sx={{ borderRadius: "12px", overflow: "hidden" }}>
            <Table>
              <TableHead sx={{ 
                backgroundColor: "primary.main",
                "& th": { color: "white", fontWeight: "bold" }
              }}>
                <TableRow>
                  <TableCell>Semester</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Credit</TableCell>
                  <TableCell>Score / Grade</TableCell>
                  <TableCell>Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {universityScores.map((row: UniversityScore, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    style={{ background: index % 2 === 0 ? "#f9f9f9" : "white" }}
                  >
                    <TableCell>
                      <Chip 
                        label={`Semester ${row.semester}`} 
                        size="small"
                        sx={{ 
                          backgroundColor: getSemesterColor(row.semester),
                          color: "white",
                          fontWeight: "bold"
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{row.course}</TableCell>
                    <TableCell>{row.credit}</TableCell>
                    <TableCell>
                      <Box sx={{ 
                        display: "inline-block", 
                        padding: "4px 8px", 
                        borderRadius: "4px",
                        backgroundColor: row.score === "Upcoming" ? "#E0E0E0" : "#E8F5E9",
                        color: row.score === "Upcoming" ? "#9E9E9E" : "#4CAF50",
                        fontWeight: "bold"
                      }}>
                        {row.score}
                      </Box>
                    </TableCell>
                    <TableCell>
                      {row.grade && row.grade !== "-" && (
                        <Chip 
                          label={row.grade} 
                          size="small"
                          sx={{ 
                            backgroundColor: getGradeColor(row.grade),
                            color: "white",
                            fontWeight: "bold",
                            width: "40px"
                          }}
                        />
                      )}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Paper elevation={2} sx={{ 
            padding: 3, 
            marginTop: 4, 
            textAlign: "center",
            background: "linear-gradient(135deg, #4ECDC4 0%, #5568FE 100%)",
            color: "white",
            borderRadius: "12px"
          }}>
            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
              <FaAward /> Academic Achievement Summary
            </Typography>
            <Typography variant="body2">
              Maintaining a perfect 5.0 GPA in all major courses with exceptional performance in programming and mathematics.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </main>
  ); 
}