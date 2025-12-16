import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started with goal tracking",
    features: [
      "1 portfolio connection",
      "2 goal tracking",
      "Basic health score",
      "Monthly reports",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹149",
    period: "/month",
    yearlyPrice: "₹1,299/year",
    savings: "Save 27%",
    description: "For serious investors who want complete clarity",
    features: [
      "Unlimited portfolios",
      "Unlimited goals",
      "Advanced AI insights",
      "Real-time drift alerts",
      "Monte Carlo projections",
      "Auto-rebalance suggestions",
      "Priority support",
      "Mobile app access",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "Family",
    price: "₹399",
    period: "/month",
    description: "Manage wealth for your entire family",
    features: [
      "Everything in Pro",
      "5 family member accounts",
      "Unified family dashboard",
      "Legacy planning tools",
      "Tax harvesting alerts",
      "Dedicated advisor",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const PricingSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warning/10 text-warning text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Path to{" "}
            <span className="gradient-text-accent">Financial Freedom</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when ready. No credit card required for trial.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative ${plan.popular ? "md:-mt-8 md:mb-8" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary to-success text-secondary-foreground text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`glass-card p-8 h-full relative overflow-hidden ${
                plan.popular 
                  ? "border-secondary/50 shadow-[0_0_40px_hsl(var(--secondary)/0.15)]" 
                  : ""
              }`}>
                {/* Plan header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.yearlyPrice && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">{plan.yearlyPrice}</span>
                      <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">
                        {plan.savings}
                      </span>
                    </div>
                  )}
                  <p className="text-muted-foreground mt-3 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={plan.popular ? "hero" : "hero-outline"} 
                  className="w-full group"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Background decoration */}
                {plan.popular && (
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Trusted by investors managing ₹500+ Crores</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["Groww", "Zerodha", "Upstox", "Angel One", "5Paisa"].map((broker) => (
              <span key={broker} className="text-lg font-semibold text-muted-foreground">
                {broker}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
