import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MindfulnessProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mindfulness App 🧘‍♀️</h1>

      <p className="mb-4 text-gray-700">
        This is a group project built as part of my coding bootcamp. The app is designed for mindfulness and wellbeing, helping users track and improve their mental health through simple daily activities.
      </p>

      <h2 className="text-xl font-semibold mb-2">Technologies used</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Frontend: Dart & Flutter</li>
        <li>Backend: Node.js & Express.js</li>
        <li>Authentication: Firebase Authentication</li>
        <li>Database: Firebase</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Image
          src="/images/mindfulness1.png"
          alt="Mindfulness app screenshot 1"
          width={400}
          height={300}
          className="rounded"
        />
        <Image
          src="/images/mindfulness4.png"
          alt="Mindfulness app screenshot 2"
          width={400}
          height={300}
          className="rounded"
        />
        <Image
          src="/images/mindfulness3.png"
          alt="Mindfulness app screenshot 3"
          width={400}
          height={300}
          className="rounded"
        />
         <Image
          src="/images/mindfulness4.png"
          alt="Mindfulness app screenshot 4"
          width={400}
          height={300}
          className="rounded"
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>User authentication and profile management</li>
        <li>Daily mindfulness activity suggestions</li>
        <li>Tagging emotions for each activity</li>
        <li>Built with Flutter for cross-platform compatibility</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://github.com/santoshjani31/fe_connect_backend"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 View project on GitHub
        </a>
      </div>

      <div className="mt-8">
        <Link href="/">
          <span className="text-sm text-gray-500 hover:underline">← Back to portfolio</span>
        </Link>
      </div>
    </div>
  );
}
