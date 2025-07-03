import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FlexPanelsProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Flex Panels Project 🎬</h1>

      <p className="mb-4 text-gray-700">
        This project was built by following Wes Bos&#39;s{" "}
        <strong>JavaScript 30</strong> course. It is an interactive image
        gallery using CSS Flexbox, where clicking on an image panel expands it
        smoothly.
      </p>

      <Image
        src="/images/flex-panels-screenshot.png"
        alt="Flex Panels screenshot"
        width={800}
        height={400}
        className="rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Code Sample</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        <code>
          {`const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Using CSS Flexbox for responsive layouts</li>
        <li>Adding and removing classes with JavaScript</li>
        <li>Listening to transitionend events for smooth animations</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://codrutarisco.github.io/flex-panels/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 View project Live Demo
        </a>
      </div>

      <div className="mt-8">
        <Link href="/projects">
          <span className="text-sm text-gray-500 hover:underline">
            ← Back to projects
          </span>
        </Link>
      </div>
    </div>
  );
}
