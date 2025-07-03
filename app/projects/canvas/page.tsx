import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CanvasProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Canvas Drawing Project 🎨</h1>

      <p className="mb-4 text-gray-700">
        This project was built by following Wes Bos's <strong>JavaScript 30</strong> course.
        It is an interactive drawing app using the HTML5 Canvas API, where colours and brush sizes change dynamically as you draw.
      </p>

      <Image
        src="/images/canvas-screenshot.png"
        alt="Canvas drawing screenshot"
        width={800}
        height={400}
        className="rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Code Sample</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        <code>
{`ctx.strokeStyle = \`hsl(\${hue}, 100%, 50%)\`;
ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Using the HTML5 Canvas API for interactive drawing</li>
        <li>Working with HSL colour manipulation</li>
        <li>Handling mouse events to track user input</li>
        <li>Creating dynamic brush size and colour effects</li>
      </ul>

      <div className="mt-4">
        <a
          href=" https://codrutarisco.github.io/fun-with-html5-canvas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 View project Live Demo
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
