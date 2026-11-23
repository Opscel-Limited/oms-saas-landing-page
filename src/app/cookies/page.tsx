import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails } from '@/data/companyDetails';

export const metadata: Metadata = {
  alternates: { canonical: '/cookies' },
  title: `Cookie Policy | ${siteDetails.siteName}`,
  description: `Cookie Policy for ${siteDetails.siteName}. Learn about how we use cookies and similar technologies.`,
};

const CookiesPage: React.FC = () => {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="23 November 2026"
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device (computer, tablet, or mobile phone)
        when you visit a website. They are widely used to make websites work more efficiently and to
        provide information to website owners.
      </p>
      <p>
        This Cookie Policy explains how {companyDetails.registeredName} (trading as &quot;{companyDetails.tradingName}&quot;)
        uses cookies and similar technologies on our website and services.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>
        Under the Privacy and Electronic Communications Regulations 2003, we may set cookies that are strictly
        necessary to provide a service you have asked for without your consent. All other cookies need your consent,
        and we do not set them until you give it.
      </p>

      <h3>2.1 Our Website (www.opscel.com)</h3>
      <p>
        <strong>Strictly necessary.</strong> Your choice in our cookie banner is saved in your browser&apos;s local
        storage, so that we do not ask again on every page.
      </p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">opscel-cookie-consent (local storage)</td>
            <td className="border border-gray-200 px-4 py-2">Remembers whether you accepted or rejected analytics cookies</td>
            <td className="border border-gray-200 px-4 py-2">12 months, then we ask again</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Analytics (only with your consent).</strong> If you click &quot;Accept analytics&quot;, we load Google
        Analytics, which sets the cookies below to count visits and see how people use our website. If you click
        &quot;Reject&quot;, or make no choice, Google Analytics is not loaded and these cookies are not set.
      </p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">_ga</td>
            <td className="border border-gray-200 px-4 py-2">Google Analytics: distinguishes visitors</td>
            <td className="border border-gray-200 px-4 py-2">2 years</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">_ga_&lt;container-id&gt;</td>
            <td className="border border-gray-200 px-4 py-2">Google Analytics: keeps track of a visit</td>
            <td className="border border-gray-200 px-4 py-2">2 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Embedded videos.</strong> Some help pages include YouTube videos in privacy-enhanced mode. YouTube may
        store data on your device only if you press play. See{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
      </p>

      <h3>2.2 The {companyDetails.tradingName} App (app.opscel.com and portal.opscel.com)</h3>
      <p>The app uses only cookies that are needed for it to work, plus one that you choose to accept:</p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">Cookies beginning stack-</td>
            <td className="border border-gray-200 px-4 py-2">Keep you signed in to your account. Set by Stack Auth, our sign-in provider</td>
            <td className="border border-gray-200 px-4 py-2">Until you sign out or your session expires</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">portal_session</td>
            <td className="border border-gray-200 px-4 py-2">Keeps a customer portal user signed in</td>
            <td className="border border-gray-200 px-4 py-2">30 days</td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">opscel_ref and opscel_vid</td>
            <td className="border border-gray-200 px-4 py-2">Set only if you click &quot;Accept invite&quot; on a referral invitation, to record who invited you</td>
            <td className="border border-gray-200 px-4 py-2">30 days</td>
          </tr>
        </tbody>
      </table>
      <p>
        The app measures page loading speed with Vercel Speed Insights, which does not use cookies. Our error monitoring
        (Sentry) may keep a temporary identifier in your browser&apos;s session storage, which is cleared when you close
        the tab, so that an error report can be linked to the steps that led to it.
      </p>

      <h3>2.3 Digital Fire Logbook (logbook.opscel.com)</h3>
      <p>
        The Digital Fire Logbook site at logbook.opscel.com uses one strictly necessary cookie. You cannot opt out
        of it, because the logbook cannot keep you signed in without it.
      </p>
      <table className="w-full border-collapse border border-gray-200 my-4">
        <thead>
          <tr className="bg-hero-background">
            <th className="border border-gray-200 px-4 py-2 text-left">Cookie Name</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">__Host-lb_s</td>
            <td className="border border-gray-200 px-4 py-2">Keeps a keeper signed in on that device. HttpOnly and Secure</td>
            <td className="border border-gray-200 px-4 py-2">Up to 30 days, renewed while in use</td>
          </tr>
        </tbody>
      </table>
      <p>
        People who open a logbook from its QR sticker get no cookie. There are no analytics or advertising cookies
        on logbook.opscel.com. See the{' '}
        <Link href="/logbook/privacy">Digital Fire Logbook Privacy Notice</Link> for more.
      </p>

      <h3>2.4 Marketing Cookies</h3>
      <p>
        We do not use advertising or marketing cookies on any of our sites. If this changes, we will update this
        policy and ask for your consent first.
      </p>

      <h2>3. Managing Cookies</h2>
      <h3>3.1 Our Cookie Banner</h3>
      <p>
        When you first visit our website, a banner asks whether you accept analytics cookies. &quot;Accept&quot; and
        &quot;Reject&quot; are equally easy to choose. You can change your choice at any time with the &quot;Cookie
        settings&quot; link in our website footer. If you withdraw consent, we delete the Google Analytics cookies and
        stop loading Google Analytics.
      </p>

      <h3>3.2 Browser Settings</h3>
      <p>
        You can also block or delete cookies in your browser settings. Blocking strictly necessary cookies will stop
        sign-in from working.
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>4. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
        or our data practices. We encourage you to periodically review this page for the latest information
        on our use of cookies.
      </p>

      <h2>5. More Information</h2>
      <p>
        For more information about how we process your personal data, please read our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        If you have any questions about our use of cookies, please contact us:
      </p>
      <p>
        {companyDetails.registeredName}<br />
        Email: <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>
      </p>

      <h2>6. About the ICO</h2>
      <p>
        The Information Commissioner&apos;s Office (ICO) is the UK&apos;s independent authority set up to uphold
        information rights. For more information about cookies and your rights, visit{' '}
        <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>.
      </p>
    </LegalPage>
  );
};

export default CookiesPage;
