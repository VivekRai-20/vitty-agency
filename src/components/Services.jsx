import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "SEO for Coaches",
    icon: "/seo.png",
    description:
      "Rank #1 on Google and get discovered by high-paying clients actively searching for your services.",
    bullets: [
      "🔍 Niche-specific keyword research",
      "📝 SEO-optimized blogs & pages",
      "📈 Google My Business setup",
    ],
  },
  {
    title: "Meta Ads",
    icon: "/ads.png",
    description:
      "High-converting Facebook & Instagram ads that fill your calendar with discovery calls.",
    bullets: [
      "🎯 Audience targeting & pain points",
      "📷 Scroll-stopping ad creatives",
      "🔁 Retargeting & daily optimization",
    ],
  },
  {
    title: "AI Content Creation",
    icon: "/ai.png",
    description:
      "Done-for-you posts, emails, and sales copy using powerful AI to save you 20+ hours/month.",
    bullets: [
      "✍️ Weekly blog + social posts",
      "📩 Email & landing page content",
      "🎥 Webinar scripts & lead magnets",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = [];

    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-20 px-6 sm:px-10 md:px-20 text-vittypalette-brown"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="bg-vittypalette-cream p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="h-16 w-16 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-vittypalette-brown mb-4">
              {service.description}
            </p>
            <ul className="text-sm space-y-1 text-left md:text-center">
              {service.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
