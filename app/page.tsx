"use client";

import { useState } from "react";
import HlsPlayer from "@/components/VideoJSPlayer";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [submittedUrl, setSubmittedUrl] = useState<string>(
    "https://ads.cdn.asset.aparat.com/aparat-ads/0d72af31960248643f4eaf4964b8fe8a69560423-720p.mp4",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedUrl(videoUrl);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        HLS
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8">
        <div className="flex gap-2">
          <input
            type="url"
            placeholder="آدرس استریم"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            پخش
          </button>
        </div>
      </form>

      <HlsPlayer src={submittedUrl} />
    </main>
  );
}
