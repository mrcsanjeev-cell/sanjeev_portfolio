import React from 'react';
import { 
  Briefcase, Calendar, CheckCircle2, 
  Building2, Cpu 
} from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industry Internships
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real-world onsite manufacturing experience spanning spinning mills, garment lines, and industrial engineering optimization.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {internships.map((job, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-display font-bold text-xl shrink-0 group-hover:scale-105 transition-transform">
                    {idx === 0 ? <Building2 className="w-7 h-7" /> : <Cpu className="w-7 h-7" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-400">
                        {job.location}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    
                    <div className="text-base font-semibold text-emerald-600 dark:text-emerald-400">
                      {job.company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 my-5 leading-relaxed">
                {job.summary}
              </p>

              {/* Core Accomplishments */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Technical Deliverables & Methodologies
                </h4>
                <div className="space-y-2.5">
                  {job.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2">Competencies:</span>
                {job.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700/80 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
