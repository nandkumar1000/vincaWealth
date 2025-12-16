import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { GoalCard } from "@/components/GoalCard";
import { ArrowRight, Sparkles, Shield, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">AI-Powered Portfolio Health</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Your Goals Deserve{" "}
              <span className="gradient-text-accent">Better Than Guesswork</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              AI-powered health scores • Real-time drift detection • 
              Smart goal projections that adapt to your life
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              {[
                { icon: Shield, text: "Bank-grade security" },
                { icon: TrendingUp, text: "10K+ portfolios analyzed" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-secondary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" className="pulse-glow group">
                See My Score
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Trusted by <span className="text-secondary font-semibold">10,000+</span> investors • 
              Starting at <span className="text-foreground font-semibold">₹149/mo</span>
            </motion.p>
          </motion.div>

          {/* Right content - Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative space-y-6 perspective-1000">
              <GoalCard
                title="Retirement Fund"
                progress={74}
                amount="₹18,50,000"
                target="₹25,00,000"
                trend="up"
                delay={0.5}
                className="floating-animation"
              />
              <GoalCard
                title="Dream House"
                progress={92}
                amount="₹46,00,000"
                target="₹50,00,000"
                trend="up"
                delay={0.7}
                className="floating-animation-delayed ml-8"
              />
              <GoalCard
                title="Child's Education"
                progress={68}
                amount="₹6,80,000"
                target="₹10,00,000"
                trend="stable"
                delay={0.9}
                className="floating-animation-slow"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-success/20 to-transparent rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-secondary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-secondary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
