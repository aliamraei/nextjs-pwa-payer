"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoJSPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoJSPlayer({ src, poster }: VideoJSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // تنظیمات پخش‌کننده
    const options = {
      controls: true,
      autoplay: false,
      preload: "auto",
      responsive: true,
      fluid: true,
      poster: poster,
      sources: [{ src }],
    };

    // راه‌اندازی پخش‌کننده
    playerRef.current = videojs(videoRef.current, options);

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}
