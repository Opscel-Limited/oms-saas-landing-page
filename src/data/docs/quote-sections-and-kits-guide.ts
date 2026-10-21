import { IDocGuide } from '@/types';

const figure = (src: string, alt: string, caption: string) =>
    `<figure class="my-8"><div class="overflow-x-auto"><img src="${src}" alt="${alt}" class="w-full rounded-lg border border-border bg-white" style="min-width:560px" loading="lazy" /></div><figcaption class="mt-3 text-sm text-muted-foreground text-center">${caption}</figcaption></figure>`;

export const quoteSectionsAndKitsGuide: IDocGuide = {
    slug: 'quote-sections-and-kits',
    title: 'Quote Sections and Kits',
    description: 'Split a quote into sections (one per area of a building), and save reusable kits of products and labour so a repeated job, such as a fire alarm zone, goes onto a quote in a few clicks.',
    lastUpdated: '2026-10-21',
    sections: [
        {
            id: 'overview',
            title: 'The 30-Second Version',
            content: '<p class="mb-4">A <strong>section</strong> is a headed block of lines on a quote, with its own description and subtotal. Most contractors use one section per area of a building: "Ground floor - Reception", "First floor - Offices", "Plant room".</p>'
                + '<p class="mb-4">A <strong>kit</strong> is a reusable set of products and labour, for example everything needed for one fire alarm zone. Add the kit to a quote once for each area and it arrives as that many sections, each with its own editable lines. You then add or remove lines for just that area.</p>'
                + '<p class="mb-4">Quotes without sections work exactly as before. Sections are optional and you can turn them on for any quote.</p>',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p><strong>Tier:</strong> All plans<br><strong>Roles:</strong> the same roles that can create and edit quotes. See the <a href="/docs/quotations" class="text-primary hover:underline">Quotations guide</a>.</p>',
                },
                {
                    title: 'When to use them',
                    content: '<p>A fire alarm quote for a three-storey building: the same set of detectors, call points and sounders on every floor, with a different number of devices on each. Build the kit once, add it three times, and change the quantities on each floor. The customer sees a clear scope of works floor by floor, and you see a subtotal per floor.</p>',
                },
                {
                    title: 'What this guide covers',
                    bullets: [
                        '<a href="#sections" class="text-primary hover:underline">Splitting a quote into sections</a>',
                        '<a href="#customer-sees" class="text-primary hover:underline">Choosing what the customer sees</a>',
                        '<a href="#kits" class="text-primary hover:underline">Creating and managing kits</a>',
                        '<a href="#adding-kits" class="text-primary hover:underline">Adding a kit to a quote</a>',
                        '<a href="#worked-example" class="text-primary hover:underline">Worked example: a fire alarm quote for three floors</a>',
                        '<a href="#customer-view" class="text-primary hover:underline">How it looks to your customer</a>',
                        '<a href="#good-to-know" class="text-primary hover:underline">Good to know</a>',
                        '<a href="#faq" class="text-primary hover:underline">FAQ</a>',
                    ],
                },
            ],
        },
        {
            id: 'sections',
            title: 'Splitting a Quote into Sections',
            content: '<p class="mb-4">In the quote builder, the line items area has a <strong>Group into sections</strong> button. On a quote that already has lines, the first press puts those lines into a section called <strong>Items</strong>, which you can rename. After that the button reads <strong>Add section</strong>.</p>',
            subsections: [
                {
                    title: 'What a section holds',
                    bullets: [
                        '<strong>Heading:</strong> editable. Shown to the customer.',
                        '<strong>Description:</strong> optional text the customer sees under the heading, for example the scope of works for that area.',
                        '<strong>Its own lines:</strong> products, labour and custom lines.',
                        '<strong>Subtotal:</strong> the total of the section\'s lines, ex VAT.',
                        '<strong>Customer sees:</strong> how much of the section the customer is shown. See <a href="#customer-sees" class="text-primary hover:underline">Choosing what the customer sees</a>.',
                    ],
                },
                {
                    content: figure('/images/docs/quote-sections-and-kits/section-card.svg', 'A sample section card in the quote builder: heading Ground floor - Reception, Customer sees set to Lines and prices, three lines and a subtotal of 422.00 ex VAT.', 'A section in the quote builder (sample data).'),
                },
                {
                    title: 'Steps to build a quote with sections',
                    steps: [
                        'Start or open a quote and go to the <strong>Line Items</strong> step',
                        'Press <strong>Group into sections</strong> (or <strong>Add section</strong> if the quote already has sections)',
                        'Type a <strong>heading</strong> and, if you want, a <strong>description</strong> for the customer',
                        'Add lines from the product catalogue or press <strong>+ Custom line</strong> inside the section',
                        'Repeat for each area. New catalogue, custom and call-out lines go into the section you last worked in',
                        'Check each section\'s subtotal, then continue to review and send as normal',
                    ],
                },
                {
                    title: 'Working with sections',
                    bullets: [
                        '<strong>Move up / Move down:</strong> change the order. The customer sees them in this order, numbered 1, 2, 3.',
                        '<strong>Duplicate:</strong> copies the heading, description and lines. Use it to repeat an area, then change the heading and adjust the lines.',
                        '<strong>Save as kit:</strong> keeps the section as a reusable <a href="#kits" class="text-primary hover:underline">kit</a>.',
                        '<strong>Delete:</strong> removes the section and its lines. Opscel asks first if the section has lines.',
                        '<strong>Collapse:</strong> fold a section away to make a long quote easier to work on.',
                        '<strong>Drag lines</strong> from one section into another.',
                        '<strong>Kit lines into this section:</strong> adds a kit\'s lines to this section instead of creating a new one.',
                    ],
                },
                {
                    title: 'Same product in different sections',
                    content: '<p>Adding the same catalogue product again to the <em>same</em> section raises its quantity. Adding it to a <em>different</em> section creates a separate line there. That way six detectors on the ground floor and eight on the first floor stay as two lines.</p>',
                },
                {
                    title: 'Loading a quote template',
                    content: '<p>On a quote that already has sections, loading a <a href="/docs/quotations#quote-templates" class="text-primary hover:underline">quote template</a> adds the template\'s lines as a <strong>new section</strong> named after the template, rather than replacing what you have built. On a quote without sections, a template still replaces the lines as it always has.</p>',
                },
            ],
        },
        {
            id: 'customer-sees',
            title: 'Choosing What the Customer Sees',
            content: '<p class="mb-4">Each section has a <strong>Customer sees</strong> choice:</p>'
                + '<ul class="list-disc pl-6 mb-4 space-y-1"><li><strong>Lines &amp; prices:</strong> every line with its price, plus the section subtotal.</li><li><strong>Lines, no prices:</strong> the lines are listed but without prices. The section subtotal is shown.</li><li><strong>Section total only:</strong> the customer sees the heading, description and one section total, not the lines.</li></ul>'
                + '<p class="mb-4">This sits alongside the quote\'s own price display setting (<strong>Detailed</strong>, <strong>Itemised - lines shown, prices hidden</strong>, or <strong>Total only</strong>). <strong>A section can only hide more than the quote does, never show more.</strong> If the quote is set to hide prices, a section set to Lines &amp; prices still hides them.</p>',
            subsections: [
                {
                    title: 'Total-only quotes keep the scope visible',
                    content: '<p>On a quote set to <strong>Total only</strong>, the section headings and descriptions still print. The customer sees the scope of works area by area, but no lines and no prices.</p>',
                },
                {
                    title: 'In the builder',
                    content: '<p>The Review step shows each section\'s subtotal and tells you what the customer will see when a section hides its lines or prices, so you can check before you send.</p>',
                },
            ],
        },
        {
            id: 'kits',
            title: 'Creating and Managing Kits',
            content: '<p class="mb-4">A kit is a saved set of products and labour. There are two ways to make one.</p>',
            subsections: [
                {
                    title: 'Create a kit in Settings',
                    steps: [
                        'Go to <strong>Settings → Quote kits</strong>. You can also press the <strong>Kits</strong> button on the Quote Templates settings page',
                        'Press <strong>New kit</strong>',
                        'Enter a <strong>Kit name</strong> (for example "Fire alarm zone"). Only your team sees the name',
                        'Enter a <strong>Default section heading</strong> and, if you like, a <strong>Default section description</strong>. These fill in when you add the kit to a quote',
                        'Add the <strong>lines</strong>: products from your catalogue, and labour or other custom lines. A custom line (one not picked from the catalogue) needs a <strong>category</strong>',
                        'Check the totals: the editor shows <strong>Labour hours</strong>, <strong>Cost</strong>, <strong>Margin on sell</strong> and <strong>Sell total</strong>',
                        'Press <strong>Create kit</strong>',
                    ],
                },
                {
                    title: 'Save a section as a kit',
                    steps: [
                        'Build a section on a quote the way you want it',
                        'Press <strong>Save as kit</strong> on that section',
                        'Enter a <strong>Kit name</strong> and save',
                        'The kit appears under <strong>Kits</strong> next time you build a quote',
                    ],
                },
                {
                    title: 'Managing your kits',
                    content: '<p>The Quote kits page lists your kits. Open one to edit it, mark it inactive, or delete it. Deleting a kit does not touch any quote that already used it.</p>',
                },
            ],
        },
        {
            id: 'adding-kits',
            title: 'Adding a Kit to a Quote',
            content: '<p class="mb-4">In the quote builder the sidebar has two tabs: <strong>Catalogue</strong> and <strong>Kits</strong>. Open <strong>Kits</strong>, search if you need to, and choose a kit.</p>',
            subsections: [
                {
                    content: figure('/images/docs/quote-sections-and-kits/add-kit-dialog.svg', 'The Add a kit dialog: Fire alarm zone, added as New sections for 3 areas with a heading for each, and a list of lines where one is unticked to leave it out.', 'The Add a kit dialog (sample data).'),
                },
                {
                    title: 'Steps to add a kit',
                    steps: [
                        'Open the <strong>Kits</strong> tab in the builder sidebar and choose a kit. The <strong>Add a kit</strong> dialog opens',
                        'Under <strong>Add it as</strong>, choose <strong>New sections</strong> (one section per area) or <strong>Into an existing section</strong>',
                        'For New sections, set <strong>how many areas</strong> and type a heading for each (for example Ground floor, First floor, Second floor)',
                        'For Into an existing section, pick the <strong>Section</strong> to add the lines to',
                        'Under <strong>Lines</strong>, untick any line you do not need',
                        'Press <strong>Add 3 sections</strong> (the button names the number you chose) or <strong>Add lines</strong>',
                    ],
                },
                {
                    title: 'What happens to the lines',
                    content: '<p>The kit\'s lines are <strong>copied</strong> onto the quote at <strong>today\'s catalogue prices</strong>. From then on they are ordinary quote lines: change quantities, prices or descriptions, add or delete lines. <strong>Editing them on the quote never changes the kit.</strong> And if you later change the kit, quotes you have already built are not affected.</p>',
                },
            ],
        },
        {
            id: 'worked-example',
            title: 'Worked Example: Fire Alarm Quote for Three Floors',
            subsections: [
                {
                    steps: [
                        'Once, in <strong>Settings → Quote kits</strong>, create a kit called "Fire alarm zone" with a default heading "Fire alarm" and lines for detectors, call points, sounders and an hour of labour per device',
                        'Start a new quote for the customer',
                        'In the builder, open the <strong>Kits</strong> tab, choose "Fire alarm zone", choose <strong>New sections</strong>, set the number of areas to 3 and type the headings "Ground floor", "First floor" and "Second floor"',
                        'Press <strong>Add 3 sections</strong>. Three sections appear, each with the kit\'s lines',
                        'On the second floor, change the detector quantity to 8 and delete the sounder line that area does not need',
                        'On the ground floor, add a description: "Detection to reception, offices and stores"',
                        'Need another area later? Press <strong>Duplicate</strong> on the nearest match, rename it and adjust the lines',
                        'Set <strong>Customer sees</strong> on each section, review the subtotals, and send the quote as normal',
                    ],
                },
            ],
        },
        {
            id: 'customer-view',
            title: 'How It Looks to Your Customer',
            content: '<p class="mb-4">The quote PDF and the customer\'s online quote show the same thing. Each section appears numbered with its heading and description, its lines numbered <strong>1.1, 1.2</strong> and so on, and its subtotal. A quote with <strong>two or more sections</strong> shown in <strong>Detailed</strong> display also opens with a <strong>Summary of works</strong> table listing every section.</p>',
            subsections: [
                {
                    content: figure('/images/docs/quote-sections-and-kits/customer-quote.svg', 'A sample customer quote: a Summary of works table, then Section 1 Ground floor with numbered lines 1.1 to 1.3 and prices, and Section 2 First floor shown without line prices.', 'What the customer sees (sample data). The second section is set to Lines, no prices.'),
                },
                {
                    title: 'Totals and VAT',
                    content: '<p>Section subtotals are shown ex VAT. The quote\'s totals block (subtotal, discount, VAT and total) works as it always has and is the only place the quote total appears. Optional lines are left out of subtotals, as they are out of the quote total.</p>',
                },
                {
                    title: 'Invoices stay simple',
                    content: '<p>Invoices created from a sectioned quote are a plain list of lines. Sections are for presenting the quote, not for the invoice. Converting an accepted quote to a job works the same as before.</p>',
                },
                {
                    title: 'Quotes without sections',
                    content: '<p>A quote with no sections looks exactly as it did before.</p>',
                },
            ],
        },
        {
            id: 'good-to-know',
            title: 'Good to Know',
            subsections: [
                {
                    bullets: [
                        '<strong>Templates keep lines, not section headings.</strong> To reuse a whole section, with its heading and description, save it as a kit.',
                        '<strong>Sections are not available inside Good / Better / Best package options.</strong> Quotes using pricing tiers cannot be split into sections.',
                        '<strong>Kits are copied, not linked.</strong> Changing a kit never changes an existing quote, and changing a quote never changes the kit.',
                        '<strong>Prices come from the catalogue on the day.</strong> A kit line linked to a catalogue product picks up the current price when you add it. A custom line keeps the price saved in the kit.',
                        '<strong>Custom kit lines need a category</strong>, like custom lines on a quote.',
                        '<strong>The kit name is internal.</strong> Customers see the section heading, not the kit name.',
                    ],
                },
            ],
        },
        {
            id: 'faq',
            title: 'FAQ',
            subsections: [
                {
                    title: 'Do I have to use sections?',
                    content: '<p>No. They are optional, and a quote without sections is unchanged.</p>',
                },
                {
                    title: 'Can I hide prices for one area but not another?',
                    content: '<p>Yes. Set <strong>Customer sees</strong> per section. A section can hide more than the quote\'s price display, never less.</p>',
                },
                {
                    title: 'I changed a kit, but my existing quote did not change. Why?',
                    content: '<p>Lines are copied onto the quote when you add the kit. Remove the section and add the updated kit again if you want the new version.</p>',
                },
                {
                    title: 'Can customers see the kit name?',
                    content: '<p>No. Only your team sees it. The customer sees the section heading and description.</p>',
                },
                {
                    title: 'Why can\'t I save my kit?',
                    content: '<p>Every custom line in a kit needs a category, and a kit needs a name and at least one line.</p>',
                },
                {
                    title: 'Will sections appear on the invoice?',
                    content: '<p>No. Invoices list lines only.</p>',
                },
                {
                    title: 'I loaded a template and my sections are still there. Is that right?',
                    content: '<p>Yes. On a quote that already has sections, a template\'s lines are added as a new section instead of replacing your work.</p>',
                },
            ],
        },
    ],
    relatedGuides: [
        { title: 'Quotations', description: 'Create, send and convert quotes.', href: '/docs/quotations' },
        { title: 'Quote Defaults', description: 'What a new quote starts with.', href: '/docs/quote-defaults' },
        { title: 'Quote to Invoice Workflow', description: 'How quotes, jobs and invoices connect.', href: '/docs/quote-to-invoice-workflow' },
    ],
};
