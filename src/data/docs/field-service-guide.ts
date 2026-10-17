import { IDocGuide } from '@/types';
import { clip } from '@/data/videos';

export const fieldServiceGuide: IDocGuide = {
    slug: 'field-service',
    title: 'Field Service App — Engineer\'s Day',
    description: 'Complete guide to using the Opscel field service PWA for engineers. Learn how to manage jobs, capture work, and sync data offline.',
    lastUpdated: '2026-10-17',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            content: `
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h3 class="font-bold text-lg mb-2">The 30-Second Version</h3>
                    <p class="text-gray-800">
                        The Opscel Field Service App is an <strong>offline-first Progressive Web App (PWA)</strong> designed for field engineers.
                        It lets you manage your daily jobs, capture photos and signatures, fill worksheets, log defects and parts, and complete
                        work summaries—all while offline. Data syncs automatically when you're back online.
                    </p>
                    <p class="text-gray-800 mt-3">
                        <strong>Who it's for:</strong> Field engineers, service technicians, and field managers<br/>
                        <strong>Where it lives:</strong> Install as a PWA from your browser (Chrome, Safari, Android)<br/>
                        <strong>Key benefit:</strong> Work anywhere without connectivity, sync seamlessly when online
                    </p>
                </div>
                <p class="mb-4">The field app is your mobile command center for:</p>
            `,
            subsections: [
                {
                    title: 'Key Capabilities',
                    video: clip('on-site-to-invoice'),
                    content: '',
                    bullets: [
                        'Viewing today\'s jobs and weekly schedule',
                        'GPS-tracked check-in and departure',
                        'Photo capture with five categories and descriptions',
                        'Engineer and customer signature collection',
                        'Multi-section worksheets and checklists',
                        'Defect logging with severity levels',
                        'Parts recording with pricing',
                        'Work summary and job completion',
                        'Complete offline functionality with automatic sync'
                    ]
                }
            ]
        },
        {
            id: 'installing-pwa',
            title: 'Installing the PWA',
            subsections: [
                {
                    title: 'What is a PWA?',
                    content: `
                        <p class="mb-4">
                            A Progressive Web App (PWA) is a web application that installs on your device like a native app.
                            It runs in its own window, works offline, and appears on your home screen with an icon.
                        </p>
                        <p class="mb-6">
                            <strong>Benefits:</strong> No app store required, automatic updates, smaller download size, works across all devices.
                        </p>
                    `
                },
                {
                    title: 'Installing on Chrome (Desktop)',
                    content: '',
                    steps: [
                        { step: 'Navigate to the Opscel field app URL in Chrome', description: 'You\'ll receive this URL from your admin or sign-in email' },
                        { step: 'Click the install icon in the address bar (small computer with arrow)', description: 'Or go to Settings → Install Opscel' },
                        { step: 'Click "Install" in the confirmation dialog', description: '' },
                        { step: 'The app opens in its own window', description: 'A shortcut is added to your desktop and Start menu' }
                    ]
                },
                {
                    title: 'Installing on Chrome (Android)',
                    content: '',
                    steps: [
                        { step: 'Open the Opscel field app URL in Chrome', description: '' },
                        { step: 'Tap the three-dot menu (top right)', description: '' },
                        { step: 'Select "Add to Home screen" or "Install app"', description: '' },
                        { step: 'Confirm by tapping "Add" or "Install"', description: '' },
                        { step: 'The Opscel icon appears on your home screen', description: 'Tap it to launch the app' }
                    ]
                },
                {
                    title: 'Installing on Safari (iOS)',
                    content: '',
                    steps: [
                        { step: 'Open the Opscel field app URL in Safari', description: 'Must use Safari, not Chrome on iOS' },
                        { step: 'Tap the Share button (square with arrow)', description: '' },
                        { step: 'Scroll down and tap "Add to Home Screen"', description: '' },
                        { step: 'Edit the name if desired, then tap "Add"', description: '' },
                        { step: 'The Opscel icon appears on your home screen', description: '' }
                    ]
                },
                {
                    title: 'First Launch',
                    content: `
                        <p class="mb-4">After installation, you'll need to sign in with your Opscel credentials. This <strong>requires an internet connection</strong> for the first login.</p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                            <p class="text-sm text-amber-900">
                                <strong>Important:</strong> The app needs one online sign-in before offline mode works. After that, you can work completely offline.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'todays-jobs',
            title: 'Today\'s Route',
            content: `
                <p class="mb-6">
                    The home screen shows all jobs assigned to you for today, with quick access to your weekly schedule.
                </p>
            `,
            subsections: [
                {
                    title: 'Navigating the Jobs List',
                    video: clip('field-start-your-day', "Today's jobs"),
                    content: '',
                    steps: [
                        { step: 'Open the field app', description: 'You\'ll land on the "Today\'s route" screen by default' },
                        { step: 'View your assigned jobs for today', description: 'Each card shows the job number, title, site, and scheduled time' },
                        { step: 'Tap a job card to open the job detail page', description: 'This is your hub for all job-related actions' },
                        { step: 'Use the bottom navigation to switch views', description: 'Schedule (weekly calendar), Customers, Certificates, Settings' }
                    ]
                },
                {
                    title: 'Job Card Information',
                    content: 'Each job card shows:',
                    bullets: [
                        'Job number, with an <strong>Urgent</strong> or <strong>High</strong> tag if the job has that priority',
                        'Job title',
                        'Site name and address, with a key icon if the site has access notes',
                        'Scheduled time, and the expected duration if one is set',
                        'Job labels (the first two, read only)',
                        'A three-part progress ring on the right: checked in, risk assessment filled in, and parts added. Each part turns green when done and stays grey until then'
                    ]
                },
                {
                    title: 'Filter Chips',
                    video: clip('field-start-your-day', 'Tomorrow'),
                    content: 'A row of chips above the job list narrows it by date. Each chip shows how many jobs it holds. The list opens on <strong>Today</strong>. Jobs are in time order, earliest first.',
                    bullets: [
                        '<strong>Today:</strong> open jobs scheduled for today',
                        '<strong>Tomorrow:</strong> open jobs scheduled for tomorrow',
                        '<strong>This week:</strong> open jobs from the day after tomorrow up to seven days ahead',
                        '<strong>Overdue:</strong> open jobs dated before today. It only appears when you have some, and sits first in the row. The most recent come first',
                        '<strong>No date:</strong> scheduled jobs with no date or visit yet. It only appears when you have some',
                        'A job you have started (In Progress) is not under a chip. It shows as a card above the chips with a <strong>Continue</strong> button',
                        'Completed and cancelled jobs are not listed'
                    ]
                },
                {
                    title: 'Overdue Jobs',
                    content: `
                        <p class="mb-4">
                            Jobs scheduled in the past that haven't been completed are marked as overdue with a red indicator.
                            These appear at the top of the list for priority attention.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'pre-visit',
            title: 'Pre-Visit Preparation',
            content: `
                <p class="mb-6">
                    Before heading to a job site, review the job details to prepare for the visit.
                </p>
            `,
            subsections: [
                {
                    title: 'Opening a Job',
                    video: clip('field-start-your-day', 'Before you set off'),
                    content: '',
                    steps: [
                        { step: 'Tap a job card from the Today\'s route list', description: '' },
                        { step: 'The job detail hub opens', description: 'Shows a Progress Orb and quick action buttons' },
                        { step: 'Review the Overview section', description: 'Customer details, site address, job description, scheduled time, and a PO badge if the office has set a customer purchase order' },
                        { step: 'Check if a risk assessment is required', description: 'Red indicator if not completed' },
                        { step: 'Tap the address to open navigation', description: 'Opens your device\'s map app' }
                    ]
                },
                {
                    title: 'PO Number Badge',
                    content: `
                        <p class="mb-4">
                            If the office has set a PO (purchase order) number on the job, it shows as a badge on the job detail page. This is <strong>read-only in the field app</strong> — if it needs to change, ask the office to update it from the admin job page.
                        </p>
                    `
                },
                {
                    title: 'Risk Assessment',
                    content: `
                        <p class="mb-4">
                            If your company requires risk assessments, you must complete one before checking in. The Progress Orb will show a warning until it's done.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Risk Assessment" from the job hub', description: '' },
                        { step: 'Answer all required questions', description: 'Identify hazards, control measures, PPE requirements' },
                        { step: 'Add photos of site hazards if needed', description: '' },
                        { step: 'Tap "Save" to complete the assessment', description: '' }
                    ]
                },
                {
                    title: 'Reviewing Visit History',
                    content: `
                        <p class="mb-4">
                            For multi-visit jobs or return visits, you can view previous visit summaries to understand what was done before.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Visits" from the job hub', description: '' },
                        { step: 'View list of previous visits', description: 'Shows check-in/departure times, engineer name, work summary' },
                        { step: 'Tap a visit to see details', description: 'Photos, defects, parts, and notes from that visit' }
                    ]
                },
                {
                    title: 'Equipment at This Site',
                    content: `
                        <p class="mb-4">
                            Outside of a specific job, <strong>Customers → [Customer] → Sites → [Site]</strong> shows <strong>Equipment at this site</strong>: a read-only list of everything on that site's asset register &mdash; number, type, location, status and when it was last serviced. Search by location, number or serial, and tap a unit to see its details.
                        </p>
                        <p class="mb-4">
                            It reads from the same cached register the scanner and worksheet pre-loading use, so it works offline once the site has been downloaded &mdash; there's nothing to edit here, it's for checking what's on site before or between jobs.
                        </p>
                    `
                }
            ]
        },
        {
            id: 'on-site-checkin',
            title: 'On-Site: Check-In & Signatures',
            content: `
                <p class="mb-6">
                    When you arrive at the job site, check in to log your arrival time and location.
                </p>
            `,
            subsections: [
                {
                    title: 'Checking In',
                    video: clip('on-site-to-invoice', 'Arrive on site'),
                    content: '',
                    steps: [
                        { step: 'Open the job on your device', description: '' },
                        { step: 'Tap the "Check In" button', description: 'Usually at the top of the job hub' },
                        { step: 'Allow location access if prompted', description: 'Your GPS coordinates are recorded' },
                        { step: 'The job status automatically changes to "In Progress"', description: 'Your check-in time is logged' }
                    ]
                },
                {
                    title: 'What Happens Automatically',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p class="text-sm text-blue-900 mb-2">
                                <strong>Automatic Status Change:</strong> Check-in promotes the job from "Scheduled" to "In Progress" immediately.
                                This lets the office know you've arrived on site.
                            </p>
                            <p class="text-sm text-blue-900">
                                <strong>Note:</strong> Checking out does NOT automatically complete the job—you must manually mark it complete after filling in the work summary.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Engineer Signature',
                    content: `
                        <p class="mb-4">
                            Some companies require an engineer signature to confirm you've checked in and reviewed the job scope.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Sign" from the job hub or check-in flow', description: '' },
                        { step: 'Select "Engineer Signature"', description: '' },
                        { step: 'Draw your signature on the signature pad', description: 'Use your finger or stylus' },
                        { step: 'Tap "Save Signature"', description: '' }
                    ]
                },
                {
                    title: 'Customer Signature',
                    content: `
                        <p class="mb-4">
                            You can collect a customer signature at check-in (e.g., permission to enter) or later during the visit.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Sign" from the job hub', description: '' },
                        { step: 'Select "Customer Signature"', description: '' },
                        { step: 'Hand the device to the customer', description: '' },
                        { step: 'They draw their signature and enter their name', description: '' },
                        { step: 'Tap "Save Signature"', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'capturing-photos',
            title: 'Capturing Photos',
            content: `
                <p class="mb-6">
                    Photos are sorted into categories to keep job documentation structured. The field app offers five. Taking photos works offline and they sync when you're back online. Changing or deleting a photo needs a signal.
                </p>
            `,
            subsections: [
                {
                    title: 'Photo Categories',
                    content: '',
                    bullets: [
                        'Before Work: Site condition before work starts',
                        'After Work: Completed work, final condition',
                        'Equipment: Equipment being serviced or installed',
                        'Deficiency: Issues found during inspection',
                        'Other: Misc photos (access, permits)'
                    ]
                },
                {
                    title: 'Taking Photos',
                    video: clip('field-photos-parts-defects', 'Take photos'),
                    content: '',
                    steps: [
                        'Tap <strong>Photos</strong> from the job hub',
                        'Under <strong>Category for next photo</strong>, pick one: Before Work, After Work, Equipment, Deficiency or Other. It starts on Before Work',
                        'Tap <strong>Take photo</strong> to use your camera, or <strong>Gallery</strong> to pick photos you already have',
                        'The photo uploads as soon as you take it. There is no Save button at this point. If you are offline it is queued and shows as "Queued" until it syncs',
                        'To add a description, tap the photo to open <strong>Photo details</strong>. You can also change its category or name there',
                        'Tap <strong>Save</strong> in Photo details. This needs a signal'
                    ]
                },
                {
                    title: 'Offline Photo Queue',
                    content: `
                        <p class="mb-4">
                            Photos taken offline are stored locally and queued for upload. You'll see a "queued" indicator until they sync.
                        </p>
                        <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                            <p class="text-sm text-green-900">
                                <strong>Storage:</strong> Photos are compressed and stored in your browser's cache. Most devices can hold 50-100 photos offline before needing to sync.
                            </p>
                        </div>
                    `
                },
                {
                    title: 'Deleting Photos',
                    content: '',
                    steps: [
                        'Tap <strong>Photos</strong> from the job hub',
                        'Tap the photo to open <strong>Photo details</strong>',
                        'Tap <strong>Delete photo</strong>, then tap it again where it reads <strong>Tap again to confirm</strong>. This needs a signal'
                    ]
                }
            ]
        },
        {
            id: 'capturing-work',
            title: 'Capturing Work: Worksheets, Defects & Parts',
            content: `
                <p class="mb-6">
                    Document the work you perform using worksheets, defect logs, and parts records.
                </p>
            `,
            subsections: [
                {
                    title: 'Filling Worksheets',
                    video: clip('on-site-to-invoice', 'Job sheet and customer sign-off'),
                    content: `
                        <p class="mb-4">
                            Worksheets are the standard forms Opscel attaches to your job &mdash; Fire Alarm Service, Fire Extinguisher Service, Intruder Alarm Zone List, Remedials Scope of Works and others. You don't pick one: the right sheet is already on the job when you open it.
                        </p>
                        <p class="mb-4">
                            Where the site has an asset register, the equipment list arrives <strong>already filled in</strong>, each row badged as carried over. Tap <strong>✓ Serviced as listed</strong> on a row that's correct as-is — it switches to <strong>Confirmed</strong>, with an <strong>Undo</strong> if you tap it by mistake — or edit the row to record what you actually did. When several rows still need confirming, <strong>Mark remaining N as serviced</strong> confirms the rest of the section in one go (two taps, to be sure). Add a row only for equipment that isn't listed. If something listed genuinely isn't there any more, mark it <strong>Missing / Not Found</strong> rather than deleting the row — a deleted row just goes unrecorded, while Missing / Not Found tells the office and never counts as a service.
                        </p>
                        <p class="mb-4">
                            A worksheet can't be marked complete while a pre-loaded row is still unconfirmed — the section shows <strong>N of M done</strong>, and Mark Complete tells you exactly which row is outstanding and how to resolve it. Sections marked optional (Parts Used, Panel Access Codes, Engineer comments) don't block completion if you leave them empty; every other section does while untouched.
                        </p>
                        <p class="mb-4">
                            Equipment you add isn't on the asset register until the office registers it. That's deliberate &mdash; you can add equipment you find on site, but you can't edit or delete it afterwards, so the office checks new items before they become permanent records.
                        </p>
                        <p class="mb-4">
                            One field to watch: <strong>Asset ref</strong> takes the asset's <code>AST-</code> number or a scanned tag. A serial number won't match anything &mdash; the row registers nothing and nobody is told. If you don't have the number, leave it blank.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Job Sheets" or "Checklists" from the job hub', description: '' },
                        { step: 'Open the worksheet already on the job (usually one, occasionally two)', description: '' },
                        { step: 'Complete each section in order', description: 'Required fields are marked with asterisks' },
                        { step: 'Add photos or notes where prompted', description: '' },
                        { step: 'The form auto-saves as you go', description: 'You\'ll see "Saved" indicators' },
                        { step: 'Tap "Submit" when complete', description: 'Or save as draft to finish later' }
                    ]
                },
                {
                    title: 'Multi-Section Forms',
                    content: `
                        <p class="mb-4">
                            Some worksheets have multiple sections (e.g., System Details, Visual Inspection, Functional Tests).
                            Complete each section before moving to the next.
                        </p>
                    `
                },
                {
                    title: 'Logging Defects',
                    video: clip('field-photos-parts-defects', 'Raise a defect'),
                    content: `
                        <p class="mb-4">
                            Defects are problems you find on the job that need attention. Each one is recorded against the job and the site, and the office can turn it into a remedial quote.
                        </p>
                    `,
                    steps: [
                        'Tap <strong>Defects</strong> from the job hub, then <strong>New defect</strong>',
                        'Pick a <strong>severity</strong> (required) - each tile carries a reminder of what it means (see below)',
                        'Choose a <strong>category</strong> and enter the <strong>location</strong>, e.g. "Ground floor corridor"',
                        'Describe the defect (required) - be specific: what is wrong and why it matters',
                        'Add the <strong>recommended action</strong> if you know it - this is shown on the customer\'s job sheet',
                        'Tick <strong>Quote required for remedial work</strong> if the fix needs quoting',
                        'Add photos with <strong>Take photo</strong> or <strong>Gallery</strong> - they are linked to this defect',
                        'Tap <strong>Add defect</strong>'
                    ]
                },
                {
                    title: 'Severity Levels',
                    content: '<p class="mb-4">The four severity tiles each carry a short reminder. The office\'s Complete Job Card uses the same wording.</p>',
                    table: {
                        headers: ['Severity', 'Reminder on the tile'],
                        rows: [
                            ['Observation', 'Advisory only'],
                            ['Minor', 'Next routine visit'],
                            ['Major', 'Within 28 days'],
                            ['Critical', 'Immediate action']
                        ]
                    }
                },
                {
                    title: 'When a Defect Needs a Quote',
                    content: `
                        <p class="mb-4">
                            A defect goes forward for quoting when it is <strong>Major</strong> or <strong>Critical</strong>, or when you tick <strong>Quote required for remedial work</strong>.
                            Before you save, the form tells you that saving creates a <strong>Remedial Scope</strong> sheet under Job Sheets for you to complete - the office needs it to quote.
                        </p>
                        <p class="mb-4">
                            When you tap <strong>Add defect</strong>, Opscel attaches a draft Remedial Scope of Works sheet to the job (if the job already has a draft one, the defect joins it).
                            The toast reads <em>"Defect added - complete the Remedial Scope sheet so the office can quote"</em> - tap it to go straight to the sheet.
                            Offline, it reads <em>"Defect saved offline - complete the Remedial Scope sheet after it syncs"</em>.
                        </p>
                        <p class="mb-4">
                            More on the sheet itself: <a href="/docs/remedial-scope-of-works" class="text-secondary hover:underline">Remedial Scope of Works</a>.
                        </p>
                    `
                },
                {
                    title: 'Remedial Resourcing & Parts',
                    content: `
                        <p class="mb-4">
                            For a defect going forward for quoting, a <strong>Remedial resourcing &amp; parts</strong> section appears in the form.
                            It is office-only - the office uses it to price the quote, and it is not shown to the customer.
                        </p>
                    `,
                    bullets: [
                        '<strong>Est. hours</strong> and <strong>Engineers</strong> - how long the fix will take and how many people it needs',
                        '<strong>Working hours</strong> - Normal, Out of hours or Mixed',
                        '<strong>Parts</strong> - the parts catalogue stays closed until you tap <strong>Add a part</strong>, so nothing jumps under your thumb while it loads. Pick from the <strong>Catalogue</strong> or enter a <strong>Custom</strong> part. Labour and service items are not offered here - defect parts are parts only.'
                    ]
                },
                {
                    title: 'Editing, Resolving or Deleting a Defect',
                    content: `
                        <p class="mb-4">
                            Every open defect on the Defects screen has <strong>Edit</strong> and <strong>Mark resolved</strong>. Edit opens the same form, saved with <strong>Save changes</strong>.
                            Mark resolved asks you to confirm, then moves the defect to the <strong>Resolved</strong> list, where <strong>Re-open</strong> moves it back to open if you need to change it.
                            A defect you logged offline can be edited once it has synced.
                        </p>
                        <p class="mb-4">
                            <strong>Delete defect</strong> is for a defect raised by mistake - on the wrong job, or logged twice. Open the defect with <strong>Edit</strong>:
                            Delete defect sits at the bottom of the form, full-width and set apart below Save changes and Cancel, so a gloved thumb won't catch it by accident.
                        </p>
                        <p class="mb-4">
                            Opscel asks <em>"Delete this defect?"</em> first. The dialog shows the defect, explains it will be removed from this job, its job sheets and the site's defect register,
                            and ticks <strong>Also delete its photo(s)</strong> by default - deleted photos can be restored from the job's Photos for 30 days. The defect itself can't be restored,
                            and there is no undo: tap <strong>Delete defect</strong> to confirm, or <strong>Keep it</strong> to back out.
                        </p>
                    `,
                    mockup: 'defect-delete-journey',
                    bullets: [
                        '<strong>Only your own.</strong> You can delete a defect you raised. A colleague\'s defect shows no Delete defect - ask the office (Super Admin, Admin or Site Manager), who can delete any defect.',
                        '<strong>Some defects can\'t be deleted, and the form says why.</strong> If the defect is on a quote, or a remedial job has been raised for it, a muted line appears where Delete defect would be - for example <em>"This defect is on QT-2026-0097. Remove it from the quote first."</em> A few other cases, such as a defect recorded on a completed Remedial Scope sheet, are checked when you confirm, and the dialog shows the reason.',
                        '<strong>Resolved defects can\'t be deleted.</strong> They show Re-open instead - re-open it first if it was raised by mistake.',
                        '<strong>Deleting needs a connection.</strong> Offline, the dialog says <em>"You\'re offline. Deleting a defect needs a connection, so try again once you\'re back online."</em> and the button stays disabled. It is never queued.',
                        '<strong>Unsynced changes come first.</strong> If you edited the defect and that change hasn\'t synced yet, the dialog says <em>"This defect has a change still waiting to sync. Delete it once it has synced."</em> and the button stays disabled until it has.',
                        '<strong>Delete from the Defects screen.</strong> Delete isn\'t offered on the Carried-Forward Faults screen or on the field Remedial Scope sheet - open the defect on the Defects screen of the job it was raised on. On the Remedial Scope sheet, <strong>Remove from scope</strong> only takes a defect off the scope list; the defect stays on the job.',
                        '<strong>An empty scope sheet goes too.</strong> If the defect was the last one on a draft Remedial Scope sheet that Opscel created for it, and nobody has typed into or quoted that sheet, the empty sheet is removed as well - it can be restored from Deleted sheets for 30 days.'
                    ]
                },
                {
                    title: 'Recording Parts Used',
                    video: clip('field-photos-parts-defects', 'Log parts used'),
                    content: `
                        <p class="mb-4">
                            Record parts and materials used on the job. These feed into invoicing automatically.
                        </p>
                        <p class="mb-4">
                            If a worksheet on the job lists parts you haven't added here yet (e.g. extinguisher refills recorded on the Extinguisher Service Worksheet), the Parts screen shows a banner — <em>"Worksheet lists N part line(s) not on this job"</em> — with a <strong>Review</strong> button. Tick which lines to add; nothing on the worksheet changes, and a part already added this way is never added twice.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Parts" from the job hub', description: '' },
                        { step: 'Tap "Add Part"', description: '' },
                        { step: 'Search for the part by SKU or name', description: 'Or select from your product catalog' },
                        { step: 'Enter quantity used', description: '' },
                        { step: 'Price auto-fills from catalog', description: 'You can override if needed' },
                        { step: 'Review the ex-VAT total', description: '' },
                        { step: 'Tap "Save"', description: 'Part is added to the job' }
                    ]
                },
                {
                    title: 'Parts Pricing',
                    content: `
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p class="text-sm text-blue-900">
                                Parts prices come from your product catalog. If a part isn't in the catalog, you can add a custom part with manual pricing.
                                All prices are ex-VAT; VAT is calculated on the invoice.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'completing-job',
            title: 'Completing a Job',
            content: `
                <p class="mb-6">
                    When the work is done, complete the job by filling in the work summary and checking out.
                </p>
            `,
            subsections: [
                {
                    title: 'Review Gate',
                    video: clip('on-site-to-invoice', 'Finish the visit'),
                    content: `
                        <p class="mb-4">
                            Before you can complete a job, the system checks that you've met minimum requirements. This is called the "review gate."
                        </p>
                        <p class="mb-4"><strong>Review Gate Requirements:</strong></p>
                    `,
                    bullets: [
                        'Check-in completed ✓',
                        'Risk assessment completed ✓ (if required)',
                        'Work summary entered (at least 10 characters)'
                    ]
                },
                {
                    title: 'Writing the Work Summary',
                    content: `
                        <p class="mb-4">
                            The work summary is called <strong>Work carried out</strong> in the app. It is the most important field. It prints on the job sheet and on fire alarm certificates.
                        </p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                            <p class="text-sm text-amber-900">
                                <strong>Important:</strong> The per-visit work summary is the source of truth for PDFs. Write a clear, professional description of what you did today.
                            </p>
                        </div>
                        <p class="mb-4">
                            You write it in the place you are already working, so you do not write the job up twice. It is saved to today's visit, so <strong>check in first</strong>. Until you do, the box is switched off.
                        </p>
                        <p class="mb-4">
                            You can write it in any of three places. It is the same summary in each:
                        </p>
                        <ul class="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>At the end of a job sheet</strong>, in the sign-off step. Tap <strong>Write today's work carried out</strong> (it reads <strong>Edit today's work carried out</strong> once you have written some). It is locked once the customer has signed that sheet.</li>
                            <li><strong>On a draft certificate</strong>, in the <strong>Work carried out</strong> box below the list of sections. It is needed to complete the job, not to submit the certificate.</li>
                            <li><strong>On the Review screen.</strong> Tap <strong>Continue to Review</strong> on the job hub, then write it in the <strong>What was done on this visit</strong> box.</li>
                        </ul>
                        <p class="mb-4">
                            Already written a summary on a completed worksheet? A <strong>Use worksheet summary</strong> button offers it while the box is empty, instead of typing it twice. You can still edit it afterwards. A summary already used on another visit isn't offered again.
                        </p>
                    `,
                    steps: [
                        'Check in on site',
                        'Open the box in whichever of those three places you reach first',
                        'Describe what you did, what you found and what needs follow-up. You need at least 10 characters. A counter under the box shows how you are doing',
                        'There is no Save button. It saves as you type and when you leave the box or the screen'
                    ]
                },
                {
                    title: 'Customer Sign-Off',
                    content: `
                        <p class="mb-4">
                            If not already collected, get the customer to sign off on the completed work.
                        </p>
                    `,
                    steps: [
                        { step: 'Tap "Sign" from the completion screen', description: '' },
                        { step: 'Hand the device to the customer', description: '' },
                        { step: 'They sign and enter their name', description: '' },
                        { step: 'Tap "Save Signature"', description: '' }
                    ]
                },
                {
                    title: 'Checking Out (GPS Departure)',
                    content: '',
                    steps: [
                        { step: 'Ensure all work is documented', description: 'Photos, defects, parts, work summary' },
                        { step: 'Tap "Check Out" or "Complete Job"', description: '' },
                        { step: 'Allow location access', description: 'Your departure GPS coordinates are recorded' },
                        { step: 'Confirm job completion', description: '' },
                        { step: 'The job status changes to "Completed"', description: '' }
                    ]
                },
                {
                    title: 'What Does NOT Happen',
                    content: `
                        <div class="bg-red-50 border-l-4 border-red-500 p-4">
                            <p class="text-sm text-red-900 mb-2">
                                <strong>Important:</strong> Checking out does NOT automatically complete the job. You must explicitly mark it complete after entering the work summary.
                            </p>
                            <p class="text-sm text-red-900">
                                This is intentional—it gives you time to review everything before finalizing.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'offline-sync',
            title: 'Offline Mode & Sync',
            content: `
                <p class="mb-6">
                    The field app is designed to work completely offline. Everything you do is saved locally and syncs when you reconnect.
                </p>
            `,
            subsections: [
                {
                    title: 'What Works Offline',
                    content: 'All core functionality works without connectivity:',
                    bullets: [
                        'Viewing job list and job details',
                        'Checking in and checking out (GPS queued)',
                        'Taking photos (compressed and stored locally)',
                        'Filling worksheets and checklists',
                        'Logging defects',
                        'Recording parts',
                        'Capturing signatures',
                        'Writing work summaries',
                        'Marking jobs complete'
                    ]
                },
                {
                    title: 'What Queues for Sync',
                    content: `
                        <p class="mb-4">
                            When offline, your changes are queued in your browser's storage. When you reconnect, they sync automatically.
                        </p>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                            <p class="text-sm text-amber-900">
                                <strong>One exception - deleting a defect needs a connection.</strong> It is never queued: offline, the Delete this defect dialog says so and its button stays disabled.
                                Logging, editing and resolving defects still work offline.
                            </p>
                        </div>
                        <p class="mb-4"><strong>Synced items:</strong></p>
                    `,
                    bullets: [
                        'Check-in/check-out events with GPS',
                        'Photos and captions',
                        'Worksheet data (per-section)',
                        'Defects and notes',
                        'Parts records',
                        'Signatures',
                        'Work summaries',
                        'Job completion status'
                    ]
                },
                {
                    title: 'Sync Indicators',
                    content: 'The app shows several indicators to help you understand sync status:',
                    bullets: [
                        '<strong>CloudOff icon:</strong> You\'re currently offline',
                        '<strong>SyncChip:</strong> Shows number of queued items waiting to sync',
                        '<strong>AutoSaveChip:</strong> Appears when form data is auto-saving',
                        '<strong>CacheAgeBadge:</strong> Shows how old your cached data is'
                    ]
                },
                {
                    title: 'Sync Inspector',
                    content: `
                        <p class="mb-4">
                            The Sync Inspector lets you see exactly what is in the queue and force a retry if needed.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings (bottom navigation)', description: '' },
                        { step: 'Tap "Sync Inspector"', description: '' },
                        { step: 'View queued items by type', description: 'Photos, forms, check-ins, etc.' },
                        { step: 'Tap "Force Sync Now" to retry', description: 'Useful if sync seems stuck' },
                        { step: 'View sync errors if any', description: 'Shows which items failed and why' }
                    ]
                },
                {
                    title: 'Cache Management',
                    content: `
                        <p class="mb-4">
                            Your device caches job data for offline access. You can manage cache size and clear old data.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Cache Stats', description: '' },
                        { step: 'View cache size and item counts', description: '' },
                        { step: 'Tap "Clear Cache" if needed', description: 'Removes all offline data (synced items are safe)' },
                        { step: 'Re-open jobs you need offline', description: 'They\'ll be cached again' }
                    ]
                },
                {
                    title: 'First-Time Offline Use',
                    content: `
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
                            <p class="text-sm text-amber-900">
                                <strong>Remember:</strong> The PWA needs one online sign-in before offline mode works. After that initial login,
                                you can work completely offline for weeks if needed—just sync periodically to upload your data.
                            </p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'field-settings',
            title: 'Field Settings',
            content: `
                <p class="mb-6">
                    Customize your field app experience and manage integrations.
                </p>
            `,
            subsections: [
                {
                    title: 'Theme Preferences',
                    content: '',
                    steps: [
                        { step: 'Go to Settings (bottom navigation)', description: '' },
                        { step: 'Tap "Theme"', description: '' },
                        { step: 'Choose Light, Dark, or System', description: 'System follows your device settings' }
                    ]
                },
                {
                    title: 'Calendar Connection',
                    content: `
                        <p class="mb-4">
                            Connect your Google or Microsoft calendar to sync job schedules with your personal calendar.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → Calendar', description: '' },
                        { step: 'Tap "Connect Calendar"', description: '' },
                        { step: 'Choose Google or Microsoft', description: '' },
                        { step: 'Authorize access', description: '' },
                        { step: 'Jobs appear as calendar events', description: 'Two-way sync keeps everything in sync' }
                    ]
                },
                {
                    title: 'Clocking In and Out',
                    content: `
                        <p class="mb-4">
                            When your company tracks shifts, you clock in when you start work and out when you finish.
                            While you are on shift, a timer stays at the top of every screen. Shift History lists your
                            shifts from the last 7 days, with clock-in and clock-out times, total hours and any note you added.
                        </p>
                    `,
                    video: clip('field-clock-in-out'),
                    steps: [
                        { step: 'Tap "Clock in" on the home screen banner', description: 'Shown only when your company tracks shifts' },
                        { step: 'To clock out, tap the timer at the top of any screen', description: 'Add a note if you want one, then tap "Clock out"' },
                        { step: 'Go to Settings → Shifts → Shift history', description: 'Your shifts from the last 7 days, newest first' }
                    ]
                },
                {
                    title: 'PWA Install Prompts',
                    content: `
                        <p class="mb-4">
                            If you dismissed the PWA install prompt, you can trigger it again from settings.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings → PWA Install', description: '' },
                        { step: 'Tap "Install App"', description: '' },
                        { step: 'Follow browser prompts to install', description: '' }
                    ]
                },
                {
                    title: 'Business Switcher',
                    content: `
                        <p class="mb-4">
                            If you work for multiple companies, switch between businesses without signing out.
                        </p>
                    `,
                    steps: [
                        { step: 'Go to Settings', description: '' },
                        { step: 'Tap the business name at the top', description: '' },
                        { step: 'Select the business to switch to', description: '' },
                        { step: 'The app reloads with that business\'s data', description: '' }
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Job Won\'t Let Me Complete',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> The "Complete Job" button is disabled or shows errors.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Ensure you\'ve checked in (green checkmark)',
                        'Complete risk assessment if required',
                        'Enter a work summary (at least 10 characters)',
                        'Check for validation errors in forms',
                        'Review gate requirements must be met'
                    ]
                },
                {
                    title: 'Photos Disappeared',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Photos I took aren't showing up.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check the Sync Inspector—they may be queued',
                        'Ensure you\'re online so they can upload',
                        'Look in the correct category (Before, After, Deficiency, etc.)',
                        'Force sync from Settings → Sync Inspector',
                        'Check browser storage quota (Settings → Cache Stats)'
                    ]
                },
                {
                    title: 'Offline Sync Stuck',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Items in sync queue won't upload.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Verify you have internet connectivity',
                        'Check if you\'re on a slow/unstable connection',
                        'Force retry from Sync Inspector',
                        'Check sync error logs for specific failures',
                        'If persistent, contact support (may be server issue)'
                    ]
                },
                {
                    title: 'Wrong Job Checked In',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> I accidentally checked into the wrong job.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check out of the wrong job immediately',
                        'Contact your office admin—they can reassign or delete the check-in',
                        'Check in to the correct job',
                        'There\'s no self-service undo for check-ins (by design, for GPS audit trail)'
                    ]
                },
                {
                    title: 'PWA Not Installing',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> Can't install the PWA on my device.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Ensure you\'re using a supported browser (Chrome, Edge, Safari)',
                        'On iOS, you MUST use Safari (not Chrome)',
                        'Check that you\'re on the field app URL, not the admin site',
                        'Clear browser cache and try again',
                        'On Android, ensure Chrome is up to date'
                    ]
                },
                {
                    title: 'Form Data Lost',
                    content: `
                        <p class="mb-2"><strong>Problem:</strong> I was filling a worksheet and my data disappeared.</p>
                        <p class="mb-4"><strong>Fix:</strong></p>
                    `,
                    bullets: [
                        'Check if you accidentally navigated away—use the back button',
                        'The form auto-saves every 30 seconds—look for "Saved" indicator',
                        'If offline, data may be in the queue waiting to sync',
                        'Check Sync Inspector for pending form submissions',
                        'If truly lost, contact support (may be recoverable from logs)'
                    ]
                }
            ]
        },
        {
            id: 'faq',
            title: 'FAQs',
            subsections: [
                {
                    title: 'I went offline mid-visit, did I lose anything?',
                    content: `
                        <p class="text-gray-700">
                            No, you didn't lose anything. Everything you do queues locally and syncs when you're back online.
                            The app is designed for this exact scenario—work normally, then sync later.
                        </p>
                    `
                },
                {
                    title: 'Why won\'t the job let me complete?',
                    content: `
                        <p class="text-gray-700">
                            The review gate is blocking completion. Check that you've: (1) checked in, (2) completed risk assessment if required,
                            and (3) entered a work summary of at least 10 characters. You'll see specific errors if something's missing.
                        </p>
                    `
                },
                {
                    title: 'Where do my photos go?',
                    content: `
                        <p class="text-gray-700">
                            Photos are uploaded to the job's document folder and appear in the office admin view. If the job is linked to a certificate,
                            photos may also appear in the certificate PDF. Customers can view photos via the customer portal if enabled.
                        </p>
                    `
                },
                {
                    title: 'How do I switch between businesses?',
                    content: `
                        <p class="text-gray-700">
                            Go to Settings and tap the business name at the top of the screen. Select the business you want to switch to.
                            The app reloads with that business's jobs and data. You don't need to sign out.
                        </p>
                    `
                },
                {
                    title: 'Does checking out complete the job?',
                    content: `
                        <p class="text-gray-700">
                            No. Checking out records your departure GPS but does NOT complete the job. You must explicitly tap "Complete Job"
                            after entering the work summary. This is intentional—it gives you time to review before finalizing.
                        </p>
                    `
                },
                {
                    title: 'What\'s the difference between check-in and check-out?',
                    content: `
                        <p class="text-gray-700">
                            Check-in promotes the job status from "Scheduled" to "In Progress" and logs your arrival GPS.
                            Check-out records your departure GPS and logs your departure time, but does NOT change the job status.
                            To mark the job complete, use the "Complete Job" button after entering your work summary.
                        </p>
                    `
                },
                {
                    title: 'Can I edit a job after completing it?',
                    content: `
                        <p class="text-gray-700">
                            No, completed jobs are locked from editing in the field app. If you need to make changes, contact your office admin—they
                            have an admin override to edit completed jobs. This prevents accidental changes to finalized records.
                        </p>
                    `
                },
                {
                    title: 'How long does sync take?',
                    content: `
                        <p class="text-gray-700">
                            Small items (check-ins, form data, text) sync in seconds. Photos take longer depending on size and your connection speed—usually
                            5-30 seconds per photo. If you have 20 photos queued, expect 2-10 minutes. The app shows progress in the Sync Inspector.
                        </p>
                    `
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Jobs & Multi-Visit Workflow',
            description: 'Managing multi-visit jobs and scheduling from the office',
            href: '/docs/jobs'
        },
        {
            title: 'Planning Your Week with the Planner',
            description: 'How office bookings on the Planner reach the field app',
            href: '/docs/planner'
        },
        {
            title: 'Certificates',
            description: 'Creating and issuing compliance certificates',
            href: '/docs/certificates'
        },
        {
            title: 'Defects to Quotation',
            description: 'Converting field defects into remedial quotes',
            href: '/docs/defects-to-quotation'
        },
        {
            title: 'Asset Tracking',
            description: 'Capturing and managing site assets from the field',
            href: '/docs/asset-tracking'
        },
        {
            title: 'Service Contracts',
            description: 'Site access notes and site log that reach engineers via contracts',
            href: '/docs/service-contracts'
        }
    ]
};
