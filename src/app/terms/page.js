import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | TinDev Studios',
  description: 'Terms of Service for TinDev Studios. Read our comprehensive terms and conditions for using our website and services.',
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
                Legal
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-text font-display">
              Terms of Service
            </h1>
            
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl font-body">
              Last Updated: October 2024 | Effective Date: October 2024
            </p>

            <p className="text-base sm:text-lg text-white/70 font-body leading-relaxed">
              These Terms of Service ("Agreement") govern your access to and use of the website, services, and products provided by TinDev Studios, Inc. ("Company," "we," "us," "our"). By accessing and using our website and services, you agree to be bound by all terms, conditions, and notices contained herein.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              1. Agreement to Terms
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              By accessing and using our website, services, and products, you accept and agree to be bound by all terms, conditions, and notices contained in this Agreement, including all policies incorporated by reference. If you do not agree to abide by these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              2. Use License
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Access and view our website and content for personal, non-commercial use</p>
              <p className="text-white/70 font-body">• Use our services in accordance with their intended purpose</p>
              <p className="text-white/70 font-body">• Download content for personal use only (where permitted)</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              You may not:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Modify, copy, or create derivative works from our materials</p>
              <p className="text-white/70 font-body">• Use materials for any commercial purpose or for public display</p>
              <p className="text-white/70 font-body">• Attempt to decompile, reverse engineer, or disassemble any code or software</p>
              <p className="text-white/70 font-body">• Remove any copyright, trademark, or proprietary notices</p>
              <p className="text-white/70 font-body">• Transfer materials to another person or "mirror" materials on any server</p>
              <p className="text-white/70 font-body">• Engage in automated data collection or scraping</p>
              <p className="text-white/70 font-body">• Use our services to develop competing products or services</p>
              <p className="text-white/70 font-body">• Access our services through unauthorized means</p>
              <p className="text-white/70 font-body">• Violate any applicable laws or regulations</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              3. Intellectual Property Rights
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              All content on our website and in our services, including text, graphics, logos, images, code, and software, is the property of TinDev Studios or its content suppliers and is protected by international copyright laws. We retain all rights to our intellectual property.
            </p>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              For custom development projects, ownership of deliverables is transferred to you upon full payment and completion, unless otherwise agreed in writing. You retain rights to your original content and data provided to us.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              4. User Accounts & Responsibilities
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If you create an account with us, you are responsible for:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Providing accurate, current, and complete information</p>
              <p className="text-white/70 font-body">• Maintaining the confidentiality of your password and account information</p>
              <p className="text-white/70 font-body">• Notifying us of any unauthorized use of your account</p>
              <p className="text-white/70 font-body">• All activities that occur under your account</p>
            </div>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              You agree that your account is personal and non-transferable. You may not share your account credentials or allow others to use your account.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              5. Acceptable Use Policy
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              You agree not to use our services in any manner that:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Violates any applicable laws or regulations</p>
              <p className="text-white/70 font-body">• Infringes upon the rights of others</p>
              <p className="text-white/70 font-body">• Contains threats, harassment, or abusive language</p>
              <p className="text-white/70 font-body">• Attempts to gain unauthorized access to our systems</p>
              <p className="text-white/70 font-body">• Interferes with the normal operation of our services</p>
              <p className="text-white/70 font-body">• Introduces viruses, malware, or malicious code</p>
              <p className="text-white/70 font-body">• Engages in phishing, fraud, or deception</p>
              <p className="text-white/70 font-body">• Uses excessive server resources or bandwidth</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              6. Disclaimers
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Merchantability or fitness for a particular purpose</p>
              <p className="text-white/70 font-body">• Non-infringement of third-party rights</p>
              <p className="text-white/70 font-body">• Availability, accuracy, or completeness of content</p>
              <p className="text-white/70 font-body">• Uninterrupted or error-free operation</p>
              <p className="text-white/70 font-body">• Absence of defects or viruses</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              To the extent permitted by law, we disclaim all warranties and conditions. Some jurisdictions do not allow the exclusion of certain warranties, so this limitation may not apply to you.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              7. Limitation of Liability
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TINDEV STUDIOS, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Indirect, incidental, special, or consequential damages</p>
              <p className="text-white/70 font-body">• Lost profits, revenue, data, or business opportunities</p>
              <p className="text-white/70 font-body">• Damages arising from your use of or inability to use our services</p>
              <p className="text-white/70 font-body">• Unauthorized access to or alteration of your data</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              8. Indemnification
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              You agree to indemnify, defend, and hold harmless TinDev Studios and its directors, employees, and agents from any claims, damages, losses, or expenses (including attorney's fees) arising from:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Your use of our services or violation of this Agreement</p>
              <p className="text-white/70 font-body">• Your content or materials provided to us</p>
              <p className="text-white/70 font-body">• Any infringement of third-party rights</p>
              <p className="text-white/70 font-body">• Your violation of applicable laws or regulations</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              9. Payment & Billing
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              For paid services:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• You authorize us to charge the payment method you provide</p>
              <p className="text-white/70 font-body">• Fees and charges are in U.S. dollars unless otherwise specified</p>
              <p className="text-white/70 font-body">• All fees are non-refundable unless stated otherwise</p>
              <p className="text-white/70 font-body">• Recurring charges will continue until you cancel</p>
              <p className="text-white/70 font-body">• We may update pricing with 30 days' notice</p>
              <p className="text-white/70 font-body">• You are responsible for all taxes, except where otherwise required by law</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              10. Termination
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We reserve the right to terminate or suspend your account and access to our services at any time, without notice or liability, for:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Violation of this Agreement</p>
              <p className="text-white/70 font-body">• Unlawful or fraudulent activity</p>
              <p className="text-white/70 font-body">• Breach of payment obligations</p>
              <p className="text-white/70 font-body">• Repeated abuse of our services</p>
              <p className="text-white/70 font-body">• Any reason at our sole discretion</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-4">
              Upon termination, your right to use our services ceases immediately. We may delete your data in accordance with our retention policies.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              11. Third-Party Links & Services
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party services is subject to their terms and policies. We encourage you to review their terms before using their services.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              12. Modifications to Terms
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We reserve the right to modify this Agreement at any time. Changes will be posted on this page with an updated effective date. For material changes, we may provide additional notice (such as email). Your continued use of our services after modifications indicates your acceptance of the updated terms.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              13. Dispute Resolution & Arbitration
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Any dispute arising from this Agreement or your use of our services shall be governed by and construed in accordance with the laws of the jurisdiction where we are located, without regard to its conflicts of law principles.
            </p>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              You agree to attempt to resolve disputes through good faith negotiation before pursuing legal action. If negotiation fails, you agree to submit disputes to binding arbitration or mediation, except for claims involving intellectual property rights or injunctive relief.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              14. General Provisions
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Entire Agreement</h3>
                <p className="text-white/70 font-body">
                  This Agreement, together with our Privacy Policy and Cookie Policy, constitutes the entire agreement between you and us regarding your use of our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Severability</h3>
                <p className="text-white/70 font-body">
                  If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Waiver</h3>
                <p className="text-white/70 font-body">
                  Our failure to enforce any provision of this Agreement shall not constitute a waiver of that provision or any other provision.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Assignment</h3>
                <p className="text-white/70 font-body">
                  You may not assign or transfer your rights or obligations under this Agreement without our consent. We may assign this Agreement at any time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Survival</h3>
                <p className="text-white/70 font-body">
                  Sections regarding Intellectual Property, Disclaimer, Limitation of Liability, Indemnification, and Dispute Resolution shall survive termination of this Agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              15. Contact Us
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-3">
              <p className="text-white font-body">
                <strong>TinDev Studios, Inc.</strong><br/>
                Legal Department<br/>
                Email: legal@tindevstudios.com<br/>
                Response Time: Within 30 days
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/50 font-body text-sm">
              These Terms of Service are effective as of October 2024 and were last updated on October 2024. We reserve the right to modify these terms at any time. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}