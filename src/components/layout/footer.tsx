import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-surface py-24 px-6 border-t border-on-surface/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="space-y-6">
                    <Link href="/" className="font-display text-4xl font-black tracking-tighter text-on-surface">
                        Ziply.
                    </Link>
                    <p className="font-body text-on-surface-variant max-w-xs leading-relaxed">
                        High-performance URL shortening for modern brands. Built for speed, clarity, and security.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-24">
                    <div className="space-y-4">
                        <h4 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">Platform</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Features</Link>
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Analytics</Link>
                            <Link href="/dashboard" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Dashboard</Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">Community</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Twitter</Link>
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Discord</Link>
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">GitHub</Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">Legal</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy</Link>
                            <Link href="#" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Terms</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="font-body text-sm text-on-surface-variant">© 2024 Ziply.</p>
                <div className="flex gap-8">
                    <span className="font-label text-xs font-bold text-on-surface/20">Handcrafted for Quality</span>
                    <span className="font-label text-xs font-bold text-on-surface/20">Global Scale Architecture</span>
                </div>
            </div>
        </footer>
    );
}
