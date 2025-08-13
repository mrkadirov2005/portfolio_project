"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Define a type for each university score row
interface UniversityScore {
  id: number;
  course: string;
  credit: string;
  score: string;
  semester: string;
}

export default function Home() { 
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); 

  const toggleSidebar = () => { 
    setSidebarOpen(!sidebarOpen); 
  };

  const universityScores: UniversityScore[] = [
    { id: 1, course: "Applied Mathematics 1", credit: "180 / 6", score: "100 / 5", semester: "1" },
    { id: 2, course: "Most Recent History of Uzbekistan", credit: "180 / 6", score: "91 / 5", semester: "1" },
    { id: 3, course: "English for Academic Purposes", credit: "180 / 6", score: "100 / 5", semester: "1" },
    { id: 4, course: "Introduction to Programming 1", credit: "180 / 6", score: "93 / 5", semester: "1" },
    { id: 5, course: "Applied Mathematics 2", credit: "180 / 6", score: "100 / 5", semester: "2" },
    { id: 6, course: "Philosophy", credit: "90 / 3", score: "97 / 5", semester: "2" },
    { id: 7, course: "Religious Studies", credit: "90 / 3", score: "87 / 4", semester: "2" },
    { id: 8, course: "Business Communication Skills", credit: "180 / 6", score: "100 / 5", semester: "2" },
    { id: 9, course: "English for Specific Purposes", credit: "180 / 6", score: "89 / 4", semester: "2" },
    { id: 10, course: "Introduction to Programming 2", credit: "180 / 6", score: "95 / 5", semester: "2" },
    { id: 11, course: "Introduction to IT", credit: "180 / 6", score: "93 / 5", semester: "2" },
    { id: 12, course: "Database Concepts", credit: "240 / 8", score: "100 / 5", semester: "3" },
    { id: 13, course: "Statistics", credit: "300 / 10", score: "100 / 5", semester: "3" },
    { id: 14, course: "Fundamentals of IT", credit: "180 / 6", score: "93 / 5", semester: "3" },
    { id: 15, course: "Computer Science I", credit: "180 / 6", score: "100 / 5", semester: "3" },
    { id: 16, course: "Algorithms and Data Structure", credit: "240 / 8", score: "98 / 5", semester: "4" },
    { id: 17, course: "Computer Networks", credit: "300 / 10", score: "95 / 5", semester: "4" },
    { id: 18, course: "Computer Science II", credit: "180 / 6", score: "100 / 5", semester: "4" },
    { id: 19, course: "Object Oriented Programming", credit: "180 / 6", score: "100 / 5", semester: "4" },
    { id: 20, course: "Web Development I", credit: "180 / 6", score: "Upcoming", semester: "5" },
    { id: 21, course: "Game Development", credit: "180 / 6", score: "Upcoming", semester: "5" },
    { id: 22, course: "Mobile App Development", credit: "180 / 6", score: "Upcoming", semester: "5" },
    { id: 23, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "5" },
    { id: 24, course: "Web Development II", credit: "180 / 6", score: "Upcoming", semester: "6" },
    { id: 25, course: "Computer Security", credit: "180 / 6", score: "Upcoming", semester: "6" },
    { id: 26, course: "Internship", credit: "180 / 6", score: "Upcoming", semester: "6" },
    { id: 27, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "6" },
    { id: 28, course: "Artificial Intelligence", credit: "180 / 6", score: "Upcoming", semester: "7" },
    { id: 29, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "7" },
    { id: 30, course: "Internship", credit: "180 / 6", score: "Upcoming", semester: "8" },
    { id: 31, course: "Final Thesis", credit: "180 / 6", score: "Upcoming", semester: "8" },
    { id: 32, course: "Elective Courses", credit: "180 / 6", score: "Upcoming", semester: "8" },
  ];

  return (
    <main className="flex">
      {/* Sidebar */}

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginLeft: sidebarOpen ? "250px" : "80px", transition: "all 0.3s" }}>
        {/* Hero / About Me */}
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4, textAlign: "center" }}>
          <Image src="/profile.jpg" alt="Profile" width={120} height={120} style={{ borderRadius: "50%" }} />
          <Typography variant="h4" fontWeight="bold" mt={2}>Muzaffar Abdukadirov</Typography>
          <Typography variant="subtitle1" color="text.secondary">Software Engineer | Frontend & Backend Developer</Typography>
          <Typography variant="body1" mt={2}>
            Passionate about building scalable, modern, and user-friendly applications. Skilled in full-stack development with a strong background in algorithms and data structures.
          </Typography>
        </Paper>

        {/* Quick Stats (Flexbox, type-safe) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px", justifyContent: "space-between" }}>
          {[
            { label: "GPA", value: "4.93" },
            { label: "Credits Earned", value: "120" },
            { label: "Average Score", value: "95%+" },
            { label: "Semesters Completed", value: "4" },
          ].map((stat, index) => (
            <Paper key={index} elevation={2} sx={{ flex: "1 1 200px", padding: 3, textAlign: "center" }}>
              <Typography variant="h5">{stat.value}</Typography>
              <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
            </Paper>
          ))}
        </div>

        {/* University Scores Table */}
        <Typography variant="h5" mt={5} mb={2} fontWeight="bold">📚 University Scores</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>Semester</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Credit</TableCell>
                <TableCell>Score / Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {universityScores.map((row: UniversityScore) => (
                <TableRow key={row.id}>
                  <TableCell>{row.semester}</TableCell>
                  <TableCell>{row.course}</TableCell>
                  <TableCell>{row.credit}</TableCell>
                  <TableCell>{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </main>
  ); 
}
