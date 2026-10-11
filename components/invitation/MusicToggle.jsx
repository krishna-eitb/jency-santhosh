"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/audio/romantic-instrumental.mp3";

/**
 * User-initiated background music. Never autoplays; file is not requested until first click.
 * If the MP3 is missing or playback is rejected, the button stays usable and shows "Music unavailable".
 */
export default function MusicToggle() {
  const audioRef = useRef(null);
  const [status, setStatus] = useState("paused"); // paused | playing | unavailable

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (status === "playing") {
      audio.pause();
      setStatus("paused");
      return;
    }
    try {
      audio.volume = 0.3;
      await audio.play();
      setStatus("playing");
    } catch {
      setStatus("unavailable");
    }
  };

  const playing = status === "playing";
  const label = playing ? "Pause romantic background music" : "Play romantic background music";
  const text = status === "unavailable" ? "Music unavailable" : playing ? "Music on" : "Music off";

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        onError={() => setStatus("unavailable")}
        onPause={() => setStatus((s) => (s === "playing" ? "paused" : s))}
      />
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={label}
        aria-pressed={playing}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="fixed right-4 top-4 z-50 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-champagne/70 bg-ink/45 px-4 text-[0.65rem] uppercase tracking-[0.25em] text-ivory backdrop-blur-md focus-visible:outline-ivory"
        style={{ top: "max(1rem, env(safe-area-inset-top))" }}
      >
        {playing ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
        <span aria-hidden="true" className="font-script text-base leading-none normal-case tracking-normal md:text-lg">{text}</span>
      </motion.button>
    </>
  );
}
