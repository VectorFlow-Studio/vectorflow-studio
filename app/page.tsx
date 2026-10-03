// app/page.tsx — Next.js App Router + Tailwind CSS (v3 or v4)
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Framer Sites",
    text: "Fast, editable marketing sites your team can update without a developer.",
    icon: <path d="M5 3h14v6H12l7 6H5V3Zm0 12h7v6l-7-6Z" />,
  },
  {
    title: "UI/UX Design",
    text: "Research-led product design, from user flows to a finished component library.",
    icon: <path d="M4 4h16v12H4V4Zm4 16h8M12 16v4" />,
  },
  {
    title: "Custom Web Apps",
    text: "Dashboards, portals and SaaS products built in Next.js and TypeScript.",
    icon: <path d="m8 8-5 4 5 4m8-8 5 4-5 4m-3-10-2 12" />,
  },
];

const projects = [
  {
    name: "Focus Flow",
    type: "Productivity app landing page",
    image: "/projects/wait1.jpeg", // Add image path here
    link: "", // Live demo or template link
    tone: "from-purple-500/30 via-indigo-500/20 to-slate-900",
    span: "lg:col-span-2",
  },
  {
    name: "Review Marquee",
    type: "Framer component",
    image: "/projects/review-marquee.png",
    link: "https://www.framer.com/marketplace/components/minimal-reviewticker/",
    tone: "from-sky-500/30 via-blue-500/20 to-slate-900",
    span: "",
  },
  {
    name: "Pricing Card",
    type: "Framer component",
    image: "/projects/pricing-card.png",
    link: "https://www.framer.com/marketplace/components/dark-pricing-card/",
    tone: "from-emerald-400/30 via-teal-500/20 to-slate-900",
    span: "",
  },
  {
    name: "Synapse AI",
    type: "AI SaaS landing page",
    image: "/projects/wait2.jpeg", // Add image path here
    link: "",
    tone: "from-fuchsia-500/30 via-violet-500/20 to-slate-900",
    span: "lg:col-span-2",
  },
];
const plans = [
  {
    name: "Landing Page",
    price: "$299",
    note: "Delivered in 5-7 days",
    featured: false,
    features: [
      "1 Custom Landing Page",
      "Framer or Next.js / Tailwind",
      "Mobile-Optimized & Responsive",
      "Basic SEO & Fast Load Speed",
      "1 Week Support Post-Launch",
    ],
  },
  {
    name: "Full Website",
    price: "$599",
    note: "Delivered in 7–14 days",
    featured: true,
    features: [
      "Up to 5 Custom Pages",
      "Framer CMS or Next.js App Router",
      "Advanced Animations & Interactions",
      "SEO, OpenGraph & Analytics Setup",
      "2 Weeks Support Post-Launch",
    ],
  },
  {
    name: "Custom UI / Asset Kit",
    price: "$199",
    note: "Delivered in 2–3 days",
    features: [
      "Custom Interactive Components",
      "Framer / React Code Export",
      "Dark-Mode Specialized Design",
      "Complete Source Files",
      "Direct Revisions",
    ],
  },
];

const socials = [
  { label: "X", href: "https://x.com", path: "M4 4l16 16M20 4 4 20" },
  { label: "LinkedIn", href: "https://linkedin.com", path: "M4 9h4v11H4V9Zm6 0h4v2c1-2 6-3 6 2v7h-4v-6c0-2-2-2-2 0v6h-4V9ZM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" },
  { label: "Dribbble", href: "https://dribbble.com", path: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 6c6 1 10-1 13-5M9 4c4 5 6 10 6 16M3 13c6-2 12-1 18 2" },
];

function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Page() {
  return (
	<div className="mx-auto min-h-screen min-w-0 w-full max-w-[980px] border-x border-slate-800 bg-slate-950 pt-[70px] text-slate-300 antialiased selection:bg-amber-300 selection:text-slate-950 md:pt-[82px]">
	<Navbar links={links} />

	<main>
				{/* Hero */}
				<section id="home" className="relative scroll-mt-16 overflow-hidden border-b border-slate-800">
					<div className="pointer-events-none absolute -top-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl md:-top-75 md:h-150 md:w-150" />
					<div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-8 pb-6 pt-8 text-center md:px-10 md:pb-8 md:pt-12">
	            <p className="mx-auto mb-6 w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm text-slate-400">Now booking projects for November</p>
				<h1 className="w-full max-w-4xl self-start text-left text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
			  We design and build <span className="text-amber-300">Framer sites</span> that actually convert.
				</h1>
				<p className="mt-6 w-full max-w-xl self-start text-left text-base leading-relaxed text-slate-300 md:text-lg">
              VectorFlow Studio is a small design and development studio. We build Framer sites, product interfaces and custom web apps for startups that want to ship in weeks, not quarters.
				</p>
				<div role="img" aria-label="Specializing in Framer" className="mt-6 inline-flex self-start items-center gap-[7px] rounded-xl border border-white/20 bg-black px-[9px] py-[7px] text-white">
					<svg viewBox="0 0 8 12" aria-hidden="true" className="h-3 w-2 shrink-0 fill-current">
						<path d="M8 0v4H4L0 0h8Z" />
						<path d="M0 4h4l4 4H0V4Z" />
						<path d="M0 8h4v4L0 8Z" />
					</svg>
					<span className="whitespace-nowrap text-xs font-semibold leading-none">Specializing in Framer</span>
				</div>
			<div className="mt-6 flex w-full flex-row items-center justify-start gap-2 lg:mt-8">
  <a
    href="#contact"
    className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-amber-300 px-3 py-2 text-sm font-semibold text-slate-950 transition-all duration-150 active:scale-95 active:bg-amber-400 sm:px-5 sm:py-2.5 sm:text-base sm:hover:bg-amber-200"
  >
    Book a call
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.33 1.9.62 2.8a2 2 0 0 1-.45 2.11L8 8.88a16 16 0 0 0 7.12 7.12l1.25-1.25a2 2 0 0 1 2.11-.45c.9.29 1.84.5 2.8.62a2 2 0 0 1 1.72 2Z" />
    </svg>
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=support%40vectorflowstudio.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-fit items-center whitespace-nowrap rounded-full border border-slate-700 px-3 py-2 text-sm font-semibold text-white transition-all duration-150 active:scale-95 active:border-slate-500 active:bg-slate-900 sm:px-5 sm:py-2.5 sm:text-base sm:hover:border-slate-500 sm:hover:bg-slate-800"
  >
    Email us
  </a>
</div>
			<dl className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-slate-800 pt-8 text-center">{[
	                {
	                  value: "1",
	                  label: "projects shipped",
	                  icon: <><path d="M12 15 9 12a22 22 0 0 1 2-4 13 13 0 0 1 11-5c0 3-1 8-6 11a22 22 0 0 1-4 1Z" /><path d="M9 12H5s1-3 3-4M12 15v4s3-1 4-3M7 17l-3 3M15 8h.01" /></>,
	                },
	                {
	                  value: "14 days",
	                  label: "average first launch",
	                  icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
	                },
	                {
	                  value: "Soon",
	                  label: "client rating",
	                  icon: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
	                },
	              ].map((metric) => (
	                <div key={metric.label} className="flex flex-col items-center"><Icon className="mx-auto mb-2.5 block h-6 w-6 text-amber-300">{metric.icon}</Icon><dt className="text-xl font-semibold text-white md:text-2xl">{metric.value}</dt><dd className="mt-1 text-xs text-slate-500 md:text-sm">{metric.label}</dd></div>
	              ))}</dl></div></section>
        {/* Services */}
			<section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-8 py-12 sm:px-6 md:px-8 md:py-20 lg:py-18 border-b border-slate-800">
  				<div className="max-w-2xl text-left">
    				<h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
     					 What we build
    				</h2>
    				<p className="mt-2 text-sm text-slate-400 sm:text-base">
      					Three services, one team. Hire us for one, or run a whole launch with us.
    				</p>
  				</div>

  				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
   					{services.map((s) => (
      				<article
        				key={s.title}
        				className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-150 active:scale-[0.98] active:border-slate-600 active:bg-slate-800/80 sm:hover:border-slate-700 sm:hover:bg-slate-900 sm:p-7"
      				>
        				<div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-700/50 bg-slate-800 text-amber-300 transition-colors group-active:bg-amber-300 group-active:text-slate-950 sm:group-hover:bg-amber-300 sm:group-hover:text-slate-950 sm:h-12 sm:w-12">
          					<Icon>{s.icon}</Icon>
       					</div>
        
       					<h3 className="mt-5 text-lg font-semibold tracking-tight text-white sm:mt-6 sm:text-xl">
          					{s.title}
        				</h3>
        
        				<p className="mt-2.5 text-sm leading-relaxed text-slate-400 sm:mt-3">
          					{s.text}
        				</p>
      				</article>
    				))}
  				</div>
		</section>
		{/* Services Capabilities Grid */}
<section id="services" className="w-full scroll-mt-20 border-b border-slate-800 bg-slate-950 py-16 sm:py-20 md:py-24">
  <div className="mx-auto max-w-6xl px-8 sm:px-6 md:px-8">
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Left Sidebar Label */}
      <div className="lg:col-span-3">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Services & Capabilities
        </span>
      </div>

      {/* Right Content Area */}
      <div className="lg:col-span-9">
        <h2 className="text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl md:text-3xl">
          Everything a modern site needs — strategy, design, build, and ongoing improvement. All tailored for high-conversion web experiences.
        </h2>

        {/* 3-Column Grid with Custom SVG Icons */}
        <div className="mt-10 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Landing Pages */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Landing Pages</span>
          </div>

          {/* Full Websites */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Full Websites</span>
          </div>

          {/* Figma to Framer */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Figma to Framer</span>
          </div>

          {/* Custom Code & React */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>Custom Code & React</span>
          </div>

          {/* Custom Components */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>Custom Components</span>
          </div>

          {/* SEO Optimization */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>SEO Optimization</span>
          </div>

          {/* Framer Templates */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <span>Framer Templates</span>
          </div>

          {/* Website Migration */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Website Migration</span>
          </div>

          {/* Effects & Animations */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Effects & Animations</span>
          </div>

          {/* Maintenance & Fixes */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Maintenance & Fixes</span>
          </div>

          {/* Domain & DNS Setup */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>Domain & DNS Setup</span>
          </div>

          {/* CMS & Blog Setup */}
          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
            <svg className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span>CMS & Blog Setup</span>
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 active:scale-95 sm:hover:border-slate-500 sm:hover:bg-slate-800"
          >
            Get Started
            <svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>        {/* Portfolio */}
<section
  id="work"
  className="mx-auto max-w-6xl scroll-mt-20 px-8 py-8 sm:px-8 md:px-8 md:py-12 lg:py-12 border-b border-slate-800"
>
  <div className="flex flex-col justify-between gap-4 text-left md:flex-row md:items-end">
    <div>
      <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        Selected work & concepts
      </h2>
      <p className="mt-2 max-w-sm text-sm text-slate-400 sm:text-base">
        A selection of Framer sites, UI assets, and web builds.
      </p>
    </div>
    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=support%40vectorflowstudio.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-all duration-150 active:scale-95 active:opacity-80 sm:hover:text-amber-200"
>
  Request custom demo
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</a>
  </div>

  <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-3">
    {projects.map((project) => (
  <Link
    key={project.name}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 transition-all duration-300 hover:border-slate-700 ${project.span}`}
  >
    {/* Ambient Glow Background */}
    <div
      className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${project.tone} opacity-40 transition-opacity duration-300 group-hover:opacity-70`}
    />

    {/* Top Text Details + Arrow Icon */}
    <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
      <div>
        <span className="text-xs font-medium text-slate-400 sm:text-sm">{project.type}</span>
        <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{project.name}</h3>
      </div>
      {/* Top-Right Arrow Icon on Hover */}
      <div className="rounded-full border border-slate-800 bg-slate-900/80 p-2 text-slate-400 transition-colors duration-200 group-hover:border-slate-700 group-hover:text-white">
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>

    {/* Full-Height Image Container */}
    <div className="relative z-10 aspect-[16/10] sm:aspect-[16/9] w-full flex-1 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900">
      <Image
        src={project.image}
        alt={`${project.name} Preview`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </Link>
))}
  </div>
</section>

{/* Pricing */}
<section
  id="pricing"
  className="mx-auto max-w-6xl scroll-mt-20 border-t border-slate-800 px-8 py-12 sm:px-6 md:px-8 md:py-20 lg:py-18"
>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
      Transparent pricing, fixed scope
    </h2>
    <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
      No hidden fees or unexpected revisions. Every project includes dedicated 1-on-1 collaboration and direct daily updates.
    </p>
  </div>

  <div className="mt-8 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-3">
    {plans.map((p) => (
      <div
        key={p.name}
        className={`flex flex-col justify-between rounded-2xl border p-5 transition-all duration-150 active:scale-[0.98] sm:p-7 md:p-8 ${
          p.featured
            ? "border-amber-300 bg-slate-900 shadow-2xl shadow-amber-300/10 active:border-amber-200"
            : "border-slate-800 bg-slate-900/60 active:border-slate-600 sm:hover:border-slate-700"
        }`}
      >
        <div>
          <div className="flex flex-col items-start gap-2">
  {p.featured ? (
    <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-950">
      Recommended
    </span>
  ) : (
    /* Invisible spacer keeps title tops aligned */
    <div className="h-6" aria-hidden="true" />
  )}
  <h3 className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">
    {p.name}
  </h3>
</div>

          <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl">
            {p.price}
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">{p.note}</p>

          <ul className="mt-6 space-y-3 text-xs text-slate-300 sm:mt-8 sm:text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 sm:h-5 sm:w-5">
                  <path d="m5 12 5 5 9-10" />
                </Icon>
                <span className="leading-tight">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          className={`mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-150 active:scale-95 ${
            p.featured
              ? "bg-amber-300 text-slate-950 active:bg-amber-400 sm:hover:bg-amber-200"
              : "border border-slate-700 text-white active:bg-slate-800 sm:hover:border-slate-500 sm:hover:bg-slate-800"
          }`}
        >
          Get Started — {p.name}
        </a>
      </div>
    ))}
  </div>
</section>
      {/* Closing CTA */}
<section id="contact" className="w-full border-y border-slate-800 bg-slate-900/50 py-16 sm:py-20 md:py-24">
  <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
      Tell us what you&apos;re building
    </h2>
    
    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
      Book a call or send us an email. You&apos;ll leave with a clear scope, estimated timeline, and fixed quote.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      {/* Book a Call (No Link) */}
      <a
        href="https://cal.com/vectorflow-studio/30min"
          target="_blank"
          rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-150 active:scale-95 active:bg-amber-400 sm:w-auto sm:hover:bg-amber-200"
      >
        Book a Call
      </a>
      
      {/* Send an Email (Direct Gmail Link) */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=support%40vectorflowstudio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-full border border-slate-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-150 active:scale-95 active:bg-slate-800 sm:w-auto sm:hover:border-slate-500 sm:hover:bg-slate-800"
      >
        Send an Email
      </a>
    </div>

    <p className="mt-6 text-xs text-slate-400">
  
</p>
  </div>
</section>
      </main>

      {/* Footer */}
      <div className="w-full bg-slate-950 pb-6">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-6 md:px-8">
    {/* Left / Center on Mobile: Logo + Tagline strictly on the same line */}
    <div className="flex flex-row items-center justify-center gap-1 text-xs text-slate-500 sm:text-sm">
      <Image src="/logo.png" alt="VectorFlow Studio Logo" width={20} height={20} className="h-8 w-auto shrink-0 opacity-70" />
      <span>
        &copy; {new Date().getFullYear()} VectorFlow Studio — High-velocity web experiences, designed and built in Framer & Next.js.
      </span>
    </div>

    {/* Right / Center on Mobile: SVG Social Icons */}
    <div className="flex w-full items-center justify-center gap-3 sm:w-auto sm:justify-end">
      {/* X (Twitter) */}
      <a
        href="https://x.com/vectorFlow26"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-150 active:scale-95 sm:hover:border-slate-600 sm:hover:text-white"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Framer */}
      <a
        href="https://www.framer.com/@vectorflow-studio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Framer Profile"
        className="grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-150 active:scale-95 sm:hover:border-slate-600 sm:hover:text-white"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      </a>

      {/* Discord */}
      <a
        href="https://discord.com/users/1546242093364547677"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        className="grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-150 active:scale-95 sm:hover:border-slate-600 sm:hover:text-white"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        aria-label="LinkedIn"
        className="grid h-9 w-9 place-items-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-150 active:scale-95 sm:hover:border-slate-600 sm:hover:text-white"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </div>
  </div>

{/* Powered By Section */}
<div className="flex items-center pt-8 md:pt-6 justify-center gap-2 text-xs text-slate-500">
 {/* Power Icon with Glowing Gold Pulse */}
  <div className="relative flex items-center justify-center">
    {/* Ambient Outer Glow */}
    <span className="absolute h-3 w-3 animate-ping rounded-full bg-amber-400/40 opacity-75" />
    
    {/* Lightning Bolt Icon */}
    <svg
      className="relative h-3.5 w-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <span>Powered by</span>

  {/* Next.js Badge */}
  <a
    href="https://nextjs.org"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5  px-2 py-0.5 font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
  >
    <svg className="h-5 w-5 fill-current" viewBox="0 0 180 180">
      <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
        <circle cx="90" cy="90" fill="#FFF" r="90" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" fill="#000" r="90" />
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V72.237l70.015 90.963a89.658 89.658 0 0013.379-5.68z" fill="url(#paint0_linear)" />
        <path d="M115 54h12v72h-12z" fill="url(#paint1_linear)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
          <stop stopColor="#FFF" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
          <stop stopColor="#FFF" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    Next.js
  </a>

  <span>&</span>

  {/* Tailwind CSS Badge */}
  <a
    href="https://tailwindcss.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-2 py-0.5 font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-sky-400"
  >
    <svg className="h-3.5 w-3.5 fill-sky-400" viewBox="0 0 24 24">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
    Tailwind CSS
  </a>
</div>
</div>  
 </div>
  );
}