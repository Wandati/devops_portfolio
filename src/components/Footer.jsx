export default function Footer() {
  return <footer className="border-t border-slate-200 py-8 dark:border-white/10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row lg:px-10"><p>© {new Date().getFullYear()} Marvin Wandati Kinyanjui</p><p className="font-mono text-xs">build → verify → attest → deploy → observe</p></div></footer>;
}
