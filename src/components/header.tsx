"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col justify-between transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Top: Profile */}
        <div>
          <div className="flex flex-col items-center">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-500"
            />
            <h1 className="text-xl font-bold mt-4">Muzaffar Abdukadirov</h1>
            <p className="text-gray-500 text-sm text-center">
              Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="mt-8 space-y-3">
            <Link
              href="/"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              🏡 Home
            </Link>
            <Link
              href="/projects"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              📂 Projects
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              📚 Courses
            </Link>
            <Link
              href="/university"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              🎓 University
            </Link>

            <Link
              href="/tools"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              🛠 Tools
            </Link>
            <Link
              href="/achievements"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
             🎗️ Achievements
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 rounded hover:bg-blue-100 transition"
            >
              📩 Contact
            </Link>
          </nav>
        </div>

        {/* Bottom: Social */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/mrkadirov2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:example@email.com"
            className="text-red-500 hover:text-red-700"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
