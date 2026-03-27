"use client";

import Link from "next/link";


export default function Footer() {
  const footerLinks = [
    { name: "Начало", href: "/" },
    { name: "За нас", href: "/#about" },
    { name: "Услуги", href: "/#services" },
    { name: "Проекти", href: "/#projects" },
    { name: "Галерия", href: "/#gallery" },
    { name: "Контакти", href: "/#contact" },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Бис Руфинг ЕООД
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Над 15 години опит в улуци, метални покриви и покривни фасади.
              Надежден партньор за частни, бизнес и обществени проекти.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              © {new Date().getFullYear()} Бис Руфинг ЕООД. Всички права запазени.
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex flex-wrap gap-4 mb-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
           
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}