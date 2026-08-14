import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Who can participate in SIH 2026?', a: 'Any undergraduate or postgraduate student enrolled in a recognized Indian institution can participate.' },
  { q: 'How many members are allowed in a team?', a: 'Each team must have exactly 6 members, with at most 1 mentor.' },
  { q: 'Can first year students participate?', a: 'Yes, first year students are eligible to participate in SIH 2026.' },
  { q: 'How are teams selected?', a: 'Teams are selected based on their problem statement submissions evaluated by internal panels.' },
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
    <path d="M50 15C32.878 15 19 28.878 19 46C19 56.634 24.341 66.024 32.5 71.659V80C32.5 82.76 34.74 85 37.5 85H62.5C65.26 85 67.5 82.76 67.5 80V71.659C75.659 66.024 81 56.634 81 46C81 28.878 67.122 15 50 15Z" stroke="#374151" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="#fff"/>
    <path d="M50 17C33.984 17 21 29.984 21 46C21 55.772 25.811 64.444 33.153 69.642C33.722 70.046 34.062 70.7 34.062 71.4V78.5C34.062 79.88 35.182 81 36.562 81H50V17Z" fill="#ff9933" opacity="0.85"/>
    <path d="M50 17V81H63.438C64.818 81 65.938 79.88 65.938 78.5V71.4C65.938 70.7 66.278 70.046 66.847 69.642C74.189 64.444 79 55.772 79 46C79 29.984 66.016 17 50 17Z" fill="#128807" opacity="0.85"/>
    <circle cx="50" cy="46" r="14" fill="#fff"/>
    <circle cx="50" cy="46" r="10" stroke="#2244aa" strokeWidth="2" fill="none"/>
    <path d="M50 36V56M40 46H60" stroke="#2244aa" strokeWidth="1.5"/>
    <path d="M43 39L57 53M43 53L57 39" stroke="#2244aa" strokeWidth="1.5"/>
    <path d="M37.5 89H62.5" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
    <path d="M42.5 93H57.5" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const RulesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const EligibilityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
  </svg>
);

const TeamSizeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CategoriesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <circle cx="7" cy="7" r="1.5" fill="#2563eb"></circle>
  </svg>
);

const ProblemIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const TimelineRegisterIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#fff" : "#2563eb"} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const TimelineDocIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#fff" : "#2563eb"} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const TimelineSearchIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#fff" : "#2563eb"} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const TimelineUsersIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#fff" : "#2563eb"} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const TimelineTrophyIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#fff" : "#d97706"} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
    <path d="M12 2a6 6 0 0 0-6 6v3.5a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"></path>
  </svg>
);

const timelineSteps = [
  { step: '01', icon: <TimelineRegisterIcon />, title: 'Registration Open', date: '1 Aug - 18 Sep', status: 'Active', active: true },
  { step: '02', icon: <TimelineDocIcon />, title: 'Problem Selection', date: '19 Sep - 25 Sep', status: 'Upcoming', active: false },
  { step: '03', icon: <TimelineSearchIcon />, title: 'Internal Screening', date: '26 Sep - 5 Oct', status: 'Upcoming', active: false },
  { step: '04', icon: <TimelineUsersIcon />, title: 'College Final Team', date: '10 Oct 2025', status: 'Upcoming', active: false },
  { step: '05', icon: <TimelineTrophyIcon />, title: 'Grand Finale (SIH)', date: 'Nov - Dec 2025', status: 'Finale', active: false },
];

// ── Shared Styles ──
const card = {
  background: '#fff',
  borderRadius: 10,
  padding: '20px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)',
  border: '1px solid #f3f4f6',
};

const cardHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
};

const sectionTitle = {
  fontWeight: 700,
  fontSize: 15,
  color: '#1f2937',
};

const viewAll = {
  fontSize: 12,
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 600,
};

const applyBtn = {
  background: '#1e3a8a',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  padding: '10px 18px',
  fontSize: 12,
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, sans-serif", backgroundColor: '#fdfcfa', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '24px 48px' }}>

        {/* ── Row 1: Upcoming Events | Event Detail ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

          {/* Upcoming Events */}
          <div style={card}>
            <div style={cardHeader}>
              <span style={sectionTitle}>Upcoming Events</span>
              <Link to="#" style={viewAll}>View All</Link>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 12 }}>
              {/* SIH Logo Box */}
              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                padding: '10px 8px',
                minWidth: 90,
                height: 105,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
              }}>
                <SihLogo />
                <div style={{ fontWeight: 800, fontSize: 8, color: '#1f2937', marginTop: 6, letterSpacing: '0.2px', lineHeight: 1.2 }}>
                  SMART INDIA<br />HACKATHON<br />2026
                </div>
              </div>
              {/* Event Details */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#1f2937', marginBottom: 2 }}>Smart India Hackathon 2026</div>
                <span style={{
                  background: '#dcfce7',
                  color: '#16a34a',
                  fontSize: 10,
                  padding: '2px 8px',
                  borderRadius: 12,
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: 6,
                }}>
                  Registration Open
                </span>
                <div style={{ fontSize: 12, color: '#4b5563', marginBottom: 4 }}>
                  📅 Last Date: <span style={{ color: '#dc2626', fontWeight: 700 }}>18 Sept 2025</span>
                </div>
                <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.3 }}>
                  India&apos;s biggest innovation competition. Solve real-world problems &amp; create impact.
                </div>
              </div>
              {/* Apply Button on Right */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <button style={applyBtn}>Explore →</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Event Detail Center */}
          <div style={card}>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#1f2937', marginBottom: 6 }}>Smart India Hackathon 2026</div>
            <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.4, marginBottom: 14 }}>
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
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '12px 6px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <div style={{ marginBottom: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#1f2937', lineHeight: 1.2 }}>{item.label}</div>
                  <div style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>{item.sub}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 2: SIH 2026 Timeline Roadmap (Full Width) ── */}
        <div style={{ ...card, marginBottom: 16, padding: '22px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: '#1f2937', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>⏳ SIH 2026 Timeline &amp; Milestones</span>
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>Key phases and important dates for participation</div>
            </div>
            <span style={{
              background: '#dbeafe',
              color: '#1d4ed8',
              fontSize: 11,
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb', display: 'inline-block' }} />
              Current: Phase 1 (Registration)
            </span>
          </div>

          <div style={{ position: 'relative', padding: '8px 0' }}>
            {/* Connecting Track Line */}
            <div style={{
              position: 'absolute',
              top: 36,
              left: '8%',
              right: '8%',
              height: 3,
              background: 'linear-gradient(to right, #2563eb 20%, #e2e8f0 20%)',
              zIndex: 0,
              borderRadius: 2,
            }} />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 16,
              position: 'relative',
              zIndex: 1,
            }}>
              {timelineSteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '14px 10px',
                    borderRadius: 12,
                    background: step.active ? 'rgba(37, 99, 235, 0.04)' : '#fff',
                    border: step.active ? '1px solid #bfdbfe' : '1px solid #f1f5f9',
                    boxShadow: step.active ? '0 4px 12px rgba(37, 99, 235, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                >
                  <div style={{ position: 'relative', marginBottom: 12 }}>
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background: step.active ? '#1e3a8a' : '#fff',
                      border: step.active ? '3px solid #bfdbfe' : '2px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: step.active ? '0 4px 14px rgba(30, 58, 138, 0.3)' : '0 2px 5px rgba(0,0,0,0.04)',
                      transition: 'transform 0.2s',
                    }}>
                      {React.cloneElement(step.icon, { active: step.active })}
                    </div>
                    <span style={{
                      position: 'absolute',
                      top: -3,
                      right: -3,
                      background: step.active ? '#2563eb' : '#64748b',
                      color: '#fff',
                      fontSize: 9,
                      fontWeight: 800,
                      padding: '1px 6px',
                      borderRadius: 10,
                      lineHeight: 1.2,
                    }}>
                      {step.step}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: step.active ? '#1e3a8a' : '#1f2937', marginBottom: 4, lineHeight: 1.3 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500, marginBottom: 8 }}>
                    📅 {step.date}
                  </div>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 10,
                    background: step.active ? '#dcfce7' : step.status === 'Finale' ? '#fef3c7' : '#f1f5f9',
                    color: step.active ? '#15803d' : step.status === 'Finale' ? '#b45309' : '#64748b',
                  }}>
                    {step.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 3: About SIH 2026 | Quick Links ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16, marginBottom: 16 }}>

          {/* About SIH 2026 */}
          <div style={card}>
            <div style={cardHeader}>
              <span style={sectionTitle}>About SIH 2026</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { icon: <EligibilityIcon />, label: 'Eligibility', val: 'B.Tech / M.Tech / MCA Students' },
                { icon: <TeamSizeIcon />, label: 'Team Size', val: '6 Members (Min 1 Female)' },
                { icon: <CategoriesIcon />, label: 'Categories', val: 'Hardware & Software' },
                { icon: <ProblemIcon />, label: 'Problem Statements', val: 'Ministries & Industries' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#f8fafc', padding: '12px 14px', borderRadius: 8, border: '1px solid #f1f5f9' }}>
                  <span style={{ marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1f2937', marginTop: 2, lineHeight: 1.2 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={card}>
            <div style={cardHeader}>
              <span style={sectionTitle}>Quick Links</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {quickLinks.map((link, i) => (
                <a key={i} href="#" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: i < quickLinks.length - 1 ? '1px solid #f3f4f6' : 'none',
                  textDecoration: 'none',
                  color: '#2563eb',
                  fontSize: 13,
                  fontWeight: 600,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  <span>{link}</span>
                  <span style={{ color: '#9ca3af', fontSize: 15 }}>›</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 4: FAQs ── */}
        <div style={card}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#1f2937', marginBottom: 10 }}>FAQs</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
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
                    color: '#374151',
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
                  <div style={{ fontSize: 12, color: '#6b7280', paddingBottom: 12, lineHeight: 1.4, paddingRight: 8 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
