import React from "react";
import Link from "next/link";


type Project = {
  title: string;
  description: string;
  link: string;
  liveLink: string;
  detailsPage?: string;
};

const projects: Project[] = [
  {
    title: "NC News  🗞",
    description:
      "A social news aggregation site built with React, JS, and a custom API.The application is deployed on Netlify.",
    link: "https://github.com/CodrutaRisco/nc-news.git",
    liveLink: "https://codruta-nc-news.netlify.app",
  },
  {
    title: "Mindfulness App 🧘‍♀️",
    description: "A group project - mobile app for mindfulness and meditation.",
    link: "https://github.com/santoshjani31/fe_connect_backend",
    liveLink: "",
    detailsPage: "/projects/mindfulness",
  },
  {
    title: "Clock Project 🕒",
    description:
      "Real-time analog clock built with JS Date API and CSS transforms.",
    link: "https://github.com/CodrutaRisco/JS-clock",
    liveLink: "",
    detailsPage: "/projects/clock",
  },
  {
    title: "Drum Kit Project 🥁",
    description: "Drum kit app built with JavaScript and event listeners.",
    link: "https://github.com/CodrutaRisco/drum-kit",
    liveLink: "",
    detailsPage: "/projects/drumkit",
  },
  {
    title: "CSS Variables Project 🎨",
    description:
      "Updates CSS variables dynamically using JavaScript for real-time style changes.",
    link: "https://github.com/CodrutaRisco/css-variables",
    liveLink: "",
    detailsPage: "/projects/css-variables",
  },
  {
    title: "Viva PR App 🎉",
    description:
      "A real-world event discovery app for iOS & Android, currently in development with bilingual support and event scraping features.",
    link: "",
    liveLink: "",
    detailsPage: "/projects/vivapr",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2 text-gray-700">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
              {project.detailsPage && (
                <Link
                  href={project.detailsPage}
                  className="text-purple-600 hover:underline"
                >
                  View Details
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/">
          <span className="text-sm text-gray-500 hover:underline">
            ← Back to home
          </span>
        </Link>
      </div>
    </div>
  );
}
