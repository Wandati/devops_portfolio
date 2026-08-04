export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-[88rem] flex-col justify-between gap-3 px-5 sm:flex-row lg:px-10">
        <p>© {new Date().getFullYear()} Marvin Wandati</p>
        <p>build <span>→</span> verify <span>→</span> attest <span>→</span> operate</p>
      </div>
    </footer>
  );
}
