import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CSSVariablesProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">CSS Variables Project 🎨</h1>

      <p className="mb-4 text-gray-700">
        This project was built by following Wes Bos&#39;s{" "}
        <strong>JavaScript 30</strong> course. It demonstrates how to
        interactively update CSS variables using JavaScript to change styles in
        real-time.
      </p>

      <Image
        src="/images/css-variables-screenshot.png"
        alt="CSS Variables Project screenshot"
        width={800}
        height={400}
        className="rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Code Sample</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        <code>
          {`const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(\`--\${this.name}\`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          Using <code>data-*</code> attributes to store custom information
        </li>
        <li>Selecting multiple DOM elements efficiently</li>
        <li>Updating CSS variables dynamically from JavaScript</li>
        <li>Adding event listeners for both change and mousemove events</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://codrutarisco.github.io/update-css/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 View project Live Demo
        </a>
      </div>

      <div className="mt-8">
        <Link href="/">
          <span className="text-sm text-gray-500 hover:underline">
            ← Back to portfolio
          </span>
        </Link>
      </div>
    </div>
  );
}
