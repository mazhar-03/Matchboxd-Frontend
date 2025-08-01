"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative bg-black text-white min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/logo1.webp"
          alt="Premier League 25/26"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content with animations */}
      <div className="relative z-10 text-center px-4 max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fadeInUp">
          Where <span className="text-green-500">Matches</span> Become <br />
          <span className="text-green-500">Memories</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fadeInUp delay-100">
          Feel it. Relive it. Share it.
        </p>

        <button
          onClick={() => router.push("/register")}
          className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30 animate-fadeInUp delay-200"
        >
          Join the Emotion
        </button>
      </div>

      {/* Subtle floating footballs animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <Image
          src="/image/football-icon.webp"
          alt="Football"
          width={40}
          height={40}
          className="opacity-70"
        />
      </div>
    </div>
  );
}