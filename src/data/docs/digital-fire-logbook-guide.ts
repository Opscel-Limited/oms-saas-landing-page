import { IDocGuide } from '@/types';

// DRAFT, UNLISTED: the Digital Fire Logbook is not launched. This guide is imported directly by
// src/app/docs/digital-fire-logbook/page.tsx and is deliberately NOT registered in ./index.ts (that array feeds the
// /docs and /help search), nor in ../documentationGuides.ts (the /docs index, /help and the sitemap).
// LAUNCH: register it in ./index.ts and ../documentationGuides.ts, add a line to public/llms.txt, remove the
// noindex in the page's metadata, and resolve every `// OWNER:` comment below (the full list is in the PR body).
// Internal notes stay in TS comments only: content strings render as HTML, so an HTML comment would ship in the page source.
// TODO(screenshots): demo tenant only. Every screenshot marker below must be taken on the demo tenant.

export const digitalFireLogbookGuide: IDocGuide = {
    slug: 'digital-fire-logbook',
    title: 'Digital Fire Logbook - Support Guide',
    description: 'Set up and run Digital Fire Logbooks for your customers\' sites: the weekly fire alarm test and monthly emergency lighting test, keeper links and reminders, the QR sticker for inspectors, paper sheets, defects, automatic entries from your jobs and certificates, and the Annex H export.',
    lastUpdated: '2026-11-23',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: `<p class="mb-4">The <strong>Digital Fire Logbook</strong> is a logbook for a customer's site. The person on site who does the weekly test, the <strong>keeper</strong>, records the <strong>weekly fire alarm test</strong> and the <strong>monthly emergency lighting test</strong> on their phone. They use a private link. They do not need an Opscel account.</p>
<p class="mb-4">You start the logbook from the site's <strong>Logbook</strong> tab in Opscel, invite the keeper, and print a <strong>QR sticker</strong> for the panel. From then on you can see every entry, every missed test and every failed check. A failed check becomes a defect at the site. Your own completed jobs and issued certificates at the site go into the logbook on their own.</p>
<p class="mb-4">Entries are <strong>sealed</strong> when they are signed. Nobody can change or delete one later. Your team corrects its own entries with a new entry. Keeper entries cannot be corrected yet.</p>`,
            subsections: [
                {
                    title: 'Availability',
                    content: `<p>The Logbook tab shows for roles that can view logbooks (see <a href="#roles" class="text-secondary hover:underline">Who can do what</a>). Starting a logbook needs an active Opscel subscription. Each logbook is billed per site after a free period (see <a href="#billing" class="text-secondary hover:underline">Billing</a>).</p>`,
                },
                {
                    title: 'What this guide covers',
                    bullets: [
                        '<a href="#what-it-is" class="text-primary hover:underline">What the logbook is, and is not</a>',
                        '<a href="#roles" class="text-primary hover:underline">Who can do what</a>',
                        '<a href="#starting" class="text-primary hover:underline">Starting a logbook for a site</a>',
                        '<a href="#inviting" class="text-primary hover:underline">Inviting the keeper, and keeper links</a>',
                        '<a href="#reminders" class="text-primary hover:underline">Reminders by email and text</a>',
                        '<a href="#keeper-view" class="text-primary hover:underline">What your keeper sees</a>',
                        '<a href="#qr-sticker" class="text-primary hover:underline">The QR sticker and what an inspector sees</a>',
                        '<a href="#paper" class="text-primary hover:underline">No signal: paper sheets and "I did this earlier"</a>',
                        '<a href="#defects" class="text-primary hover:underline">Failed checks, defects and Needs attention</a>',
                        '<a href="#health" class="text-primary hover:underline">Keeping track: health and the Fire logbooks page</a>',
                        '<a href="#automatic-entries" class="text-primary hover:underline">Automatic entries from your jobs and certificates</a>',
                        '<a href="#your-entries" class="text-primary hover:underline">Adding your own entries, follow-ups and corrections</a>',
                        '<a href="#changes" class="text-primary hover:underline">Changing the checks, the test day or the people</a>',
                        '<a href="#exports" class="text-primary hover:underline">The inspection PDF and the Annex H export</a>',
                        '<a href="#pausing-ending" class="text-primary hover:underline">When logbooks are paused, and ending a logbook</a>',
                        '<a href="#billing" class="text-primary hover:underline">Billing</a>',
                        '<a href="#faq" class="text-primary hover:underline">FAQs</a>',
                    ],
                },
            ],
        },
        {
            id: 'what-it-is',
            title: 'What the Logbook Is, and Is Not',
            // OWNER: standards wording review pending. Confirm how this guide may describe what BS 5839-1, BS 5266-1 and the
            // Fire Safety (England) Regulations 2022 require. Terms 9A.2 says the logbook "helps a site keep the records that
            // BS 5839-1 and BS 5266-1 expect"; this guide stays with that wording.
            content: `<p class="mb-4">The logbook keeps the site's fire alarm records (BS 5839-1) and emergency lighting records (BS 5266-1) in one place. You can download it in the shape of the BS 5839-1:2025 Annex H model logbook.</p>
<p class="mb-4">It is a <strong>record-keeping tool</strong>. It does not certify that a building complies with any standard or law, and it is not fire safety advice. The fire risk assessment and the Responsible Person's duties stay with the Responsible Person. See section 9A of our <a href="/terms" class="text-secondary hover:underline">Terms</a>.</p>`,
            subsections: [
                {
                    title: 'The four checks',
                    content: `<p class="mb-4">A logbook holds up to four checks. Which ones depend on the systems you say the site has when you start it.</p>`,
                    table: {
                        headers: ['Check', 'How often', 'Done by', 'Comes with'],
                        rows: [
                            ['<strong>Weekly fire alarm test</strong>', 'Weekly, on the site\'s test day', 'The site (keeper)', 'A fire alarm system'],
                            ['<strong>Monthly emergency lighting test</strong>', 'Once each calendar month', 'The site (keeper)', 'Emergency lighting'],
                            ['<strong>Fire alarm service</strong>', 'Every 5 to 7 months', 'You (the contractor)', 'A fire alarm system'],
                            ['<strong>Emergency lighting annual test</strong>', 'Yearly', 'You (the contractor)', 'Emergency lighting'],
                        ],
                    },
                },
                {
                    title: 'Sealed entries',
                    content: `<p>Each entry is sealed when it is signed. A daily check confirms that nothing in the logbook has changed since. Entries cannot be edited or deleted. Your team corrects its own entries with a new entry that points at the one it corrects, and the original stays visible. Keeper entries cannot be corrected yet.</p>`,
                },
                {
                    title: 'Not covered yet',
                    content: `<p>Fire door checks under the Fire Safety (England) Regulations 2022 are not part of the logbook yet. When you start a logbook for a site in England, the start screen reminds you of this.</p>`,
                },
            ],
        },
        {
            id: 'roles',
            title: 'Who Can Do What',
            // OWNER: open question. Sales Manager holds logbooks.manage (D12), so can start logbooks and commit spend. Confirm
            // the Sales Manager row before launch.
            content: `<p class="mb-4">Three permissions control the logbook: <strong>view</strong>, <strong>manage</strong> (start, set up, people, invites, the QR sticker, archive) and <strong>sign</strong> (entries your team writes into the book). The built-in roles have these:</p>`,
            subsections: [
                {
                    title: 'Roles',
                    table: {
                        headers: ['Role', 'See logbooks', 'Start and manage', 'Add entries', 'Switch a check off or on'],
                        rows: [
                            ['<strong>Super Admin</strong>', 'Yes', 'Yes', 'Yes', 'Yes'],
                            ['<strong>Admin</strong>', 'Yes', 'Yes', 'Yes', 'Yes'],
                            ['<strong>Contract Manager</strong>', 'Yes', 'Yes', 'Yes', 'Yes'],
                            ['<strong>Accounts</strong>', 'Yes', 'Yes', 'No', 'No (can change the test day and time)'],
                            ['<strong>Sales Manager</strong>', 'Yes', 'Yes', 'No', 'No (can change the test day and time)'],
                            ['<strong>Site Manager</strong>', 'Yes', 'No', 'Yes', 'No'],
                            ['<strong>Viewer</strong>', 'Yes', 'No', 'No', 'No'],
                            ['<strong>Engineer</strong>', 'No', 'No', 'No', 'No'],
                        ],
                    },
                },
                {
                    title: 'Good to know',
                    bullets: [
                        'Starting a logbook commits your company to a monthly cost, so only roles that can manage logbooks can start one. The price shows when they start or archive a logbook.',
                        'Billing totals for logbooks are on <strong>Settings → Billing</strong>, for people who can manage billing.',
                        'Anyone who can see logbooks can open the inspector view and download the Annex H export.',
                    ],
                },
            ],
        },
        {
            id: 'starting',
            title: 'Starting a Logbook for a Site',
            // TODO(screenshots): demo tenant only. The empty Logbook tab with the Start logbook button.
            content: `<p class="mb-4">Open the site and go to the <strong>Logbook</strong> tab. It is near the end of the site's tabs, after Contacts and RAMS. A site without a logbook shows "No fire logbook for this site yet" and a <strong>Start logbook</strong> button.</p>`,
            subsections: [
                {
                    title: 'Before you start',
                    bullets: [
                        'The site needs a full address with a postcode. If it is missing, the start screen says so and links to <strong>Edit site details</strong>.',
                        'Your company needs an active Opscel subscription. Without one, starting is refused with a message that points to Settings → Billing. Logbooks you already have keep working.',
                        'Every person you add needs an <strong>email address</strong>. A mobile number is optional.',
                    ],
                },
                {
                    title: 'Step by step',
                    steps: [
                        '<strong>Setup.</strong> Answer "Does the site have a fire alarm system?" and "Does the site have emergency lighting?". Opscel suggests an answer when the site profile, an issued certificate or the site\'s assets show the system, and shows where the suggestion came from. With nothing on record, you must choose Yes or No yourself. At least one answer must be Yes.',
                        '<strong>Setup (continued).</strong> Pick the <strong>Test day</strong> and <strong>Test time</strong>. The weekly fire alarm test is due on this day each week. The monthly emergency lighting test can be done any time in the calendar month.',
                        // OWNER: "legally responsible" (the wizard's own copy) is part of the standards/regulations wording review.
                        '<strong>People.</strong> Add the <strong>Keeper</strong> (the person on site who does the weekly test) and the <strong>Responsible Person</strong> (usually the owner or manager legally responsible for fire safety). Optionally <strong>Add a backup person</strong> who covers the weekly test when the keeper is not available. Pick each person from the customer\'s contacts or type them in.',
                        '<strong>Review.</strong> Check the site, systems, testing schedule and people, then choose <strong>Start logbook</strong>.',
                    ],
                },
                {
                    title: 'Typing a person in',
                    content: `<p>If you type a person in by hand and you can create contacts, you can tick <strong>Also save as a contact for this customer</strong>. It is off by default. Choose at least one contact role. If a contact with the same name and email already exists for the customer, Opscel links that contact instead of making a second one.</p>`,
                },
                {
                    title: 'Nothing is sent yet',
                    // TODO(screenshots): demo tenant only. The Review step with the cost line.
                    content: `<p>Starting the logbook sends nothing to anyone. The logbook shows as <strong>Invited</strong> until the keeper sets it up. Next, invite the keeper from the People card (see the next section) and print the QR sticker.</p>`,
                },
                {
                    title: 'If starting does not finish',
                    content: `<p>The logbook is kept by a separate Opscel service. If that service does not confirm the start, the tab shows "Starting the logbook didn't finish". Your setup is saved. Choose <strong>Retry</strong>: it can never create two logbooks. If the service confirms it never received the start, <strong>Cancel start</strong> becomes available 15 minutes after the last attempt.</p>`,
                },
            ],
        },
        {
            id: 'inviting',
            title: 'Inviting the Keeper, and Keeper Links',
            content: `<p class="mb-4">The <strong>People</strong> card on the Logbook tab lists the keeper, the backup and the Responsible Person, each with a status:</p>`,
            subsections: [
                {
                    title: 'Invite statuses',
                    table: {
                        headers: ['Status', 'What it means', 'What you can do'],
                        rows: [
                            ['<strong>Not invited</strong>', 'No link has been issued.', '<strong>Invite</strong>'],
                            ['<strong>Link issued</strong>', 'A link was sent or copied. It has not been opened yet.', '<strong>Invite</strong> again'],
                            ['<strong>Link opened</strong>', 'The link has been opened. An email scanner can open links too, so this does not prove the person did.', '<strong>Replace link</strong>'],
                            ['<strong>Set up</strong>', 'The person has set up their logbook.', '<strong>Replace link</strong>'],
                            ['<strong>Link expired</strong>', 'The link has not been used for 30 days.', '<strong>Invite</strong>'],
                        ],
                    },
                },
                {
                    title: 'Sending the invite',
                    steps: [
                        'Choose <strong>Invite</strong> next to the person.',
                        'Choose <strong>Email invite</strong> to send it from your company name, or <strong>Copy invite link</strong> to send it yourself.',
                        'Opscel never stores or shows the link again after this. If it is lost, issue a new one.',
                    ],
                },
                {
                    title: 'A new link signs them out',
                    content: `<p>Issuing a new link stops the old one working and signs the person out on every device. Only use <strong>Replace link</strong> when someone has lost their link or it is not working.</p>`,
                },
                {
                    title: 'Activation',
                    content: `<p>The logbook becomes <strong>Active</strong> when the <strong>keeper</strong> sets it up, or when another site person who has set up records their first entry. A backup or Responsible Person only setting up does not activate it, and nor does an entry from your team. The free period and the missed-test count start from activation.</p>`,
                },
                {
                    title: 'If the keeper loses the link',
                    // OWNER: same note as the Reminders section. "Email me a new link" runs behind the same gate as the reminders
                    // (it sends nothing while that gate is off or in dry run), so it is not live until reminders are.
                    content: `<p>A link keeps working while it is used and stops after 30 days without use. The keeper can ask for a new one themselves: the page an expired or replaced link opens has <strong>Email me a new link</strong>. They enter the email address on the logbook and a new link is sent there. You can also send a new invite from the People card.</p>`,
                },
            ],
        },
        {
            id: 'reminders',
            title: 'Reminders by Email and Text',
            // OWNER: reminders and texts are built but not yet live. The Digital Fire Logbook Privacy Notice still says
            // reminders and texts will be added later, and lacks The SMS Works in its provider table. Update the notice before
            // this section is published, or hold the section.
            content: `<p class="mb-4">When the weekly fire alarm test is not recorded, the logbook reminds the site. Each reminder carries a fresh link; the email says the test takes about 20 seconds to record. After a reminder, the previous link and its sign-ins keep working for 7 days, then stop.</p>
<p class="mb-4">Reminders only go for an <strong>Active</strong> logbook with the weekly fire alarm test switched on. A logbook with only emergency lighting gets no reminders. The week the logbook becomes active never counts.</p>`,
            subsections: [
                {
                    title: 'The reminder ladder',
                    table: {
                        headers: ['When', 'Who', 'How'],
                        rows: [
                            ['<strong>First reminder</strong>: the test day, at the test time', 'Keeper', 'Email (a text if there is no working email)'],
                            ['<strong>Second reminder</strong>: one day later', 'Keeper', 'Email, and a text to a UK mobile'],
                            ['<strong>Third reminder</strong>: two days later', 'Backup and Responsible Person', 'Email (a text if there is no working email)'],
                            ['<strong>Three days late</strong>', 'You', 'The logbook turns <strong>Overdue</strong> in Opscel (see <a href="#health" class="text-secondary hover:underline">Keeping track</a>). This is not a message.'],
                        ],
                    },
                },
                {
                    title: 'Rules the reminders follow',
                    bullets: [
                        '<strong>Quiet hours:</strong> reminders are only sent between 08:00 and 19:00 UK time.',
                        'Reminders follow the weekly fire alarm test. If the monthly emergency lighting test has not been recorded yet that month, the reminder email says so too.',
                        'Once the test is recorded, no more reminders go for that week. A reminder is not sent while the keeper is using the logbook.',
                        '<strong>Texts</strong> go to UK mobile numbers only, at most 3 per site in 7 days.',
                        'Every reminder email has a link to stop emails or texts. Someone who stops emails is not sent texts instead.',
                        'If an email bounces permanently, the logbook stops emailing that address.',
                    ],
                },
                {
                    title: 'The Reminders log',
                    content: `<p>Open <strong>Reminders</strong> on the Logbook tab to see each reminder: which one it was, who it went to, by email or text, and what happened (for example <strong>Sent</strong>, <strong>Delivered</strong>, <strong>Bounced</strong>, <strong>Check was done</strong> or <strong>Cap reached</strong>). It also shows when the reminder service last ran.</p>`,
                },
            ],
        },
        {
            id: 'keeper-view',
            title: 'What Your Keeper Sees',
            // TODO(screenshots): demo tenant only. The keeper's Due now screen and a check screen, on a phone.
            content: `<p class="mb-4">The keeper uses the logbook in their phone's browser, from their link. They do not need an Opscel account or an app.</p>`,
            subsections: [
                {
                    title: 'First time',
                    steps: [
                        'A short notice explains what is recorded, with a link to the <a href="/logbook/privacy" class="text-secondary hover:underline">Digital Fire Logbook Privacy Notice</a>. They choose <strong>I understand</strong>.',
                        'They type their name as their signature, or choose <strong>Draw instead</strong>.',
                        'They choose <strong>Start my logbook</strong>.',
                    ],
                },
                {
                    title: 'Every week',
                    bullets: [
                        '<strong>Due now</strong> shows a card for each site check, marked <strong>Due now</strong>, <strong>Overdue</strong>, <strong>Done</strong> or <strong>Not due yet</strong>. They choose <strong>Record the test</strong>.',
                        'The fire alarm test asks which call point they tested, whether the alarm sounded and whether the panel reset. The emergency lighting test asks whether every emergency light came on, and where they tested.',
                        'If a check fails, they are asked what happened and can add up to 3 photos. They are told: "It\'s recorded for [your company] to see. If it\'s urgent, call them now."',
                        '<strong>Log something</strong> records a false alarm, a fault or damage, a fire drill, staff training, a fire or evacuation, or something else.',
                        'The <strong>Book</strong> tab shows the logbook\'s entries.',
                        'Their location is checked once, when they sign, to show whether the entry was made on site. Their phone asks first, and they can say no.',
                    ],
                },
                {
                    title: 'What they cannot do',
                    bullets: [
                        'Change or delete an entry once it is signed.',
                        'See other people\'s contact details or typed signatures.',
                        'Change the logbook\'s checks, schedule or people. Those are yours.',
                    ],
                },
            ],
        },
        {
            id: 'qr-sticker',
            title: 'The QR Sticker and What an Inspector Sees',
            // TODO(screenshots): demo tenant only. The QR sticker card, and the inspector Summary page.
            content: `<p class="mb-4">The <strong>QR sticker</strong> card on the Logbook tab prints a sticker for the fire alarm panel. A fire officer or inspector scans it to read the logbook. They need no login, and nothing can be changed from that page.</p>`,
            subsections: [
                {
                    title: 'Printing the sticker',
                    steps: [
                        'Choose <strong>Print QR sticker</strong>. Opscel makes an A4 PDF with one sticker on it.',
                        'Cut along the dashed line and fix the sticker next to the fire alarm panel.',
                        'The same PDF includes a paper record sheet for each check the logbook holds (see the next section).',
                    ],
                },
                {
                    title: 'Replacing a sticker',
                    content: `<p>Choose <strong>Print a new sticker</strong> if one is lost or damaged. The old sticker stops working at once: scanning it says "This sticker was replaced". Put the new one up in its place. You can still print a sticker for an archived logbook.</p>`,
                },
                {
                    title: 'What the inspector sees',
                    bullets: [
                        'The site, the <strong>Responsible Person\'s name</strong> and your company name.',
                        'A <strong>Summary</strong>: the last time each site check was recorded and its result, missed weeks or months, how many different call points were tested in the last 12 weeks, your last visit and whether the logbook passed its integrity check.',
                        'Each entry\'s date and time, what was checked, the result, and the name and role of the person who signed it. That includes your staff\'s names and roles on entries they sign. Corrections are marked.',
                        'The keeper\'s typed answer to "Which call point did you test?" or "Where did you test?" (the first 60 characters).',
                        'Your visits and certificates that went into the logbook automatically.',
                        '<strong>Never shown:</strong> notes, reasons, contact details, signatures or photos. Where a detail is held back, the page says "Details held by the contractor."',
                    ],
                },
                {
                    title: 'Downloads and checking a printout',
                    content: `<p>From the sticker page the inspector can download a PDF of the last 3, 6, 12 or 24 months. It shows what the page shows, with a code on every line and an export code in the footer. They can enter an export code on the sticker page to check that the logbook is unchanged since that export, then compare a printed line with the live entry it shows. The code checks the logbook, not the printout itself. Downloads and checks are logged.</p>`,
                },
                {
                    title: 'If the live logbook is down',
                    content: `<p>Opscel keeps a saved copy of exactly what the sticker page shows. If the live logbook is unavailable, the sticker page shows the saved copy, with a banner giving its time. Checking codes and downloading the PDF come back when the live logbook does.</p>`,
                },
                {
                    title: 'See it as an inspector does',
                    content: `<p>Choose <strong>Open as inspector</strong> to open the same view in a new tab, marked as a staff preview. Your team's views in Opscel are not listed in who has looked.</p>`,
                },
                {
                    title: 'Who has looked',
                    content: `<p>Open <strong>Who has looked at this logbook</strong> on the Logbook tab to see when someone used the QR sticker to view the logbook, download a PDF or check a code, and when site contacts opened it. Link previews (for example when the link is pasted into a message) can count as a view. Each visitor is listed at most once an hour.</p>`,
                },
            ],
        },
        {
            id: 'paper',
            title: 'No Signal: Paper Sheets and "I Did This Earlier"',
            content: `<p class="mb-4">There is often no phone signal at a fire alarm panel. The logbook is built for that.</p>`,
            subsections: [
                {
                    title: '"I did this earlier"',
                    content: `<p>The keeper can record a test after the event with <strong>I did this earlier</strong>, giving the date and time they did it. The logbook shows the date they did the test. If it is added more than a day later, it is marked <strong>Recorded late</strong>. That is expected.</p>`,
                },
                {
                    title: 'Paper record sheets',
                    content: `<p>The QR sticker PDF has a paper record sheet for each check the logbook holds: 13 lines for the weekly fire alarm test and 12 for the monthly emergency lighting test. To print just the sheets, choose <strong>Print paper sheets</strong> on the QR sticker card. This does not change the sticker on the wall.</p>`,
                },
                {
                    title: 'What the sheet tells the keeper',
                    steps: [
                        'Do the test as usual and fill in one line straight away.',
                        'Later, open the logbook link, choose the check, tap <strong>I did this earlier</strong> and copy in the line. Then tick it as added.',
                        'If the alarm did not sound, the panel did not reset or an emergency light did not come on, call your company now. A line on paper does not tell you.',
                        'Keep the sheet with the site\'s fire safety records. It shows who did the test.',
                    ],
                },
                {
                    title: 'Good to know',
                    bullets: [
                        'Sheets carry no QR code and no link, so they are safe to photocopy and keep working after a sticker is replaced.',
                        'A "No" on paper raises no defect until it is entered in the logbook.',
                        'You can print sheets while logbooks are paused, when paper is the only record.',
                    ],
                },
            ],
        },
        {
            id: 'defects',
            title: 'Failed Checks, Defects and Needs Attention',
            content: `<p class="mb-4">When the keeper answers No to a check question, Opscel raises a <strong>defect</strong> at the site, one per failed question.</p>`,
            subsections: [
                {
                    title: 'Severity',
                    table: {
                        headers: ['Failed answer', 'Defect severity'],
                        rows: [
                            ['The alarm did not sound', '<strong>Critical</strong>'],
                            ['The panel did not reset to normal', '<strong>Major</strong>'],
                            ['An emergency light did not come on', '<strong>Major</strong>'],
                        ],
                    },
                },
                {
                    title: 'Where the defect shows',
                    bullets: [
                        'On the site\'s <strong>Deficiencies</strong> tab, marked as logged via the logbook, with the keeper\'s name and role.',
                        'On the Logbook tab, under <strong>Open defects from the logbook</strong>.',
                        'On the next job sheet of the same service type at the site, as a carried-forward defect.',
                        'In <strong>Needs Attention</strong> on your dashboard, while it has no quote or job: up to 3, critical first.',
                        'A <strong>critical</strong> defect is also emailed to your company email address, if one is set in your company details.',
                    ],
                },
                {
                    title: 'Acting on it',
                    // TODO(screenshots): demo tenant only. Open defects from the logbook with its buttons.
                    content: `<p>Under <strong>Open defects from the logbook</strong>, choose <strong>Create quote</strong>, <strong>Link existing quote</strong> or <strong>Create job</strong>. Once a defect has a quote or a job, the tab links to it instead. A job created this way always carries the defect on its job sheet.</p>`,
                },
            ],
        },
        {
            id: 'health',
            title: 'Keeping Track: Health and the Fire Logbooks Page',
            content: `<p class="mb-4">Every active logbook has a <strong>health</strong>, shown on the Logbook tab, on the <strong>Fire logbooks</strong> card on your dashboard and on the Fire logbooks page.</p>`,
            subsections: [
                {
                    title: 'Health',
                    table: {
                        headers: ['Health', 'Means'],
                        rows: [
                            ['<strong>Overdue</strong>', 'A weekly or monthly site check is 3 or more days late, or a contractor service is past its window.'],
                            ['<strong>Needs attention</strong>', 'A site check is up to 2 days late, or a defect raised from the logbook is still open.'],
                            ['<strong>On track</strong>', 'Every check is up to date.'],
                            ['<strong>Not started</strong>', 'The site has not accepted the logbook yet.'],
                            ['<strong>Not up to date</strong>', 'Opscel could not check this logbook in the last 30 minutes.'],
                        ],
                    },
                },
                {
                    title: 'The Fire logbooks page',
                    content: `<p>Open it from the dashboard's <strong>Fire logbooks</strong> card, or <strong>All logbooks</strong> on any site's Logbook tab. It lists every logbook, most behind first, with health, next due, last entry, open defects and lifecycle. Search by site, customer or postcode, and filter by health.</p>`,
                },
                {
                    title: 'Needs Attention',
                    bullets: [
                        'Open defects from logbooks that have no quote or job yet, at most 3, critical first.',
                        'Logbooks with a site check 3 or more days late: one item for a single site, or "N logbooks overdue" linking to the Fire logbooks page.',
                        'False alarms and other entries that still need a follow-up (see <a href="#your-entries" class="text-secondary hover:underline">Record what was done</a>).',
                    ],
                },
                {
                    title: 'Your own due dates',
                    content: `<p>The <strong>Checks</strong> card on the Logbook tab shows your fire alarm service and emergency lighting annual test with "Next due by" or "Overdue since" a date. Due dates count from your last recorded visit, or from when the logbook started if there is none.</p>`,
                },
                {
                    title: 'If a logbook fails its integrity check',
                    content: `<p>The tab shows "This logbook failed its integrity check". It is not caused by anything your team did, and Opscel is alerted automatically. Exports are paused until it is fixed, so do not hand out printed copies as proof of testing. Keep recording checks as normal.</p>`,
                },
            ],
        },
        {
            id: 'automatic-entries',
            title: 'Automatic Entries from Your Jobs and Certificates',
            content: `<p class="mb-4">Opscel adds entries to an active logbook from your own work at the site. They are signed "Opscel (automatic)" and record facts such as the job or certificate number, the certificate type and the dates. They never include an engineer's name or free text.</p>`,
            subsections: [
                {
                    title: 'What goes in',
                    table: {
                        headers: ['Your record', 'Logbook entry'],
                        rows: [
                            ['A completed fire alarm service job (a fire alarm service sheet counts once its job is completed), or an issued fire alarm service certificate', '<strong>Contractor visit</strong> for the fire alarm service'],
                            ['An issued emergency lighting certificate for an annual test', '<strong>Contractor visit</strong> for the emergency lighting annual test'],
                            ['Other completed fire jobs (including sprinkler and riser jobs, and fire jobs on the Basic sheet) and issued fire certificates (fire alarm, emergency lighting, extinguisher)', '<strong>Contractor visit</strong> (ad-hoc)'],
                            ['An issued fire alarm design, installation, commissioning, service or modification certificate that records variations', '<strong>Variation</strong>'],
                            ['An issued fire alarm commissioning certificate with cause and effect results', '<strong>Cause and effect programming</strong>'],
                        ],
                    },
                },
                {
                    title: 'Certificates come through their job',
                    content: `<p>A certificate is added only through its job at the site. A certificate not raised from a job at the site is not added.</p>`,
                },
                {
                    title: 'When a logbook starts',
                    content: `<p>When a logbook first becomes active, Opscel looks back for your last fire alarm service (up to 14 months) and your last emergency lighting annual test (up to 24 months) at the site, and adds them. These entries are marked <strong>From Opscel records</strong>. A site last serviced 8 months ago will show its service as overdue from day one.</p>`,
                },
                {
                    title: 'When your record changes',
                    content: `<p>Opscel checks again every few minutes. If a job is reopened or a certificate is voided or superseded, Opscel withdraws the entry with a new automatic correction. Your team cannot correct an automatic entry by hand: fix the job or certificate instead.</p>`,
                },
                {
                    title: 'False alarms on the certificate',
                    content: `<p>When an engineer fills in a fire alarm service certificate at a site with an active logbook, the false alarm field can show how many false alarms the logbook records for the last 12 months. It shows only when the logbook has a whole year on record.</p>`,
                },
            ],
        },
        {
            id: 'your-entries',
            title: 'Adding Your Own Entries, Follow-ups and Corrections',
            content: `<p class="mb-4">Roles that can add entries see <strong>Add entry</strong> on the Logbook tab. The dialog asks "What are you recording?":</p>`,
            subsections: [
                {
                    title: 'Entry types',
                    table: {
                        headers: ['Type', 'Use it for'],
                        rows: [
                            ['<strong>Contractor visit</strong>', 'A service or inspection visit. Pick the <strong>Check</strong> it was for, or <strong>Ad-hoc visit</strong>.'],
                            ['<strong>Event</strong>', 'A false alarm, fault, drill, training and so on. A false alarm needs its category.'],
                            ['<strong>Variation</strong>', 'Something agreed that differs from the standard. Add who agreed it in <strong>Agreed by</strong>; that name is kept apart from the sealed entry.'],
                            ['<strong>Correction</strong>', 'Correct an earlier entry made by your team.'],
                        ],
                    },
                },
                {
                    title: 'Good to know',
                    bullets: [
                        'Leave <strong>When</strong> empty to record it as now. An entry cannot be dated in the future.',
                        'Some types ask the 2025 model logbook questions, such as zone, device and cause for a false alarm.',
                        'Your team\'s entries never activate a logbook.',
                    ],
                },
                {
                    title: 'Record what was done',
                    content: `<p>Some entries want a follow-up: a false alarm where "Is a maintenance visit needed?" was Yes, or an event with an action required. These show <strong>Record what was done</strong> on the Logbook tab, and on the keeper's Book tab. It opens a follow-up entry linked to the original, where you record what was found, any further action and the date the action was completed. Until a follow-up is recorded, the entry also shows in Needs attention.</p>`,
                },
                {
                    title: 'Corrections',
                    steps: [
                        'Choose <strong>Add entry</strong>, then <strong>Correction</strong>.',
                        'Pick the <strong>Entry to correct</strong>. Only entries made by your team are listed.',
                        'Say <strong>Why it\'s being corrected</strong> and <strong>What it should say</strong>.',
                        'The original stays in the logbook, marked as corrected. The inspector sees that it was corrected, but not your reason or wording.',
                    ],
                },
            ],
        },
        {
            id: 'changes',
            title: 'Changing the Checks, the Test Day or the People',
            subsections: [
                {
                    title: 'Edit checks',
                    content: `<p>On the <strong>Checks</strong> card, choose <strong>Edit checks</strong>. You can change the test day and time, and switch a site check off or on. Every switch needs a reason, and is recorded in the logbook with it. Your own checks (the service and the annual test) cannot be switched off here.</p>`,
                    bullets: [
                        'A new test day takes effect this week if neither the old nor the new day has ended yet, otherwise from next week. Weeks already missed keep their dates.',
                        'Any week a check was missed before it was switched off shows as overdue again when you switch it back on.',
                        'Only a Super Admin, Admin or Contract Manager can switch a check off or on. The dialog says "Only an Admin or Contract Manager can switch a check off or on."',
                    ],
                },
                {
                    title: 'People',
                    content: `<p>On the <strong>People</strong> card, use <strong>Change</strong> next to a person:</p>`,
                    bullets: [
                        '<strong>Replace…</strong> puts someone new in the role. The old person is signed out and no longer reminded. The new person needs an invite.',
                        '<strong>Edit details…</strong> corrects a name, mobile or email. A name can only change before the person has set up; after that, replace them. Editing someone who has not set up yet stops the invite already sent, so send a new one.',
                        '<strong>Remove…</strong> takes off the backup person. The keeper and Responsible Person can only be replaced.',
                        '<strong>Add a backup person</strong> shows when there is none.',
                        'Who keeps the logbook is recorded in it, for example "Keeper changed". Contact details are not.',
                    ],
                },
            ],
        },
        {
            id: 'exports',
            title: 'The Inspection PDF and the Annex H Export',
            content: `<p class="mb-4">There are two ways to print a logbook. They are for different readers.</p>`,
            subsections: [
                {
                    title: 'Which one',
                    table: {
                        headers: ['', 'Inspection PDF', 'Annex H logbook'],
                        rows: [
                            ['<strong>Who gets it</strong>', 'Anyone with the QR sticker', 'Your team, from the Logbook tab'],
                            ['<strong>Shape</strong>', 'The sticker page, with a code on every line', 'The BS 5839-1:2025 Annex H model logbook: front page, events, false alarms, maintenance work, cause and effect and agreed variations'],
                            ['<strong>Names and notes</strong>', 'Names and roles of signers; never notes', 'Includes names and notes'],
                            ['<strong>Covers</strong>', 'The last 3, 6, 12 or 24 months', 'The whole logbook'],
                        ],
                    },
                },
                {
                    title: 'Downloading the Annex H logbook',
                    // OWNER: "It is the fire alarm logbook" describes BS 5839-1 Annex H's scope; include in the wording review.
                    content: `<p>On the Logbook tab, choose <strong>Download Annex H logbook</strong>. Because it includes names and notes, keep it with the site's fire safety records. It is the fire alarm logbook, so emergency lighting tests are not in its tables; they stay in the logbook and on the sticker page. A logbook that fails its integrity check cannot be exported.</p>`,
                },
                {
                    title: 'The front page',
                    content: `<p>The Annex H front page shows the Responsible Person, your company, the end date of the site's service contract, a phone number for maintenance, your maximum attendance time and expendable parts with when to replace them. Set your company's defaults in <strong>Settings → Logbook front page</strong> (this needs permission to edit settings). To set different values for one site, open <strong>Front page</strong> on its Logbook tab.</p>`,
                },
                {
                    title: 'Older logbooks',
                    content: `<p>Logbooks move to the 2025 model format automatically. The change is recorded as an entry, "Logbook updated to the 2025 model format". Entries made before it keep the questions they were made with.</p>`,
                },
            ],
        },
        {
            id: 'pausing-ending',
            title: 'When Logbooks Are Paused, and Ending a Logbook',
            subsections: [
                {
                    title: 'Paused by Opscel',
                    content: `<p>Opscel can pause the logbook service for everyone, for example during maintenance. The tab then shows "Logbooks are paused by Opscel". You and inspectors can still read every logbook and print paper sheets. Nothing can be written. The keeper is asked to write tests down and add them later with "I did this earlier".</p>`,
                },
                {
                    title: 'Pauses never count against the site',
                    content: `<p>A test due during a pause gets a catch-up day after it ends, so it is not overdue while the logbook could not be used. The logbook records the pause as an entry. The sticker page shows a check missed during a pause as not recorded because of the pause, never as missed.</p>`,
                },
                {
                    title: 'Ending a logbook',
                    steps: [
                        'On the Logbook tab, choose <strong>Archive</strong>.',
                        'Give a <strong>Reason</strong> and choose <strong>Archive logbook</strong>.',
                        'The logbook becomes read-only and stays on record. Inspectors can still read it from the sticker. This cannot be undone.',
                        'To keep using a logbook at the site, choose <strong>Start a new logbook</strong>.',
                    ],
                },
                {
                    title: 'Logbooks cannot be deleted',
                    // OWNER: retention and hand-over wording; the privacy notice describes a hand-over that is planned, not built.
                    content: `<p>You cannot delete a logbook. It is kept for as long as you use Opscel (see the <a href="/logbook/privacy" class="text-secondary hover:underline">Privacy Notice</a>). A site address with a logbook, even an archived one, cannot be deleted.</p>`,
                },
            ],
        },
        {
            id: 'billing',
            title: 'Billing',
            // OWNER: confirm the price and trial terms before launch: £1.50 per logbook per month, the site's first 30 days
            // free from activation, once per site. Open: is £1.50 ex- or inc-VAT, and should the copy say "+ VAT"? Terms 9A
            // deliberately states no price, and logbook billing is not switched on yet.
            content: `<p class="mb-4">Each logbook is billed per site, monthly, on your Opscel bill.</p>`,
            subsections: [
                {
                    title: 'What it costs',
                    bullets: [
                        'A site\'s first <strong>30 days are free</strong>, counted from when the logbook becomes active (usually when the keeper sets it up). Then it is <strong>£1.50 per month</strong> from your next Opscel bill.',
                        'A logbook that is not active yet (still Invited) is not billed.',
                        'The free period is once per site. Archiving a logbook and starting a new one at the same site does not restart it.',
                        'During your own Opscel trial, logbooks are included free. Billing starts when your trial ends.',
                    ],
                },
                {
                    title: 'Cancelling',
                    content: `<p>Archiving a logbook stops its billing from the next Opscel bill after it is processed, within about an hour. A bill raised close to your renewal date may still include it. An archived logbook stays readable and exportable for free.</p>`,
                },
                {
                    title: 'Seeing what is billed',
                    content: `<p>On <strong>Settings → Billing</strong>, the <strong>Digital fire logbooks</strong> card shows which sites are in their free trial, which are past it, what is billed and when your next bill is. Choose a past invoice to see the sites billed on it.</p>`,
                },
            ],
        },
        {
            id: 'faq',
            title: 'FAQs',
            subsections: [
                {
                    title: 'Does the keeper need an Opscel account?',
                    content: `<p>No. They use their own private link in a phone browser. Backups and Responsible Persons are the same.</p>`,
                },
                {
                    title: 'Can we fix a mistake in an entry?',
                    content: `<p>Not by editing it: entries are sealed. Your team can correct its own entries with a <strong>Correction</strong> entry. For an automatic entry, fix the job or certificate in Opscel. Keepers cannot correct their entries yet.</p>`,
                },
                {
                    title: 'The logbook service is unavailable. Is anything lost?',
                    content: `<p>No. The logbook is kept by a separate Opscel service. If it is not answering, the tab says "Logbook service unavailable — entries are safe" and shows the logbook as last loaded. Inspectors see the saved copy from the sticker. Try again in a few minutes.</p>`,
                },
                {
                    title: 'Someone wants their details removed from a logbook.',
                    content: `<p>Contact us. Requests are handled as set out in section 9A.5 of our <a href="/terms" class="text-secondary hover:underline">Terms</a> and in the <a href="/logbook/privacy" class="text-secondary hover:underline">Digital Fire Logbook Privacy Notice</a>. The person must first be replaced or removed from the logbook. Removing them takes out their name, contact details and signatures; their answers and notes stay in the sealed record. Your staff's names on entries they signed cannot be removed.</p>`,
                },
                {
                    title: 'Does a failed check alert us?',
                    content: `<p>Yes. It raises a defect and shows in Needs attention. A critical defect, such as an alarm that did not sound, is also emailed to your company email address if one is set. The keeper is told to call you if it is urgent.</p>`,
                },
                {
                    title: 'Can the site still use a paper logbook?',
                    content: `<p>Yes. Records from before the logbook started stay in the site's previous logbook; the sticker page says when the digital logbook started. When the phone cannot be used, the keeper fills in the paper sheet and adds the test later with "I did this earlier".</p>`,
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Fire Safety Jobsheets & Fault Tracking',
            description: 'Combined BS 5839 and BAFE SP203 jobsheets, the site Panels list and carried-forward faults.',
            href: '/docs/fire-safety-features',
        },
        {
            title: 'Defects to Quotation',
            description: 'Turn defects into quotes and remedial jobs.',
            href: '/docs/defects-to-quotation',
        },
        {
            title: 'Certificates Guide',
            description: 'How certificates are raised, numbered, signed and issued.',
            href: '/docs/certificates',
        },
        {
            title: 'Team Management',
            description: 'Roles and what each one can do.',
            href: '/docs/team-management',
        },
        {
            title: 'Digital Fire Logbook Privacy Notice',
            description: 'How the logbook handles the information of keepers, backups, Responsible Persons and anyone who scans the sticker.',
            href: '/logbook/privacy',
        },
    ],
};
