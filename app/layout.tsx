import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Kumar — Full Stack Engineer & AI Builder",
  description: "Full Stack Engineer with 6+ years building production SaaS, AI platforms, and ML tools. Based in Berlin. Valid German work permit.",
  keywords: ["Full Stack Engineer", "Berlin", "TypeScript", "React", "Node.js", "AI", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}