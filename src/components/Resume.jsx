import { ArrowUpRight, Download, FileCheck2 } from 'lucide-react';

export default function Resume() {
  return (
    <section className="artifact-wrap px-5 lg:px-10">
      <div className="artifact-card mx-auto max-w-[88rem]">
        <div className="artifact-icon"><FileCheck2 /></div>
        <div>
          <p>▸ artifact upload</p>
          <h2>marvin_wandati_cv.pdf <small>· 2 pages</small></h2>
          <span>experience · measurable outcomes · training · education · work authorisation</span>
        </div>
        <div className="artifact-actions">
          <a href="/Marvin_Wandati_CV_Prima.pdf" target="_blank" rel="noreferrer">open <ArrowUpRight size={17} /></a>
          <a href="/Marvin_Wandati_CV_Prima.pdf" download>download <Download size={17} /></a>
        </div>
      </div>
    </section>
  );
}
