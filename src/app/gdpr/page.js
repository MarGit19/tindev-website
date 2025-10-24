import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'GDPR Compliance | TinDev Studios',
  description: 'GDPR Compliance information for TinDev Studios. Learn about your rights and how we comply with GDPR regulations.',
};

export default function GDPRCompliance() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20">
              <div className="w-2 h-2 bg-vivid-coral rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
                Legal & Compliance
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-text font-display">
              GDPR Compliance
            </h1>
            
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl font-body">
              Last Updated: October 2024 | Effective Date: October 2024
            </p>

            <p className="text-base sm:text-lg text-white/70 font-body leading-relaxed">
              TinDev Studios is committed to full compliance with the General Data Protection Regulation (GDPR) and other applicable privacy laws. This page explains your rights under GDPR and how we ensure compliance.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              1. About GDPR
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              The General Data Protection Regulation (GDPR) is a comprehensive regulation in European Union law on data protection and privacy that took effect on May 25, 2018. It applies to:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• All individuals (data subjects) in the EU/EEA</p>
              <p className="text-white/70 font-body">• Organizations processing EU/EEA resident data</p>
              <p className="text-white/70 font-body">• Non-EU companies offering services to EU residents</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              GDPR mandates that organizations handle personal data with care, transparency, and respect for individuals' rights.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              2. Your GDPR Rights
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Under GDPR, you have the following rights regarding your personal data:
            </p>
            
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right of Access</h3>
                <p className="text-white/70 font-body">
                  You have the right to access your personal data and receive a copy in a structured, commonly used, machine-readable format (Article 15).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right to Rectification</h3>
                <p className="text-white/70 font-body">
                  You can request correction of inaccurate or incomplete personal data (Article 16).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right to Erasure ("Right to be Forgotten")</h3>
                <p className="text-white/70 font-body">
                  You can request deletion of your personal data under certain circumstances, such as when data is no longer necessary or processing is unlawful (Article 17).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right to Restrict Processing</h3>
                <p className="text-white/70 font-body">
                  You can request that we limit how we process your data while we verify its accuracy or assess your objection (Article 18).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right to Data Portability</h3>
                <p className="text-white/70 font-body">
                  You can receive your personal data in a structured, commonly used format and transmit it to another organization without hindrance (Article 20).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right to Object</h3>
                <p className="text-white/70 font-body">
                  You can object to processing for marketing, profiling, and certain other purposes, including our legitimate interests (Article 21).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Rights Related to Automated Decision-Making</h3>
                <p className="text-white/70 font-body">
                  You have rights regarding decisions made purely by automated means that produce legal or similarly significant effects (Article 22).
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Right to Lodge a Complaint</h3>
                <p className="text-white/70 font-body">
                  You can file a complaint with your local data protection authority if you believe we've violated your GDPR rights.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              3. Legal Basis for Processing
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              GDPR requires that we have a legal basis for processing your personal data. We process data based on:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-2">Consent</h3>
                <p className="text-white/70 font-body">
                  You have explicitly consented to processing (e.g., marketing emails, analytics). You can withdraw consent at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-2">Contract Performance</h3>
                <p className="text-white/70 font-body">
                  Processing is necessary to perform a contract you've entered into with us (e.g., service delivery, payment processing).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-2">Legal Obligation</h3>
                <p className="text-white/70 font-body">
                  We must process data to comply with legal obligations (e.g., tax law, anti-fraud regulations).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-2">Vital Interests</h3>
                <p className="text-white/70 font-body">
                  Processing is necessary to protect your vital interests or those of another person.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-2">Public Task</h3>
                <p className="text-white/70 font-body">
                  Processing is necessary for a task carried out in the public interest or official authority.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-2">Legitimate Interests</h3>
                <p className="text-white/70 font-body">
                  Processing is necessary for our legitimate interests (e.g., fraud prevention, website optimization, customer service) and does not override your rights.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              4. Our Data Protection Officer (DPO)
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              TinDev Studios has appointed a dedicated Data Protection Officer (DPO) to oversee our GDPR compliance and serve as the point of contact for data protection inquiries.
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-3">
              <p className="text-white font-body">
                <strong>Data Protection Officer</strong><br/>
                Email: dpo@tindevstudios.com<br/>
                Mailing Address: TinDev Studios, Inc., Legal Department<br/>
                Response Time: Within 10 business days
              </p>
              
              <p className="text-white/70 font-body text-sm mt-4">
                You can contact our DPO for:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li className="text-white/60 font-body text-sm">Data protection inquiries and concerns</li>
                <li className="text-white/60 font-body text-sm">Exercising your GDPR rights</li>
                <li className="text-white/60 font-body text-sm">Reporting potential data breaches</li>
                <li className="text-white/60 font-body text-sm">Data protection policy clarifications</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              5. Data Processing Agreements (DPA)
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              For customers processing personal data with us, we provide Data Processing Agreements (DPA) that comply with GDPR Article 28. DPAs outline:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Scope of data processing and subjects</p>
              <p className="text-white/70 font-body">• Duration of processing</p>
              <p className="text-white/70 font-body">• Nature and purpose of processing</p>
              <p className="text-white/70 font-body">• Types of personal data and data subjects</p>
              <p className="text-white/70 font-body">• Security measures and data protection responsibilities</p>
              <p className="text-white/70 font-body">• Sub-processor authorization and agreements</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              To request a DPA, contact our DPO at dpo@tindevstudios.com
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              6. International Data Transfers
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If your data is transferred outside the EU/EEA, we ensure appropriate safeguards are in place:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Standard Contractual Clauses (SCCs):</strong> Legal framework approved by the European Commission</p>
              <p className="text-white/70 font-body"><strong>Binding Corporate Rules (BCRs):</strong> Approved policies for transfers within our organization</p>
              <p className="text-white/70 font-body"><strong>Adequacy Decisions:</strong> Relying on formal EU adequacy findings</p>
              <p className="text-white/70 font-body"><strong>Explicit Consent:</strong> Your informed consent to specific transfers</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              We conduct Data Transfer Impact Assessments (TIAs) to ensure your rights are protected when data is transferred internationally.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              7. Data Retention & Deletion
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We follow the data minimization principle and retain personal data only for as long as necessary. Retention periods include:
            </p>
            
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Account Data:</strong> Retained while your account is active + 90 days after deletion</p>
              <p className="text-white/70 font-body"><strong>Transaction Data:</strong> Retained for 7 years for legal/tax requirements</p>
              <p className="text-white/70 font-body"><strong>Support/Communications:</strong> Retained for 3 years for dispute resolution</p>
              <p className="text-white/70 font-body"><strong>Marketing Data:</strong> Retained until you unsubscribe or 2 years of inactivity</p>
              <p className="text-white/70 font-body"><strong>Analytics Data:</strong> Retained for 24-26 months</p>
              <p className="text-white/70 font-body"><strong>Legal Holds:</strong> Data retained if subject to litigation or investigation</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              When you request deletion, we securely erase data within 30 days, unless legal obligations require retention.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              8. Data Breach Notification
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              In the event of a personal data breach, GDPR requires:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Authority Notification:</strong> Notify relevant data protection authorities without undue delay, or within 72 hours if there is risk</p>
              <p className="text-white/70 font-body"><strong>Individual Notification:</strong> Inform affected data subjects without undue delay if there is high risk to their rights</p>
              <p className="text-white/70 font-body"><strong>Documentation:</strong> Maintain records of all breaches for regulatory purposes</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              Our security team monitors for potential breaches 24/7. If a breach affects your data, we will notify you promptly with details about the incident and recommended actions.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              9. Privacy by Design & Default
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We implement privacy by design principles across all our processes:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">• Data minimization: Collect only necessary data</p>
              <p className="text-white/70 font-body">• Purpose limitation: Use data only for stated purposes</p>
              <p className="text-white/70 font-body">• Encryption: Protect data in transit and at rest</p>
              <p className="text-white/70 font-body">• Access controls: Limit data access to authorized personnel</p>
              <p className="text-white/70 font-body">• Regular audits: Conduct privacy impact assessments (DPIAs)</p>
              <p className="text-white/70 font-body">• Transparency: Provide clear privacy information</p>
              <p className="text-white/70 font-body">• Accountability: Demonstrate compliance and maintain records</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              10. Exercising Your Rights
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              To exercise any of your GDPR rights, submit a request to:
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-3">
              <p className="text-white font-body">
                <strong>Email:</strong> privacy@tindevstudios.com<br/>
                <strong>Subject Line:</strong> "[GDPR Right] - [Your Name]"<br/>
                <strong>Response Time:</strong> Within 30 days (45 days for complex requests)
              </p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              Please include:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Your full name and contact information</p>
              <p className="text-white/70 font-body">• Description of the data you're requesting</p>
              <p className="text-white/70 font-body">• Specific right(s) you're exercising</p>
              <p className="text-white/70 font-body">• Any relevant account details or dates</p>
              <p className="text-white/70 font-body">• Copy of ID for verification (for certain requests)</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              We will not charge a fee unless your request is manifestly unfounded or excessive.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              11. Right to Lodge a Complaint
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If you believe we've violated your GDPR rights, you have the right to lodge a complaint with your local data protection authority. However, we encourage you to contact us first so we can address your concerns.
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-3">
              <p className="text-white/70 font-body text-sm">
                <strong>Data Protection Authorities by Country:</strong>
              </p>
              <p className="text-white/60 font-body text-sm">
                • Belgium: https://www.autoriteprotectiondonnees.be<br/>
                • France: https://www.cnil.fr<br/>
                • Germany: https://www.bfdi.bund.de<br/>
                • UK: https://ico.org.uk<br/>
                • EU DPA List: https://edpb.europa.eu/about-edpb/board/members_en
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              12. Contact Us
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              For any GDPR-related questions or concerns:
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-4">
              <div>
                <p className="text-white font-body mb-2"><strong>Data Protection Officer</strong></p>
                <p className="text-white/70 font-body text-sm">dpo@tindevstudios.com</p>
              </div>

              <div>
                <p className="text-white font-body mb-2"><strong>Privacy Team</strong></p>
                <p className="text-white/70 font-body text-sm">privacy@tindevstudios.com</p>
              </div>

              <div>
                <p className="text-white font-body mb-2"><strong>Legal Department</strong></p>
                <p className="text-white/70 font-body text-sm">legal@tindevstudios.com</p>
              </div>

              <p className="text-white/60 font-body text-sm mt-4">
                We aim to respond to all GDPR inquiries within 10 business days.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/50 font-body text-sm">
              This GDPR Compliance document is effective as of October 2024 and was last updated on October 2024. We regularly review and update our GDPR practices to ensure ongoing compliance with regulations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}