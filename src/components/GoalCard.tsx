import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Target } from "lucide-react";

interface GoalCardProps {
  title: string;
  progress: number;
  amount: string;
  target: string;
  trend: "up" | "down" | "stable";
  delay?: number;
  className?: string;
}

export const GoalCard = ({ 
  title, 
  progress, 
  amount, 
  target, 
  trend, 
  delay = 0,
  className = ""
}: GoalCardProps) => {
  const getProgressColor = () => {
    if (progress >= 80) return "from-success to-[hsl(160_84%_50%)]";
    if (progress >= 50) return "from-secondary to-[hsl(199_89%_58%)]";
    return "from-warning to-[hsl(38_92%_60%)]";
  };

  const getStatusColor = () => {
    if (progress >= 80) return "text-success";
    if (progress >= 50) return "text-secondary";
    return "text-warning";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`glass-card p-6 relative overflow-hidden group ${className}`}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-muted">
              <Target className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
          <div className={`flex items-center gap-1 ${getStatusColor()}`}>
            {trend === "up" && <TrendingUp className="w-4 h-4" />}
            {trend === "down" && <TrendingDown className="w-4 h-4" />}
            <span className="text-2xl font-bold">{progress}%</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-muted rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${getProgressColor()} rounded-full`}
          />
        </div>

        {/* Amount details */}
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-muted-foreground">Invested</p>
            <p className="font-semibold text-foreground">{amount}</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">Target</p>
            <p className="font-semibold text-foreground">{target}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
