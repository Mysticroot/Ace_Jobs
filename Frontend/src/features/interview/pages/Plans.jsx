import React, { useEffect } from "react";
import { useInterview } from "../hooks/useInterview";
import { useNavigate } from "react-router";

const Plans = () => {
  const { reports, getReports, loading } = useInterview();
  const navigate = useNavigate();

  useEffect(() => {
    getReports();
  }, []);

  if (loading)
    return (
      <main className="loading-screen">
        <h1>Loading plans...</h1>
      </main>
    );

  // show newest first
  const sorted = (reports || [])
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div
      className="plans-page"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,0,128,0.08), transparent 30%), linear-gradient(180deg, #050816 0%, #0b1120 100%)",
        padding: "3rem 1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="interview-card"
        style={{
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "24px",
          background: "rgba(15, 23, 42, 0.82)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
          overflow: "hidden",
        }}
      >
        <div className="interview-card__body" style={{ padding: "2.5rem" }}>
          <div
            style={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <p
                style={{
                  color: "#ff4da6",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.6rem",
                }}
              >
                Your Career Dashboard
              </p>

              <h2
                className="plans-title"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: "0.8rem",
                }}
              >
                All Interview Plans
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Track every generated interview strategy, revisit your reports,
                and measure your progress toward landing better opportunities.
              </p>
            </div>

            {sorted.length > 0 ? (
              <div className="plans-list-wrapper">
                <ul
                  className="reports-list plans-vertical"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {sorted.map((r, index) => (
                    <li
                      key={r._id}
                      className="report-item plan-card"
                      onClick={() => navigate(`/interview/${r._id}`)}
                      style={{
                        cursor: "pointer",
                        padding: "1.4rem 1.5rem",
                        borderRadius: "18px",
                        background: "rgba(30, 41, 59, 0.65)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        transition: "all 0.25s ease",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div
                        className="plan-row"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "1rem",
                        }}
                      >
                        <div className="plan-row__left">
                          <p
                            style={{
                              color: "#ff4da6",
                              fontSize: "0.85rem",
                              fontWeight: 700,
                              marginBottom: "0.4rem",
                            }}
                          >
                            PLAN #{sorted.length - index}
                          </p>

                          <h3
                            style={{
                              color: "#f8fafc",
                              fontSize: "1.25rem",
                              marginBottom: "0.4rem",
                            }}
                          >
                            {r.title || "Untitled Position"}
                          </h3>

                          <p
                            className="report-meta"
                            style={{
                              color: "#94a3b8",
                              fontSize: "0.95rem",
                            }}
                          >
                            Generated on{" "}
                            {new Date(r.createdAt).toLocaleDateString()}
                          </p>
                        </div>

                        <div
                          className="plan-row__right"
                          style={{
                            textAlign: "right",
                          }}
                        >
                          <div
                            style={{
                              padding: "0.8rem 1.2rem",
                              borderRadius: "14px",
                              background:
                                r.matchScore >= 80
                                  ? "rgba(34,197,94,0.12)"
                                  : r.matchScore >= 60
                                    ? "rgba(250,204,21,0.12)"
                                    : "rgba(239,68,68,0.12)",
                              border:
                                r.matchScore >= 80
                                  ? "1px solid rgba(34,197,94,0.25)"
                                  : r.matchScore >= 60
                                    ? "1px solid rgba(250,204,21,0.25)"
                                    : "1px solid rgba(239,68,68,0.25)",
                            }}
                          >
                            <p
                              className={`match-score ${
                                r.matchScore >= 80
                                  ? "score--high"
                                  : r.matchScore >= 60
                                    ? "score--mid"
                                    : "score--low"
                              }`}
                              style={{
                                margin: 0,
                                fontWeight: 700,
                                fontSize: "1rem",
                                color:
                                  r.matchScore >= 80
                                    ? "#22c55e"
                                    : r.matchScore >= 60
                                      ? "#facc15"
                                      : "#ef4444",
                              }}
                            >
                              Match: {r.matchScore}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  borderRadius: "18px",
                  background: "rgba(30,41,59,0.35)",
                  border: "1px dashed rgba(255,255,255,0.08)",
                }}
              >
                <h3 style={{ color: "#f8fafc", marginBottom: "0.8rem" }}>
                  No interview plans yet
                </h3>
                <p style={{ color: "#94a3b8" }}>
                  Create your first AI-powered interview strategy from the Home
                  page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
