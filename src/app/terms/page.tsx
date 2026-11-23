import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  alternates: { canonical: '/terms' },
  title: `Terms of Service | ${siteDetails.siteName}`,
  description: `Terms of Service for ${siteDetails.siteName}. Read our terms and conditions for using our services.`,
};

const TermsPage: React.FC = () => {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="23 November 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services provided by{' '}
        {companyDetails.registeredName} (trading as &quot;{companyDetails.tradingName}&quot;), a company registered
        in England and Wales under company number {companyDetails.companiesHouseNumber}, with its registered
        office at {getFormattedRegisteredAddress()}.
      </p>
      <p>
        By accessing or using our services, you agree to be bound by these Terms. If you do not agree
        to these Terms, you must not use our services.
      </p>
      <p>
        <strong>Business use only.</strong> Our services are provided for business use. By using them, you confirm
        that you are acting for the purposes of your trade, business or profession, and not as a consumer.
      </p>
      <p>
        <strong>Related Agreement:</strong> These Terms should be read in conjunction with our{' '}
        <Link href="/eula" className="text-secondary hover:underline">End User License Agreement (EULA)</Link>,
        which sets out the specific software licensing terms, AI features, third-party integrations,
        and limitation of liability provisions that apply to your use of the Opscel platform. In the
        event of any conflict, the{' '}
        <Link href="/dpa" className="text-secondary hover:underline">Data Processing Addendum</Link> prevails on the
        processing of personal data, the EULA prevails on software licensing and liability, and otherwise these
        Terms prevail.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>&quot;Services&quot;</strong> means the {companyDetails.tradingName} operations management platform, including our website, web application, mobile applications, and any related services.</li>
        <li><strong>&quot;User&quot;</strong>, &quot;you&quot;, &quot;your&quot; means the individual or organisation accessing our Services.</li>
        <li><strong>&quot;Account&quot;</strong> means your registered account with {companyDetails.tradingName}.</li>
        <li><strong>&quot;Content&quot;</strong> means any data, text, images, documents, or other materials uploaded to or created within the Services.</li>
        <li><strong>&quot;Subscription&quot;</strong> means your paid access to our Services.</li>
      </ul>

      <h2>3. Account Registration</h2>
      <h3>3.1 Eligibility</h3>
      <p>
        To use our Services, you must be at least 18 years old and have the legal authority to enter into
        these Terms. If you are registering on behalf of an organisation, you represent that you have the
        authority to bind that organisation to these Terms.
      </p>

      <h3>3.2 Account Security</h3>
      <p>You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Notifying us immediately of any unauthorised access</li>
        <li>Ensuring your account information is accurate and up-to-date</li>
      </ul>

      <h2>4. Use of Services</h2>
      <h3>4.1 Permitted Use</h3>
      <p>
        You may use our Services for legitimate business purposes in accordance with these Terms.
        This includes managing jobs, creating documentation, scheduling engineers, and generating
        compliance certificates.
      </p>

      <h3>4.2 Prohibited Use</h3>
      <p>You must not:</p>
      <ul>
        <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
        <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts</li>
        <li>Transmit any viruses, malware, or harmful code</li>
        <li>Interfere with or disrupt the integrity or performance of the Services</li>
        <li>Reverse engineer, decompile, or attempt to extract the source code of the Services</li>
        <li>Use automated systems (bots, scrapers) without our written permission</li>
        <li>Resell or redistribute the Services without authorisation</li>
        <li>Use the Services to store or transmit illegal content</li>
      </ul>

      <h2>5. Subscriptions and Payment</h2>
      <h3>5.1 Subscription Plans</h3>
      <p>
        Our Services are provided on a subscription basis. Details of available plans, features, and
        pricing are available on our website. We reserve the right to modify our pricing with reasonable
        notice.
      </p>

      <h3>5.2 Payment Terms</h3>
      <ul>
        <li>Subscriptions are billed in advance on a monthly or annual basis</li>
        <li>All fees are quoted in British Pounds (GBP) and are exclusive of VAT unless stated otherwise</li>
        <li>Payment is due upon invoice</li>
        <li>We accept payment by credit/debit card and direct debit</li>
      </ul>

      <h3>5.3 Refunds</h3>
      <p>
        Refunds are governed by section 3.4 of the{' '}
        <Link href="/eula" className="text-secondary hover:underline">EULA</Link>.
      </p>

      <h2>6. Your Content</h2>
      <h3>6.1 Ownership</h3>
      <p>
        You retain ownership of all Content you upload to or create within the Services. We do not claim
        any ownership rights over your Content.
      </p>

      <h3>6.2 Licence to Us</h3>
      <p>
        By using our Services, you grant us a limited licence to host, store, backup, and display your
        Content solely for the purpose of providing the Services to you. This licence terminates when
        you delete your Content or close your account.
      </p>

      <h3>6.3 Your Responsibilities</h3>
      <p>You are solely responsible for:</p>
      <ul>
        <li>The accuracy and legality of your Content</li>
        <li>Ensuring you have the right to upload and use your Content</li>
        <li>Maintaining backups of your critical data</li>
        <li>Complying with industry regulations regarding documentation and certificates</li>
      </ul>

      <h3>6.4 Personal Data</h3>
      <p>
        Where your Content includes personal data, you are the controller of it and we process it on your behalf as
        your processor. Our{' '}
        <Link href="/dpa" className="text-secondary hover:underline">Data Processing Addendum</Link> forms part of these
        Terms and sets out how we do so. Our{' '}
        <Link href="/privacy" className="text-secondary hover:underline">Privacy Policy</Link> explains how we use
        personal data for our own purposes, such as managing your account.
      </p>

      <h2>7. AI Features</h2>
      <p>
        Our Services include AI-powered features for document analysis, data extraction, and intelligent
        suggestions. You acknowledge that:
      </p>
      <ul>
        <li>AI-generated outputs should be reviewed for accuracy before use</li>
        <li>AI features are provided as tools to assist, not replace, professional judgement</li>
        <li>You remain responsible for the accuracy of all certificates and compliance documentation</li>
        <li>We continuously improve our AI, but do not guarantee 100% accuracy</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        The Services, including all software, designs, text, graphics, and other materials, are owned by
        or licensed to {companyDetails.registeredName} and are protected by copyright, trademark, and other
        intellectual property laws. You may not copy, modify, or distribute any part of our Services
        without our written consent.
      </p>

      <h2>9. Third-Party Services</h2>
      <p>
        Our Services may integrate with third-party services (e.g., payment processors, accounting software).
        Your use of such services is subject to their respective terms and conditions. We are not responsible
        for the availability or performance of third-party services.
      </p>

      <h2>9A. Digital Fire Logbook</h2>
      <p>
        This section applies if you use the {companyDetails.tradingName} Digital Fire Logbook (the
        &quot;<strong>Logbook</strong>&quot;). It forms part of these Terms. In this section, the
        &quot;<strong>Responsible Person</strong>&quot; for a building has the meaning given in the Regulatory Reform
        (Fire Safety) Order 2005.
      </p>

      <h3>9A.1 Roles</h3>
      <p>
        For personal data in a Logbook, you are the controller and we are your processor. Our{' '}
        <Link href="/dpa" className="text-secondary hover:underline">Data Processing Addendum</Link> applies to that
        processing.
      </p>

      <h3>9A.2 People you add</h3>
      <p>Before you add a person to a Logbook (such as a keeper, a backup or the Responsible Person), you must:</p>
      <ul>
        <li>have a lawful basis under the UK GDPR for adding them and for the processing the Logbook carries out;</li>
        <li>
          make sure they are told about the Logbook and where to read the{' '}
          <Link href="/logbook/privacy" className="text-secondary hover:underline">Digital Fire Logbook Privacy Notice</Link>{' '}
          (the logbook links to that notice, but you remain responsible for telling them);
        </li>
        <li>
          make sure they know that their name and role will be shown to anyone who scans the Logbook&apos;s QR
          sticker, together with the name of the building&apos;s Responsible Person; and
        </li>
        <li>keep their details accurate, and remove a person from the Logbook when they no longer have a role there.</li>
      </ul>
      <p>
        You must not enter personal data in the Logbook&apos;s site name or address, or in answers that the sticker page
        shows (such as which call point was tested), beyond what is needed to identify the building and the test.
      </p>

      <h3>9A.3 The QR sticker and the public page</h3>
      <p>
        You instruct us to publish the Logbook&apos;s public page, and a saved copy of it, to anyone who has the
        sticker&apos;s link, as described in the Digital Fire Logbook Privacy Notice. You are responsible for where the
        sticker is placed, and for removing or replacing it when the Logbook service for that building stops. You
        confirm that you have the Responsible Person&apos;s agreement to display the sticker and to publish their
        name on the public page.
      </p>

      <h3>9A.4 Reminders and messages</h3>
      <p>
        You instruct us to send invitations, sign-in links and reminder emails and texts to the people in each Logbook.
        These are service messages and must not be used for marketing. Reminders are an aid only. We do not guarantee
        that any message is delivered or read, and the duty to carry out and record tests stays with the
        Responsible Person.
      </p>

      <h3>9A.5 A record-keeping tool, not advice</h3>
      <p>
        The Logbook is a record-keeping tool. It helps a site keep the records that BS 5839-1 and BS 5266-1
        recommend. It does not certify that a building complies with any standard or law, and it is not fire safety
        advice. The fire risk assessment and the Responsible Person&apos;s duties stay with the Responsible Person.
      </p>
      <p>
        The Logbook does not currently record the fire door checks that the Fire Safety (England) Regulations 2022
        require in some residential buildings. Those checks must be recorded in another way.
      </p>

      <h3>9A.6 If the Logbook or a phone is not available</h3>
      <p>
        Testing must continue when the Logbook or a phone is unavailable. The sticker kit includes paper record
        sheets, and checks can be added later with &quot;I did this earlier&quot;. Section 10 (Availability and
        Support) applies to the Logbook.
      </p>
      <p>
        We are not liable to any person other than you, including the Responsible Person, a keeper or an inspector,
        who relies on a Logbook.
      </p>

      <h3>9A.7 Requests about people in a Logbook</h3>
      <p>
        If someone asks us to remove their details from a Logbook, we will tell you and act on your instruction. If you
        do not answer within 14 days, or you no longer use {companyDetails.tradingName}, you instruct us to handle the
        request as described in the{' '}
        <Link href="/logbook/privacy" className="text-secondary hover:underline">Digital Fire Logbook Privacy Notice</Link>.
        You must tell us without undue delay if a person asks you to correct an entry, so that a correction can be
        recorded.
      </p>

      <h3>9A.8 Keeping and ending a Logbook</h3>
      <p>
        A fire safety logbook is a record that belongs to the building. Logbooks are kept, not deleted, by default:
        ending a Logbook archives it. We will delete a Logbook on your written instruction, once you confirm that
        neither you nor the building&apos;s Responsible Person needs it. When you stop using{' '}
        {companyDetails.tradingName}, you may, for 30 days, download or ask us to send to you or to the Responsible
        Person you name a copy of each Logbook (the Annex H logbook and the inspection report). We then delete the
        Logbooks as set out in our{' '}
        <Link href="/dpa" className="text-secondary hover:underline">Data Processing Addendum</Link>.
      </p>

      <h2>10. Availability and Support</h2>
      <h3>10.1 Service Availability</h3>
      <p>
        We strive to maintain high availability of our Services. However, we do not guarantee uninterrupted
        access. The Services may be temporarily unavailable due to maintenance, updates, or circumstances
        beyond our control.
      </p>

      <h3>10.2 Support</h3>
      <p>
        We provide customer support during our business hours ({companyDetails.contact.supportHours}).
        Support is available via email at{' '}
        <a href={`mailto:${companyDetails.contact.supportEmail}`}>{companyDetails.contact.supportEmail}</a>.
      </p>

      <h2>11. Limitation of Liability</h2>
      <h3>11.1 Exclusions</h3>
      <p>Subject to section 11.3, we shall not be liable for:</p>
      <ul>
        <li>Any indirect, special or consequential loss</li>
        <li>Loss of profits, revenue, goodwill or business opportunities</li>
      </ul>

      <h3>11.2 Cap on Liability</h3>
      <p>
        Subject to section 11.3, our total liability to you for all claims arising from these Terms or your
        use of the Services shall not exceed the greater of (a) the total fees paid or payable by you to us in
        the twelve (12) months preceding the event giving rise to the claim and (b) £5,000. The limitation of
        liability cap in section 15.2 of the <Link href="/eula" className="text-secondary hover:underline">EULA</Link>{' '}
        is the same amount, and the two are not cumulative.
      </p>

      <h3>11.3 Liability We Do Not Limit</h3>
      <p>
        Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, for
        fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded or limited by law.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {companyDetails.registeredName}, its officers, directors,
        employees, and agents from any claims, damages, losses, or expenses arising from:
      </p>
      <ul>
        <li>Your breach of these Terms</li>
        <li>Your unlawful use of the Services</li>
        <li>Your violation of any third-party rights</li>
        <li>Content you upload or create</li>
      </ul>
      <p>
        This does not apply to the extent that the claim, damage, loss or expense is caused by our breach of these
        Terms or of the Data Processing Addendum, or by our negligence.
      </p>

      <h2>13. Termination</h2>
      <h3>13.1 Termination by You</h3>
      <p>
        You may terminate your account at any time by contacting us. Upon termination, you will lose access
        to the Services, and we will return or delete your data as set out in our{' '}
        <Link href="/dpa">Data Processing Addendum</Link> and our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h3>13.2 Termination by Us</h3>
      <p>
        We may suspend or terminate your access to the Services if you commit a material breach of these Terms
        which, if capable of remedy, is not remedied within 14 days of written notice, or for any other reason on 30
        days&apos; written notice. We may suspend or terminate immediately in the cases set out in section 13.3 of
        the EULA, such as non-payment, suspected fraud or unlawful use, or a security risk.
      </p>

      <h3>13.3 Effect of Termination</h3>
      <p>
        Upon termination, your right to use the Services will cease immediately. Sections of these Terms that
        by their nature should survive termination will remain in effect.
      </p>

      <h2>14. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of significant changes via email or
        through the Services. Your continued use of the Services after such changes constitutes acceptance
        of the updated Terms.
      </p>

      <h2>15. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms
        or your use of the Services shall be subject to the exclusive jurisdiction of the courts of England
        and Wales.
      </p>

      <h2>16. General Provisions</h2>
      <ul>
        <li><strong>Entire Agreement:</strong> These Terms, the <Link href="/eula" className="text-secondary hover:underline">EULA</Link>, the <Link href="/dpa" className="text-secondary hover:underline">Data Processing Addendum</Link> and the documents they incorporate constitute the entire agreement between you and us regarding the Services.</li>
        <li><strong>Severability:</strong> If any provision of these Terms is found invalid, the remaining provisions will continue in effect.</li>
        <li><strong>Waiver:</strong> Our failure to enforce any provision does not constitute a waiver of that provision.</li>
        <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our consent. We may assign our rights at any time.</li>
      </ul>

      <h2>17. Contact Us</h2>
      <p>
        For any questions about these Terms, please contact us:
      </p>
      <p>
        {companyDetails.registeredName}<br />
        {getFormattedRegisteredAddress()}<br />
        Email: <a href={`mailto:${companyDetails.contact.generalEmail}`}>{companyDetails.contact.generalEmail}</a><br />
        {companyDetails.contact.phone && <>Phone: {companyDetails.contact.phone}</>}
      </p>
    </LegalPage>
  );
};

export default TermsPage;
