import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - TinDev Studios',
  description: 'Our commitment to protecting your privacy and personal data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-charcoal-gray via-black to-gray-900 text-white pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 gradient-text">Privacy Policy</h1>
            <p className="text-white/60 mb-12 font-body text-lg">Last updated: December 15, 2024</p>
            
            <div className="space-y-10 text-white/80 font-body text-lg leading-relaxed">
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Introduction</h2>
                <p className="mb-4">
                  TinDev Studios ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our software applications, including our AI Resume Builder, Habit Tracker, Meeting Summarizer, Social Post Generator, and Skill Tracker (collectively, the "Services").
                </p>
                <p>
                  By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-mint-green">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
                  <li><strong>Profile Data:</strong> Professional information you provide for resume building</li>
                  <li><strong>Communication Data:</strong> Messages you send through our contact forms or support channels</li>
                  <li><strong>Payment Information:</strong> Billing details for subscription services (processed securely through third-party payment processors)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Application Data:</strong> Content you create using our tools (resumes, habit tracking data, meeting notes)</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
                  <li><strong>Analytics Data:</strong> Usage patterns, feature interactions, and performance metrics</li>
                  <li><strong>Cookies and Tracking:</strong> Small data files to enhance your experience and analyze usage</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Service Provision:</strong> To provide, maintain, and improve our software applications</li>
                  <li><strong>AI Enhancement:</strong> To train and improve our AI models for resume optimization and content generation</li>
                  <li><strong>Personalization:</strong> To customize your experience and provide relevant recommendations</li>
                  <li><strong>Communication:</strong> To send service updates, security alerts, and customer support responses</li>
                  <li><strong>Analytics:</strong> To understand usage patterns and improve our products</li>
                  <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Data Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Service Providers:</strong> With trusted third-party providers who assist in operating our services (hosting, payment processing, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  <li><strong>Safety:</strong> To protect the rights, property, or safety of TinDev Studios, our users, or others</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Data Security</h2>
                <p className="mb-4">We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data storage with encryption at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Your Rights and Choices</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Cookie Control:</strong> Manage cookie preferences through your browser settings</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by relevant data protection authorities.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Contact Us</h2>
                <p className="mb-4">For questions about this Privacy Policy or to exercise your rights, contact us:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:support@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">support@tindevstudios.com</a></li>
                  <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">dpo@tindevstudios.com</a></li>
                  <li><strong>Address:</strong> TinDev Studios Data Protection Team</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}