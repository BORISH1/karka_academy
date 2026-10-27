'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  actionLink?: { label: string; href: string };
  time: string;
}

const PRESET_QUESTIONS = [
  {
    id: 'course-fit',
    question: '🎓 Which course is best for beginners or non-tech students?',
    answer:
      'For beginners and non-IT students, we recommend our **Full Stack Web Development (React & Node)** or **Career Accelerator** programs. They start from the absolute fundamentals with 1-on-1 mentor code reviews, hands-on capstone projects, and real-world Git workflows—no prior coding experience required!',
    actionLink: { label: 'Explore All Courses →', href: '/courses' },
  },
  {
    id: 'placements',
    question: '💼 What are the placement statistics and hiring partners?',
    answer:
      'We maintain a **94% placement success rate**! Our alumni have secured offers ranging from **₹4.5 LPA up to ₹14.5 LPA** across 120+ hiring partners, including **Zoho, Deloitte, Cognizant, Infosys, and high-growth venture-backed startups**.',
    actionLink: { label: 'View Success Stories →', href: '/stories' },
  },
  {
    id: 'counselling',
    question: '🧭 How does the 1-on-1 career counselling session work?',
    answer:
      'Our career guidance starts with a **100% Free 30-minute diagnostic call**. We run a scientific psychometric and skill assessment, map your strengths, and provide a clear, actionable career transition roadmap tailored to your goals.',
    actionLink: { label: 'Book Free Session →', href: '/contact' },
  },
  {
    id: 'fees',
    question: '💰 What are the fees and EMI payment options?',
    answer:
      'Our programs range from **₹9,999 to ₹28,999** with **0% interest monthly EMI options** available. We also offer need-based scholarships and a transparent refund policy if you withdraw before the trial milestone.',
    actionLink: { label: 'View Courses & Fees →', href: '/courses' },
  },
  {
    id: 'resume',
    question: '📄 Do you provide ATS resume reviews & mock interviews?',
    answer:
      'Yes! Every enrolled student receives **3 full mock technical rounds, 2 HR leadership interviews**, and complete resume transformation optimized to beat ATS filter algorithms used by top tier-1 recruiters.',
    actionLink: { label: 'See Guidance Services →', href: '/services' },
  },
];

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-extrabold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function AiCareerAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Hello! 👋 I am your **You Aspirant AI Career Counselor**. How can I help you navigate your career journey today? Ask me anything or select a popular topic below:',
      time: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSelectQuestion = (q: (typeof PRESET_QUESTIONS)[0]) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q.question,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: q.answer,
        actionLink: q.actionLink,
        time: 'Just now',
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = '';
      let actionLink: { label: string; href: string } | undefined;

      if (lower.includes('fee') || lower.includes('cost') || lower.includes('price') || lower.includes('emi')) {
        responseText =
          'Our bootcamp fees range from **₹9,999 to ₹28,999** with **0% interest EMI options starting at ₹2,500/month**. Full Stack Web Development is ₹24,999, and Data Science & AI is ₹28,999.';
        actionLink = { label: 'Check Course Fees →', href: '/courses' };
      } else if (lower.includes('place') || lower.includes('job') || lower.includes('salary') || lower.includes('package') || lower.includes('hire')) {
        responseText =
          'We have a **94% placement rate** with hiring partners including **Zoho, Deloitte, Infosys, and Cognizant**. Average starting packages range from **₹4.5 LPA to ₹14.5 LPA**.';
        actionLink = { label: 'Explore Alumni Stories →', href: '/stories' };
      } else if (lower.includes('counsel') || lower.includes('guid') || lower.includes('book') || lower.includes('mentor')) {
        responseText =
          'You can book a **100% Free 30-Minute 1-on-1 Career Consultation** with our senior mentors. We analyze your background, answer doubts, and map out a step-by-step career plan.';
        actionLink = { label: 'Book Free Consultation →', href: '/contact' };
      } else if (lower.includes('course') || lower.includes('bootcamp') || lower.includes('learn') || lower.includes('tech') || lower.includes('syllabus')) {
        responseText =
          'We offer comprehensive live bootcamps in **Full Stack Web Development (React & Node)**, **Data Science & AI**, **UI/UX Design**, **Cloud & DevOps**, and **Career Acceleration**. All courses include capstones and portfolio reviews.';
        actionLink = { label: 'View All Curricula →', href: '/courses' };
      } else if (lower.includes('non-tech') || lower.includes('beginner') || lower.includes('switch') || lower.includes('degree')) {
        responseText =
          'Over **60% of our successful graduates came from non-IT or non-computer science backgrounds**! Our mentors provide dedicated foundational training, practical labs, and confidence-building code reviews.';
        actionLink = { label: 'Start Free Assessment →', href: '/contact' };
      } else {
        responseText =
          'Thank you for asking! You Aspirant specializes in customized career coaching, industry-standard tech bootcamps, and guaranteed mock interviews. You can speak directly with our senior counseling team for in-depth guidance:';
        actionLink = { label: 'Schedule 1-on-1 Call →', href: '/contact' };
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        actionLink,
        time: 'Just now',
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: 'Conversation refreshed! Ask another question or tap any popular topic below:',
        time: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <aside aria-label="AI Career Assistant Widget" className="fixed bottom-6 right-6 z-40 select-none">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Open AI Career Counselor Assistant"
          className="relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-primary text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400/40 group cursor-pointer border border-white/20"
        >
          {/* Subtle Outer Glow Aura */}
          <span className="absolute -inset-1 rounded-full bg-blue-500/30 blur-md group-hover:bg-blue-500/50 transition-all pointer-events-none" />

          {/* AI Sparkle Icon */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
            <svg className="w-5 h-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="text-left hidden sm:block pr-1">
            <p className="text-xs font-bold leading-tight">AI Career Assistant</p>
            <p className="text-[10px] text-blue-200/90 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              Ask Any Question
            </p>
          </div>
        </button>
      </aside>

      {/* Floating Assistant Modal / Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="AI Career Assistant Chat Window"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] max-h-[82vh] h-[640px] flex flex-col bg-surface-elevated/95 dark:bg-[#0c1427]/95 backdrop-blur-xl border border-border/80 dark:border-white/15 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-primary text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg backdrop-blur-sm border border-white/30">
                🤖
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  Aspirant AI Assistant
                  <span className="text-[10px] bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 px-1.5 py-0.2 rounded-full font-semibold">
                    24/7 Q&A
                  </span>
                </h3>
                <p className="text-[11px] text-blue-100/80">Instant Guidance & Admissions Info</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Restart Conversation"
                aria-label="Restart Conversation"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Conversation Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted/80 dark:bg-muted/50 text-foreground border border-border/60 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{renderFormattedText(msg.text)}</p>

                  {/* Optional Contextual Action Link */}
                  {msg.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-border/40">
                      <Link
                        href={msg.actionLink.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center text-xs font-bold text-primary dark:text-sky-400 hover:underline"
                      >
                        {msg.actionLink.label}
                      </Link>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-muted/60 text-muted-foreground text-xs w-fit border border-border/40">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] ml-1">AI Counselor is formulating advice...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Q&A Questions Carousel/List */}
          <div className="p-3 bg-muted/30 dark:bg-muted/20 border-t border-border/60">
            <p className="text-[11px] font-bold text-muted-foreground mb-2 flex items-center gap-1">
              <span>💡</span> Tap a Popular Career Question:
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleSelectQuestion(q)}
                  className="whitespace-nowrap flex-shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full bg-surface dark:bg-surface-elevated hover:bg-primary/10 hover:text-primary dark:hover:text-sky-300 border border-border/80 transition-all text-foreground cursor-pointer shadow-sm"
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Box */}
          <form onSubmit={handleSendCustomMessage} className="p-3 bg-surface dark:bg-[#0c1427] border-t border-border/80 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about bootcamps, fees, counseling..."
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send question"
              className="px-3.5 py-2 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground text-xs font-bold flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
