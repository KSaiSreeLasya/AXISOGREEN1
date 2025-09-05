import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wind, Globe, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import BackButton from "@/components/BackButton";

export default function Wind() {
  const heroRef = useRef(null);
  const listRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isListInView = useInView(listRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Wind, title: "Wind EPC", desc: "Project development, turbine procurement and construction for onshore wind farms." },
    { icon: Globe, title: "Hybrid Systems", desc: "Integrated solar-wind hybrid systems for improved capacity factors." },
    { icon: Settings, title: "Asset Management", desc: "O&M, remote monitoring and performance optimization for wind assets." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section ref={heroRef} className="py-24 bg-accent/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-full flex justify-start mb-6">
              <BackButton />
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wind Energy
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wind energy services including EPC, hybrid integrations and asset management.
            </motion.p>

            <div className="mt-8 flex justify-center gap-4">
              <Link to="/services" className="inline-block px-5 py-3 rounded-full bg-primary text-primary-foreground">Our Services</Link>
            </div>
          </div>
        </section>

        <section ref={listRef} className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Wind Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={isListInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: idx * 0.08 }} whileHover={{ scale: 1.03 }} className="group">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <h.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{h.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{h.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary to-green-600 rounded-2xl p-8 text-white">
              <motion.h3 initial={{ opacity: 0, x: -20 }} animate={isListInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.6 }} className="text-xl font-bold mb-3">Partner with us on wind projects</motion.h3>
              <p className="opacity-90">We support project development, EPC execution and operations for utility-scale and distributed wind deployments.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
