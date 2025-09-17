"use client";

import React, { JSX, useState } from "react";
import { Card, CardContent, CardHeader, Typography, Chip, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaCheckCircle, 
  FaClock, 
  FaFilter,
  FaChalkboardTeacher,
  FaLaptopCode
} from "react-icons/fa";

type CourseType = "online" | "university";
type StatusType = "completed" | "in-progress";
type FilterType = "all" | StatusType;

interface Course {
  id: string;
  title: string;
  provider?: string;
  type: CourseType;
  status: StatusType;
  color?: string;
  icon?: JSX.Element;
}

const onlineCourses: Course[] = [
  { 
    id: "mohirdev-frontend", 
    title: "Mohirdev Frontend Practicum", 
    provider: "Mohirdev", 
    type: "online", 
    status: "completed",
    color: "#FF6B6B",
    icon: <FaLaptopCode />
  },
  { 
    id: "dave-backend", 
    title: "Beginner to Pro Backend (Node.js)", 
    provider: "Dave Gray", 
    type: "online", 
    status: "completed",
    color: "#4ECDC4",
    icon: <FaLaptopCode />
  },
  { 
    id: "dave-ts", 
    title: "TypeScript Mastery", 
    provider: "Dave Gray", 
    type: "online", 
    status: "completed",
    color: "#5568FE",
    icon: <FaLaptopCode />
  },
  { 
    id: "mosh-next", 
    title: "Next.js Masterclass", 
    provider: "Mosh Hamedani", 
    type: "online", 
    status: "completed",
    color: "#FFD166",
    icon: <FaLaptopCode />
  },
  { 
    id: "dave-ts-next-redux", 
    title: "TypeScript + Next.js + Redux", 
    provider: "Dave Gray", 
    type: "online", 
    status: "completed",
    color: "#6A0572",
    icon: <FaLaptopCode />
  },
  { 
    id: "fcc-dsa", 
    title: "Data Structures & Algorithms in JavaScript", 
    provider: "FreeCodeCamp", 
    type: "online", 
    status: "completed",
    color: "#00C9FF",
    icon: <FaLaptopCode />
  },
];

// Color palette for different statuses
const statusColors = {
  "completed": ["#4CAF50", "#2E7D32"],
  "in-progress": ["#FF9800", "#EF6C00"]
};

export default function OnlineCourses() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const filteredCourses = onlineCourses.filter(course => filter === "all" || course.status === filter);
  const filterOptions: FilterType[] = ["all", "completed", "in-progress"];

  return (
    <div style={{ 
      padding: "24px", 
      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)",
      minHeight: "100vh"
    }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "32px" }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <FaGraduationCap style={{ marginRight: "12px", display: "inline-block" }} />
          My Online Courses
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Continuous learning and skill development
        </Typography>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            mb: 4, 
            flexWrap: "wrap", 
            gap: "8px", 
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FaFilter style={{ color: "#6366F1" }} />
          {filterOptions.map(f => (
            <Button
              key={f}
              variant={filter === f ? "contained" : "outlined"}
              onClick={() => setFilter(f)}
              sx={{
                borderRadius: "20px",
                textTransform: "capitalize",
                fontWeight: 600,
                ...(filter === f ? {
                  background: f === "completed" 
                    ? "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)" 
                    : f === "in-progress"
                    ? "linear-gradient(135deg, #FF9800 0%, #EF6C00 100%)"
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                } : {})
              }}
            >
              {f === "all" ? "All Courses" : f === "completed" ? "✅ Completed" : "⏳ In Progress"}
            </Button>
          ))}
        </Stack>
      </motion.div>

      {/* Courses Container using Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onMouseEnter={() => setHoveredCourse(course.id)}
            onMouseLeave={() => setHoveredCourse(null)}
            style={{ perspective: "1000px" }}
          >
            <Card
              sx={{
                boxShadow: hoveredCourse === course.id ? 6 : 3,
                transform: hoveredCourse === course.id ? "rotateY(5deg)" : "none",
                transition: "all 0.3s ease",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${course.color}20 0%, ${course.color}10 100%)`,
                border: `1px solid ${course.color}30`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "visible",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: `linear-gradient(90deg, ${course.color}, ${course.color}80)`,
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px"
                }
              }}
            >
              <CardHeader
                title={
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: course.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <span style={{ 
                      background: course.color, 
                      borderRadius: "50%", 
                      width: "30px", 
                      height: "30px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      color: "white"
                    }}>
                      {course.icon}
                    </span>
                    {course.title}
                  </Typography>
                }
                subheader={
                  course.provider && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "text.secondary",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        mt: 1
                      }}
                    >
                      <FaChalkboardTeacher /> {course.provider}
                    </Typography>
                  )
                }
              />
              <CardContent sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                mt: "auto",
                pt: 0
              }}>
                <Chip
                  label={
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      {course.status === "completed" ? <FaCheckCircle /> : <FaClock />}
                      {course.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                  }
                  color={course.status === "completed" ? "success" : "warning"}
                  variant="filled"
                  sx={{ 
                    fontWeight: 600,
                    background: course.status === "completed" 
                      ? "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)" 
                      : "linear-gradient(135deg, #FF9800 0%, #EF6C00 100%)",
                    color: "white",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderRadius: "20px",
                      fontWeight: 600,
                      borderColor: course.color,
                      color: course.color,
                      "&:hover": {
                        borderColor: course.color,
                        background: `${course.color}10`
                      }
                    }}
                  >
                    View
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            textAlign: "center", 
            padding: "40px",
            background: "white",
            borderRadius: "16px",
            marginTop: "20px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
          }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No courses found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try selecting a different filter
          </Typography>
        </motion.div>
      )}
    </div>
  );
}