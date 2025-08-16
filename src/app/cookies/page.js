import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy - TinDev Studios',
  description: 'How we use cookies and similar technologies.',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-charcoal-gray via-black to-gray-900 text-white pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 gradient-text">Cookie Policy</h1>
            <p className="text-white/60 mb-12 font-body text-lg">Last updated: December 15, 2024</p>
            
            <div className="space-y-10 text-white/80 font-body text-lg leading-relaxed">
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">What Are Cookies</h2>
                <p className="mb-4">
                  Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and improving our Services.
                </p>
                <p>
                  We use cookies and similar technologies (web beacons, pixels, local storage) to enhance functionality and analyze how our AI-powered tools are used.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-mint-green">Essential Cookies</h3>
                <p className="mb-4">Required for our Services to function properly:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Authentication:</strong> Keep you logged in to your account</li>
                  <li><strong>Security:</strong> Protect against fraud and security threats</li>
                  <li><strong>Load Balancing:</strong> Distribute traffic across our servers</li>
                  <li><strong>Session Management:</strong> Maintain your application state</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Performance Cookies</h3>
                <p className="mb-4">Help us understand how our Services are used:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Analytics:</strong> Google Analytics to measure usage patterns</li>
                  <li><strong>Error Tracking:</strong> Identify and fix technical issues</li>
                  <li><strong>A/B Testing:</strong> Test new features and improvements</li>
                  <li><strong>Performance Monitoring:</strong> Ensure optimal loading speeds</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Functional Cookies</h3>
                <p className="mb-4">Enhance your experience with our AI tools:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Preferences:</strong> Remember your settings and customizations</li>
                  <li><strong>Language:</strong> Display content in your preferred language</li>
                  <li><strong>Theme:</strong> Save your dark/light mode preference</li>
                  <li><strong>Auto-save:</strong> Preserve your work in our applications</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Marketing Cookies</h3>
                <p className="mb-4">With your consent, help us provide relevant content:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Advertising:</strong> Show relevant ads on external platforms</li>
                  <li><strong>Retargeting:</strong> Display personalized content</li>
                  <li><strong>Conversion Tracking:</strong> Measure marketing effectiveness</li>
                  <li><strong>Social Media:</strong> Enable sharing on social platforms</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">Third-Party Cookies</h2>
                <p className="mb-4">We work with trusted partners who may set cookies:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Google Analytics:</strong> Website analytics and user behavior analysis</li>
                  <li><strong>Stripe:</strong> Payment processing for subscriptions</li>
                  <li><strong>Intercom:</strong> Customer support and messaging</li>
                  <li><strong>Hotjar:</strong> User experience analysis and heatmaps</li>
                  <li><strong>Facebook Pixel:</strong> Advertising and conversion tracking</li>
                  <li><strong>LinkedIn Insight:</strong> Professional networking analytics</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Managing Your Cookie Preferences</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-mint-green">Browser Settings</h3>
                <p className="mb-4">You can control cookies through your browser settings:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
                  <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and Website Data</li>
                  <li><strong>Edge:</strong> Settings &gt; Cookies and Site Permissions</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Cookie Consent Manager</h3>
                <p className="mb-4">
                  When you first visit our website, you&rsquo;ll see a cookie consent banner where you can:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Accept all cookies for the best experience</li>
                  <li>Customize your preferences by category</li>
                  <li>Reject non-essential cookies</li>
                  <li>Change your preferences anytime in your account settings</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Impact of Disabling Cookies</h2>
                <p className="mb-4">Disabling certain cookies may affect functionality:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Essential Cookies:</strong> Cannot be disabled; Services may not function properly</li>
                  <li><strong>Performance Cookies:</strong> We can&rsquo;t improve Services based on usage data</li>
                  <li><strong>Functional Cookies:</strong> Loss of personalization and saved preferences</li>
                  <li><strong>Marketing Cookies:</strong> Less relevant advertising and content</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">Data Retention</h2>
                <p className="mb-4">Cookie retention periods vary by type and purpose:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a specified period (typically 1-24 months)</li>
                  <li><strong>Analytics Cookies:</strong> Retained for up to 26 months</li>
                  <li><strong>Marketing Cookies:</strong> Retained for up to 12 months</li>
                </ul>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Contact Us</h2>
                <p className="mb-4">For questions about our cookie practices:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:support@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">support@tindevstudios.com</a></li>
                  <li><strong>Data Protection:</strong> <a href="mailto:dpo@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">dpo@tindevstudios.com</a></li>
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