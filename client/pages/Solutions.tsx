import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Solutions() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const cards = [
    { title: "Solar Energy", to: "/solutions/solar", desc: "Rooftop, commercial & public solar solutions" },
    { title: "Wind Energy", to: "/solutions/wind", desc: "Onshore wind, hybrid systems and O&M" },
    { title: "Energy Storage", to: "/solutions/storage", desc: "Battery storage systems and EMS" },
    { title: "EV Stations", to: "/solutions/ev-stations", desc: "EV charging infrastructure and services" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section ref={heroRef} className="py-20 bg-gradient-to-br from-background via-green-50 to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Solutions
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Solutions
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our core energy solutions — click a category to view detailed services and offerings.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((c, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.06 }} whileHover={{ scale: 1.02 }} className="group">
                  <Link to={c.to} className="block p-8 rounded-2xl bg-white border border-green-100 shadow hover:shadow-lg transition h-full">
                    <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
