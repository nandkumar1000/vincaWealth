import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Users } from "lucide-react";

export const CTASection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 md:p-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/10 via-transparent to-success/10" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success/20 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center">
              {/* Urgency badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/20 border border-warning/30 text-warning mb-8"
              >
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">First 100 users: 50% off + Free webinar</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Ready to Take Control of{" "}
                <span className="gradient-text-accent">Your Financial Future?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                Join thousands of smart investors who've already transformed their 
                wealth journey with Vinca's AI-powered insights.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-8 mb-10"
              >
                {[
                  { value: "10K+", label: "Active Users" },
                  { value: "₹500Cr+", label: "Assets Tracked" },
                  { value: "98%", label: "Goal Success" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold gradient-text-accent">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="hero" size="xl" className="pulse-glow group">
                  <Gift className="w-5 h-5" />
                  Claim 50% Off Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  <Users className="w-5 h-5" />
                  Talk to Expert
                </Button>
              </motion.div>

              {/* Trust note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 text-sm text-muted-foreground"
              >
                ✓ 14-day free trial  ✓ No credit card required  ✓ Cancel anytime
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
