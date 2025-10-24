import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | TinDev Studios',
  description: 'Privacy policy for TinDev Studios. Learn how we collect, use, disclose, and protect your personal data in compliance with GDPR, CCPA, and other privacy regulations.',
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20">
              <div className="w-2 h-2 bg-mint-green rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
                Legal
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-text font-display">
              Privacy Policy
            </h1>
            
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl font-body">
              Last Updated: October 2024 | Effective Date: October 2024
            </p>

            <p className="text-base sm:text-lg text-white/70 font-body leading-relaxed">
              At TinDev Studios, Inc. ("Company," "we," "us," "our"), we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information in accordance with GDPR, CCPA, and other applicable privacy laws.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="glass-card rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 font-display">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '1', title: 'Information We Collect' },
                { num: '2', title: 'How We Collect Information' },
                { num: '3', title: 'How We Use Your Information' },
                { num: '4', title: 'Legal Basis for Processing' },
                { num: '5', title: 'Information Sharing & Disclosure' },
                { num: '6', title: 'Data Retention' },
                { num: '7', title: 'Your Privacy Rights' },
                { num: '8', title: 'Security Measures' },
                { num: '9', title: 'International Transfers' },
                { num: '10', title: 'Children\'s Privacy' },
                { num: '11', title: 'Third-Party Links' },
                { num: '12', title: 'Contact Us' },
              ].map((item) => (
                <a
                  key={item.num}
                  href={`#section-${item.num}`}
                  className="text-mint-green hover:text-electric-blue transition-colors font-body text-sm sm:text-base"
                >
                  {item.num}. {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section 1 */}
          <section id="section-1" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              1. Information We Collect
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We collect information in several ways:
            </p>
            
            <div className="space-y-6 ml-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Personal Identification Information</h3>
                <p className="text-white/70 font-body">Name, email address, phone number, mailing address, job title, company name, and industry</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Professional Information</h3>
                <p className="text-white/70 font-body">Project details, budget information, timeline preferences, technical requirements, and business goals</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Account Information</h3>
                <p className="text-white/70 font-body">Username, password, billing address, payment method information (processed securely through third-party providers)</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Usage Data</h3>
                <p className="text-white/70 font-body">Pages visited, time spent on pages, links clicked, referring URL, device type, browser type, operating system, IP address, and geolocation</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Communication Data</h3>
                <p className="text-white/70 font-body">Emails, messages, support tickets, consultation notes, and feedback you provide</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Cookie & Tracking Data</h3>
                <p className="text-white/70 font-body">Cookies, pixels, beacons, and similar technologies as detailed in our Cookie Policy</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              2. How We Collect Information
            </h2>
            <div className="space-y-4 ml-4">
              <p className="text-white/70 font-body"><strong>Directly from you:</strong> Forms, contact submissions, consultations, and account registration</p>
              <p className="text-white/70 font-body"><strong>Automatically:</strong> Through cookies, web beacons, and log files when you browse our website</p>
              <p className="text-white/70 font-body"><strong>From third parties:</strong> Analytics providers, advertising networks, and business partners</p>
              <p className="text-white/70 font-body"><strong>Inferred data:</strong> We may infer information about your preferences and interests based on your interactions</p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              3. How We Use Your Information
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">• Provide, maintain, and improve our services and products</p>
              <p className="text-white/70 font-body">• Respond to your inquiries, requests, and support tickets</p>
              <p className="text-white/70 font-body">• Process transactions and send related information</p>
              <p className="text-white/70 font-body">• Send marketing communications (with your consent)</p>
              <p className="text-white/70 font-body">• Analyze usage patterns to improve user experience</p>
              <p className="text-white/70 font-body">• Detect, investigate, and prevent fraudulent transactions and other illegal activities</p>
              <p className="text-white/70 font-body">• Comply with legal obligations and enforce our agreements</p>
              <p className="text-white/70 font-body">• Personalize content and recommendations</p>
              <p className="text-white/70 font-body">• Monitor and analyze trends and performance metrics</p>
              <p className="text-white/70 font-body">• Establish, exercise, or defend legal claims</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              4. Legal Basis for Processing
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Under GDPR and other privacy laws, we process your data based on the following legal bases:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Consent:</strong> Where you have explicitly consented to processing</p>
              <p className="text-white/70 font-body"><strong>Contract Performance:</strong> Processing necessary to provide services you've requested</p>
              <p className="text-white/70 font-body"><strong>Legal Obligation:</strong> Where required by law or regulation</p>
              <p className="text-white/70 font-body"><strong>Legitimate Interests:</strong> Our business interests in providing services, fraud prevention, and security</p>
              <p className="text-white/70 font-body"><strong>Vital Interests:</strong> Protection of your or others' vital interests</p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              5. Information Sharing & Disclosure
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We do not sell your personal information. We may share information with:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Service Providers:</strong> Third parties who perform services on our behalf (hosting, analytics, payment processing)</p>
              <p className="text-white/70 font-body"><strong>Business Partners:</strong> Partners for co-marketing or service integration</p>
              <p className="text-white/70 font-body"><strong>Legal Compliance:</strong> When required by law or legal process</p>
              <p className="text-white/70 font-body"><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</p>
              <p className="text-white/70 font-body"><strong>With Your Consent:</strong> When you explicitly authorize us to share information</p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              6. Data Retention
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Retention periods vary by data type:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Account Data:</strong> Retained while your account is active and for 90 days after deletion</p>
              <p className="text-white/70 font-body"><strong>Transaction Data:</strong> Retained for 7 years for accounting purposes</p>
              <p className="text-white/70 font-body"><strong>Marketing Data:</strong> Retained until you unsubscribe or 2 years of inactivity</p>
              <p className="text-white/70 font-body"><strong>Support Data:</strong> Retained for 3 years for dispute resolution and records</p>
              <p className="text-white/70 font-body"><strong>Analytics Data:</strong> Retained for 24-26 months</p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              7. Your Privacy Rights
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <div className="space-y-4 ml-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-electric-blue font-body">GDPR Rights (EU/UK)</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-white/70 font-body">• <strong>Right of Access:</strong> Request a copy of your personal data</p>
                  <p className="text-white/70 font-body">• <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</p>
                  <p className="text-white/70 font-body">• <strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</p>
                  <p className="text-white/70 font-body">• <strong>Right to Restrict Processing:</strong> Limit how we process your data</p>
                  <p className="text-white/70 font-body">• <strong>Right to Data Portability:</strong> Receive your data in a portable, machine-readable format</p>
                  <p className="text-white/70 font-body">• <strong>Right to Object:</strong> Object to processing for marketing or other purposes</p>
                  <p className="text-white/70 font-body">• <strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-electric-blue font-body">CCPA Rights (California)</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-white/70 font-body">• <strong>Right to Know:</strong> Know what personal information is collected, used, and shared</p>
                  <p className="text-white/70 font-body">• <strong>Right to Delete:</strong> Request deletion of collected personal information</p>
                  <p className="text-white/70 font-body">• <strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information</p>
                  <p className="text-white/70 font-body">• <strong>Right to Correct:</strong> Correct inaccurate personal information</p>
                  <p className="text-white/70 font-body">• <strong>Right to Non-Discrimination:</strong> Not face discrimination for exercising CCPA rights</p>
                </div>
              </div>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              To exercise any of these rights, contact us at privacy@tindevstudios.com with "Privacy Request" in the subject line. We will respond within 30 days (45 days for complex requests). You have the right to appeal our decision.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              8. Security Measures
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We implement comprehensive technical, administrative, and physical security measures to protect your information:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">• SSL/TLS encryption for data in transit</p>
              <p className="text-white/70 font-body">• AES-256 encryption for data at rest</p>
              <p className="text-white/70 font-body">• Multi-factor authentication for sensitive accounts</p>
              <p className="text-white/70 font-body">• Regular security audits and penetration testing</p>
              <p className="text-white/70 font-body">• Employee access controls and confidentiality agreements</p>
              <p className="text-white/70 font-body">• Data minimization and purpose limitation practices</p>
              <p className="text-white/70 font-body">• Incident response and breach notification procedures</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              9. International Data Transfers
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If you are located outside the United States, your information may be transferred to, stored in, and processed in the United States or other countries. These countries may not have data protection laws equivalent to your home country.
            </p>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              When we transfer data internationally, we implement appropriate safeguards including:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">• Standard Contractual Clauses (SCCs)</p>
              <p className="text-white/70 font-body">• Binding Corporate Rules</p>
              <p className="text-white/70 font-body">• Your explicit consent</p>
              <p className="text-white/70 font-body">• Adequacy decisions by relevant authorities</p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              10. Children's Privacy
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Our services are not directed to children under 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children under 13. If we discover that a child has provided us with personal information, we will promptly delete such information and terminate the child's account.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              11. Third-Party Links
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Our website may contain links to third-party websites and services that are not operated by us. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              12. Contact Us
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about our privacy practices, please contact us:
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-3">
              <p className="text-white font-body">
                <strong>TinDev Studios, Inc.</strong><br/>
                Privacy Department<br/>
                Email: privacy@tindevstudios.com<br/>
                Response Time: Within 30 days
              </p>
              
              <p className="text-white/70 font-body text-sm">
                For GDPR inquiries, you may also contact our Data Protection Officer (DPO) at dpo@tindevstudios.com
              </p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              If you are not satisfied with our response to your privacy concerns, you have the right to lodge a complaint with your local data protection authority (for EU/UK residents) or the California Attorney General (for California residents).
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/50 font-body text-sm">
              This Privacy Policy is effective as of October 2024 and was last updated on October 2024. We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}