"use client";
import React, { useState, ReactElement } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCertificate, 
  FaGlobe, 
  FaCode, 
  FaGraduationCap, 
  FaUniversity,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaAward
} from "react-icons/fa";

type Certificate = {
  src: string;
  name: string;
  description: string;
  date: string;
  category: string;
  issuer?: string;
};

type DataStructure = {
  english: {
    ielts: Certificate[];
  };
  development: {
    web_frontend: Certificate[];
    web_backend: Certificate[];
  };
  university: {
    bachelor: {
      MU: Certificate[];
      UDEA: Certificate[];
    };
    masters: Certificate[];
  };
};

const certificatesData: DataStructure = {
  english: {
    ielts: [
      {
        src: "/certificates/ielts.jpg",
        name: "Achieving Band 7 in IELTS",
        description:
          "On February 26, 2022, I took the IELTS exam. The result was remarkable (Band 7) as it exceeded my expectations. This achievement boosted my confidence in pursuing international education opportunities.",
        date: "09/03/2022",
        category: "english",
        issuer: "British Council",
      },
      {
        src: "/certificates/set_certificates.jpg",
        name: "My IELTS Journey",
        description:
          "A 6-month self-study journey combining online resources, mock tests, and daily speaking practice to improve fluency, writing coherence, and listening skills. Consistency was the key to achieving success.",
        date: "2021",
        category: "english",
        issuer: "Self-Study",
      },
    ],
  },
  development: {
    web_frontend: [
      {
        src: "/certificates/JS_ALGS_FREE.jpg",
        name: "JavaScript Algorithms and Data Structures",
        description:
          "Completed the FreeCodeCamp JavaScript Algorithms and Data Structures certification, mastering core JS concepts, problem-solving, and ES6+ syntax.",
        date: "2023",
        category: "frontend",
        issuer: "FreeCodeCamp",
      },
      {
        src: "/certificates/RES_WEB_DES.jpg",
        name: "Responsive Web Design",
        description:
          "Gained skills in modern responsive design principles, CSS Grid, Flexbox, and accessibility-focused layouts.",
        date: "2023",
        category: "frontend",
        issuer: "FreeCodeCamp",
      },
      {
        src: "/certificates/mohirdev_frontend.png",
        name: "Frontend Development Bootcamp - Mohirdev",
        description:
          "Comprehensive program covering HTML, CSS, JavaScript, and React. Built multiple projects including interactive UIs and responsive designs.",
        date: "2022",
        category: "frontend",
        issuer: "Mohirdev",
      },
    ],
    web_backend: [
      {
        src: "/certificates/node_js.png",
        name: "Node.js & Express Backend Development",
        description:
          "Hands-on training in REST APIs, authentication, middleware, and connecting with MongoDB and MySQL.",
        date: "2024",
        category: "backend",
        issuer: "Online Course",
      },
      {
        src: "/certificates/api.png",
        name: "API Design and Development",
        description:
          "Focused on building scalable and secure APIs using Express.js and industry best practices.",
        date: "2024",
        category: "backend",
        issuer: "Online Course",
      },
    ],
  },
  university: {
    bachelor: {
      MU: [
        {
          src: "/certificates/the_best_male_student_of_the_year.jpg",
          name: "Best Male Student of the Year - Millat Umidi University",
          description:
            "Awarded for academic excellence, leadership in extracurricular activities, and contribution to student community.",
          date: "2024",
          category: "bachelor",
          issuer: "Millat Umidi University",
        },
        {
          src: "/certificates/MU.png",
          name: "50% Merit-Based Scholarship",
          description:
            "Received a 50% tuition fee waiver for outstanding academic performance and achievements during the admission process.",
          date: "2023",
          category: "bachelor",
          issuer: "Millat Umidi University",
        },
      ],
      UDEA: [
        {
          src: "/certificates/UDEA.jpg",
          name: "Fully Funded Scholarship at UDEA",
          description:
            "Selected for a fully funded scholarship program at Universidad de Antioquia, recognizing academic merit and research potential.",
          date: "2022",
          category: "bachelor",
          issuer: "Universidad de Antioquia",
        },
      ],
    },
    masters: [
      {
        src: "/certificates/masters.png",
        name: "Masters Plan",
        description:
          "Currently preparing for a Master's degree in Software Engineering abroad, with target universities in Italy, Germany, and the USA.",
        date: "2025",
        category: "masters",
        issuer: "Future Goal",
      },
    ],
  },
};

// Category colors
const categoryColors: Record<string, string> = {
  all: "#6366F1",
  english: "#FF6B6B",
  frontend: "#4ECDC4",
  backend: "#5568FE",
  bachelor: "#FFD166",
  masters: "#6A0572",
};

// ✅ FIXED: Category icons
const categoryIcons: Record<string, ReactElement> = {
  all: <FaCertificate />,
  english: <FaGlobe />,
  frontend: <FaCode />,
  backend: <FaCode />,
  bachelor: <FaUniversity />,
  masters: <FaGraduationCap />,
};

const Certificates: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const getAllCertificates = (): Certificate[] => {
    let all: Certificate[] = [];
    all = all.concat(certificatesData.english.ielts);
    all = all.concat(certificatesData.development.web_frontend);
    all = all.concat(certificatesData.development.web_backend);
    all = all.concat(certificatesData.university.bachelor.MU);
    all = all.concat(certificatesData.university.bachelor.UDEA);
    all = all.concat(certificatesData.university.masters);
    return all;
  };

  const filterCertificates = (): Certificate[] => {
    switch (filter) {
      case "english":
        return certificatesData.english.ielts;
      case "frontend":
        return certificatesData.development.web_frontend;
      case "backend":
        return certificatesData.development.web_backend;
      case "bachelor":
        return [
          ...certificatesData.university.bachelor.MU,
          ...certificatesData.university.bachelor.UDEA,
        ];
      case "masters":
        return certificatesData.university.masters;
      default:
        return getAllCertificates();
    }
  };

  const filteredCertificates = filterCertificates();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          My Certificates & Achievements
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my academic achievements, professional certifications,
          and learning milestones
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {["all", "english", "frontend", "backend", "bachelor", "masters"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? "text-white shadow-lg"
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg"
              }`}
              style={{
                background:
                  filter === cat
                    ? `linear-gradient(135deg, ${categoryColors[cat]}, ${categoryColors[cat]}80)`
                    : "white",
              }}
            >
              <span className="text-sm">{categoryIcons[cat]}</span>
              <span className="capitalize">
                {cat === "all" ? "All Certificates" : cat}
              </span>
            </button>
          )
        )}
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredCertificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-0 cursor-pointer transform transition-all duration-300"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.src}
                  alt={cert.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: categoryColors[cert.category] }}
                  >
                    {cert.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FaCalendarAlt />
                  <span>{cert.date}</span>
                </div>

                {cert.issuer && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaAward />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                )}

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    View Details
                  </span>
                  <FaExternalLinkAlt className="text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredCertificates.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 bg-white rounded-2xl shadow-md mt-8"
        >
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No certificates found
          </h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </motion.div>
      )}

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedCertificate.src}
                  alt={selectedCertificate.name}
                  fill
                  className="object-contain"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  onClick={() => setSelectedCertificate(null)}
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      backgroundColor:
                        categoryColors[selectedCertificate.category],
                    }}
                  >
                    {selectedCertificate.category.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                  {selectedCertificate.name}
                </h2>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{selectedCertificate.date}</span>
                  </div>

                  {selectedCertificate.issuer && (
                    <div className="flex items-center gap-1">
                      <FaAward />
                      <span>{selectedCertificate.issuer}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 mb-6">
                  {selectedCertificate.description}
                </p>

                <button
                  className="w-full py-3 rounded-lg font-medium text-white transition-all hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${
                      categoryColors[selectedCertificate.category]
                    }, ${
                      categoryColors[selectedCertificate.category]
                    }80)`,
                  }}
                  onClick={() => setSelectedCertificate(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
