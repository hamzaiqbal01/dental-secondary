export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: "teal" | "gold" | "blue";
  readTime: string;
  publishedAt: string;
  coverEmoji: string;
  coverImage: string;
  author: string;
  keywords: string[];
  content: BlogSection[];
};

export type BlogSection = {
  id: string;
  title: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "when-do-dental-schools-send-secondaries",
    title: "When Do Dental Schools Send Secondary Applications? (2026 Timeline)",
    excerpt:
      "Most dental schools send secondaries between July and September after AADSAS verification. Here's the exact timeline, what to expect by month, and how to submit within 2 weeks.",
    category: "Application Strategy",
    categoryColor: "gold",
    readTime: "7 min read",
    publishedAt: "2026-03-28",
    coverEmoji: "📅",
    coverImage: "/blog/when-dental-schools-send-secondaries.png",
    author: "Dental School Secondary Team",
    keywords: [
      "when do dental schools send secondaries",
      "dental school secondary timeline",
      "when do secondaries come out dental school",
      "dental school secondary application timeline 2026",
      "how long after AADSAS do secondaries arrive",
    ],
    content: [
      {
        id: "quick-answer",
        title: "Quick Answer",
        body: `<p>Most U.S. dental schools send secondary applications <strong>between July and early September</strong>, usually within days or weeks after your AADSAS primary is verified. A few schools send secondaries only to selected applicants, and some (like Tufts and Harvard) wait until interview invitation.</p><p>Because dental schools use <strong>rolling admissions</strong>, submitting your secondary within <strong>14 days</strong> of receiving it is one of the strongest signals you can send.</p>`,
      },
      {
        id: "may-june",
        title: "May–June: Submit AADSAS Early",
        body: `<p>AADSAS typically opens in late May. The earliest applicants submit in the first 1–2 weeks of June. Earlier submission means earlier verification — and earlier secondaries.</p><ul><li><strong>Early:</strong> Submit in June</li><li><strong>On time:</strong> Submit by mid-July</li><li><strong>Late:</strong> August or later (fewer interview seats left)</li></ul><p>While you wait for verification, <strong>pre-write your essays</strong> using our <a href="/database">Secondary Database</a> so you can submit the moment secondaries arrive.</p>`,
      },
      {
        id: "july-september",
        title: "July–September: Peak Secondary Season",
        body: `<p>This is when most applicants receive a flood of secondaries — often 10–20 schools within a few weeks. Expect overlapping deadlines and heavy writing volume.</p><p><strong>How secondaries are distributed:</strong></p><ul><li><strong>AADSAS supplemental questions</strong> — appear inside your primary (UCLA, NYU, USC, UNC, etc.)</li><li><strong>Emailed to all qualifying applicants</strong> — UAB, ATSU, Midwestern, Meharry</li><li><strong>Emailed selectively</strong> — some schools only invite competitive applicants</li><li><strong>Interview-day only</strong> — Tufts and Harvard send prompts at interview</li></ul>`,
      },
      {
        id: "how-fast",
        title: "How Fast Should You Submit?",
        body: `<p>Aim for <strong>within 2 weeks</strong> of receiving each secondary. Rolling review means schools fill interview slots as complete applications arrive. A polished secondary submitted in 10 days beats a perfect one submitted in 6 weeks.</p><div><p><strong>Pro tip:</strong> Create a spreadsheet with school name, date received, deadline, word limits, and status. Treat secondary season like a full-time job for 4–6 weeks.</p></div>`,
      },
      {
        id: "what-to-do-now",
        title: "What To Do Right Now",
        body: `<ol><li>Browse every school on your list in the <a href="/database">Secondary Database</a></li><li>Draft answers for the most common prompts: Why our school?, Diversity, Challenge, Anything else</li><li>Research 2–3 specific programs at each school for your "Why us?" essays</li><li>Set a personal rule: submit within 14 days — no exceptions</li></ol><p>For school-specific guides, start with <a href="/blog/nyu-dental-secondary-questions">NYU</a>, <a href="/blog/ucla-dental-secondary-essays">UCLA</a>, and <a href="/blog/usc-dental-secondary-questions">USC</a>.</p>`,
      },
    ],
  },

  {
    slug: "nyu-dental-secondary-questions",
    title: "NYU Dental Secondary Questions (2026) — Prompts, Tips & How to Answer",
    excerpt:
      "NYU College of Dentistry's secondary focuses on one big question: Why NYU? Here's the full prompt list, character limits, and a proven framework for a standout answer.",
    category: "School Guides",
    categoryColor: "teal",
    readTime: "8 min read",
    publishedAt: "2026-03-27",
    coverEmoji: "🗽",
    coverImage: "/blog/nyu-dental-secondary-questions.png",
    author: "Dental School Secondary Team",
    keywords: [
      "NYU dental secondary questions",
      "NYU dental school secondary essays",
      "NYU College of Dentistry secondary",
      "why NYU dentistry essay",
      "NYU dental secondary prompts 2026",
    ],
    content: [
      {
        id: "overview",
        title: "NYU Secondary Overview",
        body: `<p><strong>New York University College of Dentistry</strong> submits supplemental questions through AADSAS to qualifying applicants. NYU is one of the largest dental schools in the U.S. — high patient volume, diverse clinical cases, and a major NYC learning environment.</p><p>View the full entry in our database: <a href="/database/nyu-college-of-dentistry">NYU Secondary Questions</a>.</p>`,
      },
      {
        id: "prompts",
        title: "All NYU Secondary Prompts",
        body: `<ul><li><strong>Required:</strong> Why do you want to pursue your dental education at New York University College of Dentistry? <em>(5,000 characters)</em></li><li><strong>Conditional (reapplicants who didn't apply to NYU before):</strong> Please explain why you are submitting an application to NYU Dentistry this cycle when you did not previously apply here. <em>(500 characters)</em></li></ul><p>That's it — NYU's secondary is short, but the main essay is long enough that generic answers get exposed immediately.</p>`,
      },
      {
        id: "how-to-answer",
        title: "How to Answer 'Why NYU Dentistry?'",
        body: `<p>Use this structure:</p><ol><li><strong>Open with a specific fit</strong> — connect YOUR goal to ONE NYU strength (clinical volume, NYC patient diversity, research, specialty pathways)</li><li><strong>Name 2–3 concrete NYU resources</strong> — clinics, community programs, faculty, dual degrees, or urban patient mix</li><li><strong>Show you'd thrive there</strong> — not flattery; evidence that this environment matches how you learn and serve</li><li><strong>Close with intent</strong> — what kind of dentist NYU helps you become</li></ol><p>Avoid ranking talk ("top school," "prestigious"). Admissions sees that every day. Specificity wins.</p>`,
      },
      {
        id: "what-nyu-wants",
        title: "What NYU Looks For",
        body: `<ul><li><strong>Clinical readiness:</strong> Comfort with high volume and complex cases</li><li><strong>Urban service mindset:</strong> Interest in diverse, underserved, multilingual patient populations</li><li><strong>Genuine NYC fit:</strong> Not just "I love the city" — connect location to your training goals</li><li><strong>Clarity:</strong> With 5,000 characters available, still write tight. Use ~80–100% of the limit with real substance</li></ul>`,
      },
      {
        id: "checklist",
        title: "Pre-Submit Checklist",
        body: `<ul><li>Does every paragraph reference something unique to NYU?</li><li>Could this essay work for Columbia or Stony Brook with a name swap? If yes, rewrite</li><li>Did you mention clinical diversity with a personal reason (not a brochure line)?</li><li>Have you proofread for character limit and typos?</li></ul><p>Next: browse <a href="/database">all 66 school secondaries</a> or read our <a href="/blog/how-to-write-dental-school-secondary-essays">secondary writing guide</a>.</p>`,
      },
    ],
  },

  {
    slug: "ucla-dental-secondary-essays",
    title: "UCLA Dental Secondary Essays (2026) — Questions, Limits & Answer Strategy",
    excerpt:
      "UCLA's secondary is short, strict, and character-limited. Here's every prompt, the exact limits, and how to write failure, stress, and help-seeking answers that stand out.",
    category: "School Guides",
    categoryColor: "teal",
    readTime: "9 min read",
    publishedAt: "2026-03-26",
    coverEmoji: "🐻",
    coverImage: "/blog/ucla-dental-secondary-essays.png",
    author: "Dental School Secondary Team",
    keywords: [
      "UCLA dental secondary essays",
      "UCLA dental school secondary questions",
      "UCLA School of Dentistry secondary",
      "UCLA secondary prompts dental",
      "how to answer UCLA dental secondary",
    ],
    content: [
      {
        id: "overview",
        title: "UCLA Secondary Overview",
        body: `<p>UCLA School of Dentistry places supplemental questions in AADSAS. The defining feature: <strong>extremely tight character limits</strong> (100–350 characters on most prompts). There is no room for storytelling fluff — every sentence must earn its place.</p><p>Full database page: <a href="/database/ucla-school-of-dentistry">UCLA Secondary Questions</a>.</p>`,
      },
      {
        id: "prompts",
        title: "All UCLA Secondary Prompts",
        body: `<p><strong>Required for all applicants:</strong></p><ul><li>How do you deal with failure? <em>(350 characters)</em></li><li>How would you assess your ability to ask for help, and give one example of when you had to do so? <em>(350 characters)</em></li><li>Please LIST 3 ways you deal with stress. <em>(100 characters)</em></li><li>Are you making, or have you already made, a career change prior to applying to dental school? Please explain. <em>(350 characters)</em></li></ul><p><strong>Conditional:</strong></p><ul><li>If not currently enrolled: What have you been doing since graduation? <em>(600 characters)</em></li><li>DDS-PhD applicants: Future plans for your DDS-PhD career <em>(600 characters)</em></li></ul>`,
      },
      {
        id: "failure",
        title: "How to Answer the Failure Prompt",
        body: `<p>Pick <strong>one specific failure</strong>, state what you did wrong, what you changed, and what you do differently now. Avoid vague "I learned resilience" endings.</p><p><strong>Formula (fits ~350 characters):</strong> Situation → Your mistake → Concrete fix → Lasting habit.</p><p>Example direction: A failed exam or lab technique → sought tutoring / revised study method → measurable improvement. Keep it professional, not dramatic.</p>`,
      },
      {
        id: "stress-help",
        title: "Stress List + Asking for Help",
        body: `<p><strong>Stress (100 characters):</strong> Literally list 3 distinct methods. Example format: "morning runs, planned study blocks, weekly check-ins with mentors." No paragraphs.</p><p><strong>Asking for help:</strong> Name the situation, who you asked, why it was hard, and the outcome. UCLA wants evidence of self-awareness and teamwork — critical in clinic.</p>`,
      },
      {
        id: "strategy",
        title: "Winning Strategy for UCLA",
        body: `<ul><li>Draft long, then cut ruthlessly to the limit</li><li>Read aloud — if it sounds clunky at 350 chars, rewrite</li><li>Be specific; generic wellness answers get ignored</li><li>Submit early — UCLA is highly competitive and rolling</li></ul><p>Also prep: <a href="/blog/usc-dental-secondary-questions">USC Secondary Guide</a> and <a href="/blog/when-do-dental-schools-send-secondaries">Secondary Timeline</a>.</p>`,
      },
    ],
  },

  {
    slug: "usc-dental-secondary-questions",
    title: "USC Dental Secondary Questions (2026) — Ostrow Prompts & Tips",
    excerpt:
      "USC Herman Ostrow School of Dentistry's secondary covers reapplication history, community college coursework, and professional achievements. Here's how to answer each prompt well.",
    category: "School Guides",
    categoryColor: "teal",
    readTime: "7 min read",
    publishedAt: "2026-03-25",
    coverEmoji: "🌴",
    coverImage: "/blog/usc-dental-secondary-questions.png",
    author: "Dental School Secondary Team",
    keywords: [
      "USC dental secondary questions",
      "USC Ostrow secondary essays",
      "Herman Ostrow School of Dentistry secondary",
      "USC dental school supplemental questions",
      "USC dental secondary prompts 2026",
    ],
    content: [
      {
        id: "overview",
        title: "USC Ostrow Secondary Overview",
        body: `<p>USC's Herman Ostrow School of Dentistry collects supplemental questions through AADSAS. Unlike NYU's long "Why us?" essay, USC focuses on <strong>application history, academic path, and professional achievements</strong>.</p><p>Database entry: <a href="/database/usc-ostrow-school-of-dentistry">USC Secondary Questions</a>.</p>`,
      },
      {
        id: "prompts",
        title: "All USC Secondary Prompts",
        body: `<ul><li>Have you previously applied to the Herman Ostrow School of Dentistry of USC? If so, did you participate in an interview? <em>(2,000 characters)</em></li><li>Have you taken any classes at a community college? If so, list each institution's name and the number of units you have completed. <em>(2,000 characters)</em></li><li>Please list your professional achievements and include when and how long. <em>(2,000 characters)</em></li></ul>`,
      },
      {
        id: "reapplicant",
        title: "If You Previously Applied",
        body: `<p>Be direct. State the cycle, whether you interviewed, and — most importantly — <strong>what changed</strong>: DAT/GPA improvement, new clinical hours, research, leadership, or clearer career focus.</p><p>Admissions committees respect growth. Hiding a prior application is worse than owning it with evidence of progress.</p>`,
      },
      {
        id: "achievements",
        title: "Listing Professional Achievements",
        body: `<p>Treat this like a high-signal resume in paragraph or bullet form:</p><ul><li>Use <strong>action verbs</strong> + dates + duration</li><li>Include research, employment, clinical assisting, leadership, publications, awards</li><li>Quantify impact when possible (hours, patients, team size, outcomes)</li><li>Don't repeat your entire AADSAS — highlight the strongest, most relevant wins</li></ul>`,
      },
      {
        id: "tips",
        title: "USC-Specific Tips",
        body: `<ul><li>Community college coursework: list institutions and units clearly — no need to over-explain unless there's a story of access or transfer success</li><li>Stay factual and organized; USC's prompts reward clarity over creativity</li><li>Submit within 2 weeks of receiving the secondary</li></ul><p>Related guides: <a href="/blog/ucla-dental-secondary-essays">UCLA Secondary</a> · <a href="/blog/nyu-dental-secondary-questions">NYU Secondary</a> · <a href="/database">Full Database</a></p>`,
      },
    ],
  },

  {
    slug: "dental-school-secondary-application-cost",
    title: "How Much Do Dental School Secondaries Cost? Full Fee Breakdown (2026)",
    excerpt:
      "Between AADSAS fees and school secondary fees ($50–$150 each), applying to 15 schools can cost $2,800–$3,500+. Here's the real budget breakdown and how to plan.",
    category: "Application Strategy",
    categoryColor: "gold",
    readTime: "6 min read",
    publishedAt: "2026-03-24",
    coverEmoji: "💵",
    coverImage: "/blog/dental-school-secondary-costs.png",
    author: "Dental School Secondary Team",
    keywords: [
      "dental school secondary cost",
      "dental school secondary application fees",
      "how much do dental school secondaries cost",
      "AADSAS secondary fee",
      "dental school application cost 2026",
    ],
    content: [
      {
        id: "total-cost",
        title: "Total Cost at a Glance",
        body: `<p>For a typical applicant applying to <strong>12–15 schools</strong>, expect roughly:</p><ul><li><strong>AADSAS base fee:</strong> ~$264 for the first school</li><li><strong>Additional AADSAS schools:</strong> ~$115 each</li><li><strong>Secondary fees:</strong> ~$50–$150 per school</li><li><strong>CASPer / situational judgment (if required):</strong> ~$100–$150</li></ul><p><strong>Realistic total for 15 schools: $2,800–$3,500+</strong> before interview travel.</p>`,
      },
      {
        id: "secondary-fees",
        title: "What Secondary Fees Cover",
        body: `<p>Secondary (supplemental) fees are charged by individual schools after or alongside AADSAS. They help cover application processing. Fees vary widely — some schools are on the low end (~$50–$75), others closer to $100–$150.</p><p>Always confirm the current fee on the school's admissions page before submitting. Fees change by cycle.</p>`,
      },
      {
        id: "budget-smart",
        title: "How to Budget Smart",
        body: `<ul><li><strong>Apply with mission fit</strong> — every mismatched school wastes $150–$250 total</li><li><strong>Prioritize in-state publics</strong> when ROI and acceptance odds are stronger</li><li><strong>Check Fee Assistance Programs</strong> — ADEA FAP can reduce AADSAS costs for eligible applicants</li><li><strong>Don't under-apply out of fear</strong> — 10–15 well-chosen schools usually beats 5 random ones</li></ul>`,
      },
      {
        id: "hidden-costs",
        title: "Hidden Costs Applicants Forget",
        body: `<ul><li>Official transcript fees</li><li>DAT registration / retake fees</li><li>Interview travel, hotels, professional attire</li><li>Letter of evaluation services</li><li>Application consulting (optional)</li></ul><p>Build a 10–15% buffer into your application budget so a late secondary fee doesn't delay submission.</p>`,
      },
      {
        id: "next-steps",
        title: "Next Steps",
        body: `<p>Use our free <a href="/database">Secondary Database</a> to see which schools require essays (and which don't) before you spend. Then read <a href="/blog/when-do-dental-schools-send-secondaries">when secondaries arrive</a> so you can time your budget and writing calendar together.</p>`,
      },
    ],
  },

  {
    slug: "how-to-write-dental-school-secondary-essays",
    title: "How to Write Dental School Secondary Essays That Get Interviews",
    excerpt:
      "Pre-write early, tailor every 'Why us?' answer, respect word limits, and submit within 2 weeks. A practical framework used by competitive dental school applicants.",
    category: "Essay Writing",
    categoryColor: "blue",
    readTime: "8 min read",
    publishedAt: "2026-03-22",
    coverEmoji: "✍️",
    coverImage: "/blog/how-to-write-dental-secondary-essays.png",
    author: "Dental School Secondary Team",
    keywords: [
      "how to write dental school secondary essays",
      "dental school secondary writing tips",
      "dental school secondary essay examples",
      "pre-write dental school secondaries",
      "secondary application essays dental school",
    ],
    content: [
      {
        id: "prewrite",
        title: "1. Pre-Write Before Secondaries Arrive",
        body: `<p>The applicants who finish on time started in May–June. Use past prompts from our <a href="/database">database</a> to draft:</p><ul><li>Why dentistry (if asked again)</li><li>Why this school (template + school-specific inserts)</li><li>Diversity / background</li><li>Challenge or failure</li><li>Anything else we should know</li></ul><p>When secondaries hit in July, you customize — you don't invent from scratch.</p>`,
      },
      {
        id: "tailor",
        title: "2. Tailor Every School-Specific Essay",
        body: `<p>If your "Why us?" essay works after swapping the school name, it will get rejected. Name real clinics, missions, curricula, or community programs. Spend 20 minutes on the school's site before writing.</p><p>School deep-dives: <a href="/blog/nyu-dental-secondary-questions">NYU</a>, <a href="/blog/ucla-dental-secondary-essays">UCLA</a>, <a href="/blog/usc-dental-secondary-questions">USC</a>.</p>`,
      },
      {
        id: "structure",
        title: "3. Use a Clear Structure",
        body: `<p><strong>Hook → Evidence → School fit.</strong></p><ul><li>Open with a specific moment or claim</li><li>Support with concrete experiences</li><li>Connect to that school's resources</li></ul><p>Don't recycle your personal statement. Secondaries should reveal new dimensions.</p>`,
      },
      {
        id: "limits",
        title: "4. Hit 90–100% of the Word/Character Limit",
        body: `<p>Too short looks like low effort. Over the limit looks careless. Especially on tight prompts like UCLA (100–350 characters), draft long and cut hard.</p>`,
      },
      {
        id: "submit",
        title: "5. Submit Within 14 Days",
        body: `<p>Rolling admissions rewards complete applications early. Quality matters — but delay kills interview odds. Track every secondary and protect your 2-week rule.</p><p>Also read: <a href="/blog/when-do-dental-schools-send-secondaries">When Do Dental Schools Send Secondaries?</a> and <a href="/blog/dental-school-secondary-application-cost">Secondary Cost Breakdown</a>.</p>`,
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
