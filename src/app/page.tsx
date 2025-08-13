"use client";

import Image from "next/image";

export default function Home() {

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Node.js", "Express", "Tailwind", "Vite"
  ];

  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Technologies Learned", value: skills.length.toString() },
    { label: "Courses Completed", value: "10+" },
    { label: "Certifications", value: "5" }
  ];

  const education = [
    { degree: "Bachelor's", school: "Millat Umidi University (Cambridge International)", year: "2023" },
    { degree: "Masters (planned)", school: "TBD (USA / Germany / Italy)", year: "2025" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 relative">
     
      <main className="flex-1 p-6  transition-all duration-300 space-y-12">
        {/* Profile Section */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <Image
              src="/profile.jpg" // replace with your image
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Muzaffar Abdukadirov</h1>
            <p className="text-gray-700 text-lg">
              Software Engineer | Frontend & Fullstack Developer | Passionate about creating interactive web experiences.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
            >
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Education & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <p className="font-semibold text-lg">{edu.degree}</p>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact & Links</h2>
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:your.email@example.com" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Email
            </a>
            <a href="https://github.com/mrkadirov2005" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
