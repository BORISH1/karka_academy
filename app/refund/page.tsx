export const metadata = {
  title: "Refund Policy | You Aspirant",
  description: "Transparent refund and cancellation policy for You Aspirant bootcamps and advisory.",
};

export default function RefundPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6">Refund & Cancellation Policy</h1>
      <p className="text-xs text-neutral-400 mb-8">Last Updated: October 2024</p>

      <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">1. 100% Free Initial Counselling</h2>
          <p>
            All initial 30-minute discovery sessions are provided completely free of charge with zero obligation to enroll in any paid program.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">2. 7-Day Money-Back Guarantee for Bootcamps</h2>
          <p>
            If you enroll in any multi-week bootcamp and decide within the first 7 days (or within 2 live classes) that the curriculum does not match your expectations, we will provide a 100% refund without hassle.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">3. Cohort Transfer & Deferrals</h2>
          <p>
            If an emergency, exam schedule, or health issue arises during your training, you may request a free deferral to the subsequent cohort without paying any re-enrollment fee.
          </p>
        </section>
      </div>
    </div>
  );
}
