import { Download, FileCheck2 } from 'lucide-react';

export default function Resume() {
  return <section className="pb-16 px-5 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 p-6 dark:border-white/10 sm:flex-row sm:items-center"><div className="flex gap-4"><FileCheck2 className="text-emerald-500"/><div><h2 className="font-bold">Want the full professional history?</h2><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Download my résumé for experience, credentials, and project context.</p></div></div><a href="/Marvin_Wandati_Devops.pdf" download className="button-secondary shrink-0"><Download size={17}/> Download résumé</a></div></section>;
}
