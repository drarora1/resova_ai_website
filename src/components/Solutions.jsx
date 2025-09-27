import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, DollarSign, Workflow, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      icon: Calendar,
      title: "Intelligent Scheduling & Appointment Management",
      description: "Revolutionize how your outpatient facility manages appointments. Our AI-driven scheduling system minimizes no-shows through smart reminders, optimizes resource allocation by matching patient needs with provider availability, and offers seamless patient self-scheduling options.",
      link: "/solutions/scheduling",
      benefits: ["30% reduction in no-shows", "25% increase in staff efficiency", "Enhanced patient satisfaction"]
    },
    {
      icon: Users,
      title: "Dynamic Staff Training & Performance Optimization",
      description: "Elevate your team's capabilities with continuous, personalized learning experiences. Resova AI's intelligent training modules adapt to individual learning styles and roles, ensuring your staff is always compliant, proficient, and engaged.",
      link: "/solutions/training",
      benefits: ["40% reduction in training costs", "Improved compliance tracking", "Higher staff retention"]
    },
    {
      icon: DollarSign,
      title: "AI-Powered Billing & Revenue Cycle Optimization",
      description: "Transform your financial operations with our advanced billing automation. Resova AI intelligently processes claims, identifies potential errors before submission, and accelerates payment cycles.",
      link: "/solutions/billing",
      benefits: ["20% increase in collections", "30% reduction in admin time", "Minimized claim denials"]
    },
    {
      icon: Workflow,
      title: "Holistic Workflow Streamlining & Integration",
      description: "Beyond individual functions, Resova AI provides a comprehensive approach to optimizing your entire operational workflow. Our platform seamlessly integrates with your existing systems, breaking down silos and creating a unified, efficient ecosystem.",
      link: "/technology",
      benefits: ["Seamless system integration", "Eliminated bottlenecks", "Peak operational performance"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive AI Solutions for{' '}
              <span className="text-primary">Outpatient Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore how Resova AI transforms scheduling, staff training, and billing, empowering your practice with unparalleled efficiency and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the dynamic world of outpatient healthcare, staying ahead means embracing innovation. Resova AI offers a suite of intelligent, AI-powered solutions meticulously designed to address the unique operational challenges faced by clinics and practices. Our platform goes beyond simple automation, providing predictive insights and adaptive workflows that ensure every aspect of your operations, from the first patient interaction to the final billing statement, is optimized for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={solution.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a personalized demo today and discover the future of outpatient healthcare management.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request a Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

