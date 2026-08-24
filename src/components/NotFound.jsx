import { ArrowLeft, ShieldX } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found">
      <ShieldX size={34} />
      <p className="nf-cmd"><b>you@web</b>:~$ GET {window.location.pathname}</p>
      <p className="nf-err">bash: route not found — exit 404</p>
      <h1>nothing deployed here.</h1>
      <a href="/"><ArrowLeft size={17} /> cd ~/portfolio</a>
    </main>
  );
}
