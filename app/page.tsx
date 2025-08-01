"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
      <div className="relative bg-black text-white h-[80vh] flex items-center justify-center">
        <Image
          src="/Image/logo.jpeg"
          alt="Premier League 25/26"
          fill
          className="absolute inset-0 object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Matches Become Memories</h1>
          <p className="text-lg md:text-xl mb-6">Feel it. Relive it. Share it.</p>
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
