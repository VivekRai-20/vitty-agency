// components/Hero.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
        id="hero"
      ref={heroRef}
      className="bg-vittypalette-cream min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-16 md:py-20"
    >
      {/* Left Content */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
        <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-vittypalette-brown leading-snug">
          We Help Coaches Attract <br />
          High-Paying Clients – Every Month
        </h1>
        <p className="hero-text text-base sm:text-lg text-vittypalette-brown max-w-xl mx-auto md:mx-0">
          Done-for-you SEO, Meta Ads & AI Content Systems that grow your coaching business on autopilot.
        </p>
        <ul className="hero-text space-y-2 text-vittypalette-maroon text-sm sm:text-base font-medium">
          <li>🎯 Only for Business & Health Coaches</li>
          <li>🚀 Booked Calls. Real Results. No Guesswork.</li>
          <li>🤖 Save Time with AI-Powered Content</li>
        </ul>
        <div className="hero-text">
          <a
            href="https://wa.me/917777034392"
            className="inline-block bg-vittypalette-beige text-vittypalette-brown px-6 py-3 rounded-xl text-base sm:text-lg font-semibold hover:scale-105 transition"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
        <img
          src="/hero.jpeg"
          alt="Hero Illustration"
          className="w-72 sm:w-96 md:max-w-md rounded-2xl shadow-xl object-cover"
        />
      </div>
    </section>
  );
}
