import React from 'react';
import { 
  ArrowRight, Mail, Phone, MapPin, 
  FileText, Sparkles, CheckCircle2 
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>B.Tech Textile Technology • PSG College of Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                SANJEEV C
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200">
              Textile Technology Engineer & Industrial Engineering Specialist
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Applying rigorous industrial engineering principles, workstation ergonomics, and sustainable materials innovation. Practical onsite experience at <strong className="text-slate-900 dark:text-white font-semibold">Aditya Birla Lifestyle Brands</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Premier Mills</strong>.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{personalInfo.email}</span>
              </a>

              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>The Nilgiris, Tamil Nadu</span>
              </div>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-xs"
              >
                <LinkedInIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 dark:text-slate-200 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Hero Visual Card - Engineering & Textile Emblem */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
                
                {/* Header profile badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-display font-bold text-xl">
                      SC
                    </div>
                    <div>
                      <div className="font-display font-bold text-slate-900 dark:text-white">Sanjeev C</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Textile Technology '27</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Open to Roles</span>
                  </div>
                </div>

                {/* Core Focus Badges */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Core Focus Areas</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">Industrial Engineering</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">Sustainable Materials</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">Method & Snap Study</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">Six Sigma & Lean</span>
                    </div>
                  </div>
                </div>

                {/* Live Micro-Proof Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Aditya Birla Lifestyle Brands – Garment manufacturing & workstation optimization</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Premier Mills – Spinning operations, yarn flow & QC</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Natural fiber bio-packaging & Salt-reed grass textiles</span>
                  </div>
                </div>

                {/* Quick CTA inside card */}
                <div className="pt-2">
                  <a
                    href="#experience"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold text-xs transition-colors"
                  >
                    <span>View Industrial Experience Timeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Impact Metric Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 backdrop-blur-md shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all group"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
