import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Activity, 
  Bell, 
  PieChart, 
  LineChart, 
  Shield, 
  Smartphone,
  Sparkles,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Health Score",
    description: "AI analyzes your portfolio against your goals 24/7. Get instant insights on allocation, risk, and projected returns.",
    gradient: "from-secondary to-[hsl(199_89%_38%)]",
  },
  {
    icon: Bell,
    title: "Drift Alerts",
    description: "Receive smart notifications when your portfolio deviates from the optimal path. Never miss a rebalancing opportunity.",
    gradient: "from-warning to-[hsl(30_100%_50%)]",
  },
  {
    icon: PieChart,
    title: "Goal Tracking",
    description: "Visualize progress towards each goal with beautiful charts. See exactly where you stand and what's needed.",
    gradient: "from-success to-[hsl(160_84%_50%)]",
  },
  {
    icon: LineChart,
    title: "Projection Engine",
    description: "Monte Carlo simulations show best and worst case scenarios. Plan for uncertainty with confidence.",
    gradient: "from-primary to-[hsl(217_91%_60%)]",
  },
  {
    icon: RefreshCw,
    title: "Auto-Rebalance Suggestions",
    description: "Get actionable recommendations to optimize your portfolio. One-click implementation with supported brokers.",
    gradient: "from-[hsl(280_84%_60%)] to-[hsl(280_84%_40%)]",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your dashboard anywhere. Native iOS and Android apps with biometric authentication.",
    gradient: "from-[hsl(340_82%_52%)] to-[hsl(340_82%_42%)]",
  },
];

export const FeaturesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text-accent">Stay On Track</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade tools wrapped in an interface so simple, 
            your grandmother could use it.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card p-8 h-full relative overflow-hidden">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Hover effect */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-full glass-card">
            <Shield className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground">
              Bank-grade 256-bit SSL encryption • SOC 2 Type II Certified • SEBI Compliant
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
