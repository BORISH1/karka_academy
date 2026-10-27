'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';

export function MultiStepLeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    studentType: 'College Student (Final Year)',
    interestArea: '1-on-1 Career Counselling',
    preferredTime: 'Evening (5 PM - 8 PM)',
    message: '',
    consent: true,
  });

  const totalSteps = 4;

  const validateCurrentStep = () => {
    setErrorMsg('');
    if (step === 1) {
      if (!formData.fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        return false;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        setErrorMsg('Please enter a valid phone or WhatsApp number.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return false;
      }
    }
    if (step === 4) {
      if (!formData.consent) {
        setErrorMsg('Please accept the consent terms to proceed.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 text-center shadow-xl animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-5 border border-emerald-500/30">
          ✓
        </div>
        <h3 className="text-2xl font-black text-card-foreground">
          Counselling Session Requested!
        </h3>
        <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. A dedicated senior strategist has been assigned and will call you at{' '}
          <strong>{formData.phone}</strong> during your preferred slot ({formData.preferredTime}).
        </p>

        <div className="mt-8 space-y-3">
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
              `Hi You Aspirant, I just booked a session for ${formData.fullName} regarding ${formData.interestArea}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md transition-all gap-2"
          >
            <span>💬 Fast Track: Confirm on WhatsApp</span>
          </a>

          <div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-primary font-semibold hover:underline block mx-auto mt-4"
            >
              Submit another request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl transition-all">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-muted-foreground mb-2">
          <span>
            STEP {step} OF {totalSteps}
          </span>
          <span className="text-primary">{Math.round((step / totalSteps) * 100)}% COMPLETED</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 rounded-full"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Error message */}
        {errorMsg && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold animate-in fade-in"
          >
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-card-foreground">Let&apos;s start with your contact details</h4>
            <p className="text-xs text-muted-foreground">We need this to assign the nearest counselor and send confirmation.</p>

            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Kannan"
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ramesh@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Student Type */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-card-foreground">What best describes your current stage?</h4>
            <p className="text-xs text-muted-foreground">This helps tailor the session specifically to your immediate goals.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'School Student (11th or 12th)',
                'College Student (1st to 3rd Year)',
                'College Student (Final Year)',
                'Recent Graduate / Job Seeker',
                'Working Professional (0-3 Yrs)',
                'Working Professional (3+ Yrs, Career Switch)',
                'Parent / Guardian Seeking Advice',
                'College / Placement Officer',
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setFormData({ ...formData, studentType: item })}
                  className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                    formData.studentType === item
                      ? 'border-primary bg-primary/10 text-primary shadow-sm ring-1 ring-primary'
                      : 'border-border bg-surface text-foreground hover:bg-muted'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Area of Interest */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-card-foreground">Which program or topic interests you most?</h4>
            <p className="text-xs text-muted-foreground">Select the primary service you want guidance on.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '1-on-1 Career Counselling & Roadmap',
                'Full Stack Web Development Bootcamp',
                'Data Science, ML & Generative AI',
                'Corporate Career Accelerator',
                'Cloud Computing & DevOps Practitioner',
                'Growth Marketing & Analytics',
                'ATS Resume Revamp & Mock Interviews',
                'College & University Admissions Advisory',
              ].map((service) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => setFormData({ ...formData, interestArea: service })}
                  className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                    formData.interestArea === service
                      ? 'border-primary bg-primary/10 text-primary shadow-sm ring-1 ring-primary'
                      : 'border-border bg-surface text-foreground hover:bg-muted'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Timing & Consent */}
        {step === 4 && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-card-foreground">Preferred Time & Final Details</h4>
            <p className="text-xs text-muted-foreground">When would you like our senior strategist to connect with you?</p>

            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Preferred Callback Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  'Morning (10 AM - 1 PM)',
                  'Afternoon (2 PM - 5 PM)',
                  'Evening (5 PM - 8 PM)',
                ].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setFormData({ ...formData, preferredTime: slot })}
                    className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                      formData.preferredTime === slot
                        ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                        : 'border-border bg-surface text-foreground hover:bg-muted'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Specific Question or Current Confusion (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. Confused between Data Analytics and Full Stack Web Dev..."
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="consent-check"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="consent-check" className="text-xs text-muted-foreground leading-normal">
                I agree to be contacted by You Aspirant counselors via Phone/WhatsApp for career guidance. No commercial spam guaranteed.
              </label>
            </div>
          </div>
        )}

        {/* Nav Buttons */}
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-2.5 text-xs font-bold text-foreground hover:bg-muted rounded-xl transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <Button type="button" onClick={handleNext} size="md">
              Continue to Step {step + 1} →
            </Button>
          ) : (
            <Button type="submit" size="md">
              Confirm & Book Free Session
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
