import React from 'react';
import { Printer, X } from 'lucide-react';
import { 
  personalInfo, education, internships, projects, 
  certifications, leadership, awards 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl my-8 overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar (Hidden during print) */}
        <div className="no-print bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>Resume Preview – Sanjeev C</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content (Print-optimized) */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white font-sans max-h-[80vh] no-print:overflow-y-auto print:max-h-none print:overflow-visible print:p-0">
          
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-5 mb-5">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-slate-900 mb-1">
              SANJEEV C
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700 font-medium">
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-emerald-800 hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-emerald-800 hover:underline">
                linkedin.com/in/{personalInfo.linkedinUsername}
              </a>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              Dedicated Textile Technology student with practical experience in industry exposure, leadership experience, and a passion for continuous learning. Looking for challenging role in an organization to apply my engineering knowledge, technical skills and problem-solving abilities, contributing to company’s growth while expanding my knowledge by exploring new opportunities in industry.
            </p>
          </div>

          {/* Education */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{edu.institution}</span>
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-slate-700 italic">
                    <span>{edu.degree}</span>
                    <span className="font-semibold not-italic">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Internships
            </h2>
            <div className="space-y-3">
              {internships.map((job, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{job.company}</span>
                    <span>{job.period}</span>
                  </div>
                  <div className="text-slate-700 font-semibold italic mb-1">
                    Role: {job.role} ({job.type})
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700">
                    {job.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="italic font-normal text-slate-600">{proj.status}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 mt-1">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Skills
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div>
                <strong className="text-slate-900">Software & Tools:</strong> MS Excel, MS PowerPoint, Canva, MS Word, Power BI (Beginner)
              </div>
              <div>
                <strong className="text-slate-900">Core Engineering:</strong> Method Study, Snap Study, Capacity Study, Workstation Layout, Ergonomics, Spinning Operations, Quality Control, Circular Economy
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Certifications
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-0.5">
              {certifications.map((c, i) => (
                <li key={i}>
                  <strong className="text-slate-900">{c.title}</strong> – {c.issuer}, {c.year}
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership and Outreach */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Leadership and Outreach
            </h2>
            <div className="space-y-2.5">
              {leadership.map((l, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{l.organization} – {l.role}</span>
                    <span>{l.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 mt-0.5">
                    {l.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards and Accolades */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Awards and Accolades
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
              {awards.map((a, i) => (
                <li key={i}>
                  <strong className="text-slate-900">{a.title}</strong>: {a.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 font-display">
              Languages
            </h2>
            <div className="text-xs text-slate-700">
              English (Full professional proficiency), Tamil (Native), Malayalam (Professional working proficiency), Kannada (Basic conversational), Hindi (Elementary level)
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
