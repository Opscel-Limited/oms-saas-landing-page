import { Metadata } from 'next';
import Link from 'next/link';

import LegalPage from '@/components/LegalPage';
import { siteDetails } from '@/data/siteDetails';
import { companyDetails, getFormattedRegisteredAddress } from '@/data/companyDetails';

export const metadata: Metadata = {
  alternates: { canonical: '/logbook/privacy' },
  title: `Digital Fire Logbook Privacy Notice | ${siteDetails.siteName}`,
  description:
    'How the Opscel Digital Fire Logbook handles the information of keepers, backups, Responsible Persons and anyone who scans a logbook QR sticker.',
};

const cell = 'border border-gray-200 px-4 py-2 align-top';
const head = 'border border-gray-200 px-4 py-2 text-left';

const LogbookPrivacyPage: React.FC = () => {
  const privacyEmail = companyDetails.compliance.dataProtectionOfficerEmail;
  const name = companyDetails.tradingName;

  return (
    <LegalPage title="Digital Fire Logbook: Privacy Notice" lastUpdated="23 November 2026">
      <h2>1. About this notice</h2>
      <p>
        This notice explains how personal information is used in the {name} Digital Fire Logbook (the
        &quot;<strong>logbook</strong>&quot;). It is for people who use a logbook without an {name} account: people who
        keep the logbook for a building (&quot;<strong>keepers</strong>&quot;), their backups, Responsible Persons, and
        anyone who opens a logbook from its QR sticker, such as a fire inspector. If you also have an {name} account,
        our main <Link href="/privacy">Privacy Policy</Link> applies to that account.
      </p>
      <p>
        The &quot;<strong>Responsible Person</strong>&quot; is the person or organisation responsible for fire safety
        in the building under the Regulatory Reform (Fire Safety) Order 2005, such as the employer, the owner or the
        managing agent.
      </p>

      <h2>2. Who is responsible for your information</h2>
      <p>
        <strong>The fire safety company.</strong> A logbook is set up and kept by the fire safety company that looks
        after the building&apos;s fire alarm or emergency lighting. That company decides who is added to the logbook
        and what it is used for, so it is the <strong>controller</strong> of the information in it. The logbook shows
        the company&apos;s name.
      </p>
      <p>
        <strong>{companyDetails.registeredName}.</strong> {companyDetails.registeredName} (company number{' '}
        {companyDetails.companiesHouseNumber}, registered office {getFormattedRegisteredAddress()}) provides the logbook
        service to the fire safety company and handles the information in the logbook on its behalf, as its{' '}
        <strong>processor</strong>. We are registered with the Information Commissioner&apos;s Office (ICO) under
        registration number <strong>{companyDetails.compliance.icoRegistrationNumber}</strong>.
      </p>
      <p>
        We are a controller in our own right for a small amount of processing we do for our own purposes: keeping the
        logbook service secure and preventing misuse (for example, the request counts described in section 3), and
        dealing with messages you send to us.
      </p>
      <p>
        <strong>The Responsible Person.</strong> The Responsible Person may receive copies of the logbook, such as the
        downloadable inspection report. Once they hold a copy, they are responsible for how they use it.
      </p>
      <p>
        For questions about your information, contact the fire safety company first. You can also contact us at{' '}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. We will help, or pass your request to the company.
      </p>

      <h2>3. What information is used, and where it comes from</h2>

      <h3>From the fire safety company that added you</h3>
      <ul>
        <li>Your name and your role for the building (keeper, backup or Responsible Person).</li>
        <li>
          Your email address, which is needed to add you to a logbook, and your mobile number if the company has
          one for you.
        </li>
      </ul>

      <h3>When you use the logbook</h3>
      <ul>
        <li>
          <strong>Each test or event you record:</strong> what was checked, your answers, any note you add, the time you
          say it happened and the time it was recorded.
        </li>
        <li>
          <strong>Your signature:</strong> your typed name or a signature you draw on screen. It is attached to every
          entry you sign.
        </li>
        <li>
          <strong>Photos you choose to add</strong> (up to three per entry). Before a photo leaves your phone we shrink
          it and remove the hidden information inside it, including any location it contains. A photo can still show
          people or places, so please take care what you photograph.
        </li>
        <li>
          <strong>Your location, once, at the moment you sign</strong>, if you allow it. Your phone asks your permission,
          and you can say no; the entry is still recorded and simply says the location was not shared. We never track
          you. The sealed entry records only whether it was made on site. The position and its accuracy are kept
          separately, so that the fire safety company can check them.
        </li>
        <li>
          <strong>A sign-in cookie.</strong> Opening your link sets one cookie, which keeps you signed in on that device
          for up to 30 days after you last use it. It is strictly necessary for the logbook to work. The logbook uses no
          advertising or analytics cookies. See our <Link href="/cookies">Cookie Policy</Link>.
        </li>
        <li>
          <strong>Sign-in records:</strong> when you signed in, and a shortened description of the device and browser you
          used.
        </li>
        <li>
          <strong>Message records:</strong> which invitations, links and reminders were sent to you, whether they were
          delivered or bounced, and any choice you make to stop emails or texts.
        </li>
        <li>
          <strong>Access history:</strong> when you opened the logbook.
        </li>
      </ul>

      <h3>When someone opens the logbook from its QR sticker</h3>
      <ul>
        <li>We record that the logbook was viewed, or that a report was downloaded or checked, and when.</li>
        <li>Link previews (for example, when the link is pasted into a messaging app) can be counted as a view.</li>
        <li>
          <strong>We do not record who viewed the logbook, and we do not keep the viewer&apos;s internet (IP) address
          in readable form.</strong>
        </li>
        <li>
          To prevent misuse, we keep a scrambled (hashed) form of the internet address, with a count of requests, for up
          to one day. Our hosting provider also processes internet addresses briefly in order to deliver pages.
        </li>
      </ul>
      <p>
        The logbook is not designed to hold sensitive information, such as information about health. Please do not
        include it in notes, answers or photos.
      </p>

      <h2>4. Why the information is used, and the lawful basis</h2>
      <p>
        Data protection law requires a lawful basis for each use of personal information. The fire safety company relies
        on the following, and we rely on the same bases for the processing we do as a controller.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className={head}>Purpose</th>
              <th className={head}>Lawful basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cell}>
                Keeping the building&apos;s fire safety records: the entries, who signed them, and the corrections
              </td>
              <td className={cell}>
                <strong>Legitimate interests</strong>: those of the fire safety company and of the Responsible Person in
                keeping reliable records that show the building&apos;s fire safety measures are maintained and tested,
                in support of the Responsible Person&apos;s duties under the Regulatory Reform (Fire Safety) Order 2005. Where the Responsible Person keeps the
                logbook itself, it may rely on <strong>legal obligation</strong>.
              </td>
            </tr>
            <tr>
              <td className={cell}>
                Sealing entries with the signer&apos;s name and signature and whether the entry was made on site, so they
                cannot be quietly changed
              </td>
              <td className={cell}>
                <strong>Legitimate interests</strong>: making sure the record can be trusted by inspectors and others who
                rely on it.
              </td>
            </tr>
            <tr>
              <td className={cell}>Checking your location once, when you sign</td>
              <td className={cell}>
                <strong>Consent</strong>, given through your phone&apos;s permission prompt. You can refuse or withdraw it
                at any time in your phone or browser settings. Refusing never stops you making an entry.
              </td>
            </tr>
            <tr>
              <td className={cell}>
                Showing the public sticker page to anyone who scans the sticker (see section 5)
              </td>
              <td className={cell}>
                <strong>Legitimate interests</strong>: letting fire inspectors, enforcing authorities and others with an
                interest in the building see that tests were carried out, by whom, and who is responsible for fire safety
                there.
              </td>
            </tr>
            <tr>
              <td className={cell}>
                Sending your invitation, sign-in links and reminders when a test has not been recorded
              </td>
              <td className={cell}>
                <strong>Legitimate interests</strong>: making sure tests are carried out and recorded on time. These are
                service messages, not marketing.
              </td>
            </tr>
            <tr>
              <td className={cell}>
                Letting the fire safety company respond to faults you report
              </td>
              <td className={cell}>
                <strong>Legitimate interests</strong>: keeping the building&apos;s fire safety systems working.
              </td>
            </tr>
            <tr>
              <td className={cell}>
                Keeping you signed in, keeping the service secure and preventing misuse
              </td>
              <td className={cell}>
                <strong>Legitimate interests</strong>: running a secure service. The sign-in cookie is strictly necessary,
                so it does not need consent.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Where legitimate interests are relied on, the fire safety company is responsible for weighing those interests
        against your rights, and we provide it with information about how the logbook works to help it do so. You can
        ask the company, or us, for details, and you have the right to object (see section 9).
      </p>
      <p>
        Your email address is needed for you to be added to a logbook and to receive your link. Everything else you
        choose to provide, such as photos, notes and your location, is optional. We do not use your information for
        marketing, we do not sell it, and no decision with legal or similarly significant effects is made about you by
        automated means.
      </p>

      <h2>5. Who can see your information</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className={head}>Who</th>
              <th className={head}>What they can see</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cell}>
                <strong>The fire safety company</strong> that keeps the logbook
              </td>
              <td className={cell}>
                Everything in it, including the location detail, the message records, and the access history (when the
                logbook was viewed, downloaded or checked from the sticker, and when the keeper opened it). The access
                history does not show internet addresses or device details.
              </td>
            </tr>
            <tr>
              <td className={cell}>
                <strong>People invited to the logbook</strong> for the building
              </td>
              <td className={cell}>The entries and the photos attached to them.</td>
            </tr>
            <tr>
              <td className={cell}>
                <strong>Anyone who scans the QR sticker</strong> (for example, a fire inspector)
              </td>
              <td className={cell}>
                The building&apos;s name and address, <strong>the name of its Responsible Person</strong>, and the fire
                safety company&apos;s name. For each entry: the date and time, what was checked, the result,{' '}
                <strong>the name and role of the person who signed it</strong> (including the fire safety company&apos;s
                staff), and which call point or place was tested, as it was typed (up to 60 characters). It also shows
                corrections, and the company&apos;s visits and certificates.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Please note:</strong> the sticker is usually in a place the public can reach. Anyone who scans it can
        see the name of the building&apos;s Responsible Person, and the names and roles of everyone who signs entries.
      </p>
      <p>
        The sticker page and its downloadable report <strong>never</strong> show phone numbers, email addresses,
        signature images, photos, location details or anything written in a note. The only typed answers they show say
        which call point or place was tested, so please do not put anyone&apos;s personal details there. Where a fault
        was reported, they say only that the details are held by the fire safety company.
      </p>

      <h3>A saved copy of the sticker page</h3>
      <p>
        We keep a copy of exactly what the sticker page shows, so that an inspector can still read the logbook if the
        live service is down. The copy holds nothing that the sticker page does not show. It is updated within a few
        minutes of every change to the logbook, replaced when a new sticker is printed, and deleted if the fire safety
        company stops the logbook service. If the logbook for a single building is ended, its sticker page and saved
        copy stay readable until the logbook is deleted.
      </p>
      <p>
        <strong>Anyone who has the sticker&apos;s link can read the saved copy at any time</strong>, not only when the
        live service is down. Those reads are not recorded in the access history.
      </p>

      <h3>Others</h3>
      <p>
        We may disclose information where the law requires it, for example to a regulator or the police, or where it
        is needed to establish, exercise or defend legal claims. If the {name} business is sold or reorganised, the
        logbook service and its information may pass to the new owner, who must use it in the same way.
      </p>

      <h2>6. Service providers</h2>
      <p>
        We use the following service providers to run the logbook. Each acts only on our instructions, under a written
        contract that includes data protection terms.
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-hero-background">
              <th className={head}>Provider</th>
              <th className={head}>What for</th>
              <th className={head}>Where your information is kept</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cell}>Vercel Inc.</td>
              <td className={cell}>
                Running the logbook website, storing photos and drawn signatures, and storing the saved copy of the
                sticker page
              </td>
              <td className={cell}>London, UK</td>
            </tr>
            <tr>
              <td className={cell}>Neon Inc.</td>
              <td className={cell}>The logbook database</td>
              <td className={cell}>London, UK</td>
            </tr>
            <tr>
              <td className={cell}>Resend Inc.</td>
              <td className={cell}>Sending emails: invitations, sign-in links and reminders</td>
              <td className={cell}>Ireland (EU)</td>
            </tr>
            <tr>
              <td className={cell}>The SMS Works Ltd</td>
              <td className={cell}>Sending reminder texts</td>
              <td className={cell}>UK</td>
            </tr>
            <tr>
              <td className={cell}>Sentry (Functional Software Inc.)</td>
              <td className={cell}>Error reports, with personal details removed</td>
              <td className={cell}>Germany (EU)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>International transfers</h3>
      <p>
        Your information is stored in the UK and the EU. The UK recognises the EU as giving adequate protection. Some of
        these providers are based in the United States and may access information from there, for example to provide
        support. Where that happens, the transfer is protected by the UK Extension to the EU-US Data Privacy Framework
        (where the provider is certified under it), the UK International Data Transfer Agreement, or the EU Standard
        Contractual Clauses with the UK Addendum. You can ask us for details of these safeguards.
      </p>

      <h2>7. How long information is kept</h2>
      <ul>
        <li>
          <strong>The logbook, its entries, the message records and the access history</strong> are kept for as long as
          the fire safety company uses {name} for the building. A fire safety logbook is a record that belongs to the
          building and may be needed for years, so ending a logbook archives it rather than deleting it. The company
          can ask us to delete a logbook. When the company stops using {name}, it can download, or ask us to send to it
          or to the building&apos;s Responsible Person, a copy of the logbook (the Annex H logbook and the inspection
          report) for 30 days. We then delete the logbook within 90 days after the company stops using {name}, and
          remove it from backups within a further 90 days.
        </li>
        <li>
          <strong>Your name and contact details</strong> are kept until the logbook is deleted, or until they are removed
          at your request (see section 9).
        </li>
        <li>
          <strong>A choice to stop emails or texts</strong> is kept for as long as you are in the logbook, so that we keep
          respecting it.
        </li>
        <li>
          <strong>Photos you added but did not send</strong> with an entry are deleted after 24 hours.
        </li>
        <li>
          <strong>Your link</strong> stops working after 30 days without use. If you are sent a new link, the old one may
          keep working for up to 7 days, so that you are not locked out.
        </li>
        <li>
          <strong>Sign-in records</strong> are deleted 30 days after the sign-in expires.
        </li>
        <li>
          <strong>Scrambled request counts</strong> are deleted after one day.
        </li>
        <li>
          <strong>The saved copy of the sticker page</strong> is replaced within a few minutes of each change, and
          deleted when the sticker is replaced, the logbook is deleted, or the logbook service stops. Internet caches may still serve a deleted
          copy for up to a minute.
        </li>
      </ul>

      <h2>8. Keeping your information secure</h2>
      <p>
        Information is encrypted in transit and at rest, and access is limited to the fire safety company&apos;s
        authorised staff and to our staff who need it to run the service. Entries are sealed when they are signed, so any
        change would be detected. Photos and drawn signatures are held in private storage, not on the public sticker
        page. Please keep your link to yourself: anyone who has it can make entries in your name.
      </p>

      <h2>9. Your rights</h2>
      <p>You have the following rights. Some apply only in certain circumstances.</p>
      <ul>
        <li>
          <strong>Access:</strong> to ask for a copy of your information.
        </li>
        <li>
          <strong>Correction:</strong> to have inaccurate information corrected. Because entries are sealed, they are
          not edited. The fire safety company corrects an entry by adding a new entry that shows what changed and why,
          and the original stays visible. If an entry you made is wrong, tell the fire safety company, who will record
          the correction.
        </li>
        <li>
          <strong>Deletion:</strong> you can ask at any time for your name and personal details to be removed. If you
          still look after the building&apos;s logbook, the company will normally need to replace you first. We remove your name, mobile number and email address, your typed and
          drawn signatures, the details of where you were when you signed (the record keeps only whether you were on
          site) and the device details. Photos you added are removed too, if you ask. The record then shows &quot;Name
          removed on request&quot;, and it still proves that the rest of the logbook is unchanged. What you wrote in your
          answers, notes and reasons stays part of the sealed record, because the building must keep its fire safety
          records. Quotes already made from a fault you reported are not changed, and emails or reports already sent or
          downloaded cannot be recalled. The saved copy of the sticker page is updated within a few minutes, so it may
          still show your name for a short time after your details are removed.
        </li>
        <li>
          <strong>Objection:</strong> to object to processing based on legitimate interests. The processing will stop
          unless there are compelling legitimate grounds to continue, such as the building&apos;s need to keep reliable
          fire safety records, or it is needed for legal claims. If you object to your name appearing on the sticker
          page, tell the fire safety company: it can replace you as keeper and ask us to remove your name.
        </li>
        <li>
          <strong>Restriction:</strong> to ask for the use of your information to be limited, for example while its
          accuracy is checked.
        </li>
        <li>
          <strong>Portability:</strong> to receive information you provided in a common machine-readable format, where
          the processing is based on consent and carried out by automated means.
        </li>
        <li>
          <strong>Withdrawing consent:</strong> to withdraw your consent to the location check at any time, in your
          phone or browser settings. You can also ask for location details already stored to be deleted. The sealed
          entry keeps only whether it was made on site, as part of the fire safety record.
        </li>
      </ul>
      <p>
        To use any of these rights, contact the fire safety company, or us at{' '}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. We may need to confirm your identity first. We will reply
        within one month. If a request is complex, or there are several, we may extend this by up to two further months,
        and if so we will tell you why within the first month. There is normally no charge.
      </p>

      <h2>10. Messages the logbook sends</h2>
      <p>
        The logbook contacts you by email: your invitation, a new link when you ask for one, and reminders when the
        weekly fire alarm test has not been recorded. A reminder email also mentions any monthly check, such as the emergency
        lighting test, that has not been recorded. If you have given a UK mobile number, a reminder may also come by text. Reminders
        are sent only between 8am and 7pm. If the test is still not recorded, the backup and the Responsible Person are
        reminded too.
      </p>
      <p>
        Every reminder email has a link to stop emails or texts. If we cannot reach you by email, the text itself has a
        link to stop texts. Stopping emails does not start texts. The duty to keep the building&apos;s records
        continues, so the company, your backup or the Responsible Person may still be contacted.
      </p>

      <h2>11. Complaints</h2>
      <p>
        If you are unhappy with how your information is handled, please contact the fire safety company or us first, so
        that we can try to put it right. We will acknowledge a complaint within 30 days and tell you the outcome without
        undue delay. You also have the right to complain to the Information Commissioner&apos;s
        Office:{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        , 0303 123 1113.
      </p>

      <h2>12. Changes to this notice</h2>
      <p>
        If we change this notice, we will update the date at the top. If a change affects you significantly, we will
        tell you through the logbook.
      </p>
      <p>
        <strong>23 November 2026:</strong> we now describe the reminder emails and texts, and have added The SMS Works,
        which sends the texts. We have set out the lawful basis for each use of your information, and when we act as a
        controller ourselves. We have also made clearer what the QR sticker page shows (including the Responsible
        Person&apos;s name), how entries are corrected, how long information is kept, and what happens to the logbook
        if the fire safety company stops using {name}.
      </p>

      <h2>13. Contact us</h2>
      <p>
        {companyDetails.registeredName}, {getFormattedRegisteredAddress()}. Email:{' '}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
      </p>
    </LegalPage>
  );
};

export default LogbookPrivacyPage;
