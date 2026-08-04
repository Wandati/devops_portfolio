import { ArrowUpRight, Download, FileCheck2 } from 'lucide-react';

export default function Resume() {
  return (
    <section className="resume-wrap px-5 pb-6 lg:px-10">
      <div className="resume-card mx-auto max-w-[88rem]">
        <div className="resume-icon"><FileCheck2 /></div>
        <div><p className="section-kicker">Current CV · 2 pages</p><h2>Full context, zero filler.</h2><span>Experience · measurable outcomes · training · education · work authorisation</span></div>
        <div className="resume-actions">
          <a href="/Marvin_Wandati_CV_Prima.pdf" target="_blank" rel="noreferrer">Open CV <ArrowUpRight size={17} /></a>
          <a href="/Marvin_Wandati_CV_Prima.pdf" download>Download <Download size={17} /></a>
        </div>
      </div>
    </section>
  );
}
