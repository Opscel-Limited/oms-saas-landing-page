import { Metadata } from 'next';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  alternates: { canonical: '/logbook/privacy' },
  title: `Digital Fire Logbook Privacy Notice | ${siteDetails.siteName}`,
  description:
    'How the Opscel Digital Fire Logbook handles the information of keepers, backups, Responsible Persons and anyone who scans a logbook QR sticker.',
};

const LogbookPrivacyPage: React.FC = () => {
  const privacyEmail = companyDetails.compliance.dataProtectionOfficerEmail;

  return (
    <LegalPage title="Digital Fire Logbook: Privacy Notice" lastUpdated="23 November 2026">
      <p>
        This notice is for people who use an {companyDetails.tradingName} Digital Fire Logbook without an{' '}
        {companyDetails.tradingName} account: people who keep the logbook for a building, their backups,
        Responsible Persons, and anyone who scans a logbook&apos;s QR sticker, such as a fire inspector. If you have
        an {companyDetails.tradingName} account, our main{' '}
        <a href="https://www.opscel.com/privacy">privacy policy</a> also applies to you.
      </p>

      <h2>Who is responsible for your information</h2>
      <p>
        The logbook for your building is set up and kept by the <strong>fire safety company</strong> that looks
        after it. That company decides what the logbook is used for, so it is the <strong>controller</strong> of
        your information.
      </p>
      <p>
        <strong>{companyDetails.registeredName}</strong> ({getFormattedRegisteredAddress()}; company number{' '}
        {companyDetails.companiesHouseNumber}) provides the logbook service to that company and handles your
        information on its behalf, as its <strong>processor</strong>. We are registered with the Information
        Commissioner&apos;s Office (ICO) under registration number{' '}
        <strong>{companyDetails.compliance.icoRegistrationNumber}</strong>.
      </p>
      <p>
        The logbook tells you the company&apos;s name. For questions about your information, contact that company
        first. You can also contact us at <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>, and we will pass
        your request on or help.
      </p>
      {/* SOLICITOR: confirm the controller analysis. The fire safety company invites people and keeps the book;
          the building's Responsible Person holds the legal duty to keep fire safety records. Some logbooks may
          make the Responsible Person a joint controller. */}

      <h2>What we record</h2>

      <h3>About you, from the company that invited you</h3>
      <ul>
        <li>Your name and your role for the building (keeper, backup or Responsible Person).</li>
        <li>
          Your email address, and your mobile number if you give one, so the logbook can send you your link and
          reminders.
        </li>
      </ul>

      <h3>When you use the logbook</h3>
      <ul>
        <li>
          <strong>Each test or event you record:</strong> what was checked, your answers, any note you add, the
          time you say it happened and the time it was recorded.
        </li>
        <li>
          <strong>Your signature:</strong> either your typed name or a signature you draw on screen. It is attached
          to every entry you sign.
        </li>
        <li>
          <strong>Photos you choose to add</strong> (up to three per entry). Before a photo leaves your phone we
          shrink it and remove the hidden information inside it, including any location it contains. A photo may
          still show people or places, so please take care what you photograph.
        </li>
        <li>
          <strong>Your location, once, at the moment you sign.</strong> This shows whether the entry was made on
          site. Your phone asks your permission first, and you can say no; the entry is still recorded and simply
          says the location was not shared. We never track you. The entry itself records only whether you were on
          site. The position and its accuracy are kept separately so the company can check them.
        </li>
        <li>
          <strong>A sign-in cookie.</strong> Opening your link sets one cookie that keeps you signed in on that
          device for up to 30 days. It is essential for the logbook to work. We use no advertising or analytics
          cookies, so there is no cookie banner.
        </li>
        <li>
          <strong>The type of device and browser</strong> you signed in with (shortened), kept with that sign-in.
        </li>
      </ul>

      <h3>When someone opens the logbook from its QR sticker</h3>
      <ul>
        <li>We record that the logbook was viewed, or that a report was downloaded or checked, and when.</li>
        <li>Link previews (for example when the link is pasted into a messaging app) can be counted as a view.</li>
        <li>
          <strong>We do not store your IP address or anything that identifies you.</strong>
        </li>
        <li>
          To stop misuse we count requests using a scrambled (hashed) form of your internet address. These counts
          are deleted after one day.
        </li>
      </ul>

      <h2>Why we use it</h2>
      <ul>
        <li>
          <strong>To keep the building&apos;s fire safety records.</strong> The Responsible Person for a building
          must keep its fire safety systems maintained, and recording tests is how that is shown. The logbook is
          that record.
        </li>
        <li>
          <strong>To show a record can be trusted.</strong> Entries are sealed with the name, the signature and
          whether the entry was made on site, so nobody can quietly change them later.
        </li>
        <li>
          <strong>To let the fire safety company respond</strong> to faults you report, and to let inspectors see
          that checks were done.
        </li>
      </ul>
      <p>
        Our lawful bases are: helping the Responsible Person meet their <strong>legal obligation</strong> to keep
        fire safety records (Regulatory Reform (Fire Safety) Order 2005), the <strong>legitimate interests</strong>{' '}
        of the building and the fire safety company in keeping reliable records, and the fire safety
        company&apos;s <strong>contract</strong> with us. We do not use your information for marketing, and we make
        no automated decisions about you.
      </p>
      {/* SOLICITOR: confirm the lawful bases, and whether the location check needs consent rather than legitimate
          interests (the browser asks permission every time; declining never blocks an entry). */}

      <h2>Who can see what</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className="border border-gray-200 px-4 py-2 text-left">Who</th>
              <th className="border border-gray-200 px-4 py-2 text-left">What they can see</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">
                <strong>The fire safety company</strong> that keeps the logbook
              </td>
              <td className="border border-gray-200 px-4 py-2">
                Everything in it. This includes an access history: when the logbook was viewed, exported or checked
                from the sticker, and when the keeper opened it. The history does not show internet addresses or
                device details.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">
                <strong>People invited to the logbook</strong> for the building
              </td>
              <td className="border border-gray-200 px-4 py-2">The entries and the photos attached to them.</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">
                <strong>Anyone who scans the QR sticker</strong> (for example a fire inspector)
              </td>
              <td className="border border-gray-200 px-4 py-2">
                The building&apos;s name and address, <strong>the name of its Responsible Person</strong> and the
                fire safety company&apos;s name. For each entry: the date and time, what was checked, the result,{' '}
                <strong>the name and role of the person who signed it</strong> (including the fire safety
                company&apos;s staff), and the call point or place tested as it was typed (up to 60 characters).
                Also corrections, and the company&apos;s visits and certificates.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The sticker page and its downloadable report <strong>never</strong> show phone numbers, email addresses,
        signature images, photos or anything written in a note. The only typed answers they show are which call point
        or place was tested (up to 60 characters), so please do not put personal details there. Where a fault was
        reported, they say only that details are held by the fire safety company.
      </p>
      <p>
        <strong>Please note:</strong> the sticker is usually in a place the public can reach, so anyone who scans it
        can see the name of the building&apos;s Responsible Person and the names and roles of everyone who signs
        entries.
      </p>
      {/* SOLICITOR: is showing the Responsible Person's name on the public sticker cover acceptable (it is shown
          today, InspectorBook cover plate)? The alternative is an app change to hide it, after which this line and
          the table row above change. */}
      {/* OWNER: before the demo-only gates on staff annotations and "accepted by" (mayCarryAnnotation,
          mayCarryAcceptedBy) are lifted, add a line here: the Annex H download can then carry names typed by staff
          for people who never use the logbook (signed by / agreed by / accepted by). Erasure on request for those
          names has no trigger yet. */}

      <h3>A saved copy of the sticker page</h3>
      <p>
        We keep a copy of exactly what the sticker page shows, so an inspector can still read the logbook if the
        live service is down. The copy holds nothing the sticker page does not show. It is updated within a few
        minutes of every change to the logbook, replaced when a new sticker is printed, and deleted if the fire
        safety company stops the logbook service.
      </p>
      <p>
        <strong>Anyone who has the sticker&apos;s link can read the saved copy at any time</strong>, not only when
        the live service is down, and those reads are not recorded in the access history.
      </p>

      <h2>Companies that help us</h2>
      <p>We use these service providers. Each acts only on our instructions under a written contract.</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className="border border-gray-200 px-4 py-2 text-left">Provider</th>
              <th className="border border-gray-200 px-4 py-2 text-left">What for</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Where your information is kept</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Vercel Inc.</td>
              <td className="border border-gray-200 px-4 py-2">
                Running the logbook website, storing photos and drawn signatures, and storing the saved copy of
                the sticker page
              </td>
              <td className="border border-gray-200 px-4 py-2">London, UK</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Neon Inc.</td>
              <td className="border border-gray-200 px-4 py-2">The logbook database</td>
              <td className="border border-gray-200 px-4 py-2">London, UK</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Resend Inc.</td>
              <td className="border border-gray-200 px-4 py-2">Sending emails, such as your invitation and reminders</td>
              <td className="border border-gray-200 px-4 py-2">Ireland (EU)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">The SMS Works Ltd</td>
              <td className="border border-gray-200 px-4 py-2">Sending text messages</td>
              <td className="border border-gray-200 px-4 py-2">UK</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Sentry (Functional Software Inc.)</td>
              <td className="border border-gray-200 px-4 py-2">Error reports, with personal details removed</td>
              <td className="border border-gray-200 px-4 py-2">Germany (EU)</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* OWNER / SOLICITOR: confirm the contract and data processing agreement with The SMS Works Ltd is signed,
          and that it keeps the data in the UK, before any real tenant or non-test number is admitted. */}
      <p>
        Some of these companies are based in the United States and may access information from there, for example
        for support. Where that happens, the transfer is protected by the UK International Data Transfer Addendum
        or the EU Standard Contractual Clauses with the UK Addendum.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>
          <strong>The logbook and its entries</strong> are kept for as long as the fire safety company uses{' '}
          {companyDetails.tradingName}. A fire safety logbook is a legal record that belongs to the building. If the
          company stops using {companyDetails.tradingName}, we will give the company, or the building&apos;s
          Responsible Person, a copy of the logbook (the Annex H logbook and the inspection report) before it is
          deleted.
          {/* OWNER: the copy is made by hand today from the Logbook tab downloads; the automated hand-over (triage
              D18) is not built. SOLICITOR: is "as long as the company uses Opscel" a definite enough retention
              period for storage limitation, given people can ask for their details to be erased (Deletion below)? */}
        </li>
        <li>
          <strong>Photos you added but did not send</strong> with an entry are deleted after 24 hours.
        </li>
        <li>
          <strong>Your link</strong> stops working after 30 days without use, or as soon as the company issues you
          a new one.
        </li>
        <li>
          <strong>Scrambled request counts</strong> are deleted after one day.
        </li>
        <li>
          <strong>The saved copy of the sticker page</strong> is replaced within a few minutes of each change, and
          deleted when the sticker is replaced or the logbook service stops. Internet caches may still serve a
          deleted copy for up to a minute.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        You have the right to see your information, to have it corrected, to ask for it to be deleted, to object to
        or restrict how it is used, and to receive a copy in a common format.
      </p>
      <p>Because entries are sealed, they cannot be edited:</p>
      <ul>
        <li>
          <strong>Corrections:</strong> the fire safety company corrects its own entries by adding a new entry that
          shows what changed and why; the original stays visible. If an entry you made is wrong, tell the fire safety
          company, who will record the correction.
          {/* SOLICITOR: is a correction recorded by the company enough for the right to rectification, or does a
              keeper correction feature need building first? Keepers cannot correct their own entries today. */}
        </li>
        <li>
          <strong>Deletion:</strong> once you no longer look after the building&apos;s logbook, you can ask for your
          name and personal details to be removed. We remove your name, mobile number, email address, your typed and
          drawn signatures, the details of where you were when you signed (the record keeps only whether you were on
          site) and the device details. Photos you added are removed too if you ask. The record then shows &quot;Name
          removed on request&quot;, and still proves the rest of the logbook is unchanged. What you wrote in your
          answers, notes and reasons stays part of the sealed record, because the building must keep its fire safety
          records. Quotes already made from a fault you reported are not changed, and emails or reports already sent
          or downloaded cannot be recalled. The saved copy of the sticker page is updated within a few minutes, so
          it may still show your name for a short time after your details are removed.
        </li>
      </ul>
      <p>
        To use any of these rights, contact the fire safety company or us at{' '}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. We reply within one month.
      </p>
      <p>
        If you are unhappy with how your information is handled, you can complain to the Information
        Commissioner&apos;s Office:{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        , 0303 123 1113.
      </p>

      <h2>Messages we send</h2>
      <p>
        The logbook contacts you by email: your invitation, a new link when you ask for one, and reminders when the
        weekly fire alarm test has not been recorded. If you have given a UK mobile number, a reminder may also come
        by text. Reminders are sent between 8am and 7pm. Every reminder email has a link to stop emails or texts. If
        we cannot reach you by email, the text itself has a link to stop texts. The duty to keep the building&apos;s
        records continues, so the company, your backup or the Responsible Person may still be contacted.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        If we change this notice we will update the date at the top. If a change affects you significantly, we will
        tell you through the logbook.
      </p>
      <p>
        <strong>23 November 2026:</strong> we now describe the reminder emails and texts, and added The SMS Works,
        which sends the texts. We also made clearer what the QR sticker page shows (including the Responsible
        Person&apos;s name), how entries are corrected, and what happens to the logbook if the fire safety company
        stops using {companyDetails.tradingName}.
      </p>
    </LegalPage>
  );
};

export default LogbookPrivacyPage;
