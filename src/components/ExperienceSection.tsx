import { motion } from "framer-motion";
import uprightImg from "@/assets/upright-dashboard.jpg";
import uprightWorkflow from "@/assets/upright-workflow.jpg";
import uprightDealership from "@/assets/upright-dealership.jpg";
import spotheroImg from "@/assets/spothero-app.jpg";
import spotheroParking from "@/assets/spothero-parking.jpg";
import spotheroCity from "@/assets/spothero-city.jpg";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { ExternalLink } from "lucide-react";

const uprightNodes = [
  {
    title: "Dealership Source Systems",
    subtitle: "Service, parts, sales, inventory, CRM",
  },
  {
    title: "Data Ingestion Layer",
    items: ["Normalizes inputs", "Handles sync + events"],
  },
  {
    title: "Platform Service Foundation",
    isHighlighted: true,
    items: [
      "Multi-tenant service layer",
      "Authorization + identity flows",
      "Data-orchestration pipelines",
      "Cross-team shared backend logic",
      "Event-driven workflow engine",
    ],
  },
  {
    title: "Unified Frontend Framework",
    isHighlighted: true,
    items: [
      "Component system + UI standards",
      "Routing patterns for all product teams",
      "Shared layout + design primitives",
    ],
  },
  {
    title: "Downstream Product Teams",
    subtitle: "Technician tools, dashboards, reporting, workflows",
    items: [
      "Build features on top of platform foundation",
      "Reuse shared components + APIs",
      "Rely on data pipelines + stability improvements",
    ],
  },
  {
    title: "Dealership Users & Staff",
    subtitle: "Technicians, managers, service teams",
  },
];

const spotheroNodes = [
  {
    title: "Parking Operator Systems",
    subtitle: "Inventory feeds, garage hardware",
  },
  {
    title: "Partner Data Intake",
    items: ["Availability updates", "Pricing + capacity", "Hardware signals"],
  },
  {
    title: "Reservation & Availability Pipeline",
    isHighlighted: true,
    items: [
      "Rebuilt into predictable event-driven flow",
      "Reduced booking errors + stale inventory",
      "Improved real-time accuracy",
      "Stabilized high-traffic update cycles",
    ],
  },
  {
    title: "Real-Time Availability Engine",
    isHighlighted: true,
    items: [
      "Processes incoming updates",
      "Reconciles partner data",
      "Publishes accurate availability",
      "Supports peak-demand traffic",
    ],
  },
  {
    title: "Internal Tools & Dashboards",
    isHighlighted: true,
    items: [
      "Modernized frontend architecture",
      "Shared components + UI consistency",
      "Faster debugging + operational visibility",
    ],
  },
  {
    title: "End Users",
    subtitle: "Drivers booking parking",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Career</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient-gold">Experience</span>
          </h2>
        </motion.div>

        {/* Upright Consulting */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">May 2023 – Present</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Engineering Team Lead
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://www.uprightconsulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Upright Consulting <ExternalLink size={14} />
                  </a>
                  {" "}· The Upright Project
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Led a 4-person platform sub-team to build the foundational layer every product team relied on —
              shared backend services, unified frontend systems, and cloud infrastructure. Reduced duplicated
              engineering effort by ~40% and accelerated downstream team delivery.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~40%", label: "Less duplicated effort" },
                { metric: "~50%", label: "Reduced deployment friction" },
                { metric: "~30%", label: "Shorter release cycles" },
                { metric: "4", label: "Person platform team" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card/50 p-4 text-center"
                >
                  <p className="text-2xl font-display font-bold text-primary">{stat.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upright visual content */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images column */}
            <div className="space-y-4">
              <motion.a
                href="https://www.uprightconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block rounded-xl overflow-hidden border border-border shadow-gold group"
              >
                <img
                  src={uprightImg}
                  alt="The Upright Project dashboard"
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </motion.a>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://www.uprightconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="block rounded-xl overflow-hidden border border-border group aspect-square"
                >
                  <img
                    src={uprightWorkflow}
                    alt="Technician workflow tools"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </motion.a>
                <motion.a
                  href="https://www.uprightconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="block rounded-xl overflow-hidden border border-border group aspect-square"
                >
                  <img
                    src={uprightDealership}
                    alt="Dealership environment"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </motion.a>
              </div>
            </div>

            {/* Diagram column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-primary tracking-widest uppercase mb-6">Platform Architecture</p>
              <ArchitectureDiagram nodes={uprightNodes} />
            </motion.div>
          </div>
        </div>

        {/* SpotHero */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Jan 2021 – Apr 2023</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://spothero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    SpotHero <ExternalLink size={14} />
                  </a>
                  {" "}· Platform Engineering
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Joined during a critical growth phase, owning core services and front-end systems that
              needed to scale without breaking the business. Rebuilt key pipelines and modernized
              the frontend architecture for the platform engineering team.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~35%", label: "Reduced booking errors" },
                { metric: "~40%", label: "Less stale inventory" },
                { metric: "~30%", label: "Better stability at peak" },
                { metric: "~30%", label: "Fewer deployment issues" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card/50 p-4 text-center"
                >
                  <p className="text-2xl font-display font-bold text-primary">{stat.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SpotHero visual content */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Diagram column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-primary tracking-widest uppercase mb-6">System Architecture</p>
              <ArchitectureDiagram nodes={spotheroNodes} />
            </motion.div>

            {/* Images column */}
            <div className="space-y-4">
              <motion.a
                href="https://spothero.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block rounded-xl overflow-hidden border border-border shadow-gold group"
              >
                <img
                  src={spotheroImg}
                  alt="SpotHero parking platform"
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </motion.a>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://spothero.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="block rounded-xl overflow-hidden border border-border group aspect-square"
                >
                  <img
                    src={spotheroParking}
                    alt="Smart parking garage"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </motion.a>
                <motion.a
                  href="https://spothero.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="block rounded-xl overflow-hidden border border-border group aspect-square"
                >
                  <img
                    src={spotheroCity}
                    alt="Urban parking infrastructure"
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Earlier Experience */}
        <div className="mt-32 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card/30 p-8"
          >
            <p className="text-primary text-sm tracking-wider uppercase mb-1">Sep 2018 – Dec 2020</p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Software Engineer</h3>
            <p className="text-muted-foreground text-sm mb-4">Alert Logic</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built full-stack features for customer security portals. Implemented API endpoints
              powering log search, alert filtering, and dashboard data. Helped migrate legacy UI
              into modern React components.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card/30 p-8"
          >
            <p className="text-primary text-sm tracking-wider uppercase mb-1">May 2017 – Aug 2018</p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Software Engineering Intern</h3>
            <p className="text-muted-foreground text-sm mb-4">PROS</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Supported pricing and revenue optimization platform development. Built full-stack features,
              helped migrate legacy screens into React, and improved data quality for downstream
              pricing algorithms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
