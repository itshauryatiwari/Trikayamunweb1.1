import { r as c, j as e, C as b, L as y } from "./index-DvNqnX8X.js";
const w = "/assets/hero-bg-RjqZ_PSa.jpg",
  k = "/__l5e/assets-v1/14a8e048-aac2-4ef9-9534-f3b59f75fafe/founder.png",
  S = { url: k },
  A = "/__l5e/assets-v1/38389880-6dd8-4a83-9020-e9b0be848c8b/cofounder.png",
  M = { url: A };
function I() {
  const t = c.useRef(null);
  return (
    c.useEffect(() => {
      const s = t.current;
      if (!s) return;
      const l = s.getContext("2d");
      if (!l) return;
      let r = 0;
      const o = Math.min(window.devicePixelRatio || 1, 2),
        n = () => {
          ((s.width = s.offsetWidth * o), (s.height = s.offsetHeight * o));
        };
      (n(), window.addEventListener("resize", n));
      const d = 90,
        i = Array.from({ length: d }, () => ({
          x: Math.random() * s.width,
          y: Math.random() * s.height,
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          a: Math.random() * 0.6 + 0.2,
        })),
        m = () => {
          l.clearRect(0, 0, s.width, s.height);
          for (let a = 0; a < d; a++)
            for (let x = a + 1; x < d; x++) {
              const p = i[a].x - i[x].x,
                g = i[a].y - i[x].y,
                h = Math.hypot(p, g);
              h < 120 * o &&
                ((l.strokeStyle = `oklch(0.82 0.14 85 / ${(1 - h / (120 * o)) * 0.15})`),
                (l.lineWidth = 0.5),
                l.beginPath(),
                l.moveTo(i[a].x, i[a].y),
                l.lineTo(i[x].x, i[x].y),
                l.stroke());
            }
          for (const a of i)
            ((a.x += a.vx),
              (a.y += a.vy),
              (a.x < 0 || a.x > s.width) && (a.vx *= -1),
              (a.y < 0 || a.y > s.height) && (a.vy *= -1),
              (l.fillStyle = `oklch(0.88 0.17 85 / ${a.a})`),
              l.beginPath(),
              l.arc(a.x, a.y, a.r * o, 0, Math.PI * 2),
              l.fill());
          r = requestAnimationFrame(m);
        };
      return (
        m(),
        () => {
          (cancelAnimationFrame(r), window.removeEventListener("resize", n));
        }
      );
    }, []),
    e.jsx("canvas", {
      ref: t,
      className: "absolute inset-0 h-full w-full pointer-events-none",
      "aria-hidden": !0,
    })
  );
}
const D = new Date("2026-10-24T09:00:00+05:30").getTime();
function j() {
  const t = Math.max(0, D - Date.now());
  return {
    d: Math.floor(t / 864e5),
    h: Math.floor((t / 36e5) % 24),
    m: Math.floor((t / 6e4) % 60),
    s: Math.floor((t / 1e3) % 60),
  };
}
function C() {
  const [t, s] = c.useState(!1),
    [l, r] = c.useState({ d: 0, h: 0, m: 0, s: 0 });
  c.useEffect(() => {
    (s(!0), r(j()));
    const n = setInterval(() => r(j()), 1e3);
    return () => clearInterval(n);
  }, []);
  const o = [
    ["Days", l.d],
    ["Hours", l.h],
    ["Minutes", l.m],
    ["Seconds", l.s],
  ];
  return e.jsx("div", {
    className: "flex flex-wrap items-center justify-center gap-3 sm:gap-5",
    children: o.map(([n, d]) =>
      e.jsxs(
        "div",
        {
          className:
            "glass-gold rounded-2xl px-5 py-4 sm:px-7 sm:py-5 min-w-[88px] sm:min-w-[110px] text-center",
          children: [
            e.jsx("div", {
              className:
                "text-3xl sm:text-5xl font-display font-semibold text-gradient-gold tabular-nums",
              children: t ? String(d).padStart(2, "0") : "--",
            }),
            e.jsx("div", {
              className:
                "text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1",
              children: n,
            }),
          ],
        },
        n,
      ),
    ),
  });
}
function E() {
  return e.jsx("section", {
    id: "committees",
    className: "relative py-28 px-4 sm:px-6",
    children: e.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        e.jsxs("div", {
          className: "text-center mb-16",
          children: [
            e.jsx("div", {
              className: "text-xs uppercase tracking-[0.4em] text-gold mb-4",
              children: "Section 08",
            }),
            e.jsx("h2", {
              className:
                "text-5xl sm:text-6xl font-display text-gradient-royal mb-4",
              children: "The Committees",
            }),
            e.jsx("p", {
              className: "text-muted-foreground max-w-2xl mx-auto",
              children:
                "Seven floors. Seven worlds. Choose where your voice will resonate.",
            }),
          ],
        }),
        e.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
          children: b.map((t, s) =>
            e.jsx(
              "div",
              {
                className: "flip-card relative h-[22rem]",
                style: { animationDelay: `${s * 80}ms` },
                children: e.jsxs("div", {
                  className: "flip-inner relative w-full h-full",
                  children: [
                    e.jsx("div", {
                      className:
                        "flip-face glass rounded-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden",
                      children: e.jsx("h3", {
                        className:
                          "text-3xl sm:text-4xl font-display text-gradient-royal leading-tight",
                        children: t.short,
                      }),
                    }),
                    e.jsx(y, {
                      to: "/committees/$slug",
                      params: { slug: t.slug },
                      className:
                        "flip-face flip-back glass-gold rounded-2xl p-8 flex items-center justify-center text-center",
                      children: e.jsx("p", {
                        className:
                          "text-base sm:text-lg text-foreground/90 leading-relaxed font-display italic",
                        children: t.agenda,
                      }),
                    }),
                  ],
                }),
              },
              t.slug,
            ),
          ),
        }),
      ],
    }),
  });
}
function u({ to: t, suffix: s = "", label: l }) {
  const [r, o] = c.useState(0),
    n = c.useRef(null),
    d = c.useRef(!1);
  return (
    c.useEffect(() => {
      const i = n.current;
      if (!i) return;
      const m = new IntersectionObserver(([a]) => {
        if (a.isIntersecting && !d.current) {
          d.current = !0;
          const x = performance.now(),
            p = 1600,
            g = (h) => {
              const v = Math.min(1, (h - x) / p),
                N = 1 - Math.pow(1 - v, 3);
              (o(Math.floor(N * t)), v < 1 && requestAnimationFrame(g));
            };
          requestAnimationFrame(g);
        }
      });
      return (m.observe(i), () => m.disconnect());
    }, [t]),
    e.jsxs("div", {
      ref: n,
      className: "text-center",
      children: [
        e.jsxs("div", {
          className:
            "text-4xl sm:text-5xl font-display text-gradient-gold tabular-nums",
          children: [r, s],
        }),
        e.jsx("div", {
          className:
            "text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2",
          children: l,
        }),
      ],
    })
  );
}
const BROCHURE_URL = "BROCHURE_LINK_HERE"; // ← Edit only this line to set the brochure link
const F = S.url,
  R = M.url,
  P = [
    { text: "Premium Delegate Kits" },
    { text: "Exclusive Cash Prizes" },
    { text: "Premium Trophies" },
    { text: "Esteemed & Experienced Executive Board" },
    { text: "Free Polaroid Keepsake" },
    { text: "High-Energy Socials & Networking" },
    { text: "Participation Certificates with High-Profile Signatories" },
    { text: "Personalised One-on-One Training Sessions" },
    { text: "Special Souvenir" },
    { text: "Social Media Recognition" },
    { text: "Custom ID Cards for First 100", highlight: !0 },
  ],
  T = [
    { price: "₹1,999", for: "UNHRC · UNGA · AIPPM · MAHABHARAT" },
    { price: "₹4,400", for: "IPL (Day 2) — Mega Auction 2026" },
    { price: "₹1,899", for: "IPC — International Press Corps" },
  ],
  O = [
    {
      label: "Delegate Registration",
      href: "https://forms.gle/QDkS2C1qpF2gxE149",
      icon: "✍",
    },
    {
      label: "IPL Registration",
      href: "https://forms.gle/s1444mzwMcpc8cCt8",
      icon: "✦",
    },
    { label: "Public Eye Matrix", href: "#", icon: "◎" },
    {
      label: "Instagram · @trikaya_mun",
      href: "https://instagram.com/trikaya_mun",
      icon: "❍",
    },
    { label: "Download Brochure", href: BROCHURE_URL, icon: "▤" },
    { label: "Contact Us", href: "#contact", icon: "✉" },
  ];
function _() {
  return e.jsxs("main", {
    className: "overflow-x-hidden",
    children: [
      e.jsxs("section", {
        className:
          "relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 z-0",
            style: {
              backgroundImage: `url(${w})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-navy-deep/65 via-navy-deep/55 to-navy-deep z-[1]",
          }),
          e.jsx("div", {
            className: "absolute inset-0 bg-stars opacity-60 z-[1]",
          }),
          e.jsx(I, {}),
          e.jsxs("div", {
            className: "relative z-10 max-w-5xl mx-auto text-center",
            children: [
              e.jsxs("div", {
                className:
                  "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-up",
                children: [
                  e.jsx("span", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-gold animate-glow-pulse",
                  }),
                  e.jsx("span", {
                    className: "text-xs uppercase tracking-[0.3em] text-gold",
                    children: "Maiden Edition · 24–25 October 2026",
                  }),
                ],
              }),
              e.jsx("h1", {
                className:
                  "text-6xl sm:text-8xl lg:text-[10rem] font-display font-bold tracking-[0.04em] mb-6 animate-fade-up text-neon animate-neon-flicker",
                children: "TRIKAYA",
              }),
              e.jsx("div", {
                className:
                  "text-xs sm:text-sm tracking-[0.7em] text-foreground/70 -mt-2 mb-6 font-display",
                children: "MODEL · UNITED · NATIONS",
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-center gap-4 my-6 animate-fade-up",
                style: { animationDelay: "120ms" },
                children: [
                  e.jsx("span", { className: "neon-rule w-16 sm:w-24" }),
                  e.jsx("p", {
                    className:
                      "text-base sm:text-2xl font-display italic text-gradient-gold tracking-widest",
                    children: "Diplomacy. Beyond. Dimensions.",
                  }),
                  e.jsx("span", { className: "neon-rule w-16 sm:w-24" }),
                ],
              }),
              e.jsx("p", {
                className:
                  "max-w-2xl mx-auto text-muted-foreground mb-10 animate-fade-up",
                style: { animationDelay: "300ms" },
                children:
                  "More than a conference — a movement of ideas, voices, and change-makers. Held on United Nations Day.",
              }),
              e.jsxs("div", {
                className:
                  "flex flex-wrap items-center justify-center gap-3 mb-14 animate-fade-up",
                style: { animationDelay: "450ms" },
                children: [
                  e.jsx("a", {
                    href: "#register",
                    className:
                      "px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-glow text-navy-deep font-semibold shadow-gold hover:scale-105 transition-transform animate-glow-pulse",
                    children: "Register Now",
                  }),
                  e.jsx("a", {
                    href: "#committees",
                    className:
                      "px-8 py-3.5 rounded-full glass text-foreground hover:bg-white/10 transition-colors",
                    children: "Explore Committees",
                  }),
                  e.jsxs("a", {
                    href: BROCHURE_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "px-8 py-3.5 rounded-full glass-gold text-foreground border border-gold/40 backdrop-blur-md shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2",
                    children: ["▤ ", "Download Brochure"],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "animate-fade-up",
                style: { animationDelay: "600ms" },
                children: e.jsx(C, {}),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/60 text-xs uppercase tracking-[0.4em] flex flex-col items-center gap-2 animate-float",
            children: [
              e.jsx("span", { children: "Scroll" }),
              e.jsx("div", {
                className:
                  "w-px h-10 bg-gradient-to-b from-gold to-transparent",
              }),
            ],
          }),
        ],
      }),
      e.jsx("section", {
        className: "relative py-24 px-4 sm:px-6",
        children: e.jsx("div", {
          className: "max-w-6xl mx-auto",
          children: e.jsxs("div", {
            className:
              "glass-gold rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/15 blur-3xl",
              }),
              e.jsx("div", {
                className:
                  "absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-royal/40 blur-3xl",
              }),
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("div", {
                    className:
                      "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                    children: "Section 01 · Dates",
                  }),
                  e.jsxs("div", {
                    className: "grid sm:grid-cols-3 gap-6 items-center",
                    children: [
                      e.jsxs("div", {
                        className:
                          "text-7xl sm:text-8xl font-display font-bold text-neon",
                        children: [
                          "24",
                          e.jsx("sup", {
                            className: "text-2xl",
                            children: "th",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-3xl sm:text-4xl font-display text-gradient-gold",
                            children: "&",
                          }),
                          e.jsx("div", {
                            className:
                              "mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground",
                            children: "October 2026",
                          }),
                          e.jsx("div", {
                            className:
                              "mt-2 text-sm text-gold/90 font-display italic",
                            children: "on United Nations Day",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "text-7xl sm:text-8xl font-display font-bold text-neon",
                        children: [
                          "25",
                          e.jsx("sup", {
                            className: "text-2xl",
                            children: "th",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "neon-rule mt-10 mx-auto max-w-md",
                  }),
                  e.jsx("p", {
                    className:
                      "max-w-2xl mx-auto text-muted-foreground mt-6 text-sm",
                    children:
                      "Coinciding with the founding of the United Nations — a celebration of diplomacy, cooperation, and global citizenship.",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsx("section", {
        id: "vision",
        className: "relative py-28 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "text-center mb-16",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                  children: "Section 02 · Our Vision",
                }),
                e.jsx("h2", {
                  className: "text-5xl sm:text-6xl font-display text-neon",
                  children: "Diplomacy Beyond Walls",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-10 items-start",
              children: [
                e.jsxs("div", {
                  className:
                    "lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85",
                  children: [
                    e.jsxs("p", {
                      children: [
                        "In a world driven by dialogue, collaboration, and innovation,",
                        e.jsx("span", {
                          className: "text-gold",
                          children: " TRIKAYA MUN transcends boundaries",
                        }),
                        " of geography, perspective, and convention.",
                      ],
                    }),
                    e.jsx("p", {
                      children:
                        "Our mission is to create a platform where young leaders engage in meaningful discourse, think critically, speak confidently, and lead responsibly.",
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground italic",
                      children: "Step in. Speak up. Lead beyond limits.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "lg:col-span-5 space-y-4",
                  children: [
                    {
                      n: "01",
                      t: "Discourse",
                      d: "Substantive debate over rhetoric.",
                    },
                    {
                      n: "02",
                      t: "Leadership",
                      d: "Confidence forged on the floor.",
                    },
                    {
                      n: "03",
                      t: "Impact",
                      d: "Ideas that travel beyond the room.",
                    },
                  ].map((t) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "glass rounded-2xl p-6 flex gap-5 hover:translate-x-1 transition-transform",
                        children: [
                          e.jsx("div", {
                            className: "text-3xl font-display text-gold/80",
                            children: t.n,
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", {
                                className: "font-display text-xl",
                                children: t.t,
                              }),
                              e.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: t.d,
                              }),
                            ],
                          }),
                        ],
                      },
                      t.n,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-8 mt-20",
              children: [
                e.jsx(u, { to: 7, label: "Committees" }),
                e.jsx(u, { to: 2, label: "Conference Days" }),
                e.jsx(u, { to: 100, suffix: "%", label: "Diplomatic Spirit" }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("section", {
        className: "relative py-32 px-4 overflow-hidden",
        children: [
          e.jsx("div", { className: "absolute inset-0 bg-grid opacity-40" }),
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/60 to-transparent",
          }),
          e.jsxs("div", {
            className: "relative max-w-5xl mx-auto text-center",
            children: [
              e.jsx("div", {
                className: "text-xs uppercase tracking-[0.4em] text-gold mb-6",
                children: "Section 03 · Our Motto",
              }),
              e.jsxs("h2", {
                className:
                  "text-6xl sm:text-8xl font-display leading-[0.95] mb-8 tracking-wide",
                children: [
                  e.jsx("span", {
                    className: "text-neon",
                    children: "DIPLOMACY",
                  }),
                  e.jsx("span", {
                    className: "block italic text-gradient-gold my-2",
                    children: "Beyond",
                  }),
                  e.jsx("span", {
                    className: "text-neon",
                    children: "DIMENSIONS.",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "max-w-2xl mx-auto text-lg text-muted-foreground",
                children:
                  "At TRIKAYA MUN, diplomacy becomes leadership, collaboration, critical thinking, and the limitless belief that today's youth can create impact far beyond committee rooms.",
              }),
            ],
          }),
        ],
      }),
      e.jsx("section", {
        className: "relative py-24 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto text-center",
          children: [
            e.jsx("div", {
              className: "text-xs uppercase tracking-[0.4em] text-gold mb-4",
              children: "Section 04",
            }),
            e.jsx("h2", {
              className: "text-4xl sm:text-5xl font-display text-neon mb-3",
              children: "Recognised By",
            }),
            e.jsx("p", {
              className: "text-sm text-muted-foreground mb-10",
              children: "Aligned with national & global initiatives.",
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 items-center",
              children: [
                { src: "/assets/recognized/brics.png", n: "BRICS Think Tank Council" },
                { src: "/assets/recognized/viksit.png", n: "Viksit Bharat" },
                { src: "/assets/recognized/du.png", n: "Delhi University" },
                { src: "/assets/recognized/sdg.png", n: "Sustainable Development Goals" },
              ].map((t) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "group glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:glass-gold hover:-translate-y-1 transition-all duration-300 shadow-glow",
                    children: [
                      e.jsx("img", {
                        src: t.src,
                        alt: t.n,
                        loading: "lazy",
                        width: 180,
                        height: 180,
                        className:
                          "h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110",
                      }),
                      e.jsx("div", {
                        className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground text-center",
                        children: t.n,
                      }),
                    ],
                  },
                  t.n,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsx("section", {
        className: "relative py-24 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "text-center mb-14",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                  children: "Section 05 · In Collaboration With",
                }),
                e.jsx("h2", {
                  className: "text-5xl sm:text-6xl font-display text-neon",
                  children: "Our Partners",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid md:grid-cols-2 gap-6",
              children: [
                {
                  n: "Vigilante Foundation",
                  t: "Building Minds · Bridging Future",
                  d: "A youth-led organization empowering students through leadership, public speaking, Model UNs and academic initiatives that turn dialogue into action.",
                },
                {
                  n: "Elion Organization",
                  t: "Where Ideas Become Action",
                  d: "Committed to excellence and community engagement — fostering creativity, teamwork and global awareness to shape responsible leaders for an ever-evolving world.",
                },
              ].map((t) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "group glass rounded-3xl p-8 hover:shadow-glow transition-all duration-500 relative overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/15 blur-3xl group-hover:bg-gold/30 transition",
                      }),
                      e.jsx("div", {
                        className:
                          "text-xs uppercase tracking-[0.3em] text-gold/80 mb-3",
                        children: t.t,
                      }),
                      e.jsx("h3", {
                        className: "text-3xl font-display mb-4 text-neon",
                        children: t.n,
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: t.d,
                      }),
                    ],
                  },
                  t.n,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsx("section", {
        id: "team",
        className: "relative py-20 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto space-y-16",
          children: [
            e.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-6 items-center",
              children: [
                e.jsxs("div", {
                  className: "lg:col-span-4 relative",
                  children: [
                    e.jsx("div", {
                      className:
                        "relative aspect-[3/4] max-w-[320px] mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-gold p-1.5",
                      children: e.jsx("img", {
                        src: F,
                        alt: "Vansh Gupta — Founder",
                        loading: "lazy",
                        width: 1024,
                        height: 1024,
                        className: "w-full h-full object-cover rounded-xl",
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "absolute -bottom-3 -right-3 glass-gold rounded-xl px-4 py-2 text-sm",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[10px] uppercase tracking-[0.3em] text-gold",
                          children: "Founder",
                        }),
                        e.jsx("div", {
                          className: "font-display text-base",
                          children: "Vansh Gupta",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "lg:col-span-8",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                      children: "Section 06 · Founder's Vision",
                    }),
                    e.jsx("h3", {
                      className: "text-4xl font-display mb-5 text-neon",
                      children: "Vansh Gupta",
                    }),
                    e.jsx("blockquote", {
                      className:
                        "text-lg sm:text-xl font-display italic leading-relaxed mb-5 border-l-2 border-gold/60 pl-5",
                      children:
                        '"TRIKAYA is not just about discussion — it is about creating impact that extends far beyond these sessions."',
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children:
                        "It gives me immense pride to welcome you to the maiden edition of TRIKAYA MUN. What you are stepping into is not merely a conference, but a platform built to challenge perspectives, inspire dialogue, and shape individuals into confident global thinkers.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-6 items-center",
              children: [
                e.jsxs("div", {
                  className: "lg:col-span-8 order-2 lg:order-1",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                      children: "Section 07 · Co-Founder's Vision",
                    }),
                    e.jsx("h3", {
                      className: "text-4xl font-display mb-5 text-neon",
                      children: "Anvi Aggarwal",
                    }),
                    e.jsx("blockquote", {
                      className:
                        "text-lg sm:text-xl font-display italic leading-relaxed mb-5 border-l-2 border-gold/60 pl-5",
                      children:
                        '"Help shape a future defined by dialogue and impact."',
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children:
                        "TRIKAYA is founded on the idea that diplomacy is not merely an exchange of words, but a process of understanding perspectives and building meaningful connections. Through this inaugural conference, we aim to provide an environment that encourages intellectual curiosity, confidence and collaborative thinking.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "lg:col-span-4 order-1 lg:order-2 relative",
                  children: [
                    e.jsx("div", {
                      className:
                        "relative aspect-[3/4] max-w-[320px] mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden glass-gold p-1.5",
                      children: e.jsx("img", {
                        src: R,
                        alt: "Anvi Aggarwal — Co-Founder",
                        loading: "lazy",
                        width: 1024,
                        height: 1024,
                        className: "w-full h-full object-cover rounded-xl",
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "absolute -bottom-3 -left-3 glass-gold rounded-xl px-4 py-2 text-sm",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[10px] uppercase tracking-[0.3em] text-gold",
                          children: "Co-Founder",
                        }),
                        e.jsx("div", {
                          className: "font-display text-base",
                          children: "Anvi Aggarwal",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(E, {}),
      e.jsx("section", {
        id: "eligibility",
        className: "relative py-28 px-4 sm:px-6",
        children: e.jsx("div", {
          className: "max-w-3xl mx-auto",
          children: e.jsxs("div", {
            className:
              "glass-gold rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden animate-fade-up",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl",
              }),
              e.jsx("div", {
                className:
                  "relative mx-auto mb-6 w-16 h-16 rounded-full glass flex items-center justify-center text-3xl text-gold",
                children: "\u{1F393}",
              }),
              e.jsx("div", {
                className:
                  "relative text-xs uppercase tracking-[0.4em] text-gold mb-4",
                children: "Eligibility",
              }),
              e.jsx("h2", {
                className:
                  "relative text-4xl sm:text-5xl font-display text-gradient-royal mb-4",
                children: "Who Can Participate",
              }),
              e.jsx("p", {
                className:
                  "relative text-lg sm:text-xl text-foreground/90 font-display italic",
                children: "Classes 8th to College 3rd Year",
              }),
            ],
          }),
        }),
      }),
      e.jsx("section", {
        className: "relative py-28 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "text-center mb-14",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                  children: "Section 09",
                }),
                e.jsx("h2", {
                  className: "text-5xl sm:text-6xl font-display text-neon",
                  children: "Perks of Registering",
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mt-3 italic font-display",
                  children: "Diplomacy. Beyond Dimensions.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              children: P.map((t, s) =>
                e.jsxs(
                  "div",
                  {
                    className: `rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${t.highlight ? "glass-gold shadow-glow scale-[1.02]" : "glass hover:glass-gold"}`,
                    style: { animationDelay: `${s * 50}ms` },
                    children: [
                      e.jsx("div", {
                        className: `w-10 h-10 rounded-full flex items-center justify-center font-display mb-3 ${t.highlight ? "bg-gradient-to-br from-gold to-gold-glow text-navy-deep" : "glass-gold text-gold"}`,
                        children: String(s + 1).padStart(2, "0"),
                      }),
                      e.jsx("div", {
                        className: "font-medium text-sm leading-snug",
                        children: t.text,
                      }),
                      t.highlight &&
                        e.jsx("div", {
                          className:
                            "mt-2 text-[10px] uppercase tracking-[0.2em] text-gold font-semibold",
                          children: "Limited — First 100 Only",
                        }),
                    ],
                  },
                  t.text,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsx("section", {
        className: "relative py-28 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "text-center mb-14",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                  children: "Section 10",
                }),
                e.jsx("h2", {
                  className: "text-5xl sm:text-6xl font-display text-neon",
                  children: "Fee Structure",
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mt-3",
                  children:
                    "Allotment on first-come, first-served basis · non-refundable.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid md:grid-cols-3 gap-5",
              children: T.map((t, s) =>
                e.jsxs(
                  "div",
                  {
                    className: `relative glass rounded-3xl p-8 text-center overflow-hidden ${s === 1 ? "glass-gold scale-[1.03] shadow-glow" : ""}`,
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/10 blur-3xl",
                      }),
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[10px] uppercase tracking-[0.3em] text-gold mb-3",
                            children: "Delegate Fee",
      }),
      e.jsx("section", {
        className: "relative pb-10 px-4 sm:px-6",
        children: e.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: e.jsxs("div", {
            className:
              "glass rounded-2xl border-l-4 border-gold p-6 sm:p-8 flex items-start gap-4 animate-fade-up",
            children: [
              e.jsx("div", {
                className:
                  "shrink-0 w-10 h-10 rounded-full glass-gold flex items-center justify-center text-xl text-gold",
                children: "\u24D8",
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className:
                      "text-[10px] uppercase tracking-[0.3em] text-gold mb-2 font-semibold",
                    children: "Note",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-foreground/85 leading-relaxed",
                    children:
                      "Portfolio will be allotted within one week. All details submitted by the delegate must be accurate and confirmed. The organizing team will not be responsible for incorrect information provided by the delegate.",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
                          e.jsxs("div", {
                            className:
                              "text-5xl font-display font-bold text-gradient-gold mb-4",
                            children: [
                              t.price,
                              e.jsx("span", {
                                className:
                                  "text-sm text-muted-foreground font-body ml-1",
                                children: "/-",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "neon-rule mx-auto w-20 mb-4",
                          }),
                          e.jsx("div", {
                            className: "text-sm text-foreground/80",
                            children: t.for,
                          }),
                          e.jsx("a", {
                            href: "#register",
                            className:
                              "mt-6 inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-glow text-navy-deep font-semibold hover:scale-105 transition-transform",
                            children: "Register",
                          }),
                        ],
                      }),
                    ],
                  },
                  t.for,
                ),
              ),
            }),
            e.jsx("p", {
              className:
                "text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto",
              children:
                "Portfolios are allotted within one week of form submission, based on delegate experience. Once submitted, the delegate fee shall be non-refundable.",
            }),
          ],
        }),
      }),
      e.jsx("section", {
        id: "register",
        className: "relative py-28 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "text-center mb-14",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                  children: "Section 11",
                }),
                e.jsx("h2", {
                  className: "text-5xl sm:text-6xl font-display text-neon",
                  children: "Application Forms",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
              children: O.map((t) =>
                e.jsxs(
                  "a",
                  {
                    href: t.href,
                    target: t.href.startsWith("http") ? "_blank" : void 0,
                    rel: "noreferrer",
                    className:
                      "group relative overflow-hidden glass rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/25 opacity-0 group-hover:opacity-100 transition-opacity",
                      }),
                      e.jsx("div", {
                        className:
                          "relative w-12 h-12 rounded-xl glass-gold flex items-center justify-center text-xl text-gold",
                        children: t.icon,
                      }),
                      e.jsxs("div", {
                        className: "relative flex-1",
                        children: [
                          e.jsx("div", {
                            className: "font-medium",
                            children: t.label,
                          }),
                          e.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: "Open →",
                          }),
                        ],
                      }),
                    ],
                  },
                  t.label,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsx("section", {
        id: "contact",
        className: "relative py-28 px-4 sm:px-6",
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "text-center mb-14",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs uppercase tracking-[0.4em] text-gold mb-4",
                  children: "Section 12",
                }),
                e.jsx("h2", {
                  className: "text-5xl sm:text-6xl font-display text-neon",
                  children: "Feedback & Queries",
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mt-3",
                  children:
                    "Share your feedback or drop a query — we respond on every channel.",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid lg:grid-cols-5 gap-6",
              children: [
                e.jsx("div", {
                  className: "lg:col-span-2 space-y-4",
                  children: [
                    {
                      l: "Instagram",
                      v: "@trikaya_mun",
                      h: "https://instagram.com/trikaya_mun",
                    },
                    {
                      l: "Email",
                      v: "trikayamun@gmail.com",
                      h: "mailto:trikayamun@gmail.com",
                    },
                    {
                      l: "Founder · Vansh Gupta",
                      v: "+91 88824 93831",
                      h: "tel:+918882493831",
                    },
                    {
                      l: "COO · Aarav Goel",
                      v: "+91 88103 55694",
                      h: "tel:+918810355694",
                    },
                  ].map((t) =>
                    e.jsxs(
                      "a",
                      {
                        href: t.h,
                        className:
                          "block glass rounded-2xl p-5 hover:glass-gold transition-all",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[10px] uppercase tracking-[0.3em] text-gold mb-1",
                            children: t.l,
                          }),
                          e.jsx("div", {
                            className: "font-display text-lg",
                            children: t.v,
                          }),
                        ],
                      },
                      t.l,
                    ),
                  ),
                }),
                e.jsxs("form", {
                  className: "lg:col-span-3 glass rounded-3xl p-8 space-y-4",
                  onSubmit: (t) => {
                    t.preventDefault();
                    const s = new FormData(t.target),
                      l = String(s.get("name") || ""),
                      r = String(s.get("email") || ""),
                      p = String(s.get("phone") || ""),
                      n = String(s.get("message") || ""),
                      d = encodeURIComponent(`*Feedback / Query — TRIKAYA MUN*

From: ${l}
Email: ${r}
Phone: ${p}

${n}`);
                    (window.open(
                      `https://wa.me/918882493831?text=${d}`,
                      "_blank",
                    ),
                      window.open(
                        `https://wa.me/918810355694?text=${d}`,
                        "_blank",
                      ),
                      alert(
                        "Thank you! Your feedback / query has been sent to the team via WhatsApp.",
                      ),
                      t.target.reset());
                  },
                  children: [
                    e.jsxs("div", {
                      className: "grid sm:grid-cols-2 gap-4",
                      children: [
                        e.jsx(f, {
                          label: "Full Name",
                          name: "name",
                          required: !0,
                          placeholder: "e.g. Aarav Sharma",
                        }),
                        e.jsx(f, {
                          label: "Email Address",
                          name: "email",
                          type: "email",
                          required: !0,
                          placeholder: "you@example.com",
                        }),
                      ],
                    }),
                    e.jsx(f, {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      required: !0,
                      placeholder: "+91 98765 43210",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "text-[10px] uppercase tracking-[0.3em] text-gold mb-2 block",
                          children: "Message / Query",
                        }),
                        e.jsx("textarea", {
                          name: "message",
                          rows: 4,
                          required: !0,
                          placeholder:
                            "Tell us how we can help, or share your feedback…",
                          className:
                            "w-full bg-transparent border border-border rounded-xl px-4 py-3 focus:border-gold focus:outline-none transition-colors resize-none",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "submit",
                      className:
                        "w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-gold to-gold-glow text-navy-deep font-semibold hover:scale-[1.02] transition-transform",
                      children: "Submit Feedback",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
            e.jsx(z, {}),
    ],
  });
}
function f({ label: t, name: s, type: l = "text", required: r, placeholder: P }) {
  return e.jsxs("div", {
    children: [
      e.jsx("label", {
        className:
          "text-[10px] uppercase tracking-[0.3em] text-gold mb-2 block",
        children: t,
      }),
      e.jsx("input", {
        type: l,
        name: s,
        required: r,
        placeholder: P,
        className:
          "w-full bg-transparent border border-border rounded-xl px-4 py-3 focus:border-gold focus:outline-none transition-colors",
      }),
    ],
  });
}
function z() {
  return e.jsx("footer", {
    className: "relative border-t border-border/50 py-12 px-4 sm:px-6 mt-10",
    children: e.jsxs("div", {
      className:
        "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            e.jsx("div", {
              className: "font-display text-xl text-neon tracking-[0.3em]",
              children: "TRIKAYA MUN",
            }),
            e.jsx("span", {
              className: "text-xs text-muted-foreground hidden sm:inline",
              children: "· Diplomacy. Beyond. Dimensions.",
            }),
          ],
        }),
        e.jsx("div", {
          className: "text-xs text-muted-foreground",
          children: "© 2026 TRIKAYA MUN · All rights reserved.",
        }),
        e.jsxs("div", {
          className: "flex gap-4 text-xs text-muted-foreground",
          children: [
            e.jsx("a", {
              href: "#vision",
              className: "hover:text-gold",
              children: "Vision",
            }),
            e.jsx("a", {
              href: "#committees",
              className: "hover:text-gold",
              children: "Committees",
            }),
            e.jsx("a", {
              href: "#contact",
              className: "hover:text-gold",
              children: "Contact",
            }),
          ],
        }),
      ],
    }),
  });
}
export { _ as component };
