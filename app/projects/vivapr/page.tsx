import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function VivaPRProjectPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Viva PR App 🎉</h1>

      <p className="mb-4 text-gray-700">
       Viva PR is a mobile application I am currently developing as part of a collaborative team project. Designed for iOS and Android, the app helps users discover local events easily through a bilingual interface, interactive maps, and personalized features. I am building it using React Native with Expo, implementing functionalities such as authentication, event listing, detail views, and map integration. This project allows me to combine strong front-end development with practical real-world architecture decisions for scalable apps.bnb and Eventbrite.
      </p>

      <h2 className="text-xl font-semibold mb-2">Requirements & Core Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Bilingual UI (English/Spanish, default Spanish)</li>
        <li>Login with email, Google, Apple</li>
        <li>Event scraping from Facebook, Eventbrite, Ticketmaster (extensible to other sources)</li>
        <li>Map + list view (Airbnb-style)</li>
        <li>Calendar view and favourites</li>
        <li>Tag-based search (auto-generated + trending)</li>
        <li>User accounts with saved events</li>
        <li>Shareable event links (Whatsapp, etc.)</li>
        <li>iOS + Android app (Expo build)</li>
        <li>App Store + Google Play submission</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Nice-to-Haves</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Push notifications (e.g. reminders for saved events)</li>
        <li>Dark mode</li>
        <li>QR code for app flyers</li>
        <li>Flagging tickets available</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Architecture</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Frontend:</strong> React Native, Expo</li>
        <li><strong>Backend API:</strong> Node (to match front-end) or Python FastAPI (for future AI integration)</li>
        <li><strong>Parsers:</strong> Golang (fast and scalable)</li>
        <li><strong>Database & Auth:</strong> Supabase (Postgres-based, scalable alternative to Firebase)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Current Progress</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Designed app UI based on Figma wireframes</li>
  <li>Set up React Native Expo project</li>
  <li>Implemented email login and authentication flow</li>
  <li>Built event list page</li>
  <li>Built event detail page</li>
  <li>Built map page displaying events</li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  <Image
    src="/images/viva-login.png"
    alt="Login page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
  <Image
    src="/images/viva-map.png"
    alt="Event map page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
  <Image
     src="/images/viva-detail.png"
    alt="Event detail page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
  <Image
    src="/images/map-details.png"
    alt="Map page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
  <Image
    src="/images/viva-list.png"
    alt="Event list page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
  <Image
    src="/images/viva-simulator.png"
    alt="Simulator sdk screenshot"
    width={400}
    height={300}
    className="rounded"

  />
    <Image
    src="/images/map-code.png"
    alt="Map page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
    <Image
    src="/images/login-supabase.png"
    alt="Login page screenshot"
    width={400}
    height={300}
    className="rounded"
  />
</div>

      <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Complete event scraping parsers</li>
        <li>Build calendar views</li>
        <li>Integrate push notifications</li>
        <li>Prepare for App Store and Google Play submission</li>
      </ul>

      <div className="mt-8">
        <Link href="/projects">
          <span className="text-sm text-gray-500 hover:underline">← Back to projects</span>
        </Link>
      </div>
    </div>
  );
}
