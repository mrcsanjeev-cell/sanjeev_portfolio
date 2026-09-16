import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                SC
              </div>
              <span className="font-display font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              B.Tech Textile Technology candidate at PSG College of Technology. Specializing in Industrial Engineering, Ergonomic Systems, and Sustainable Circular Materials.
            </p>
            <div className="text-xs text-emerald-400 font-semibold">
              CGPA: 8.63 • The Nilgiris, 643212
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About & Education</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">Industrial Internships</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Sustainable Materials & Case Studies</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-emerald-400 transition-colors">Six Sigma & Lean Credentials</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">Technical & Linguistic Skills</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership & Community Impact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LinkedInIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/{personalInfo.linkedinUsername}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Action */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Document Access
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Access the complete verified curriculum vitae and print directly or download as PDF.
            </p>
            <button
              onClick={onOpenResume}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
            >
              Open Printable Resume
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sanjeev C. All rights reserved. Crafted for Industrial & Textile Engineering Excellence.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
