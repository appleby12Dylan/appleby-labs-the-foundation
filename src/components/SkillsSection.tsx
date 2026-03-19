import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "C#", "PHP", "Ruby", "SQL", "HTML5", "CSS3/SCSS"],
  },
  {
    label: "Frontend",
    skills: [
      "React", "React Native", "Next.js", "Angular", "Vue.js", "TailwindCSS",
      "Component Architecture", "Responsive UI", "State Management",
      "Accessibility", "Performance Optimization", "Design Systems",
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js", "NestJS", "Express", "Next.js API Routes",
      "Python", "Django", "FastAPI", "PHP", "Laravel",
      "REST APIs", "GraphQL", "WebSockets", "Webhooks",
      "Caching Strategies",
    ],
  },
  {
    label: "Mobile",
    skills: [
      "React Native", "Flutter", "iOS", "Android",
      "Android Auto", "Apple CarPlay",
      "Redux", "MobX", "Push Notifications",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS", "GCP", "Docker", "Kubernetes", "Terraform",
      "CI/CD Pipelines", "GitHub Actions", "Jenkins", "CircleCI",
      "CDK", "Sentry", "Datadog", "Observability",
    ],
  },
  {
    label: "Data & Storage",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "Firebase", "Snowflake",
      "Pinecone", "pgvector", "Vector Search",
    ],
  },
  {
    label: "AI & Developer Productivity",
    skills: [
      "LLM-Assisted Development", "AI-Supported Testing",
      "Prompt Engineering", "Workflow Automation",
      "OpenAI", "Anthropic", "RAG Concepts",
    ],
  },
  {
    label: "Testing & Quality",
    skills: [
      "Jest", "React Testing Library", "Cypress", "Playwright",
      "Pytest", "Unit Testing", "Integration Testing", "E2E Testing",
      "TDD", "Regression Prevention",
    ],
  },
  {
    label: "Architecture & Patterns",
    skills: [
      "Distributed Systems", "Event-Driven Design", "API Design",
      "Scalability Patterns", "Reliability Engineering",
      "Serverless Architecture", "Domain-Driven Design",
    ],
  },
  {
    label: "Tools & Workflows",
    skills: [
      "Git", "GitHub", "Linear", "Jira", "Asana",
      "Stripe", "SendGrid", "Twilio", "Figma",
    ],
  },
  {
    label: "Leadership & Process",
    skills: [
      "Technical Leadership", "Team Mentoring", "Cross-Functional Communication",
      "Technical Planning", "Product-Focused Execution", "Ownership Mindset",
      "Agile/Scrum", "Sprint Planning", "Iterative Delivery",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient-gold">Skills & Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
              className="rounded-xl border border-border bg-card/30 p-6"
            >
              <h3 className="text-sm font-display font-bold text-primary tracking-wider uppercase mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-secondary/50 text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
