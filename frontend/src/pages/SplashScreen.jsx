import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/banner.png';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleExplore = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate('/explore');
    }, 2000);
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'Work Sans', -apple-system, sans-serif",
      backgroundColor: '#0f172a',
    }}>

      {/* Full-screen background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Primary Navy gradient overlay — left side */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.85) 35%, rgba(15, 23, 42, 0.35) 60%, rgba(15, 23, 42, 0.0) 100%)',
        zIndex: 1,
      }} />

      {/* ── Navbar ── */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '24px 48px',
        zIndex: 5,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* White SVG Logo for dark background */}
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#ffffff" strokeWidth="8" fill="none"/>
            <path d="M40 30H55C63.2843 30 70 36.7157 70 45C70 53.2843 63.2843 60 55 60H40V30Z" fill="#ffffff"/>
            <path d="M40 60V80" stroke="#ffffff" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="55" cy="45" r="8" fill="#0f172a"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontWeight: 800, fontSize: 16, color: '#ffffff', letterSpacing: '0.5px' }}>POORNIMA</span>
            <span style={{ fontWeight: 600, fontSize: 12, color: '#cbd5e1' }}>UNIVERSITY</span>
          </div>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '48px',
        maxWidth: '520px',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}>

        {/* Tagline */}
        <div style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#cbd5e1',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: 10,
          lineHeight: 1.6,
        }}>
          ONE PLATFORM FOR<br />EVERY COLLEGE EVENT.
        </div>

        {/* Light Gray divider line */}
        <div style={{
          width: 36,
          height: 2.5,
          background: '#e2e8f0',
          borderRadius: 2,
          marginBottom: 20,
        }} />

        {/* Main Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 32 }}>
          <span style={{
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            Poornima University
          </span>

          <span style={{
            fontSize: 'clamp(32px, 3.8vw, 52px)',
            fontWeight: 800,
            color: '#e2e8f0',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Event Management
          </span>

          <span style={{
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            Portal
          </span>
        </div>

        {/* CTA Button (High contrast, rectangular rounded corner) */}
        <Link to="/explore" style={{ textDecoration: 'none', width: 'fit-content' }} onClick={handleExplore}>
          <button
            style={{
              background: '#ffffff', // High contrast white background
              color: '#0f172a', // Primary Navy text
              border: 'none',
              borderRadius: 4, // 0.25rem corner radius
              padding: '14px 28px',
              fontSize: 15,
              fontWeight: 600,
              cursor: isLoading ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.2s ease',
              letterSpacing: '0.2px',
              opacity: isLoading ? 0.8 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.25)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.15)';
              }
            }}
          >
            {/* Calendar Icon or Spinner */}
            <span style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '1.5px solid #0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {isLoading ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                  <style>
                    {`
                      @keyframes spin {
                        100% { transform: rotate(360deg); }
                      }
                    `}
                  </style>
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              )}
            </span>
            {isLoading ? 'Loading...' : 'Explore Events'}
            <span style={{ fontSize: 18, marginLeft: 4 }}>→</span>
          </button>
        </Link>
      </div>

      {/* ── Dot grid — bottom left ── */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '48px',
        zIndex: 4,
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '7px',
      }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'rgba(226, 232, 240, 0.15)',
          }} />
        ))}
      </div>

    </div>
  );
}
