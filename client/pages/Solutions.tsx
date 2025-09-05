import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Wind,
  Battery,
  Zap,
  ArrowRight,
  CheckCircle,
  Settings,
  Monitor,
  Home,
  Building,
  Car,
  Droplets,
  Wrench,
  ChartLine,
  Globe,
  Shield,
} from "lucide-react";

export default function Solutions() {
  const heroRef = useRef(null);
  const solarRef = useRef(null);
  const windRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isSolarInView = useInView(solarRef, { once: true, margin: "-100px" });
  const isWindInView = useInView(windRef, { once: true, margin: "-100px" });

  // Underline animation component
  const UnderlineHeader = ({
    children,
    isInView,
    delay = 0,
  }: {
    children: React.ReactNode;
    isInView: boolean;
    delay?: number;
  }) => (
    <div className="relative inline-block">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        {children}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay }}
        className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-green-600 rounded-full"
      />
    </div>
  );

  // Draw-on icon animation
  const DrawOnIcon = ({
    Icon,
    isInView,
    delay = 0,
  }: {
    Icon: any;
    isInView: boolean;
    delay?: number;
  }) => (
    <motion.div
      initial={{ pathLength: 0, opacity: 0 }}
      animate={
        isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
      }
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      className="w-12 h-12 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-xl flex items-center justify-center mb-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
        transition={{
          duration: 0.6,
          delay: delay + 0.8,
          type: "spring",
          bounce: 0.4,
        }}
      >
        <Icon className="h-6 w-6 text-primary" />
      </motion.div>
    </motion.div>
  );

  const solarServices = [
    {
      icon: Home,
      title: "Residential Solar Installation",
      description: "Complete rooftop solar solutions for homes",
    },
    {
      icon: Building,
      title: "Commercial & Industrial Solar",
      description: "Large-scale solar EPC for businesses",
    },
    {
      icon: Zap,
      title: "On-Grid & Hybrid Solar Systems",
      description: "Grid-tied and hybrid solar configurations",
    },
    {
      icon: Battery,
      title: "Battery Storage Solutions",
      description: "Energy storage systems for continuous power",
    },
    {
      icon: Car,
      title: "Solar Carports",
      description: "Covered parking with integrated solar panels",
    },
    {
      icon: Droplets,
      title: "Solar Water Heating Systems",
      description: "Efficient solar thermal solutions",
    },
    {
      icon: Car,
      title: "Solar EV Charging Stations",
      description: "Clean energy charging infrastructure",
    },
    {
      icon: Wrench,
      title: "Solar Panel Maintenance & Repair",
      description: "Comprehensive O&M services",
    },
    {
      icon: Monitor,
      title: "Solar Energy Audits & Monitoring",
      description: "Performance analysis and optimization",
    },
  ];

  const windServices = [
    {
      icon: Wind,
      title: "Wind EPC Solutions",
      description: "Complete wind project development and execution",
    },
    {
      icon: Globe,
      title: "Hybrid Solar-Wind Systems",
      description: "Integrated renewable energy systems",
    },
    {
      icon: Settings,
      title: "Asset Management & O&M",
      description: "Operations and maintenance services",
    },
    {
      icon: ChartLine,
      title: "Design & Engineering Services",
      description: "Technical design and engineering consulting",
    },
    {
      icon: Shield,
      title: "Lender's Independent Engineer (LIE)",
      description: "Independent technical advisory for lenders",
    },
    {
      icon: Monitor,
      title: "Technical Due Diligence for M&A",
      description: "Due diligence for acquisitions and investments",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-20 bg-gradient-to-br from-background via-green-50 to-accent"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Our Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Comprehensive
              <span className="text-primary bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                {" "}
                Energy Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-4xl mx-auto"
            >
              From residential rooftops to utility-scale projects, we deliver
              complete renewable energy solutions backed by world-class
              engineering and proven expertise.
            </motion.p>
          </div>
        </section>

        {/* Solar Energy Solutions Section */}
        <section ref={solarRef} className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <UnderlineHeader isInView={isSolarInView}>
                Solar Energy Solutions
              </UnderlineHeader>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isSolarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                Complete solar solutions from residential installations to
                commercial projects, including maintenance, monitoring, and
                specialized applications.
              </motion.p>

              <div className="mt-6 flex justify-center gap-3">
                <a href="/get-quote#residential" className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground">Residential</a>
                <a href="/get-quote#housing" className="inline-block px-4 py-2 rounded-full bg-primary/80 text-primary-foreground">Housing Society</a>
                <a href="/get-quote#commercial" className="inline-block px-4 py-2 rounded-full bg-primary/70 text-primary-foreground">Commercial</a>
              </div>
            </div>

            {/* Business category links */}
            <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: Building,
                  title: "B2B — Commercial & Industrial Solar",
                  description: "End-to-end commercial solar solutions for businesses, campuses, and industrial sites.",
                  to: "/solutions/b2b",
                },
                {
                  icon: Home,
                  title: "B2C — Residential Solar Solutions",
                  description: "Rooftop and small-scale solar systems designed for homeowners and residential complexes.",
                  to: "/solutions/b2c",
                },
                {
                  icon: Globe,
                  title: "B2G — Government & Public Projects",
                  description: "Large-scale public-sector and government solar projects, tenders, and rooftop schemes.",
                  to: "/solutions/b2g",
                },
              ].map((link, idx) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={idx}
                    to={link.to}
                    className="block p-6 rounded-xl bg-white border border-green-100 shadow hover:shadow-lg transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{link.title}</h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Technology links */}
            <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "Solar Energy", to: "/solutions/solar" },
                { title: "Wind Energy", to: "/solutions/wind" },
                { title: "Energy Storage", to: "/solutions/storage" },
                { title: "EV Stations", to: "/solutions/ev-stations" },
              ].map((t, i) => (
                <Link key={i} to={t.to} className="block p-6 rounded-xl bg-gradient-to-br from-white to-green-50 border border-green-100 shadow hover:shadow-lg transition">
                  <h4 className="text-lg font-semibold mb-1">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">Explore our {t.title.toLowerCase()} solutions and services.</p>
                </Link>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {solarServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isSolarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="border-green-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl h-full">
                    <CardHeader className="text-center">
                      <DrawOnIcon
                        Icon={service.icon}
                        isInView={isSolarInView}
                        delay={0.7 + index * 0.1}
                      />
                      <CardTitle className="text-lg font-semibold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                isWindInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-primary to-green-600 rounded-3xl p-8 md:p-12 text-center text-white"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isWindInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                Ready to Start Your Renewable Energy Project?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isWindInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-lg mb-8 opacity-90 max-w-2xl mx-auto"
              >
                Our expert team will design a custom solution that perfectly
                fits your energy needs, budget, and sustainability goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isWindInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="secondary" className="group">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Request Quote
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
