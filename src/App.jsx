import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

import SecurityPlus from './assets/Security+-svg.svg';
import AwsSolutionsArchitect from './assets/aws-solutions-architect.svg';
import AzureAdministrator from './assets/azure-administrator-associate.svg';
import AzureAI from './assets/azure-ai-fundamentals.svg';
import AzureSecurityEngineer from './assets/azure-security-engineer-associate.svg';

export default function App() {
  const certs = [
    { src: SecurityPlus, alt: 'CompTIA Security+ Certificate' },
    { src: AwsSolutionsArchitect, alt: 'AWS Solutions Architect Certificate' },
    { src: AzureAdministrator, alt: 'Azure Administrator Associate Certificate' },
    { src: AzureAI, alt: 'Azure AI Fundamentals Certificate' },
    { src: AzureSecurityEngineer, alt: 'Azure Security Engineer Associate Certificate' },
  ];

  return (
    <main
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <section
        style={{
          backgroundColor: 'rgba(0,0,0,0.75)',
          borderRadius: '16px',
          maxWidth: 900,
          width: '100%',
          padding: '3rem 2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Chris Teal</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#ccc' }}>
          Cloud & Cybersecurity Professional
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {certs.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} className="cert-icon" />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            fontSize: '2.5rem',
          }}
        >
          <a
            href="https://www.linkedin.com/in/chris-teal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{ color: '#0A66C2', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#004182')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0A66C2')}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/steelteal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{ color: '#fff', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ccc')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </main>
  );
}
