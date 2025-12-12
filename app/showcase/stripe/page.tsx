export default function StripeShowcasePage() {
    return (
        <main className="min-h-screen bg-white text-neutral-900">
            {/* Top Nav */}
            <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-neutral-200">
                <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                            S
                        </div>
                        <span className="font-semibold tracking-tight">Stripe</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
                        <a href="#products" className="hover:text-neutral-900">Products</a>
                        <a href="#developers" className="hover:text-neutral-900">Developers</a>
                        <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
                        <a href="#stories" className="hover:text-neutral-900">Stories</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <button className="text-sm text-neutral-600 hover:text-neutral-900">Sign in</button>
                        <button className="text-sm font-semibold rounded-full bg-[#2D66EC] text-white px-4 py-2 hover:bg-[#2253C6]">
                            Start now
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2D66EC]/15 via-white to-white" />
                <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                            Payments platform
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2D66EC]" />
                            Built for teams
                        </div>
                        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                            Payments infrastructure for modern businesses.
                        </h1>
                        <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                            Accept payments, manage subscriptions, and grow revenue with a developer-first platform designed to scale.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <button className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-800">
                                Create account
                            </button>
                            <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
                                Talk to sales
                            </button>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="mt-14 grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                            <div className="text-xs font-semibold text-neutral-600 mb-3">Revenue</div>
                            <div className="h-40 rounded-xl bg-[linear-gradient(135deg,_#111827_0%,_#2D66EC_55%,_#A855F7_100%)] opacity-90" />
                            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                                    <div className="text-neutral-500 text-xs">MRR</div>
                                    <div className="font-semibold">$142k</div>
                                </div>
                                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                                    <div className="text-neutral-500 text-xs">Churn</div>
                                    <div className="font-semibold">2.1%</div>
                                </div>
                                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                                    <div className="text-neutral-500 text-xs">ARPA</div>
                                    <div className="font-semibold">$184</div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-900 text-white p-6 shadow-sm">
                            <div className="text-xs font-semibold text-white/70 mb-4">Quick start</div>
                            <pre className="text-[11px] leading-relaxed text-white/80 bg-black/20 rounded-xl p-4 overflow-hidden">
{`curl https://api.example.com/payments \\
  -H "Authorization: Bearer sk_live_..." \\
  -d amount=2000 \\
  -d currency=usd`}
                            </pre>
                            <button className="mt-4 w-full rounded-xl bg-white text-neutral-900 py-2 text-sm font-semibold hover:bg-neutral-100">
                                Copy snippet
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <section id="products" className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <h2 className="text-3xl font-semibold tracking-tight">Products</h2>
                <p className="mt-3 text-neutral-600 max-w-2xl">
                    Modular products that you can adopt gradually — payments today, subscriptions tomorrow.
                </p>
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Payments", desc: "Accept cards, wallets, and local payment methods." },
                        { title: "Billing", desc: "Subscriptions, invoices, and revenue recovery." },
                        { title: "Connect", desc: "Marketplaces and multi-party payouts." },
                    ].map((p) => (
                        <div key={p.title} className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition-shadow">
                            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold mb-4">
                                →
                            </div>
                            <div className="font-semibold">{p.title}</div>
                            <div className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="developers" className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight">Developer-first by default</h2>
                        <p className="mt-3 text-neutral-600 leading-relaxed">
                            Clear primitives, great docs, and an API that feels predictable. Ship faster with less glue code.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <button className="rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800">
                                Read docs
                            </button>
                            <button className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50">
                                View API reference
                            </button>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <div className="text-xs font-semibold text-neutral-600 mb-3">Example: create checkout</div>
                        <pre className="text-[12px] leading-relaxed text-neutral-800 bg-white border border-neutral-200 rounded-xl p-4 overflow-hidden">
{`import { createCheckout } from "@stripe/sdk";

export async function POST() {
  const session = await createCheckout({
    amount: 2000,
    currency: "usd",
  });
  return Response.json(session);
}`}
                        </pre>
                    </div>
                </div>
            </section>

            <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
                <p className="mt-3 text-neutral-600 max-w-2xl">Simple, usage-based pricing with no hidden platform fees.</p>
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Starter", price: "2.9% + 30¢", desc: "Everything you need to start taking payments." },
                        { title: "Scale", price: "Custom", desc: "Enterprise support and volume discounts." },
                        { title: "Platform", price: "Custom", desc: "Marketplaces and multi-party payouts." },
                    ].map((p) => (
                        <div key={p.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                            <div className="font-semibold">{p.title}</div>
                            <div className="mt-3 text-3xl font-semibold tracking-tight">{p.price}</div>
                            <div className="mt-3 text-sm text-neutral-600 leading-relaxed">{p.desc}</div>
                            <button className="mt-6 w-full rounded-xl bg-neutral-900 text-white py-2.5 text-sm font-semibold hover:bg-neutral-800">
                                Choose plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section id="stories" className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-200">
                <h2 className="text-3xl font-semibold tracking-tight">Customer stories</h2>
                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    {[
                        {
                            quote: "We moved from prototype to production in weeks — the API design made it easy to iterate.",
                            name: "A fintech team",
                        },
                        {
                            quote: "The docs are clear, and the primitives are composable. Shipping felt predictable.",
                            name: "A dev-led startup",
                        },
                    ].map((t, idx) => (
                        <div key={idx} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                            <p className="text-neutral-800 leading-relaxed">“{t.quote}”</p>
                            <div className="mt-4 text-sm font-semibold text-neutral-700">{t.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="border-t border-neutral-200">
                <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="text-sm text-neutral-600">© 2025 Stripe (sample clone preview)</div>
                    <div className="flex gap-6 text-sm text-neutral-600">
                        <a href="#products" className="hover:text-neutral-900">Products</a>
                        <a href="#developers" className="hover:text-neutral-900">Developers</a>
                        <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}



