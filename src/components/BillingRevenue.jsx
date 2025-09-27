import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, FileText, CreditCard, BarChart, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const BillingRevenue = () => {
  const features = [
    {
      icon: FileText,
      title: "Intelligent Claims Processing & Error Detection",
      description: "Our AI system meticulously reviews claims before submission, identifying potential coding errors, missing information, or compliance issues that could lead to denials. This proactive approach significantly reduces rejections and accelerates claim approvals."
    },
    {
      icon: CreditCard,
      title: "Automated Payment Posting & Reconciliation",
      description: "Eliminate manual data entry and reconciliation headaches. Resova AI automatically posts payments from Explanation of Benefits (EOBs) and Electronic Remittance Advice (ERAs), accurately matching them to patient accounts and services."
    },
    {
      icon: BarChart,
      title: "Denial Management & Appeals Automation",
      description: "Turn denials into revenue with our intelligent denial management system. The AI identifies common denial reasons, suggests corrective actions, and even automates the appeal process for certain types of claims."
    },
    {
      icon: DollarSign,
      title: "Patient Billing & Payment Portal",
      description: "Offer your patients a transparent and convenient way to manage their bills. Our secure patient portal allows them to view statements, understand charges, and make payments online with automated payment reminders and flexible payment plan options."
    }
  ];

  const benefits = [
    "Up to 20% Increase in Collections",
    "30% Reduction in Administrative Time", 
    "Minimized Claim Denials",
    "Improved Cash Flow",
    "Enhanced Patient Satisfaction"
  ];

  const steps = [
    {
      number: "01",
      title: "Data Capture & Pre-analysis",
      description: "Patient demographics, service codes, and insurance information are securely captured and pre-analyzed by our AI for completeness and accuracy."
    },
    {
      number: "02", 
      title: "Smart Claim Generation",
      description: "The system generates claims, applying intelligent rules and cross-referencing against payer requirements to minimize errors."
    },
    {
      number: "03",
      title: "Automated Submission & Tracking",
      description: "Claims are submitted electronically, and their status is tracked in real-time, providing transparency throughout the process."
    },
    {
      number: "04",
      title: "Denial & Payment Management",
      description: "Our AI identifies denials, assists with appeals, and automates payment posting and reconciliation, ensuring every dollar is accounted for."
    },
    {
      number: "05",
      title: "Performance Insights",
      description: "Continuous monitoring and detailed analytics provide actionable insights to further optimize your revenue cycle and financial strategies."
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
              AI-Powered Billing & Revenue Cycle Optimization for{' '}
              <span className="text-primary">Outpatient Practices</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Maximize revenue, minimize denials, and streamline financial operations with intelligent automation.
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
              Effective billing and revenue cycle management are critical to the financial health of any outpatient practice. However, the complexities of medical coding, insurance claims, and payment processing often lead to delays, errors, and lost revenue. Resova AI's Billing & Revenue Cycle Management solution harnesses the power of artificial intelligence to automate and optimize every stage of your financial workflow, ensuring accuracy, accelerating payments, and boosting your bottom line.
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
                    "Resova AI's billing solution has been a game-changer for our practice. We've seen a significant reduction in claim denials and our cash flow has never been better. The financial insights are invaluable!"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">Robert M.</div>
                    <div className="text-muted-foreground">CFO, Premier Health Solutions</div>
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
              Specific to Billing & Revenue Cycle Management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
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
              Ready to Optimize Your Practice's Financial Health?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a personalized demo of our Billing & Revenue Cycle Management solution today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request a Demo for Billing Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BillingRevenue;

