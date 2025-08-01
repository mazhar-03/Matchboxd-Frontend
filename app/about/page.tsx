export const metadata = {
  title: "About | Matchboxd",
  description: "Learn more about the idea behind Matchboxd and how it works.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-200">About Matchboxd</h1>

      <p className="mb-6 text-lg leading-relaxed text-center text-gray-300">
        Matchboxd is where football meets emotion. It&#39;s a platform for fans to relive matches, share
        their reactions, and connect with others through the highs and lows of the beautiful game.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-8 text-gray-800">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">🎯 Our Goal</h2>
          <p>
            We believe that football isn&#39;t just about goals and results — it&#39;s about emotions. With
            Matchboxd, we aim to capture those feelings and build a space for authentic fan
            expression.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl text-gray-800">
          <h2 className="text-2xl font-semibold mb-3">⚙️ How It Works</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>View past matches or upcoming fixtures</li>
            <li>Leave your thoughts, rants, and celebrations</li>
            <li>Engage in comment threads with fellow fans</li>
            <li>Relive the emotion, match by match</li>
            <li>Add the memorable matches to your favorites</li>
          </ul>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">🌍 Join the Community</h2>
          <p>
            Whether you&#39;re watching your club fight relegation or win the title, Matchboxd is here
            for you. Dive into the history, the banter, the heartbreak, and the glory — all in one
            place.
          </p>
        </div>
      </div>
    </section>
  );
}
