import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/banner.png';

// Smooth scroll with offset for sticky bars (marquee ~38px + navbar ~62px)
const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 110;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const faqs = [
  { q: 'Who can participate in SIH 2026?', a: 'Any undergraduate or postgraduate student enrolled in a recognized Indian institution can participate.' },
  { q: 'How many members are allowed in a team?', a: 'Each team must have exactly 6 members, with at least 1 female member and at most 1 mentor.' },
  { q: 'Can first year students participate?', a: 'Yes, first year students are eligible to participate in SIH 2026.' },
  { q: 'Is there a registration fee?', a: 'No, participation in Smart India Hackathon 2026 is completely free of cost.' },
];

const timelineSteps = [
  { num: '01', label: 'Registration Open', date: '1 Aug – 18 Sep', status: 'active', icon: 'app_registration' },
  { num: '02', label: 'Problem Selection', date: '19 Sep – 25 Sep', status: 'upcoming', icon: 'rule_folder' },
  { num: '03', label: 'Internal Screening', date: '26 Sep – 5 Oct', status: 'upcoming', icon: 'search_check' },
  { num: '04', label: 'College Final Team', date: '10 Oct 2025', status: 'upcoming', icon: 'groups' },
  { num: '05', label: 'Grand Finale', date: 'Nov – Dec 2025', status: 'finale', icon: 'social_leaderboard' },
];

const quickResources = [
  { icon: 'language', label: 'Visit Site', sub: 'sih.gov.in', href: 'https://sih.gov.in' },
  { icon: 'timeline', label: 'Timeline', sub: 'Process', href: 'https://sih.gov.in/#process-timeline' },
  { icon: 'download', label: 'Idea Format', sub: 'Download PPTX', href: 'https://sih.gov.in/letters/2026/SIH2026-IDEA-Presentation-Format.pptx' },
  { icon: 'description', label: 'Problems', sub: 'Statements', href: 'https://sih.gov.in/sih2025PS' },
];

const aboutItems = [
  { icon: 'school', label: 'Eligibility', val: 'B.Tech / M.Tech / MCA' },
  { icon: 'group', label: 'Team Size', val: '6 Members (Min 1 Female)' },
  { icon: 'category', label: 'Categories', val: 'Hardware & Software' },
  { icon: 'assignment_ind', label: 'Problems By', val: 'Govt & Industries' },
];

export default function Explore() {
  const [openFaq, setOpenFaq] = useState(0);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filters = ['All', 'Hackathon', 'Cultural', 'Sports', 'Tech'];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
      position: 'relative',
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>

      {/* ── Fonts & Global Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

        ::-webkit-scrollbar { display: none; }
        html, body { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; }

        .glass {
          background: rgba(10, 20, 60, 0.52);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .glass:hover {
          border-color: rgba(255,255,255,0.22);
          box-shadow: 0 8px 40px rgba(0,0,0,0.25);
        }
        .glass-inner {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          transition: background 0.2s, border-color 0.2s;
        }
        .glass-inner:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
        }
        .filter-btn {
          padding: 7px 18px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .filter-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
        .filter-btn.active {
          background: #f59e0b;
          border-color: #f59e0b;
          color: #0a1946;
          box-shadow: 0 4px 16px rgba(245,158,11,0.3);
        }
        .apply-btn {
          background: #f59e0b;
          color: #0a1946;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          padding: 11px 26px;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 18px rgba(245,158,11,0.35);
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
        }
        .apply-btn:hover {
          background: #fbbf24;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(245,158,11,0.5);
        }
        .nav-link {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #f59e0b; }
        .marquee-track {
          display: flex;
          gap: 56px;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fade-up {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .fade-up.in {
          opacity: 1;
          transform: translateY(0);
        }
        details summary::-webkit-details-marker { display: none; }
        details > summary { list-style: none; }
        .timeline-node {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 2;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .timeline-node:hover { transform: scale(1.08); }
        .stat-card {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 18px 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          gap: 4px;
          transition: background 0.2s, border-color 0.2s;
        }
        .stat-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(245,158,11,0.3); }
        .resource-card {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
          padding: 18px 10px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 12px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .resource-card:hover { background: rgba(255,255,255,0.12); border-color: rgba(245,158,11,0.4); transform: translateY(-3px); }
        .faq-summary { display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 14px 0; }
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-weight: normal; font-style: normal; font-size: 24px; display: inline-block; line-height: 1; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; }
      `}</style>

      {/* ── Fixed Background ── */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'linear-gradient(135deg, rgba(8,16,55,0.97) 0%, rgba(10,25,70,0.92) 40%, rgba(10,25,70,0.88) 70%, rgba(8,16,55,0.96) 100%)', zIndex: -1 }} />

      {/* ── Announcement Marquee ── */}
      <div style={{ background: 'rgba(245,158,11,0.12)', borderBottom: '1px solid rgba(245,158,11,0.2)', overflow: 'hidden', padding: '9px 0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', gap: 56 }} className="marquee-track">
          {[...Array(2)].map((_, gi) => (
            <React.Fragment key={gi}>
              {['🚨 Registration Deadline: 18 Sept 2025 — Apply Now!', '📢 New Problem Statements Added — Check sih.gov.in', '🏆 Grand Finale: National Level Competition — Nov/Dec 2025', '💰 Prize Pool: ₹1,00,000+ for Winners', '👥 Team Size: 6 Members (Min 1 Female Required)', '📋 Internal Screening: 26 Sep – 5 Oct'].map((msg, i) => (
                <span key={i} style={{ color: '#fcd34d', fontSize: 12, fontWeight: 600, letterSpacing: 0.3, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  {msg}
                  <span style={{ color: 'rgba(245,158,11,0.4)', marginLeft: 4 }}>◆</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', position: 'sticky', top: 38, zIndex: 99, background: 'rgba(8,16,55,0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/pu_logo.png" alt="Poornima University Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span style={{ fontWeight: 800, fontSize: 14, color: '#fff', letterSpacing: '1px' }}>POORNIMA</span>
              <span style={{ fontWeight: 400, fontSize: 10, color: '#94a3b8', letterSpacing: '1.5px' }}>UNIVERSITY</span>
            </div>
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18, margin: '0 4px' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 500 }}>Explore Hub</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <button onClick={() => smoothScrollTo('timeline')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Timeline</button>
          <button onClick={() => smoothScrollTo('about')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>About SIH</button>
          <button onClick={() => smoothScrollTo('faqs')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>FAQs</button>
          <a href="https://docs.google.com/forms/d/1wlgQvyCGKRkThI-G9CrMJyzzDPQ94_8owlLaXiPATB0/viewform" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="apply-btn" style={{ padding: '9px 20px', fontSize: 13 }}>
              Apply Now
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>arrow_forward</span>
            </button>
          </a>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 48px 80px', position: 'relative', zIndex: 10, color: '#fff' }}>

        {/* ── Page Header ── */}
        <div className={`fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '0ms', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 50, padding: '4px 14px', fontSize: 11, fontWeight: 700, color: '#fcd34d', letterSpacing: 1.2, textTransform: 'uppercase' }}>
              Live • Registration Open
            </span>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse 2s infinite', boxShadow: '0 0 0 0 rgba(245,158,11,0.6)' }} />
          </div>
          <h1 style={{ fontFamily: "'Dancing Script', cursive", color: '#f59e0b', fontSize: 'clamp(36px, 4vw, 58px)', lineHeight: 1.15, margin: '0 0 10px 0' }}>
            Explore Hub
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 600, margin: 0, lineHeight: 1.6 }}>
            Discover upcoming hackathons, tech events & innovation challenges. Register your team and compete at the national level.
          </p>

          {/* ── Filter Pills ── */}
          <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className={`fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '80ms', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { icon: 'event', val: '1', label: 'Active Event', color: '#f59e0b' },
            { icon: 'group', val: '6', label: 'Members / Team', color: '#60a5fa' },
            { icon: 'workspace_premium', val: '₹1L+', label: 'Prize Pool', color: '#34d399' },
            { icon: 'calendar_clock', val: '18 Sep', label: 'Last Date', color: '#f87171' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.color, marginBottom: 2 }}>{s.icon}</span>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{s.val}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Row 1: Featured Event + Quick Resources ── */}
        <div className={`fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '140ms', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, marginBottom: 20 }}>

          {/* Featured Event */}
          <div className="glass" style={{ padding: '28px 32px', position: 'relative', overflow: 'hidden' }}>
            {/* Glow blob */}
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className="material-symbols-outlined" style={{ color: '#f59e0b', fontSize: 20 }}>bolt</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Featured Upcoming</span>
            </div>

            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {/* SIH Logo */}
              <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '16px 14px', minWidth: 110, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, flexShrink: 0 }}>
                <svg fill="none" height="44" viewBox="0 0 100 100" width="44" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15C32.878 15 19 28.878 19 46C19 56.634 24.341 66.024 32.5 71.659V80C32.5 82.76 34.74 85 37.5 85H62.5C65.26 85 67.5 82.76 67.5 80V71.659C75.659 66.024 81 56.634 81 46C81 28.878 67.122 15 50 15Z" fill="#0f172a" stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                  <path d="M50 17C33.984 17 21 29.984 21 46C21 55.772 25.811 64.444 33.153 69.642C33.722 70.046 34.062 70.7 34.062 71.4V78.5C34.062 79.88 35.182 81 36.562 81H50V17Z" fill="#fcd34d" opacity="0.4"></path>
                  <circle cx="50" cy="46" fill="#0f172a" r="14"></circle>
                  <circle cx="50" cy="46" fill="none" r="10" stroke="#f59e0b" strokeWidth="2"></circle>
                  <path d="M50 36V56M40 46H60" stroke="#f59e0b" strokeWidth="1.5"></path>
                </svg>
                <div style={{ color: '#fff', fontSize: 9, fontWeight: 800, letterSpacing: 1.5, textAlign: 'center', lineHeight: 1.4 }}>
                  SMART INDIA<br/>HACKATHON<br/>2026
                </div>
              </div>

              {/* Event Info */}
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 50, padding: '3px 12px', fontSize: 10, fontWeight: 700, color: '#fcd34d', letterSpacing: 1, textTransform: 'uppercase' }}>
                    Registration Open
                  </span>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', margin: '0 0 8px 0', lineHeight: 1.2 }}>
                  Smart India Hackathon 2026
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px 0' }}>
                  India's biggest innovation competition. Solve real-world problems from Ministries, Industries & PSUs and create impact across the nation.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  {[
                    { icon: 'workspace_premium', text: 'Prize Pool: ₹1,00,000+', color: '#f59e0b' },
                    { icon: 'group', text: 'Team of 6', color: '#60a5fa' },
                    { icon: 'public', text: 'National Level', color: '#34d399' },
                  ].map((tag, i) => (
                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '6px 12px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: tag.color }}>{tag.icon}</span>
                      {tag.text}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#f87171', fontWeight: 600 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_clock</span>
                    Last Date: 18 Sept 2025
                  </div>
                  <a href="https://docs.google.com/forms/d/1wlgQvyCGKRkThI-G9CrMJyzzDPQ94_8owlLaXiPATB0/viewform" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="apply-btn">
                      Apply for Team Registration
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Resources */}
          <div className="glass" style={{ padding: '24px' }}>
            <div style={{ marginBottom: 18 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 4px 0' }}>Quick Resources</h3>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Essential links for SIH 2026</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {quickResources.map((r, i) => (
                <a key={i} href={r.href} target="_blank" rel="noopener noreferrer" className="resource-card">
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#f59e0b' }}>{r.icon}</span>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{r.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, marginTop: 2 }}>{r.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div id="timeline" className={`glass fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '200ms', padding: '28px 32px', marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <span className="material-symbols-outlined" style={{ color: '#f59e0b', fontSize: 22 }}>timeline</span>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>Timeline & Milestones</h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0 }}>Key phases and important dates for SIH 2026</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 50, padding: '7px 16px', fontSize: 13, color: '#fcd34d', fontWeight: 600 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', boxShadow: '0 0 8px rgba(245,158,11,0.8)', animation: 'pulse 2s infinite' }} />
              Phase 1: Registration Active
            </div>
          </div>

          {/* Timeline Steps */}
          <div style={{ position: 'relative', overflowX: 'auto', paddingBottom: 8 }}>
            {/* Connecting Line */}
            <div style={{ position: 'absolute', top: 26, left: '10%', right: '10%', height: 2, background: 'linear-gradient(to right, #f59e0b 20%, rgba(255,255,255,0.12) 20%)', zIndex: 0, borderRadius: 2 }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minWidth: 720, position: 'relative', zIndex: 1 }}>
              {timelineSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, flex: 1, textAlign: 'center' }}>
                  <div
                    className="timeline-node"
                    style={{
                      background: step.status === 'active' ? '#f59e0b' : 'rgba(255,255,255,0.06)',
                      border: step.status === 'active' ? '3px solid rgba(245,158,11,0.3)' : '2px solid rgba(255,255,255,0.15)',
                      boxShadow: step.status === 'active' ? '0 0 24px rgba(245,158,11,0.4)' : 'none',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: step.status === 'active' ? '#0a1946' : 'rgba(255,255,255,0.55)' }}>{step.icon}</span>
                    <span style={{
                      position: 'absolute', top: -6, right: -6,
                      background: step.status === 'active' ? '#0a1946' : 'rgba(10,25,70,0.9)',
                      color: step.status === 'active' ? '#f59e0b' : 'rgba(255,255,255,0.5)',
                      fontSize: 9, fontWeight: 800, padding: '2px 5px', borderRadius: 50,
                      border: step.status === 'active' ? '1px solid rgba(245,158,11,0.5)' : '1px solid rgba(255,255,255,0.2)',
                      lineHeight: 1.5,
                    }}>{step.num}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: step.status === 'active' ? '#fff' : 'rgba(255,255,255,0.6)', marginBottom: 4 }}>{step.label}</div>
                    <div style={{ fontSize: 11, color: step.status === 'active' ? '#fcd34d' : 'rgba(255,255,255,0.35)', marginBottom: 6 }}>{step.date}</div>
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 50, letterSpacing: 0.8, textTransform: 'uppercase',
                      background: step.status === 'active' ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.06)',
                      color: step.status === 'active' ? '#fcd34d' : 'rgba(255,255,255,0.4)',
                      border: step.status === 'active' ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(255,255,255,0.1)',
                    }}>
                      {step.status === 'active' ? 'Active' : step.status === 'finale' ? 'Finale' : 'Upcoming'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 3: About SIH + FAQs ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 20 }}>

          {/* About SIH */}
          <div id="about" className={`glass fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '260ms', padding: '24px' }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: '#f59e0b', fontSize: 20 }}>info</span>
              About SIH 2026
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {aboutItems.map((item, i) => (
                <div key={i} className="glass-inner" style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '12px 14px' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 17, color: '#f59e0b' }}>{item.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div id="faqs" className={`glass fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '310ms', padding: '24px 28px' }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: '#f59e0b', fontSize: 20 }}>quiz</span>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', margin: '0 0 18px 0' }}>Got questions? We have answers.</p>

            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div
                    className="faq-summary"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span style={{ fontSize: 14, fontWeight: 600, color: openFaq === i ? '#fcd34d' : '#fff', paddingRight: 16, transition: 'color 0.2s' }}>{faq.q}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)', transition: 'transform 0.25s, color 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'none', color: openFaq === i ? '#f59e0b' : 'rgba(255,255,255,0.4)', flexShrink: 0 }}>expand_more</span>
                  </div>
                  <div style={{ overflow: 'hidden', maxHeight: openFaq === i ? 200 : 0, transition: 'max-height 0.3s ease', paddingBottom: openFaq === i ? 14 : 0 }}>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://sih.gov.in/faqs" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#f59e0b', fontSize: 13, fontWeight: 600, textDecoration: 'none', marginTop: 20, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'} onMouseLeave={e => e.currentTarget.style.color = '#f59e0b'}>
              View All FAQs
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>arrow_forward</span>
            </a>
          </div>
        </div>

      </main>



    </div>
  );
}
