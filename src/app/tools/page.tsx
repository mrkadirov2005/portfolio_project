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

export default function Tools() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...skillsData.map((c) => c.category)];

  const filteredData =
    filter === "All"
      ? skillsData
      : skillsData.filter((c) => c.category === filter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Tools & Skills</h1>

      {/* Filter Select */}
      <div className="mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg bg-white shadow-sm"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Skills List */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredData.map((group) => (
          <div
            key={group.category}
            className="bg-white p-5 rounded-2xl shadow-md border"
          >
            <h2 className="text-xl font-semibold mb-4">{group.category}</h2>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percent}%` }}
                      transition={{ duration: 0.8 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
