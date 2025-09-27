import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Shield, Users, Handshake, ArrowRight, Stethoscope, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We are relentless in our pursuit of groundbreaking AI solutions that push the boundaries of what's possible in virtual care delivery. We embrace continuous learning and adaptation to deliver state-of-the-art technology."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust is the cornerstone of healthcare. We operate with unwavering honesty, transparency, and ethical responsibility in all our interactions, especially concerning data security and patient privacy."
    },
    {
      icon: Heart,
      title: "Patient-Centricity",
      description: "Every solution we develop is ultimately designed to improve the patient journey. By optimizing telehealth operations, we enable healthcare providers to deliver more focused, compassionate, and efficient virtual care."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "We believe in empowering healthcare professionals. Our tools are crafted to reduce administrative burden, enhance provider capabilities, and free up valuable time, allowing teams to excel in virtual care delivery."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We foster a culture of collaboration, both internally and with our clients. By working together, we co-create solutions that are truly impactful and tailored to the evolving needs of the virtual healthcare community."
    }
  ];

  const founderHighlights = [
    {
      icon: Stethoscope,
      title: "Clinical Training",
      description: "Deep medical insight from physician background"
    },
    {
      icon: Code,
      title: "Technical Fluency",
      description: "Product and operations expertise in health tech"
    },
    {
      icon: Zap,
      title: "Startup Execution",
      description: "Proven track record in building scalable solutions"
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
              Our Mission:{' '}
              <span className="text-primary">Transform Virtual Care Delivery</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We are a next-generation healthcare technology company on a mission to streamline virtual care delivery and transform healthcare operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Resova AI was founded on a powerful vision: to transform how virtual care is delivered and monetized. We specialize in building intelligent, end-to-end workflows that power seamless telehealth experiences for providers and patients alike. The rise of virtual care has created unprecedented access to healthcare—but it has also exposed deep inefficiencies in how telehealth is delivered and reimbursed.
              </p>
              <p className="mb-6">
                We recognized that traditional healthcare systems and EHR platforms were not designed with telehealth in mind, lacking the automation, intelligence, and flexibility required to support modern virtual practices. Our founders envisioned a future where AI-powered workflows could eliminate these inefficiencies, allowing healthcare professionals to focus on what matters most: delivering exceptional patient care.
              </p>
              <p>
                Born from a unique blend of clinical expertise and cutting-edge AI development, Resova AI was created to be more than just a software provider. We are partners in progress, committed to building solutions that combine clinical insight with technical innovation to revolutionize virtual care operations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
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
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Sidd Arora</h3>
                  <p className="text-lg text-primary font-semibold mb-6">CEO & Founder</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sidd Arora is a physician-turned-founder with deep expertise in health tech and AI. Combining clinical training with product and operations experience, he's built scalable solutions across care delivery and revenue optimization.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sidd brings a unique blend of medical insight, technical fluency, and startup execution, making him well-positioned to transform how virtual care is delivered and monetized. His vision drives Resova AI's mission to streamline telehealth operations through intelligent automation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 gap-6">
                {founderHighlights.map((highlight, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {highlight.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build solutions for the virtual healthcare community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Our Vision for the Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We envision a future where virtual care delivery is seamless, efficient, and profitable. Where providers can focus entirely on patient care while intelligent automation handles the complex operational workflows behind the scenes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through our AI-powered platform, we're building the infrastructure that will enable telehealth organizations to scale efficiently, maximize revenue, and deliver exceptional patient experiences. This is the future of virtual healthcare, and we're making it a reality today.
            </p>
          </motion.div>
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
              Join Us in Transforming Virtual Care
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to experience the future of telehealth operations? Let's explore how Resova AI can transform your virtual practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

