import { motion } from "framer-motion";

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

const SplitConnector = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="flex justify-center"
  >
    <div className="relative w-full max-w-[80%] h-8">
      {/* Vertical down from parent */}
      <div className="absolute left-1/2 top-0 w-px h-4 line-gold" />
      {/* Horizontal bar */}
      <div className="absolute left-[25%] right-[25%] top-4 h-px bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
      {/* Left vertical down */}
      <div className="absolute left-[25%] top-4 w-px h-4 line-gold" />
      {/* Right vertical down */}
      <div className="absolute right-[25%] top-4 w-px h-4 line-gold" />
    </div>
  </motion.div>
);

const MergeConnector = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="flex justify-center"
  >
    <div className="relative w-full max-w-[80%] h-8">
      {/* Left vertical up */}
      <div className="absolute left-[25%] top-0 w-px h-4 line-gold" />
      {/* Right vertical up */}
      <div className="absolute right-[25%] top-0 w-px h-4 line-gold" />
      {/* Horizontal bar */}
      <div className="absolute left-[25%] right-[25%] top-4 h-px bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
      {/* Vertical down to child */}
      <div className="absolute left-1/2 top-4 w-px h-4 line-gold" />
    </div>
  </motion.div>
);

export type DiagramNode =
  | ({ type?: "single" } & FlowNodeProps)
  | { type: "parallel"; nodes: [FlowNodeProps, FlowNodeProps] };

interface ArchitectureDiagramProps {
  nodes: DiagramNode[];
  className?: string;
}

const ArchitectureDiagram = ({ nodes, className }: ArchitectureDiagramProps) => {
  return (
    <div className={`max-w-md mx-auto space-y-0 ${className}`}>
      {nodes.map((node, i) => {
        const isParallel = node.type === "parallel";
        const prevIsParallel = i > 0 && nodes[i - 1].type === "parallel";

        if (isParallel) {
          return (
            <div key={i}>
              <SplitConnector delay={i * 0.15} />
              <div className="grid grid-cols-2 gap-3">
                <FlowNode {...node.nodes[0]} delay={i * 0.15} />
                <FlowNode {...node.nodes[1]} delay={i * 0.15 + 0.1} />
              </div>
            </div>
          );
        }

        return (
          <div key={i}>
            {i > 0 && (prevIsParallel ? <MergeConnector delay={i * 0.15} /> : <FlowConnector delay={i * 0.15} />)}
            <FlowNode {...(node as FlowNodeProps)} delay={i * 0.15} />
          </div>
        );
      })}
    </div>
  );
};

export default ArchitectureDiagram;
