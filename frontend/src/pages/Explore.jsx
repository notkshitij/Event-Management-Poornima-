import React from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <div className="bg-background dark:bg-background text-on-surface antialiased min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary-container selection:text-primary">
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant bg-background dark:bg-background/90 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
          <Link to="/" className="flex items-center gap-4 cursor-pointer active:opacity-80 no-underline">
            <span className="font-headline-md text-headline-md font-semibold text-primary dark:text-primary tracking-tight">Poornima University Event Hub</span>
          </Link>
          {/* Navigation Links Removed */}

          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80 flex items-center justify-center relative">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80 flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: Bento Grid */}
      <main className="flex-grow pt-24 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-gutter">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="font-display-lg text-display-lg text-on-surface">Explore Hub</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Discover upcoming hackathons, tech events, and innovation challenges across the campus ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Hero / Upcoming Events Card */}
          <div className="md:col-span-8 bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-outline transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="flex justify-between items-center z-10">
              <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" data-icon="event">event</span>
                Featured Upcoming
              </h2>
              <a className="font-label-md text-label-md text-primary hover:text-on-surface transition-colors no-underline" href="#">View All Events →</a>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center z-10 bg-surface-container rounded-[1rem] p-4 border border-outline-variant/50">
              <div className="bg-surface border border-outline-variant rounded-[1rem] p-4 flex flex-col items-center justify-center min-w-[120px] aspect-square shadow-sm">
                <svg className="mb-2" fill="none" height="42" viewBox="0 0 100 100" width="42" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15C32.878 15 19 28.878 19 46C19 56.634 24.341 66.024 32.5 71.659V80C32.5 82.76 34.74 85 37.5 85H62.5C65.26 85 67.5 82.76 67.5 80V71.659C75.659 66.024 81 56.634 81 46C81 28.878 67.122 15 50 15Z" fill="#031427" stroke="#bec6e0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                  <path d="M50 17C33.984 17 21 29.984 21 46C21 55.772 25.811 64.444 33.153 69.642C33.722 70.046 34.062 70.7 34.062 71.4V78.5C34.062 79.88 35.182 81 36.562 81H50V17Z" fill="#b9c7e0" opacity="0.6"></path>
                  <circle cx="50" cy="46" fill="#031427" r="14"></circle>
                  <circle cx="50" cy="46" fill="none" r="10" stroke="#bec6e0" strokeWidth="2"></circle>
                  <path d="M50 36V56M40 46H60" stroke="#bec6e0" strokeWidth="1.5"></path>
                  <path d="M43 39L57 53M43 53L57 39" stroke="#bec6e0" strokeWidth="1.5"></path>
                </svg>
                <div className="font-label-sm text-label-sm text-on-surface text-center tracking-widest leading-tight">SIH<br/>2026</div>
              </div>
              <div className="flex-grow flex flex-col gap-2">
                <div className="inline-flex">
                  <span className="bg-primary-container text-on-primary-container font-label-sm text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-primary/20">Registration Open</span>
                </div>
                <h3 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">Smart India Hackathon 2026</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">India&apos;s biggest innovation competition. Solve real-world problems &amp; create impact across the nation.</p>
                <div className="flex items-center gap-2 font-label-md text-label-md text-error">
                  <span className="material-symbols-outlined text-[18px]">calendar_clock</span>
                  Last Date: 18 Sept 2025
                </div>
              </div>
              <Link to="/problems" className="no-underline">
                <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors flex items-center gap-2 whitespace-nowrap shadow-[0_0_12px_rgba(190,198,224,0.15)] hover:shadow-[0_0_20px_rgba(190,198,224,0.3)]">
                  Explore SIH
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Event Details Links Grid */}
          <div className="md:col-span-4 bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-4">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Quick Resources</h3>
            <p className="font-body-md text-[14px] text-on-surface-variant mb-4">Essential links and guidelines for SIH 2026 participants.</p>
            <div className="grid grid-cols-2 gap-3 flex-grow">
              <a className="bg-surface-container border border-outline-variant rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-surface-bright transition-all group no-underline" href="https://sih.gov.in" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">language</span>
                <div className="text-center">
                  <div className="font-label-md text-label-md text-on-surface">Visit Site</div>
                  <div className="font-body-md text-[11px] text-on-surface-variant">sih.gov.in</div>
                </div>
              </a>
              <Link className="bg-surface-container border border-outline-variant rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-surface-bright transition-all group no-underline" to="/info/rules">
                <span className="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">gavel</span>
                <div className="text-center">
                  <div className="font-label-md text-label-md text-on-surface">Rules</div>
                  <div className="font-body-md text-[11px] text-on-surface-variant">Guidelines</div>
                </div>
              </Link>
              <a className="bg-surface-container border border-outline-variant rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-surface-bright transition-all group no-underline" href="/SIH2026-IDEA-Presentation-Format-P-JnIknB.pptx" download="SIH2026-IDEA-Presentation-Format-P-JnIknB.pptx">

                <span className="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">download</span>
                <div className="text-center">
                  <div className="font-label-md text-label-md text-on-surface">Idea Format</div>
                  <div className="font-body-md text-[11px] text-on-surface-variant">Download PPTX</div>
                </div>
              </a>
              <Link className="bg-surface-container border border-outline-variant rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-surface-bright transition-all group no-underline" to="/problems">
                <span className="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">description</span>
                <div className="text-center">
                  <div className="font-label-md text-label-md text-on-surface">Problems</div>
                  <div className="font-body-md text-[11px] text-on-surface-variant">Statements</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Timeline Full Width */}
          <div className="col-span-1 md:col-span-12 bg-surface-container-low border border-outline-variant rounded-lg p-6 lg:p-8 flex flex-col gap-8 relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">timeline</span>
                  Timeline &amp; Milestones
                </h2>
                <p className="font-body-md text-[14px] text-on-surface-variant">Key phases and important dates for participation in SIH 2026.</p>
              </div>
              <div className="bg-surface-container border border-outline-variant px-4 py-2 rounded-full flex items-center gap-2 font-label-sm text-label-sm text-on-surface">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Phase 1: Registration Active
              </div>
            </div>
            
            <div className="relative w-full py-4 overflow-x-auto no-scrollbar">
              {/* Track Line */}
              <div className="absolute top-[42px] left-8 right-8 h-[2px] bg-outline-variant z-0"></div>
              
              <div className="flex justify-between items-start min-w-[800px] relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border-4 border-surface-container-low shadow-[0_0_15px_rgba(190,198,224,0.3)] z-10 relative">
                    <span className="material-symbols-outlined text-on-primary icon-fill">app_registration</span>
                    <span className="absolute -top-1 -right-1 bg-surface-container text-primary font-label-sm text-[10px] px-1.5 rounded-full border border-primary/30">01</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">Registration Open</div>
                    <div className="font-body-md text-[12px] text-primary mb-1">1 Aug - 18 Sep</div>
                    <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold">Active</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant z-10 relative">
                    <span className="material-symbols-outlined text-on-surface-variant">rule_folder</span>
                    <span className="absolute -top-1 -right-1 bg-surface text-on-surface-variant font-label-sm text-[10px] px-1.5 rounded-full border border-outline-variant">02</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">Problem Selection</div>
                    <div className="font-body-md text-[12px] text-on-surface-variant mb-1">19 Sep - 25 Sep</div>
                    <span className="bg-surface text-on-surface-variant border border-outline-variant text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold">Upcoming</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant z-10 relative">
                    <span className="material-symbols-outlined text-on-surface-variant">search_check</span>
                    <span className="absolute -top-1 -right-1 bg-surface text-on-surface-variant font-label-sm text-[10px] px-1.5 rounded-full border border-outline-variant">03</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">Internal Screening</div>
                    <div className="font-body-md text-[12px] text-on-surface-variant mb-1">26 Sep - 5 Oct</div>
                    <span className="bg-surface text-on-surface-variant border border-outline-variant text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold">Upcoming</span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant z-10 relative">
                    <span className="material-symbols-outlined text-on-surface-variant">groups</span>
                    <span className="absolute -top-1 -right-1 bg-surface text-on-surface-variant font-label-sm text-[10px] px-1.5 rounded-full border border-outline-variant">04</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">College Final Team</div>
                    <div className="font-body-md text-[12px] text-on-surface-variant mb-1">10 Oct 2025</div>
                    <span className="bg-surface text-on-surface-variant border border-outline-variant text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold">Upcoming</span>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center w-48 gap-3 relative opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant z-10 relative">
                    <span className="material-symbols-outlined text-on-surface-variant">social_leaderboard</span>
                    <span className="absolute -top-1 -right-1 bg-surface text-on-surface-variant font-label-sm text-[10px] px-1.5 rounded-full border border-outline-variant">05</span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface">Grand Finale</div>
                    <div className="font-body-md text-[12px] text-on-surface-variant mb-1">Nov - Dec 2025</div>
                    <span className="bg-surface text-on-surface-variant border border-outline-variant text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold">Finale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About SIH & Quick Links Row */}
          <div className="md:col-span-7 bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">About SIH 2026</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface border border-outline-variant rounded-[1rem] p-4 flex gap-4 items-start hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">school</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Eligibility</div>
                  <div className="font-body-md text-[14px] text-on-surface font-medium leading-snug">B.Tech / M.Tech / MCA Students</div>
                </div>
              </div>
              <div className="bg-surface border border-outline-variant rounded-[1rem] p-4 flex gap-4 items-start hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">group</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Team Size</div>
                  <div className="font-body-md text-[14px] text-on-surface font-medium leading-snug">6 Members (Min 1 Female)</div>
                </div>
              </div>
              <div className="bg-surface border border-outline-variant rounded-[1rem] p-4 flex gap-4 items-start hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">category</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Categories</div>
                  <div className="font-body-md text-[14px] text-on-surface font-medium leading-snug">Hardware &amp; Software</div>
                </div>
              </div>
              <div className="bg-surface border border-outline-variant rounded-[1rem] p-4 flex gap-4 items-start hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">assignment_ind</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Problems</div>
                  <div className="font-body-md text-[14px] text-on-surface font-medium leading-snug">Ministries &amp; Industries</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs (Simplified for Space/Design) */}
          <div className="md:col-span-5 bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-4">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">FAQs</h2>
            <div className="flex flex-col divide-y divide-outline-variant/50">
              <details className="group py-3" open>
                <summary className="flex justify-between items-center font-label-md text-label-md text-on-surface cursor-pointer list-none">
                  <span>Who can participate in SIH 2026?</span>
                  <span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="font-body-md text-[13px] text-on-surface-variant mt-2 leading-relaxed">Any undergraduate or postgraduate student enrolled in a recognized Indian institution can participate.</p>
              </details>
              <details className="group py-3">
                <summary className="flex justify-between items-center font-label-md text-label-md text-on-surface cursor-pointer list-none hover:text-primary transition-colors">
                  <span>How many members are allowed in a team?</span>
                  <span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="font-body-md text-[13px] text-on-surface-variant mt-2 leading-relaxed">Each team must have exactly 6 members, with at most 1 mentor.</p>
              </details>
              <details className="group py-3">
                <summary className="flex justify-between items-center font-label-md text-label-md text-on-surface cursor-pointer list-none hover:text-primary transition-colors">
                  <span>Can first year students participate?</span>
                  <span className="material-symbols-outlined text-on-surface-variant transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="font-body-md text-[13px] text-on-surface-variant mt-2 leading-relaxed">Yes, first year students are eligible to participate in SIH 2026.</p>
              </details>
            </div>
            <Link className="mt-auto pt-4 text-primary font-label-md text-label-md hover:underline inline-flex items-center gap-1 no-underline" to="/info/rules">
              View all FAQs <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg border-t border-outline-variant dark:border-outline-variant bg-surface-container-low dark:bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col gap-4">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">Poornima University Event Hub</span>
            <p className="font-body-md text-[14px] text-on-surface-variant">© 2024 Poornima University. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors duration-200 no-underline" to="/info/about">About PU</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors duration-200 no-underline" to="/info/campus-life">Campus Life</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors duration-200 no-underline" to="/info/contact">Contact Support</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors duration-200 no-underline" to="/info/privacy">Privacy Policy</Link>
            <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors duration-200 no-underline" to="/info/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
