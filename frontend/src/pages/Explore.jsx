import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/banner.png';

export default function Explore() {
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
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        
        /* Hide scrollbar completely but allow scrolling */
        ::-webkit-scrollbar {
          display: none;
        }
        html, body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .glass-card {
          background: rgba(15, 25, 60, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
        }

        .glass-card-inner {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
      `}</style>

      {/* Fixed Background Image */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
      }} />

      {/* Dark blue gradient overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10, 25, 70, 0.95) 0%, rgba(10, 25, 70, 0.85) 50%, rgba(10, 25, 70, 0.95) 100%)',
        zIndex: -1,
      }} />

      {/* Content */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-6 pt-12 pb-20 relative z-10 text-white">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-4">
          <h1 style={{ fontFamily: "'Dancing Script', cursive", color: '#f59e0b', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.2 }}>Explore Hub</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Discover upcoming hackathons, tech events, and innovation challenges across the campus ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Hero / Upcoming Events Card */}
          <div className="glass-card md:col-span-8 p-6 flex flex-col gap-6 relative overflow-hidden group transition-all duration-300 hover:border-white/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="flex justify-between items-center z-10">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-amber-500" data-icon="event">event</span>
                Featured Upcoming
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center z-10 glass-card-inner p-5">
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px] aspect-square shadow-lg backdrop-blur-md">
                 <svg className="mb-2" fill="none" height="42" viewBox="0 0 100 100" width="42" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15C32.878 15 19 28.878 19 46C19 56.634 24.341 66.024 32.5 71.659V80C32.5 82.76 34.74 85 37.5 85H62.5C65.26 85 67.5 82.76 67.5 80V71.659C75.659 66.024 81 56.634 81 46C81 28.878 67.122 15 50 15Z" fill="#0f172a" stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                  <path d="M50 17C33.984 17 21 29.984 21 46C21 55.772 25.811 64.444 33.153 69.642C33.722 70.046 34.062 70.7 34.062 71.4V78.5C34.062 79.88 35.182 81 36.562 81H50V17Z" fill="#fcd34d" opacity="0.4"></path>
                  <circle cx="50" cy="46" fill="#0f172a" r="14"></circle>
                  <circle cx="50" cy="46" fill="none" r="10" stroke="#f59e0b" strokeWidth="2"></circle>
                  <path d="M50 36V56M40 46H60" stroke="#f59e0b" strokeWidth="1.5"></path>
                  <path d="M43 39L57 53M43 53L57 39" stroke="#f59e0b" strokeWidth="1.5"></path>
                </svg>
                <div className="text-white text-sm font-bold tracking-widest text-center leading-tight">SIH<br/>2026</div>
              </div>
              
              <div className="flex-grow flex flex-col justify-between gap-4 w-full">
                <div>
                  <div className="inline-flex mb-2">
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/30 font-semibold">Registration Open</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">Smart India Hackathon 2026</h3>
                  <p className="text-gray-300 text-sm mt-1 leading-relaxed">India's biggest innovation competition. Solve real-world problems & create impact across the nation.</p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                      <span className="material-symbols-outlined text-[14px] text-amber-400">workspace_premium</span>
                      Prize Pool: ₹1,00,000+
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                      <span className="material-symbols-outlined text-[14px] text-amber-400">group</span>
                      Team of 6
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                  <div className="flex items-center gap-2 text-sm text-red-400 font-medium">
                    <span className="material-symbols-outlined text-[18px]">calendar_clock</span>
                    Last Date: 18 Sept 2025
                  </div>
                  <a href="https://docs.google.com/forms/d/1wlgQvyCGKRkThI-G9CrMJyzzDPQ94_8owlLaXiPATB0/viewform?pli=1&pli=1&edit_requested=true" target="_blank" rel="noopener noreferrer" className="no-underline shrink-0">
                    <button className="bg-amber-500 text-slate-900 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-400 transition-all flex items-center gap-2 whitespace-nowrap shadow-[0_4px_16px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_24px_rgba(245,158,11,0.5)] transform hover:-translate-y-0.5">
                      Apply for team registration
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details Links Grid */}
          <div className="glass-card md:col-span-4 p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-1">Quick Resources</h3>
            <p className="text-sm text-gray-400 mb-2">Essential links and guidelines for SIH 2026 participants.</p>
            <div className="grid grid-cols-2 gap-3 flex-grow">
              <a className="glass-card-inner p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all group no-underline" href="https://sih.gov.in" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-amber-400 text-[28px] group-hover:scale-110 transition-transform">language</span>
                <div className="text-center">
                  <div className="text-white text-sm font-semibold mt-1">Visit Site</div>
                  <div className="text-gray-400 text-[11px]">sih.gov.in</div>
                </div>
              </a>
              <a className="glass-card-inner p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all group no-underline" href="https://sih.gov.in/#process-timeline" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-amber-400 text-[28px] group-hover:scale-110 transition-transform">timeline</span>
                <div className="text-center">
                  <div className="text-white text-sm font-semibold mt-1">Timeline</div>
                  <div className="text-gray-400 text-[11px]">Process</div>
                </div>
              </a>
              <a className="glass-card-inner p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all group no-underline" href="https://sih.gov.in/letters/2026/SIH2026-IDEA-Presentation-Format.pptx" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-amber-400 text-[28px] group-hover:scale-110 transition-transform">download</span>
                <div className="text-center">
                  <div className="text-white text-sm font-semibold mt-1">Idea Format</div>
                  <div className="text-gray-400 text-[11px]">Download PPTX</div>
                </div>
              </a>
              <a className="glass-card-inner p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all group no-underline" href="https://sih.gov.in/sih2025PS" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-amber-400 text-[28px] group-hover:scale-110 transition-transform">description</span>
                <div className="text-center">
                  <div className="text-white text-sm font-semibold mt-1">Problems</div>
                  <div className="text-gray-400 text-[11px]">Statements</div>
                </div>
              </a>
            </div>
          </div>

          {/* Timeline Full Width */}
          <div className="glass-card col-span-1 md:col-span-12 p-6 lg:p-8 flex flex-col gap-8 relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-500">timeline</span>
                  Timeline & Milestones
                </h2>
                <p className="text-gray-400 text-sm mt-1">Key phases and important dates for participation in SIH 2026.</p>
              </div>
              <div className="glass-card-inner px-4 py-2 rounded-full flex items-center gap-2 text-sm text-white border-white/20">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                Phase 1: Registration Active
              </div>
            </div>
            
            <div className="relative w-full py-4 overflow-x-auto no-scrollbar">
              {/* Track Line */}
              <div className="absolute top-[42px] left-8 right-8 h-[2px] bg-white/20 z-0"></div>
              
              <div className="flex justify-between items-start min-w-[800px] relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative">
                  <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center border-4 border-[#0a1946] shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10 relative">
                    <span className="material-symbols-outlined text-slate-900 icon-fill font-bold">app_registration</span>
                    <span className="absolute -top-1 -right-1 bg-[#0a1946] text-amber-500 text-[10px] px-1.5 rounded-full border border-amber-500/50 font-bold">01</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Registration Open</div>
                    <div className="text-amber-400 text-xs mb-1.5">1 Aug - 18 Sep</div>
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold border border-amber-500/30">Active</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full glass-card-inner flex items-center justify-center border-2 border-white/30 z-10 relative">
                    <span className="material-symbols-outlined text-gray-300">rule_folder</span>
                    <span className="absolute -top-1 -right-1 bg-[#0a1946] text-gray-300 text-[10px] px-1.5 rounded-full border border-white/30">02</span>
                  </div>
                  <div>
                    <div className="text-gray-200 font-semibold text-sm">Problem Selection</div>
                    <div className="text-gray-400 text-xs mb-1.5">19 Sep - 25 Sep</div>
                    <span className="bg-white/10 text-gray-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-white/20">Upcoming</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full glass-card-inner flex items-center justify-center border-2 border-white/30 z-10 relative">
                    <span className="material-symbols-outlined text-gray-300">search_check</span>
                    <span className="absolute -top-1 -right-1 bg-[#0a1946] text-gray-300 text-[10px] px-1.5 rounded-full border border-white/30">03</span>
                  </div>
                  <div>
                    <div className="text-gray-200 font-semibold text-sm">Internal Screening</div>
                    <div className="text-gray-400 text-xs mb-1.5">26 Sep - 5 Oct</div>
                    <span className="bg-white/10 text-gray-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-white/20">Upcoming</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full glass-card-inner flex items-center justify-center border-2 border-white/30 z-10 relative">
                    <span className="material-symbols-outlined text-gray-300">groups</span>
                    <span className="absolute -top-1 -right-1 bg-[#0a1946] text-gray-300 text-[10px] px-1.5 rounded-full border border-white/30">04</span>
                  </div>
                  <div>
                    <div className="text-gray-200 font-semibold text-sm">College Final Team</div>
                    <div className="text-gray-400 text-xs mb-1.5">10 Oct 2025</div>
                    <span className="bg-white/10 text-gray-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-white/20">Upcoming</span>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full glass-card-inner flex items-center justify-center border-2 border-white/30 z-10 relative">
                    <span className="material-symbols-outlined text-gray-300">social_leaderboard</span>
                    <span className="absolute -top-1 -right-1 bg-[#0a1946] text-gray-300 text-[10px] px-1.5 rounded-full border border-white/30">05</span>
                  </div>
                  <div>
                    <div className="text-gray-200 font-semibold text-sm">Grand Finale</div>
                    <div className="text-gray-400 text-xs mb-1.5">Nov - Dec 2025</div>
                    <span className="bg-white/10 text-gray-300 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider border border-white/20">Finale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About SIH & Quick Links Row */}
          <div className="glass-card md:col-span-5 p-4 flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white">About SIH 2026</h2>
            <div className="flex flex-col gap-3">
              <div className="glass-card-inner p-3 flex gap-3 items-center hover:border-white/40 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">school</span>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] mb-0.5 uppercase tracking-wider font-semibold">Eligibility</div>
                  <div className="text-white text-xs font-medium leading-snug">B.Tech/M.Tech/MCA</div>
                </div>
              </div>
              <div className="glass-card-inner p-3 flex gap-3 items-center hover:border-white/40 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">group</span>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] mb-0.5 uppercase tracking-wider font-semibold">Team Size</div>
                  <div className="text-white text-xs font-medium leading-snug">6 Members (Min 1 Female)</div>
                </div>
              </div>
              <div className="glass-card-inner p-3 flex gap-3 items-center hover:border-white/40 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">category</span>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] mb-0.5 uppercase tracking-wider font-semibold">Categories</div>
                  <div className="text-white text-xs font-medium leading-snug">Hardware & Software</div>
                </div>
              </div>
              <div className="glass-card-inner p-3 flex gap-3 items-center hover:border-white/40 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">assignment_ind</span>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] mb-0.5 uppercase tracking-wider font-semibold">Problems</div>
                  <div className="text-white text-xs font-medium leading-snug">Govt & Industries</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs (Simplified for Space/Design) */}
          <div className="glass-card md:col-span-7 p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white mb-2">FAQs</h2>
            <div className="flex flex-col divide-y divide-white/10">
              <details className="group py-3" open>
                <summary className="flex justify-between items-center text-sm font-semibold text-white cursor-pointer list-none">
                  <span>Who can participate in SIH 2026?</span>
                  <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="text-[13px] text-gray-300 mt-2 leading-relaxed">Any undergraduate or postgraduate student enrolled in a recognized Indian institution can participate.</p>
              </details>
              <details className="group py-3">
                <summary className="flex justify-between items-center text-sm font-semibold text-white cursor-pointer list-none hover:text-amber-400 transition-colors">
                  <span>How many members are allowed in a team?</span>
                  <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="text-[13px] text-gray-300 mt-2 leading-relaxed">Each team must have exactly 6 members, with at most 1 mentor.</p>
              </details>
              <details className="group py-3">
                <summary className="flex justify-between items-center text-sm font-semibold text-white cursor-pointer list-none hover:text-amber-400 transition-colors">
                  <span>Can first year students participate?</span>
                  <span className="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="text-[13px] text-gray-300 mt-2 leading-relaxed">Yes, first year students are eligible to participate in SIH 2026.</p>
              </details>
            </div>
            <a className="mt-auto pt-4 text-amber-400 text-sm font-semibold hover:text-amber-300 inline-flex items-center gap-1 no-underline" href="https://sih.gov.in/faqs" target="_blank" rel="noopener noreferrer">
              View all FAQs <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
