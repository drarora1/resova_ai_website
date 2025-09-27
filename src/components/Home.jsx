import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, DollarSign, Zap, CheckCircle, Star, Monitor, FileText, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/7WawEuXhlSYr.webp';

const Home = () => {
  const features = [
    {
      icon: Monitor,
      title: "Streamline Virtual Care Delivery",
      description: "Our AI-powered platform transforms fragmented telehealth workflows into seamless, end-to-end experiences that work for both providers and patients."
    },
    {
      icon: FileText,
      title: "Intelligent Documentation & Billing",
      description: "Eliminate burdensome documentation and error-prone billing processes with embedded automation that accelerates reimbursements and reduces compliance risk."
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Stop revenue leakage with our intelligent billing automation that ensures faster, more accurate claims processing and maximizes your virtual care monetization."
    },
    {
      icon: Shield,
      title: "Built for Telehealth Scale",
      description: "Unlike legacy systems, our modular platform is designed specifically for virtual-first practices, scaling with your care model and integrating with any tech stack."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Seamless Integration",
      description: "Resova AI effortlessly connects with your existing telehealth platforms, EHRs, and practice management systems without disrupting your current workflows."
    },
    {
      number: "02",
      title: "Embedded Intelligence",
      description: "Our AI algorithms automate every step from virtual consultations to revenue optimization, learning your practice patterns to maximize efficiency."
    },
    {
      number: "03",
      title: "Continuous Optimization",
      description: "Real-time analytics and workflow intelligence ensure your virtual practice operates at peak performance with measurable ROI."
    }
  ];

  const testimonials = [
    {
      quote: "Resova AI transformed our virtual practice operations. We've eliminated documentation bottlenecks and our reimbursement cycle is 40% faster.",
      author: "Dr. Sarah M.",
      role: "Telehealth Director"
    },
    {
      quote: "The embedded automation is incredible. Our providers can focus on patient care while the platform handles the complex billing workflows seamlessly.",
      author: "James Liu",
      role: "VP of Operations"
    }
  ];

  const differentiators = [
    {
      title: "Workflow-First Design",
      description: "Built specifically for telehealth operations, not retrofitted from legacy systems"
    },
    {
      title: "Embedded Intelligence",
      description: "AI automation integrated into every step of your virtual care delivery"
    },
    {
      title: "Revenue-Centric",
      description: "Optimized for faster reimbursements and maximum revenue capture"
    },
    {
      title: "Modular & Scalable",
      description: "Fits any tech stack and scales with your virtual practice growth"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Virtual Care with{' '}
                <span className="text-primary">Intelligent Workflows</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Next-generation healthcare technology that streamlines telehealth delivery and transforms virtual care operations with AI-powered, end-to-end automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Healthcare professionals using AI technology"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              The Virtual Care Challenge
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The rise of virtual care has created unprecedented access to healthcare—but it has also exposed deep inefficiencies in how telehealth is delivered and reimbursed. Providers today struggle with fragmented workflows, burdensome documentation, and a billing process that is error-prone, opaque, and misaligned with the pace of digital care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional healthcare systems and EHR platforms were not designed with telehealth in mind, and they lack the automation, intelligence, and flexibility required to support the modern virtual practice. This results in time wasted on administrative tasks, delayed reimbursements, revenue leakage, and disjointed patient experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Resova AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine clinical and billing workflows into one AI-powered platform built specifically for telehealth operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike legacy RCM tools or rigid platforms, we embed automation into every step, from documentation to revenue optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Resova AI Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our modular, interoperable design fits any stack and scales with your care model.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Built for Virtual-First Organizations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our primary customers are telehealth-focused provider organizations and digital health companies, ranging from venture-backed startups to established virtual-first medical groups, who deliver care at scale and are looking to operationalize efficiency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a growing telehealth startup or an established virtual practice, Resova AI provides the intelligent automation and workflow optimization you need to thrive in the digital healthcare landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
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
              Ready to Transform Your Virtual Practice?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading telehealth organizations who trust Resova AI to streamline their operations and maximize their revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;


