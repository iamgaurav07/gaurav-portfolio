"use client";
import { useState } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: "CodeLens",
      desc: "Production-grade multi-tenant AI code review SaaS. Connects to GitHub via a GitHub App, reviews every PR within 30 seconds using GPT-4o, posts structured feedback with severity scores, and streams results to a real-time dashboard via SSE.",
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
      number: "02",
      title: "AgentFlow",
      desc: "Full-stack AI agent SaaS platform. Users create custom agents with system prompts, tools, and private knowledge bases. RAG pipeline using pgvector for semantic search over uploaded documents. Agents stream responses token-by-token via SSE.",
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
      number: "03",
      title: "PulseVC",
      desc: "ML-powered VC portfolio analysis platform. Investors upload CSV data and receive 6-month forecasting via Prophet, anomaly detection via Isolation Forest, KMeans clustering, and natural language Q&A over their portfolio companies.",
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
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "PHP"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js 15", "Angular", "Redux", "TailwindCSS", "tRPC"],
    },
    {
      label: "Backend",
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
      label: "Databases",
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
      label: "AI & ML",
      items: [
        "OpenAI API",
        "RAG Pipelines",
        "Vector Search",
        "Prophet",
        "Isolation Forest",
        "KMeans",
      ],
    },
    {
      label: "Cloud & DevOps",
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
      date: "Jul 2022 — Sep 2022",
      company: "Netsmartz",
      role: "Senior Software Engineer",
      location: "Chandigarh, India",
      bullets: [
        "Designed REST APIs with Node.js, Express, MongoDB, and Redis for high-traffic applications",
        "Architected GitHub Actions CI/CD pipelines and Docker containerisation",
        "Optimised AWS infrastructure (EC2, ECS, Lambda) for cost and performance",
      ],
    },
    {
      date: "Jun 2020 — Jan 2022",
      company: "SmartData Enterprises",
      role: "Senior Associate — Software Engineer",
      location: "Mohali, India",
      bullets: [
        "Led Node.js microservices development across multiple enterprise SaaS products",
        "Built React/TypeScript frontends with Redux for complex state management",
        "Managed AWS infrastructure; configured GitLab CI/CD for zero-downtime deployments",
      ],
    },
    {
      date: "Mar 2018 — Jun 2020",
      company: "VenturePact",
      role: "Software Developer",
      location: "Jalandhar, India",
      bullets: [
        "Developed full-stack B2B SaaS features with Angular, Node.js, and Express",
        "Integrated HubSpot, Salesforce, and Marketo via REST APIs for CRM synchronisation",
      ],
    },
    {
      date: "Jan 2017 — Feb 2018",
      company: "Nascenture",
      role: "Software Developer",
      location: "Mohali, India",
      bullets: [
        "Delivered full-stack client solutions using PHP, MySQL, JavaScript, and MongoDB",
        "Designed and optimised relational and NoSQL schemas for multiple projects",
      ],
    },
  ];

  const blogs = [
    {
      tag: "Architecture",
      title: "Building a Multi-Tenant SaaS with Next.js 15 and Drizzle ORM",
      excerpt:
        "How I designed the database schema and auth flow for CodeLens to support multiple users with full data isolation.",
      date: "Coming soon",
    },
    {
      tag: "AI Engineering",
      title: "Real-Time AI Reviews: SSE vs WebSockets for Streaming Data",
      excerpt:
        "Why I chose Server-Sent Events over WebSockets for CodeLens and how to implement persistent connections in Next.js.",
      date: "Coming soon",
    },
    {
      tag: "ML",
      title:
        "From CSV to Forecast: Building a VC Analytics Engine with Prophet",
      excerpt:
        "A deep dive into building PulseVC — time series forecasting, anomaly detection, and clustering on financial data.",
      date: "Coming soon",
    },
  ];

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
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#0D0D0B}
        ::-webkit-scrollbar-thumb{background:#2A2A26;border-radius:2px}
        a{text-decoration:none;color:inherit}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulseGreen{0%,100%{opacity:1}50%{opacity:0.4}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .fade1{animation:fadeUp 0.6s ease 0.1s both}
        .fade2{animation:fadeUp 0.6s ease 0.2s both}
        .fade3{animation:fadeUp 0.6s ease 0.3s both}
        .fade4{animation:fadeUp 0.6s ease 0.4s both}
        .fade5{animation:fadeUp 0.6s ease 0.5s both}
        .project-card{transition:all 0.2s}
        .project-card:hover{transform:translateY(-2px);border-color:#3A3A36 !important}
        .blog-card{transition:all 0.2s}
        .blog-card:hover{transform:translateY(-2px);border-color:#3A3A36 !important}
        .contact-link{transition:all 0.2s}
        .contact-link:hover{transform:translateX(4px);border-color:#3A3A36 !important;color:#F0EFE8 !important}
        .skill-item{transition:all 0.15s;cursor:default}
        .skill-item:hover{color:#F0EFE8 !important;border-color:#3A3A36 !important}
        .nav-link-item{transition:color 0.2s}
        .nav-link-item:hover{color:#F0EFE8 !important}
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 48px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(13,13,11,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #1C1C19",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: "-0.02em",
            color: "#F0EFE8",
          }}
        >
          gaurav<span style={{ color: "#E8FF5A" }}>.</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Projects", "Skills", "Experience", "Blog", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
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
            ),
          )}
        </div>
        <a
          href="/cv.pdf"
          download
          style={{
            background: "#E8FF5A",
            color: "#0D0D0B",
            padding: "8px 20px",
            borderRadius: 100,
            fontWeight: 700,
            fontSize: 13,
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.2s",
          }}
        >
          Download CV
        </a>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 48px 80px",
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
              fontSize: 12,
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
            Available for full-time roles · Berlin, Germany
          </div>

          <h1
            className="fade2"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(52px, 7vw, 88px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: 32,
            }}
          >
            Full Stack
            <br />
            <span style={{ color: "#6B6B64" }}>Engineer &</span>
            <br />
            <span style={{ color: "#E8FF5A" }}>AI Builder.</span>
          </h1>

          <p
            className="fade3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "#9B9A92",
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            6+ years building production SaaS, AI platforms, and ML tools. Based
            in Berlin with a valid German work permit — no sponsorship required.
          </p>

          <div
            className="fade4"
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
              View my work
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
              Get in touch
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
            className="fade5"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              marginTop: 64,
              paddingTop: 48,
              borderTop: "1px solid #1C1C19",
            }}
          >
            {[
              ["6+", "Years experience"],
              ["3", "Live AI products"],
              ["Berlin", "Work permit ✓"],
            ].map(([n, l], i) => (
              <div
                key={n}
                style={{ display: "flex", alignItems: "center", gap: 40 }}
              >
                {i > 0 && (
                  <div
                    style={{ width: 1, height: 40, background: "#2A2A26" }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 32,
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
          padding: "100px 48px",
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
            Selected Work
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {projects.map((p) => (
              <div
                key={p.number}
                className="project-card"
                style={{
                  background: "#0D0D0B",
                  border: "1px solid #1C1C19",
                  borderRadius: 12,
                  padding: "36px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 32,
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
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 28,
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
                      maxWidth: 560,
                    }}
                  >
                    {p.desc}
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
                  <div style={{ display: "flex", gap: 10 }}>
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
                      Live Demo
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
                    whiteSpace: "nowrap",
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
                  Live
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 48px" }}>
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
            What I work with
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {skills.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#141412",
                  border: "1px solid #1C1C19",
                  borderRadius: 12,
                  padding: "28px 32px",
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
                  {s.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="skill-item"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
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
          padding: "100px 48px",
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
            Where I&apos;ve worked
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            Experience
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {experience.map((e, i) => (
              <div
                key={e.company}
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
                <div>
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
                      fontSize: 20,
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
                    {e.role}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
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
              Education
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {[
                {
                  degree: "MSc Information Technology Management",
                  school: "Berlin School of Business and Innovation",
                  date: "Feb 2024 — Mar 2026",
                  location: "Berlin, Germany",
                },
                {
                  degree: "B.Tech Computer Science and Engineering",
                  school: "Beant College of Engineering and Technology",
                  date: "Jul 2011 — May 2015",
                  location: "India",
                },
              ].map((edu) => (
                <div
                  key={edu.degree}
                  style={{
                    background: "#0D0D0B",
                    border: "1px solid #1C1C19",
                    borderRadius: 12,
                    padding: "24px 28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 6,
                    }}
                  >
                    {edu.degree}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
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
      <section id="blog" style={{ padding: "100px 48px" }}>
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
            Writing
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            Blog
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {blogs.map((b) => (
              <div
                key={b.title}
                className="blog-card"
                style={{
                  background: "#141412",
                  border: "1px solid #1C1C19",
                  borderRadius: 12,
                  padding: "28px",
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
                    textTransform: "uppercase",
                  }}
                >
                  {b.tag}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#F0EFE8",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {b.title}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#9B9A92",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {b.excerpt}
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
                    {b.date}
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
          padding: "100px 48px",
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
            Let&apos;s work together
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 48,
            }}
          >
            Contact
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  color: "#9B9A92",
                  lineHeight: 1.7,
                  marginBottom: 36,
                  fontWeight: 300,
                }}
              >
                I&apos;m actively looking for full-time opportunities in Berlin.
                Valid German work permit — no sponsorship required. Open to
                senior full stack, AI engineering, or lead roles.
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
                        fontSize: 12,
                      }}
                    >
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#0D0D0B",
                border: "1px solid #1C1C19",
                borderRadius: 14,
                padding: "32px",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {[
                  {
                    key: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Gaurav Kumar",
                  },
                  {
                    key: "email",
                    label: "Email",
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
                        textTransform: "uppercase",
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
                      textTransform: "uppercase",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about the role..."
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
                      Sending...
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
                      Message sent!
                    </>
                  ) : (
                    "Send message →"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "28px 48px",
          borderTop: "1px solid #1C1C19",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.02em",
          }}
        >
          gaurav<span style={{ color: "#E8FF5A" }}>.</span>
        </div>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#5A5A54",
          }}
        >
          © 2025 Gaurav Kumar · Berlin, Germany
        </div>
        <div style={{ display: "flex", gap: 16 }}>
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
      </footer>
    </div>
  );
}
