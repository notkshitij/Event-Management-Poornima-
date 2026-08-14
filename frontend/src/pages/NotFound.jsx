import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/banner.png';

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = (e) => {
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
      fontFamily: "'Work Sans', -apple-system, sans-serif",
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f8f9ff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: 40,
    }}>

      {/* ── Navbar ── */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '24px 48px',
        zIndex: 10,
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#0f172a" strokeWidth="8" fill="none"/>
            <path d="M40 30H55C63.2843 30 70 36.7157 70 45C70 53.2843 63.2843 60 55 60H40V30Z" fill="#0f172a"/>
            <path d="M40 60V80" stroke="#0f172a" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="55" cy="45" r="8" fill="#fff"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontWeight: 800, fontSize: 16, color: '#0f172a', letterSpacing: '0.5px' }}>POORNIMA</span>
            <span style={{ fontWeight: 600, fontSize: 12, color: '#334155' }}>UNIVERSITY</span>
          </div>
        </Link>

        {/* Dot grid top-right */}
        <div style={{
          position: 'absolute',
          top: 24,
          right: 48,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '6px',
        }}>
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} style={{
              width: 4, height: 4,
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.08)',
            }} />
          ))}
        </div>
      </div>

      {/* ── Main Hero Area ── */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '78vh',
        position: 'relative',
      }}>
        {/* Left: Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px 64px 40px 64px',
          zIndex: 2,
          position: 'relative',
        }}>
          {/* 404 number */}
          <div style={{
            fontSize: 'clamp(80px, 10vw, 120px)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 8,
            color: '#0f172a', // Solid Primary Navy
          }}>
            404
          </div>

          {/* Page Not Found */}
          <div style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: 12,
            letterSpacing: '-0.01em',
          }}>
            Page Not Found
          </div>

          {/* Gray divider */}
          <div style={{
            width: 40,
            height: 3,
            background: '#e2e8f0',
            borderRadius: 2,
            marginBottom: 20,
          }} />

          {/* Description */}
          <p style={{
            fontSize: 15,
            color: '#475569',
            lineHeight: 1.7,
            margin: '0 0 32px 0',
            maxWidth: 340,
          }}>
            Oops! The page you are looking for<br />
            doesn&apos;t exist or has been moved.
          </p>

          {/* Go to Home button (Rectangular, 4px rounded corner) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <Link to="/explore" style={{ textDecoration: 'none' }} onClick={handleGoHome}>
              <button
                style={{
                  background: '#0f172a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '13px 28px',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: isLoading ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.1)',
                  transition: 'all 0.2s ease',
                  opacity: isLoading ? 0.8 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = '#1e293b';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = '#0f172a';
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                {isLoading ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                )}
                {isLoading ? 'Loading...' : 'Go to Home'} &nbsp;→
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Banner image */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '78vh',
        }}>
          {/* Gradient fade left */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #f8f9ff 0%, rgba(248,249,255,0.5) 25%, transparent 60%)',
            zIndex: 1,
          }} />
          {/* Gradient fade bottom */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, #f8f9ff 100%)',
            zIndex: 1,
          }} />
          <img
            src={backgroundImage}
            alt="Poornima University Campus"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* ── Bottom card: You can try (Academic clean styling) ── */}
      <div style={{
        margin: '-100px auto 0 auto',
        background: '#ffffff',
        borderRadius: 8, // rounded-lg
        padding: '24px 32px',
        border: '1px solid #e2e8f0', // Slate-200 border
        boxShadow: 'none',
        zIndex: 5,
        position: 'relative',
        maxWidth: 800,
        width: 'calc(100% - 80px)',
        transition: 'box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      >
        <div style={{ fontSize: 13, color: '#475569', fontWeight: 600, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>You can try:</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              ),
              label: 'Go to Home',
              sub: 'Back to homepage',
              to: '/',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              ),
              label: 'Explore Events',
              sub: 'Browse all events',
              to: '/explore',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              ),
              label: 'Need Help?',
              sub: 'Contact support',
              to: '#',
            },
          ].map((item, i) => (
            <Link key={i} to={item.to} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '4px 0',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 4, // Soft corner
                  border: '1px solid #e2e8f0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#f8f9ff', // Surface Dim / Paper
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: '#475569', marginTop: 2 }}>{item.sub}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
