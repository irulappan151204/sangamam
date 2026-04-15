import SurveyForm from "@/components/SurveyForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="logo-header">
          <Image
            src="/QMIS_Logo_2.png"
            alt="QMIS School Logo"
            width={80}
            height={90}
            className="header-logo"
            priority
          />
          <div>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", lineHeight: 1.2 }}>
              Sangamam 2025-2026
            </h1>
            <p style={{ fontSize: "1.25rem", color: "var(--accent-secondary)", fontStyle: "italic" }}>
              Parent Feedback Form
            </p>
          </div>
          <Image
            src="/Sangamam logo-001.jpg"
            alt="Sangamam Event Logo"
            width={100}
            height={100}
            className="header-logo"
            priority
            style={{ borderRadius: "12px" }}
          />
        </div>
        <div 
          style={{ 
            marginTop: "2rem", 
            padding: "2rem", 
            background: "rgba(255, 255, 255, 0.4)", 
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>Dear Parent,</p>
          <p style={{ marginTop: "0.5rem", opacity: 0.9 }}>
            We value your feedback and would love to hear your thoughts on our **Sangamam 2025-2026**.
            Your responses will help us improve future events. 😊
          </p>
        </div>
      </header>

      <SurveyForm />

      <footer style={{ marginTop: "5rem", textAlign: "center", paddingBottom: "3rem" }}>
        <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} Sangamam Event Team. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
