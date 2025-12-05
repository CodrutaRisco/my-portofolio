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
    title: "CodeFlex - AI Fitness Coach 💪",
    description:
      "An AI-powered fitness coaching assistant built with Next.js, integrating GPT-4o, Gemini AI, and Voice AI for real-time interactions.",
    link: "https://github.com/CodrutaRisco/codeflex",
    liveLink: "",
    detailsPage: "/projects/codeflex",
  },
  {
    title: "Viva PR App 🎉",
    description:
      "A real-world event discovery app for iOS & Android, currently in development with bilingual support and event scraping features.",
    link: "",
    liveLink: "",
    detailsPage: "/projects/vivapr",
  },
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
    liveLink: "https://codrutarisco.github.io/JS-clock/",
    detailsPage: "/projects/clock",
  },
  {
    title: "Drum Kit Project 🥁",
    description: "Drum kit app built with JavaScript and event listeners.",
    link: "https://github.com/CodrutaRisco/wb-drum-kit.git",
    liveLink: "https://codrutarisco.github.io/wb-drum-kit/",
    detailsPage: "/projects/drumkit",
  },
  {
    title: "CSS Variables Project 🎨",
    description:
      "Updates CSS variables dynamically using JavaScript for real-time style changes.",
    link: "https://github.com/CodrutaRisco/update-css.git",
    liveLink: "https://codrutarisco.github.io/update-css/",
    detailsPage: "/projects/css-variables",
  },
  {
    title: "Flex Panels Project 🎬",
    description:
      "An interactive image gallery using CSS Flexbox, built by following Wes Bos's JavaScript30 course.",
    link: "https://github.com/CodrutaRisco/flex-panels.git",
    liveLink: "https://codrutarisco.github.io/flex-panels/",
    detailsPage: "/projects/flex-panels",
  },
  {
    title: "Canvas Drawing Project 🎨",
    description:
      "An interactive drawing app using HTML5 Canvas and vanilla JavaScript.",
    link: "https://github.com/CodrutaRisco/fun-with-html5-canvas",
    liveLink: " https://codrutarisco.github.io/fun-with-html5-canvas/",
    detailsPage: "/projects/canvas",
  },
  {
    title: "City & State Live Search 🔍",
    description:
      "Dynamic search for US cities and states with highlighted matches and formatted population numbers.",
    link: "https://github.com/CodrutaRisco/city-state-search",
    liveLink: "https://codrutarisco.github.io/city-state-search/",
    detailsPage: "/projects/city-state-search",
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
