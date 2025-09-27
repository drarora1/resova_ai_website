import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SchedulingAutomation = () => {
  const features = [
    {
      icon: Clock,
      title: "AI-Driven Appointment Reminders & Confirmations",
      description: "Our intelligent system automatically sends personalized appointment reminders via SMS, email, or preferred communication channels. These reminders are dynamic, adapting to patient preferences and historical data to maximize confirmation rates and significantly reduce no-shows."
    },
    {
      icon: Users,
      title: "Optimized Resource Allocation",
      description: "Resova AI's AI algorithms analyze various factors, including provider availability, room utilization, equipment needs, and patient flow, to create the most efficient schedules."
    },
    {
      icon: Calendar,
      title: "Seamless Patient Self-Scheduling Portal",
      description: "Empower your patients with a user-friendly, secure online portal where they can view available appointments, book, reschedule, or cancel at their convenience."
    },
    {
      icon: CheckCircle,
      title: "Smart Waitlist Management",
      description: "Automatically manage waitlists by intelligently offering open slots to patients based on their preferences and urgency. Our system can fill last-minute cancellations quickly."
    }
  ];

  const benefits = [
    "Up to 30% Reduction in No-Shows",
    "25% Increase in Staff Efficiency", 
    "Enhanced Patient Satisfaction",
    "Maximized Resource Utilization",
    "Reduced Administrative Costs"
  ];

  const steps = [
    {
      number: "01",
      title: "Data Ingestion",
      description: "Resova AI securely integrates with your existing EMR/EHR system to import patient data, provider schedules, and resource availability."
    },
    {
      number: "02", 
      title: "AI Analysis & Optimization",
      description: "Our AI engine processes this data, identifies patterns, and predicts optimal scheduling scenarios, considering patient preferences, medical urgency, and resource constraints."
    },
    {
      number: "03",
      title: "Automated Execution",
      description: "The system automatically generates and manages schedules, sends out reminders, handles confirmations, and updates all relevant calendars."
    },
    {
      number: "04",
      title: "Real-time Monitoring & Reporting",
      description: "Access dashboards that provide real-time insights into scheduling performance, no-show rates, and resource utilization, allowing for continuous improvement."
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
              Intelligent Scheduling Automation for Your{' '}
              <span className="text-primary">Outpatient Practice</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Reduce no-shows, optimize resources, and enhance patient access with AI-driven precision.
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
              In the fast-paced environment of outpatient healthcare, efficient scheduling is the backbone of a successful practice. Manual scheduling processes are not only time-consuming but also prone to errors, leading to missed appointments, suboptimal resource utilization, and frustrated patients. Resova AI's Scheduling Automation solution leverages advanced artificial intelligence to transform your appointment management, ensuring seamless operations and an elevated patient experience.
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
              Detailed Features
            </h2>
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
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <span className="text-lg text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-6">
                    "Since implementing Resova AI's scheduling automation, our clinic has seen a dramatic drop in no-shows and our front desk staff can now dedicate more time to patient engagement instead of phone calls. It's been a transformative change!"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">Sarah L.</div>
                    <div className="text-muted-foreground">Office Manager, Evergreen Health Clinic</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Specific to Scheduling Automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
              Ready to Revolutionize Your Practice's Scheduling?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a personalized demo of our Scheduling Automation solution today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request a Demo for Scheduling Automation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchedulingAutomation;

