import { useEffect, useMemo, useState } from "react";

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.901 2H22.581L14.541 11.191L24 22H16.594L10.794 15.424L4.902 22H1.219L9.819 12.393L0.75 2H8.344L13.587 7.992L18.901 2ZM17.609 19.77H19.648L7.235 4.113H5.047L17.609 19.77Z" />
    </svg>
  );
}

function GmailEnvelopeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 17L9 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 17L15 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GmailLogoIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" fill="#ffffff" />
      <path
        d="M4 8.5V18H7V11.2L12 14.9L17 11.2V18H20V8.5L12 14.2L4 8.5Z"
        fill="#EA4335"
      />
      <path
        d="M4 8.5L2 7V6.3C2 5.04 3.04 4 4.3 4H5.1L12 9.3L18.9 4H19.7C20.96 4 22 5.04 22 6.3V7L20 8.5L12 14.2L4 8.5Z"
        fill="#FBBC05"
      />
      <path d="M2 7V18C2 19.1 2.9 20 4 20H6.5V10.4L2 7Z" fill="#34A853" />
      <path d="M22 7V18C22 19.1 21.1 20 20 20H17.5V10.4L22 7Z" fill="#4285F4" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="30%" stopColor="#fa7e1e" />
          <stop offset="60%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="url(#instagramGradient)"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="url(#instagramGradient)"
        strokeWidth="2"
      />
      <circle cx="16.7" cy="7.3" r="1.1" fill="url(#instagramGradient)" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        d="M13.9 8.3h1.7V6.1h-1.9c-2 0-3.3 1.2-3.3 3.4v1.5H8.3v2.2h2.1V18h2.4v-4.8h2l.3-2.2h-2.3V9.7c0-.9.3-1.4 1.1-1.4Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function SnapchatPlusIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M12 5.3c2.1 0 3.4 1.4 3.6 2.8.1.7.4 1.1 1 1.3.4.1.8.2 1.2.3.5.1.7.5.6 1-.1.4-.5.7-1 .7-.3 0-.6.1-.9.1-.5.1-.7.5-.6 1 .1.5.4.9.8 1.2.3.2.6.2.9.3.5.1.8.5.8.9s-.3.8-.8.9c-.8.2-1.5.3-2.2.7-.5.3-.9.9-1 1.5-.1.4-.4.6-.8.6H9c-.4 0-.7-.2-.8-.6-.2-.6-.5-1.2-1-1.5-.7-.4-1.4-.5-2.2-.7-.5-.1-.8-.5-.8-.9s.3-.8.8-.9c.3-.1.6-.1.9-.3.4-.3.7-.7.8-1.2.1-.5-.1-.9-.6-1-.3 0-.6-.1-.9-.1-.5 0-.9-.3-1-.7-.1-.5.1-.9.6-1 .4-.1.8-.2 1.2-.3.6-.2.9-.6 1-1.3.2-1.4 1.5-2.8 3.6-2.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M14.9 6.1h2.8v2.8M17.7 6.1l-3.7 3.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.8" cy="6.2" r="2.2" fill="#ffffff" />
      <path
        d="M17.8 5.35v1.7M16.95 6.2h1.7"
        stroke="#111827"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SnapchatImageIcon({ className }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md bg-white/15 p-1">
      <img
        src="https://link.snapchat.com/plus/plus.png"
        alt="Snapchat Plus"
        className={className}
        loading="eager"
        draggable="false"
      />
    </span>
  );
}

function GmailFaviconIcon({ className }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md bg-white/90 p-1 shadow-sm ring-1 ring-black/5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s"
        alt="Gmail favicon"
        className={className}
        loading="eager"
        draggable="false"
      />
    </span>
  );
}

const links = [
  {
    label: "Twitter",
    icon: "fab fa-x-twitter",
    iconType: "x",
    href: "https://x.com/bolamilekan2068",
    brandLight: "#000000",
    brandDark: "#000000",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "GitHub",
    icon: "fab fa-github",
    href: "https://github.com/bakareolamilekan365-tech/",
    brandLight: "#181717",
    brandDark: "#181717",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "LinkedIn",
    icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/olamilekan-bakare",
    brandLight: "#0a66c2",
    brandDark: "#0a66c2",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "Instagram",
    iconType: "instagram",
    href: "https://www.instagram.com/black.is.beautiful.original",
    brandLight: "#e1306c",
    brandDark: "#e1306c",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "Snapchat",
    iconType: "snapchatImage",
    href: "https://www.snapchat.com/add/dahblackboy001",
    brandLight: "#fffc00",
    brandDark: "#fffc00",
    textLight: "#111827",
    textDark: "#111827",
  },
  {
    label: "Facebook",
    iconType: "facebook",
    href: "https://www.facebook.com/BakareOlamilekanAbdulkarim",
    brandLight: "#1877f2",
    brandDark: "#1877f2",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "Gmail (Primary)",
    iconType: "gmailFavicon",
    href: "mailto:bakareolamilekan365@gmail.com",
    brandLight: "#ea4335",
    brandDark: "#ea4335",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "Gmail (Backup)",
    iconType: "gmailFavicon",
    href: "mailto:bolamilekan2068@gmail.com",
    brandLight: "#ea4335",
    brandDark: "#ea4335",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
  {
    label: "Discord",
    icon: "fab fa-discord",
    href: "https://discord.com/users/bola_senpai",
    brandLight: "#5865f2",
    brandDark: "#5865f2",
    textLight: "#ffffff",
    textDark: "#ffffff",
  },
];

const styles = {
  editorial: {
    name: "Minimal Editorial",
    shell: "from-stone-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950",
    frame:
      "border-zinc-300/60 bg-white/80 shadow-[0_20px_50px_rgba(20,20,20,0.08)] dark:border-zinc-700/70 dark:bg-zinc-900/65 dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
    tag: "font-serif",
    title: "font-serif tracking-wide",
    subtitle: "font-sans",
    card: "rounded-lg border-zinc-300/60 bg-white text-zinc-800 hover:border-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-300",
    icon: "text-zinc-600 dark:text-zinc-300",
  },
  brutsoft: {
    name: "Neo-Brutalist Soft",
    shell: "from-amber-50 to-orange-100 dark:from-zinc-900 dark:to-stone-900",
    frame:
      "border-zinc-900 bg-white shadow-[10px_10px_0px_0px_rgba(20,20,20,0.9)] dark:border-zinc-200 dark:bg-zinc-900 dark:shadow-[10px_10px_0px_0px_rgba(229,229,229,0.65)]",
    tag: "font-sans",
    title: "font-black uppercase tracking-tight",
    subtitle: "font-medium",
    card: "rounded-xl border-zinc-900 bg-amber-100 text-zinc-900 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-amber-200 dark:border-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
    icon: "text-zinc-900 dark:text-zinc-100",
  },
  glasslite: {
    name: "Glassmorphism Lite",
    shell: "from-sky-100 to-blue-200 dark:from-slate-900 dark:to-slate-800",
    frame:
      "border-white/50 bg-white/55 shadow-[0_20px_60px_rgba(0,32,90,0.2)] backdrop-blur-xl dark:border-white/15 dark:bg-white/5 dark:shadow-[0_20px_70px_rgba(0,0,0,0.5)]",
    tag: "font-sans",
    title: "font-semibold tracking-wide",
    subtitle: "font-sans",
    card: "rounded-2xl border-white/60 bg-white/70 text-slate-700 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15",
    icon: "text-sky-700 dark:text-sky-300",
  },
  mono: {
    name: "Monochrome Utility",
    shell: "from-zinc-100 to-zinc-200 dark:from-black dark:to-zinc-900",
    frame:
      "border-zinc-400 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] dark:border-zinc-700 dark:bg-zinc-950 dark:shadow-[0_20px_55px_rgba(0,0,0,0.5)]",
    tag: "font-mono",
    title: "font-mono tracking-normal",
    subtitle: "font-mono",
    card: "rounded-md border-zinc-400 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800",
    icon: "text-zinc-700 dark:text-zinc-200",
  },
  warmcraft: {
    name: "Warm Minimal Craft",
    shell: "from-amber-50 to-rose-50 dark:from-stone-900 dark:to-stone-800",
    frame:
      "border-amber-200 bg-white shadow-[0_18px_40px_rgba(80,50,20,0.12)] dark:border-stone-700 dark:bg-stone-900 dark:shadow-[0_18px_52px_rgba(0,0,0,0.45)]",
    tag: "font-serif",
    title: "font-serif",
    subtitle: "font-sans",
    card: "rounded-xl border-amber-200 bg-amber-50 text-stone-800 hover:bg-amber-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700",
    icon: "text-amber-700 dark:text-amber-300",
  },
  darkluxe: {
    name: "Dark Luxe Minimal",
    shell: "from-zinc-950 to-slate-900 dark:from-zinc-950 dark:to-slate-900",
    frame:
      "border-zinc-700/80 bg-zinc-900/75 shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-md dark:border-zinc-700/80 dark:bg-zinc-900/75",
    tag: "font-serif",
    title: "font-serif tracking-[0.08em]",
    subtitle: "font-sans",
    card: "rounded-lg border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-zinc-400 hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-900",
    icon: "text-zinc-300 dark:text-zinc-300",
  },
  retrotech: {
    name: "Retro Tech Clean",
    shell: "from-cyan-50 to-slate-100 dark:from-slate-900 dark:to-cyan-950",
    frame:
      "border-cyan-300 bg-white shadow-[0_0_0_1px_rgba(8,145,178,0.2),0_18px_45px_rgba(0,40,60,0.18)] dark:border-cyan-900 dark:bg-slate-900 dark:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_20px_55px_rgba(0,0,0,0.5)]",
    tag: "font-mono",
    title: "font-mono uppercase tracking-wider",
    subtitle: "font-mono",
    card: "rounded-md border-cyan-300 bg-cyan-50 text-slate-800 hover:bg-cyan-100 dark:border-cyan-900 dark:bg-slate-800 dark:text-cyan-100 dark:hover:bg-slate-700",
    icon: "text-cyan-700 dark:text-cyan-300",
  },
};

const defaultStyle = "editorial";

export default function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "dark",
  );
  const [styleKey, setStyleKey] = useState(
    () => localStorage.getItem("styleKey") || defaultStyle,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("mode", mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("styleKey", styleKey);
  }, [styleKey]);

  const current = useMemo(
    () => styles[styleKey] || styles[defaultStyle],
    [styleKey],
  );

  return (
    <div
      className={`min-h-screen bg-gradient-to-br px-5 py-6 transition-colors ${current.shell}`}
    >
      <div className="mx-auto flex w-full max-w-[680px] flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/60 p-3 backdrop-blur dark:border-white/10 dark:bg-black/25">
          <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Design preset control
          </div>
          <div className="flex items-center gap-2">
            <select
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-0 transition focus:border-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              value={styleKey}
              onChange={(e) => setStyleKey(e.target.value)}
              aria-label="Choose design style"
            >
              {Object.entries(styles).map(([key, style]) => (
                <option key={key} value={key}>
                  {style.name}
                </option>
              ))}
            </select>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              aria-label="Toggle light dark mode"
              onClick={() =>
                setMode((prev) => (prev === "dark" ? "light" : "dark"))
              }
            >
              <i className={mode === "light" ? "fas fa-sun" : "fas fa-moon"} />
            </button>
          </div>
        </div>

        <main
          className={`w-full rounded-3xl border p-6 sm:p-8 ${current.frame}`}
        >
          <header className="mb-8 text-center">
            <div
              className={`mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 ${current.tag}`}
            >
              {current.name}
            </div>
            <div className="mb-3 text-6xl text-[#e94560] sm:text-7xl">
              <i className="fas fa-user-circle" />
            </div>
            <h1
              className={`mb-2 text-2xl text-zinc-900 dark:text-zinc-100 sm:text-3xl ${current.title}`}
            >
              Olamilekan Bakare
            </h1>
            <p
              className={`text-sm text-zinc-600 dark:text-zinc-300 ${current.subtitle}`}
            >
              Software Engineer | Fullstack Developer | Public Speaker | Tech
              Enthusiast
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://bakareolamilekan365-tech.github.io/littlelink/"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:shadow-md dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-300"
              >
                <i className="fas fa-briefcase" />
                <span>Portfolio</span>
              </a>
            </div>
          </header>

          <section
            aria-label="Social links"
            className="grid grid-cols-3 gap-3 sm:gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group flex min-h-[104px] flex-col items-center justify-center gap-2 border p-3 text-center text-[11px] font-semibold transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg sm:min-h-[116px] ${current.card}`}
                style={{
                  backgroundColor:
                    mode === "dark" ? link.brandDark : link.brandLight,
                  borderColor:
                    mode === "dark" ? link.brandDark : link.brandLight,
                  color: mode === "dark" ? link.textDark : link.textLight,
                }}
              >
                {link.iconType === "x" ? (
                  <XIcon className="h-6 w-6 transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "snapchatImage" ? (
                  <SnapchatImageIcon className="h-6 w-6 object-contain transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "snapchat" ? (
                  <SnapchatPlusIcon className="h-6 w-6 transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "instagram" ? (
                  <InstagramIcon className="h-6 w-6 transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "facebook" ? (
                  <FacebookIcon className="h-6 w-6 transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "gmailFavicon" ? (
                  <GmailFaviconIcon className="h-6 w-6 object-contain transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "gmailLogo" ? (
                  <GmailLogoIcon className="h-6 w-6 transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : link.iconType === "gmail" ? (
                  <GmailEnvelopeIcon className="h-6 w-6 transition group-hover:scale-110 sm:h-7 sm:w-7" />
                ) : (
                  <i
                    className={`${link.icon} text-xl transition group-hover:scale-110 sm:text-2xl`}
                  />
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </section>

        </main>
      </div>
    </div>
  );
}
