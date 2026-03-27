"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Hammer,
  Ruler,
  Building,
  Camera,
  ChevronRight,
  Star,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="flex flex-col bg-white text-zinc-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl px-6"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-zinc-800">
              Бис Руфинг ЕООД
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-zinc-600 max-w-2xl mx-auto">
              Експерти в улуци, метални покриви и покривни решения от 2008 г.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap mt-8">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Свържете се с нас
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
            >
              Вижте услугите
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-600"
          >
            <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 15+ години опит
            </span>
            <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              <Building className="w-4 h-4" /> Частни и обществени проекти
            </span>
            <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              <Building className="w-4 h-4" /> Висококачествени материали
            </span>
            <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              <Camera className="w-4 h-4" /> Дрон огледи
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-zinc-800">За нас</h2>
            <p className="text-lg text-zinc-600 mb-4 leading-relaxed">
              Основана през 2008 г., <strong>Бис Руфинг ЕООД</strong> има над 15 години опит в
              покривни решения. Специализирани в улуци, водосточни системи, метални покриви и
              ламаринени конструкции.
            </p>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Работим както с частни клиенти, така и с бизнес и обществени проекти. Всяка задача
              изпълняваме с прецизност и внимание към детайла.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600">2008</div>
                <div className="text-sm text-zinc-500">Основаване</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600">⭐</div>
                <div className="text-sm text-zinc-500">Много успешни проекти</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center"
          >
            <span className="text-zinc-500">Image placeholder</span>
          </motion.div>
        </div>
      </section>

      {/* DRONE SECTION */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-zinc-800"
              >
                Огледи и заснемане с дрон
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-zinc-600 mb-6"
              >
                Инспекция на труднодостъпни покриви. Точна диагностика и подготовка на оферти.
                Заснемане преди и след ремонта.
              </motion.p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="space-y-2 mb-8"
              >
                {[
                  "Труднодостъпни покриви",
                  "Точна диагностика",
                  "Заснемане преди и след",
                  "3D моделиране",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-zinc-600"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-500" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-md"
              >
                Запазете оглед с дрон
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
              <span className="text-zinc-500">Drone image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-800">Нашите услуги</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Предлагаме пълен спектър от покривни решения с гаранция за качество.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Droplet,
              title: "Улуци и водосточни системи",
              desc: "Монтаж и подмяна на улуци и водосточни системи от висококачествени материали.",
              link: "#",
            },
            {
              icon: Hammer,
              title: "Метални покриви – система Schlebach",
              desc: "Висококачествени метални покриви със съвременна визия и дълъг живот.",
              link: "#",
            },
            {
              icon: Ruler,
              title: "Покривни ремонти и обшивки",
              desc: "Ремонт и възстановяване на покриви и обшивки с професионален подход.",
              link: "#",
            },
            {
              icon: Building,
              title: "Ламаринени детайли и фасади",
              desc: "Изработка на ламаринени фасади и детайли по поръчка.",
              link: "#",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  {service.desc}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all"
                >
                  Научете повече
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-zinc-800">Нашите проекти</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Гордеем се с изпълнението на престижни обекти, получили признание.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group h-80 bg-gray-200 flex items-center justify-center shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-2xl font-bold">Централна ЖП гара Пловдив</h3>
                <p className="text-sm">Награда „Сграда на годината“ – 3-то място</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">Признат проект</span>
                </div>
              </div>
              <span className="text-zinc-500">Project image placeholder</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group h-80 bg-gray-200 flex items-center justify-center shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white z-10">
                <h3 className="text-2xl font-bold">Купола – Благоевград</h3>
                <p className="text-sm">Възстановяване на метален покрив и фасада</p>
              </div>
              <span className="text-zinc-500">Project image placeholder</span>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              Вижте всички проекти
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-zinc-800">Свържете се с нас</h2>
            <p className="text-lg text-zinc-600">
              Имате въпроси или искате оферта? Оставете своето запитване.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Име</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Вашето име"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Имейл</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Съобщение</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Как можем да ви помогнем?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Изпратете запитване
                </button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+359 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>info@uluci.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center"
            >
              <span className="text-zinc-500">Карта</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}