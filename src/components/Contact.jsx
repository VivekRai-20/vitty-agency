import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MessageSquareText } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-fade", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hi, I'm ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const phone = "917777034392"; // Your WhatsApp number (India code)
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-vittypalette-cream text-vittypalette-brown py-20 px-6 sm:px-10 md:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Get in Touch</h2>

      <div className="max-w-3xl mx-auto space-y-6 contact-fade">
        <p className="text-center text-lg">
          Got questions? Ready to grow your coaching business? Let’s talk!
        </p>

        <div className="text-center space-y-2">
          <p className="text-md flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vittyagency@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
            >
                vittyagency@gmail.com
                </a>
          </p>
          <p className="text-md flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />{" "}
            <a
              href="https://wa.me/917777034392"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-vittypalette-maroon"
            >
              +91 7777034392
            </a>
          </p>
        </div>

        {/* Contact form that opens WhatsApp */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md contact-fade"
        >
          <div className="mb-4">
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Tell us about your goals..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="bg-vittypalette-brown text-white px-6 py-2 rounded-md hover:opacity-90 flex items-center gap-2"
          >
            <MessageSquareText className="w-5 h-5" />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
