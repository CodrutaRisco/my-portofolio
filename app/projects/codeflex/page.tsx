import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CodeFlexProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">CodeFlex - AI Fitness Coach 💪</h1>

      <p className="mb-4 text-gray-700">
        CodeFlex is an AI-powered fitness coaching assistant that I developed to provide personalized workout guidance and real-time interactions. The application leverages cutting-edge AI technologies including GPT-4o, Gemini AI, and Voice AI (Vapi.ai) to deliver natural language processing capabilities for an engaging user experience.
      </p>

      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Frontend:</strong> React, Next.js, TypeScript</li>
        <li><strong>Styling:</strong> Tailwind CSS</li>
        <li><strong>Backend:</strong> Convex (real-time database)</li>
        <li><strong>Authentication:</strong> Clerk (secure user management with role-based access)</li>
        <li><strong>AI Integration:</strong> GPT-4o, Gemini AI</li>
        <li><strong>Voice AI:</strong> Vapi.ai (real-time voice interactions)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Real-time NLP interactions with AI fitness coach</li>
        <li>Voice-enabled conversations using Vapi.ai</li>
        <li>Secure authentication and user management with Clerk</li>
        <li>Scalable role-based access control</li>
        <li>Responsive, mobile-friendly UI</li>
        <li>Accessibility considerations built-in</li>
        <li>Clean code practices and component-based architecture</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Development Highlights</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Integrated REST APIs with multiple AI providers (GPT-4o, Gemini)</li>
        <li>Implemented real-time data synchronization with Convex</li>
        <li>Applied clean code practices for maintainability</li>
        <li>Designed intuitive UI/UX for fitness enthusiasts</li>
      </ul>

      {/* Uncomment and add your screenshots when ready
      <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Image
          src="/images/codeflex-home.png"
          alt="CodeFlex home page"
          width={400}
          height={300}
          className="rounded"
        />
        <Image
          src="/images/codeflex-chat.png"
          alt="CodeFlex AI chat interface"
          width={400}
          height={300}
          className="rounded"
        />
      </div>
      */}

      <h2 className="text-xl font-semibold mb-2">Links</h2>
      <div className="flex gap-4 mb-6">
        <a
          href="https://github.com/CodrutaRisco/codeflex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub →
        </a>
      </div>

      <div className="mt-8">
        <Link href="/projects">
          <span className="text-sm text-gray-500 hover:underline">← Back to projects</span>
        </Link>
      </div>
    </div>
  );
}

