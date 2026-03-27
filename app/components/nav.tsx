"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Building2 } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["500", "700"] });

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Начало", href: "/" },
    { name: "За нас", href: "/about" },
    { name: "Услуги", href: "/services" },
    { name: "Проекти", href: "/projects" },
    { name: "Галерия", href: "/gallery" },
    { name: "Контакти", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white/70 backdrop-blur-sm"
        } border-b border-zinc-200/30`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group" aria-label="Начало">
              <Building2 className="w-7 h-7 text-blue-600 group-hover:rotate-3 transition-transform duration-300" />
              <span className={`${geistMono.className} text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-indigo-500 transition-all`}>
                Бис Руфинг
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-blue-600"
                      : "text-zinc-700 hover:text-blue-600"
                  } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-6 ${isActive(link.href) ? "after:w-6" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Icons (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-600 transition-all hover:scale-110" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-600 transition-all hover:scale-110" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="mailto:info@uluci.com" className="text-zinc-500 hover:text-blue-600 transition-all hover:scale-110" aria-label="Имейл">
                <Mail size={18} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Меню"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full w-full px-6 transition-all duration-500 delay-200 ${
            isOpen ? "translate-y-0" : "translate-y-8"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-medium transition-all duration-300 hover:scale-110 ${
                  isActive(link.href) ? "text-blue-600" : "text-zinc-800 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-zinc-200">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-600 transition-all hover:scale-110" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-600 transition-all hover:scale-110" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:info@uluci.com" className="text-zinc-500 hover:text-blue-600 transition-all hover:scale-110" aria-label="Имейл">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}