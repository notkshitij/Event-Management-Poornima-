import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const problemStatementsList = [
  {
    id: 'SIH1280',
    title: 'Student Performance Analysis and Feedback System',
    ministry: 'Ministry of Education',
    category: 'Software',
    description: 'Design an AI-based system to analyze student performances across boards and generate personalized feedback reports to help educators improve outcomes and pinpoint skill gaps.',
    domain: 'Smart Education',
    difficulty: 'Medium'
  },
  {
    id: 'SIH1281',
    title: 'Low-Cost IoT Soil Moisture and Nutrient Sensor',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    category: 'Hardware',
    description: 'Develop a portable, low-cost sensor network for real-time monitoring of soil health parameters (NPK levels, moisture) to optimize irrigation and fertilizer usage.',
    domain: 'Agriculture & Rural Development',
    difficulty: 'Hard'
  },
  {
    id: 'SIH1282',
    title: 'AI-Based Pothole Detection and Road Quality Assessment',
    ministry: 'Ministry of Road Transport & Highways',
    category: 'Software',
    description: 'Build a mobile application that uses smartphone sensors and camera feeds to automatically detect potholes and assess road condition scores for public works tracking.',
    domain: 'Smart Vehicles & Transportation',
    difficulty: 'Medium'
  },
  {
    id: 'SIH1283',
    title: 'Blockchain Drug Supply Chain Tracking System',
    ministry: 'Ministry of Health and Family Welfare',
    category: 'Software',
    description: 'Secure and verify the distribution of life-saving medicines from manufacturing to hospital delivery, preventing counterfeit products from entering the supply chain.',
    domain: 'MedTech & HealthTech',
    difficulty: 'Hard'
  },
  {
    id: 'SIH1284',
    title: 'Smart Water Leakage Detection System in Urban Pipelines',
    ministry: 'Ministry of Jal Shakti',
    category: 'Hardware',
    description: 'Develop acoustic sensors and data-transmitting nodes that attach to municipal water lines to locate leak points through vibration and sound analysis.',
    domain: 'Clean Water & Sanitation',
    difficulty: 'Hard'
  },
  {
    id: 'SIH1285',
    title: 'Real-time Crowdsourced Traffic Management System',
    ministry: 'Ministry of Urban Development',
    category: 'Software',
    description: 'Implement a crowd-sourced platform that gathers real-time vehicle velocity data to coordinate traffic lights dynamically and reduce urban gridlocks.',
    domain: 'Smart Cities',
    difficulty: 'Medium'
  },
  {
    id: 'SIH1286',
    title: 'AI Video Analytics for Safety and Compliance',
    ministry: 'Ministry of Labour & Employment',
    category: 'Software',
    description: 'Detect worker safety compliance (helmets, vests) in industrial environments automatically from existing CCTV feeds and trigger warnings.',
    domain: 'Industrial Safety',
    difficulty: 'Medium'
  },
  {
    id: 'SIH1287',
    title: 'Autonomous Drone for Solar Panel Cleaning',
    ministry: 'Ministry of New and Renewable Energy',
    category: 'Hardware',
    description: 'Design a self-navigating hardware drone capable of wiping dust and debris off solar panels on large-scale solar farms without human intervention.',
    domain: 'Renewable Energy',
    difficulty: 'Hard'
  }
];

export default function ProblemStatements() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProblems = problemStatementsList.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.ministry.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || problem.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="font-display-lg text-display-lg text-on-surface">SIH 2026 Problem Statements</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Browse and filter the official problem statements. Use this database to select a challenge that matches your team&apos;s capabilities.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input
              type="text"
              placeholder="Search statements, ministries..."
              className="w-full bg-surface border border-outline-variant rounded-[0.5rem] py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary text-on-surface"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Category Tabs */}
          <div className="flex bg-surface-container border border-outline-variant rounded-[0.5rem] p-1 gap-1">
            {['All', 'Software', 'Hardware'].map((category) => (
              <button
                key={category}
                className={`px-4 py-1.5 rounded-[0.35rem] text-xs font-semibold cursor-pointer transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid/List of Statements */}
        {filteredProblems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-outline transition-colors duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className="bg-primary-container text-on-primary-container font-label-sm text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-primary/20">
                      {problem.category}
                    </span>
                    <span className="text-[11px] font-semibold text-secondary-container bg-primary-container px-2 py-0.5 rounded border border-primary/20">
                      {problem.difficulty}
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-primary font-bold">{problem.id}</span>
                </div>

                <div className="flex-grow flex flex-col gap-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold line-clamp-2 leading-tight">
                    {problem.title}
                  </h3>
                  <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {problem.ministry}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="border-t border-outline-variant/30 pt-4 mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-[16px] text-secondary">label</span>
                    {problem.domain}
                  </div>
                  <button className="text-primary hover:text-on-background font-semibold text-xs flex items-center gap-1 cursor-pointer">
                    Apply Challenge
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-12 text-center flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[48px]">search_off</span>
            <div className="font-headline-md text-headline-md text-on-surface font-bold">No Problem Statements Found</div>
            <p className="text-on-surface-variant max-w-sm text-sm">We couldn&apos;t find any statements matching &ldquo;{searchQuery}&rdquo;. Try checking spelling or changing filters.</p>
          </div>
        )}

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
