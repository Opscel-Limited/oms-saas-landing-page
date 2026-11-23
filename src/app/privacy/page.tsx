import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: `Privacy Policy | ${siteDetails.siteName}`,
  description: `Privacy Policy for ${siteDetails.siteName}. Learn how we collect, use, and protect your personal data.`,
};

const PrivacyPage: React.FC = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="23 November 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        {companyDetails.registeredName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;{companyDetails.tradingName}&quot;)
        is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our website and services.
      </p>
      <p>
        We are registered with the Information Commissioner&apos;s Office (ICO) under registration number{' '}
        <strong>{companyDetails.compliance.icoRegistrationNumber}</strong>.
      </p>
      <p>
        <strong>Data controller:</strong> {companyDetails.registeredName}, {getFormattedRegisteredAddress()} (company
        number {companyDetails.companiesHouseNumber}).
      </p>

      <h3>1.1 Our role</h3>
      <p>
        We are the <strong>controller</strong> of personal data about our account holders and their users, people who
        visit our website or contact us, and people we deal with for our own business purposes. This policy covers
        that data.
      </p>
      <p>
        Businesses that use {companyDetails.tradingName} (our &quot;<strong>customers</strong>&quot;) also store
        information about their own clients, site contacts, staff and others in it, and use it to send quotes,
        certificates, invoices, visit confirmations, notifications and customer portal invitations. For that
        information, the customer is the controller and we are its <strong>processor</strong>: we handle it only on
        the customer&apos;s instructions, under our <Link href="/dpa">Data Processing Addendum</Link>. If you are a
        client or contact of one of our customers, please contact that business first about your information. We will
        help if you contact us.
      </p>
      <p>
        If you use a Digital Fire Logbook without an {companyDetails.tradingName} account, please read our{' '}
        <Link href="/logbook/privacy">Digital Fire Logbook Privacy Notice</Link>, which explains how the logbook
        handles your information.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect information in the following ways:</p>

      <h3>2.1 Information You Provide</h3>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, phone number, company name, and job title when you register for an account.</li>
        <li><strong>Payment Information:</strong> Billing address and payment card details (processed securely by our payment provider).</li>
        <li><strong>Job Data:</strong> Information about jobs, customers, sites, equipment, and certificates you create within the platform.</li>
        <li><strong>Communications:</strong> Any correspondence you send to us, including support requests and feedback.</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage and device data:</strong> how you use our services, device type, operating system, browser type and IP address, including in our security and audit logs.</li>
        <li><strong>Website analytics:</strong> if you accept analytics cookies, our website (www.opscel.com) uses Google Analytics to measure visits. See our <Link href="/cookies">Cookie Policy</Link>.</li>
        <li><strong>Performance data:</strong> the {companyDetails.tradingName} app measures page loading speed using Vercel Speed Insights, which does not use cookies.</li>
        <li><strong>Error reports:</strong> when the app hits an error, we receive a technical report and a recording of the screen leading up to it, with all text masked and all images blocked, so that we can fix the problem. Reports are linked to your user and organisation identifiers, not to your name.</li>
        <li><strong>Location data:</strong> approximate location based on IP address; precise location only with your permission, for field service features. The Digital Fire Logbook checks location once, at the moment someone signs an entry, and only if the person allows it.</li>
        <li><strong>Cookies:</strong> see our <Link href="/cookies">Cookie Policy</Link>.</li>
      </ul>

      <h3>2.3 Information About People Who Are Not Our Account Holders</h3>
      <ul>
        <li><strong>Our customers&apos; clients and contacts:</strong> names, contact details, site addresses and job, quote, certificate and invoice information that our customers enter, as their processor (see section 1.1).</li>
        <li><strong>Customer portal users:</strong> when a customer invites a client contact to its customer portal, we process the contact&apos;s name and email address, the sign-in link we send, sign-in records (including IP address and browser type), and actions such as approving or declining a quote, including any signature given.</li>
        <li><strong>People who receive texts or emails</strong> sent through {companyDetails.tradingName} on a customer&apos;s behalf, such as visit confirmations and job notifications, including any choice to stop receiving them.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal data for the following purposes:</p>
      <ul>
        <li><strong>Service Delivery:</strong> To provide, maintain, and improve our operations management platform.</li>
        <li><strong>Account Management:</strong> To create and manage your account, process payments, and provide customer support.</li>
        <li><strong>Communication:</strong> To send service updates, security alerts, and support messages.</li>
        <li><strong>Marketing:</strong> To send promotional communications (with your consent) which you can opt out of at any time.</li>
        <li><strong>Analytics:</strong> To understand how our services are used and to improve user experience.</li>
        <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.</li>
        <li><strong>AI Features:</strong> To power Setup Copilot (workspace setup) and Insights (answering business questions about your account). See section 5.3 below for what this involves and who processes it.</li>
      </ul>

      <h2>4. Legal Basis for Processing (UK GDPR)</h2>
      <p>Where we are the controller, we rely on the following lawful bases:</p>
      <ul>
        <li><strong>Contract:</strong> to provide the services under our agreement with our customers and their users, including creating accounts, taking payment, providing support and providing the AI features you choose to use.</li>
        <li><strong>Legitimate interests:</strong> to keep our services secure and prevent fraud and misuse, to fix errors and improve our services, and to communicate with the people who work for our customers. We have weighed these interests against your rights, and you can ask us for details.</li>
        <li><strong>Consent:</strong> for website analytics cookies, for marketing where the law requires consent, and for precise location. You can withdraw consent at any time, including through the &quot;Cookie settings&quot; link in our website footer.</li>
        <li><strong>Legal obligation:</strong> to meet our legal and regulatory obligations, such as keeping tax and accounting records.</li>
      </ul>
      <p>
        Where we act as a processor (see section 1.1), the customer is responsible for having a lawful basis.
      </p>
      <p>
        We do not make decisions about you based solely on automated processing that have legal or similarly
        significant effects. Our AI features only suggest changes, and a person decides whether to apply them.
      </p>

      <h2>5. Data Sharing</h2>
      <p>We may share your personal data with:</p>
      <ul>
        <li><strong>Service providers (sub-processors):</strong> companies that help us deliver our services, listed in section 5.4. Each is bound by a written contract to protect your data and use it only on our instructions.</li>
        <li><strong>Integrations you choose to connect:</strong> if you connect {companyDetails.tradingName} to another service, such as Google Calendar or Google Drive, Microsoft 365 (Outlook calendar or OneDrive), Xero, QuickBooks Online or Telegram, we send it the data needed for that integration at your direction. Those providers handle it under their own terms and privacy policies.</li>
        <li><strong>Your Organisation:</strong> If you use {companyDetails.tradingName} as part of an organisation, administrators may access your account data.</li>
        <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights.</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
      </ul>
      <p>
        <strong>We do not sell your personal data to third parties.</strong>
      </p>

      <h3>5.1 Google API Services</h3>
      <p>
        {companyDetails.tradingName} integrates with Google Calendar at the user&apos;s request, using OAuth authentication.
        We request the following scopes:
      </p>
      <ul>
        <li><strong>calendar.events:</strong> To create, update, and delete calendar events corresponding to your scheduled jobs and visits within {companyDetails.tradingName}.</li>
        <li><strong>userinfo.email:</strong> To identify the Google account being connected to your {companyDetails.tradingName} profile.</li>
        <li><strong>calendar.freebusy:</strong> To read your free/busy availability (not event details) so {companyDetails.tradingName} can detect scheduling conflicts and avoid double-booking engineers.</li>
      </ul>
      <p>
        We use this access only to sync your {companyDetails.tradingName} jobs to your Google Calendar and to check free/busy times. We do not read, store or use your calendar data for any other purpose.
      </p>
      <p>
        <strong>{companyDetails.tradingName}&apos;s use and transfer of information received from Google APIs adheres to the{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Google API Services User Data Policy
        </a>, including the Limited Use requirements.</strong>
      </p>
      <p>
        If you connect Google Drive, we request the <strong>drive.readonly</strong> and <strong>userinfo.email</strong>{' '}
        scopes, to let you browse your Drive and choose files and folders to import into {companyDetails.tradingName},
        for example records from your previous system. We read only what you choose to import, and do not change or
        delete anything in your Drive.
      </p>
      <p>
        You can revoke {companyDetails.tradingName}&apos;s access to your Google Calendar or Google Drive at any time via your{' '}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Google Account settings
        </a>{' '}
        or by disconnecting the integration within {companyDetails.tradingName}.
      </p>

      <h3>5.2 Intuit QuickBooks Online</h3>
      <p>
        {companyDetails.tradingName} integrates with QuickBooks Online at the user&apos;s request, using OAuth 2.0 authentication.
        We request a single scope, <strong>com.intuit.quickbooks.accounting</strong>, to create and update invoices and customer
        records in your connected QuickBooks company and to read back the payment status of those invoices.
      </p>
      <p>
        The integration is one-way: {companyDetails.tradingName} pushes invoice and customer data to QuickBooks and reads payment
        status; we do not import or store a copy of your wider QuickBooks financial data.
      </p>
      <p>
        We store your OAuth access and refresh tokens (encrypted at rest), your QuickBooks company identifier (realmId), and
        reference IDs linking {companyDetails.tradingName} records to their QuickBooks counterparts. We do not access QuickBooks
        Payments and handle no card data.
      </p>
      <p>
        You can revoke {companyDetails.tradingName}&apos;s access at any time by disconnecting within {companyDetails.tradingName}{' '}
        (Settings → Accounting Integration) or from your{' '}
        <a href="https://accounts.intuit.com/app/account-manager/security" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Intuit account&apos;s connected-apps settings
        </a>.
      </p>

      <h3>5.3 Anthropic, PBC (AI Features)</h3>
      <p>
        Some {companyDetails.tradingName} features use artificial intelligence to help you set up your workspace
        and answer questions about your own data. When you use them, the relevant information is sent to our
        AI provider, Anthropic, PBC, which processes it and returns a result. These features are:
      </p>
      <ul>
        <li>
          <strong>Setup Copilot</strong> reads files you upload and, if you give us the address, the text of your
          public website, so that it can work out how to map your customer, site and contact records — this can
          include anything contained in those files, such as names, addresses, email addresses and telephone
          numbers.
        </li>
        <li>
          <strong>Insights</strong> answers business questions using figures already held in your account: totals
          and summaries such as revenue, margin, outstanding invoices, open quotes and upcoming work, together
          with the customer or site names those figures relate to. Free-text fields — job notes, descriptions and
          quotation terms — are never sent to Insights.
        </li>
        <li>
          <strong>The AI assistant and AI actions</strong> fill in forms from text you type, check certificates, suggest
          prices for remedial work and draft notes. They send the text you provide and details of the record you are
          working on, such as the customer, site, job or certificate, which can include names and contact details.
        </li>
        <li>
          <strong>Data import and cost capture</strong> read files you import from your previous system, and supplier
          invoices or receipts you upload, to work out what each record or line contains.
        </li>
        <li>
          <strong>Help</strong> answers questions about using {companyDetails.tradingName}.
        </li>
      </ul>
      <p>
        Your information is sent only in order to produce your answer. It is not used to train AI models, it is
        never combined with or made visible to another {companyDetails.tradingName} customer, and the AI cannot
        change anything in your account by itself: it can only propose a change, which someone on your team then
        chooses to apply.
      </p>
      <p>
        Anthropic retains the information it receives for a limited period under its standard API terms, to
        provide and monitor the service. Within {companyDetails.tradingName}, Help conversations are deleted after 7
        days without use, Insights conversations after 30 days and Setup Copilot conversations after 90 days, and
        every Insights question is recorded in your audit log against the user who asked it.
      </p>

      <h3>5.4 Sub-Processors</h3>
      <p>
        The table below lists the service providers we use to provide {companyDetails.tradingName}, what they
        process, and the safeguard in place for any transfer of data outside the UK. For information our customers
        hold in {companyDetails.tradingName}, they act as our sub-processors under our{' '}
        <Link href="/dpa">Data Processing Addendum</Link>. For our own data, such as account sign-in details and website
        analytics, they act as our processors. Stripe acts as an independent controller for some payment data.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className="border border-gray-200 px-4 py-2 text-left">Sub-processor</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Data processed</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Transfer safeguard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Anthropic, PBC</td>
              <td className="border border-gray-200 px-4 py-2">AI processing for the features described in section 5.3: Setup Copilot, Insights, the AI assistant and AI actions, data import, cost capture and Help</td>
              <td className="border border-gray-200 px-4 py-2">The text you provide and the records the feature works on, which can include customer, site and contact names, addresses, email addresses and telephone numbers; files you upload; aggregate financial and scheduling figures</td>
              <td className="border border-gray-200 px-4 py-2">United States</td>
              <td className="border border-gray-200 px-4 py-2">Standard Contractual Clauses and the UK International Data Transfer Addendum, under Anthropic&apos;s Data Processing Agreement</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Vercel Inc.</td>
              <td className="border border-gray-200 px-4 py-2">Hosting the app, the website and the Digital Fire Logbook; file storage; page speed measurement</td>
              <td className="border border-gray-200 px-4 py-2">All data in the services, including documents, photos and signature images</td>
              <td className="border border-gray-200 px-4 py-2">London, UK</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses (for any access from the US)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Neon Inc.</td>
              <td className="border border-gray-200 px-4 py-2">Databases for the app and the Digital Fire Logbook</td>
              <td className="border border-gray-200 px-4 py-2">All records in the services</td>
              <td className="border border-gray-200 px-4 py-2">London, UK</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses (for any access from the US)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Stack Auth, Inc.</td>
              <td className="border border-gray-200 px-4 py-2">Sign-in and account authentication</td>
              <td className="border border-gray-200 px-4 py-2">Names, email addresses and sign-in details of account users</td>
              <td className="border border-gray-200 px-4 py-2">United States</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Stripe Payments UK Ltd and its affiliates</td>
              <td className="border border-gray-200 px-4 py-2">Subscription billing, and quote deposit payments for customers who use them</td>
              <td className="border border-gray-200 px-4 py-2">Business names, email addresses, payment details and transaction details. Stripe is an independent controller for some payment data, under its own privacy policy</td>
              <td className="border border-gray-200 px-4 py-2">United States, UK and EU</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Resend Inc.</td>
              <td className="border border-gray-200 px-4 py-2">Sending emails, such as quotes, certificates, invoices, portal sign-in links and logbook invitations and reminders</td>
              <td className="border border-gray-200 px-4 py-2">Email addresses, names and the content of the email</td>
              <td className="border border-gray-200 px-4 py-2">United States; Ireland (EU) for the Digital Fire Logbook</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">The SMS Works Ltd</td>
              <td className="border border-gray-200 px-4 py-2">Sending text messages, such as visit confirmations and logbook reminders</td>
              <td className="border border-gray-200 px-4 py-2">Mobile numbers and the content of the text</td>
              <td className="border border-gray-200 px-4 py-2">UK</td>
              <td className="border border-gray-200 px-4 py-2">Not applicable (UK)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Upstash, Inc.</td>
              <td className="border border-gray-200 px-4 py-2">Scheduling background tasks, such as reminders, imports and calendar sync</td>
              <td className="border border-gray-200 px-4 py-2">Task details, which can include record identifiers</td>
              <td className="border border-gray-200 px-4 py-2">United States</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Functional Software Inc. (Sentry)</td>
              <td className="border border-gray-200 px-4 py-2">Error monitoring</td>
              <td className="border border-gray-200 px-4 py-2">Technical error reports and masked screen recordings, linked to user and organisation identifiers. Logbook request bodies are removed</td>
              <td className="border border-gray-200 px-4 py-2">United States; Germany (EU) for the Digital Fire Logbook</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">MapTiler AG</td>
              <td className="border border-gray-200 px-4 py-2">Displaying maps of your sites</td>
              <td className="border border-gray-200 px-4 py-2">IP address and the map area viewed</td>
              <td className="border border-gray-200 px-4 py-2">Switzerland</td>
              <td className="border border-gray-200 px-4 py-2">UK adequacy regulations</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">getAddress.io</td>
              <td className="border border-gray-200 px-4 py-2">UK address lookup</td>
              <td className="border border-gray-200 px-4 py-2">The address or postcode you search for</td>
              <td className="border border-gray-200 px-4 py-2">UK</td>
              <td className="border border-gray-200 px-4 py-2">Not applicable (UK)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Google LLC (Google Analytics)</td>
              <td className="border border-gray-200 px-4 py-2">Measuring visits to our website, www.opscel.com</td>
              <td className="border border-gray-200 px-4 py-2">Website usage data and online identifiers</td>
              <td className="border border-gray-200 px-4 py-2">United States</td>
              <td className="border border-gray-200 px-4 py-2">UK Extension to the EU-US Data Privacy Framework (where certified), or the UK International Data Transfer Agreement / UK Addendum to the EU Standard Contractual Clauses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>6. Data Storage and Security</h2>
      <p>
        Our app&apos;s databases and file storage are hosted in London, <strong>{companyDetails.compliance.dataHostingLocation}</strong>.
        Some service providers process limited data outside the UK, as shown in sections 5.4 and 9.
        We implement appropriate technical and organisational measures to protect your personal data, including:
      </p>
      <ul>
        <li>Encryption of data in transit (TLS) and at rest, including application-layer encryption of third-party integration credentials</li>
        <li>Logical isolation of each customer&apos;s data within our multi-tenant platform</li>
        <li>Role-based access controls and authentication</li>
        <li>Continuous monitoring and error tracking across our systems</li>
        <li>Automated backups and disaster recovery procedures</li>
        <li>Least-privilege access for all third-party integrations</li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>We retain your personal data for as long as necessary to:</p>
      <ul>
        <li>Provide our services to you</li>
        <li>Comply with legal obligations (for example, accounting and tax records for six years)</li>
        <li>Resolve disputes and enforce our agreements</li>
      </ul>
      <p>
        When a customer closes its account, it can export its data for 30 days. We then delete or anonymise the
        personal data in the account within 90 days after closure, and remove it from backups within a further 90
        days, unless we must keep it for legal purposes. In particular:
      </p>
      <ul>
        <li>AI conversations are deleted as described in section 5.3.</li>
        <li>Deleted documents and photos are permanently removed 30 days after deletion.</li>
        <li>Import files are deleted 30 days after the import.</li>
        <li>Customer portal sign-in and activity records are kept for as long as the customer&apos;s account is open, so that the customer can see who approved what and when.</li>
        <li>A choice to stop receiving texts or emails is kept so that we keep respecting it.</li>
      </ul>
      <p>
        <strong>Fire logbook records are different.</strong> A Digital Fire Logbook is a record that belongs to the
        building. It is kept for as long as the fire safety company uses {companyDetails.tradingName}, unless the
        company asks us to delete it. When the company stops, it can download, or ask us to send to it or to the
        building&apos;s Responsible Person, a copy of the logbook for 30 days before it is deleted. See the <Link href="/logbook/privacy">Digital Fire Logbook Privacy Notice</Link>.
      </p>

      <h2>8. Your Rights</h2>
      <p>Under UK GDPR, you have the following rights. Some apply only in certain circumstances.</p>
      <ul>
        <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
        <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
        <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for marketing purposes.</li>
        <li><strong>Rights Related to Automated Decision-Making:</strong> Not to be subject to decisions based solely on automated processing.</li>
        <li><strong>Right to Withdraw Consent:</strong> Where we rely on consent, you can withdraw it at any time. This does not affect processing before you withdrew it.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at{' '}
        <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>.
        We may need to confirm your identity first. We will respond within one month. If a request is complex, we may
        extend this by up to two further months, and if so we will tell you why within the first month. If your
        request is about information a customer holds in {companyDetails.tradingName} (see section 1.1), we will pass
        it to that customer and help it respond.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Our app, website and databases are hosted in the United Kingdom. Some of our service providers are based
        outside the UK, or may access data from outside it, as shown in section 5.4. Where personal data is transferred
        outside the UK, we make sure it is protected, by one of:
      </p>
      <ul>
        <li>UK adequacy regulations, which cover, for example, the EU, the EEA and Switzerland;</li>
        <li>the UK Extension to the EU-US Data Privacy Framework, for US providers certified under it; or</li>
        <li>the UK International Data Transfer Agreement, or the UK Addendum to the EU Standard Contractual Clauses.</li>
      </ul>
      <p>You can ask us for a copy of the safeguards that apply.</p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our services are not intended for individuals under 18 years of age. We do not knowingly
        collect personal data from children. If you believe we have collected data from a child,
        please contact us immediately.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant changes
        by email or through our platform. The &quot;Last updated&quot; date at the top of this page indicates
        when this policy was last revised.
      </p>

      <h2>12. Complaints</h2>
      <p>
        If you have concerns about how we handle your personal data, please contact us first. We will acknowledge
        your complaint within 30 days and tell you the outcome without undue delay. Contact us at{' '}
        <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>.
      </p>
      <p>
        You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
      </p>
      <ul>
        <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
        <li>Helpline: 0303 123 1113</li>
      </ul>

      <h2>13. Contact Us</h2>
      <p>
        For any questions about this Privacy Policy or our data practices, please contact:
      </p>
      <p>
        <strong>Privacy enquiries</strong><br />
        {companyDetails.registeredName}<br />
        {getFormattedRegisteredAddress()}<br />
        Email: <a href={`mailto:${companyDetails.compliance.dataProtectionOfficerEmail}`}>
          {companyDetails.compliance.dataProtectionOfficerEmail}
        </a>
      </p>
    </LegalPage>
  );
};

export default PrivacyPage;
