import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  const subtitle = "Full Stack Developer & Lifelong Learner";
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">Codruta Risco</h1>

      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={250}
        height={250}
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg text-gray-600 mb-4">{subtitle}</h2>

      <p className="text-lg mb-6">
        Hi, I'm a software engineer who loves learning new technologies and
        building projects that solve real problems.
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="https://github.com/CodrutaRisco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/codruta-risco-9656ba274/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      {/* <h2 className="text-2xl font-semibold mb-4">Projects</h2> */}

      <div className="text-2xl font-semibold mb-4">
        <Link href="/projects">
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full shadow-[8px_8px_15px_#bebebe,-8px_-8px_15px_#ffffff] hover:shadow-lg transition">
            Projects →
          </button>
        </Link>
      </div>
    </div>
  );
}
