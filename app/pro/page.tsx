export const metadata = {
  title: "Matchboxd Pro",
  description: "Explore premium features and benefits for Pro members.",
};

export default function ProPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-200">Matchboxd Pro</h1>

      <p className="text-lg text-center mb-8 text-gray-300">
        Unlock exclusive features, customize your profile, and experience Matchboxd at its best.
      </p>

      <div className="bg-white p-6 shadow-lg rounded-xl text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">🎉 Coming Soon</h2>
        <ul className="list-disc space-y-3 ml-5">
          <li>Ad-free match experience</li>
          <li>Custom profile badges and themes</li>
          <li><span className="font-semibold text-yellow-600">Highlighted comments</span> — Make your voice stand out in every discussion</li>
        </ul>

        <p className="mt-6 text-sm text-gray-500 italic">
          We’re still building these features — stay tuned! Want to request something?{" "}
          <a href="mailto:mazharaltinca89@gmail.com" className="underline text-blue-600">
            Contact us
          </a>
        </p>
      </div>
    </main>
  );
}
