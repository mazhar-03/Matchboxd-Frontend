"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative bg-black text-white h-[80vh] w-full flex items-center justify-center">
      {/* Arka plan resmi */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/logo1.webp"
          alt="Premier League 25/26"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Where Matches Become Memories
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Feel it. Relive it. Share it.
        </p>
        <button
          onClick={() => router.push("/register")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          Join the Emotion
        </button>
      </div>
    </div>
  );
}
