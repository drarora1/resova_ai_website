import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Cloud, Shield, Zap, Lock, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Technology = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Our proprietary AI and Machine Learning algorithms are the brain behind Resova AI. These advanced models are trained on vast datasets to identify patterns, predict outcomes, and make intelligent decisions across scheduling, training, and billing workflows.",
      features: [
        "Predictive Analytics: Anticipate patient no-shows, identify billing anomalies, and forecast staffing needs",
        "Natural Language Processing (NLP): Understand and process unstructured data from patient notes or communication",
        "Adaptive Learning: Our system continuously learns from new data, improving accuracy and efficiency over time"
      ]
    },
    {
      icon: Cloud,
      title: "Robust Cloud Infrastructure",
      description: "Resova AI operates on a scalable, secure cloud infrastructure designed for high availability and performance. This ensures that our platform is always accessible, reliable, and capable of handling the demands of any outpatient practice.",
      features: [
        "Scalability: Easily adapt to your practice's growth without compromising performance",
        "Reliability: Redundant systems and continuous monitoring ensure maximum uptime and data integrity",
        "Global Accessibility: Access your operational insights and tools from anywhere, at any time, on any device"
      ]
    },
    {
      icon: Zap,
      title: "Seamless Integration Capabilities",
      description: "We understand that your practice relies on existing systems. Resova AI is built with an open architecture, designed for seamless integration with your current Electronic Medical Records (EMR), Electronic Health Records (EHR), and other practice management software.",
      features: [
        "API-first approach ensures smooth, non-disruptive transition",
        "Compatible with major EMR/EHR systems",
        "Real-time data synchronization across all platforms"
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Resova AI is fully committed to HIPAA compliance, implementing stringent technical, administrative, and physical safeguards to protect Protected Health Information (PHI)."
    },
    {
      icon: Lock,
      title: "Advanced Encryption & Access Controls",
      description: "All data transmitted to and from Resova AI, as well as data at rest, is protected using industry-leading encryption protocols with multi-factor authentication and role-based access controls."
    },
    {
      icon: CheckCircle,
      title: "Regular Security Audits & Updates",
      description: "Our security team conducts continuous monitoring and regular penetration testing to identify and mitigate potential vulnerabilities."
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
              The Power Behind Resova AI:{' '}
              <span className="text-primary">Advanced AI & Secure Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Understanding our intelligent platform and unwavering commitment to data security and compliance.
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
              At Resova AI, we believe that the future of healthcare operations is intelligent, automated, and secure. Our platform is built upon a foundation of cutting-edge artificial intelligence and robust cloud infrastructure, meticulously engineered to deliver unparalleled efficiency and reliability. We don't just automate tasks; we provide a smart, adaptive system that learns, predicts, and optimizes, all while upholding the highest standards of data privacy and regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Technologies Section */}
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
              Core Technologies
            </h2>
          </motion.div>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mr-6">
                        <tech.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{tech.title}</CardTitle>
                        <p className="text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security & Compliance Section */}
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
              Data Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your data security and patient privacy are paramount. We implement the highest standards of protection and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
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

      {/* Integration Diagram Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Seamless Integration Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is designed to work harmoniously with your existing healthcare technology stack.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-semibold text-secondary">EMR/EHR</span>
                </div>
                <p className="text-sm text-muted-foreground">Electronic Medical Records</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">Resova AI</span>
                </div>
                <p className="text-sm text-muted-foreground">AI-Powered Platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-semibold text-accent">PMS</span>
                </div>
                <p className="text-sm text-muted-foreground">Practice Management Systems</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Secure API connections ensure real-time data synchronization and seamless workflow integration
              </p>
            </div>
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
              Curious About the Technical Details?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download our comprehensive technical whitepaper or contact us for an in-depth discussion about our security protocols and integration capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Technical Whitepaper
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  Schedule Technical Discussion
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

export default Technology;

