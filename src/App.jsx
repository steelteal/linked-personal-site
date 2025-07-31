import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";

import SecurityPlus from "./assets/Security+-svg.svg";
import AwsSolutionsArchitect from "./assets/aws-solutions-architect.svg";
import AzureAdministrator from "./assets/azure-administrator-associate.svg";
import AzureFundamentals from "./assets/azure-fundamentals.svg";
import AzureSecurityEngineer from "./assets/azure-security-engineer-associate.svg";

export default function App() {
  const certs = [
    { src: SecurityPlus, alt: "CompTIA Security+ Certificate" },
    { src: AwsSolutionsArchitect, alt: "AWS Solutions Architect Certificate" },
    { src: AzureAdministrator, alt: "Azure Administrator Associate Certificate" },
    { src: AzureFundamentals, alt: "Azure Fundamentals Certificate" },
    { src: AzureSecurityEngineer, alt: "Azure Security Engineer Associate Certificate" },
  ];

  const [bouncing, setBouncing] = useState({});

  // Create a ref to the audio element
  const audioRef = useRef(null);

  const handleBounce = (index, event) => {
    const icon = event.currentTarget;
    const rect = icon.getBoundingClientRect();

    // Play slip sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // Start bouncing animation with fixed position
    setBouncing((prev) => ({
      ...prev,
      [index]: {
        isBouncing: true,
        style: {
          position: "fixed",
          top: rect.top + "px",
          left: rect.left + "px",
          width: rect.width + "px",
          height: rect.height + "px",
          zIndex: 9999,
          cursor: "grabbing",
          pointerEvents: "none",
        },
      },
    }));

    setTimeout(() => {
      setBouncing((prev) => ({
        ...prev,
        [index]: {
          isBouncing: false,
          style: {},
        },
      }));
    }, 2000);
  };

  return (
    <>
      <audio ref={audioRef} src="/banana-slip.mp3" preload="auto" />
      <main
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#fff",
          boxSizing: "border-box",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <section
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            borderRadius: "16px",
            maxWidth: 900,
            width: "100%",
            padding: "3rem 2rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Chris Teal</h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#ccc" }}>
            Cloud & Cybersecurity Professional
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
              position: "relative",
              height: "auto",
            }}
          >
            {certs.map(({ src, alt }, index) => {
              const bounceInfo = bouncing[index] || { isBouncing: false, style: {} };
              return (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className={bounceInfo.isBouncing ? "bounce" : ""}
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    padding: 0,
                    maxHeight: 120,
                    maxWidth: "100%",
                    objectFit: "contain",
                    margin: bounceInfo.isBouncing ? 0 : "0 auto",
                    transition: "filter 0.2s ease, transform 0.2s ease",
                    cursor: "pointer",
                    ...bounceInfo.style,
                  }}
                  onClick={(e) => handleBounce(index, e)}
                  draggable={false}
                />
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              fontSize: "2.5rem",
            }}
          >
            <a
              href="mailto:chrischristealteal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Email"
              style={{ color: "#fff", transition: "color 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ddd")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <MdEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/chris-teal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{ color: "#0A66C2", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#004182")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0A66C2")}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/steelteal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{ color: "#fff", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ccc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <FaGithub />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
