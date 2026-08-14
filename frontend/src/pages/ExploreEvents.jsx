import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ── Data ──────────────────────────────────────────────────────────────────────
const categories = ['All', 'Hackathon', 'Cultural', 'Sports', 'Tech Talk', 'Workshop', 'Seminar'];

const events = [
  {
    id: 1, category: 'Hackathon', title: 'Smart India Hackathon 2026', date: '18 Sept 2025',
    location: 'Poornima University, Jaipur', status: 'Registration Open', statusColor: '#16a34a', statusBg: '#dcfce7',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=220&fit=crop',
    tags: ['Innovation', 'Coding', 'Prizes'], participants: '500+', prize: '₹10L',
    desc: 'India\'s biggest national level hackathon where students solve real-world problems.',
  },
  {
    id: 2, category: 'Cultural', title: 'Rang Mahotsav – Cultural Fest', date: '5 Oct 2025',
    location: 'Main Auditorium, PU', status: 'Coming Soon', statusColor: '#d97706', statusBg: '#fef3c7',
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=220&fit=crop',
    tags: ['Dance', 'Music', 'Art'], participants: '1000+', prize: '₹2L',
    desc: 'A vibrant celebration of culture, art, music, and dance from across the country.',
  },
  {
    id: 3, category: 'Tech Talk', title: 'AI & Future Tech Summit', date: '22 Aug 2025',
    location: 'Seminar Hall B, PU', status: 'Registration Open', statusColor: '#16a34a', statusBg: '#dcfce7',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop',
    tags: ['AI', 'ML', 'Deep Learning'], participants: '300+', prize: null,
    desc: 'Industry experts share insights on Artificial Intelligence, Machine Learning and emerging tech.',
  },
  {
    id: 4, category: 'Sports', title: 'Inter-College Sports Meet 2025', date: '12 Nov 2025',
    location: 'Sports Complex, PU', status: 'Coming Soon', statusColor: '#d97706', statusBg: '#fef3c7',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=220&fit=crop',
    tags: ['Cricket', 'Football', 'Athletics'], participants: '800+', prize: '₹1L',
    desc: 'Annual inter-college sports championship featuring 10+ disciplines across 20 colleges.',
  },
  {
    id: 5, category: 'Workshop', title: 'Full-Stack Web Dev Bootcamp', date: '30 Aug 2025',
    location: 'Lab 3, CSE Block', status: 'Registration Open', statusColor: '#16a34a', statusBg: '#dcfce7',
    img: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=220&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'], participants: '80', prize: null,
    desc: '3-day intensive bootcamp on modern full-stack development with hands-on projects.',
  },
  {
    id: 6, category: 'Seminar', title: 'Startup & Entrepreneurship Conclave', date: '8 Sept 2025',
    location: 'Convention Hall, PU', status: 'Registration Open', statusColor: '#16a34a', statusBg: '#dcfce7',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=220&fit=crop',
    tags: ['Startup', 'Funding', 'Pitch'], participants: '400+', prize: '₹5L',
    desc: 'Connect with investors, mentors and fellow entrepreneurs. Pitch your idea to win.',
  },
  {
    id: 7, category: 'Hackathon', title: 'CodeStorm 48-Hour Hackathon', date: '1 Oct 2025',
    location: 'Innovation Hub, PU', status: 'Coming Soon', statusColor: '#d97706', statusBg: '#fef3c7',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=220&fit=crop',
    tags: ['48 Hours', 'Open Theme', 'Team'], participants: '200+', prize: '₹3L',
    desc: 'An intense 48-hour hackathon with open theme — build anything that solves a problem!',
  },
  {
    id: 8, category: 'Cultural', title: 'Poornima Talent Hunt 2025', date: '20 Sept 2025',
    location: 'Open Air Theatre, PU', status: 'Registration Open', statusColor: '#16a34a', statusBg: '#dcfce7',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=220&fit=crop',
    tags: ['Singing', 'Acting', 'Stand-up'], participants: '250+', prize: '₹75K',
    desc: 'Showcase your talent in singing, dancing, acting, and comedy on a grand stage.',
  },
  {
    id: 9, category: 'Workshop', title: 'Cybersecurity & Ethical Hacking', date: '15 Sept 2025',
    location: 'Security Lab, PU', status: 'Registration Open', statusColor: '#16a34a', statusBg: '#dcfce7',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=220&fit=crop',
    tags: ['Ethical Hacking', 'CTF', 'Security'], participants: '60', prize: null,
    desc: 'Learn penetration testing, CTF challenges and ethical hacking techniques hands-on.',
  },
];

const upcoming = [
  { title: 'AI Summit', date: '22 Aug', color: '#6366f1' },
  { title: 'Web Dev Bootcamp', date: '30 Aug', color: '#10b981' },
  { title: 'Startup Conclave', date: '8 Sept', color: '#f59e0b' },
  { title: 'SIH 2026', date: '18 Sept', color: '#ef4444' },
];

// ── Shared Styles ──────────────────────────────────────────────────────────────
const styles = {
  page: { minHeight: '100vh', background: '#f0f2f5', fontFamily: "'Segoe UI', Arial, sans-serif" },
  navbar: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'rgba(15,23,42,0.96)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    padding: '0 32px', height: 60,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  navBrand: { color: '#fff', fontWeight: 800, fontSize: 20, textDecoration: 'none', letterSpacing: '-0.5px' },
  navLinks: { display: 'flex', gap: 28, alignItems: 'center' },
  navLink: { color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' },
  navBtn: {
    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    color: '#fff', border: 'none', borderRadius: 8,
    padding: '8px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
  },
  hero: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
    padding: '48px 32px 40px', textAlign: 'center',
  },
  heroTag: {
    display: 'inline-block', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)',
    color: '#a5b4fc', fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 20, marginBottom: 16,
  },
  heroTitle: { color: '#fff', fontSize: 38, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-1px' },
  heroSub: { color: 'rgba(255,255,255,0.6)', fontSize: 16, margin: '0 0 28px' },
  searchBar: {
    display: 'flex', gap: 12, maxWidth: 640, margin: '0 auto',
    background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '8px 8px 8px 20px',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1, background: 'none', border: 'none', outline: 'none',
    color: '#fff', fontSize: 15, '::placeholder': { color: 'rgba(255,255,255,0.4)' },
  },
  searchBtn: {
    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff',
    border: 'none', borderRadius: 10, padding: '10px 22px', fontSize: 14, fontWeight: 700, cursor: 'pointer',
  },
  stats: { display: 'flex', justifyContent: 'center', gap: 48, marginTop: 32 },
  statItem: { textAlign: 'center' },
  statNum: { color: '#fff', fontSize: 24, fontWeight: 800 },
  statLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 2 },
  body: { maxWidth: 1200, margin: '0 auto', padding: '32px 16px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 },
  tabs: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 },
  tab: {
    padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600,
    border: '1.5px solid #e5e7eb', cursor: 'pointer', transition: 'all 0.2s',
    background: '#fff', color: '#374151',
  },
  tabActive: {
    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    color: '#fff', border: '1.5px solid transparent',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 },
  card: {
    background: '#fff', borderRadius: 14, overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
  cardImg: { width: '100%', height: 160, objectFit: 'cover' },
  cardBody: { padding: '14px 16px 16px' },
  cardCat: { fontSize: 11, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: 0.5 },
  cardTitle: { fontWeight: 700, fontSize: 15, color: '#111827', margin: '4px 0 6px', lineHeight: 1.3 },
  cardDesc: { fontSize: 12, color: '#6b7280', lineHeight: 1.5, marginBottom: 10 },
  cardMeta: { display: 'flex', gap: 12, fontSize: 11, color: '#9ca3af', marginBottom: 10 },
  tags: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 },
  tag: { background: '#f0f4ff', color: '#6366f1', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12 },
  cardFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: 10 },
  registerBtn: {
    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff',
    border: 'none', borderRadius: 8, padding: '7px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer',
  },
  sidebar: { display: 'flex', flexDirection: 'column', gap: 16 },
  sideCard: { background: '#fff', borderRadius: 14, padding: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  sideTitle: { fontWeight: 700, fontSize: 14, color: '#111827', marginBottom: 14 },
  filterLabel: { fontSize: 12, fontWeight: 600, color: '#6b7280', marginBottom: 6, marginTop: 12 },
  filterSelect: {
    width: '100%', padding: '8px 10px', borderRadius: 8, border: '1.5px solid #e5e7eb',
    fontSize: 13, color: '#374151', outline: 'none', background: '#fff',
  },
};

// ── Component ──────────────────────────────────────────────────────────────────
export default function ExploreEvents() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date');
  const [statusFilter, setStatusFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered = events.filter(e => {
    const matchCat = activeCategory === 'All' || e.category === activeCategory;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.desc.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchCat && matchSearch && matchStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'title') return a.title.localeCompare(b.title);
    if (sort === 'participants') return parseInt(b.participants) - parseInt(a.participants);
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div style={styles.page}>
      {/* ── Navbar ── */}
      <nav style={styles.navbar}>
        <Link to="/" style={styles.navBrand}>🎓 Poornima Events</Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/explore" style={{ ...styles.navLink, color: '#a5b4fc' }}>Explore Events</Link>
          <a href="#" style={styles.navLink}>My Events</a>
          <a href="#" style={styles.navLink}>About</a>
          <button style={styles.navBtn}>Login</button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div style={styles.hero}>
        <span style={styles.heroTag}>🚀 New events added weekly</span>
        <h1 style={styles.heroTitle}>Explore Events at Poornima</h1>
        <p style={styles.heroSub}>Discover hackathons, cultural fests, workshops, tech talks & more</p>
        <div style={styles.searchBar}>
          <span style={{ fontSize: 18, opacity: 0.6 }}>🔍</span>
          <input
            style={{ ...styles.searchInput, width: '100%' }}
            placeholder="Search events, topics, categories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button style={styles.searchBtn}>Search</button>
        </div>
        <div style={styles.stats}>
          {[{ num: '50+', label: 'Events This Year' }, { num: '5K+', label: 'Participants' }, { num: '20+', label: 'Categories' }, { num: '₹25L+', label: 'Prize Pool' }].map((s, i) => (
            <div key={i} style={styles.statItem}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={styles.body}>
        {/* ── Left: Events Grid ── */}
        <div>
          {/* Category Tabs */}
          <div style={styles.tabs}>
            {categories.map(cat => (
              <button
                key={cat}
                style={{ ...styles.tab, ...(activeCategory === cat ? styles.tabActive : {}) }}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count + Sort */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
              Showing <b style={{ color: '#111' }}>{sorted.length}</b> events
            </span>
            <select
              style={{ padding: '6px 12px', borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 13, color: '#374151', outline: 'none' }}
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="participants">Sort by Participants</option>
            </select>
          </div>

          {/* Cards Grid */}
          <div style={styles.grid}>
            {sorted.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 0', color: '#9ca3af' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>No events found</div>
                <div style={{ fontSize: 13 }}>Try a different search or category</div>
              </div>
            ) : sorted.map(event => (
              <div
                key={event.id}
                style={{
                  ...styles.card,
                  transform: hoveredCard === event.id ? 'translateY(-4px)' : 'none',
                  boxShadow: hoveredCard === event.id ? '0 12px 32px rgba(99,102,241,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ position: 'relative' }}>
                  <img src={event.img} alt={event.title} style={styles.cardImg} />
                  <span style={{
                    position: 'absolute', top: 10, right: 10,
                    background: event.statusBg, color: event.statusColor,
                    fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 12,
                  }}>{event.status}</span>
                  <span style={{
                    position: 'absolute', top: 10, left: 10,
                    background: 'rgba(0,0,0,0.55)', color: '#fff',
                    fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12,
                  }}>{event.category}</span>
                </div>
                <div style={styles.cardBody}>
                  <div style={styles.cardTitle}>{event.title}</div>
                  <div style={styles.cardDesc}>{event.desc}</div>
                  <div style={styles.cardMeta}>
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location.split(',')[0]}</span>
                    <span>👥 {event.participants}</span>
                  </div>
                  <div style={styles.tags}>
                    {event.tags.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                  </div>
                  <div style={styles.cardFooter}>
                    {event.prize ? (
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#16a34a' }}>🏆 {event.prize}</span>
                    ) : (
                      <span style={{ fontSize: 12, color: '#9ca3af' }}>Free Entry</span>
                    )}
                    <button style={styles.registerBtn}>Register Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Sidebar ── */}
        <div style={styles.sidebar}>
          {/* Filters */}
          <div style={styles.sideCard}>
            <div style={styles.sideTitle}>🎛️ Filters</div>
            <div style={styles.filterLabel}>Status</div>
            <select style={styles.filterSelect} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option>All</option>
              <option>Registration Open</option>
              <option>Coming Soon</option>
            </select>
            <div style={styles.filterLabel}>Category</div>
            <select style={styles.filterSelect} value={activeCategory} onChange={e => setActiveCategory(e.target.value)}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <div style={styles.filterLabel}>Sort By</div>
            <select style={styles.filterSelect} value={sort} onChange={e => setSort(e.target.value)}>
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="participants">Participants</option>
            </select>
            <button
              style={{ ...styles.registerBtn, width: '100%', marginTop: 16, padding: '10px', fontSize: 13 }}
              onClick={() => { setActiveCategory('All'); setStatusFilter('All'); setSearch(''); setSort('date'); }}
            >Reset Filters</button>
          </div>

          {/* Featured Event */}
          <div style={{ ...styles.sideCard, background: 'linear-gradient(135deg,#0f172a,#1e1b4b)', color: '#fff' }}>
            <div style={{ ...styles.sideTitle, color: '#a5b4fc' }}>⭐ Featured Event</div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=160&fit=crop"
              alt="SIH 2026"
              style={{ width: '100%', borderRadius: 10, marginBottom: 12 }}
            />
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Smart India Hackathon 2026</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>
              India's biggest innovation hackathon. Last date: 18 Sept 2025.
            </div>
            <button style={{ ...styles.registerBtn, width: '100%', padding: '10px', fontSize: 13 }}>Register Now →</button>
          </div>

          {/* Upcoming */}
          <div style={styles.sideCard}>
            <div style={styles.sideTitle}>🗓️ Upcoming Deadlines</div>
            {upcoming.map((u, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < upcoming.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: u.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: u.color, flexShrink: 0 }}>{u.date}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{u.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
