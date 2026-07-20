export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-4">
        <div className="col-span-2">
          <span className="text-xl font-bold tracking-tight text-brand">
            SMART POULTRY
          </span>
          <p className="mt-4 max-w-sm text-foreground/60">
            An enterprise AI operating system by Alareeb ICT. Powering the next
            generation of precision poultry through IoT, computer vision and
            predictive analytics.
          </p>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest">
            Platform
          </h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-brand">Modules</a></li>
            <li><a href="#" className="hover:text-brand">Computer Vision</a></li>
            <li><a href="#" className="hover:text-brand">Power BI Dashboards</a></li>
            <li><a href="#" className="hover:text-brand">API Integration</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-widest">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-brand">About Us</a></li>
            <li><a href="#" className="hover:text-brand">Case Studies</a></li>
            <li><a href="#" className="hover:text-brand">Contact</a></li>
            <li><a href="#" className="font-semibold text-brand hover:opacity-80">Alareeb ICT</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-border pt-8 text-[10px] font-medium uppercase tracking-widest text-foreground/40">
        <span>© 2026 Smart Poultry by Alareeb ICT</span>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
