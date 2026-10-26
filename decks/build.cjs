// Builds the two sales decks (PDF) into ../public/decks/.  Run: node decks/build.cjs
// Needs Playwright (`require('playwright')`). Copy lives here; pricing mirrors src/data/pricing.ts.
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const SIGNUP = 'https://app.opscel.com/handler/sign-up';
const DEMO = 'https://www.opscel.com/contact';
const utm = (u, c) => `${u}${u.includes('?') ? '&' : '?'}utm_source=sales-deck&utm_medium=pdf&utm_campaign=${c}`;
const IMG = '../../public/images/';
const LOGO = IMG + 'opscel-logo.png';

const foot = (n, c) => `<div class="foot"><img src="${LOGO}" alt="Opscel"><span>www.opscel.com &nbsp;·&nbsp; ${n}</span></div>`;
const win = (src, cls = '') => `<div class="win ${cls}"><div class="bar"><i></i><i></i><i></i></div><img src="${IMG}${src}"></div>`;
const slide = (tone, body, n) => `<section class="s ${tone}">${body}${foot(n)}</section>`;
const li = (items) => `<ul class="t">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const cta = (c, line) => `
  <div class="col mid" style="flex:1;justify-content:center;text-align:center">
    <div class="eyebrow">Ready when you are</div>
    <h1 style="font-size:84px">${line}</h1>
    <p class="lead" style="margin:22px auto 44px">30-day free trial with full access. Then 50% off your first 3 months. Cancel anytime.</p>
    <a class="btn" href="${utm(SIGNUP, c)}">Start your free trial &rarr;</a>
    <p style="margin-top:34px"><a class="btn2" href="${utm(DEMO, c)}">Or book a 15-minute demo</a></p>
    <p style="margin-top:22px;color:#8a8a92;font-size:18px">app.opscel.com/handler/sign-up</p>
  </div>`;

// ---------------------------------------------------------------- MICRO (1-5 people)
const micro = [
  slide('dark', `
    <div class="row" style="flex:1">
      <div class="col" style="justify-content:center;width:740px">
        <div class="eyebrow">For electricians, fire &amp; solar installers · 1–5 people</div>
        <h1 style="font-size:70px">Stop doing <span class="hl">paperwork</span><br>at 9pm.</h1>
        <p class="lead">Opscel turns a finished job into a compliant certificate, an invoice and your next follow-on job. The same day, typed once.</p>
        <div style="margin-top:34px;display:flex;gap:12px"><span class="pill">30-day free trial</span><span class="pill">50% off first 3 months</span></div>
      </div>
      <div class="grow" style="display:flex;align-items:center;justify-content:center"><img src="${IMG}fire-safety-engineer-job-complete-app.webp" style="height:540px"></div>
    </div>`, 'Micro teams'),
  slide('light', `
    <div class="eyebrow">Sound familiar?</div>
    <h2>You're great at the job.<br>The admin is eating your evenings.</h2>
    <div class="row" style="margin-top:44px">
      ${[['Quotes take all evening','Rebuilding the same Word quote, again, after a full day on site.'],['Certificates typed twice','Test results on paper, then re-typed into a certificate at the kitchen table.'],['Invoices go out late','Paid late because the invoice waited for a spare hour.'],['Follow-on work forgotten','Remedials, annual visits and renewals live in your head.']].map(([t, p], i) => `<div class="card grow"><div class="ico">${i + 1}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}
    </div>`, 'Micro teams'),
  slide('dark', `
    <div class="eyebrow">One flow</div>
    <h2>Type it once. <span class="hl">It carries through.</span></h2>
    <div class="flow">
      ${[['1', 'Quote', 'Customer approves from their email'], ['2', 'Job', 'Scheduled to your phone'], ['3', 'Certificate', 'Completed on site, signed'], ['4', 'Invoice', 'One click from the job'], ['✓', 'Paid', 'Deposits and balances tracked']].map(([n, t, s], i, a) => `<div class="step ${i === a.length - 1 ? 'last' : ''}"><div class="c">${n}</div><b>${t}</b><span>${s}</span></div>${i < a.length - 1 ? '<div class="arr"></div>' : ''}`).join('')}
    </div>
    <p class="lead" style="margin:64px auto 0;text-align:center;max-width:900px">No re-keying customer details. No lost paperwork. One record per job from first quote to final payment.</p>`, 'Micro teams'),
  slide('light', `
    <div class="row mid" style="flex:1">
      <div style="width:600px;flex:none"><img src="${IMG}ui/05-screen.png" style="width:100%;border-radius:22px;box-shadow:0 30px 60px rgba(0,0,0,.3);transform:rotate(-2deg)"></div>
      <div class="grow" style="padding-left:30px">
        <div class="eyebrow">The field app</div>
        <h2>Your office, <span class="hl">in your pocket.</span></h2>
        ${li(['<b>Today\'s route</b> on one screen: every job, address and status', '<b>Works offline.</b> No signal in the plant room? Keep going and it syncs later', '<b>Certificates on site</b> with photos and customer signature', '<b>Spot a defect?</b> Turn it into a quote in a few taps'])}
      </div>
    </div>`, 'Micro teams'),
  slide('dark', `
    <div class="row mid" style="flex:1">
      <div style="width:560px;flex:none"><div class="tilt">${win('ui/01-screen.png')}</div></div>
      <div class="grow" style="padding-left:34px">
        <div class="eyebrow">Compliance built in</div>
        <h2>All 18 certificate types. <span class="hl">Your branding.</span></h2>
        ${li(['<b>Electrical:</b> BS 7671 EIC, EICR, Minor Works, PAT', '<b>Fire &amp; emergency:</b> BS 5839 alarms, BS 5266 lighting, BS 5306 extinguishers', '<b>Solar:</b> EN 62446-1 PV commissioning', 'On <b>every plan</b>, from day one'])}
      </div>
    </div>`, 'Micro teams'),
  slide('light', `
    <div class="eyebrow">Get paid faster</div>
    <h2>From accepted quote to <span class="hl">money in the bank.</span></h2>
    <div class="row" style="margin-top:34px;align-items:flex-start">
      <div class="grow">${win('ui/03-screen.png', 'tilt')}<p style="margin-top:18px;font-size:19px;text-align:center"><b>Quotes</b> customers approve, and pay deposits on, from their email</p></div>
      <div class="grow">${win('ui/07-screen.png', 'tilt2')}<p style="margin-top:18px;font-size:19px;text-align:center"><b>Invoices</b> built from the completed job, with UK VAT handled</p></div>
    </div>`, 'Micro teams'),
  slide('dark', `
    <div class="eyebrow">Simple pricing</div>
    <h2>Priced for a small team. <span class="hl">No setup fees.</span></h2>
    <div class="row" style="margin-top:44px;align-items:stretch">
      <div class="price"><div class="n">Starter</div><div class="p">£49<small>/month</small></div><div class="u">1 user included</div>
        <ul><li>Unlimited jobs, customers &amp; sites</li><li>Field app that works offline</li><li>All 18 certificate types</li><li>Quotes, deposits &amp; invoicing</li></ul></div>
      <div class="price pop" style="position:relative"><div class="tag">POPULAR FOR 2–3 PEOPLE</div><div class="n">Team</div><div class="p">£99<small>/month</small></div><div class="u">3 users included</div>
        <ul><li>Everything in Starter</li><li>Xero &amp; QuickBooks sync</li><li>Service contracts &amp; renewal reminders</li><li>Good-Better-Best quote options</li></ul></div>
      <div class="price"><div class="n">Business</div><div class="p">£149<small>/month</small></div><div class="u">5 users included</div>
        <ul><li>Everything in Team</li><li>Asset register with QR/NFC tags</li><li>Customer self-service portal</li><li>RAMS &amp; remote monitoring</li></ul></div>
    </div>
    <p style="margin-top:26px;font-size:19px;color:#c9c9cf">Extra users £29/month each. A team of 5? Business at £149 covers all five.</p>`, 'Micro teams'),
  slide('dark', cta('micro', 'Try it on your<br>next job.'), 'Micro teams'),
];

// ---------------------------------------------------------------- MID (5-20 people)
const extra = 29, biz = 149;
const cost = (u) => biz + Math.max(0, u - 5) * extra;
const mid = [
  slide('dark', `
    <div class="row" style="flex:1">
      <div class="col" style="justify-content:center;width:640px">
        <div class="eyebrow">For growing contractors · 5–20 people</div>
        <h1>One system for the office <span class="hl">and every engineer.</span></h1>
        <p class="lead">Scheduling, certificates, quotes, contracts and invoicing in one place. Your team sees what they need. Nobody re-keys anything.</p>
        <div style="margin-top:34px;display:flex;gap:12px"><span class="pill">30-day free trial</span><span class="pill">50% off first 3 months</span></div>
      </div>
      <div class="grow" style="position:relative"><div style="position:absolute;left:0;top:70px;width:560px">${win('ui/09-screen.png', 'tilt')}</div><img src="${IMG}ui/05-screen.png" style="position:absolute;right:-10px;top:250px;width:250px;border-radius:20px;box-shadow:0 24px 50px rgba(0,0,0,.5)"></div>
    </div>`, 'Growing teams'),
  slide('light', `
    <div class="eyebrow">The growing pains</div>
    <h2>Past five people, <span class="hl">spreadsheets stop scaling.</span></h2>
    <div class="row" style="margin-top:44px">
      ${[['Who is where today?','Phone calls and WhatsApp to find out which engineer is free.'],['Certificates all look different','Every engineer has their own way. Customers and auditors notice.'],['Renewals slip through','Annual contracts and service visits tracked in a diary or someone\'s memory.'],['The office re-keys everything','Engineers write it down, the office types it up. Twice the work, twice the errors.']].map(([t, p], i) => `<div class="card grow"><div class="ico b">${i + 1}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}
    </div>`, 'Growing teams'),
  slide('dark', `
    <div class="eyebrow">Office and field, in sync</div>
    <h2>The office plans it. <span class="hl">The engineer does it.</span> Everyone sees it.</h2>
    <div class="row mid" style="margin-top:36px">
      <div style="flex:1">${win('ui/02-screen.png')}<p style="margin-top:16px;text-align:center;color:#c9c9cf;font-size:19px"><b style="color:#fff">Office:</b> drag-and-drop schedule across the whole team</p></div>
      <div style="width:110px;flex:none;text-align:center"><div class="stat">⇄</div><p style="color:#8a8a92;font-size:16px">live sync</p></div>
      <div style="flex:1"><img src="${IMG}ui/05-screen.png" style="width:100%;border-radius:14px;box-shadow:0 30px 60px rgba(0,0,0,.5)"><p style="margin-top:16px;text-align:center;color:#c9c9cf;font-size:19px"><b style="color:#fff">Field:</b> works offline</p></div>
    </div>`, 'Growing teams'),
  slide('light', `
    <div class="row" style="flex:1;align-items:center;gap:44px">
      <div class="grow">
        <div class="eyebrow">Visibility</div>
        <h2>See capacity <span class="hl">before it bites.</span></h2>
        ${li(['<b>Team utilisation</b> at a glance, so you know who has capacity', '<b>Multi-engineer jobs</b> with the right people assigned', '<b>Google &amp; Outlook calendar sync</b>', '<b>Needs-attention list:</b> overdue EICRs, unissued certificates, unanswered quotes'])}
      </div>
      <div class="col" style="gap:18px;width:560px;flex:none"><div class="card" style="padding:10px"><img src="${IMG}features/dashboard/team-utilisation.webp" style="width:100%;height:290px;object-fit:cover;object-position:top;border-radius:10px"></div><div class="card" style="padding:10px"><img src="${IMG}features/dashboard/needs-attention-card.webp" style="width:100%;height:170px;object-fit:cover;object-position:top;border-radius:10px"></div></div>
    </div>`, 'Growing teams'),
  slide('dark', `
    <div class="row mid" style="flex:1">
      <div style="width:580px;flex:none"><div class="tilt">${win('ui/01-screen.png')}</div></div>
      <div class="grow" style="padding-left:34px">
        <div class="eyebrow">Compliance without chasing</div>
        <h2>Every certificate <span class="hl">consistent and on time.</span></h2>
        ${li(['<b>18 certificate types</b>: BS 7671, BS 5839, BS 5266, BS 5306, EN 62446', '<b>Your branding</b> on every one, whoever on the team issued it', '<b>Job sheets, checklists &amp; customer sign-off</b> in the field', '<b>Defects become quotes</b>, so follow-on work gets captured'])}
      </div>
    </div>`, 'Growing teams'),
  slide('light', `
    <div class="row" style="flex:1;align-items:center;gap:44px">
      <div style="width:500px;flex:none">
        <div class="eyebrow">Recurring revenue</div>
        <h2>Contracts that <span class="hl">renew themselves.</span></h2>
        ${li(['<b>Service contracts:</b> recurring visits, fees and renewal reminders <i>(Team)</i>', '<b>Asset register</b> with QR/NFC tags: know every device you maintain <i>(Business)</i>', '<b>Portfolio roll-up</b> of annual value per customer'])}
      </div>
      <div class="grow"><div class="card" style="padding:12px"><img src="${IMG}features/service-contracts/portfolio-rollup.webp" style="width:100%;border-radius:10px"></div></div>
    </div>`, 'Growing teams'),
  slide('dark', `
    <div class="eyebrow">Money</div>
    <h2>Win it, invoice it, <span class="hl">see the profit.</span></h2>
    <div class="row" style="margin-top:38px;align-items:flex-start">
      <div class="grow">${win('ui/03-screen.png')}</div>
      <div class="grow">${win('ui/07-screen.png')}</div>
    </div>
    <div class="row" style="margin-top:30px">
      ${[['Quotes','Good-Better-Best options, deposits, customer approval by email'],['Accounting','Xero and QuickBooks sync, no double entry'],['Reports','Job profitability and pipeline, per engineer'],['Purchase orders','Order from suppliers against the job']].map(([t, p]) => `<div class="grow"><b style="font-family:Manrope;font-size:20px;color:var(--y)">${t}</b><p style="font-size:17px;color:#b6b6bd;margin-top:4px;line-height:1.35">${p}</p></div>`).join('')}
    </div>`, 'Growing teams'),
  slide('light', `
    <div class="row" style="flex:1;align-items:center;gap:44px">
      <div style="width:540px;flex:none">
        <div class="eyebrow">Control &amp; customer experience</div>
        <h2>The right access <span class="hl">for every role.</span></h2>
        ${li(['<b>8 roles:</b> engineers see only the field app, site managers see no financials, accounts see the money', '<b>Customer portal:</b> customers approve quotes, see jobs and certificates <i>(Business)</i>', '<b>RAMS</b> and <b>remote monitoring</b> cases <i>(Business)</i>'])}
      </div>
      <div class="grow"><div class="win">${'<img src="' + IMG + 'portal/portal-job.webp" style="display:block;width:100%">'}</div></div>
    </div>`, 'Growing teams'),
  slide('dark', `
    <div class="eyebrow">Pricing that scales with the team</div>
    <h2>Business: <span class="hl">£${biz}/month</span> includes 5 users. <span style="color:#c9c9cf">+£${extra} each after.</span></h2>
    <div class="bars" style="margin-top:50px;width:760px">
      ${[5, 8, 12, 20].map((u) => `<div style="height:${Math.round(cost(u) / 584 * 230)}px">£${cost(u)}<small>${u} users</small></div>`).join('')}
    </div>
    <div style="position:absolute;right:72px;top:210px;width:340px" class="card">
      <h3 style="color:var(--y)">What's included</h3>
      <p>Everything in Starter and Team, plus asset register, customer portal, RAMS and remote monitoring.</p>
      <p style="margin-top:14px"><b style="color:#fff">10+ engineers?</b> Ask about volume pricing on extra seats.</p>
    </div>
    <p style="position:absolute;left:72px;bottom:70px;font-size:19px;color:#c9c9cf">Smaller on the road, bigger in the office? Team (£99, 3 users) is the same module set minus assets, portal &amp; RAMS.</p>`, 'Growing teams'),
  slide('light', `
    <div class="eyebrow">Getting started</div>
    <h2>Live in <span class="hl">three steps.</span></h2>
    <div class="row" style="margin-top:50px">
      ${[['1', 'Bring your data', 'Import customers and sites from Xero, QuickBooks or a spreadsheet.'], ['2', 'Set it up', 'Add your branding, invite the team, pick roles, connect your calendar.'], ['3', 'Run your first job', 'Schedule it, send it to the engineer\'s phone, issue the certificate and invoice.']].map(([n, t, p]) => `<div class="card grow" style="padding:34px"><div class="ico" style="width:56px;height:56px;font-size:26px">${n}</div><h3 style="font-size:26px">${t}</h3><p style="font-size:20px">${p}</p></div>`).join('')}
    </div>
    <p class="lead" style="margin-top:36px;max-width:none">Our setup guide takes you from sign-up to your first scheduled job in under 60 minutes.</p>`, 'Growing teams'),
  slide('dark', cta('growing', 'See if it fits<br>your team.'), 'Growing teams'),
];

const doc = (slides, title) => `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../deck.css"></head><body>${slides.join('')}</body></html>`;

(async () => {
  const tmp = path.join(__dirname, '.build'); fs.mkdirSync(tmp, { recursive: true });
  const out = path.join(__dirname, '..', 'public', 'decks'); fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  for (const [name, slides, title] of [['opscel-for-small-teams', micro, 'Opscel for small teams (1-5 people)'], ['opscel-for-growing-teams', mid, 'Opscel for growing teams (5-20 people)']]) {
    const html = path.join(tmp, name + '.html'); fs.writeFileSync(html, doc(slides, title));
    const page = await browser.newPage();
    await page.goto('file://' + html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(out, name + '.pdf'), width: '1280px', height: '720px', printBackground: true });
    // PNG contact sheet per slide for quick review
    const n = await page.locator('section.s').count();
    await page.setViewportSize({ width: 1280, height: 720 });
    for (let i = 0; i < n; i++) await page.locator('section.s').nth(i).screenshot({ path: path.join(tmp, `${name}-${String(i + 1).padStart(2, '0')}.png`) });
    console.log(name, n, 'slides');
    await page.close();
  }
  await browser.close();
})();
