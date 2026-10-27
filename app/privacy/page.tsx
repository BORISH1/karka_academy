export const metadata = {
  title: "Privacy Policy | You Aspirant",
  description: "Privacy policy and data protection guidelines of You Aspirant.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-6">Privacy Policy</h1>
      <p className="text-xs text-neutral-400 mb-8">Last Updated: October 2024</p>

      <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">1. Information We Collect</h2>
          <p>
            When you register for a counselling session, bootcamp, or download resources on You Aspirant, we may collect your name, email address, phone number, educational qualifications, and career preferences.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to coordinate career guidance sessions, personalize curriculum delivery, verify course certifications, and share relevant job openings with your consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">3. Zero Spam & Data Protection</h2>
          <p>
            We adhere to strict data security protocols. We do not sell, rent, or trade your personal information with unauthorized third-party commercial advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-800 mb-2">4. Contact Us</h2>
          <p>
            If you have questions about your privacy data or wish to request data deletion, contact us at <a href="mailto:privacy@youaspirant.com" className="text-blue-600 underline">privacy@youaspirant.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
