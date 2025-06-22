// components/About.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        opacity: 0,
        y: 40,
        duration: 5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-vittypalette-cream text-vittypalette-brown py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="about-fade md:w-1/2 w-full">
          <img
            src="/about.png" 
            alt="About Vitty Agency"
            className="w-full max-w-md rounded-xl shadow-xl mx-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="about-fade md:w-1/2 w-full space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold">We Help Coaches Grow Smarter, Not Harder</h2>
          <p className="text-base">
            At <strong>Vitty Agency</strong>, we specialize in helping coaches get consistent leads,
            grow their visibility, and attract high-ticket clients — using the power of
            <span className="font-semibold"> SEO, Meta Ads, and AI-driven content.</span>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>🚀 Only for coaches (business, fitness, mindset)</li>
            <li>⚙️ Done-for-you systems that scale with you</li>
            <li>📞 Booked calls likes, traffic or vanity metrics</li>
            <li>🧠 AI-powered content creation = saved time</li>
            <li>🎯 Personalized attention: We work with only 4 clients at a time</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
