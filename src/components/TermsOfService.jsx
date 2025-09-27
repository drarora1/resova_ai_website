import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Content */}
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

            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using Resova AI's services, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
              using or accessing our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-6">
              Resova AI provides AI-powered automation solutions for healthcare operations, including but not limited to 
              scheduling automation, staff training management, and billing optimization. Our services are designed to 
              streamline outpatient healthcare operations and improve operational efficiency.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts and Responsibilities</h2>
            <p className="text-muted-foreground mb-6">
              To access certain features of our services, you may be required to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground mb-6">
              You agree not to use our services for any unlawful purpose or in any way that could damage, disable, 
              overburden, or impair our services. Prohibited activities include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on intellectual property rights</li>
              <li>Transmitting malicious code or conducting security attacks</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using our services to compete with us or develop competing products</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data and Privacy</h2>
            <p className="text-muted-foreground mb-6">
              Our collection and use of your data is governed by our Privacy Policy. By using our services, you consent 
              to the collection and use of your information as described in our Privacy Policy. We are committed to 
              maintaining HIPAA compliance and protecting any protected health information (PHI) in accordance with 
              applicable healthcare regulations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content, features, and functionality of our services, including but not limited to text, graphics, 
              logos, software, and algorithms, are owned by Resova AI and are protected by copyright, trademark, and 
              other intellectual property laws. You may not reproduce, distribute, or create derivative works without 
              our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Availability and Modifications</h2>
            <p className="text-muted-foreground mb-6">
              We strive to maintain high service availability but do not guarantee uninterrupted access to our services. 
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or 
              without notice.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              To the maximum extent permitted by law, Resova AI shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, 
              arising out of or relating to your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground mb-6">
              You agree to indemnify and hold harmless Resova AI from any claims, damages, losses, or expenses arising 
              out of your use of our services, violation of these terms, or infringement of any third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
            <p className="text-muted-foreground mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, 
              including if you breach these Terms of Service. Upon termination, your right to use our services will 
              cease immediately.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, 
              without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by 
              posting the new terms on this page and updating the "Last updated" date. Your continued use of our services 
              after any changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;

