interface LandingSectionsProps {
  totalUrls: number;
  totalClicks: number;
}

export function LandingSections({ totalUrls, totalClicks }: LandingSectionsProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Advanced Analytics Section */}
      <section id="features" className="w-full bg-surface-container-low px-6 py-20 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-32">
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center">
            <div className="font-display text-8xl md:text-[20rem] font-black text-on-surface/5 leading-none select-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              500
            </div>
            <div className="relative space-y-4 z-10 text-center md:text-left">
              <div className="font-display text-6xl md:text-[12rem] font-black text-primary leading-none tracking-tighter">
                1000+
              </div>
              <p className="font-label text-on-surface uppercase tracking-[0.3em] font-black">Engagements Tracked</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-12">
              Deep <br />High-Fi <br />Analytics.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed mb-12 font-body">
              Stop guessing. Start knowing. Every interaction is mapped with surgical precision, giving you the clarity needed to scale with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Click Heatmaps", "Geo-Location", "Device Insights", "Referrer Tracking"].map((tag) => (
                <span key={tag} className="font-label text-xs font-bold text-on-surface uppercase tracking-widest border border-on-surface/10 px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic QR Section */}
      <section className="bg-surface py-20 md:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-32">
          <div className="w-full md:w-1/2 relative flex items-center justify-center h-[300px] md:h-[400px]">
            <div className="font-display text-8xl md:text-[20rem] font-black text-on-surface/5 leading-none select-none tracking-tighter">
              QR
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border-4 border-primary rounded-3xl editorial-shadow bg-surface p-4">
              {/* Abstract QR-like pattern */}
              <div className="grid grid-cols-4 gap-2 w-full h-full opacity-10">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`bg-on-surface rounded-sm ${Math.random() > 0.5 ? "opacity-100" : "opacity-0"}`}></div>
                ))}
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-primary/30 animate-scan"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-12">
              Dynamic <br />QR Codes.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed mb-12 font-body">
              Connect the physical world to your digital metrics. Generate static or dynamic codes that remain editable even after they're in the wild.
            </p>
            <div className="flex flex-wrap gap-4">
              {["SVG Export", "Branded Colors", "Scan Analytics", "Dynamic Redirects"].map((tag) => (
                <span key={tag} className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest border border-on-surface/10 px-4 py-2 rounded-full italic">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="bg-surface-container-low py-20 md:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-32">
          <div className="w-full md:w-1/2 relative flex items-center justify-center h-[300px] md:h-[400px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center z-0">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-on-surface rounded-full flex items-center justify-center editorial-shadow relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                <span className="material-symbols-outlined text-surface text-6xl md:text-8xl relative z-10">verified_user</span>
              </div>
            </div>
            <div className="font-display text-7xl md:text-[12rem] font-black text-on-surface/5 leading-none select-none tracking-tighter relative z-10 pointer-events-none">
              SECURE
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-12">
              Privacy <br />First <br />Security.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed mb-12 font-body">
              Every link is scanned for threats before redirection. We protect your audience from phishing and malware with our automated safety engine.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Phishing Detection", "Malware Scanning", "Data Encryption", "No Ad-Trackers"].map((tag) => (
                <span key={tag} className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest border border-on-surface/10 px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works: Step Process */}
      <section id="process" className="bg-surface py-20 md:py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter">The <br />Process.</h2>
            <div className="bg-on-surface text-surface px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase mb-4">
              Effortless Workflow
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Step 1 */}
            <div className="relative">
              {/* Mobile: icon centered on number */}
              <div className="flex flex-col items-center mb-6 md:hidden">
                <div className="relative flex items-center justify-center h-28 w-full">
                  <span className="font-display text-[8rem] font-black text-on-surface/5 select-none leading-none">1</span>
                  <div className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary editorial-shadow">
                    <span className="material-symbols-outlined">content_paste</span>
                  </div>
                </div>
              </div>
              {/* Desktop: icon centered on number */}
              <div className="hidden md:block relative w-fit h-[12rem] mb-4">
                <span className="font-display text-[12rem] font-black text-on-surface/5 select-none leading-none">1</span>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary editorial-shadow">
                  <span className="material-symbols-outlined">content_paste</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold mb-4 text-center md:text-left">Paste</h3>
                <p className="text-on-surface-variant leading-relaxed font-body text-center md:text-left">Drop your oversized links into our minimalist engine. We handle the heavy lifting while you focus on the strategy.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative">
              {/* Mobile: icon centered on number */}
              <div className="flex flex-col items-center mb-6 md:hidden">
                <div className="relative flex items-center justify-center h-28 w-full">
                  <span className="font-display text-[8rem] font-black text-on-surface/5 select-none leading-none">2</span>
                  <div className="absolute w-16 h-16 rounded-full bg-on-surface flex items-center justify-center text-surface editorial-shadow">
                    <span className="material-symbols-outlined">edit_note</span>
                  </div>
                </div>
              </div>
              {/* Desktop: icon centered on number */}
              <div className="hidden md:block relative w-fit h-[12rem] mb-4">
                <span className="font-display text-[12rem] font-black text-on-surface/5 select-none leading-none">2</span>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-on-surface flex items-center justify-center text-surface editorial-shadow">
                  <span className="material-symbols-outlined">edit_note</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold mb-4 text-center md:text-left">Customize</h3>
                <p className="text-on-surface-variant leading-relaxed font-body text-center md:text-left">Make it yours. Add a custom alias or branded back-half to ensure your links are recognizable and carry your brand authority.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative">
              {/* Mobile: icon centered on number */}
              <div className="flex flex-col items-center mb-6 md:hidden">
                <div className="relative flex items-center justify-center h-28 w-full">
                  <span className="font-display text-[8rem] font-black text-on-surface/5 select-none leading-none">3</span>
                  <div className="absolute w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary editorial-shadow">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                </div>
              </div>
              {/* Desktop: icon centered on number */}
              <div className="hidden md:block relative w-fit h-[12rem] mb-4">
                <span className="font-display text-[12rem] font-black text-on-surface/5 select-none leading-none">3</span>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary editorial-shadow">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold mb-4 text-center md:text-left">Secure</h3>
                <p className="text-on-surface-variant leading-relaxed font-body text-center md:text-left">Your encrypted, custom link is ready. Every interaction is tracked with precision, giving you full control over your digital footprint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-on-surface py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] -z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-black text-surface mb-8 tracking-tighter leading-[0.9]">
            Ready to <br />Redefine <br /><span className="text-primary italic">the Link?</span>
          </h2>
          <p className="text-surface/60 text-lg md:text-xl mb-12 max-w-xl mx-auto font-body">
            Join thousands of modern brands using Ziply to shorten, track, and optimize their digital footprint.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/register"
              className="bg-primary hover:bg-primary/90 text-on-primary px-10 py-5 rounded-full font-bold text-lg transition-all active:scale-95 editorial-shadow"
            >
              Get Started for Free
            </a>
            <a
              href="#features"
              className="text-surface hover:text-primary transition-colors font-bold tracking-widest uppercase text-xs"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
