import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy | TinDev Studios',
  description: 'Cookie Policy for TinDev Studios. Learn how we use cookies and similar tracking technologies on our website.',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20">
              <div className="w-2 h-2 bg-slate-blue rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
                Legal
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-text font-display">
              Cookie Policy
            </h1>
            
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl font-body">
              Last Updated: October 2024 | Effective Date: October 2024
            </p>

            <p className="text-base sm:text-lg text-white/70 font-body leading-relaxed">
              This Cookie Policy explains how TinDev Studios, Inc. ("Company," "we," "us," "our") uses cookies and similar tracking technologies on our website and services. Understanding what cookies we use helps you make informed choices about your privacy.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              1. What Are Cookies?
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They serve various purposes such as remembering your preferences, maintaining your session, and tracking your behavior for analytics and marketing purposes.
            </p>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              Similar technologies include:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body"><strong>Web Beacons:</strong> Small invisible images used to track page visits and user activity</p>
              <p className="text-white/70 font-body"><strong>Pixels:</strong> Similar to beacons, used to track conversions and user interactions</p>
              <p className="text-white/70 font-body"><strong>Local Storage:</strong> Data stored locally on your device for enhanced functionality</p>
              <p className="text-white/70 font-body"><strong>Session Storage:</strong> Temporary data stored during your browsing session</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              2. Types of Cookies We Use
            </h2>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Essential Cookies</h3>
                <p className="text-white/70 font-body mb-3">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and secure access to restricted areas.
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-white/60 font-body text-sm"><strong>Examples:</strong> Session ID, CSRF tokens, authentication tokens</p>
                  <p className="text-white/60 font-body text-sm"><strong>Consent Required:</strong> No</p>
                  <p className="text-white/60 font-body text-sm"><strong>Duration:</strong> Session (deleted when you close your browser)</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-electric-blue font-body mb-3">Performance & Analytics Cookies</h3>
                <p className="text-white/70 font-body mb-3">
                  These cookies help us understand how you use our website and improve your experience. They collect information about page visits, time spent, and interaction patterns.
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-white/60 font-body text-sm"><strong>Examples:</strong> Google Analytics (_ga, _gid), Hotjar tracking</p>
                  <p className="text-white/60 font-body text-sm"><strong>Consent Required:</strong> Yes (when not essential for functionality)</p>
                  <p className="text-white/60 font-body text-sm"><strong>Duration:</strong> 6-24 months depending on provider</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-slate-blue font-body mb-3">Functional Cookies</h3>
                <p className="text-white/70 font-body mb-3">
                  These cookies remember your preferences and settings to enhance your experience. They allow us to personalize content and features based on your needs.
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-white/60 font-body text-sm"><strong>Examples:</strong> Theme preference (dark/light), language selection, form data</p>
                  <p className="text-white/60 font-body text-sm"><strong>Consent Required:</strong> Yes (in some jurisdictions)</p>
                  <p className="text-white/60 font-body text-sm"><strong>Duration:</strong> 1-12 months</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-vivid-coral font-body mb-3">Marketing & Advertising Cookies</h3>
                <p className="text-white/70 font-body mb-3">
                  These cookies track your behavior to display personalized advertisements and measure marketing campaign effectiveness.
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-white/60 font-body text-sm"><strong>Examples:</strong> Facebook Pixel, Google Ads, LinkedIn Insight Tag</p>
                  <p className="text-white/60 font-body text-sm"><strong>Consent Required:</strong> Yes</p>
                  <p className="text-white/60 font-body text-sm"><strong>Duration:</strong> 3-24 months</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-mint-green font-body mb-3">Third-Party Cookies</h3>
                <p className="text-white/70 font-body mb-3">
                  Cookies set by third parties for analytics, advertising, and other purposes. These are not under our direct control.
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-white/60 font-body text-sm"><strong>Providers:</strong> Google, Meta, LinkedIn, Hotjar, Intercom</p>
                  <p className="text-white/60 font-body text-sm"><strong>Consent Required:</strong> Yes</p>
                  <p className="text-white/60 font-body text-sm"><strong>Duration:</strong> Varies by provider</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              3. How We Use Cookies
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We use cookies and similar technologies for:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">• <strong>Site Functionality:</strong> Maintaining sessions, user authentication, and form data</p>
              <p className="text-white/70 font-body">• <strong>Preference Management:</strong> Remembering your settings and choices</p>
              <p className="text-white/70 font-body">• <strong>Analytics:</strong> Understanding how visitors use our website and where they come from</p>
              <p className="text-white/70 font-body">• <strong>Performance Monitoring:</strong> Identifying errors and performance issues</p>
              <p className="text-white/70 font-body">• <strong>Marketing:</strong> Delivering targeted advertisements and measuring campaign effectiveness</p>
              <p className="text-white/70 font-body">• <strong>User Engagement:</strong> Tracking interactions with content and features</p>
              <p className="text-white/70 font-body">• <strong>Security:</strong> Detecting and preventing fraud and unauthorized access</p>
              <p className="text-white/70 font-body">• <strong>Customer Support:</strong> Personalizing support interactions</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              4. Cookie Consent & Management
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              When you first visit our website, you will see a cookie consent banner. You can:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body"><strong>Accept All:</strong> Allow all cookies, including marketing and analytics</p>
              <p className="text-white/70 font-body"><strong>Reject All:</strong> Decline optional cookies (essential cookies will still be used)</p>
              <p className="text-white/70 font-body"><strong>Customize:</strong> Choose which specific types of cookies to allow</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              You can change your cookie preferences at any time by:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">1. Clicking the cookie preference link at the bottom of our website</p>
              <p className="text-white/70 font-body">2. Adjusting your browser's cookie settings</p>
              <p className="text-white/70 font-body">3. Contacting us for assistance</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              5. Browser Cookie Controls
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <div className="space-y-3 ml-4">
              <p className="text-white/70 font-body">• <strong>Accept all cookies</strong> automatically</p>
              <p className="text-white/70 font-body">• <strong>Accept only essential cookies</strong></p>
              <p className="text-white/70 font-body">• <strong>Accept or reject cookies on a per-site basis</strong></p>
              <p className="text-white/70 font-body">• <strong>Delete existing cookies</strong></p>
              <p className="text-white/70 font-body">• <strong>Enable private/incognito browsing</strong> (prevents cookies from being saved)</p>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              For instructions on controlling cookies in your browser, visit:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-white/70 font-body">• Chrome: https://support.google.com/chrome/answer/95647</p>
              <p className="text-white/70 font-body">• Firefox: https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer</p>
              <p className="text-white/70 font-body">• Safari: https://support.apple.com/en-us/HT201265</p>
              <p className="text-white/70 font-body">• Edge: https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge</p>
            </div>

            <div className="glass-card rounded-xl p-6 border border-yellow-600/30 bg-yellow-600/5 mt-6">
              <p className="text-white/70 font-body text-sm">
                <strong>Note:</strong> Disabling cookies may affect the functionality of our website. Some features may not work properly without essential cookies.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              6. Do Not Track (DNT)
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature. While we respect your privacy preferences, the DNT standard is not universally supported or implemented. Our use of cookies is not affected by DNT signals, but we still honor cookie preferences you set through our banner.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              7. Our Third-Party Partners
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We work with the following third parties who may use cookies:
            </p>
            
            <div className="space-y-4 ml-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Analytics</h3>
                <p className="text-white/70 font-body text-sm">Google Analytics, Hotjar, Mixpanel</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Advertising</h3>
                <p className="text-white/70 font-body text-sm">Google Ads, Meta Pixel, LinkedIn Ads, HubSpot</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Customer Support</h3>
                <p className="text-white/70 font-body text-sm">Intercom, Zendesk</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mint-green font-body">Payment Processing</h3>
                <p className="text-white/70 font-body text-sm">Stripe, PayPal</p>
              </div>
            </div>

            <p className="text-white/75 font-body leading-relaxed mt-6">
              These third parties have their own privacy policies governing their use of cookies. We are not responsible for their practices.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              8. Opt-Out Options
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              You can opt out of specific types of tracking:
            </p>
            
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Google Analytics</h3>
                <p className="text-white/70 font-body text-sm">Install the Google Analytics Opt-Out Browser Add-on</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Facebook/Meta Tracking</h3>
                <p className="text-white/70 font-body text-sm">Opt out through your Facebook Ad Preferences</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Behavioral Advertising</h3>
                <p className="text-white/70 font-body text-sm">Visit the Digital Advertising Alliance at optout.aboutads.info</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-mint-green font-body mb-2">Email Marketing</h3>
                <p className="text-white/70 font-body text-sm">Click "Unsubscribe" in marketing emails or adjust preferences in your account</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              9. International Considerations
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              <strong>GDPR (EU/UK):</strong> We obtain explicit consent for non-essential cookies before placing them on your device.
            </p>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              <strong>CCPA (California):</strong> California residents have the right to opt out of the "sale" or "sharing" of their personal information.
            </p>
            <p className="text-white/75 font-body leading-relaxed mt-4">
              <strong>ePrivacy Directive (EU):</strong> We comply with electronic privacy regulations regarding cookie consent.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              10. Changes to This Policy
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              We may update this Cookie Policy periodically. Changes will be posted on this page with an updated effective date. Significant changes will be communicated via email or prominent notice on our website.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-display">
              11. Contact Us
            </h2>
            <p className="text-white/75 font-body leading-relaxed">
              If you have questions about our use of cookies, please contact us:
            </p>
            
            <div className="glass-card rounded-xl p-6 border border-white/10 mt-6 space-y-3">
              <p className="text-white font-body">
                <strong>TinDev Studios, Inc.</strong><br/>
                Privacy Department<br/>
                Email: privacy@tindevstudios.com<br/>
                Response Time: Within 30 days
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/50 font-body text-sm">
              This Cookie Policy is effective as of October 2024 and was last updated on October 2024. We reserve the right to modify this policy to reflect changes in our cookie practices or applicable laws.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}