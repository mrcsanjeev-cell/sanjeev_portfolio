import React, { useState } from 'react';
import { 
  Users, Globe, Heart, 
  CheckCircle2, BookOpen, Sparkles, Megaphone 
} from 'lucide-react';
import { leadership } from '../data/portfolioData';

export default function Leadership() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Student Government', 'Community Service', 'Youth Mentorship', 'Open Knowledge', 'Social Advocacy'];

  const filteredItems = filter === 'All'
    ? leadership
    : leadership.filter(item => item.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Student Government': return BookOpen;
      case 'Community Service': return Heart;
      case 'Youth Mentorship': return Users;
      case 'Open Knowledge': return Globe;
      case 'Social Advocacy': return Megaphone;
      default: return Sparkles;
    }
  };

  return (
    <section id="leadership" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Impact Beyond the Classroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Leadership & Community Outreach
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Mobilizing volunteers, publishing departmental literature, advocating for social wellness, and mentoring future scholars.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-500/50 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </span>

                    <span className="text-xs text-slate-400 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.role}
                  </h3>

                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="space-y-2 mb-4">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {item.organization.includes('Wikipedia') && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">150,000+ Article Reads</span>
                    <span>42 Verified Edits</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
