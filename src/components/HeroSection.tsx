import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary tracking-[0.3em] uppercase text-sm mb-6 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full-Stack Engineering · Healthcare · ESG · Mobility
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-900 tracking-tight mb-6">
            <span className="text-gradient-gold">Appleby</span>{" "}
            <span className="text-foreground">Labs</span>
          </h1>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Dylan Appleby
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Senior Full-Stack Engineer with 9 years of experience building scalable web and mobile
            applications in healthcare, mobility, and ESG. Specializing in Python, React, Next.js, TypeScript,
            and cloud-native technologies like AWS, Terraform, Docker, and Kubernetes.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/dylan-apple-474bb33aa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="mailto:Appleby.dylan@outlook.com"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">Austin, TX</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 line-gold mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
