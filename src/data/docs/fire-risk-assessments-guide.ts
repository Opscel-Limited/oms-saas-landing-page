import { IDocGuide } from '@/types';

export const fireRiskAssessmentsGuide: IDocGuide = {
    slug: 'fire-risk-assessments',
    title: 'Fire Risk Assessments - Support Guide',
    description: 'Fire risk assessment reports in Opscel: your own question templates with suggested answers, photos on actions, severity and timescales, and the action plan. Included on every plan.',
    lastUpdated: '2026-11-16',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: `<p class="mb-4">A <strong>Fire Risk Assessment</strong> in Opscel is a certificate you raise against a job, like any other. The assessor fills it in on the phone or in the office, and it issues as a numbered PDF report with a <strong>cover photo</strong>, <strong>photos on the actions</strong>, a <strong>severity</strong> and <strong>timescale</strong> on each action, and the <strong>action plan</strong> on the last pages.</p>
<p class="mb-4">The questions come from a <strong>template</strong>. Opscel has built-in questions, and on <strong>Settings → Risk assessment templates</strong> you can write your own: sections, questions, help text, <strong>suggested answers</strong> and pre-filled actions. A new report starts from the template that matches the job's service type, or from your default, and keeps its own copy so later edits never change a report that is already started.</p>`,
            subsections: [
                {
                    title: 'Availability',
                    content: `<p>Fire risk assessments and risk assessment templates are included on <strong>every plan</strong>. Building or changing a template needs permission to edit settings; assessors need nothing extra to use the suggested answers on their reports.</p>`,
                },
                {
                    title: 'What this guide covers',
                    bullets: [
                        '<a href="#the-report" class="text-primary hover:underline">What is in the report</a>',
                        '<a href="#templates" class="text-primary hover:underline">Building a template</a>',
                        '<a href="#matching" class="text-primary hover:underline">Which template a new report uses</a>',
                        '<a href="#assessors" class="text-primary hover:underline">Suggested answers for the assessor</a>',
                        '<a href="#action-plan" class="text-primary hover:underline">The action plan, severity and timescales</a>',
                        '<a href="#editing-safely" class="text-primary hover:underline">Editing and archiving templates safely</a>',
                        '<a href="#not-rams" class="text-primary hover:underline">Fire risk assessment or RAMS?</a>',
                    ],
                },
            ],
        },
        {
            id: 'the-report',
            title: 'What Is in the Report',
            content: `<p class="mb-4">The report follows the structure of PAS 79-1:2020 and BS 9792:2025. It is issued as a numbered <strong>FRA</strong> certificate with a review-by date, and signed by the <strong>Fire Risk Assessor</strong>.</p>`,
            subsections: [
                {
                    title: 'The parts of the report',
                    table: {
                        headers: ['Part', 'What it holds'],
                        rows: [
                            ['<strong>Report details</strong>', 'Methodology, FRA type, nation, date of assessment, previous FRA reference and the review-by date.'],
                            ['<strong>Responsible Person and premises</strong>', 'Who is responsible, the premises, its use, evacuation strategy, storeys, construction and the <strong>front page photograph</strong>.'],
                            ['<strong>Assessor and validation</strong>', 'The assessor, their organisation and qualifications, and who validated the report and when.'],
                            ['<strong>Scope, limitations and people at risk</strong>', 'What was assessed, what was not accessed and why, occupancy, sleeping risk and people especially at risk.'],
                            ['<strong>Your questions</strong>', 'The fire hazards, fire protection and management sections. These come from your template or the built-in bank.'],
                            ['<strong>Risk rating</strong>', 'Likelihood of fire and potential consequence.'],
                            ['<strong>Action plan and sign-off</strong>', 'Each action with its severity, timescale and photos, then the assessor\'s sign-off. The action plan prints on the last pages, after the photographs.'],
                        ],
                    },
                },
                {
                    title: 'Raising one',
                    content: `<p>Add a <strong>Fire Risk Assessment</strong> certificate from the job's Certificates section. To have it created with the job, map it to the service type in <strong>Settings → Certificate Templates</strong>. See the <a href="/docs/certificates" class="text-secondary hover:underline">Certificates guide</a> for how certificates are numbered, signed and issued.</p>`,
                },
                {
                    title: 'Photos',
                    bullets: [
                        '<strong>Front page photograph:</strong> pick one of the job\'s photos and it prints on the cover.',
                        '<strong>On each action:</strong> pick up to three photos. Small thumbnails labelled <strong>P1, P2</strong> and so on print under that action, and the full-size photos follow in the photo pages so the reader can match them.',
                        'A report can use at most <strong>30</strong> photos on the front page and actions together. Any other photos still print in the additional photographs.',
                        'If a photo you chose is later removed from the job, the report asks you to remove it from the report before it can be issued.',
                    ],
                },
            ],
        },
        {
            id: 'templates',
            title: 'Building a Template',
            content: `<p class="mb-4">Go to <strong>Settings → Risk assessment templates</strong>. With no templates yet, every fire risk assessment starts from the built-in questions. To make your own, choose <strong>Start from the built-in questions</strong> (edit a copy of Opscel's bank) or <strong>Start from scratch</strong>. Try the editor on the mockup:</p>`,
            subsections: [
                {
                    title: 'The template editor',
                    mockup: 'fra-templates-editor',
                },
                {
                    title: 'Step by step',
                    steps: [
                        'Give the template a <strong>name</strong> (up to 100 characters) and an optional <strong>description</strong> that says when to use it, such as "Housing blocks (BS 9792)".',
                        'Choose the <strong>service types</strong> it is used for, and whether it is your <strong>default template</strong>.',
                        'Add <strong>sections</strong>. Each is part of the report (hazards, protection or management) and has a title.',
                        'Add <strong>questions</strong>. Write each so that <strong>Yes is the satisfactory answer</strong>. Add optional <strong>help text</strong> that the assessor sees under the question.',
                        'For any question, add <strong>suggested answers</strong>: choose whether it is offered for <strong>No</strong> or <strong>Unknown</strong>, and write the comment that goes on the report.',
                        'Optionally give a suggested answer a <strong>pre-filled action</strong>: a finding, a recommendation, a severity and a timescale. Leave severity or timescale as <strong>Assessor chooses</strong> to let the assessor decide.',
                        'Use the arrows to reorder sections and questions, then <strong>Save template</strong>.',
                    ],
                },
                {
                    title: 'Good to know',
                    bullets: [
                        'Template names must be unique among your active templates, ignoring capital letters.',
                        'Only one template can be the default. Making another the default replaces it.',
                        'A template has to keep at least one section, and each section at least one question.',
                        'Suggested answers are written for a No or Unknown answer only. A Yes never shows any.',
                    ],
                },
            ],
        },
        {
            id: 'matching',
            title: 'Which Template a New Report Uses',
            content: `<p class="mb-4">When a Fire Risk Assessment is created for a job, Opscel picks the questions like this. The first match wins:</p>`,
            subsections: [
                {
                    title: 'In order',
                    steps: [
                        'An <strong>active template</strong> that lists the job\'s <strong>service type</strong>.',
                        'Otherwise your <strong>default template</strong>.',
                        'Otherwise the <strong>built-in questions</strong>, exactly as before templates existed.',
                    ],
                },
                {
                    title: 'Each report keeps its own copy',
                    content: `<p>The questions are copied into the report at the moment it is created. Editing or archiving the template afterwards does not change reports already started. The report you issue matches the questions the assessor actually answered.</p>`,
                },
            ],
        },
        {
            id: 'assessors',
            title: 'Suggested Answers for the Assessor',
            content: `<p class="mb-4">Under a <strong>No</strong> or <strong>Unknown</strong>, the assessor sees the suggested answers you wrote, on the office form and in the field app. Try it on the mockup: tap a suggestion, then <strong>+ Add action</strong>.</p>`,
            subsections: [
                {
                    title: 'On the phone',
                    mockup: 'fra-suggested-answers',
                },
                {
                    title: 'How it behaves',
                    bullets: [
                        '<strong>Tapping a suggestion adds it to the comment</strong> on a new line. It never replaces what the assessor has typed, and tapping the same one again does not repeat it.',
                        '<strong>+ Add action</strong> appends the pre-filled action to the action plan, once per question. The button then reads <strong>Action added</strong>.',
                        'If the action plan cannot be read, nothing is added and the assessor is told so. They can open the action plan and save it again.',
                        'Everything a suggestion fills in is an ordinary field the assessor can edit. The assessor still decides the answer.',
                        'Choosing <strong>Yes</strong> hides the suggestions.',
                    ],
                },
            ],
        },
        {
            id: 'action-plan',
            title: 'The Action Plan, Severity and Timescales',
            content: `<p class="mb-4">Every action has a <strong>severity</strong> and a <strong>timescale</strong>, and a due date that Opscel works out from the date of assessment. The action plan prints on the last pages of the report, after the photographs.</p>
<p class="mb-4">This is how the end of the report looks (fictional data):</p>`,
            subsections: [
                {
                    title: 'The action plan page',
                    mockup: 'fra-action-plan',
                },
                {
                    title: 'The built-in severities and timescales',
                    content: `<p class="mb-4">Severity and timescale are chosen separately for each action, so a Minor action can be due immediately and a Serious one can be given a longer plan if the assessor judges it so. The built-in choices are:</p>`,
                    table: {
                        headers: ['Severity', 'Timescale', 'Due date'],
                        rows: [
                            ['<strong>Serious</strong>', 'Immediate (7 days)', '7 days after the date of assessment'],
                            ['<strong>Minor</strong>', 'Short term (3 months)', '3 months after the date of assessment'],
                            ['<strong>Best practice</strong>', 'Medium term (6 months)', '6 months after the date of assessment'],
                            ['', 'Long term (12 months)', '12 months after the date of assessment'],
                        ],
                    },
                },
                {
                    title: 'Due dates',
                    content: `<p>Pick a timescale and Opscel works the due date out from the <strong>date of assessment</strong>, so nobody does the sum by hand. If the assessor enters a due date of their own, that date is used instead.</p>`,
                },
                {
                    title: 'Reports you issued before',
                    content: `<p>A report issued before this layout keeps the layout it was issued with. Nothing about an old report changes.</p>`,
                },
            ],
        },
        {
            id: 'editing-safely',
            title: 'Editing and Archiving Templates Safely',
            subsections: [
                {
                    title: 'What changes and what does not',
                    table: {
                        headers: ['You do this', 'New reports', 'Reports already started or issued'],
                        rows: [
                            ['<strong>Edit a template</strong>', 'Use the new questions', 'Keep their own copy, unchanged'],
                            ['<strong>Archive a template</strong>', 'It is no longer offered or matched', 'Keep their own copy, unchanged'],
                            ['<strong>Change the default</strong>', 'The new default is used when no service type matches', 'Unchanged'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'not-rams',
            title: 'Fire Risk Assessment or RAMS?',
            content: `<p class="mb-4">Both are called "risk assessments" and they are different documents.</p>`,
            subsections: [
                {
                    title: 'The difference',
                    table: {
                        headers: ['', 'Fire Risk Assessment', 'RAMS'],
                        rows: [
                            ['<strong>About</strong>', 'A client\'s <strong>premises</strong> and the people in them', 'Your <strong>engineers</strong> and the work they are about to do'],
                            ['<strong>Produced as</strong>', 'A numbered FRA certificate and PDF report', 'A risk assessment and method statement with numbered revisions'],
                            ['<strong>Set up in</strong>', 'Settings → Risk assessment templates', 'Settings → RAMS'],
                            ['<strong>Read more</strong>', 'This guide', '<a href="/docs/rams" class="text-secondary hover:underline">RAMS guide</a>'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'a-note-on-responsibility',
            title: 'A Note on Responsibility',
            content: `<p class="mb-4">Opscel provides the questions, the structure and the report. Competence, judgement and the conclusions of a fire risk assessment remain the <strong>assessor's responsibility</strong>. Templates and suggested answers are a starting point to review against the premises in front of you. For the legal background, see our guide to <a href="/blog/fire-risk-assessment-uk" class="text-secondary hover:underline">fire risk assessments in the UK</a>.</p>`,
        },
    ],
    relatedGuides: [
        {
            title: 'Certificates Guide',
            description: 'How certificates are raised, numbered, signed and issued, including the Fire Risk Assessment type.',
            href: '/docs/certificates',
        },
        {
            title: 'Fire Safety Jobsheets & Fault Tracking',
            description: 'Combined BS 5839 and BAFE SP203 jobsheets, the site Panels list and carried-forward faults.',
            href: '/docs/fire-safety-features',
        },
        {
            title: 'RAMS - Support Guide',
            description: 'Risk assessments and method statements for the work your engineers do, not the premises they assess.',
            href: '/docs/rams',
        },
        {
            title: 'Settings Tour',
            description: 'Where every setting lives, including Risk assessment templates.',
            href: '/docs/settings-tour',
        },
        {
            title: 'Announcement: your own fire risk assessment questions',
            description: 'What is new in the fire risk assessment report and why.',
            href: '/blog/fire-risk-assessment-templates',
        },
    ],
};
