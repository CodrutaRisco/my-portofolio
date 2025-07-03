import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClockProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">JavaScript Clock 🕒</h1>

      <p className="mb-4 text-gray-700">
        This is a real-time analog clock built using HTML, CSS, and vanilla
        JavaScript. It reads the current time using the JavaScript{" "}
        <code>Date</code> object and updates the clock hands using CSS
        transforms.
      </p>

      <Image
        src="/images/Screenshot 2025-06-11 at 15.42.09.png"
        alt="Clock screenshot"
        width={800}
        height={400}
        className="rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Code Sample</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        <code>
          {`const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = \`rotate(\${secondsDegrees}deg)\`;`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>How to use the JavaScript Date API</li>
        <li>Manipulating CSS variables from JavaScript</li>
        <li>
          Rotating elements using CSS <code>transform</code>
        </li>
        <li>Using event listeners to update UI in real time</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://codrutarisco.github.io/JS-clock/"
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
