import { IDocGuide } from '@/types';

export const variationsGuide: IDocGuide = {
    slug: 'variations',
    title: 'Variations — Support Guide',
    description: 'Extra, changed or omitted work on a job converted from a quote: price it, send it for approval, record an approval taken by phone, and bill each approved variation exactly once.',
    lastUpdated: '2026-10-19',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: '<p class="mb-4">A <strong>variation</strong> is extra, changed or omitted work on a job that was converted from a quote. You price it on the job, send it to the customer, and they <strong>approve it from a link in the email</strong> or in their customer portal. If they agree by phone or on site, you record that approval yourself. The quote is never edited and no new job is created. The price simply becomes:</p>'
                + '<p class="mb-4 font-mono">original quote + approved variations = current agreed price</p>'
                + '<p class="mb-4">A variation still awaiting approval is shown beside that figure but never added to it. Once approved, it shows up on the job\'s invoice as its own lines, and Opscel will not let any variation line be billed twice.</p>',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p><strong>Tier:</strong> All plans<br><strong>Works on:</strong> jobs converted from a quote, while the job is draft, scheduled, in progress or on hold. A completed job must be reopened first. A cancelled job can\'t take variations.</p>',
                },
                {
                    title: 'Not the same as a BS 5839 variation',
                    content: '<p>On fire alarm worksheets, certificates and the logbook, a "variation" is a departure from BS 5839-1 agreed with the client. That is a different thing. This guide is about the commercial kind: priced change orders on a job.</p>',
                },
                {
                    title: 'What this guide covers',
                    bullets: [
                        '<a href="#where-to-find-it" class="text-primary hover:underline">Where variations live on a job</a>',
                        '<a href="#raising-a-variation" class="text-primary hover:underline">Raising and pricing a variation</a>',
                        '<a href="#getting-approval" class="text-primary hover:underline">Getting the customer\'s approval</a>',
                        '<a href="#statuses" class="text-primary hover:underline">Statuses and what changes them</a>',
                        '<a href="#agreed-price-and-invoicing" class="text-primary hover:underline">The agreed price, profitability and invoicing</a>',
                        '<a href="#records" class="text-primary hover:underline">Records: PDFs, activity and the approval record</a>',
                        '<a href="#quote-terms" class="text-primary hover:underline">Adding a variations clause to your quote terms</a>',
                        '<a href="#roles" class="text-primary hover:underline">Who can do what</a>',
                    ],
                },
            ],
        },
        {
            id: 'where-to-find-it',
            title: 'Where Variations Live on a Job',
            content: '<p class="mb-4">Open the job and go to the <strong>Financial</strong> tab. The <strong>Variations</strong> card sits at the top. Roles that can\'t see a job\'s finances, such as a Site Manager, see the same card on a tab called <strong>Variations</strong> instead.</p>',
            subsections: [
                {
                    title: 'What the card shows',
                    bullets: [
                        '<strong>The agreed price:</strong> Original quote, Approved variations (with a count), and the Current agreed price, inc. VAT. Awaiting approval is listed separately and not counted until the customer agrees.',
                        '<strong>Billing so far</strong> for approved variations, as agreed · billed · to bill (for roles that can see invoices).',
                        '<strong>Contract summary (PDF)</strong>, a statement of the whole contract as it stands today.',
                        '<strong>One row per variation:</strong> its number, title, status, how long ago it was sent, the client\'s instruction, who approved it and how, its amount, and the buttons you can use.',
                    ],
                },
                {
                    title: 'On the quote',
                    content: '<p>Once a quote is converted, its page also shows a <strong>Variations on this job</strong> card with the same agreed-price summary, so you can see the full contract from either side.</p>',
                },
            ],
        },
        {
            id: 'raising-a-variation',
            title: 'Raising and Pricing a Variation',
            content: '<p class="mb-4">On the Variations card, press <strong>Add variation</strong>. Nothing reaches the customer until you send it, so you can save a draft and finish it later.</p>',
            subsections: [
                {
                    title: 'Steps',
                    steps: [
                        { step: 'Give it a title', description: 'Something the customer will recognise, for example "Extra sockets in the kitchen".' },
                        { step: 'Choose a reason (optional)', description: 'Customer request, Found on site, Omission or Other.' },
                        { step: 'Add a description', description: 'Plain text the customer sees on the approval page and the PDF.' },
                        { step: 'Add the lines', description: 'Type each line or use Add from catalogue. Each line takes a quantity, unit, unit cost, markup % and VAT %, priced the same way as your quote lines. The editor shows Net, VAT and Total as you go.' },
                        { step: 'Check the impact', description: 'The editor shows the current agreed price and what it will become if this variation is approved.' },
                        { step: 'Save draft', description: 'The variation is numbered and saved as a Draft. Send it when it\'s ready.' },
                    ],
                },
                {
                    title: 'Good to know',
                    bullets: [
                        '<strong>Numbering:</strong> variations are numbered per contract using the quote number: the first on quote QT-2026-0042 is <strong>QT-2026-0042-V1</strong>, the next QT-2026-0042-V2. A number is never reused, even if a variation is withdrawn.',
                        '<strong>Work left out:</strong> tick a line\'s omit option to credit that work. It reduces the agreed price and shows as a negative amount.',
                        '<strong>Overheads:</strong> if the quote has an overheads / prelims percentage, it is spread into the variation\'s line prices in the same way.',
                        '<strong>Price to follow:</strong> a line can be left unpriced on a draft. A Site Manager can raise an unpriced draft for the office to price. A variation must be fully priced before it can be sent or approved.',
                        '<strong>Editing a sent variation</strong> moves it back to Draft. The copy you sent stays on record, and the customer\'s old link now says the variation has changed, so send it again when you\'re done.',
                    ],
                },
                {
                    title: 'Proceed now, price to follow',
                    content: '<p class="mb-4">Sometimes a client tells the engineer to go ahead before you\'ve priced the work. Use <strong>Record instruction</strong> on the variation to note that it was instructed: how (email, phone, site meeting, verbally, letter or other), when, who by, any notes, and an optional attachment such as their email saved as a PDF. The row then reads, for example, "Instructed at a site meeting on 14 Oct by J. Smith".</p><p>An instruction is evidence only. It doesn\'t approve the variation or change the price. The customer still approves the priced variation afterwards.</p>',
                },
            ],
        },
        {
            id: 'getting-approval',
            title: 'Getting the Customer\'s Approval',
            content: '<p class="mb-4">There are three ways a variation can be approved. Each one records who approved it, when, and how.</p>',
            subsections: [
                {
                    title: '1. By email link (no login)',
                    content: '<p class="mb-4">Press <strong>Send for approval</strong>. Pick the recipients (the job\'s contacts are offered, and you can add any email address) and add an optional message. The customer gets an email showing the variation\'s total and what the agreed price becomes if they approve, with a button to open it.</p><p class="mb-4">The link opens a page showing the job, site, quote, every line and the totals, with a PDF download. The customer can:</p>',
                    bullets: [
                        '<strong>Approve variation:</strong> enter their name and email and sign to confirm "I approve variation QT-2026-0042-V1 and the change to the agreed price."',
                        '<strong>Decline:</strong> with an optional name and reason.',
                    ],
                },
                {
                    title: '2. In the customer portal',
                    content: '<p>Customers with <a href="/docs/customer-portal" class="text-primary hover:underline">portal access</a> see the job\'s variations on the job page, and the whole contract\'s variations on the quote page. They approve (with a signature) or decline them there, just as from the email link. Drafts are never shown in the portal.</p>',
                },
                {
                    title: '3. Recorded on the customer\'s behalf',
                    content: '<p class="mb-4">If the customer agreed by phone, email or in person, press <strong>Record approval</strong>. You enter who approved it, how (phone, email, verbally, in person or other), the date they agreed, and optionally their email address and an attachment, such as their email saved as a PDF. This works on a draft or a sent variation, as long as every line is priced.</p><p>The row then reads "Approved on behalf · phone · J. Smith · 14 Oct", and the customer\'s portal shows that it was approved on their behalf and by whom.</p>',
                },
                {
                    title: 'When the customer answers',
                    bullets: [
                        'The office gets an email when a customer approves or declines from the link or the portal. It goes to whoever last sent or changed the variation.',
                        '<strong>Resend</strong> sends a sent variation again, for example to another contact. If nothing changed, it is the same version.',
                        'A link only ever approves the exact version it was sent with. If you edit the variation, the old link stops accepting answers.',
                    ],
                },
            ],
        },
        {
            id: 'statuses',
            title: 'Statuses and What Changes Them',
            table: {
                headers: ['Status', 'Meaning', 'How it gets there'],
                rows: [
                    ['<strong>Draft</strong>', 'Being written or priced. The customer can\'t see it.', 'Add variation, or editing a sent variation.'],
                    ['<strong>Awaiting approval</strong>', 'Sent to the customer. The row shows "sent 3 days ago". Its amount is not yet in the agreed price.', 'Send for approval.'],
                    ['<strong>Approved</strong>', 'Added to the current agreed price and ready to invoice.', 'The customer approves by link or portal, or you record an approval.'],
                    ['<strong>Declined</strong>', 'The customer said no. The reason, if given, is shown on the row.', 'The customer declines by link or portal.'],
                    ['<strong>Withdrawn</strong>', 'No longer needed. It keeps its number, and the customer\'s link says it was withdrawn.', '<strong>Withdraw</strong> (a sent variation) or <strong>Discard draft</strong>. Cancelling the job also withdraws any draft or sent variations.'],
                ],
            },
            subsections: [
                {
                    content: '<p>Approved and declined are final. Variations are never deleted, so the full history of the contract stays on record. Reopening a cancelled job does not bring its withdrawn variations back.</p>',
                },
            ],
        },
        {
            id: 'agreed-price-and-invoicing',
            title: 'The Agreed Price, Profitability and Invoicing',
            subsections: [
                {
                    title: 'Profitability and reports',
                    bullets: [
                        'An approved variation adds to the job\'s value and quoted cost, so <a href="/docs/job-profitability" class="text-primary hover:underline">job profitability</a>, customer profitability and the reports include it. An omission reduces them.',
                        'The jobs CSV export has an <strong>Approved Variations (£)</strong> column.',
                        'Quote statistics such as conversion rate and quoted value are not affected. They describe the quote as it was accepted.',
                    ],
                },
                {
                    title: 'Invoicing an approved variation',
                    content: '<p class="mb-4">When you create an invoice from the job, the dialog has an <strong>Approved variations</strong> section, grouped by variation, with every line that still has something left to bill <strong>ticked</strong>. Untick what you don\'t want on this invoice, for example to bill one variation now and another later. A line that has been part-billed is offered as the balance remaining.</p>',
                    bullets: [
                        '<strong>Billed exactly once:</strong> a variation line can\'t be invoiced for more than was agreed, across all of the job\'s invoices. Draft invoices count, so two drafts can\'t claim the same work. Voiding an invoice frees its amount to bill again.',
                        'Only approved variations on this job can be invoiced. Variation lines can\'t go on a deposit invoice.',
                        'An invoice with omissions can come down, but it can\'t go below £0.',
                        'An omitted line shows as a credit (a negative amount) in the invoice review.',
                    ],
                },
                {
                    title: 'VAT',
                    content: '<p>Variations follow the same VAT setting as your quotes. If you show prices with VAT, the email, approval page and PDFs show VAT and inc-VAT totals. If not, they show ex-VAT totals only. Each line\'s VAT rate defaults to the quote\'s rate.</p>',
                },
            ],
        },
        {
            id: 'records',
            title: 'Records: PDFs, Activity and the Approval Record',
            content: '<p class="mb-4">Variations are built so you can show exactly what was agreed if an invoice is ever disputed.</p>',
            subsections: [
                {
                    title: 'What\'s kept',
                    table: {
                        headers: ['Record', 'Where', 'What it is'],
                        rows: [
                            ['<strong>Sent copy</strong>', 'Button on the variation row', 'A PDF frozen at the moment you sent it. Later edits never change it.'],
                            ['<strong>Approved copy</strong>', 'Button on the variation row', 'The frozen version the customer approved. Like the sent copy, it never changes.'],
                            ['<strong>Activity</strong>', 'Button on the variation row', 'A timeline of the customer\'s activity, in UK time: when it was sent, when they opened it, and who approved or declined it, with IP address, device and approximate location. The location comes from the IP address, so it shows where the connection was, not exactly where the person was.'],
                            ['<strong>Approval record (PDF)</strong>', 'In the Activity panel, for an approved variation', 'One document to send the customer as proof of their approval: what they agreed, when, how and the signature.'],
                            ['<strong>Contract summary (PDF)</strong>', 'The Variations card, and the converted quote', 'A statement "as at" today of the whole contract: original, approved and current agreed price, then every variation the customer has seen with its status, dates and who decided it. For roles that can see invoices, it also shows agreed · billed · to bill. Drafts are left out.'],
                        ],
                    },
                },
            ],
        },
        {
            id: 'quote-terms',
            title: 'Adding a Variations Clause to Your Quote Terms',
            content: '<p class="mb-4">It helps if your customer knows how changes are handled before work starts. In <a href="/docs/quote-defaults" class="text-primary hover:underline">Quote Defaults</a>, under <strong>Default Terms &amp; Conditions</strong>, press <strong>Add variations clause</strong>. It adds a short paragraph to the end of your default terms explaining that extra, changed or omitted work is agreed as a numbered variation before it\'s carried out, that the customer approves it online, in the portal or by telling you, and that unapproved variations are not charged.</p><p>Your existing terms stay as they are. The clause is only added to the form: press <strong>Save</strong> to use it on new quotes, and edit the wording first if you like. Quotes already sent are not changed.</p>',
        },
        {
            id: 'roles',
            title: 'Who Can Do What',
            table: {
                headers: ['Role', 'See variations', 'See prices', 'Raise and edit', 'Price', 'Send', 'Record approval', 'Withdraw'],
                rows: [
                    ['Super Admin, Admin, Contract Manager, Sales Manager', '✓', '✓', '✓', '✓', '✓', '✓', '✓'],
                    ['Accounts', '✓', '✓', '✓', '✓', '✓', '—', '—'],
                    ['Site Manager', '✓', '—', '✓ (unpriced drafts)', '—', '—', '—', '—'],
                    ['Viewer', '✓', '✓', '—', '—', '—', '—', '—'],
                    ['Engineer', '—', '—', '—', '—', '—', '—', '—'],
                ],
            },
            subsections: [
                {
                    content: '<p>Roles that can raise a variation can also record the client\'s instruction. Variations are raised and sent from the office. They aren\'t available in the field app yet, so an engineer who finds extra work should tell the office, or a Site Manager can raise an unpriced draft.</p>',
                },
            ],
        },
        {
            id: 'faq',
            title: 'FAQ',
            subsections: [
                {
                    title: 'Why is there no Add variation button?',
                    content: '<p>The job has to be converted from a quote and must not be completed or cancelled. The card says which: "Variations can be added to jobs converted from a quote", "This job is completed. Reopen it to add a variation", or "Variations cannot be added to a cancelled job". The button is also hidden for roles that can\'t raise variations.</p>',
                },
                {
                    title: 'Why is there no Record approval button?',
                    content: '<p>Every line must be priced first, and your role needs permission to record approvals (Accounts, for example, can\'t).</p>',
                },
                {
                    title: 'The customer says their link "has changed". What happened?',
                    content: '<p>The variation was edited after that email was sent. Send it again and ask them to use the newest email.</p>',
                },
                {
                    title: 'Can I change an approved variation?',
                    content: '<p>No. Approved is final, so the record of what the customer agreed can\'t change. If more needs to change, raise another variation. To give money back, raise one that omits the work.</p>',
                },
                {
                    title: 'Does approving a variation change the original quote?',
                    content: '<p>No. A converted quote is the agreed contract and stays locked. The variation sits on top of it, and the current agreed price is the quote plus the approved variations.</p>',
                },
            ],
        },
    ],
    relatedGuides: [
        {
            title: 'Quote to Invoice Workflow',
            description: 'How quotes, jobs and invoices connect, including deposits and Good-Better-Best options.',
            href: '/docs/quote-to-invoice-workflow',
        },
        {
            title: 'Quotations',
            description: 'Create, send and convert quotes.',
            href: '/docs/quotations',
        },
        {
            title: 'Customer Portal',
            description: 'What your customers can see and approve in their portal.',
            href: '/docs/customer-portal',
        },
        {
            title: 'Job Profitability',
            description: 'How Estimated and Actual are worked out on a job\'s Financial tab.',
            href: '/docs/job-profitability',
        },
    ],
};
