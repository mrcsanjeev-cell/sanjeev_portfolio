import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { awards } from '../data/portfolioData';

export default function Awards() {
  return (
    <section id="awards" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Awards & Accolades
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Recognized for domain competence in textile technical competitions and interdisciplinary symposiums.
          </p>
        </div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      {award.year}
                    </span>
                    <span className="text-xs text-slate-400">
                      PSG College of Technology
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {award.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                {award.organization}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {award.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Symposium & Technical Competition Honor</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
