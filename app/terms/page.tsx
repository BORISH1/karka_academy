export const metadata = {
  title: "Terms of Service | You Aspirant",
  description: "Terms and conditions of using You Aspirant website and training programs.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6">Terms of Service</h1>
      <p className="text-xs text-neutral-400 mb-8">Last Updated: October 2024</p>

      <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing You Aspirant or enrolling in any counseling or training programs, you agree to abide by these terms, conditions, and applicable local regulations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">2. Intellectual Property</h2>
          <p>
            All course curricula, video sessions, software project repositories, and counseling reports are proprietary property of You Aspirant and licensed solely for your individual personal career advancement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">3. Placement Support Code of Conduct</h2>
          <p>
            Placement assistance requires active student participation including mandatory mock interview attendance, capstone project completion, and timely responses to hiring partner interview schedules.
          </p>
        </section>
      </div>
    </div>
  );
}
