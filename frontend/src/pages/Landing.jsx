import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';

const faqs = [
  { q: 'Who can participate in SIH 2026?', a: 'Any undergraduate or postgraduate student enrolled in a recognized Indian institution can participate.' },
  { q: 'How many members are allowed in a team?', a: 'Each team must have exactly 6 members, with at most 1 mentor.' },
  { q: 'Can first year students participate?', a: 'Yes, first year students are eligible to participate in SIH 2026.' },
  { q: 'How are teams selected?', a: 'Teams are selected based on their problem statement submissions evaluated by internal panels.' },
];

const prevEvents = [
  { title: 'Tech Fest', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=130&fit=crop' },
  { title: 'Hackathon 2025', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=130&fit=crop' },
  { title: 'Cultural Fest', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=130&fit=crop' },
  { title: 'Sports Meet', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=130&fit=crop' },
  { title: 'Orientation 2025', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=130&fit=crop' },
];

const announcements = [
  { text: 'Registration Extended', date: '2 Aug 2025', color: '#0f172a' },
  { text: 'New Problem Statements Added', date: '30 Jul 2025', color: '#0f172a' },
  { text: 'Orientation on 10th Aug', date: '28 Jul 2025', color: '#475569' },
  { text: 'Internal Screening Dates Out', date: '25 Jul 2025', color: '#475569' },
];

const quickLinks = [
  'About SIH 2026',
  'How to Participate',
  'Important Dates',
  'FAQs',
  'Contact Us',
];

// ── SVG Icons ──
const SihLogo = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15C32.878 15 19 28.878 19 46C19 56.634 24.341 66.024 32.5 71.659V80C32.5 82.76 34.74 85 37.5 85H62.5C65.26 85 67.5 82.76 67.5 80V71.659C75.659 66.024 81 56.634 81 46C81 28.878 67.122 15 50 15Z" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="#fff"/>
    <path d="M50 17C33.984 17 21 29.984 21 46C21 55.772 25.811 64.444 33.153 69.642C33.722 70.046 34.062 70.7 34.062 71.4V78.5C34.062 79.88 35.182 81 36.562 81H50V17Z" fill="#ff9933" opacity="0.85"/>
    <path d="M50 17V81H63.438C64.818 81 65.938 79.88 65.938 78.5V71.4C65.938 70.7 66.278 70.046 66.847 69.642C74.189 64.444 79 55.772 79 46C79 29.984 66.016 17 50 17Z" fill="#128807" opacity="0.85"/>
    <circle cx="50" cy="46" r="14" fill="#fff"/>
    <circle cx="50" cy="46" r="10" stroke="#0f172a" strokeWidth="2" fill="none"/>
    <path d="M50 36V56M40 46H60" stroke="#0f172a" strokeWidth="1.5"/>
    <path d="M43 39L57 53M43 53L57 39" stroke="#0f172a" strokeWidth="1.5"/>
    <path d="M37.5 89H62.5" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
    <path d="M42.5 93H57.5" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const RulesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const EligibilityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
  </svg>
);

const TeamSizeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CategoriesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <circle cx="7" cy="7" r="1.5" fill="#334155"></circle>
  </svg>
);

const ProblemIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const TimelineRegisterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const TimelineDocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const TimelineSearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const TimelineUsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const TimelineTrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
    <path d="M12 2a6 6 0 0 0-6 6v3.5a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"></path>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fff', borderRadius: '2px', padding: '2px' }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const timelineSteps = [
  { icon: <TimelineRegisterIcon />, label: 'Registration\nOpen' },
  { icon: <TimelineDocIcon />, label: 'Problem\nSelection' },
  { icon: <TimelineSearchIcon />, label: 'Internal\nScreening' },
  { icon: <TimelineUsersIcon />, label: 'College\nFinal Team' },
  { icon: <TimelineTrophyIcon />, label: 'Grand Finale\n(SIH 2026)' },
];

// ── Shared Styles ──
const card = {
  background: '#ffffff',
  borderRadius: 8, // rounded-lg (0.5rem)
  padding: '24px', // 24px padding on all sides
  boxShadow: 'none', // no shadow in default state
  border: '1px solid #E2E8F0', // Slate-200 border
  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
};

const cardHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px', // stack-md
};

const sectionTitle = {
  fontWeight: 600,
  fontSize: '18px',
  fontFamily: "'Work Sans', sans-serif",
  color: '#0f172a',
  letterSpacing: '-0.01em',
};

const viewAll = {
  fontSize: '12px',
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: 600,
  color: '#334155',
  textDecoration: 'none',
  letterSpacing: '0.05em',
};

const primaryBtn = {
  background: '#0f172a', // solid primary navy
  color: '#ffffff',
  border: 'none',
  borderRadius: 4, // base rounded (0.25rem)
  padding: '10px 18px',
  fontSize: '13px',
  fontFamily: "'Work Sans', sans-serif",
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToRegister = (e) => {
    e.preventDefault();
    const element = document.getElementById('team-registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Work Sans', -apple-system, sans-serif", backgroundColor: '#f8f9ff', minHeight: '100vh', color: '#0f172a' }}>

      {/* ══ LAYER 0: Fixed background — stays locked behind everything ══ */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f8f9ff',
          backgroundImage: `linear-gradient(to right, #f8f9ff 35%, rgba(248, 249, 255, 0) 65%), linear-gradient(to bottom, rgba(248, 249, 255, 0) 60%, #f8f9ff 95%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: Math.max(0.15, 1 - scrollY / 400),
          transform: `scale(${1 + Math.min(0.06, scrollY / 3000)})`,
          filter: `blur(${Math.min(6, scrollY / 50)}px)`,
          transition: 'transform 0.1s ease-out, filter 0.1s ease-out, opacity 0.1s ease-out',
          willChange: 'transform, filter, opacity',
        }}
      />

      {/* ══ LAYER 1: Spacer / Hero Area — holds Navbar and Hero content ══ */}
      <div style={{ height: '55vh', position: 'relative', zIndex: 1 }}>
        {/* Navbar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 48px',
          zIndex: 5,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
          </div>
          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Bell icon */}
            <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderRadius: '50%', background: '#ba1a1a' }} />
            </div>
            {/* Login button (Ghost) */}
            <button style={{
              background: 'transparent',
              border: '1px solid #0f172a',
              color: '#0f172a',
              borderRadius: 4,
              padding: '6px 20px',
              fontSize: 14,
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0f172a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0f172a';
            }}
            >
              Login
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div style={{
          position: 'absolute',
          bottom: '12%',
          left: '48px',
          maxWidth: '650px',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          <h1 style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: '38px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: '46px' }}>Poornima University</span>
            <span style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: '50px' }}>Event Management Portal</span>
          </h1>
          <p style={{ margin: '4px 0 16px 0', fontSize: '16px', color: '#334155', fontWeight: 400, lineHeight: '24px' }}>
            One Platform for Every College Event.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/explore" style={{ textDecoration: 'none' }}>
              <button style={{
                background: '#0f172a',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: '12px 26px',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f172a'}
              >
                Explore Events <span style={{ fontSize: 16 }}>→</span>
              </button>
            </Link>
            <button
              onClick={scrollToRegister}
              style={{
                background: 'transparent',
                color: '#0f172a',
                border: '1px solid #0f172a',
                borderRadius: 4,
                padding: '12px 26px',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0f172a';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0f172a';
              }}
            >
              Register Now <span style={{ fontSize: 16 }}>👤</span>
            </button>
          </div>
        </div>
      </div>

      {/* ══ LAYER 2: Curtain — slides up and covers the fixed background ══ */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        boxShadow: '0 -8px 24px rgba(15, 23, 42, 0.04)',
        borderTop: '1px solid #e2e8f0',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        overflow: 'hidden',
      }}>

        {/* ── Main Content (cards) ── */}
        <div style={{ background: '#f8f9ff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 48px' }}>

            {/* ── Row 1: Upcoming Events | Event Detail | Latest Announcements ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.6fr 1fr', gap: 24, marginBottom: 32 }}>

              {/* Upcoming Events */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={cardHeader}>
                  <span style={sectionTitle}>Upcoming Events</span>
                  <Link to="/explore" style={viewAll}>View All</Link>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 12 }}>
                  {/* SIH Logo Box */}
                  <div style={{
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    borderRadius: 4,
                    padding: '10px 8px',
                    minWidth: 90,
                    height: 105,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                    <SihLogo />
                    <div style={{ fontWeight: 800, fontSize: 8, color: '#0f172a', marginTop: 6, letterSpacing: '0.2px', lineHeight: 1.2 }}>
                      SMART INDIA<br />HACKATHON<br />2026
                    </div>
                  </div>
                  {/* Event Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 2 }}>Smart India Hackathon 2026</div>
                    <span style={{
                      background: '#f1f5f9', // Slate-100 tag bg
                      color: '#334155', // Slate-700 tag text
                      fontSize: 10,
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontWeight: 600,
                      display: 'inline-block',
                      marginBottom: 6,
                    }}>
                      Registration Open
                    </span>
                    <div style={{ fontSize: 12, color: '#334155', marginBottom: 4 }}>
                      📅 Last Date: <span style={{ color: '#ba1a1a', fontWeight: 700 }}>18 Sept 2025</span>
                    </div>
                    <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.3 }}>
                      India&apos;s biggest innovation competition. Solve real-world problems &amp; create impact.
                    </div>
                  </div>
                  {/* Apply Button on Right */}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={scrollToRegister} style={primaryBtn} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f172a'}>Apply Now →</button>
                  </div>
                </div>
              </div>

              {/* Event Detail Center */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 600, fontSize: 18, color: '#0f172a', marginBottom: 6, letterSpacing: '-0.01em' }}>Smart India Hackathon 2026</div>
                <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.4, marginBottom: 14 }}>
                  Smart India Hackathon is India&apos;s biggest innovation competition where students solve real-world problems provided by ministries, industries and organizations.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, textAlign: 'center' }}>
                  {[
                    { icon: <GlobeIcon />, label: 'Visit', sub: 'sih.gov.in', link: 'https://sih.gov.in' },
                    { icon: <RulesIcon />, label: 'Rules &', sub: 'Guidelines', link: '#' },
                    { icon: <DownloadIcon />, label: 'Download', sub: 'Themes', link: '#' },
                    { icon: <DocumentIcon />, label: 'Problem', sub: 'Statements', link: '#' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      style={{
                        background: '#fff',
                        border: '1px solid #E2E8F0',
                        borderRadius: 4,
                        padding: '12px 6px',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0f172a';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ marginBottom: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>{item.label}</div>
                      <div style={{ fontSize: 10, color: '#475569', marginTop: 2 }}>{item.sub}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Latest Announcements */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={cardHeader}>
                  <span style={sectionTitle}>📢 Latest Announcements</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {announcements.map((a, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < announcements.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: a.color, display: 'inline-block' }} />
                        <span style={{ fontSize: 12, color: '#0f172a', fontWeight: 500 }}>{a.text}</span>
                      </div>
                      <span style={{ fontSize: 11, color: '#475569', whiteSpace: 'nowrap' }}>{a.date}</span>
                    </div>
                  ))}
                </div>
                <a href="#" style={{ ...viewAll, display: 'block', marginTop: 14, textAlign: 'left' }}>View All Announcements</a>
              </div>
            </div>

            {/* ── Row 2: About | Timeline | Apply | Quick Links ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.8fr 1.3fr 1fr', gap: 24, marginBottom: 32 }}>

              {/* About SIH 2026 */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 12 }}>About SIH 2026</div>
                {[
                  { icon: <EligibilityIcon />, label: 'Eligibility', val: 'B.Tech / M.Tech / MCA Students' },
                  { icon: <TeamSizeIcon />, label: 'Team Size', val: '6 Members' },
                  { icon: <CategoriesIcon />, label: 'Categories', val: 'Hardware & Software' },
                  { icon: <ProblemIcon />, label: 'Problem Statements', val: 'Ministries, Industries & PSUs' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 10, color: '#475569', fontWeight: 500 }}>{item.label}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 16 }}>Timeline</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', padding: '0 8px' }}>
                  <div style={{ position: 'absolute', top: 21, left: '8%', right: '8%', height: 1.5, background: '#E2E8F0', zIndex: 0 }} />
                  {timelineSteps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, flex: 1 }}>
                      <div style={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: '#fff',
                        border: '1.5px solid #0f172a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 8,
                        boxShadow: '0 2px 4px rgba(15, 23, 42, 0.04)',
                      }}>
                        {step.icon}
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 600, textAlign: 'center', color: '#0f172a', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{step.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply For Team Registration */}
              <div
                id="team-registration"
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 6 }}>Apply For Team Registration</div>
                <div style={{ fontSize: 12, color: '#475569', marginBottom: 16 }}>Apply for your team registration through Google Form</div>
                <a
                  href="https://docs.google.com/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    background: '#0f172a', // Solid Primary Navy
                    color: '#fff',
                    borderRadius: 4, // 0.25rem
                    padding: '12px 16px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 14,
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f172a'}
                >
                  <GoogleIcon /> Apply Now
                </a>
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 10, fontWeight: 500 }}>Registration will open till 18 Sept 2025</div>
              </div>

              {/* Quick Links */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 10 }}>Quick Links</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {quickLinks.map((link, i) => (
                    <a key={i} href="#" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: i < quickLinks.length - 1 ? '1px solid #F1F5F9' : 'none',
                      textDecoration: 'none',
                      color: '#0f172a',
                      fontSize: 13,
                      fontWeight: 600,
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(2px)';
                      e.currentTarget.style.color = '#334155';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.color = '#0f172a';
                    }}
                    >
                      <span>{link}</span>
                      <span style={{ color: '#9ca3af', fontSize: 15 }}>›</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Row 3: Previous Events | FAQs ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>

              {/* Previous Events */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={cardHeader}>
                  <span style={sectionTitle}>Previous Events</span>
                  <Link to="/explore" style={viewAll}>View All</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginTop: 12 }}>
                  {prevEvents.map((ev, i) => (
                    <div
                      key={i}
                      style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                    >
                      <img src={ev.img} alt={ev.title} style={{ width: '100%', height: 95, objectFit: 'cover', borderRadius: 8, marginBottom: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }} />
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a' }}>{ev.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div
                style={card}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 10 }}>FAQs</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {faqs.map((faq, i) => (
                    <div key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          padding: '12px 0',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: 13,
                          fontWeight: 600,
                          color: '#0f172a',
                        }}
                      >
                        <span>{faq.q}</span>
                        <span style={{ color: '#9ca3af', fontSize: 16, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </button>
                      {openFaq === i && (
                        <div style={{ fontSize: 12, color: '#475569', paddingBottom: 12, lineHeight: 1.4, paddingRight: 8 }}>{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div style={{
            background: '#0f172a', // Primary Navy
            color: '#94a3b8', // Slate-400 text
            padding: '16px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            marginTop: '40px',
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 500,
          }}>
            <div>© 2025 Poornima University. All Rights Reserved.</div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Privacy Policy</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Terms & Conditions</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Contact Us</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Developed by Student Innovation Team <span style={{ color: '#ef4444' }}>❤️</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
