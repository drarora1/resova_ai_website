import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, FileText, Search, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Resources = () => {
  const featuredArticles = [
    {
      type: "Blog Post",
      title: "The Impact of AI on Outpatient Billing: A 2025 Outlook",
      description: "An in-depth look at how artificial intelligence is reshaping billing processes, reducing errors, and accelerating revenue cycles for outpatient clinics.",
      date: "September 15, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      link: "/resources/blog-post-1"
    },
    {
      type: "Whitepaper",
      title: "A Comprehensive Guide to AI-Powered Revenue Cycle Management",
      description: "Deep dive into the strategies and technologies that are revolutionizing financial operations in healthcare.",
      date: "September 5, 2025",
      readTime: "15 min read",
      category: "Revenue Cycle",
      link: "/resources/whitepaper-1"
    }
  ];

  const latestPosts = [
    {
      title: "5 Ways AI Can Improve Staff Training Efficiency",
      description: "Discover practical strategies to leverage AI for more effective and engaging staff development programs.",
      date: "September 10, 2025",
      category: "Staff Training",
      link: "/resources/blog-post-2"
    },
    {
      title: "Navigating HIPAA Compliance with Automated Scheduling Systems",
      description: "Understand the key considerations for maintaining patient data privacy while implementing intelligent scheduling solutions.",
      date: "September 5, 2025",
      category: "Compliance",
      link: "/resources/blog-post-3"
    },
    {
      title: "The ROI of Healthcare Automation: What Practice Managers Need to Know",
      description: "Learn how to calculate and maximize the return on investment from AI-powered healthcare automation.",
      date: "August 28, 2025",
      category: "Business Strategy",
      link: "/resources/blog-post-4"
    },
    {
      title: "Future-Proofing Your Practice: Emerging Trends in Healthcare Technology",
      description: "Stay ahead of the curve with insights into the latest technological innovations transforming outpatient care.",
      date: "August 20, 2025",
      category: "Industry Trends",
      link: "/resources/blog-post-5"
    }
  ];

  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Blog Posts",
      description: "Expert insights on AI, automation, and healthcare operations",
      link: "/resources/blog-posts"
    },
    {
      icon: FileText,
      title: "Whitepapers & E-books",
      description: "In-depth guides and comprehensive research reports",
      link: "/resources/whitepapers"
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
              Insights & Innovation in{' '}
              <span className="text-primary">Healthcare Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay informed with the latest trends, expert analyses, and success stories from Resova AI.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-10 pr-4 py-3"
              />
            </div>
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
              In the rapidly evolving landscape of healthcare technology, staying informed is key to success. The Resova AI Resources and Blog section is your go-to hub for valuable insights, in-depth analyses, and practical guidance on AI-driven automation in outpatient settings. Whether you're looking for best practices in operational efficiency, updates on regulatory compliance, or inspiring success stories, our curated content is designed to empower your practice and keep you at the forefront of innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
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
              Explore Our Resource Library
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={category.link} className="block">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
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
              Featured Content
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">{article.type}</span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Link to={article.link} className="text-sm text-primary font-medium hover:underline">Read More</Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
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
              Latest Posts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-medium">{post.category}</span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-muted-foreground"></span>
                      <Link to={post.link} className="text-sm text-primary font-medium hover:underline">Read More</Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Mail className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Don't Miss Out on the Latest Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for exclusive content and updates delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                placeholder="Enter your email"
                className="bg-white text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

