"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Uzbek", percent: 85 },
      { name: "English", percent: 77.7 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", percent: 55 },
      { name: "TypeScript", percent: 55 },
      { name: "Python", percent: 50 },
      { name: "C", percent: 30 },
      { name: "VBA", percent: 40 },
    ],
  },
  {
    category: "Front-end Techniques",
    skills: [
      { name: "HTML", percent: 85 },
      { name: "CSS", percent: 80 },
      { name: "CSS Modules", percent: 70 },
      { name: "Tailwind CSS", percent: 78 },
      { name: "React", percent: 78 },
      { name: "Next.js", percent: 40 },
      { name: "Styled Components", percent: 78 },
      { name: "Vite", percent: 40 },
      { name: "Redux TK", percent: 65 },
      { name: "MUI", percent: 80 },
    ],
  },
  {
    category: "Backend Techniques",
    skills: [
      { name: "Node.js", percent: 40 },
      { name: "Express.js", percent: 40 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL: MySQL", percent: 50 },
      { name: "NoSQL: MongoDB", percent: 50 },
    ],
  },
];

// Color palette for different categories
const categoryColors = {
  "Languages": ["#FF9A8B", "#FF6B6B"],
  "Programming Languages": ["#4ECDC4", "#5568FE"],
  "Front-end Techniques": ["#FFD166", "#FFA94D"],
  "Backend Techniques": ["#6A0572", "#AB83A1"],
  "Databases": ["#00C9FF", "#92FE9D"],
};

// Color palette for individual skills
const skillColors = [
  ["#FF6B6B", "#FF9A8B"], // Red gradient
  ["#4ECDC4", "#5568FE"], // Teal to blue
  ["#FFD166", "#FFA94D"], // Yellow to orange
  ["#6A0572", "#AB83A1"], // Purple gradient
  ["#00C9FF", "#92FE9D"], // Blue to green
  ["#FF5E62", "#FF9966"], // Coral gradient
  ["#7F00FF", "#E100FF"], // Purple to pink
  ["#00F5A0", "#00D9F5"], // Green to blue
  ["#F5515F", "#9F041B"], // Red gradient
  ["#7928CA", "#FF0080"], // Purple to pink
];

export default function Tools() {
  const [filter, setFilter] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ["All", ...skillsData.map((c) => c.category)];

  const filteredData =
    filter === "All"
      ? skillsData
      : skillsData.filter((c) => c.category === filter);

  // Get gradient for a category
  const getCategoryGradient = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || ["#6366F1", "#8B5CF6"];
  };

  // Get gradient for a skill based on its index
  const getSkillGradient = (index: number) => {
    return skillColors[index % skillColors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.floor(Math.random() * 200) + 100,
              height: Math.floor(Math.random() * 200) + 100,
              top: `${Math.floor(Math.random() * 100)}%`,
              left: `${Math.floor(Math.random() * 100)}%`,
              background: `linear-gradient(45deg, ${getSkillGradient(i)[0]}, ${getSkillGradient(i)[1]})`
            }}
            animate={{
              y: [0, Math.floor(Math.random() * 40) - 20],
              x: [0, Math.floor(Math.random() * 40) - 20],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.floor(Math.random() * 10) + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Tools & Skills
        </motion.h1>

        {/* Filter Select */}
        <motion.div 
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 border-0 rounded-xl bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 appearance-none font-medium text-gray-700"
              style={{ width: "250px" }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Skills List */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredData.map((group, groupIndex) => {
            const categoryGradient = getCategoryGradient(group.category);
            
            return (
              <motion.div
                key={group.category}
                className="bg-white p-6 rounded-2xl shadow-lg border-0 overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Category header with gradient */}
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ background: `linear-gradient(to right, ${categoryGradient[0]}, ${categoryGradient[1]})` }}
                ></div>
                
                <h2 
                  className="text-xl font-bold mb-5"
                  style={{ color: categoryGradient[0] }}
                >
                  {group.category}
                </h2>
                
                <div className="space-y-5">
                  {group.skills.map((skill, skillIndex) => {
                    const skillGradient = getSkillGradient(skillIndex);
                    
                    return (
                      <motion.div 
                        key={skill.name}
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <motion.span 
                            className="font-bold"
                            style={{ color: skillGradient[0] }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 + (skillIndex * 0.1) }}
                          >
                            {skill.percent}%
                          </motion.span>
                        </div>
                        
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden relative">
                          <motion.div
                            className="h-3 rounded-full"
                            style={{ 
                              background: `linear-gradient(to right, ${skillGradient[0]}, ${skillGradient[1]})`,
                              boxShadow: `0 0 10px ${skillGradient[0]}40`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percent}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: skillIndex * 0.1,
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{
                              scaleY: 1.3,
                              transformOrigin: "center"
                            }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute top-0 left-0 w-10 h-full bg-white opacity-30"
                              initial={{ x: "-100%" }}
                              animate={{ x: "300%" }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                delay: skillIndex * 0.2
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Hover effect */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute -inset-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="mt-10 p-5 bg-white rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Skill Level Guide</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-red-600 mr-2"></div>
              <span className="text-sm text-gray-600">Beginner</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mr-2"></div>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 mr-2"></div>
              <span className="text-sm text-gray-600">Advanced</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mr-2"></div>
              <span className="text-sm text-gray-600">Expert</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 mr-2"></div>
              <span className="text-sm text-gray-600">Master</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}