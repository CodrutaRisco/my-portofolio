import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  link: string;
  liveLink: string;
  detailsPage?: string;
};

const projects: Project[] = [
  {
    title: "NC News",
    description:
      "A social news aggregation site built with React, JS, and a custom API.The application is deployed on Netlify. Access the live version here.",

    link: "https://github.com/CodrutaRisco/nc-news.git",
    liveLink: "https://codruta-nc-news.netlify.app",
  },
  {
    title: "Mindfulness App",
    description: "A group project - mobile app for mindfulness and meditation.",
    link: "https://github.com/santoshjani31/fe_connect_backend",
    liveLink: "",
    detailsPage: "/projects/mindfulness",
  },
  {
    title: "Clock Project",
    description:
      "This project was built by following Wes Bos's **JavaScript 30** course.  It features a real-time analog clock that updates every second using JavaScript's Date API and CSS transforms.",
    link: "https://github.com/CodrutaRisco/JS-clock",
    liveLink: "",
    detailsPage: "/projects/clock",
  },
  {
    title: "Drum Kit Project 🥁",
    description:
      "A drum kit app built with JavaScript that plays sounds on keyboard input.",
    link: "https://github.com/CodrutaRisco/drum-kit",
    liveLink: "",
    detailsPage: "/projects/drumkit",
  },
];

export default function Portfolio() {
  const subtitle = "Full Stack Developer & Lifelong Learner";
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">Codruta Risco</h1>
      <h2 className="text-lg text-gray-600 mb-4">{subtitle}</h2>

      <p className="text-lg mb-6">
        Hi, I'm a software engineer passionate about building web applications.
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
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {project.detailsPage && (
              <a href={project.detailsPage}>View Details</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
