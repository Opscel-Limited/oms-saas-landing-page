import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  alternates: { canonical: '/dpa' },
  title: `Data Processing Addendum | ${siteDetails.siteName}`,
  description: `The ${siteDetails.siteName} Data Processing Addendum: the terms under which we process personal data on behalf of our customers, as required by Article 28 of the UK GDPR.`,
};

const DpaPage: React.FC = () => {
  const privacyEmail = companyDetails.compliance.dataProtectionOfficerEmail;

  return (
    <LegalPage title="Data Processing Addendum" lastUpdated="23 November 2026">
      <p>
        This Data Processing Addendum (&quot;<strong>DPA</strong>&quot;) forms part of, and is incorporated into, the
        agreement between {companyDetails.registeredName} (company number {companyDetails.companiesHouseNumber},
        registered office {getFormattedRegisteredAddress()}) (&quot;<strong>{companyDetails.tradingName}</strong>&quot;,
        &quot;we&quot;, &quot;us&quot;) and the customer (&quot;<strong>Customer</strong>&quot;, &quot;you&quot;) made up of
        our <Link href="/terms">Terms of Service</Link> and our <Link href="/eula">End User Licence Agreement</Link>{' '}
        (together, the &quot;<strong>Agreement</strong>&quot;). It applies automatically when you accept the Agreement,
        and no separate signature is needed. If you need a signed copy for your records, email{' '}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
      </p>

      <h2>1. Definitions</h2>
      <p>In this DPA:</p>
      <ul>
        <li>
          <strong>&quot;Data Protection Laws&quot;</strong> means the UK GDPR, the Data Protection Act 2018, the Privacy
          and Electronic Communications (EC Directive) Regulations 2003 and any other law relating to personal data
          that applies to the processing under the Agreement, each as amended or replaced from time to time.
        </li>
        <li>
          <strong>&quot;Customer Personal Data&quot;</strong> means personal data that {companyDetails.tradingName}{' '}
          processes on the Customer&apos;s behalf in providing the Services, including through the Digital Fire Logbook.
        </li>
        <li>
          <strong>&quot;Sub-processor&quot;</strong> means a third party that {companyDetails.tradingName} engages to
          process Customer Personal Data.
        </li>
        <li>
          <strong>&quot;Personal Data Breach&quot;</strong> means a breach of security leading to the accidental or
          unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, Customer Personal Data.
        </li>
        <li>
          <strong>&quot;Services&quot;</strong> has the meaning given in the Agreement and includes the Digital Fire
          Logbook.
        </li>
        <li>
          &quot;Controller&quot;, &quot;processor&quot;, &quot;data subject&quot;, &quot;personal data&quot;,
          &quot;processing&quot; and &quot;supervisory authority&quot; have the meanings given in the UK GDPR.
        </li>
      </ul>

      <h2>2. Roles of the parties</h2>
      <p>
        2.1 For Customer Personal Data, the Customer is the controller and {companyDetails.tradingName} is the
        processor.
      </p>
      <p>
        2.2 {companyDetails.tradingName} is a controller, not a processor, of personal data it processes for its own
        purposes: managing Customer accounts, users and billing; securing the Services and preventing misuse;
        communicating with the Customer; and meeting its own legal obligations. Our{' '}
        <Link href="/privacy">Privacy Policy</Link> covers that processing.
      </p>
      <p>
        2.3 The Customer is responsible for having a lawful basis for the processing it instructs, for giving data
        subjects the information the Data Protection Laws require, and for the accuracy of the Customer Personal Data
        it provides. For the Digital Fire Logbook, {companyDetails.tradingName} publishes the{' '}
        <Link href="/logbook/privacy">Digital Fire Logbook Privacy Notice</Link> on the Customer&apos;s behalf. The
        Customer remains responsible for confirming that it describes the Customer&apos;s processing accurately.
      </p>

      <h2>3. Instructions</h2>
      <p>
        3.1 {companyDetails.tradingName} will process Customer Personal Data only on the Customer&apos;s documented
        instructions, including with regard to transfers outside the UK, unless UK law requires otherwise. If UK law
        does require otherwise, we will tell the Customer before processing, unless that law prohibits us from doing so.
      </p>
      <p>
        3.2 The Agreement, this DPA and the Customer&apos;s use and configuration of the Services are the
        Customer&apos;s complete documented instructions. They include instructions to use the Sub-processors
        listed under clause 6, including for transfers outside the UK under clause 12, and to create anonymised,
        aggregated data from Customer Personal Data for the purposes set out in the Agreement. Other instructions
        must be agreed in writing.
      </p>
      <p>
        3.3 We will tell the Customer immediately if, in our opinion, an instruction infringes the Data Protection Laws.
      </p>

      <h2>4. Confidentiality</h2>
      <p>
        {companyDetails.tradingName} will ensure that everyone it authorises to process Customer Personal Data is under
        a duty of confidentiality, whether by contract or by law, and has access only to the extent needed to provide
        the Services.
      </p>

      <h2>5. Security</h2>
      <p>
        5.1 {companyDetails.tradingName} will implement appropriate technical and organisational measures to protect
        Customer Personal Data, as required by Article 32 of the UK GDPR, taking into account the state of the art, the
        costs of implementation, and the nature, scope, context and purposes of the processing, as well as the risks to
        individuals. The measures in place at the date of this DPA are summarised in Annex 2.
      </p>
      <p>
        5.2 We may update those measures from time to time, provided the overall level of protection is not reduced.
      </p>

      <h2>6. Sub-processors</h2>
      <p>
        6.1 The Customer gives {companyDetails.tradingName} general written authorisation to engage Sub-processors.
        The Sub-processors engaged at any time are listed in section 5.4 of our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        6.2 We will give the Customer at least 30 days&apos; notice before we add or replace a Sub-processor, by
        updating that list and notifying the Customer by email or through the Services. The Customer may object on
        reasonable data protection grounds within that period. If we cannot resolve the objection, the Customer may
        terminate the affected Services without penalty, and receive a pro-rata refund of any prepaid fees for them, as
        its sole remedy, by giving written notice before the change takes effect. Where a change is urgently needed for security or continuity of the Services, we may give shorter
        notice, and the same right to object applies.
      </p>
      <p>
        6.3 We will engage each Sub-processor under a written contract that imposes data protection obligations no less
        protective than those in this DPA. We remain liable to the Customer for each Sub-processor&apos;s performance
        of those obligations.
      </p>

      <h2>7. Data subject requests</h2>
      <p>
        7.1 Taking into account the nature of the processing, {companyDetails.tradingName} will assist the Customer, by
        appropriate technical and organisational measures where possible, to respond to requests from data subjects
        exercising their rights under the Data Protection Laws.
      </p>
      <p>
        7.2 If we receive such a request directly, we will pass it to the Customer without undue delay, and we will not
        respond to it ourselves except to acknowledge it or as the Customer instructs. For the Digital Fire Logbook, the
        procedure in section 9A of the <Link href="/terms">Terms of Service</Link> applies.
      </p>

      <h2>8. Personal Data Breaches</h2>
      <p>
        8.1 {companyDetails.tradingName} will notify the Customer without undue delay and, where feasible, within 48
        hours after becoming aware of a Personal Data Breach.
      </p>
      <p>
        8.2 The notice will describe, as far as the information is then available: the nature of the breach, including
        the categories and approximate numbers of data subjects and records concerned; the likely consequences; and the
        measures taken or proposed to address the breach and to reduce its possible adverse effects. Where not all of
        that information is available at once, we will provide it in phases without further undue delay.
      </p>
      <p>
        8.3 Notifying a Personal Data Breach is not an admission of fault or liability.
      </p>

      <h2>9. Other assistance</h2>
      <p>
        Taking into account the nature of the processing and the information available to us,{' '}
        {companyDetails.tradingName} will give the Customer reasonable assistance in meeting its obligations on
        security, Personal Data Breach notification, data protection impact assessments and prior consultation with the
        Information Commissioner (Articles 32 to 36 of the UK GDPR).
      </p>

      <h2>10. Return and deletion</h2>
      <p>
        10.1 For 30 days after the Services end, the Customer may export its Customer Personal Data. We will then
        delete it from our production systems within 90 days after the Services end, and from backups within a
        further 90 days, unless UK law requires us to keep it. Until it is deleted it remains protected by this
        DPA.
      </p>
      <p>
        10.2 <strong>Digital Fire Logbooks.</strong> A fire safety logbook is a record that belongs to the building,
        and the building&apos;s Responsible Person may need it after the Customer stops using{' '}
        {companyDetails.tradingName}. During the term, logbooks are archived rather than deleted, unless the Customer
        instructs us in writing to delete one. For 30 days after the Services end, the Customer may download, or ask us
        to send to it or to the Responsible Person it names, a copy of each of its logbooks (the Annex H logbook and the
        inspection report). We then delete the logbooks under clause 10.1.
      </p>

      <h2>11. Information and audits</h2>
      <p>
        11.1 {companyDetails.tradingName} will make available to the Customer the information reasonably necessary to
        demonstrate compliance with Article 28 of the UK GDPR, and will allow for and contribute to audits, including
        inspections, by the Customer or an independent auditor it appoints.
      </p>
      <p>
        11.2 The Customer will first ask for the information it needs in writing, and we will answer within a reasonable
        time. If that is not enough to demonstrate compliance, the Customer may carry out an audit on at least 30
        days&apos; written notice, no more than once in any 12 months (except after a Personal Data Breach or where a
        supervisory authority requires it), and under appropriate confidentiality obligations. Audits are carried out
        remotely, by document review and written questions, unless a supervisory authority requires otherwise. Audits
        of Sub-processors are satisfied by the Sub-processor&apos;s own audit reports or certifications. The Customer
        bears its own costs, and our reasonable costs for any time beyond one working day in a year.
      </p>

      <h2>12. International transfers</h2>
      <p>
        {companyDetails.tradingName} will not transfer Customer Personal Data outside the UK, or allow a Sub-processor to
        do so, unless the transfer complies with Chapter V of the UK GDPR. A transfer complies, for example, where the
        destination is covered by UK adequacy regulations, or where it is protected by the UK International Data
        Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses. The safeguards used for each Sub-processor
        are listed in section 5.4 of our <Link href="/privacy">Privacy Policy</Link>, and we will give the Customer
        details on request.
      </p>

      <h2>13. Liability and precedence</h2>
      <p>
        13.1 Each party&apos;s liability under this DPA is subject to the exclusions and limits of liability in the
        Agreement, except where the Data Protection Laws do not permit liability to be limited.
      </p>
      <p>
        13.2 If this DPA conflicts with any other part of the Agreement on the processing of Customer Personal Data,
        this DPA prevails.
      </p>
      <p>
        13.3 This DPA lasts for as long as {companyDetails.tradingName} processes Customer Personal Data. It is governed
        by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.
      </p>
      <p>
        13.4 We may update this DPA to reflect changes in the Data Protection Laws or in the Services. We will not make
        changes that materially reduce the protection given to Customer Personal Data, and we will give notice of material changes
        in the same way as for the Agreement.
      </p>

      <h2>Annex 1: Details of the processing</h2>
      <ul>
        <li>
          <strong>Subject matter and duration:</strong> the provision of the Services under the Agreement, for the term
          of the Agreement and the period afterwards set out in clause 10.
        </li>
        <li>
          <strong>Nature and purpose:</strong> hosting, storing, organising, displaying, transmitting and deleting data
          so that the Customer can run its fire safety and electrical contracting operations. This covers jobs, visits,
          quotations, invoices, certificates, customer and site records, the customer portal, and the Digital Fire
          Logbook, including its public QR sticker page, invitations, sign-in links and reminder emails and texts. It
          includes AI-assisted extraction, drafting and analysis using the Sub-processor named for AI features.
        </li>
        <li>
          <strong>Categories of data subjects:</strong> the Customer&apos;s own clients and their staff; site contacts,
          occupiers and other people named at the Customer&apos;s sites; the Customer&apos;s engineers and other
          personnel, to the extent their data forms part of job records; and, for the Digital Fire Logbook, logbook
          keepers, backups and Responsible Persons. For people who open a logbook from its QR sticker, only the fact and time of a view is recorded, not who they are.
        </li>
        <li>
          <strong>Types of personal data:</strong> names, roles, job titles, email addresses, telephone numbers,
          postal and site addresses; job, visit, asset, defect, certificate, quotation and invoice details;
          signatures (typed or drawn); photographs; notes and answers recorded in jobs and logbook entries; for the
          logbook, the location at the moment of signing (only where the person allows it), device and browser type,
          sign-in records, message delivery records and access history; and any other personal data the Customer
          chooses to enter.
        </li>
        <li>
          <strong>Special category and criminal offence data:</strong> none is intended. The Customer must not enter
          special category data or criminal offence data into the Services unless it has a lawful basis and a condition
          for doing so, and has told us in writing.
        </li>
      </ul>

      <h2>Annex 2: Security measures</h2>
      <ul>
        <li>Encryption of data in transit (TLS) and at rest, including application-layer encryption of third-party integration credentials.</li>
        <li>Logical separation of each Customer&apos;s data within our multi-tenant platform.</li>
        <li>Role-based access controls and authentication for users, and least-privilege access for our personnel and for third-party integrations.</li>
        <li>Digital Fire Logbook entries are sealed when signed, so changes cannot be made without detection, and corrections are recorded as new entries.</li>
        <li>Error monitoring with personal details removed from error reports, and continuous monitoring of the Services.</li>
        <li>Automated backups and disaster-recovery procedures.</li>
        <li>Rate limiting and abuse prevention on the Digital Fire Logbook&apos;s public pages, using scrambled (hashed) network addresses that are deleted after one day.</li>
      </ul>

      <h2>Annex 3: Sub-processors</h2>
      <p>
        The current list of Sub-processors, with what each processes, where, and the transfer safeguard, is in section
        5.4 of our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this DPA: <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
      </p>
    </LegalPage>
  );
};

export default DpaPage;
