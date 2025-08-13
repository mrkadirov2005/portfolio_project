"use client";

import { useState } from "react";
import dataProjects from "@/app/data/data.json"; // adjust path if needed

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
  // Sort projects by name
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

      <div className="flex justify-center mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {tools.map((tool) => (
            <option key={tool} value={tool}>
              {tool}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.info}</p>
            <p className="text-sm text-gray-500 mb-2">
              Languages: {project.languages.join(", ")}
            </p>
            <div className="flex gap-4">
              {project.Github && (
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline text-sm"
                >
                  GitHub
                </a>
              )}
              {project.netlify && (
                <a
                  href={project.netlify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm"
                >
                  Netlify
                </a>
              )}
              {project.vercel && (
                <a
                  href={project.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline text-sm"
                >
                  Vercel
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
