"use client";
import { useEffect, useState } from "react";
import axios, {AxiosError} from "axios";
import { useRouter } from "next/navigation";
import StarRating from "@/app/components/StarRating";
import {TrashIcon} from "@heroicons/react/24/solid";  // <-- Trash icon import

interface UserReview {
  matchId: number;
  homeTeam: string;
  awayTeam: string;
  matchDate: string;
  status?: string;
  score: number | null;
  comment: string | null;
  reviewedAt: string | null;
}

export default function CreatedReviewsPage() {
  const router = useRouter();
  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://matchboxd-backend.onrender.com/api";

  const removeReview = async (matchId: number) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        `${baseUrl}/users/me/reviews/remove`,
        { matchId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReviews((prev) => prev.filter((r) => r.matchId !== matchId));
    } catch (error) {
      const err = error as AxiosError;
      console.error("Failed to remove review", err.response?.data || err.message);
    }
  };


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get<UserReview[]>(
          `${baseUrl}/users/me/reviews`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setReviews(res.data);
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) return <p className="text-center py-8">Loading reviews...</p>;
  if (error)
    return <p className="text-center text-red-500 py-8">{error}</p>;
  if (reviews.length === 0)
    return <p className="text-center py-8">You have no reviews yet.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">My Reviews & Ratings</h1>
      <ul className="space-y-6">
        {reviews.map((review) => (
          <li
            key={review.matchId}
            className="relative border rounded-md p-4 shadow-sm dark:border-gray-700"
          >
            {/* Trash icon button - top right */}
            <button
              onClick={() => removeReview(review.matchId)}
              title="Remove review"
              className="absolute my-1 top-10 right-4 text-red-600 hover:text-red-800 transition"
            >
              <TrashIcon className="w-6 h-6" />
              <span className="sr-only">Remove review</span>
            </button>

            <div className="flex justify-between mb-2">
              <h2
                className="text-lg font-bold cursor-pointer hover:underline"
                onClick={() => router.push(`/matches/${review.matchId}`)}
              >
                {review.homeTeam} vs {review.awayTeam}
              </h2>
              <span className="text-sm text-gray-500">
                {review.reviewedAt
                  ? new Date(review.reviewedAt).toLocaleDateString()
                  : "No date"}
              </span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              {review.score !== null ? (
                <StarRating score={review.score} />
              ) : (
                <span className="italic text-gray-400">No rating given</span>
              )}
            </div>
            {review.comment ? (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 mt-2 text-gray-800 dark:text-gray-100">
                {review.comment}
              </div>
            ) : (
              <p className="italic text-gray-400">No comment given</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
