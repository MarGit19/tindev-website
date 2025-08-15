import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - TinDev Studios',
  description: 'Terms and conditions for using TinDev Studios services.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-charcoal-gray via-black to-gray-900 text-white pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 gradient-text">Terms of Service</h1>
            <p className="text-white/60 mb-12 font-body text-lg">Last updated: December 15, 2024</p>
            
            <div className="space-y-10 text-white/80 font-body text-lg leading-relaxed">
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Agreement to Terms</h2>
                <p className="mb-4">
                  These Terms of Service ("Terms") govern your use of TinDev Studios' software applications and services, including our AI Resume Builder, Habit Tracker, Meeting Summarizer, Social Post Generator, and Skill Tracker (the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our Services.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Description of Services</h2>
                <p className="mb-4">TinDev Studios provides web-based software applications designed to enhance productivity:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>AI Resume Builder:</strong> Create professional, ATS-optimized resumes with AI assistance</li>
                  <li><strong>Habit Tracker:</strong> Monitor and improve daily habits with progress tracking</li>
                  <li><strong>Meeting Summarizer:</strong> Generate AI-powered summaries of meetings and documents</li>
                  <li><strong>Social Post Generator:</strong> Create engaging social media content with AI</li>
                  <li><strong>Skill Tracker:</strong> Track professional development and skill progression</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">User Accounts and Registration</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                  <li>You must be at least 16 years old to use our Services</li>
                  <li>One person or entity may maintain only one account</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Acceptable Use Policy</h2>
                <p className="mb-4">You agree not to use our Services to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Upload malicious code or attempt to breach security</li>
                  <li>Create fake or misleading resumes or professional profiles</li>
                  <li>Spam, harass, or abuse other users or our support team</li>
                  <li>Reverse engineer or attempt to extract our AI models</li>
                  <li>Use our Services for competitive analysis or to build competing products</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Subscription and Payment Terms</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Free Tier:</strong> Basic features available at no cost with usage limitations</li>
                  <li><strong>Premium Subscriptions:</strong> Advanced features available through monthly or annual plans</li>
                  <li><strong>Billing:</strong> Subscriptions automatically renew unless cancelled</li>
                  <li><strong>Refunds:</strong> Available within 30 days of purchase for annual plans</li>
                  <li><strong>Price Changes:</strong> We reserve the right to modify pricing with 30 days' notice</li>
                  <li><strong>Taxes:</strong> You are responsible for applicable taxes in your jurisdiction</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Intellectual Property Rights</h2>
                <p className="mb-4"><strong>Our Rights:</strong></p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>TinDev Studios owns all rights to the Services, including software, AI models, and algorithms</li>
                  <li>Our trademarks, logos, and branding are protected intellectual property</li>
                  <li>You receive a limited, non-exclusive license to use our Services</li>
                </ul>
                
                <p className="mb-4"><strong>Your Rights:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You retain ownership of content you create using our Services</li>
                  <li>You grant us a license to process your content to provide our Services</li>
                  <li>You can export and delete your content at any time</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TINDEV STUDIOS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE.
                </p>
                <p>
                  Our total liability for any claims related to the Services shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Termination</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li>You may terminate your account at any time through your account settings</li>
                  <li>We may suspend or terminate accounts that violate these Terms</li>
                  <li>Upon termination, your right to use the Services ceases immediately</li>
                  <li>You may export your data for 30 days after account termination</li>
                  <li>Provisions regarding intellectual property and limitation of liability survive termination</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Governing Law and Disputes</h2>
                <p className="mb-4">
                  These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through binding arbitration, except for intellectual property claims which may be brought in court.
                </p>
                <p>
                  Before initiating formal proceedings, we encourage contacting our support team to resolve issues amicably.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Contact Information</h2>
                <p className="mb-4">For questions about these Terms, contact us:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:support@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">support@tindevstudios.com</a></li>
                  <li><strong>Legal:</strong> <a href="mailto:legal@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">legal@tindevstudios.com</a></li>
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