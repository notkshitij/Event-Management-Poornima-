import React, { useState, useEffect, useRef } from 'react';
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
  { text: 'Registration Extended', date: '2 Aug 2025', color: '#2563eb' },
  { text: 'New Problem Statements Added', date: '30 Jul 2025', color: '#2563eb' },
  { text: 'Orientation on 10th Aug', date: '28 Jul 2025', color: '#f59e0b' },
  { text: 'Internal Screening Dates Out', date: '25 Jul 2025', color: '#f59e0b' },
];

const quickLinks = [
  'About SIH 2026',
  'How to Participate',
  'Important Dates',
  'FAQs',
  'Contact Us',
];

const timelineSteps = [
  { icon: '👤', label: 'Registration\nOpen' },
  { icon: '📋', label: 'Problem\nSelection' },
  { icon: '🔍', label: 'Internal\nScreening' },
  { icon: '🏫', label: 'College\nFinal Team' },
  { icon: '🏆', label: 'Grand Finale\n(SIH 2026)' },
];

// ── Shared Styles ──
const card = {
  background: '#fff',
  borderRadius: 10,
  padding: '16px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
};

const cardHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const sectionTitle = {
  fontWeight: 700,
  fontSize: 14,
  color: '#111827',
};

const viewAll = {
  fontSize: 12,
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 500,
};

const applyBtn = {
  marginTop: 8,
  background: '#1e3a8a',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '6px 14px',
  fontSize: 12,
  fontWeight: 700,
  cursor: 'pointer',
};

const tickerItems = [
  'HACKATHON', 'CULTURAL FEST', 'TECH TALKS', 'WORKSHOPS',
  'SPORTS MEET', 'ORIENTATION', 'SEMINARS', 'INNOVATION',
  'LEADERSHIP', 'NETWORKING', 'COMPETITIONS', 'CREATIVITY',
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const transitionRef = useRef(null);

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


  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ══ LAYER 0: Fixed background — stays locked behind everything ══ */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* ══ LAYER 1: Spacer — gives the page scroll room while bg stays fixed ══ */}
      <div style={{ height: '100vh', position: 'relative', zIndex: 1 }} />

      {/* ══ LAYER 2: Curtain — slides up and covers the fixed background ══ */}
      <div style={{ position: 'relative', zIndex: 10 }}>


        {/* ── Main Content (cards) ── */}
        <div style={{ background: '#fdfcfa' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>

            {/* ── Row 1: Upcoming Events | Event Detail | Latest Announcements ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 16, marginBottom: 16 }}>

              {/* Upcoming Events */}
              <div style={card}>
                <div style={cardHeader}>
                  <span style={sectionTitle}>Upcoming Events</span>
                  <a href="#" style={viewAll}>View All</a>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 12 }}>
                  <div style={{ background: '#1e3a8a', borderRadius: 8, padding: '10px 8px', minWidth: 80, textAlign: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}>
                    <div style={{ fontSize: 22 }}>🏆</div>
                    SMART INDIA<br />HACKATHON<br />2026
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Smart India Hackathon 2026</div>
                    <span style={{ background: '#dcfce7', color: '#16a34a', fontSize: 11, padding: '2px 8px', borderRadius: 12, fontWeight: 600 }}>Registration Open</span>
                    <div style={{ fontSize: 12, color: '#dc2626', marginTop: 6 }}>📅 Last Date: <b>18 Sept 2025</b></div>
                    <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>India&apos;s biggest innovation competition. Solve real-world problems &amp; create impact.</div>
                    <button style={applyBtn}>Apply Now →</button>
                  </div>
                </div>
              </div>

              {/* Event Detail Center */}
              <div style={card}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Smart India Hackathon 2026</div>
                <div style={{ fontSize: 13, color: '#555', marginBottom: 14 }}>
                  Smart India Hackathon is India&apos;s biggest innovation competition where students solve real-world problems provided by ministries, industries and organizations.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, textAlign: 'center' }}>
                  {[
                    { icon: '🌐', label: 'Visit', sub: 'sih.gov.in' },
                    { icon: '📜', label: 'Rules &', sub: 'Guidelines' },
                    { icon: '⬇️', label: 'Download', sub: 'Themes' },
                    { icon: '📄', label: 'Problem', sub: 'Statements' },
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#f0f4ff', borderRadius: 8, padding: '12px 6px', cursor: 'pointer' }}>
                      <div style={{ fontSize: 22 }}>{item.icon}</div>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Announcements */}
              <div style={card}>
                <div style={cardHeader}>
                  <span style={sectionTitle}>📢 Latest Announcements</span>
                </div>
                {announcements.map((a, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < announcements.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: a.color, display: 'inline-block' }} />
                      <span style={{ fontSize: 12 }}>{a.text}</span>
                    </div>
                    <span style={{ fontSize: 11, color: '#9ca3af', whiteSpace: 'nowrap' }}>{a.date}</span>
                  </div>
                ))}
                <a href="#" style={{ ...viewAll, display: 'block', marginTop: 10, textAlign: 'center' }}>View All Announcements</a>
              </div>
            </div>

            {/* ── Row 2: About | Timeline | Apply | Quick Links ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 0.8fr', gap: 16, marginBottom: 16 }}>

              {/* About SIH 2026 */}
              <div style={card}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>About SIH 2026</div>
                {[
                  { icon: '🎓', label: 'Eligibility', val: 'B.Tech / M.Tech / MCA Students' },
                  { icon: '👥', label: 'Team Size', val: '6 Members' },
                  { icon: '🏷️', label: 'Categories', val: 'Hardware & Software' },
                  { icon: '📋', label: 'Problem Statements', val: 'Ministries, Industries & PSUs' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>{item.label}</div>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div style={card}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Timeline</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 20, left: '10%', right: '10%', height: 2, background: '#c7d2fe', zIndex: 0 }} />
                  {timelineSteps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, flex: 1 }}>
                      <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#e0e7ff', border: '2px solid #6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 6 }}>
                        {step.icon}
                      </div>
                      <div style={{ fontSize: 10, textAlign: 'center', color: '#374151', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{step.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply For Team Registration */}
              <div style={card}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Apply For Team Registration</div>
                <div style={{ fontSize: 12, color: '#555', marginBottom: 12 }}>Apply for your team registration through Google Form</div>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#1e3a8a', color: '#fff', borderRadius: 8, padding: '12px 16px', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                  <span style={{ fontSize: 22 }}>G</span> Apply Now
                </a>
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 8 }}>Registration will open till 18 Sept 2025</div>
              </div>

              {/* Quick Links */}
              <div style={card}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Quick Links</div>
                {quickLinks.map((link, i) => (
                  <a key={i} href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < quickLinks.length - 1 ? '1px solid #f0f0f0' : 'none', textDecoration: 'none', color: '#2563eb', fontSize: 13 }}>
                    {link} <span style={{ color: '#9ca3af' }}>›</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Row 3: Previous Events | FAQs ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>

              {/* Previous Events */}
              <div style={card}>
                <div style={cardHeader}>
                  <span style={sectionTitle}>Previous Events</span>
                  <a href="#" style={viewAll}>View All</a>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginTop: 12 }}>
                  {prevEvents.map((ev, i) => (
                    <div key={i} style={{ textAlign: 'center', cursor: 'pointer' }}>
                      <img src={ev.img} alt={ev.title} style={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 8, marginBottom: 6 }} />
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#374151' }}>{ev.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div style={card}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>FAQs</div>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', padding: '10px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, fontWeight: 500, color: '#111827' }}
                    >
                      {faq.q}
                      <span style={{ color: '#6b7280', fontSize: 18 }}>{openFaq === i ? '∧' : '∨'}</span>
                    </button>
                    {openFaq === i && (
                      <div style={{ fontSize: 12, color: '#6b7280', paddingBottom: 10, paddingRight: 8 }}>{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
