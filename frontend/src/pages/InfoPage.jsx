import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function InfoPage() {
  const { type } = useParams();
  const [submitted, setSubmitted] = useState(false);

  // Dynamic content mapping
  const getContent = () => {
    switch (type) {
      case 'rules':
        return {
          title: 'SIH 2026 Rules & Guidelines',
          subtitle: 'Official eligibility criteria, team formation standards, and submission guidelines for Smart India Hackathon.',
          body: (
            <div className="flex flex-col gap-6">
              <div className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-3">
                <h3 className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                  Team Composition Rules
                </h3>
                <ul className="list-disc pl-5 text-on-surface-variant flex flex-col gap-2 text-sm leading-relaxed">
                  <li>Each team must consist of exactly <strong>6 members</strong>.</li>
                  <li>Having at least <strong>1 female member</strong> in the team is mandatory.</li>
                  <li>All team members must be enrolled undergraduate or postgraduate students of Poornima University.</li>
                  <li>A team can optionally designate up to <strong>2 mentors</strong> (academic or industry experts).</li>
                </ul>
              </div>

              <div className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-3">
                <h3 className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[24px]">gavel</span>
                  Submission & Evaluation Process
                </h3>
                <ul className="list-disc pl-5 text-on-surface-variant flex flex-col gap-2 text-sm leading-relaxed">
                  <li><strong>Phase 1 (Internal Hackathon):</strong> Teams must submit their ideas in the prescribed PPTX format. Submissions will be evaluated by internal expert panels.</li>
                  <li><strong>Phase 2 (Shortlisting):</strong> Top teams selected from the internal round will be nominated to the central SIH portal representing Poornima University.</li>
                  <li>Plagiarism in code, design, or presentation document will lead to immediate disqualification.</li>
                </ul>
              </div>
            </div>
          )
        };
      case 'about':
        return {
          title: 'About Poornima University',
          subtitle: 'Learn more about Poornima University’s commitment to education, technology research, and student innovation.',
          body: (
            <div className="flex flex-col gap-6">
              <div className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-4">
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Poornima University is a leading academic institution located in Jaipur, Rajasthan. Known for its state-of-the-art infrastructure, industry-integrated curriculum, and research focus, the university aims to foster a culture of innovative problem-solving and entrepreneurship.
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Our students actively participate in national hackathons, coding challenges, and corporate innovation hubs. The University Student Council, in coordination with the Department of Computer Engineering, hosts incubation drives and technical workshops to help student startups take flight.
                </p>
              </div>
            </div>
          )
        };
      case 'campus-life':
        return {
          title: 'Campus Life & Innovation Hub',
          subtitle: 'Explore campus clubs, coding societies, incubation events, and cultural student communities at Poornima.',
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-2">
                <span className="material-symbols-outlined text-secondary text-[32px]">code</span>
                <h4 className="font-bold text-on-surface text-sm mt-2">PU Coding Club</h4>
                <p className="text-on-surface-variant text-xs leading-relaxed">Weekly competitive programming drives, algorand bootcamps, and peer-to-peer web design challenges.</p>
              </div>
              <div className="bg-surface border border-outline-variant rounded-lg p-6 flex flex-col gap-2">
                <span className="material-symbols-outlined text-secondary text-[32px]">rocket_launch</span>
                <h4 className="font-bold text-on-surface text-sm mt-2">Incubation Cell</h4>
                <p className="text-on-surface-variant text-xs leading-relaxed">Mentorship channels and prototype funding resources to transform student hackathon projects into commercial ventures.</p>
              </div>
            </div>
          )
        };
      case 'contact':
        return {
          title: 'Contact Event Support',
          subtitle: 'Got questions about SIH registrations or college-level screening? Write to us and we will assist you.',
          body: (
            <div className="bg-surface border border-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-6 max-w-xl mx-auto w-full">
              {submitted ? (
                <div className="text-center py-6 flex flex-col items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[48px] icon-fill">check_circle</span>
                  <h4 className="font-bold text-on-surface">Message Sent Successfully!</h4>
                  <p className="text-on-surface-variant text-xs">Thank you for writing. Our student coordinator team will respond to your registered email within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-surface border border-outline-variant rounded-[0.5rem] py-2 px-3.5 text-sm focus:outline-none focus:border-primary text-on-surface"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant">Registered Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="student@poornima.edu.in"
                      className="w-full bg-surface border border-outline-variant rounded-[0.5rem] py-2 px-3.5 text-sm focus:outline-none focus:border-primary text-on-surface"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant">Message or Inquiry</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Describe your question in detail (e.g. regarding team member swap, registration issues)..."
                      className="w-full bg-surface border border-outline-variant rounded-[0.5rem] py-2 px-3.5 text-sm focus:outline-none focus:border-primary text-on-surface resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary font-semibold text-sm py-3 rounded-full hover:bg-primary-fixed transition-colors mt-2"
                  >
                    Submit Support Request
                  </button>
                </form>
              )}
            </div>
          )
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          subtitle: 'Academic privacy declaration regarding student portal registration data.',
          body: (
            <div className="bg-surface border border-outline-variant rounded-lg p-6 text-on-surface-variant text-sm flex flex-col gap-4 leading-relaxed">
              <p>We respect your privacy. All information submitted on this portal (including student names, roll numbers, department profiles, and repository links) will be used solely for the coordination and screening of Smart India Hackathon 2026 entries.</p>
              <p>No student data is shared with third parties or external commercial databases. Data transmission to the central Ministry Innovation Cell portal is encrypted and conforms directly with government privacy mandates.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service & Code of Conduct',
          subtitle: 'Rules, participant agreements, and honor codes for campus innovations.',
          body: (
            <div className="bg-surface border border-outline-variant rounded-lg p-6 text-on-surface-variant text-sm flex flex-col gap-4 leading-relaxed">
              <p>By registering on this portal and submitting your hackathon project proposals, you agree to comply with the Poornima University Student Code of Conduct.</p>
              <p>All project prototype code submitted must be original work created by the registered team. Plagiarism, pre-built template copy-pasting, or unauthorized reuse of proprietary academic papers without due credit is strictly prohibited and subject to college disciplinary committees.</p>
            </div>
          )
        };
      default:
        return {
          title: 'University Information Hub',
          subtitle: 'Browse resource logs and event coordinates.',
          body: <div className="p-6 text-center text-on-surface-variant text-sm">Select an information category from the footer navigation links.</div>
        };
    }
  };

  const { title, subtitle, body } = getContent();

  return (
    <div className="bg-background dark:bg-background text-on-surface antialiased min-h-screen flex flex-col font-body-md text-body-md selection:bg-primary-container selection:text-primary">
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant bg-background dark:bg-background/90 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
          <Link to="/" className="flex items-center gap-4 cursor-pointer active:opacity-80 no-underline">
            <span className="font-headline-md text-headline-md font-semibold text-primary dark:text-primary tracking-tight">Poornima University Event Hub</span>
          </Link>
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

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-gutter">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link to="/explore" className="inline-flex items-center gap-1 text-primary hover:text-on-background font-semibold no-underline text-[14px] transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Explore Hub
          </Link>
        </div>

        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="font-display-lg text-display-lg text-on-surface">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{subtitle}</p>
        </div>

        {/* Body Area */}
        <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-gutter">
          {body}
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg border-t border-outline-variant dark:border-outline-variant bg-surface-container-low dark:bg-surface-container-low mt-12">
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
