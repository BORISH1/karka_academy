export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  audience: string[];
  features: string[];
  deliverables: string[];
  duration: string;
  ctaText: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Tech' | 'Data & AI' | 'Career Skills' | 'Business';
  level: string;
  duration: string;
  hours: string;
  mode: 'Live Online + Mentorship' | 'Hybrid (Classroom + Online)';
  rating: number;
  reviewCount: number;
  studentsCount: number;
  featured: boolean;
  badge?: string;
  price: string;
  originalPrice: string;
  overview: string;
  curriculum: {
    week: string;
    topic: string;
    skills: string[];
    project: string;
  }[];
  prerequisites: string[];
  toolsCovered: string[];
  careerRoles: string[];
}

export interface SuccessStory {
  id: string;
  name: string;
  photoUrl?: string;
  previousRole: string;
  currentRole: string;
  company: string;
  salaryHike: string;
  program: string;
  year: string;
  story: string;
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  category: 'Student' | 'Parent' | 'Career Switcher' | 'College Partner';
  role: string;
  affiliation: string;
  avatarText: string;
  avatarUrl?: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string;
  experience: string;
}

export const statsData = [
  { label: "Students Guided", value: "10,000+" },
  { label: "Career Mentors", value: "50+" },
  { label: "Placement Rate", value: "94%" },
  { label: "Partner Companies", value: "120+" },
];

export const servicesData: Service[] = [
  {
    id: 'career-counselling',
    slug: 'career-counselling',
    title: '1-on-1 Personalized Career Counselling',
    shortDesc: 'Scientific psychometric evaluations and empathetic mentoring from industry strategists to map your ideal career direction.',
    fullDesc: 'Choosing the right career path should never be guesswork. Our 1-on-1 counseling program combines comprehensive psychometric personality profiling, aptitude diagnostics, and deep market intelligence to craft an actionable 3-year career roadmap tailored to your strengths.',
    icon: '🎯',
    audience: ['School leavers & 12th standard students', 'Undergrads confused about specialization', 'Job seekers needing direction'],
    features: [
      'Comprehensive 45-point psychometric & aptitude assessment',
      'Two 60-minute confidential 1-on-1 video sessions with senior counselors',
      'Personalized Career Discovery Blueprint (20+ page PDF report)',
      'Recommended degree programs, certifications, and growth milestones',
      '30-day WhatsApp follow-up support for decision reassurance'
    ],
    deliverables: ['Custom Career Roadmap PDF', 'Stream & College Matrix', 'Skill Gap Diagnostic Report'],
    duration: '2 Weeks Comprehensive Engagement',
    ctaText: 'Book Your Discovery Session'
  },
  {
    id: 'skill-training',
    slug: 'skill-training',
    title: 'Job-Ready Industry Skill Bootcamps',
    shortDesc: 'Hands-on practical cohorts in Full Stack Development, Data Analytics, Cloud, and Generative AI taught by active tech leads.',
    fullDesc: 'College syllabus frequently lags behind fast-moving industry demands. Our bootcamps emphasize project-first learning where students code production-grade applications, push to GitHub, and participate in code reviews identical to modern tech companies.',
    icon: '💻',
    audience: ['Engineering & CS students', 'Non-tech graduates seeking tech entry', 'Junior developers upskilling'],
    features: [
      'Live mentor-led weekend & weekday evening sessions',
      '3 end-to-end industry capstone projects deployed to production',
      'Pair programming and weekly code reviews with Senior Engineers',
      'Comprehensive Git, Docker, and CI/CD workflow practices',
      'Verified Certificate of Completion recognized by partner recruiters'
    ],
    deliverables: ['GitHub Portfolio with 3 Live Apps', 'Capstone Code Review Scorecard', 'Accredited Bootcamp Certificate'],
    duration: '12 to 16 Weeks (Part-time)',
    ctaText: 'Browse Bootcamp Tracks'
  },
  {
    id: 'interview-coaching',
    slug: 'interview-coaching',
    title: 'Interview Mastery & ATS Resume Transformation',
    shortDesc: 'Mock technical and HR interviews with hiring managers, tailored feedback, and ATS-optimized resume revamps.',
    fullDesc: 'Over 75% of resumes get eliminated by Applicant Tracking Systems before a human ever views them. We transform your resume into a metric-driven, keyword-optimized powerhouse and drill you with realistic mock interviews until you are confident and articulate under pressure.',
    icon: '📄',
    audience: ['Job seekers with interviews coming up', 'Candidates getting resume rejections', 'Career switchers'],
    features: [
      'Line-by-line ATS resume overhaul with quantifiable achievement framing',
      'Two 45-minute live mock interviews (Technical + Behavioral)',
      'Recorded video critique and detailed rubric evaluation',
      'LinkedIn profile optimization for inbound recruiter outreach',
      'Salary negotiation scripts and offer evaluation guidance'
    ],
    deliverables: ['Editable Word & PDF ATS Resume', 'LinkedIn Profile Audit', 'Mock Interview Scorecard'],
    duration: '1 to 2 Weeks Rapid Prep',
    ctaText: 'Revamp Your Resume & Prep'
  },
  {
    id: 'college-higher-ed',
    slug: 'college-higher-ed',
    title: 'College Admissions & Higher Education Strategy',
    shortDesc: 'End-to-end guidance for premier universities in India and abroad, statement of purpose (SOP) reviews, and scholarship navigation.',
    fullDesc: 'Selecting the right institute shapes your network and initial job offers for a lifetime. We guide students and parents through college selection criteria, entrance exam prep timelines, application documentation, and international university shortlisting.',
    icon: '🎓',
    audience: ['High school graduates', 'College students planning Master\'s / MBA', 'Parents evaluating university investments'],
    features: [
      'Institution tier comparative analysis (ROI, placements, faculty, alumni)',
      'SOP & Letter of Recommendation drafting workshops',
      'Entrance exam timeline strategy (GATE, CAT, GRE, IELTS)',
      'Scholarship application guidance and financial budgeting',
      'Direct interaction with alumni currently enrolled in target universities'
    ],
    deliverables: ['Custom University Shortlist Matrix', 'Polished SOP & Essay Drafts', 'Scholarship Checklist'],
    duration: '4 to 8 Weeks Guided Process',
    ctaText: 'Plan Your Higher Education'
  },
  {
    id: 'career-switch',
    slug: 'career-switch',
    title: 'Working Professional Career Transition',
    shortDesc: 'Structured transition roadmaps for non-tech to tech switches, domain shifts, and fast-track promotions without quitting your current job.',
    fullDesc: 'Switching careers while balancing a full-time job requires disciplined strategy. We help you identify transferable skills, build targeted domain competence, craft your narrative, and transition into higher-paying growth sectors smoothly.',
    icon: '⚡',
    audience: ['Professionals feeling stuck in stagnation', 'Non-IT employees moving to tech/data', 'Return-to-work candidates'],
    features: [
      'Transferable skills audit and target role mapping',
      'Weekend-friendly skill acquisition schedule',
      'Strategic networking & stealth job search methodology',
      'Executive coaching on narrative reframing for recruiters',
      'Offer negotiation strategy to maximize compensation increment'
    ],
    deliverables: ['Transition Timeline Blueprint', 'Target Employer List', 'Positioning Pitch Deck'],
    duration: '8 to 12 Weeks Structured Transition',
    ctaText: 'Start Your Career Transition'
  },
  {
    id: 'corporate-institutional',
    slug: 'corporate-institutional',
    title: 'Institutional & Campus Training Programs',
    shortDesc: 'Custom employability bootcamps, campus recruitment drives, and corporate upskilling programs for colleges and organizations.',
    fullDesc: 'We partner with universities, degree colleges, and corporate companies to deliver bespoke technical upskilling, soft skills accelerators, and mock drive simulations that directly elevate student placement records.',
    icon: '🏛️',
    audience: ['College Placement Officers & Deans', 'Corporate HR heads seeking fresher upskilling', 'EdTech partners'],
    features: [
      'Tailored curriculum matching current corporate hiring trends',
      'Pre-placement aptitude, coding, and group discussion workshops',
      'On-campus or virtual mega mock placement drives',
      'Real-time student progress tracking dashboards for college admin',
      'Joint placement drives with our network of 120+ hiring partners'
    ],
    deliverables: ['Institutional Analytics Report', 'Batch Skill Certification', 'Placement Partner Connects'],
    duration: 'Custom Multi-week Programs',
    ctaText: 'Partner With Us'
  }
];

export const coursesData: Course[] = [
  {
    id: 'course-fullstack-nextjs',
    slug: 'fullstack-web-development',
    title: 'Full Stack Web Development (React, Next.js & Node)',
    tagline: 'From frontend fundamentals to production deployment with TypeScript and Cloud architecture.',
    category: 'Tech',
    level: 'Beginner to Advanced',
    duration: '16 Weeks',
    hours: '120+ Hours Live',
    mode: 'Live Online + Mentorship',
    rating: 4.9,
    reviewCount: 384,
    studentsCount: 1420,
    featured: true,
    badge: 'Best Seller',
    price: '₹24,999',
    originalPrice: '₹45,000',
    overview: 'This comprehensive bootcamp teaches modern industry web engineering. You won\'t build toy todo apps; you will build scalable, production-grade applications with modern React, Next.js 14 App Router, Node.js microservices, PostgreSQL, and AWS deployment.',
    curriculum: [
      {
        week: 'Weeks 1-4',
        topic: 'Modern Frontend & TypeScript Foundations',
        skills: ['HTML5/Semantic UI', 'Tailwind CSS', 'Modern JavaScript (ES6+)', 'TypeScript Type Systems'],
        project: 'Responsive Interactive Fintech Dashboard'
      },
      {
        week: 'Weeks 5-8',
        topic: 'React & Next.js Architecture',
        skills: ['React Hooks & State Management', 'Next.js App Router', 'Server Components & SSR', 'Client Interactivity'],
        project: 'Full-featured SaaS Project Management Platform'
      },
      {
        week: 'Weeks 9-12',
        topic: 'Backend APIs & Relational Databases',
        skills: ['Node.js & Express', 'PostgreSQL & Prisma ORM', 'JWT & OAuth Authentication', 'REST & GraphQL APIs'],
        project: 'Multi-tenant E-Commerce API with Stripe Payments'
      },
      {
        week: 'Weeks 13-16',
        topic: 'DevOps, CI/CD, Capstone & Placements',
        skills: ['Docker & Containerization', 'AWS S3 & Vercel Deployments', 'Unit & E2E Testing (Jest, Playwright)', 'Mock Technical Rounds'],
        project: 'Enterprise Full Stack Capstone Deployed on Cloud'
      }
    ],
    prerequisites: ['Basic logical thinking and computer literacy', 'Prior coding familiarity is helpful but not mandatory'],
    toolsCovered: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'Vercel'],
    careerRoles: ['Junior Full Stack Developer', 'Frontend Engineer', 'React Developer', 'Software Engineer']
  },
  {
    id: 'course-data-science-ai',
    slug: 'data-science-ai',
    title: 'Data Science, Machine Learning & Generative AI',
    tagline: 'Analyze data, build predictive machine learning models, and harness GenAI APIs for real business problems.',
    category: 'Data & AI',
    level: 'Beginner to Intermediate',
    duration: '14 Weeks',
    hours: '100+ Hours Live',
    mode: 'Live Online + Mentorship',
    rating: 4.85,
    reviewCount: 295,
    studentsCount: 980,
    featured: true,
    badge: 'Trending',
    price: '₹28,999',
    originalPrice: '₹50,000',
    overview: 'Step into the highest growth field of the decade. Learn to extract actionable insights from raw data, automate business analytics using Python and SQL, and build predictive machine learning models alongside modern Generative AI integrations.',
    curriculum: [
      {
        week: 'Weeks 1-3',
        topic: 'Data Analysis with Python & SQL',
        skills: ['Python Data Structures', 'Pandas & NumPy', 'Advanced SQL Queries', 'Data Cleaning & Wrangling'],
        project: 'E-commerce Customer Churn Analysis'
      },
      {
        week: 'Weeks 4-7',
        topic: 'Exploratory Analytics & Business Intelligence',
        skills: ['Statistical Inference', 'Power BI & Tableau', 'Seaborn & Matplotlib', 'KPI Dashboards'],
        project: 'Executive Sales & Revenue Intelligence Dashboard'
      },
      {
        week: 'Weeks 8-11',
        topic: 'Applied Machine Learning',
        skills: ['Supervised & Unsupervised Learning', 'Scikit-learn', 'Feature Engineering', 'Model Evaluation & Tuning'],
        project: 'Real Estate Price Prediction & Classification Engine'
      },
      {
        week: 'Weeks 12-14',
        topic: 'Generative AI & LLM Applications',
        skills: ['OpenAI & HuggingFace APIs', 'LangChain Basics', 'Vector Databases & RAG', 'Deploying AI Models with Streamlit'],
        project: 'AI-Powered Smart Document Assistant'
      }
    ],
    prerequisites: ['Basic mathematical aptitude', 'Curiosity for data and patterns'],
    toolsCovered: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Power BI', 'Streamlit', 'OpenAI APIs', 'Jupyter'],
    careerRoles: ['Data Analyst', 'Junior Data Scientist', 'Business Intelligence Analyst', 'AI Operations Associate']
  },
  {
    id: 'course-career-accelerator',
    slug: 'career-accelerator',
    title: 'Corporate Career Accelerator & Placement Bootcamp',
    tagline: 'Master corporate communications, agile workplace practices, and crack top-tier technical and behavioral interviews.',
    category: 'Career Skills',
    level: 'All Levels',
    duration: '6 Weeks',
    hours: '50+ Hours Live',
    mode: 'Live Online + Mentorship',
    rating: 4.95,
    reviewCount: 412,
    studentsCount: 2100,
    featured: true,
    badge: 'High Impact',
    price: '₹9,999',
    originalPrice: '₹18,000',
    overview: 'Skills get you an interview; personality, communication, and executive presence get you hired and promoted. This fast-track intensive workshop bridges the critical gap between academic knowledge and corporate excellence.',
    curriculum: [
      {
        week: 'Week 1',
        topic: 'Personal Branding & ATS Resume Engineering',
        skills: ['Quantifiable Resume Bullets', 'ATS Optimization', 'LinkedIn Inbound Funnel', 'Portfolio Framing'],
        project: 'Market-Ready Professional Portfolio & Verified Resume'
      },
      {
        week: 'Week 2-3',
        topic: 'Technical Interview Drills & Problem Solving',
        skills: ['DSA Strategy & Pattern Recognition', 'System Design Thinking for Freshers', 'Live Whiteboard Exercises'],
        project: '50 Curated High-Frequency Technical Problems Solved'
      },
      {
        week: 'Week 4-5',
        topic: 'Behavioral Interviews, STAR Method & Case Studies',
        skills: ['STAR Communication Framework', 'Executive Storytelling', 'Handling Salary Negotiations', 'Case Study Competitions'],
        project: 'Live Recorded 1-on-1 Mock Interview with Hiring VP'
      },
      {
        week: 'Week 6',
        topic: 'Corporate Readiness & 90-Day Onboarding Plan',
        skills: ['Agile & Jira Workflows', 'Corporate Email & Slack Etiquette', 'Conflict Resolution', 'Navigating Appraisals'],
        project: 'First 90-Days Corporate Action Roadmap'
      }
    ],
    prerequisites: ['Open to all students, graduates, and professionals'],
    toolsCovered: ['LinkedIn Sales Nav', 'Notion', 'Canva', 'Jira Basics', 'ATS Simulators'],
    careerRoles: ['Corporate Readiness Certificate', 'Direct entry into campus hiring pipelines']
  },
  {
    id: 'course-cloud-devops',
    slug: 'cloud-devops-engineering',
    title: 'Cloud Computing & DevOps Practitioner',
    tagline: 'Master AWS, Linux, Docker, Kubernetes, and CI/CD pipelines to build reliable cloud infrastructure.',
    category: 'Tech',
    level: 'Intermediate',
    duration: '12 Weeks',
    hours: '90+ Hours Live',
    mode: 'Live Online + Mentorship',
    rating: 4.8,
    reviewCount: 168,
    studentsCount: 620,
    featured: false,
    price: '₹26,999',
    originalPrice: '₹48,000',
    overview: 'Cloud and DevOps specialists command premier compensations in modern tech organizations. Learn how to architect, automate, and deploy enterprise applications with high availability and resilience.',
    curriculum: [
      {
        week: 'Weeks 1-3',
        topic: 'Linux Administration & Shell Scripting',
        skills: ['Linux Kernel & Permissions', 'Bash Automation', 'Networking & DNS', 'SSH & Security'],
        project: 'Automated Server Provisioning & Backup Script'
      },
      {
        week: 'Weeks 4-6',
        topic: 'AWS Cloud Architecture',
        skills: ['EC2, VPC & Security Groups', 'S3 & CloudFront', 'RDS & DynamoDB', 'IAM & CloudWatch'],
        project: 'High-Availability Multi-Tier Web Application on AWS'
      },
      {
        week: 'Weeks 7-9',
        topic: 'Docker & Kubernetes Orchestration',
        skills: ['Dockerfiles & Image Optimization', 'Container Networking', 'K8s Pods, Services, Ingress', 'Helm Charts'],
        project: 'Microservice Deployment on Managed Kubernetes (EKS)'
      },
      {
        week: 'Weeks 10-12',
        topic: 'CI/CD Pipelines & Terraform (IaC)',
        skills: ['GitHub Actions', 'Jenkins Workflows', 'Terraform Modules', 'Monitoring with Prometheus & Grafana'],
        project: 'End-to-End Automated GitOps Deployment Pipeline'
      }
    ],
    prerequisites: ['Basic command line familiarity and networking concepts'],
    toolsCovered: ['AWS', 'Linux', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Prometheus'],
    careerRoles: ['Junior DevOps Engineer', 'Cloud Support Associate', 'Site Reliability Engineer (SRE)']
  },
  {
    id: 'course-digital-marketing',
    slug: 'growth-digital-marketing',
    title: 'Growth Marketing & Performance Analytics',
    tagline: 'Learn SEO, Google Ads, Meta Ads, Funnel Optimization, and Marketing Automation for rapid brand growth.',
    category: 'Business',
    level: 'Beginner to Intermediate',
    duration: '10 Weeks',
    hours: '75+ Hours Live',
    mode: 'Live Online + Mentorship',
    rating: 4.75,
    reviewCount: 180,
    studentsCount: 750,
    featured: false,
    price: '₹18,999',
    originalPrice: '₹32,000',
    overview: 'Drive measurable business revenue. Master customer acquisition through search engine optimization, paid performance campaigns, conversion rate optimization, and automated email nurturing funnels.',
    curriculum: [
      {
        week: 'Weeks 1-3',
        topic: 'SEO & Content Marketing Strategies',
        skills: ['Technical SEO Audits', 'Keyword Research', 'On-page Optimization', 'High-Converting Copywriting'],
        project: 'Live Website SEO Audit & 6-Month Organic Traffic Strategy'
      },
      {
        week: 'Weeks 4-6',
        topic: 'Performance Marketing (Meta & Google Ads)',
        skills: ['Google Search & Performance Max', 'Meta Ads Manager & Pixels', 'Audience Retargeting', 'Budget Optimization'],
        project: 'Live Paid Campaign Simulation with ROAS Measurement'
      },
      {
        week: 'Weeks 7-8',
        topic: 'Conversion Rate Optimization & Analytics',
        skills: ['Google Analytics 4 (GA4)', 'Google Tag Manager', 'Heatmaps & User Journeys', 'A/B Testing'],
        project: 'High-Converting Landing Page & Tracking Pipeline'
      },
      {
        week: 'Weeks 9-10',
        topic: 'Email Automation & CRM Funnels',
        skills: ['HubSpot / Mailchimp', 'Drip Email Sequences', 'Retention Strategies', 'Affiliate Marketing'],
        project: 'Automated Lead Nurturing & Onboarding Sequence'
      }
    ],
    prerequisites: ['Basic creative writing and interest in marketing'],
    toolsCovered: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Ahrefs', 'HubSpot', 'WordPress', 'Canva'],
    careerRoles: ['Performance Marketer', 'SEO Specialist', 'Growth Marketing Associate', 'Digital Marketing Executive']
  },
  {
    id: 'course-product-management',
    slug: 'product-management-foundations',
    title: 'Product Management & Agile Delivery',
    tagline: 'Discover user needs, define product specs, lead cross-functional sprints, and launch customer-loved digital products.',
    category: 'Business',
    level: 'Intermediate to Advanced',
    duration: '8 Weeks',
    hours: '60+ Hours Live',
    mode: 'Live Online + Mentorship',
    rating: 4.88,
    reviewCount: 142,
    studentsCount: 510,
    featured: false,
    price: '₹22,999',
    originalPrice: '₹40,000',
    overview: 'Transition into the coveted role of Product Manager. Learn product discovery, user research, wireframing in Figma, writing PRDs, prioritization frameworks, and sprint execution.',
    curriculum: [
      {
        week: 'Weeks 1-2',
        topic: 'Product Thinking & User Research',
        skills: ['Problem Framing', 'User Interviews', 'Customer Journey Mapping', 'Competitive Moats'],
        project: 'Problem Discovery & User Research Synthesis Document'
      },
      {
        week: 'Weeks 3-4',
        topic: 'Wireframing & Product Requirements (PRD)',
        skills: ['Figma Low-Fi Prototyping', 'Writing Engineering PRDs', 'User Stories & Acceptance Criteria', 'Feature Prioritization'],
        project: 'Complete Product Requirement Document for a Mobile FinTech Feature'
      },
      {
        week: 'Weeks 5-6',
        topic: 'Product Analytics & Metrics',
        skills: ['North Star Metrics', 'AARRR Pirate Metrics', 'Cohort Retention', 'Mixpanel & Amplitude Basics'],
        project: 'Product Metrics Dashboard & Feature Launch Experimentation Spec'
      },
      {
        week: 'Weeks 7-8',
        topic: 'Agile Execution & PM Interview Cracking',
        skills: ['Sprint Planning in Jira', 'Product Sense Interviews', 'RCA & Estimation Questions', 'Executive Presentations'],
        project: 'Live Product Case Defense in front of Director of Product'
      }
    ],
    prerequisites: ['Prior work experience in tech, consulting, design, or engineering preferred'],
    toolsCovered: ['Figma', 'Jira', 'Notion', 'Mixpanel', 'Miro'],
    careerRoles: ['Associate Product Manager (APM)', 'Product Analyst', 'Technical Product Manager']
  }
];

export const successStoriesData: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Priya Sharma',
    previousRole: 'Fresh Engineering Graduate (Confused between MBA vs Tech)',
    currentRole: 'Associate Data Analyst',
    company: 'Deloitte India',
    salaryHike: '3.5 LPA ➔ 8.2 LPA (134% Boost)',
    program: 'Data Science, Machine Learning & Generative AI',
    year: '2024',
    story: 'After completing my B.Tech in Electronics, I had zero clarity on whether to prepare for GATE, CAT, or join an IT company. You Aspirant\'s 1-on-1 counseling was an eye-opener. My mentor identified that my analytical reasoning was strong and guided me to the Data Science bootcamp. Within 4 months of rigorous weekend classes and live SQL projects, I cracked Deloitte\'s campus-off drive with flying colors.',
    keyTakeaways: [
      'Gained deep confidence in Python and Business SQL',
      'Built a live customer churn prediction dashboard that impressed interviewers',
      'Received 1-on-1 mock interview coaching with real Deloitte consultants'
    ]
  },
  {
    id: 'story-2',
    name: 'Arun Kumar',
    previousRole: 'BPO Customer Support Associate (Non-Tech)',
    currentRole: 'Frontend Developer',
    company: 'Zoho Corporation',
    salaryHike: '2.4 LPA ➔ 6.8 LPA (183% Hike)',
    program: 'Full Stack Web Development Bootcamp',
    year: '2024',
    story: 'I was stuck in night shifts at a BPO for over two years with minimal salary growth. I was terrified that without a computer science degree I could never enter tech. The mentors at You Aspirant broke down programming into logical, bite-sized concepts. They reviewed my GitHub code every Saturday. Today, I build web apps for Zoho, and my work-life balance is unrecognizable.',
    keyTakeaways: [
      'Successfully transitioned from non-IT BPO to core product engineering',
      'Shipped 3 production Next.js apps with clean TypeScript',
      'Received personal recommendation and referral through You Aspirant partner network'
    ]
  },
  {
    id: 'story-3',
    name: 'Kavitha Ramachandran',
    previousRole: 'Career Gap of 3 Years (Maternity Leave)',
    currentRole: 'Quality Assurance & Cloud Associate',
    company: 'Cognizant',
    salaryHike: 'Restarted at 7.5 LPA',
    program: 'Cloud Computing & DevOps Practitioner',
    year: '2023',
    story: 'Returning to work after a 3-year parenting break felt like climbing a mountain. Most recruiters rejected my resume on automated filters. You Aspirant restructured my resume to highlight continuous learning, trained me on modern AWS and Docker, and helped me ace behavioral interviews addressing the career gap with absolute confidence.',
    keyTakeaways: [
      'Overcame 3-year employment gap with verified hands-on cloud credentials',
      'Mastered AWS, Docker, and modern CI/CD deployment pipelines',
      'Rebuilt professional self-worth and interview presence'
    ]
  },
  {
    id: 'story-4',
    name: 'Siddharth Nair',
    previousRole: 'Tier-3 College Computer Science Student',
    currentRole: 'Full Stack Software Engineer',
    company: 'Freshworks',
    salaryHike: 'Placed at 9.5 LPA Fresher Package',
    program: 'Full Stack Web Development & Career Accelerator',
    year: '2024',
    story: 'Our college barely had two service-based companies visit for placements offering 3 LPA. I knew I needed to stand out. Through You Aspirant, I mastered modern full-stack development with Next.js, Redis, and PostgreSQL. When Freshworks conducted their off-campus challenge, my GitHub portfolio was so strong that the technical interviewer skipped basic questions and discussed my real-time architecture instead.',
    keyTakeaways: [
      'Bypassed tier-3 college placement limitations',
      'Showcased real-world deployed microservices portfolio',
      'Cracked a high-paying product company fresher package'
    ]
  },
  {
    id: 'story-5',
    name: 'Rohit Verma',
    previousRole: 'Mechanical Engineer in Manufacturing Plant',
    currentRole: 'Business Intelligence Consultant',
    company: 'Accenture Strategy',
    salaryHike: '3.2 LPA ➔ 7.8 LPA',
    program: 'Data Science & Corporate Career Accelerator',
    year: '2023',
    story: 'Working 12-hour shifts in a manufacturing shop floor left me drained and underpaid. I wanted a career in business analytics. You Aspirant created a specialized weekend study plan so I did not have to quit my job while learning. In 14 weeks, I built end-to-end Power BI dashboards and supply-chain predictive models. That portfolio directly landed me an offer at Accenture.',
    keyTakeaways: [
      'Leveraged manufacturing domain experience into business analytics advantage',
      'Balanced full-time plant job with weekend learning cohorts',
      'Doubled monthly income with remote-friendly work conditions'
    ]
  },
  {
    id: 'story-6',
    name: 'Ananya Deshmukh',
    previousRole: 'Undergraduate B.Com Student',
    currentRole: 'Performance Marketing Specialist',
    company: 'Swiggy',
    salaryHike: 'Placed at 6.2 LPA',
    program: 'Growth Marketing & Performance Analytics',
    year: '2024',
    story: 'Traditional commerce degrees don\'t teach how modern digital brands scale. You Aspirant\'s growth marketing cohort let me run real ad campaigns, analyze Google Analytics 4 funnels, and write high-converting copy. When Swiggy interviewed me, I presented a live case study of how I reduced customer acquisition costs on my capstone project. They hired me immediately.',
    keyTakeaways: [
      'Gained hands-on experience managing real Meta & Google ad budgets',
      'Learned data-driven attribution modeling and GA4 reporting',
      'Landed a growth role at a Tier-1 consumer internet brand'
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Deepak Rajan',
    category: 'Student',
    role: 'Software Engineer @ Thoughtworks',
    affiliation: 'Full Stack Alumnus',
    avatarText: 'DR',
    avatarUrl: '/testimonials/deepak-rajan.jpg',
    quote: 'The mentorship at You Aspirant is night and day compared to generic YouTube tutorials or pre-recorded courses. Having senior engineers review your pull requests and critique your system design gave me the edge to crack Thoughtworks.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Dr. R. Natarajan',
    category: 'Parent',
    role: 'Professor & Parent of 12th Student',
    affiliation: 'Career Counselling Advisory',
    avatarText: 'RN',
    avatarUrl: '/testimonials/r-natarajan.jpg',
    quote: 'My daughter was under immense peer pressure to prepare for NEET even though her heart was in design and technology. The counseling team at You Aspirant patiently sat with us, explained career viability with data, and gave our family complete clarity. Best decision we made.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Sneha Banerjee',
    category: 'Career Switcher',
    role: 'Data Analyst @ Capgemini',
    affiliation: 'Non-Tech to Analytics Track',
    avatarText: 'SB',
    avatarUrl: '/testimonials/sneha-banerjee.jpg',
    quote: 'Coming from a non-engineering background, mathematics and coding felt daunting. The instructors never made me feel slow. They answered every silly doubt and guided me until my SQL queries and Python code were spotless.',
    rating: 5
  },
  {
    id: 't-4',
    name: 'Prof. K. Venkatesh',
    category: 'College Partner',
    role: 'Head of Placements',
    affiliation: 'Sri Krishna Institute of Technology',
    avatarText: 'KV',
    avatarUrl: '/testimonials/k-venkatesh.jpg',
    quote: 'You Aspirant conducted a 6-week intensive campus accelerator for our 2024 batch. Our placement percentage increased from 68% to 92%, with multiple students securing dream offers above 8 LPA. They are our trusted training partner.',
    rating: 5
  },
  {
    id: 't-5',
    name: 'Mohammad Farooq',
    category: 'Student',
    role: 'Cloud Support Engineer @ Infosys',
    affiliation: 'Cloud & DevOps Batch',
    avatarText: 'MF',
    avatarUrl: '/testimonials/mohammad-farooq.jpg',
    quote: 'The live labs on real AWS environments are the best part. When interviewers asked scenario-based questions about VPC peering and Kubernetes pod failures, I could answer from direct muscle memory because we broke and fixed clusters in class.',
    rating: 5
  },
  {
    id: 't-6',
    name: 'Lakshmi Narayanan',
    category: 'Parent',
    role: 'Chartered Accountant & Parent',
    affiliation: 'Higher Education Advisory',
    avatarText: 'LN',
    avatarUrl: '/testimonials/lakshmi-narayanan.jpg',
    quote: 'Selecting colleges can be an expensive minefield of advertisements and empty promises. You Aspirant\'s impartial analysis of placements, faculty credentials, and genuine student feedback saved us lakhs of rupees and years of regret.',
    rating: 5
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'how-to-choose-career-after-12th',
    title: 'How to Choose the Right Career After 12th: A Practical 5-Step Framework',
    summary: 'Ditch the peer pressure. Learn how to align your natural cognitive strengths, market demand, and long-term earning potential before choosing your degree.',
    category: 'Career Guidance',
    readTime: '6 min read',
    publishedDate: 'October 15, 2024',
    author: {
      name: 'Dr. Anita Menon',
      role: 'Chief Career Strategist'
    },
    content: [
      'Every year, over 1.5 crore students complete their higher secondary examinations across India. Shockingly, studies indicate that nearly 80% choose their college degrees based primarily on parental expectations or what their close circle of friends is doing.',
      'To build a fulfilling and high-earning career in 2025 and beyond, you must evaluate three intersecting circles: What are you naturally capable of? What does the global market pay premium compensation for? And what work style sustains your long-term energy?',
      'Step 1: Conduct an objective psychometric evaluation rather than guessing your strengths. Often, students confuse interest with aptitude.',
      'Step 2: Research industry trends 4 years into the future. By the time a student graduates in 2029, AI literacy, full stack capabilities, and domain data analytics will be baseline requirements across every field.',
      'Step 3: Analyze university ROI. Do not select private institutions simply based on glossy brochures. Inspect verified placement statistics, median packages, and alumni trajectory on LinkedIn.'
    ]
  },
  {
    id: 'post-2',
    slug: 'beating-ats-resume-algorithms-2025',
    title: 'Beating the ATS in 2025: How to Format Your Resume for Top Tech Companies',
    summary: 'Applicant Tracking Systems reject over 70% of resumes before a human recruiter sees them. Here are the exact formatting rules and bullet formulas you must follow.',
    category: 'Resume & Interviews',
    readTime: '8 min read',
    publishedDate: 'October 20, 2024',
    author: {
      name: 'Karthik Sundar',
      role: 'Head of Talent Acquisition'
    },
    content: [
      'If you have submitted dozens of job applications online without hearing back, the issue is almost certainly not your qualifications; it is your resume formatting.',
      'Modern ATS platforms like Greenhouse, Lever, and Workday scan resumes for contextual keyword density, clean chronological headers, and measurable achievements.',
      'Rule 1: Never use two-column visual resumes with icons, skill progress bars, or graphic tables. ATS parsing engines read left-to-right across columns, causing jumbled nonsense text.',
      'Rule 2: Adopt the Google XYZ formula for every single bullet: Accomplished [X] as measured by [Y] by doing [Z]. For example: "Reduced API response times by 38% across 10,000 daily active users by implementing Redis caching and database indexing."',
      'Rule 3: Ensure exact keyword alignment between your target job description and your skills summary. If the job requests "TypeScript and PostgreSQL", do not simply write "JavaScript and Relational DBs".'
    ]
  },
  {
    id: 'post-3',
    slug: 'non-tech-to-data-science-guide',
    title: 'The Non-Tech Guide to Breaking Into Data Analytics and AI',
    summary: 'You do not need a computer science degree to land a high-paying analytics role. Here is the step-by-step transition roadmap for non-engineers.',
    category: 'Upskilling',
    readTime: '7 min read',
    publishedDate: 'October 24, 2024',
    author: {
      name: 'Rohan Mehra',
      role: 'Lead Data Scientist & Mentor'
    },
    content: [
      'The biggest myth holding candidates back is that Data Analytics requires advanced calculus and a CS degree from an IIT. In truth, modern business analytics is 70% business understanding, 20% SQL and Python manipulation, and 10% effective visualization.',
      'If you can understand business problems—such as why customers cancel subscriptions or which marketing channel yields the highest conversion—you already have the most crucial foundation.',
      'Start with advanced SQL. SQL is the universal language of enterprise databases. Knowing how to write Window functions, Common Table Expressions (CTEs), and complex joins will get you through 80% of data analyst interview tests.',
      'Next, master Power BI or Tableau. Build 3 interactive dashboards using public datasets (e.g., healthcare, e-commerce, sports) and write detailed case studies on LinkedIn demonstrating what business decisions your dashboard enables.'
    ]
  }
];

export const teamMembersData: TeamMember[] = [
  {
    name: 'Suresh Krishnan',
    role: 'Founder & CEO',
    bio: 'Former VP of Talent Strategy with 18+ years across Fortune 500 tech firms. Dedicated to democratizing elite career guidance for aspiring youth across India.',
    credentials: 'IIM Ahmedabad Alumnus',
    experience: '18+ Years Experience'
  },
  {
    name: 'Dr. Anita Menon',
    role: 'Chief Career Psychologist',
    bio: 'Pioneered evidence-based career profiling diagnostic assessments used by over 25,000 students across South India.',
    credentials: 'Ph.D. in Organizational Psychology',
    experience: '14+ Years Experience'
  },
  {
    name: 'Karthik Sundar',
    role: 'Head of Industry Partnerships & Placements',
    bio: 'Ex-Hiring Director at tier-1 MNCs. Built placement partnerships with over 120+ tech, finance, and consumer brands.',
    credentials: 'Ex-TCS & Cognizant Talent Head',
    experience: '15+ Years Experience'
  },
  {
    name: 'Rohan Mehra',
    role: 'Director of Tech Curriculum',
    bio: 'Senior Principal Engineer and open source contributor. Passionate about practical, project-based engineering education without textbook fluff.',
    credentials: 'Ex-Amazon Senior Engineer',
    experience: '12+ Years Experience'
  }
];

export const faqsData = [
  {
    question: 'How is You Aspirant different from standard training institutes?',
    answer: 'Unlike generic coaching centers that rely on theoretical lectures and pre-recorded videos, You Aspirant provides personalized 1-on-1 career mentoring, practical production-grade project development, and rigorous mock interviews with active hiring managers. We focus on verified job placement outcomes, not just certificates.'
  },
  {
    question: 'I am from a non-engineering/non-tech background. Can I join the tech bootcamps?',
    answer: 'Absolutely. Over 40% of our successful alumni transitioned from commerce, arts, science, and non-IT backgrounds. Our programs start from fundamental principles and build up progressively with personalized weekend mentor support.'
  },
  {
    question: 'What is included in the Free 1-on-1 Career Counselling Session?',
    answer: 'The initial 30-minute session includes a discussion of your educational background, current hurdles, career aspiration goals, and an objective assessment of what skills and paths will offer you the highest return on investment in today\'s market. There is zero obligation to enroll in any paid program.'
  },
  {
    question: 'Do you offer placement assistance or guarantees?',
    answer: 'We provide dedicated placement support including ATS resume reviews, LinkedIn profile branding, unlimited mock interviews, and direct profile sharing with our network of 120+ verified hiring partners. We conduct recruitment drives until you secure a suitable offer.'
  },
  {
    question: 'Are classes live or recorded?',
    answer: 'All our core training sessions are conducted live online with interactive Q&A and coding exercises. Every session is recorded and made available immediately in your student dashboard for lifelong revision.'
  }
];
