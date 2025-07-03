import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CityStateSearchProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">City & State Live Search 🔍</h1>

      <p className="mb-4 text-gray-700">
        This project was built by following Wes Bos's <strong>JavaScript 30</strong> course.
        It allows users to search US cities and states dynamically, highlighting matched text and displaying formatted population numbers.
      </p>

      <Image
        src="/images/city-state-search-screenshot.png"
        alt="City & State Live Search screenshot"
        width={800}
        height={400}
        className="rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Code Sample</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        <code>
{`function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Using the Fetch API to retrieve external JSON data</li>
        <li>Filtering arrays dynamically with Array.filter</li>
        <li>Working with regular expressions in JavaScript</li>
        <li>Updating the DOM dynamically with innerHTML</li>
        <li>Formatting numbers with regex replace for readability</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://codrutarisco.github.io/city-state-search/"
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
