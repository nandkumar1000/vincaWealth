import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, Target, BarChart3, Upload, Sliders, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Link Your Portfolio",
    description: "Securely connect your brokerage accounts. We support Groww, Zerodha, and 20+ platforms.",
    icon: Link,
    features: ["One-click sync", "256-bit encryption", "Read-only access"],
    color: "secondary",
  },
  {
    number: "02", 
    title: "Define Your Goals",
    description: "Set your financial milestones with our intuitive goal builder. Retirement, house, education - you name it.",
    icon: Target,
    features: ["Smart suggestions", "Risk assessment", "Timeline planning"],
    color: "success",
  },
  {
    number: "03",
    title: "Get AI Insights",
    description: "Receive personalized health scores, drift alerts, and actionable recommendations in real-time.",
    icon: BarChart3,
    features: ["Real-time analysis", "Drift detection", "Rebalancing tips"],
    color: "warning",
  },
];

export const StepsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Three Steps to{" "}
            <span className="gradient-text-accent">Financial Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Go from scattered investments to a unified wealth dashboard in under 5 minutes.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="glass-card p-8 h-full relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-muted/20">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-${step.color}/10 border border-${step.color}/30 flex items-center justify-center mb-6 relative z-10`}
                  style={{
                    background: step.color === "secondary" ? "hsl(199 89% 48% / 0.1)" : 
                               step.color === "success" ? "hsl(160 84% 39% / 0.1)" : 
                               "hsl(38 92% 50% / 0.1)",
                    borderColor: step.color === "secondary" ? "hsl(199 89% 48% / 0.3)" : 
                                 step.color === "success" ? "hsl(160 84% 39% / 0.3)" : 
                                 "hsl(38 92% 50% / 0.3)",
                  }}
                >
                  <step.icon 
                    className="w-8 h-8"
                    style={{
                      color: step.color === "secondary" ? "hsl(199 89% 48%)" : 
                             step.color === "success" ? "hsl(160 84% 39%)" : 
                             "hsl(38 92% 50%)",
                    }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground mb-6 relative z-10">{step.description}</p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: step.color === "secondary" ? "hsl(199 89% 48%)" : 
                                     step.color === "success" ? "hsl(160 84% 39%)" : 
                                     "hsl(38 92% 50%)",
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div 
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: step.color === "secondary" ? "hsl(199 89% 48% / 0.2)" : 
                               step.color === "success" ? "hsl(160 84% 39% / 0.2)" : 
                               "hsl(38 92% 50% / 0.2)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
