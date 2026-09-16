import React from 'react';
import { 
  GraduationCap, BookOpen, Sparkles, Target, 
  Lightbulb, Compass, CheckCircle, Calendar, MapPin 
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Sanjeev
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dedicated to engineering excellence, operational efficiency, and circular sustainability in the textile ecosystem.
          </p>
        </div>

        {/* Top Split: Professional Summary & Philosophy Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Professional Summary & Vision</span>
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  I am a dedicated <strong className="text-slate-900 dark:text-white">Textile Technology student at PSG College of Technology</strong> with practical onsite exposure in industrial engineering, manufacturing operations, and community leadership.
                </p>
                <p>
                  My driving mission is to bridge technical engineering knowledge with real-world industry applications—applying <strong className="text-slate-900 dark:text-white">Method Studies, Workstation Ergonomics, and Quality Systems</strong> to eliminate manufacturing bottlenecks while pioneering <strong className="text-slate-900 dark:text-white">bio-composite sustainable materials</strong> that foster a circular economy.
                </p>
                <p>
                  Whether conducting snap studies on active production floors at Aditya Birla Lifestyle Brands, optimizing machine parameters at Premier Mills, or leading 150 volunteers through community-building NSS camps, I believe in structured execution, continuous learning, and measurable impact.
                </p>
              </div>

              {/* Fast Facts Grid */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Institution</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mt-0.5">PSG Tech</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Native Origin</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mt-0.5">The Nilgiris</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Focus</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mt-0.5">IE & Sustainable Fiber</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                    Material Innovation & Sustainability
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Pioneering biodegradable packaging from waste human hair fiber and sustainable woven home textiles with salt-reed grass weft.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                    Industrial Engineering Rigor
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Applying Lean, Six Sigma, method study, snap sampling, and ergonomic line balancing for factory productivity improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                    Leadership & Community Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Proven track record as NSS & TTA Joint Secretary, Wikipedia editor (150K views), and career mentor for government school students.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Education Journey Cards */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Education Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </span>

                    <span className="text-sm font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4 font-medium">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {edu.current && (
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>Currently Enrolled (Senior Year)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
