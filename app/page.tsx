import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto w-full h-screen max-w-xl text-center flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Matchboxd 🎬</h1>
      <p className="text-lg text-gray-600">
        Share what you’ve watched. Discover what to watch next.
      </p>

      <div className="flex sm:flex-row gap-4 mt-6">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
