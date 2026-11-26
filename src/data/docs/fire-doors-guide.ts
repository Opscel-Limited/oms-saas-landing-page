import { IDocGuide } from '@/types';

export const fireDoorsGuide: IDocGuide = {
    slug: 'fire-doors',
    title: 'Fire Door Inspections - Support Guide',
    description: 'Fire door inspections in Opscel: a door register for each block, floor plans with a pin per door, a phone worksheet with a checklist, gap readings and photos, and a Fire Door Inspection Report with plan pages. Business plan.',
    lastUpdated: '2026-11-26',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: `<p class="mb-4">Each fire door at a site is one asset on the site's <strong>door register</strong>, with its reference, location, function and rating. Add a floor plan for each level and place every door on it as a <strong>numbered pin</strong>.</p>
<p class="mb-4">Book a job with the <strong>Fire Door Inspection</strong> service type and the worksheet arrives on the engineer's phone with every door at the site already listed. The engineer works through the doors from the list or from the plan: a short checklist, gap readings, the self-closer, a result, a priority and up to three photos per door. It all works without signal.</p>
<p class="mb-4">When the sheet is completed, every failed door becomes a <strong>defect</strong> for the office, and the sheet's PDF is the <strong>Fire Door Inspection Report</strong>: a door schedule, findings with photos, an action plan, a no-access log, signatures and a floor plan page per level.</p>`,
            subsections: [
                {
                    title: 'Availability',
                    content: `<p>Fire door inspections are part of the <strong>Business</strong> plan, because the door register and floor plans are part of the asset register. Office staff who can edit assets set up doors and plans. Engineers and site managers can place and move pins from the phone; taking a pin off a plan stays in the office.</p>`,
                },
                {
                    title: 'What this guide covers',
                    bullets: [
                        '<a href="#set-up-the-block" class="text-primary hover:underline">Set up the block: site facts, doors and floor plans</a>',
                        '<a href="#book-the-inspection" class="text-primary hover:underline">Book the inspection</a>',
                        '<a href="#on-the-phone" class="text-primary hover:underline">Inspecting on the phone</a>',
                        '<a href="#pins-on-the-phone" class="text-primary hover:underline">Placing pins on the phone</a>',
                        '<a href="#the-report" class="text-primary hover:underline">What is in the report</a>',
                        '<a href="#defects" class="text-primary hover:underline">Failed doors, defects and remedial quotes</a>',
                        '<a href="#regulation-10" class="text-primary hover:underline">Regulation 10 and what Opscel never decides for you</a>',
                    ],
                },
            ],
        },
        {
            id: 'set-up-the-block',
            title: 'Set Up the Block',
            content: `<p class="mb-4">Set a block up once. Every inspection after that starts from the same doors and the same plans.</p>`,
            subsections: [
                {
                    title: '1. The site facts',
                    content: `<p>On the customer's site, fill in the <strong>building height</strong> (top storey floor, in metres) and the <strong>premises type</strong>. Opscel copies both onto each new Fire Door Inspection sheet, and the report prints a Regulation 10 line from them: that the checks are likely to apply (over 11 m, domestic or HMO), or that they do not (11 m or under). When the facts are missing or do not settle it, the report says nothing about Regulation 10 rather than guess.</p>`,
                },
                {
                    title: '2. The doors',
                    content: `<p class="mb-4">Add each door as an asset of type <strong>Fire Door</strong>, one at a time or from a spreadsheet with the asset import. For each door:</p>`,
                    table: {
                        headers: ['Field', 'What it is for'],
                        rows: [
                            ['<strong>Door ref</strong> and <strong>location</strong>', 'How the engineer and the report name the door, for example FD-1.03, "Flat 3 entrance".'],
                            ['<strong>Door function</strong>', 'Communal, Flat entrance or Other. It sets the default inspection interval: <strong>3 months</strong> for communal doors, <strong>12 months</strong> for flat entrance doors and <strong>6 months</strong> for other doors. You can change it per door.'],
                            ['<strong>Rating</strong>', 'FD30, FD60, FD90 or FD120.'],
                        ],
                    },
                },
                {
                    title: '3. The floor plans',
                    content: `<p class="mb-4">Open the site's <strong>Assets</strong> tab and switch to the <strong>Plans</strong> view. Add a floor from an image (PNG or JPEG) or from a PDF: tick each page that is a floor plan and they are added in one go, one floor per page. Then place each door: drag it from <strong>Not on any plan yet</strong> onto the plan, or use its <strong>Place</strong> button. Pins are numbered for you. Try it on the mockup:</p>`,
                },
                {
                    title: 'The Plans view',
                    mockup: 'fire-door-plan',
                },
                {
                    title: 'Good to know',
                    bullets: [
                        'A door has one pin. <strong>Move pin</strong> and <strong>Take off plan</strong> are on the door\'s details in the Plans view.',
                        'Pins are coloured by the door\'s last result, and the key above the plan shows how many pins on the floor have each result.',
                        'Other kinds of asset (detectors, extinguishers, emergency lights) can go on the same plans. Pin numbers on a floor are shared by every type, so a fire door report may skip numbers where other assets are pinned.',
                        'Engineers\' phones show the floor plan on fire door inspections.',
                    ],
                },
            ],
        },
        {
            id: 'book-the-inspection',
            title: 'Book the Inspection',
            content: `<p class="mb-4">Create the job with the <strong>Fire Door Inspection</strong> service type, or run it from a <a href="/docs/service-contracts" class="text-secondary hover:underline">service contract</a> for repeat visits. The worksheet is attached automatically and filled from the site's door register: every active door at the site arrives as a row, ready to inspect. The visit date comes from the booking and can be changed on the sheet.</p>
<p class="mb-4">Added a door to the register after the sheet was created? Use <strong>Load site register</strong> in the job's worksheets section to bring it in.</p>`,
        },
        {
            id: 'on-the-phone',
            title: 'Inspecting on the Phone',
            content: `<p class="mb-4">The engineer opens the job, then the <strong>Fire Door Inspection</strong> sheet. The <strong>List</strong> view shows every door; <strong>Plan</strong> shows the floor drawing with a pin per door, and tapping a pin opens that door. Where pins are close together the phone asks <strong>Which door?</strong>. Pinch to zoom.</p>`,
            subsections: [
                {
                    title: 'One door on the phone',
                    mockup: 'fire-door-phone-row',
                },
                {
                    title: 'For each door',
                    steps: [
                        'Choose the <strong>action</strong>: inspect a door on the register, record a new door found on site, <strong>No access</strong>, or <strong>Door not found</strong>.',
                        'Answer the <strong>checklist</strong>: Pass, Fail, Advisory or N/A for the door, frame and wall, letterbox, glazing, hinges and ironmongery, gaps, strips and seals, the self-closer, alterations, whether it is wedged or held open, signage and other damage.',
                        'Record the <strong>gap readings</strong> in millimetres: hinge side, lock side, head, meeting stiles and threshold.',
                        'Set the <strong>outcome</strong> (Pass, Remediate, Replace leaf, Replace doorset or Not inspected) and, for a door that needs work, the <strong>priority</strong> (Immediate, Within 1 month, Within 3 months or Advisory) and remedial notes.',
                        'Add up to <strong>three photos</strong> to the door with <strong>Take photo</strong> or <strong>From gallery</strong>. Photos can be added until the sheet is completed.',
                    ],
                },
                {
                    title: 'Shortcuts and safeguards',
                    bullets: [
                        '<strong>Mark unanswered core checks Pass (not self-closer or signage)</strong> fills the core checks of a door that is clearly fine. It never answers the self-closer or the signage (the engineer answers those), leaves the where-fitted checks (letterbox, glazing, strips and seals) for the engineer, and leaves the gaps check unanswered if a gap reading is outside the usual range.',
                        'A gap reading outside the usual range (2 to 4 mm at the sides, head and meeting stiles; over 8 mm at the threshold) shows a <strong>warning</strong> to check against the door\'s certificate. It never fails the door on its own.',
                        '<strong>No access</strong> asks for the reason (no answer, access refused, locked, unsafe or other) and the steps taken. It is recorded as an attempt, not a service, so the door\'s last inspection date does not move. The sheet cannot be completed while a reason is missing.',
                    ],
                },
                {
                    title: 'Offline',
                    content: `<p>Everything above works without signal once the job has been opened online. Floor plans are stored on the phone the first time they are opened with a signal. Results, photos, pins and the sign-off queue on the phone and send when the phone is back online. See <a href="/docs/offline-sync" class="text-secondary hover:underline">Offline sync</a> for how the queue works.</p>`,
                },
                {
                    title: 'Sign-off',
                    content: `<p>The engineer's name is filled in from the job and the engineer can sign on the sheet (optional). Take the customer's name and signature, or record why nobody could sign, then <strong>Mark complete</strong>.</p>`,
                },
            ],
        },
        {
            id: 'pins-on-the-phone',
            title: 'Placing Pins on the Phone',
            content: `<p class="mb-4">Plans uploaded but doors not placed yet? Engineers and site managers can place them while they walk the building.</p>`,
            subsections: [
                {
                    title: 'Two ways to place a door',
                    bullets: [
                        '<strong>From the sheet:</strong> in the Plan view, a door that is not on a plan has a <strong>Place</strong> button. Pick the floor, tap where the door is, then <strong>Save pin</strong>.',
                        '<strong>From a tag scan:</strong> scan the door\'s tag and tap <strong>Place on plan</strong>, tap where the door is, then <strong>Save pin</strong>. <strong>Scan next door</strong> goes straight back to the camera, so you can work along a corridor. A door that already has a pin offers <strong>Move pin</strong>.',
                    ],
                },
                {
                    title: 'Without signal',
                    content: `<p>Placing works offline. The pin shows straight away and sends when the phone is connected; its number appears once it has synced. If the office has removed the door or the floor in the meantime, the pin is refused and the phone says why.</p>`,
                },
            ],
        },
        {
            id: 'the-report',
            title: 'What Is in the Report',
            content: `<p class="mb-4">The <strong>Fire Door Inspection Report</strong> is the completed sheet's PDF. It is filed with the job's documents, and the office can download it from the job.</p>`,
            subsections: [
                {
                    title: 'A report page',
                    mockup: 'fire-door-report',
                },
                {
                    title: 'The parts of the report',
                    table: {
                        headers: ['Part', 'What it holds'],
                        rows: [
                            ['<strong>Job and building</strong>', 'Customer, site, inspection scope, visit date, the responsible person and their role, building height, premises type and the Regulation 10 line.'],
                            ['<strong>Summary</strong>', 'Doors inspected, passed, needing work, no access and not found.'],
                            ['<strong>Door schedule</strong>', 'Every door with its location, function, rating, self-closer, checks, outcome and priority.'],
                            ['<strong>Findings by door</strong>', 'Every door with a check answered Fail or Advisory, or a gap reading outside the usual range: those answers, the engineer\'s notes and that door\'s photos.'],
                            ['<strong>Action plan</strong>', 'The work for each door (remediate, replace leaf, replace doorset) with its priority.'],
                            ['<strong>No-access log</strong>', 'Each door the engineer could not inspect, the reason and the steps taken.'],
                            ['<strong>Photos of other doors</strong>', 'Photos of doors that passed or were not found, each under its door.'],
                            ['<strong>Recommendations and signatures</strong>', 'The engineer\'s recommendations, the engineer\'s signature and the customer\'s.'],
                            ['<strong>Floor plans</strong>', 'One page per floor that holds a door on this sheet, with numbered pins coloured by result and a key of door, location and result. Each page says the date the plan is shown as at.'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'defects',
            title: 'Failed Doors, Defects and Remedial Quotes',
            content: `<p class="mb-4">When the sheet is completed, every door with a Remediate, Replace leaf or Replace doorset outcome becomes a <strong>defect</strong> at the site, with the engineer's remedial notes and the door's photos. The priority sets the defect's severity:</p>`,
            subsections: [
                {
                    table: {
                        headers: ['Priority on the door', 'Defect severity'],
                        rows: [
                            ['Immediate', 'Critical'],
                            ['Within 1 month', 'Major'],
                            ['Within 3 months', 'Minor'],
                            ['Advisory', 'Observation'],
                        ],
                    },
                },
                {
                    content: `<p>From there it is the normal defect flow: bundle the defects into a remedial quote, send it, and convert it to a job when the customer accepts. See <a href="/docs/defects-to-quotation" class="text-secondary hover:underline">Defects to quotation</a>.</p>`,
                },
            ],
        },
        {
            id: 'regulation-10',
            title: 'Regulation 10 and What Opscel Never Decides for You',
            content: `<p class="mb-4">Under Regulation 10 of the Fire Safety (England) Regulations 2022, in multi-occupied residential buildings over 11 metres the responsible person must check communal fire doors every 3 months and use best endeavours to check flat entrance doors every 12 months. The default door intervals follow those periods (in England), and the report prints whether Regulation 10 checks are likely to apply from the building height and premises type you entered.</p>`,
            subsections: [
                {
                    title: 'The engineer makes the call',
                    bullets: [
                        'Gap readings are <strong>warnings</strong> to check against the door\'s own certificate, never an automatic fail.',
                        'A door is never failed automatically for missing seals or missing certification.',
                        'The self-closer is always answered by the engineer: no shortcut fills it in.',
                    ],
                },
                {
                    content: `<p>Opscel records the inspection and produces the report. The competence, the judgement on each door and the conclusions remain the inspector's responsibility.</p>`,
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Asset Tracking',
            description: 'The asset register the doors live on, QR tags and service history.',
            href: '/docs/asset-tracking',
        },
        {
            title: 'Worksheets',
            description: 'How worksheets are attached to jobs and filled in on site.',
            href: '/docs/worksheets',
        },
        {
            title: 'Defects to Quotation',
            description: 'Turn failed doors into a remedial quote.',
            href: '/docs/defects-to-quotation',
        },
        {
            title: 'Service Contracts',
            description: 'Repeat inspections on a schedule.',
            href: '/docs/service-contracts',
        },
        {
            title: 'Fire Safety Jobsheets & Fault Tracking',
            description: 'Fire alarm servicing jobsheets and carried-forward faults.',
            href: '/docs/fire-safety-features',
        },
    ],
};
