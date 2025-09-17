"use client";

import { useState } from "react";
import dataProjects from "@/app/data/data.json"; // adjust path if needed
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "framer-motion"; // ✅ import easing function
import { FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  // Collect all unique tools/languages
  const toolsSet = new Set<string>();
  dataProjects.data.forEach((project) => {
    project.languages.forEach((lang) => toolsSet.add(lang));
  });
  const tools = ["All", ...Array.from(toolsSet)];

  // Filter projects based on selected tool
  const filteredProjects =
    filter === "All"
      ? dataProjects.data
      : dataProjects.data.filter((project) =>
          project.languages.includes(filter)
        );

  // Color palette for different tech stacks
  const techColors: Record<string, string> = {
    "JavaScript": "#F0DB4F",
    "TypeScript": "#007ACC",
    "Python": "#306998",
    "Java": "#EA2D2E",
    "React": "#61DAFB",
    "Next.js": "#000000",
    "Node.js": "#339933",
    "HTML": "#E34F26",
    "CSS": "#1572B6",
    "MongoDB": "#4DB33D",
    "SQL": "#005C84",
    "Vue": "#4FC08D",
    "Angular": "#DD0031",
    "Svelte": "#FF3E00",
    "PHP": "#777BB4",
    "Ruby": "#CC342D",
    "Go": "#00ADD8",
    "Rust": "#000000",
    "Swift": "#FA7343",
    "Kotlin": "#0095D5",
    "C++": "#00599C",
    "C#": "#239120"
  };

  // Get a color for a technology, or generate a random one
  const getTechColor = (tech: string) => {
    return (
      techColors[tech] ||
      `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
    );
  };

  // Container variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item variants for animation (✅ fixed easing)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut, // ✅ now using function instead of string
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.floor(Math.random() * 200) + 100,
              height: Math.floor(Math.random() * 200) + 100,
              top: `${Math.floor(Math.random() * 100)}%`,
              left: `${Math.floor(Math.random() * 100)}%`,
              background: `linear-gradient(45deg, ${getTechColor(
                tools[i + 1] || "JavaScript"
              )}, ${getTechColor(tools[i + 2] || "TypeScript")})`,
            }}
            animate={{
              y: [0, Math.floor(Math.random() * 40) - 20],
              x: [0, Math.floor(Math.random() * 40) - 20],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.floor(Math.random() * 10) + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-xl px-10 py-3 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white font-medium"
            >
              {tools.map((tool) => (
                <option key={tool} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>

                <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h2>

                <p className="text-gray-600 mb-4">{project.info}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getTechColor(lang) }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  {project.Github && (
                    <motion.a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}

                  {(project.netlify || project.vercel) && (
                    <motion.a
                      href={project.netlify || project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try selecting a different technology filter
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
