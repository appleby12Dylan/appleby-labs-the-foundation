import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "C#", "Ruby", "SQL", "HTML5", "CSS3/SCSS"],
  },
  {
    label: "Frontend",
    skills: [
      "React", "Next.js", "Vue.js", "Angular", "TailwindCSS", "Framer Motion",
      "Component Architecture", "SPA Development", "State Management",
      "Responsive Design", "Accessibility (WCAG)", "Cross-Browser Compatibility",
      "Design Systems", "Storybook",
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js", "Express", "FastAPI", "Django", "Flask", "Ruby on Rails",
      ".NET Core", "ASP.NET", "tRPC", "REST APIs", "GraphQL",
      "Microservices", "Serverless", "Event-Driven Architecture",
      "ActiveRecord", "Entity Framework", "Dapper", "Prisma", "Sidekiq",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS", "Lambda", "ECS", "SQS", "EventBridge", "API Gateway",
      "DynamoDB", "RDS", "S3", "CloudWatch",
      "GCP", "Azure", "Docker", "Kubernetes",
      "Terraform", "CI/CD", "GitHub Actions", "Jenkins", "CircleCI",
      "Azure DevOps", "GitLab CI",
    ],
  },
  {
    label: "Data & Storage",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server",
      "DynamoDB", "Snowflake", "Firebase",
      "Pinecone", "pgvector", "Vector Search",
    ],
  },
  {
    label: "AI & ML",
    skills: [
      "LLM Integration", "OpenAI", "Anthropic", "AWS Bedrock",
      "RAG Concepts", "Embedding-Based Retrieval",
      "AI-Powered Workflows", "Anomaly Detection",
    ],
  },
  {
    label: "Testing & Quality",
    skills: [
      "Jest", "React Testing Library", "Cypress", "Playwright",
      "Pytest", "RSpec", "xUnit", "NUnit", "Minitest",
      "Unit Testing", "Integration Testing", "E2E Testing",
      "Code Reviews", "SOLID Principles", "Clean Code", "Design Patterns",
    ],
  },
  {
    label: "Architecture & Patterns",
    skills: [
      "Distributed Systems", "Event-Driven Design", "API Design",
      "Multi-Tenant Architecture", "SOA", "Domain-Driven Design",
      "Real-Time Services", "Observability", "Performance Tuning",
      "Integration Frameworks", "Secure Coding",
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "Jira", "Asana", "Stripe", "SendGrid", "Twilio",
      "OpenSearch", "Elasticsearch", "Application Insights",
      "Agile/Scrum", "SEO Fundamentals",
    ],
  },
  {
    label: "Leadership",
    skills: [
      "Technical Leadership", "Team Mentoring", "Cross-Functional Communication",
      "Technical Planning", "Product-Driven Development", "Architectural Decision-Making",
      "Code Reviews", "System Ownership", "Onboarding & Knowledge Transfer",
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
