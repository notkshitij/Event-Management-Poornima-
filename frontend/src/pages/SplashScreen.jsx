import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/banner.png';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleExplore = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => navigate('/explore'), 1200);
  };

  return (
    <div style={{
      margin: 0, padding: 0,
      width: '100%', height: '100vh',
      overflow: 'hidden', position: 'relative',
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@300;400;500;600;700;800&display=swap');

        @keyframes spin { to { transform: rotate(360deg); } }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineDraw {
          from { width: 0; }
          to   { width: 48px; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
          50%       { opacity: 0.6; box-shadow: 0 0 0 6px rgba(245,158,11,0); }
        }
        @keyframes bobble {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }

        .s-logo  { opacity: 0; animation: fadeIn 0.5s ease forwards; animation-delay: 0.1s; }
        .s-sub   { opacity: 0; animation: fadeSlideUp 0.55s ease forwards; animation-delay: 0.3s; }
        .s-line  { animation: lineDraw 0.5s ease forwards; animation-delay: 0.5s; }
        .s-h1    { opacity: 0; animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.55s; }
        .s-desc  { opacity: 0; animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.72s; }
        .s-btn   { opacity: 0; animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.88s; }
        .s-hint  { opacity: 0; animation: fadeIn 0.6s ease forwards; animation-delay: 1.2s; }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 14px;
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 60px;
          padding: 14px 32px;
          font-size: 15px; font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          position: relative; overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.06);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: inherit;
        }
        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:hover {
          border-color: rgba(255,255,255,0.65);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }
        .cta-icon-wrap {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.3s;
        }
        .cta-btn:hover .cta-icon-wrap { border-color: rgba(255,255,255,0.6); }

        .scroll-hint { animation: bobble 2.4s ease-in-out infinite; animation-delay: 1.5s; }
      `}</style>

      {/* ── Background ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center right',
        zIndex: 0,
      }} />

      {/* ── Overlay: strong on left, fades right ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(100deg, rgba(6,14,48,0.97) 0%, rgba(6,14,48,0.88) 35%, rgba(6,14,48,0.55) 60%, rgba(6,14,48,0.15) 100%)',
      }} />
      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', zIndex: 1,
        background: 'linear-gradient(to top, rgba(6,14,48,0.75), transparent)',
      }} />

      {/* ── Navbar ── */}
      <div className="s-logo" style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', alignItems: 'center',
        padding: '26px 52px', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/pu_logo.png" alt="Poornima University" style={{ width: 40, height: 40, objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontWeight: 800, fontSize: 13, color: '#fff', letterSpacing: '2px' }}>POORNIMA</span>
            <span style={{ fontWeight: 400, fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '2.5px' }}>UNIVERSITY</span>
          </div>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div style={{
        position: 'absolute',
        top: '50%', transform: 'translateY(-50%)',
        left: '52px',
        maxWidth: '560px',
        zIndex: 5,
        display: 'flex', flexDirection: 'column',
      }}>

        {/* Eyebrow label */}
        <div className="s-sub" style={{
          fontSize: 11, fontWeight: 600,
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '3px', textTransform: 'uppercase',
          marginBottom: 14,
        }}>
          Poornima University &nbsp;·&nbsp; Jaipur
        </div>

        {/* Accent line */}
        <div style={{ marginBottom: 22, width: 48, height: 2.5, overflow: 'hidden', borderRadius: 2, background: 'rgba(255,255,255,0.1)' }}>
          <div className="s-line" style={{ height: '100%', background: '#f59e0b', borderRadius: 2 }} />
        </div>

        {/* Main Heading */}
        <div className="s-h1" style={{ display: 'flex', flexDirection: 'column', marginBottom: 22 }}>
          <span style={{
            fontSize: 'clamp(32px, 3.6vw, 50px)',
            fontWeight: 800, color: '#ffffff',
            letterSpacing: '-0.5px', lineHeight: 1.12,
          }}>
            Event
          </span>
          <span style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(42px, 5vw, 68px)',
            fontWeight: 700, color: '#f59e0b',
            lineHeight: 1.15, letterSpacing: '0.5px',
          }}>
            Management
          </span>
          <span style={{
            fontSize: 'clamp(32px, 3.6vw, 50px)',
            fontWeight: 800, color: '#ffffff',
            letterSpacing: '-0.5px', lineHeight: 1.12,
          }}>
            Portal
          </span>
        </div>


        {/* Subtext */}
        <p className="s-desc" style={{
          fontSize: 15,
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.7,
          margin: '0 0 32px 0',
          fontWeight: 400,
          maxWidth: 420,
        }}>
          One platform for every college event: hackathons, cultural fests, sports meets, and more.
        </p>

        {/* CTA */}
        <div className="s-btn">
          <button className="cta-btn" onClick={handleExplore} disabled={isLoading}>
            <span className="cta-icon-wrap">
              {isLoading ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              )}
            </span>
            {isLoading ? 'Loading...' : 'Explore Events'}
            {!isLoading && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Dot grid — bottom left ── */}
      <div style={{
        position: 'absolute', bottom: 52, left: 52,
        zIndex: 4,
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '8px',
      }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{
            width: 3, height: 3, borderRadius: '50%',
            background: `rgba(255,255,255,${0.08 + (i % 5) * 0.04})`,
          }} />
        ))}
      </div>



    </div>
  );
}