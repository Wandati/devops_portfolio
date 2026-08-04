import { ArrowLeft, ShieldX } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found">
      <ShieldX size={34} />
      <p>HTTP 404</p>
      <h1>Route not found.</h1>
      <a href="/"><ArrowLeft size={17} /> Return to portfolio</a>
    </main>
  );
}
