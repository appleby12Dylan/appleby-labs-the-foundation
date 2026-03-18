import { motion } from "framer-motion";
import uprightImg from "@/assets/upright-dashboard.jpg";
import uprightWorkflow from "@/assets/upright-workflow.jpg";
import uprightDealership from "@/assets/upright-dealership.jpg";
import uprightService from "@/assets/upright-service.jpg";
import uprightLot from "@/assets/upright-lot.jpg";
import spotheroImg from "@/assets/spothero-app.jpg";
import spotheroParking from "@/assets/spothero-parking.jpg";
import spotheroCity from "@/assets/spothero-city.jpg";
import spotheroGarage from "@/assets/spothero-garage.jpg";
import spotheroAerial from "@/assets/spothero-aerial.jpg";
import pearsuiteImg from "@/assets/pearsuite-dashboard.jpg";
import pearsuiteChw from "@/assets/pearsuite-chw.jpg";
import pearsuiteClinic from "@/assets/pearsuite-clinic.jpg";
import pearsuiteTeam from "@/assets/pearsuite-team.jpg";
import pearsuiteAnalytics from "@/assets/pearsuite-analytics.jpg";
import ArchitectureDiagram, { DiagramNode } from "./ArchitectureDiagram";
import { ExternalLink } from "lucide-react";

const uprightNodes: DiagramNode[] = [
  {
    title: "External Data Sources",
    subtitle: "Public company data, ESG disclosures, financial reports",
  },
  {
    title: "Data Collection & Normalization Pipeline",
    items: ["Collects public company data", "Normalizes inputs for modeling"],
  },
  {
    title: "Structured Data Repository",
    items: ["Company profiles", "Impact metadata", "JSON-based structured storage"],
  },
  {
    title: "Impact Modeling Engine",
    isHighlighted: true,
    items: [
      "Environmental impact scoring",
      "Social impact evaluation",
      "Financial risk evaluation",
    ],
  },
  {
    title: "Materiality Assessment Engine",
    isHighlighted: true,
    items: [
      "Impact materiality logic",
      "Financial materiality analysis",
      "Automated scoring pipelines",
    ],
  },
  {
    type: "parallel",
    nodes: [
      {
        title: "Async Processing Queue",
        items: ["Job orchestration", "Redis caching"],
      },
      {
        title: "Assessment Data Storage",
        items: ["Audit-ready data", "PostgreSQL"],
      },
    ],
  },
  {
    title: "Reporting Engine",
    isHighlighted: true,
    items: ["CSRD structured reports", "Materiality reports"],
  },
  {
    title: "Interactive Dashboard",
    subtitle: "Impact insights, risk visualization, stakeholder reporting",
  },
];

const pearsuiteNodes: DiagramNode[] = [
  {
    title: "Healthcare Users",
    subtitle: "CHWs, clinicians, doulas, care teams",
  },
  {
    title: "Care Management Web Platform",
    items: ["Screening forms", "Patient profiles"],
  },
  {
    title: "SDOH Screening Engine",
    isHighlighted: true,
    items: [
      "Dynamic assessments",
      "Conditional workflows",
      "Role-based access control",
    ],
  },
  {
    title: "Care Plan Management",
    isHighlighted: true,
    items: ["Service referrals", "Task coordination", "Multi-role access"],
  },
  {
    type: "parallel",
    nodes: [
      {
        title: "Real-Time Sync",
        isHighlighted: true,
        items: ["Team collaboration", "Activity updates"],
      },
      {
        title: "Integration Gateway",
        isHighlighted: true,
        items: ["EMR/EHR systems", "Partner platforms"],
      },
    ],
  },
  {
    type: "parallel",
    nodes: [
      {
        title: "Patient Data Store",
        items: ["Care records", "Screening results"],
      },
      {
        title: "Billing & Claims",
        items: ["Reimbursement flows", "Payment validation"],
      },
    ],
  },
  {
    title: "Reporting & Analytics",
    subtitle: "Care progress tracking, outcome reporting",
  },
];

const spotheroNodes: DiagramNode[] = [
  {
    title: "Parking Operator Systems",
    subtitle: "Inventory feeds, garage hardware",
  },
  {
    title: "Partner Data Intake",
    items: ["Availability updates", "Pricing + capacity", "Hardware signals"],
  },
  {
    title: "Mobile Platform",
    isHighlighted: true,
    items: [
      "React Native cross-platform app",
      "QR code, NFC, license plate recognition",
      "Android Auto & Apple CarPlay",
      "Offline handling & background sync",
    ],
  },
  {
    title: "Reservation & Availability Pipeline",
    isHighlighted: true,
    items: [
      "Event-driven booking flow",
      "Push notifications & location reminders",
      "Real-time accuracy",
    ],
  },
  {
    title: "Real-Time Availability Engine",
    isHighlighted: true,
    items: [
      "Processes incoming updates",
      "Reconciles partner data",
      "Supports peak-demand traffic",
    ],
  },
  {
    title: "End Users",
    subtitle: "Drivers booking parking via mobile",
  },
];

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

        {/* The Upright Project */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Jan 2025 – Present</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Engineering Team Lead
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://www.uprightproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    The Upright Project <ExternalLink size={14} />
                  </a>
                  {" "}· ESG & CSRD Compliance Platform
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Led full-stack delivery using TypeScript, NestJS, React, and Next.js, building scalable REST and GraphQL APIs
              and a responsive web platform that turned Upright's scientific impact models into a shipped CSRD compliance product.
              Designed backend data pipelines, implemented async processing with Redis caching, and architected cloud-native
              infrastructure on AWS with Docker, Kubernetes, and Terraform.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~50%", label: "Faster report turnaround" },
                { metric: "~25%", label: "Fewer post-release issues" },
                { metric: "AWS", label: "Cloud-native infrastructure" },
                { metric: "CSRD", label: "EU compliance product" },
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

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <motion.a
                href="https://www.uprightproject.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block relative rounded-xl overflow-hidden border border-border shadow-gold group hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500"
              >
                <img src={uprightImg} alt="The Upright Project dashboard" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-display font-semibold text-white drop-shadow-lg">The Upright Project</p>
                  <p className="text-xs text-white/70">ESG & CSRD Compliance Platform</p>
                </div>
              </motion.a>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: uprightWorkflow, alt: "Service workflow tools" },
                  { src: uprightDealership, alt: "Parts and service counter" },
                ].map((img, i) => (
                  <motion.a
                    key={i}
                    href="https://www.uprightproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 1) * 0.1 }}
                    className="block rounded-xl overflow-hidden border border-border group aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                  </motion.a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: uprightService, alt: "Diagnostic station" },
                  { src: uprightLot, alt: "Service reception" },
                ].map((img, i) => (
                  <motion.a
                    key={i}
                    href="https://www.uprightproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 3) * 0.1 }}
                    className="block rounded-xl overflow-hidden border border-border group aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                  </motion.a>
                ))}
              </div>
            </div>

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

        {/* PearSuite */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Mar 2023 – Dec 2024</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://www.pearsuite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    PearSuite <ExternalLink size={14} />
                  </a>
                  {" "}· Healthcare Care Management
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Shipped end-to-end SDOH screening workflows using React, Next.js, and Python (Django) with dynamic forms
              and conditional logic. Built digital care plan modules for CHWs, doulas, and clinicians with role-based access
              and real-time synchronization. Engineered secure RESTful and GraphQL APIs for HIPAA-compliant EMR/EHR integrations
              and automated billing workflows.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~25%", label: "Faster form completion" },
                { metric: "~20%", label: "Fewer claim errors" },
                { metric: "~30%", label: "Better report performance" },
                { metric: "HIPAA", label: "Compliant architecture" },
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

          {/* PearSuite visual content — images LEFT, diagram RIGHT */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Images column */}
            <div className="space-y-4">
              <motion.a
                href="https://www.pearsuite.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block relative rounded-xl overflow-hidden border border-border shadow-gold group hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500"
              >
                <img src={pearsuiteImg} alt="PearSuite care management dashboard" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-display font-semibold text-white drop-shadow-lg">PearSuite</p>
                  <p className="text-xs text-white/70">Healthcare Care Management Platform</p>
                </div>
              </motion.a>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: pearsuiteChw, alt: "Community health worker with patient" },
                  { src: pearsuiteClinic, alt: "Healthcare clinic with digital check-in" },
                ].map((img, i) => (
                  <motion.a
                    key={i}
                    href="https://www.pearsuite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 1) * 0.1 }}
                    className="block rounded-xl overflow-hidden border border-border group aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                  </motion.a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: pearsuiteTeam, alt: "Healthcare team collaboration" },
                  { src: pearsuiteAnalytics, alt: "Patient analytics dashboard" },
                ].map((img, i) => (
                  <motion.a
                    key={i}
                    href="https://www.pearsuite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 3) * 0.1 }}
                    className="block rounded-xl overflow-hidden border border-border group aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Diagram column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-primary tracking-widest uppercase mb-6">System Architecture</p>
              <ArchitectureDiagram nodes={pearsuiteNodes} />
            </motion.div>
          </div>
        </div>

        {/* SpotHero */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Jun 2020 – Feb 2023</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Full-Stack Mobile Engineer
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
                  {" "}· Mobility & Parking Platform
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Launched touchless parking workflows using React Native and TypeScript, enabling QR code scanning, NFC,
              and license plate recognition. Extended mobile features to Android Auto and Apple CarPlay. Established
              robust offline handling and background synchronization, cutting app load times by ~30% and reducing
              missed reservations by ~15%.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~30%", label: "Faster app load times" },
                { metric: "~15%", label: "Fewer missed reservations" },
                { metric: "React Native", label: "Cross-platform mobile" },
                { metric: "CarPlay", label: "Android Auto + CarPlay" },
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

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-primary tracking-widest uppercase mb-6">System Architecture</p>
              <ArchitectureDiagram nodes={spotheroNodes} />
            </motion.div>

            <div className="space-y-4">
              <motion.a
                href="https://spothero.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block relative rounded-xl overflow-hidden border border-border shadow-gold group hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500"
              >
                <img src={spotheroImg} alt="SpotHero parking platform" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-display font-semibold text-white drop-shadow-lg">SpotHero</p>
                  <p className="text-xs text-white/70">Parking Platform</p>
                </div>
              </motion.a>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: spotheroParking, alt: "Smart parking garage" },
                  { src: spotheroCity, alt: "Urban parking infrastructure" },
                ].map((img, i) => (
                  <motion.a
                    key={i}
                    href="https://spothero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 1) * 0.1 }}
                    className="block rounded-xl overflow-hidden border border-border group aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                  </motion.a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: spotheroGarage, alt: "SpotHero parking garage" },
                  { src: spotheroAerial, alt: "Urban traffic aerial view" },
                ].map((img, i) => (
                  <motion.a
                    key={i}
                    href="https://spothero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 3) * 0.1 }}
                    className="block rounded-xl overflow-hidden border border-border group aspect-square"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Earlier Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card/30 p-8"
          >
            <p className="text-primary text-sm tracking-wider uppercase mb-1">Nov 2018 – Apr 2020</p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Software Engineer</h3>
            <p className="text-muted-foreground text-sm mb-4">Alert Logic</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Maintained PHP and Python backend services, building APIs and server-side logic for enterprise
              security monitoring. Revamped web dashboards using JavaScript, HTML, and CSS. Integrated
              backend services with third-party APIs, reducing alert processing delays by ~20%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card/30 p-8"
          >
            <p className="text-primary text-sm tracking-wider uppercase mb-1">Apr 2016 – Oct 2018</p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Software Engineer</h3>
            <p className="text-muted-foreground text-sm mb-4">PROS</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shaped web application features using JavaScript and TypeScript, making pricing and quoting
              workflows faster for enterprise users. Collaborated on frontend interfaces connected to
              backend services, reinforcing integration testing and maintainable code patterns.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
