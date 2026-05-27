"use client";
import { useState, useEffect } from "react";

const translations = {
  en: {
    available: "Available for full-time roles.",
    heroTitle1: "Full Stack",
    heroTitle2: "Engineer &",
    heroTitle3: "AI Builder.",
    heroSubtitle:
      "6+ years building production SaaS, AI platforms, and ML tools. Open to senior full stack and AI engineering roles.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
    yearsExp: "Years experience",
    liveProducts: "Live AI products",
    workPermit: "Work Permit ✓",
    selectedWork: "Selected Work",
    projects: "Projects",
    whatIWorkWith: "What I work with",
    skills: "Skills",
    whereWorked: "Where I've worked",
    experience: "Experience",
    education: "Education",
    writing: "Writing",
    blog: "Blog",
    letsWork: "Let's work together",
    contact: "Contact",
    contactDesc:
      "I'm actively looking for full-time opportunities. EU work permit holder — no sponsorship required. Open to senior full stack, AI engineering, or lead roles.",
    name: "Name",
    email: "Email",
    message: "Message",
    messagePlaceholder: "Tell me about the role...",
    send: "Send message →",
    sending: "Sending...",
    sent: "Message sent!",
    liveDemo: "Live Demo",
    downloadCV: "Download CV",
    comingSoon: "Coming soon",
    live: "Live",
    nav: ["Projects", "Skills", "Experience", "Blog", "Contact"],
    navHrefs: ["projects", "skills", "experience", "blog", "contact"],
    profile:
      "Full Stack Engineer with 6+ years of experience delivering scalable SaaS, Fintech, and AI-powered platforms. Production expertise in TypeScript, React, Node.js, and Python. Independently shipped four live AI products — a WhatsApp CRM with real-time messaging and end-to-end encryption, an AI code review platform, a RAG-based agent builder, and an ML portfolio analytics tool. EU work permit holder, immediately available.",
  },
  de: {
    available: "Verfügbar für Vollzeitstellen.",
    heroTitle1: "Full Stack",
    heroTitle2: "Entwickler &",
    heroTitle3: "KI-Entwickler.",
    heroSubtitle:
      "6+ Jahre Erfahrung in der Entwicklung von SaaS-, KI- und ML-Plattformen. Offen für Senior Full Stack- und KI-Engineering-Rollen.",
    viewWork: "Meine Arbeit ansehen",
    getInTouch: "Kontakt aufnehmen",
    yearsExp: "Jahre Erfahrung",
    liveProducts: "Live KI-Produkte",
    workPermit: "EU-Arbeitserlaubnis ✓",
    selectedWork: "Ausgewählte Arbeiten",
    projects: "Projekte",
    whatIWorkWith: "Womit ich arbeite",
    skills: "Kenntnisse",
    whereWorked: "Wo ich gearbeitet habe",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    writing: "Schreiben",
    blog: "Blog",
    letsWork: "Lass uns zusammenarbeiten",
    contact: "Kontakt",
    contactDesc:
      "Ich suche aktiv nach Vollzeitstellen. EU-Arbeitserlaubnis vorhanden — kein Sponsoring erforderlich. Offen für Senior Full Stack, KI-Engineering oder Lead-Rollen.",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    messagePlaceholder: "Erzähl mir von der Stelle...",
    send: "Nachricht senden →",
    sending: "Wird gesendet...",
    sent: "Nachricht gesendet!",
    liveDemo: "Live Demo",
    downloadCV: "Lebenslauf herunterladen",
    comingSoon: "Demnächst",
    live: "Live",
    nav: ["Projekte", "Kenntnisse", "Erfahrung", "Blog", "Kontakt"],
    navHrefs: ["projects", "skills", "experience", "blog", "contact"],
    profile:
      "Full-Stack-Entwickler mit 6+ Jahren Erfahrung in skalierbaren SaaS-, Fintech- und KI-Plattformen. Produktive Expertise in TypeScript, React, Node.js und Python. Vier Live-KI-Produkte eigenständig entwickelt — ein WhatsApp-CRM mit Echtzeit-Messaging und Ende-zu-Ende-Verschlüsselung, eine KI-Code-Review-Plattform, einen RAG-basierten Agent-Builder und ein ML-Portfolio-Analysetool. EU-Arbeitserlaubnis vorhanden, sofort verfügbar.",
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState<"en" | "de">("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  };

  const projects = [
    {
      number: "01",
      title: "LeadLoop",
      desc: {
        en: "Production-grade multi-tenant WhatsApp & Email CRM. Features real-time messaging via WebSockets, AI-powered reply suggestions (Groq Llama 3.3 70B), AES-256-GCM end-to-end encryption for messages and contacts, sales pipeline with AI auto-detection, multi-agent team inbox with conversation assignment, push notifications via Web Push API (VAPID), broadcast messaging, Stripe billing with plan gating, and PWA support. Built for small businesses to manage customer conversations at scale.",
        de: "Produktionsreifes Multi-Tenant WhatsApp- und E-Mail-CRM. Echtzeit-Messaging via WebSockets, KI-gestützte Antwortvorschläge (Groq Llama 3.3 70B), AES-256-GCM-Verschlüsselung, Multi-Agent-Posteingang, Push-Benachrichtigungen via Web Push API, Broadcast-Messaging, Stripe-Billing und PWA-Support.",
      },
      tags: [
        "Next.js 15",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "WebSockets",
        "Groq AI",
        "AES-256-GCM",
        "Web Push API",
        "WhatsApp Business API",
        "Stripe",
        "Railway",
        "PWA",
      ],
      live: "https://getleadloop.app",
      github: "https://github.com/iamgaurav07/leadloop",
    },
    {
      number: "02",
      title: "CodeLens",
      desc: {
        en: "Production-grade multi-tenant AI code review SaaS. Connects to GitHub via a GitHub App, reviews every PR within 30 seconds using GPT-4o, posts structured feedback with severity scores, and streams results to a real-time dashboard via SSE.",
        de: "Produktionsreifes Multi-Tenant KI-Code-Review-SaaS. Verbindet sich mit GitHub via GitHub App, bewertet jeden PR innerhalb von 30 Sekunden mit GPT-4o und streamt Ergebnisse in ein Echtzeit-Dashboard via SSE.",
      },
      tags: [
        "Next.js 15",
        "TypeScript",
        "OpenAI GPT-4o",
        "GitHub Apps API",
        "PostgreSQL",
        "Drizzle ORM",
        "SSE",
        "Railway",
      ],
      live: "https://codelens-production-e6c5.up.railway.app",
      github: "https://github.com/iamgaurav07/codelens",
    },
    {
      number: "03",
      title: "AgentFlow",
      desc: {
        en: "Full-stack AI agent SaaS platform. Users create custom agents with system prompts, tools, and private knowledge bases. RAG pipeline using pgvector for semantic search over uploaded documents. Agents stream responses token-by-token via SSE.",
        de: "Full-Stack KI-Agent-SaaS-Plattform. Nutzer erstellen Agenten mit System-Prompts, Tools und privaten Wissensdatenbanken. RAG-Pipeline mit pgvector für semantische Suche. Agenten streamen Antworten token-by-token via SSE.",
      },
      tags: [
        "Next.js 15",
        "TypeScript",
        "OpenAI",
        "tRPC",
        "pgvector",
        "Drizzle ORM",
        "RAG",
        "Railway",
      ],
      live: "https://agent-platform-production-6865.up.railway.app",
      github: "https://github.com/iamgaurav07/agent-platform",
    },
    {
      number: "04",
      title: "PulseVC",
      desc: {
        en: "ML-powered VC portfolio analysis platform. Investors upload CSV data and receive 6-month forecasting via Prophet, anomaly detection via Isolation Forest, KMeans clustering, and natural language Q&A over their portfolio companies.",
        de: "ML-gestützte VC-Portfolio-Analyseplattform. Investoren laden CSV-Daten hoch und erhalten 6-Monats-Prognosen via Prophet, Anomalieerkennung via Isolation Forest, KMeans-Clustering und Natural-Language-Q&A.",
      },
      tags: [
        "FastAPI",
        "Python",
        "Prophet",
        "scikit-learn",
        "KMeans",
        "Next.js 15",
        "PostgreSQL",
        "Render",
      ],
      live: "https://pulsevc-frontend.onrender.com",
      github: "https://github.com/iamgaurav07/pulsevc",
    },
  ];

  const skills = [
    {
      label: { en: "Languages", de: "Sprachen" },
      items: ["TypeScript", "JavaScript", "Python", "SQL", "PHP"],
    },
    {
      label: { en: "Frontend", de: "Frontend" },
      items: ["React", "Next.js 15", "Angular", "Redux", "TailwindCSS", "tRPC"],
    },
    {
      label: { en: "Backend", de: "Backend" },
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "FastAPI",
        "GraphQL",
        "WebSockets",
      ],
    },
    {
      label: { en: "Databases", de: "Datenbanken" },
      items: [
        "PostgreSQL",
        "pgvector",
        "MongoDB",
        "Redis",
        "Drizzle ORM",
        "Prisma",
      ],
    },
    {
      label: { en: "AI & ML", de: "KI & ML" },
      items: [
        "OpenAI API",
        "Groq AI",
        "RAG Pipelines",
        "Vector Search",
        "Prophet",
        "Isolation Forest",
        "KMeans",
        "Claude API",
        "Whisper (OpenAI)",
      ],
    },
    {
      label: { en: "Cloud & DevOps", de: "Cloud & DevOps" },
      items: [
        "AWS (EC2/ECS/Lambda)",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Railway",
        "Render",
      ],
    },
  ];

  const experience = [
    {
      date: "Jan 2022 — Sep 2022",
      company: "Netsmartz",
      role: { en: "Senior Software Engineer", de: "Senior Software Engineer" },
      location: "Chandigarh, India",
      bullets: {
        en: [
          "Designed REST APIs with Node.js, Express, MongoDB, and Redis for high-traffic applications",
          "Architected GitHub Actions CI/CD pipelines and Docker containerisation",
          "Optimised AWS infrastructure (EC2, ECS, Lambda) for cost and performance",
        ],
        de: [
          "Entwarf REST APIs mit Node.js, Express, MongoDB und Redis für hochfrequentierte Anwendungen",
          "Konzipierte GitHub Actions CI/CD-Pipelines und Docker-Containerisierung",
          "Optimierte AWS-Infrastruktur (EC2, ECS, Lambda) für Kosteneffizienz und Performance",
        ],
      },
    },
    {
      date: "Jun 2020 — Jan 2022",
      company: "SmartData Enterprises",
      role: {
        en: "Senior Associate — Software Engineer",
        de: "Senior Associate — Software Engineer",
      },
      location: "Mohali, India",
      bullets: {
        en: [
          "Led Node.js microservices development across multiple enterprise SaaS products",
          "Built React/TypeScript frontends with Redux for complex state management",
          "Managed AWS infrastructure; configured GitLab CI/CD for zero-downtime deployments",
        ],
        de: [
          "Leitete Node.js-Microservices-Entwicklung für mehrere Enterprise-SaaS-Produkte",
          "Baute React/TypeScript-Frontends mit Redux für komplexes State-Management",
          "Verwaltete AWS-Infrastruktur; konfigurierte GitLab CI/CD für Zero-Downtime-Deployments",
        ],
      },
    },
    {
      date: "Mar 2018 — Jun 2020",
      company: "VenturePact",
      role: { en: "Software Developer", de: "Software-Entwickler" },
      location: "Jalandhar, India",
      bullets: {
        en: [
          "Developed full-stack B2B SaaS features with Angular, Node.js, and Express",
          "Integrated HubSpot, Salesforce, and Marketo via REST APIs for CRM synchronisation",
        ],
        de: [
          "Entwickelte Full-Stack B2B-SaaS-Features mit Angular, Node.js und Express",
          "Integrierte HubSpot, Salesforce und Marketo via REST APIs für CRM-Synchronisierung",
        ],
      },
    },
    {
      date: "Jan 2017 — Feb 2018",
      company: "Nascenture",
      role: { en: "Software Developer", de: "Software-Entwickler" },
      location: "Mohali, India",
      bullets: {
        en: [
          "Delivered full-stack client solutions using PHP, MySQL, JavaScript, and MongoDB",
          "Designed and optimised relational and NoSQL schemas for multiple projects",
        ],
        de: [
          "Lieferte Full-Stack-Lösungen mit PHP, MySQL, JavaScript und MongoDB",
          "Entwarf und optimierte relationale und NoSQL-Datenbankschemata",
        ],
      },
    },
  ];

  const education = [
    {
      degree: {
        en: "MSc Information Technology Management",
        de: "MSc Informationstechnologiemanagement",
      },
      school: "Berlin School of Business and Innovation",
      date: "Feb 2024 — Mar 2026",
      location: "Berlin, Germany",
    },
    {
      degree: {
        en: "B.Tech Computer Science and Engineering",
        de: "B.Tech Informatik und Ingenieurwesen",
      },
      school: "Beant College of Engineering and Technology",
      date: "Jul 2011 — May 2015",
      location: "India",
    },
  ];

  const blogs = [
    {
      tag: { en: "Architecture", de: "Architektur" },
      title: {
        en: "Building a Multi-Tenant SaaS with Next.js 15 and Drizzle ORM",
        de: "Multi-Tenant SaaS mit Next.js 15 und Drizzle ORM entwickeln",
      },
      excerpt: {
        en: "How I designed the database schema and auth flow for CodeLens to support multiple users with full data isolation.",
        de: "Wie ich das Datenbankschema und den Auth-Flow für CodeLens entwickelt habe, um mehrere Nutzer mit vollständiger Datenisolierung zu unterstützen.",
      },
    },
    {
      tag: { en: "AI Engineering", de: "KI-Engineering" },
      title: {
        en: "Real-Time AI Reviews: SSE vs WebSockets for Streaming Data",
        de: "Echtzeit-KI-Reviews: SSE vs WebSockets für Streaming-Daten",
      },
      excerpt: {
        en: "Why I chose Server-Sent Events over WebSockets for CodeLens and how to implement persistent connections in Next.js.",
        de: "Warum ich Server-Sent Events statt WebSockets für CodeLens gewählt habe und wie man persistente Verbindungen in Next.js implementiert.",
      },
    },
    {
      tag: { en: "ML", de: "ML" },
      title: {
        en: "From CSV to Forecast: Building a VC Analytics Engine with Prophet",
        de: "Von CSV zur Prognose: Eine VC-Analytics-Engine mit Prophet entwickeln",
      },
      excerpt: {
        en: "A deep dive into building PulseVC — time series forecasting, anomaly detection, and clustering on financial data.",
        de: "Ein tiefer Einblick in die Entwicklung von PulseVC — Zeitreihenprognosen, Anomalieerkennung und Clustering auf Finanzdaten.",
      },
    },
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch("/Gaurav_Kumar_CV.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Gaurav_Kumar_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Syne', system-ui, sans-serif",
        background: "#0D0D0B",
        color: "#F0EFE8",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0D0D0B; }
        ::-webkit-scrollbar-thumb { background: #2A2A26; border-radius: 2px; }
        a { text-decoration: none; color: inherit; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseGreen { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .fade1 { animation: fadeUp 0.6s ease 0.1s both; }
        .fade2 { animation: fadeUp 0.6s ease 0.2s both; }
        .fade3 { animation: fadeUp 0.6s ease 0.3s both; }
        .fade4 { animation: fadeUp 0.6s ease 0.4s both; }
        .fade5 { animation: fadeUp 0.6s ease 0.5s both; }
        .project-card { transition: all 0.2s; }
        .project-card:hover { transform: translateY(-2px); border-color: #3A3A36 !important; }
        .blog-card { transition: all 0.2s; }
        .blog-card:hover { transform: translateY(-2px); border-color: #3A3A36 !important; }
        .contact-link { transition: all 0.2s; }
        .contact-link:hover { transform: translateX(4px); border-color: #3A3A36 !important; color: #F0EFE8 !important; }
        .skill-item { transition: all 0.15s; cursor: default; }
        .skill-item:hover { color: #F0EFE8 !important; border-color: #3A3A36 !important; }
        .nav-link-item { transition: color 0.2s; }
        .nav-link-item:hover { color: #F0EFE8 !important; }
        .lang-btn { transition: all 0.2s; cursor: pointer; }
        .lang-btn:hover { color: #F0EFE8 !important; }
        .mobile-menu { position: fixed; top: 64px; left: 0; right: 0; background: rgba(13,13,11,0.98); backdrop-filter: blur(20px); border-bottom: 1px solid #1C1C19; padding: 20px; z-index: 99; transform: translateY(-100%); opacity: 0; transition: all 0.3s ease; pointer-events: none; }
        .mobile-menu.open { transform: translateY(0); opacity: 1; pointer-events: all; }
        @media (min-width: 769px) {
          .mobile-nav-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
          .project-grid-item { padding: 36px !important; }
          .contact-form { padding: 32px !important; }
          section { padding-left: 48px !important; padding-right: 48px !important; }
          .education-card { padding: 24px 28px !important; }
          .skills-card { padding: 28px 32px !important; }
          .blog-card { padding: 28px !important; }
          .hero-section { padding: 140px 48px 100px !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
          .hero-stats { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .stats-divider { display: none !important; }
          .project-grid-item { grid-template-columns: 1fr !important; padding: 24px !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .experience-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .experience-date { margin-bottom: 8px !important; }
          .education-grid { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-content { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
          .hero-buttons { flex-direction: column !important; width: 100% !important; }
          .hero-buttons a, .hero-buttons button { width: 100% !important; justify-content: center !important; }
          .project-buttons { flex-direction: column !important; }
          .project-buttons a { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .nav-logo { font-size: 18px !important; }
          .hero-title { font-size: 42px !important; }
          .hero-subtitle { font-size: 14px !important; }
          .section-title { font-size: 32px !important; }
          .project-title { font-size: 24px !important; }
          .skill-item { font-size: 11px !important; padding: 4px 10px !important; }
          .footer-links { flex-wrap: wrap !important; justify-content: center !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 20px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(13,13,11,0.95)" : "rgba(13,13,11,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #1C1C19",
          transition: "all 0.3s ease",
        }}
      >
        <a
          href="#"
          className="nav-logo"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(18px, 5vw, 22px)",
            letterSpacing: "-0.02em",
            color: "#F0EFE8",
          }}
        >
          Gaurav<span style={{ color: "#E8FF5A" }}>.</span>
        </a>

        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {t.nav.map((link, i) => (
            <a
              key={link}
              href={`#${t.navHrefs[i]}`}
              className="nav-link-item"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#9B9A92",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Language toggle */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1C1C19",
              border: "1px solid #2A2A26",
              borderRadius: 100,
              padding: "3px",
            }}
          >
            {(["en", "de"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="lang-btn"
                style={{
                  background: lang === l ? "#E8FF5A" : "transparent",
                  color: lang === l ? "#0D0D0B" : "#9B9A92",
                  border: "none",
                  borderRadius: 100,
                  padding: "5px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={handleDownload}
            className="desktop-nav"
            style={{
              background: "#E8FF5A",
              color: "#0D0D0B",
              padding: "8px 20px",
              borderRadius: 100,
              fontWeight: 700,
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s",
              cursor: "pointer",
              border: "none",
            }}
          >
            {t.downloadCV}
          </button>
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "transparent",
            border: "1px solid #2A2A26",
            borderRadius: 8,
            padding: "8px 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F0EFE8"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
          }}
        >
          {/* Mobile language toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1C1C19",
              border: "1px solid #2A2A26",
              borderRadius: 100,
              padding: "3px",
            }}
          >
            {(["en", "de"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  background: lang === l ? "#E8FF5A" : "transparent",
                  color: lang === l ? "#0D0D0B" : "#9B9A92",
                  border: "none",
                  borderRadius: 100,
                  padding: "5px 16px",
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                }}
              >
                {l}
              </button>
            ))}
          </div>
          {t.nav.map((link, i) => (
            <a
              key={link}
              href={`#${t.navHrefs[i]}`}
              onClick={handleNavClick}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#9B9A92",
                fontFamily: "'DM Sans', sans-serif",
                padding: "8px 0",
                width: "100%",
                textAlign: "center" as const,
              }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => {
              handleDownload();
              handleNavClick();
            }}
            style={{
              background: "#E8FF5A",
              color: "#0D0D0B",
              padding: "10px 24px",
              borderRadius: 100,
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              border: "none",
              marginTop: 8,
              width: "100%",
            }}
          >
            {t.downloadCV}
          </button>
        </div>
      </div>

      {/* HERO */}
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 20px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(232,255,90,0.04), transparent 60%), radial-gradient(ellipse 60% 80% at 85% 20%, rgba(232,255,90,0.02), transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1C1C19 1px, transparent 1px), linear-gradient(90deg, #1C1C19 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.3,
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            className="fade1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
              color: "#4ADE80",
              fontSize: "clamp(10px, 3vw, 12px)",
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: 100,
              marginBottom: 32,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ADE80",
                display: "inline-block",
                animation: "pulseGreen 2s ease-in-out infinite",
              }}
            />
            {t.available}
          </div>

          <h1
            className="fade2 hero-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(42px, 10vw, 88px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: 32,
            }}
          >
            {t.heroTitle1}
            <br />
            <span style={{ color: "#6B6B64" }}>{t.heroTitle2}</span>
            <br />
            <span style={{ color: "#E8FF5A" }}>{t.heroTitle3}</span>
          </h1>

          <p
            className="fade3 hero-subtitle"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(14px, 4vw, 17px)",
              color: "#9B9A92",
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            {t.heroSubtitle}
          </p>

          <div
            className="fade4 hero-buttons"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#E8FF5A",
                color: "#0D0D0B",
                padding: "13px 24px",
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {t.viewWork}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#9B9A92",
                padding: "13px 24px",
                borderRadius: 100,
                fontWeight: 500,
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
                border: "1px solid #2A2A26",
                transition: "all 0.2s",
              }}
            >
              {t.getInTouch}
            </a>
            <a
              href="https://github.com/iamgaurav07"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#9B9A92",
                padding: "13px 16px",
                borderRadius: 100,
                border: "1px solid #2A2A26",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>

          <div
            className="fade5 hero-stats"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              marginTop: 64,
              paddingTop: 48,
              borderTop: "1px solid #1C1C19",
              flexWrap: "wrap",
            }}
          >
            {[
              ["6+", t.yearsExp],
              ["4", t.liveProducts],
              ["Germany", t.workPermit],
            ].map(([n, l], i) => (
              <div
                key={n}
                style={{ display: "flex", alignItems: "center", gap: 40 }}
              >
                {i > 0 && (
                  <div
                    className="stats-divider"
                    style={{ width: 1, height: 40, background: "#2A2A26" }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(28px, 6vw, 32px)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      color: "#F0EFE8",
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#5A5A54",
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          padding: "80px 20px",
          background: "#141412",
          borderTop: "1px solid #1C1C19",
          borderBottom: "1px solid #1C1C19",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#E8FF5A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#E8FF5A" }} />
            {t.selectedWork}
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            {t.projects}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {projects.map((p) => (
              <div
                key={p.number}
                className="project-card project-grid-item"
                style={{
                  background: "#0D0D0B",
                  border: "1px solid #1C1C19",
                  borderRadius: 12,
                  padding: "24px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#5A5A54",
                      letterSpacing: "0.08em",
                      marginBottom: 14,
                    }}
                  >
                    {p.number}
                  </div>
                  <h3
                    className="project-title"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(22px, 5vw, 28px)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      marginBottom: 10,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "#9B9A92",
                      lineHeight: 1.7,
                      marginBottom: 20,
                      fontWeight: 300,
                    }}
                  >
                    {p.desc[lang]}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 24,
                    }}
                  >
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "#5A5A54",
                          background: "#1C1C19",
                          border: "1px solid #2A2A26",
                          padding: "3px 10px",
                          borderRadius: 100,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    className="project-buttons"
                    style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
                  >
                    <a
                      href={p.live}
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#E8FF5A",
                        color: "#0D0D0B",
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      {t.liveDemo}
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#1C1C19",
                        color: "#9B9A92",
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        fontFamily: "'DM Sans', sans-serif",
                        border: "1px solid #2A2A26",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    color: "#4ADE80",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    padding: "6px 12px",
                    borderRadius: 100,
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#4ADE80",
                      display: "inline-block",
                      animation: "pulseGreen 2s ease-in-out infinite",
                    }}
                  />
                  {t.live}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#E8FF5A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#E8FF5A" }} />
            {t.whatIWorkWith}
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            {t.skills}
          </h2>
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 2,
            }}
          >
            {skills.map((s) => (
              <div
                key={s.label.en}
                className="skills-card"
                style={{
                  background: "#141412",
                  border: "1px solid #1C1C19",
                  borderRadius: 12,
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "#E8FF5A",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {s.label[lang]}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="skill-item"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(11px, 3vw, 13px)",
                        color: "#9B9A92",
                        background: "#1C1C19",
                        border: "1px solid #2A2A26",
                        padding: "5px 12px",
                        borderRadius: 6,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{
          padding: "80px 20px",
          background: "#141412",
          borderTop: "1px solid #1C1C19",
          borderBottom: "1px solid #1C1C19",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#E8FF5A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#E8FF5A" }} />
            {t.whereWorked}
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            {t.experience}
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experience.map((e, i) => (
              <div
                key={e.company}
                className="experience-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 40,
                  padding: "32px 0",
                  borderBottom:
                    i < experience.length - 1 ? "1px solid #1C1C19" : "none",
                  alignItems: "start",
                }}
              >
                <div className="experience-date">
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#5A5A54",
                      letterSpacing: "0.04em",
                      lineHeight: 1.6,
                    }}
                  >
                    {e.date}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#5A5A54",
                      marginTop: 4,
                    }}
                  >
                    {e.location}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(18px, 4vw, 20px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 4,
                    }}
                  >
                    {e.company}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: "#E8FF5A",
                      marginBottom: 14,
                      fontWeight: 500,
                    }}
                  >
                    {e.role[lang]}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {e.bullets[lang].map((b) => (
                      <li
                        key={b}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "clamp(12px, 3.5vw, 13px)",
                          color: "#9B9A92",
                          paddingLeft: 16,
                          position: "relative",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#5A5A54",
                            fontSize: 11,
                          }}
                        >
                          —
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            style={{
              marginTop: 64,
              paddingTop: 48,
              borderTop: "1px solid #1C1C19",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "#E8FF5A",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              {t.education}
            </div>
            <div
              className="education-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 2,
              }}
            >
              {education.map((edu) => (
                <div
                  key={edu.degree.en}
                  className="education-card"
                  style={{
                    background: "#0D0D0B",
                    border: "1px solid #1C1C19",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(14px, 4vw, 16px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 6,
                    }}
                  >
                    {edu.degree[lang]}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(12px, 3.5vw, 13px)",
                      color: "#9B9A92",
                      marginBottom: 8,
                    }}
                  >
                    {edu.school}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#5A5A54",
                    }}
                  >
                    {edu.date} · {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#E8FF5A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#E8FF5A" }} />
            {t.writing}
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            {t.blog}
          </h2>
          <div
            className="blog-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 2,
            }}
          >
            {blogs.map((b) => (
              <div
                key={b.title.en}
                className="blog-card"
                style={{
                  background: "#141412",
                  border: "1px solid #1C1C19",
                  borderRadius: 12,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "#E8FF5A",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {b.tag[lang]}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(16px, 4vw, 18px)",
                    fontWeight: 700,
                    color: "#F0EFE8",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {b.title[lang]}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(12px, 3.5vw, 13px)",
                    color: "#9B9A92",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {b.excerpt[lang]}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "#5A5A54",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      background: "#1C1C19",
                      border: "1px solid #2A2A26",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {t.comingSoon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          background: "#141412",
          borderTop: "1px solid #1C1C19",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#E8FF5A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#E8FF5A" }} />
            {t.letsWork}
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            {t.contact}
          </h2>
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(14px, 4vw, 16px)",
                  color: "#9B9A92",
                  lineHeight: 1.7,
                  marginBottom: 36,
                  fontWeight: 300,
                }}
              >
                {t.contactDesc}
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  {
                    icon: "✉",
                    label: "iamgaurav1993@gmail.com",
                    href: "mailto:iamgaurav1993@gmail.com",
                  },
                  {
                    icon: "in",
                    label: "linkedin.com/in/iamgaurav1993",
                    href: "https://linkedin.com/in/iamgaurav1993",
                  },
                  {
                    icon: "gh",
                    label: "github.com/iamgaurav07",
                    href: "https://github.com/iamgaurav07",
                  },
                  { icon: "📍", label: "Berlin, Germany", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="contact-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 14,
                      color: "#9B9A92",
                      padding: "12px 16px",
                      border: "1px solid #1C1C19",
                      borderRadius: 10,
                      background: "#0D0D0B",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        background: "#1C1C19",
                        border: "1px solid #2A2A26",
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontFamily: "'DM Mono', monospace",
                        color: "#5A5A54",
                        flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "clamp(10px, 3vw, 12px)",
                      }}
                    >
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="contact-form"
              style={{
                background: "#0D0D0B",
                border: "1px solid #1C1C19",
                borderRadius: 14,
                padding: "24px",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {[
                  {
                    key: "name",
                    label: t.name,
                    type: "text",
                    placeholder: "Gaurav Kumar",
                  },
                  {
                    key: "email",
                    label: t.email,
                    type: "email",
                    placeholder: "you@company.com",
                  },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "#5A5A54",
                        marginBottom: 8,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field.key]: e.target.value,
                        }))
                      }
                      style={{
                        width: "100%",
                        background: "#141412",
                        border: "1px solid #2A2A26",
                        borderRadius: 8,
                        padding: "11px 14px",
                        color: "#F0EFE8",
                        fontSize: 14,
                        outline: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        transition: "border-color 0.2s",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "#5A5A54",
                      marginBottom: 8,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {t.message}
                  </label>
                  <textarea
                    placeholder={t.messagePlaceholder}
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      background: "#141412",
                      border: "1px solid #2A2A26",
                      borderRadius: 8,
                      padding: "11px 14px",
                      color: "#F0EFE8",
                      fontSize: 14,
                      outline: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    background: sent ? "rgba(34,197,94,0.15)" : "#E8FF5A",
                    color: sent ? "#4ADE80" : "#0D0D0B",
                    border: sent ? "1px solid rgba(34,197,94,0.3)" : "none",
                    borderRadius: 100,
                    padding: "13px",
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: sending ? "wait" : "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  {sending ? (
                    <>
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          border: "2px solid rgba(13,13,11,0.2)",
                          borderTop: "2px solid #0D0D0B",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      {t.sending}
                    </>
                  ) : sent ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {t.sent}
                    </>
                  ) : (
                    t.send
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 20px", borderTop: "1px solid #1C1C19" }}>
        <div
          className="footer-content"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(16px, 4vw, 20px)",
              letterSpacing: "-0.02em",
            }}
          >
            Gaurav<span style={{ color: "#E8FF5A" }}>.</span>
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#5A5A54",
            }}
          >
            © 2026 Gaurav Kumar · Berlin, Germany
          </div>
          <div
            className="footer-links"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            {[
              ["GitHub", "https://github.com/iamgaurav07"],
              ["LinkedIn", "https://linkedin.com/in/iamgaurav1993"],
              ["Email", "mailto:iamgaurav1993@gmail.com"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: "#5A5A54",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9B9A92")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5A5A54")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
