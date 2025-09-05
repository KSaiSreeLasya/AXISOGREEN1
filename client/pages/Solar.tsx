import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sun, Building, Home, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import BackButton from "@/components/BackButton";

export default function Solar() {
  const heroRef = useRef(null);
  const listRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isListInView = useInView(listRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Sun, title: "Rooftop & Ground-mount EPC", desc: "End-to-end EPC services for residential, commercial and utility-scale projects." },
    { icon: Building, title: "Commercial Solutions", desc: "Scalable systems for factories, warehouses and corporate campuses." },
    { icon: Home, title: "Residential Offerings", desc: "Rooftop design, net-metering assistance and long-term O&M packages." },
    { icon: Globe, title: "Government Programs", desc: "Tender support and public-sector deployments with compliance expertise." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section ref={heroRef} className="py-24 bg-gradient-to-br from-background via-green-50 to-accent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-full flex justify-start mb-6">
              <BackButton />
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solar Energy
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solar solutions across residential, commercial and public sectors — optimized for performance and longevity.
            </motion.p>

            <div className="mt-8 flex justify-center gap-4">
              <Link to="/solutions/b2c" className="inline-block px-5 py-3 rounded-full bg-primary text-primary-foreground">Residential</Link>
              <Link to="/solutions/b2b" className="inline-block px-5 py-3 rounded-full bg-white border">Commercial</Link>
              <Link to="/solutions/b2g" className="inline-block px-5 py-3 rounded-full bg-primary/20">Government</Link>
            </div>
          </div>
        </section>

        <section ref={listRef} className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Solar Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <motion.h3 initial={{ opacity: 0, x: -20 }} animate={isListInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.6 }} className="text-xl font-bold mb-3">Ready to go solar?</motion.h3>
              <motion.div initial={{ opacity: 0 }} animate={isListInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="opacity-90">Talk to our solar experts to design a system that fits your needs and budget.</p>
                <div className="mt-6">
                  <Link to="/get-quote#residential" className="inline-block px-5 py-3 rounded-md bg-white text-primary font-semibold">Get a Quote</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
