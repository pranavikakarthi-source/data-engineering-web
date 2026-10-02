import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pibi Tech | Enterprise Data Engineering & Real-Time Intelligence",
  description:
    "Build scalable data ecosystems that process, transform and deliver data for analytics, AI, and real-time decision making.",
  icons: {
    icon: "/images/pibi-logo.png",
    apple: "/images/pibi-logo.png",
  },
  keywords: [
    "Data Engineering",
    "Real-Time Intelligence",
    "Batch Processing",
    "Streaming Processing",
    "Apache Kafka",
    "Apache Spark",
    "Snowflake",
    "Databricks",
    "Data Lakehouse",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#2ec4b6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
