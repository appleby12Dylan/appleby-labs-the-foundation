import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlowNodeProps {
  title: string;
  subtitle?: string;
  items?: string[];
  isHighlighted?: boolean;
  delay?: number;
}

const FlowNode = ({ title, subtitle, items, isHighlighted, delay = 0 }: FlowNodeProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative rounded-xl border px-6 py-5 ${
      isHighlighted
        ? "border-primary/50 bg-primary/5 shadow-gold"
        : "border-border bg-card/50"
    }`}
  >
    {isHighlighted && (
      <div className="absolute -top-3 left-4 px-2 py-0.5 text-[10px] tracking-widest uppercase bg-primary text-primary-foreground rounded-full font-semibold">
        Your Ownership
      </div>
    )}
    <h4 className={`font-display font-bold text-sm ${isHighlighted ? "text-primary" : "text-foreground"}`}>
      {title}
    </h4>
    {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
    {items && (
      <ul className="mt-3 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isHighlighted ? "bg-primary" : "bg-muted-foreground"}`} />
            {item}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const FlowConnector = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="flex justify-center"
    style={{ transformOrigin: "top" }}
  >
    <div className="w-px h-8 line-gold" />
  </motion.div>
);

interface ArchitectureDiagramProps {
  nodes: FlowNodeProps[];
  className?: string;
}

const ArchitectureDiagram = ({ nodes, className }: ArchitectureDiagramProps) => {
  return (
    <div className={`max-w-md mx-auto space-y-0 ${className}`}>
      {nodes.map((node, i) => (
        <div key={i}>
          {i > 0 && <FlowConnector delay={i * 0.15} />}
          <FlowNode {...node} delay={i * 0.15} />
        </div>
      ))}
    </div>
  );
};

export default ArchitectureDiagram;
