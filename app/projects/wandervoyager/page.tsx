import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Uncomment when adding screenshots

export default function WanderVoyagerProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">WanderVoyager - Travel Exploration Map 🌍</h1>

      <p className="mb-4 text-gray-700">
        WanderVoyager is an interactive travel destination explorer that provides users with an immersive way to discover travel destinations. Built with modern web technologies, the application offers a hierarchical navigation system that allows users to explore from countries down to specific places of interest.
      </p>

      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Frontend:</strong> Next.js, TypeScript, React</li>
        <li><strong>Content Management:</strong> Storyblok CMS</li>
        <li><strong>Styling:</strong> CSS Modules / Tailwind CSS</li>
        <li><strong>SEO:</strong> Next.js built-in optimization</li>
        <li><strong>Deployment:</strong> Vercel/Netlify ready</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Hierarchical navigation: Countries → Cities → Places</li>
        <li>Dynamic routing with Next.js file-based routing</li>
        <li>Content management through Storyblok integration</li>
        <li>Responsive design for all device sizes</li>
        <li>SEO optimized pages for better search visibility</li>
        <li>Interactive country cards with hero sections</li>
        <li>Curiosities and travel tips for each destination</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Current Development Status</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>✅ Next.js ↔ Storyblok integration completed</li>
        <li>🔧 Country pages with /countries/[countrySlug] routing</li>
        <li>🔧 CountryCard component with hero + intro + curiosities sections</li>
        <li>📋 Planned: City and place detail pages</li>
        <li>📋 Planned: Travel journal functionality</li>
        <li>📋 Planned: Google Maps integration</li>
        <li>📋 Planned: End-to-end testing</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Technical Highlights</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Seamless Storyblok CMS integration for content management</li>
        <li>TypeScript for enhanced code reliability and developer experience</li>
        <li>Component-based architecture for reusability</li>
        <li>Dynamic routing for scalable content structure</li>
        <li>Extensible design ready for future enhancements</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Future Roadmap</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Personal travel journal with user accounts</li>
        <li>Favorites and bookmarking system</li>
        <li>Google Maps integration for enhanced location data</li>
        <li>Mobile app version using React Native</li>
        <li>Social sharing capabilities</li>
        <li>Comprehensive end-to-end testing suite</li>
      </ul>

      <div className="mt-4">
        <a
          href="https://github.com/CodrutaRisco/wander-voyager.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 View project on GitHub
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