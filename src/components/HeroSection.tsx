"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const playWelcome = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const greeting = new SpeechSynthesisUtterance(
      "Assalamu alaikum. Welcome to AxR Tech. Let's build something powerful together.",
    );
    greeting.lang = "en-IN";
    greeting.rate = 0.92;
    greeting.pitch = 0.94;
    greeting.onend = () => setIsSpeaking(false);
    greeting.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(greeting);
  };

  return (
    <section id="home" className="hero-scene relative isolate overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-layout relative z-10 mx-auto grid min-h-[790px] max-w-[1440px] items-center gap-8 px-6 pb-32 pt-36 sm:px-10 lg:grid-cols-[1.02fr_.98fr] lg:px-16">
        <motion.div
          className="hero-copy relative z-20 max-w-[680px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="hero-eyebrow mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]">
            <span className="status-dot" />
            <span>Full-stack web developer · Digital designer</span>
          </div>

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/55">AxR Tech presents</p>
          <h1 className="hero-title mb-7 font-black uppercase leading-[.91] tracking-[-.055em]">
            <span>Building</span>
            <span>Digital</span>
            <span className="hero-title-accent">Experiences.</span>
          </h1>
          <p className="mb-9 max-w-lg text-lg leading-relaxed text-white/65 sm:text-xl">
            Modern Web Solutions. Powerful Ideas.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#portfolio"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hero-cta-primary inline-flex items-center gap-4 rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-[0.12em]"
            >
              Explore projects <ArrowUpRight size={19} />
            </motion.a>
            <button
              type="button"
              onClick={playWelcome}
              aria-label={isSpeaking ? "Stop welcome voice" : "Play welcome voice"}
              aria-pressed={isSpeaking}
              className="voice-control inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/20 bg-white/[0.035] text-[#caff4a] transition hover:border-[#caff4a]/70 hover:bg-[#caff4a]/10"
            >
              {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">Hear the welcome</span>
          </div>
        </motion.div>

        <div className="hero-art relative mx-auto h-[500px] w-full max-w-[650px] sm:h-[610px] lg:h-[680px]">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="orbit orbit-three" aria-hidden="true" />
          <div className="orbit-core" aria-hidden="true"><span /></div>

          <motion.div
            className="portrait-stage absolute inset-x-[11%] bottom-0 top-[7%]"
            initial={{ opacity: 0, y: 28, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
          >
            <Image
              src="/abrar-profile.jpg"
              alt="Mohamed Abrar, founder of AxR Tech"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 46vw"
              className="hero-portrait object-cover"
            />
            <div className="portrait-shade" aria-hidden="true" />
            <div className="portrait-caption">
              <span className="status-dot" />
              <span>Mohamed Abrar <i>/</i> Founder</span>
            </div>
          </motion.div>

          <motion.div className="floating-skill skill-left" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <span className="skill-symbol">&lt;/&gt;</span><span><b>Web</b><small>Design</small></span>
          </motion.div>
          <motion.div className="floating-skill skill-right" animate={{ y: [0, 9, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}>
            <span className="skill-symbol">{"{ }"}</span><span><b>Full stack</b><small>Developer</small></span>
          </motion.div>
          <motion.div className="floating-skill skill-bottom" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
            <span className="skill-symbol">✦</span><span><b>Performance</b><small>First</small></span>
          </motion.div>
        </div>

        <div className="hero-proof absolute bottom-7 left-6 right-6 z-20 grid grid-cols-2 overflow-hidden rounded-2xl sm:left-10 sm:right-10 lg:left-16 lg:right-16 lg:grid-cols-4">
          <div className="proof-item"><b>02</b><span>Featured projects</span></div>
          <div className="proof-item"><b>Web</b><span>Development</span></div>
          <div className="proof-item"><b>UI/UX</b><span>Design</span></div>
          <div className="proof-item"><b>100%</b><span>Commitment</span></div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true"><span className="scroll-mouse"><i /></span><span>Scroll to explore</span></div>
    </section>
  );
}
