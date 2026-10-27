'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentStatus: 'Undergraduate Student',
    interestedIn: '1-on-1 Career Counselling',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-20 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Free 30-Min Consultation
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward career certainty. Fill out the quick form below or reach out directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-20 bg-neutral-50/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Direct Contact Channels</h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base shrink-0">
                      📞
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-bold uppercase block">Phone Support</span>
                      <a href="tel:+919876543210" className="font-semibold text-neutral-900 hover:text-blue-600 text-base">
                        +91 98765 43210
                      </a>
                      <p className="text-xs text-neutral-500 mt-0.5">Mon–Sat: 9:00 AM – 7:30 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-base shrink-0">
                      💬
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-bold uppercase block">Instant WhatsApp</span>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-green-700 hover:underline text-base"
                      >
                        Chat with our Counselor Now
                      </a>
                      <p className="text-xs text-neutral-500 mt-0.5">Typical response within 10 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-base shrink-0">
                      ✉️
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-bold uppercase block">Admissions Email</span>
                      <a href="mailto:contact@youaspirant.com" className="font-semibold text-neutral-900 hover:text-blue-600 text-base">
                        contact@youaspirant.com
                      </a>
                      <p className="text-xs text-neutral-500 mt-0.5">For corporate training: corporate@youaspirant.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-base shrink-0">
                      📍
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 font-bold uppercase block">Training Centers</span>
                      <p className="font-semibold text-neutral-900">Chennai & Bangalore</p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Guindy Industrial Estate, Chennai | HSR Layout, Sector 6, Bengaluru
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-md">
                <h4 className="text-lg font-bold mb-2">100% Privacy Guarantee</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  We respect your privacy. Your contact details will never be sold, rented, or used for spam. We only contact you regarding your scheduled guidance session.
                </p>
              </div>
            </div>

            {/* Lead Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Enquiry Received Successfully!</h3>
                  <p className="text-neutral-600 text-sm mt-2 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName || 'Aspirant'}</strong>. A senior career advisor will contact you within 24 business hours at {formData.phone || 'your phone number'}.
                  </p>
                  <div className="mt-8 space-y-3">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-green-600 text-white rounded-md font-semibold text-sm hover:bg-green-700 shadow-sm"
                    >
                      💬 Skip Wait: Ping Us Directly on WhatsApp
                    </a>
                    <div>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-blue-600 hover:underline block mx-auto mt-4"
                      >
                        Submit another response
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">Book Your Discovery Session</h3>
                    <p className="text-xs text-neutral-500 mt-1">Please fill in your current details so we can assign the most relevant mentor.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kannan"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Current Status
                      </label>
                      <select
                        value={formData.currentStatus}
                        onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                      >
                        <option>12th / School Student</option>
                        <option>Undergraduate Student (Final Year)</option>
                        <option>Undergraduate Student (1st-3rd Year)</option>
                        <option>Recent Graduate / Job Seeker</option>
                        <option>Working Professional (Career Switch)</option>
                        <option>Parent / Guardian</option>
                        <option>College / Institutional Representative</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Program of Interest
                      </label>
                      <select
                        value={formData.interestedIn}
                        onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                      >
                        <option>1-on-1 Career Counselling</option>
                        <option>Full Stack Web Development</option>
                        <option>Data Science & Generative AI</option>
                        <option>Corporate Career Accelerator</option>
                        <option>Cloud & DevOps Practitioner</option>
                        <option>College Admissions Guidance</option>
                        <option>ATS Resume & Mock Interview Revamp</option>
                        <option>Institutional Campus Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Tell us briefly about your goals or confusion (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Completed mechanical engineering, want to know if Data Science is feasible for me..."
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full py-3.5 text-base font-bold shadow-md">
                    Request Free Consultation
                  </Button>

                  <p className="text-[11px] text-neutral-400 text-center">
                    By submitting, you agree to our Terms of Use and Privacy Policy. Zero marketing spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
