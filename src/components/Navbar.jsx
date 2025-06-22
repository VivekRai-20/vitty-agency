import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollProps = {
    smooth: true,
    duration: 500,
    offset: -80,
    onClick: () => setMenuOpen(false),
    className: "cursor-pointer hover:text-vittypalette-beige transition",
  };

  return (
    <nav className="bg-vittypalette-cream text-vittypalette-brown px-4 sm:px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <ScrollLink to="hero" {...scrollProps}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo.png" alt="Vitty Logo" className="h-10 w-auto" />
            <img src="/Vitty.png" alt="Vitty Logo" className="h-10 w-auto" />
            <span className="text-2xl text-black sm:text-3xl font-bold font-montserrat">
              Agency
            </span>
          </div>
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          <li><ScrollLink to="hero" {...scrollProps}>Home</ScrollLink></li>
          <li><ScrollLink to="services" {...scrollProps}>Services</ScrollLink></li>
          <li><ScrollLink to="about" {...scrollProps}>About</ScrollLink></li>
          <li><ScrollLink to="testimonials" {...scrollProps}>Testimonials</ScrollLink></li>
          <li><ScrollLink to="contact" {...scrollProps}>Contact</ScrollLink></li>
        </ul>

        {/* CTA for desktop */}
        <a
          href="https://wa.me/917777034392"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-vittypalette-beige text-vittypalette-brown font-semibold px-4 py-2 rounded-xl hover:scale-105 transition cursor-pointer"
        >
          Book a Call
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-vittypalette-brown cursor-pointer"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-base font-medium bg-vittypalette-cream py-4 rounded-b-xl shadow-lg">
          <ScrollLink to="hero" {...scrollProps}>Home</ScrollLink>
          <ScrollLink to="services" {...scrollProps}>Services</ScrollLink>
          <ScrollLink to="about" {...scrollProps}>About</ScrollLink>
          <ScrollLink to="testimonials" {...scrollProps}>Testimonials</ScrollLink>
          <ScrollLink to="contact" {...scrollProps}>Contact</ScrollLink>
          <a
            href="https://wa.me/917777034392"
            target="_blank"
            rel="noreferrer"
            className="bg-vittypalette-beige text-vittypalette-brown px-4 py-2 rounded-xl mt-2 cursor-pointer hover:scale-105 transition"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
