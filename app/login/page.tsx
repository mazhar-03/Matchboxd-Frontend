"use client";

import { useState } from "react";

interface LoginResponse {
  message: string;
  token: string;
  username: string;
  userPhoto?: string;
  userId:number;
}

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      let responseData;
      const contentType = res.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        responseData = await res.json();
      } else {
        const text = await res.text();
        responseData = { message: text };
      }

      if (!res.ok) {
        setError(responseData.message || "Login failed");
        return;
      }

      const data: LoginResponse = responseData;

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify({
        username: data.username,
        userPhoto: data.userPhoto,
        userId: data.userId,
      }));

      window.location.href = "/dashboard";

    } catch (err: unknown) {
      console.error("Login error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="w-full h-screen max-w-sm mx-auto flex flex-col justify-center gap-6 p-4">
      <h1 className="text-2xl font-bold text-center">Login to Matchboxd</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border px-4 py-2 rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && (
        <p className="text-sm text-red-500 text-center">
          {error}
        </p>
      )}
    </div>
  );
}