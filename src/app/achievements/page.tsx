"use client";
import React, { useState } from "react";
import Image from "next/image";

type Certificate = {
  src: string;
  name: string;
  description: string;
  date: string;
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
      },
      {
        src: "/certificates/set_certificates.jpg",
        name: "My IELTS Journey",
        description:
          "A 6-month self-study journey combining online resources, mock tests, and daily speaking practice to improve fluency, writing coherence, and listening skills. Consistency was the key to achieving success.",
        date: "2021",
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
      },
      {
        src: "/certificates/RES_WEB_DES.jpg",
        name: "Responsive Web Design",
        description:
          "Gained skills in modern responsive design principles, CSS Grid, Flexbox, and accessibility-focused layouts.",
        date: "2023",
      },
      {
        src: "/certificates/mohirdev_frontend.png",
        name: "Frontend Development Bootcamp - Mohirdev",
        description:
          "Comprehensive program covering HTML, CSS, JavaScript, and React. Built multiple projects including interactive UIs and responsive designs.",
        date: "2022",
      },
    ],
    web_backend: [
      {
        src: "/certificates/node_js.png",
        name: "Node.js & Express Backend Development",
        description:
          "Hands-on training in REST APIs, authentication, middleware, and connecting with MongoDB and MySQL.",
        date: "2024",
      },
      {
        src: "/certificates/api.png",
        name: "API Design and Development",
        description:
          "Focused on building scalable and secure APIs using Express.js and industry best practices.",
        date: "2024",
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
        },
        {
          src: "/certificates/MU.png",
          name: "50% Merit-Based Scholarship",
          description:
            "Received a 50% tuition fee waiver for outstanding academic performance and achievements during the admission process.",
          date: "2023",
        },
      ],
      UDEA: [
        {
          src: "/certificates/UDEA.jpg",
          name: "Fully Funded Scholarship at UDEA",
          description:
            "Selected for a fully funded scholarship program at Universidad de Antioquia, recognizing academic merit and research potential.",
          date: "2022",
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
      },
    ],
  },
};

const Certificates: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Certificates</h1>

      <select
        className="border p-2 rounded mb-6"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="english">English (IELTS)</option>
        <option value="frontend">Web Frontend</option>
        <option value="backend">Web Backend</option>
        <option value="bachelor">University - Bachelor</option>
        <option value="masters">University - Masters</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterCertificates().map((cert, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <Image
              src={cert.src}
              alt={cert.name}
              width={300}
              height={200}
              className="rounded mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
            <p className="text-gray-500 text-xs">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
