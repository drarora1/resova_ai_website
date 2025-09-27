import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> September 20, 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services, 
              request a demo, or contact us for support. This may include your name, email address, phone number, 
              company information, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. HIPAA Compliance</h2>
            <p className="text-muted-foreground mb-6">
              As a healthcare technology provider, we are committed to maintaining HIPAA compliance. We implement 
              appropriate safeguards to protect protected health information (PHI) and ensure that our services 
              meet the requirements of the Health Insurance Portability and Accountability Act.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-6">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>The right to access and update your information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt out of certain communications</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-6">
              We use cookies and similar tracking technologies to collect and track information about your use of our 
              services. You can control cookies through your browser settings, but disabling cookies may affect the 
              functionality of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none text-muted-foreground mb-6">
              <li>Email: inquire@resova.ai</li>
              <li>Phone: 386-280-7470</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

