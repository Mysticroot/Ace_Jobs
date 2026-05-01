import React from "react";
import { Link } from "react-router";
import "../style.scss";

const Landing = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,0,128,0.12), transparent 35%), linear-gradient(180deg, #050816 0%, #0b1120 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <section
        className="home-page"
        style={{
          paddingTop: ".1rem",
          paddingBottom: "4rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            width: "100%",
            textAlign: "center",
            padding: "4rem 2rem",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "0.45rem 1rem",
              borderRadius: "999px",
              background: "rgba(255,0,128,0.12)",
              border: "1px solid rgba(255,0,128,0.3)",
              color: "#ff4da6",
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            AI-Powered Career Success
          </div>

          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "0.75rem",
              fontWeight: 800,
              background: "linear-gradient(90deg, #ffffff, #ff4da6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
            }}
          >
            AceJobs
          </h1>

          <h1
            style={{
              fontSize: "2.7rem",
              marginBottom: "1.25rem",
              color: "#f8fafc",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            Build better interview plans, faster
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.15rem",
              lineHeight: 1.8,
              maxWidth: 760,
              margin: "0 auto 2.5rem",
            }}
          >
            Generate structured interview plans and candidate reports using
            AI-powered templates. Upload resumes, create role-specific question
            sets, and keep your hiring process smarter, faster, and more
            consistent.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <Link
              to="/login"
              className="aj-btn aj-btn--primary"
              style={{
                textDecoration: "none",
                padding: "0.9rem 2.2rem",
                fontSize: "1rem",
                boxShadow: "0 10px 25px rgba(255,0,128,0.35)",
              }}
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="aj-btn aj-btn--outline"
              style={{
                textDecoration: "none",
                padding: "0.9rem 2.2rem",
                fontSize: "1rem",
              }}
            >
              Sign Up
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
              color: "#94a3b8",
              fontSize: "0.95rem",
            }}
          >
            <span>✔ Resume Analysis</span>
            <span>✔ Skill Gap Detection</span>
            <span>✔ Behavioral + Technical Prep</span>
            <span>✔ AI Interview Roadmaps</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
