'use client';

import React, { useEffect, useRef, useState } from 'react';

function VideoPreview({ file }: { file: File }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const pauseButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleMouseEnter = () => {
    if (!pauseButtonRef.current || !videoRef.current) return;

    pauseButtonRef.current.style.display = 'block';
    videoRef.current.style.filter = 'brightness(0.5)';
  };

  const handleMouseLeave = () => {
    if (!pauseButtonRef.current || !videoRef.current) return;

    pauseButtonRef.current.style.display = 'none';
    videoRef.current.style.filter = 'brightness(1)';
  };

  const handlePause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
  };

  return (
    <div
      className="relative w-fit cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handlePause}
    >
      <video autoPlay playsInline muted ref={videoRef}>
        <track kind="captions" />
        <source src={URL.createObjectURL(file)} type="video/mp4" />
      </video>
      <button
        aria-label="Pause video"
        type="button"
        ref={pauseButtonRef}
        className={`
          absolute top-1/2 left-1/2
          transform -translate-x-1/2 -translate-y-1/2 
        `}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="size-24 opacity-50"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="size-24 opacity-50"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default VideoPreview;
