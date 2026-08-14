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
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>

      {/* Google Font: Dancing Script for cursive text */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

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

      {/* Dark blue gradient overlay — left side */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(10, 25, 70, 0.92) 0%, rgba(10, 25, 70, 0.80) 35%, rgba(10, 25, 70, 0.30) 60%, rgba(10, 25, 70, 0.0) 100%)',
        zIndex: 1,
      }} />

      {/* ── Navbar ── */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '22px 40px',
        zIndex: 5,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/pu_logo.png" alt="Poornima University Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '1px' }}>POORNIMA</span>
            <span style={{ fontWeight: 400, fontSize: 11, color: '#cbd5e1', letterSpacing: '1.5px' }}>UNIVERSITY</span>
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
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.75)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: 10,
          lineHeight: 1.6,
        }}>
          ONE PLATFORM FOR<br />EVERY COLLEGE EVENT.
        </div>

        {/* Gold divider line */}
        <div style={{
          width: 36,
          height: 2.5,
          background: '#f59e0b',
          borderRadius: 2,
          marginBottom: 20,
        }} />

        {/* Main Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 32 }}>
          {/* Line 1: Poornima University — bold white */}
          <span style={{
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.3px',
            lineHeight: 1.15,
          }}>
            Poornima University
          </span>

          {/* Line 2: Event Management — gold cursive */}
          <span style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(32px, 3.8vw, 52px)',
            fontWeight: 700,
            color: '#f59e0b',
            lineHeight: 1.2,
            letterSpacing: '0.5px',
          }}>
            Event Management
          </span>

          {/* Line 3: Portal — bold white */}
          <span style={{
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.3px',
            lineHeight: 1.15,
          }}>
            Portal
          </span>
        </div>

        {/* CTA Button */}
        <Link to="/explore" style={{ textDecoration: 'none', width: 'fit-content' }} onClick={handleExplore}>
          <button
            style={{
              background: '#0f2a6b',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '50px',
              padding: '13px 28px',
              fontSize: 15,
              fontWeight: 600,
              cursor: isLoading ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              transition: 'all 0.25s ease',
              letterSpacing: '0.2px',
              opacity: isLoading ? 0.8 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = '#1e3a8a';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = '#0f2a6b';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
              }
            }}
          >
            {/* Calendar Icon or Spinner */}
            <span style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {isLoading ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            background: 'rgba(255,255,255,0.25)',
          }} />
        ))}
      </div>

    </div>
  );
}
