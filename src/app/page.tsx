import SurveyForm from "@/components/SurveyForm";

export default function Home() {
  return (
    <main className="container">
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: 1.2 }}>
          Sangamam 2025-2026
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--accent-secondary)", fontStyle: "italic" }}>
          Parent Feedback Form
        </p>
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
