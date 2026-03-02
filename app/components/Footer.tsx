export default function Footer() {
  return (
    <footer className="bg-[var(--color-ivory)] text-[var(--color-ink)] pt-10 pb-10 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6">
        <div className=" flex flex-col md:flex-row justify-between items-center text-[var(--color-stone)] text-sm">
          <p>© 2026 getgrade. ALL RIGHTS RESERVED.</p>
          <p className="font-mono mt-4 md:mt-0">
            DESIGNED BY INTELLIGENCE, CODED BY HAND.
          </p>
        </div>
      </div>
    </footer>
  );
}
