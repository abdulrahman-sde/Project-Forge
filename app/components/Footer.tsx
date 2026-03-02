export default function Footer() {
  return (
    <footer className="bg-[var(--color-ivory)] text-[var(--color-ink)] pt-20 pb-10 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-4xl font-display font-bold uppercase tracking-tighter mb-6">
              Ready to{" "}
              <span className="text-[var(--color-amber-dark)]">Upgrade?</span>
            </h2>
            <p className="text-[var(--color-graphite)] max-w-md text-lg">
              Stop settling for templates and AI-generated mediocrity. Let's
              build something that lasts.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-stone)] uppercase tracking-widest mb-6">
              [ SITEMAP ]
            </h3>
            <ul className="space-y-4">
              {["Home", "Services", "Process", "Documentation", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-lg hover:text-[var(--color-amber-dark)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-stone)] uppercase tracking-widest mb-6">
              [ SOCIAL ]
            </h3>
            <ul className="space-y-4">
              {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-lg hover:text-[var(--color-amber-dark)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-10 flex flex-col md:flex-row justify-between items-center text-[var(--color-stone)] text-sm">
          <p>© 2026 getgrade. ALL RIGHTS RESERVED.</p>
          <p className="font-mono mt-4 md:mt-0">
            DESIGNED BY INTELLIGENCE, CODED BY HAND.
          </p>
        </div>
      </div>
    </footer>
  );
}
