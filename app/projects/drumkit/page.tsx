import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DrumKitProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Drum Kit Project 🥁</h1>

      <p className="mb-4 text-gray-700">
        This project was built by following Wes Bos&apos;s{" "}
        <strong>JavaScript 30</strong> course. It simulates a virtual drum kit
        that plays different drum sounds when specific keys are pressed on the
        keyboard.
      </p>

      <Image
        src="/images/drumkit-screenshot.png"
        alt="Drum Kit screenshot"
        width={800}
        height={400}
        className="rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Code Sample</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        <code>
          {`function playSound(e) {
  const audio = document.querySelector(\`audio[data-key=\"\${e.keyCode}\"]\`);
  const key = document.querySelector(\`.key[data-key=\"\${e.keyCode}\"]\`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold mb-2">What I Learned</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Using JavaScript event listeners for keydown events</li>
        <li>Selecting DOM elements with data attributes</li>
        <li>Playing audio files dynamically in the browser</li>
        <li>Adding and removing CSS classes to trigger animations</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://codrutarisco.github.io/wb-drum-kit/"
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
