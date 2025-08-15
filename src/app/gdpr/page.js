import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'GDPR Compliance - TinDev Studios',
  description: 'Our commitment to GDPR compliance and data protection.',
};

export default function GDPRCompliance() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-charcoal-gray via-black to-gray-900 text-white pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 gradient-text">GDPR Compliance</h1>
            <p className="text-white/60 mb-12 font-body text-lg">Last updated: December 15, 2024</p>
            
            <div className="space-y-10 text-white/80 font-body text-lg leading-relaxed">
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Our GDPR Commitment</h2>
                <p className="mb-4">
                  TinDev Studios is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR). This page outlines your rights under GDPR and how we ensure compliance across all our AI-powered productivity tools.
                </p>
                <p>
                  As a data controller, we take our responsibilities seriously and have implemented comprehensive measures to protect your privacy and data rights.
                </p>
              </section>
              
              <section className="glass-card rounded-3xl p-8">
                <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Your Rights Under GDPR</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-mint-green">Right to Information (Article 13-14)</h3>
                <p className="mb-4">You have the right to know how we collect and use your personal data. We provide clear information about data processing in our Privacy Policy.</p>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Right of Access (Article 15)</h3>
                <p className="mb-4">You can request access to your personal data and receive information about:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>What personal data we process</li>
                  <li>Why we process it</li>
                  <li>Who we share it with</li>
                  <li>How long we keep it</li>
                  <li>Your rights regarding your data</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Right to Rectification (Article 16)</h3>
                <p className="mb-4">You can correct inaccurate or incomplete personal data. Update your information through your account settings or contact us.</p>

                <h3 className="text-xl font-semibold mb-4 text-mint-green">Right to Erasure (Article 17)</h3>
               <p className="mb-4">Request deletion of your personal data when:</p>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>The data is no longer necessary for the original purpose</li>
                 <li>You withdraw consent and there's no other legal basis</li>
                 <li>You object to processing and there are no overriding legitimate grounds</li>
                 <li>The data was unlawfully processed</li>
                 <li>Deletion is required for legal compliance</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Right to Restrict Processing (Article 18)</h3>
               <p className="mb-4">You can limit how we use your data while we:</p>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>Verify the accuracy of contested data</li>
                 <li>Assess legitimate grounds for processing</li>
                 <li>Process your objection to data use</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Right to Data Portability (Article 20)</h3>
               <p className="mb-4">Export your data in a machine-readable format to transfer to another service provider. Available for data processed based on consent or contract.</p>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Right to Object (Article 21)</h3>
               <p className="mb-4">Object to processing based on legitimate interests, including:</p>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>Direct marketing (absolute right)</li>
                 <li>Profiling for marketing purposes</li>
                 <li>Processing for legitimate interests</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Rights Related to Automated Decision-Making (Article 22)</h3>
               <p className="mb-4">You have rights regarding automated decision-making, including our AI systems used for resume optimization and content generation.</p>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">Legal Basis for Processing</h2>
               <p className="mb-4">We process your personal data based on the following legal grounds:</p>
               
               <h3 className="text-xl font-semibold mb-4 text-mint-green">Consent (Article 6(1)(a))</h3>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>Marketing communications</li>
                 <li>Non-essential cookies</li>
                 <li>Data analytics beyond service provision</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Contract Performance (Article 6(1)(b))</h3>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>Providing our AI-powered tools and services</li>
                 <li>Processing payments and subscriptions</li>
                 <li>Account management and customer support</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Legal Obligation (Article 6(1)(c))</h3>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>Tax and accounting requirements</li>
                 <li>Compliance with court orders</li>
                 <li>Data retention requirements</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Legitimate Interests (Article 6(1)(f))</h3>
               <ul className="list-disc list-inside space-y-2">
                 <li>Security and fraud prevention</li>
                 <li>Service improvement and development</li>
                 <li>Internal analytics and research</li>
               </ul>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Data Protection Measures</h2>
               <p className="mb-4">We implement comprehensive technical and organizational measures:</p>
               
               <h3 className="text-xl font-semibold mb-4 text-mint-green">Technical Safeguards</h3>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                 <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                 <li><strong>Network Security:</strong> Firewalls, intrusion detection, and monitoring</li>
                 <li><strong>Regular Updates:</strong> Security patches and vulnerability assessments</li>
                 <li><strong>Data Minimization:</strong> Collect only necessary data for service provision</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Organizational Measures</h3>
               <ul className="list-disc list-inside space-y-2">
                 <li><strong>Staff Training:</strong> Regular GDPR and data protection training</li>
                 <li><strong>Data Protection Officer:</strong> Dedicated DPO overseeing compliance</li>
                 <li><strong>Privacy by Design:</strong> Data protection built into new features</li>
                 <li><strong>Incident Response:</strong> Procedures for data breach notification</li>
                 <li><strong>Vendor Management:</strong> Due diligence on data processors</li>
               </ul>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">International Data Transfers</h2>
               <p className="mb-4">When transferring data outside the EEA, we ensure adequate protection through:</p>
               <ul className="list-disc list-inside space-y-3">
                 <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate protection levels</li>
                 <li><strong>Standard Contractual Clauses:</strong> EU-approved contractual safeguards</li>
                 <li><strong>Binding Corporate Rules:</strong> Internal data protection standards</li>
                 <li><strong>Certification Schemes:</strong> Recognized data protection certifications</li>
               </ul>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-slate-blue">Data Retention</h2>
               <p className="mb-4">We retain personal data only as long as necessary:</p>
               <ul className="list-disc list-inside space-y-3">
                 <li><strong>Account Data:</strong> Retained while your account is active plus 30 days</li>
                 <li><strong>Usage Analytics:</strong> Aggregated data retained for 26 months</li>
                 <li><strong>Support Communications:</strong> Retained for 3 years</li>
                 <li><strong>Financial Records:</strong> Retained for 7 years (legal requirement)</li>
                 <li><strong>Marketing Consent:</strong> Until consent is withdrawn</li>
               </ul>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-vivid-coral">Exercising Your Rights</h2>
               <p className="mb-4">To exercise your GDPR rights:</p>
               
               <h3 className="text-xl font-semibold mb-4 text-mint-green">Online</h3>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li>Access your account settings for basic data management</li>
                 <li>Use our Data Request Portal for formal requests</li>
                 <li>Download your data through account export features</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Contact Us</h3>
               <ul className="list-disc list-inside space-y-2 mb-6">
                 <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">dpo@tindevstudios.com</a></li>
                 <li><strong>General Support:</strong> <a href="mailto:support@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">support@tindevstudios.com</a></li>
                 <li><strong>Response Time:</strong> We respond to requests within 30 days</li>
               </ul>

               <h3 className="text-xl font-semibold mb-4 text-mint-green">Verification Process</h3>
               <p className="mb-4">To protect your data, we may request identity verification before processing requests. This may include:</p>
               <ul className="list-disc list-inside space-y-2">
                 <li>Confirmation of account details</li>
                 <li>Security questions</li>
                 <li>Multi-factor authentication</li>
               </ul>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-electric-blue">Complaints and Supervisory Authority</h2>
               <p className="mb-4">If you're unsatisfied with our response to your GDPR request, you have the right to lodge a complaint with:</p>
               <ul className="list-disc list-inside space-y-3 mb-6">
                 <li>Your local data protection authority</li>
                 <li>The Irish Data Protection Commission (our lead supervisory authority)</li>
                 <li>Any EU data protection authority where you have your habitual residence</li>
               </ul>
               
               <p>We encourage contacting us first to resolve any concerns directly.</p>
             </section>
             
             <section className="glass-card rounded-3xl p-8">
               <h2 className="text-3xl font-display font-semibold mb-6 text-mint-green">Contact Our Data Protection Team</h2>
               <ul className="space-y-4">
                 <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">dpo@tindevstudios.com</a></li>
                 <li><strong>GDPR Requests:</strong> <a href="mailto:gdpr@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">gdpr@tindevstudios.com</a></li>
                 <li><strong>General Support:</strong> <a href="mailto:support@tindevstudios.com" className="text-mint-green hover:text-white transition-colors duration-300">support@tindevstudios.com</a></li>
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