import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, BarChart, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StaffTraining = () => {
  const features = [
    {
      icon: Users,
      title: "Personalized Learning Paths",
      description: "Our AI platform assesses individual staff roles, existing knowledge, and performance data to create customized learning paths. This ensures that each team member receives relevant training tailored to their specific needs, maximizing engagement and knowledge retention."
    },
    {
      icon: CheckCircle,
      title: "Automated Compliance Training & Tracking",
      description: "Stay ahead of regulatory requirements with automated assignment and tracking of mandatory compliance training (e.g., HIPAA, OSHA). Resova AI ensures that all staff members complete necessary certifications and refreshers on time."
    },
    {
      icon: BookOpen,
      title: "Interactive Modules & Microlearning",
      description: "Engage your staff with interactive training modules, simulations, and microlearning content designed for busy healthcare professionals. Our platform supports various formats, including video, quizzes, and case studies."
    },
    {
      icon: BarChart,
      title: "Performance Analytics & Skill Gap Identification",
      description: "Gain insights into your team's collective and individual performance. Resova AI's analytics identify skill gaps and areas for improvement, allowing you to proactively address training needs and foster continuous professional development."
    }
  ];

  const benefits = [
    "Up to 40% Reduction in Training Costs",
    "Improved Staff Competency & Confidence", 
    "Enhanced Compliance & Risk Mitigation",
    "Faster Onboarding & Productivity",
    "Higher Staff Retention"
  ];

  const steps = [
    {
      number: "01",
      title: "Role-Based Assessment",
      description: "Define staff roles and the associated competencies required. Our AI platform then assesses current skill levels and identifies learning objectives."
    },
    {
      number: "02", 
      title: "Content Curation & Delivery",
      description: "Resova AI curates or helps create relevant training content, delivering it through personalized learning paths accessible via a user-friendly portal."
    },
    {
      number: "03",
      title: "Engagement & Progress Tracking",
      description: "Staff members engage with interactive modules, and their progress, completion rates, and assessment scores are continuously tracked."
    },
    {
      number: "04",
      title: "Reporting & Optimization",
      description: "Managers receive detailed reports on training effectiveness and compliance status. The system provides recommendations for further training and skill development."
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
              Dynamic Staff Training & Onboarding for{' '}
              <span className="text-primary">Peak Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empower your healthcare team with AI-driven learning, compliance, and professional development.
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
              In the rapidly evolving healthcare landscape, a well-trained and adaptable staff is crucial for delivering high-quality patient care and maintaining operational excellence. Traditional training methods can be costly, inconsistent, and fail to keep pace with new regulations and medical advancements. Resova AI's Staff Training & Onboarding solution leverages artificial intelligence to provide a dynamic, personalized, and efficient learning platform, ensuring your team is always at the forefront of healthcare innovation.
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
                    "Resova AI's training platform has transformed how we manage staff development. Our team is more knowledgeable, and we've significantly reduced the time and cost associated with compliance training. It's an invaluable asset!"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">Dr. David K.</div>
                    <div className="text-muted-foreground">Director of Operations, Unity Medical Group</div>
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
              Specific to Staff Training & Onboarding
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
              Elevate Your Team's Potential
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a personalized demo of our Staff Training & Onboarding solution today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request a Demo for Staff Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaffTraining;

