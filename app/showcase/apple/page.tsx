export default function AppleShowcasePage() {
    return (
        <main className="min-h-screen bg-[#F5F5F7] text-black">
            {/* Simple Apple-like nav */}
            <header className="sticky top-0 z-10 bg-[#1d1d1f] text-[#f5f5f7]">
                <div className="mx-auto max-w-6xl px-6 h-12 flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-6">
                        <span className="font-semibold"></span>
                        <span className="opacity-90 hover:opacity-100 cursor-pointer">Store</span>
                        <span className="opacity-90 hover:opacity-100 cursor-pointer">Mac</span>
                        <span className="opacity-90 hover:opacity-100 cursor-pointer">iPad</span>
                        <span className="opacity-90 hover:opacity-100 cursor-pointer">iPhone</span>
                    </div>
                    <div className="opacity-80">Search</div>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-6xl px-6 pt-14 pb-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold text-black/80">
                    Product event
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/70" />
                    New finishes
                </div>
                <h1 className="mt-6 text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
                    iPhone 16 Pro
                </h1>
                <p className="mt-3 text-2xl text-black/80">Hello, Apple Intelligence.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0077ed]">
                        Learn more
                    </button>
                    <button className="text-[#0071e3] px-6 py-3 rounded-full text-sm font-semibold border border-[#0071e3] hover:text-[#0077ed] hover:border-[#0077ed]">
                        Buy
                    </button>
                </div>

                <div className="mt-14 mx-auto w-[300px] h-[420px] rounded-[48px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] bg-gradient-to-b from-neutral-200 to-neutral-300 border border-black/10" />
            </section>

            {/* Content blocks (scrollable inside iframe) */}
            <section className="mx-auto max-w-6xl px-6 pb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Titanium", desc: "Aerospace-grade finish with a lighter feel." },
                        { title: "Camera", desc: "Sharper detail in low light and fast motion." },
                        { title: "Battery", desc: "All‑day power with smarter efficiency." },
                    ].map((f) => (
                        <div key={f.title} className="bg-white rounded-3xl border border-black/10 p-8">
                            <div className="text-sm font-semibold text-black/70">Feature</div>
                            <div className="mt-2 text-2xl font-semibold tracking-tight">{f.title}</div>
                            <p className="mt-3 text-black/70 leading-relaxed">{f.desc}</p>
                            <div className="mt-6 h-32 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-black/5" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="bg-white rounded-[32px] border border-black/10 p-10 md:p-14 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="text-sm font-semibold text-black/70">A17 Pro</div>
                            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                                Built for speed.
                            </h2>
                            <p className="mt-4 text-black/70 text-lg leading-relaxed">
                                Smooth performance across apps, games, and the camera pipeline — with efficient power use.
                            </p>
                            <div className="mt-7 flex gap-3">
                                <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black/90">
                                    See benchmarks
                                </button>
                                <button className="bg-white border border-black/15 text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black/5">
                                    Compare models
                                </button>
                            </div>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-black/5 to-black/10 border border-black/10 h-[320px]" />
                    </div>
                </div>
            </section>

            <footer className="border-t border-black/10 bg-white/60">
                <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-black/60">
                    <div>© 2025 Apple (sample clone preview)</div>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-black/80">Privacy</a>
                        <a href="/terms" className="hover:text-black/80">Terms</a>
                        <a href="mailto:hello@step1.app" className="hover:text-black/80">Contact</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}


