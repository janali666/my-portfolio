export const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded bg-gradient-primary" />
        <span>© {new Date().getFullYear()} Jan Ali Naqvi. All rights reserved.</span>
      </div>
      <div>Designed & built with passion ✦</div>
    </div>
  </footer>
);

