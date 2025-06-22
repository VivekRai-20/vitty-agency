import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Neha K.",
    role: "Business Coach (India)",
    quote:
      "I went from zero leads to 25 booked discovery calls in just one month. Their ad strategy and content system made it so easy for me to focus only on coaching.",
    stars: 5,
    image: "/female.png",
  },
  {
    name: "Liam R.",
    role: "Life Coach (USA)",
    quote:
      "Best investment I made in my coaching business. Their SEO work got me ranking on Google, and my calendar is now filled with quality calls.",
    stars: 5,
    image: "/male.png",
  },
  {
    name: "Aarav S.",
    role: "Health & Fitness Coach (India)",
    quote:
      "My fitness coaching revenue doubled in 90 days. Vitty’s Meta ads and funnel strategy converted real leads, fast.",
    stars: 5,
    image: "/male.png",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = [];

    const ctx = gsap.context(() => {
      if (cardRefs.current.length === 0) return;

      gsap.from(cardRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-white text-vittypalette-brown py-20 px-6 sm:px-10 md:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((client, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardRefs.current[i] = el;
            }}
            className="bg-vittypalette-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            {/* Centered Image */}
            <div className="flex justify-center mb-3">
              <img
                src={client.image}
                alt={client.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            {/* Centered Text */}
            <h3 className="text-md font-semibold text-center">{client.name}</h3>
            <p className="text-sm text-vittypalette-maroon mb-2 text-center">
              {client.role}
            </p>

            {/* Centered Stars */}
            <div className="flex justify-center mb-3">
              {Array.from({ length: client.stars }).map((_, star) => (
                <span key={star}>⭐</span>
              ))}
            </div>

            {/* Centered Quote */}
            <p className="text-sm leading-relaxed italic text-center">
              “{client.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
