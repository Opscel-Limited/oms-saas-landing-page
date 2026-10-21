import { IDocGuide } from '@/types';

export const calendarIntegrationGuide: IDocGuide = {
    slug: 'calendar-integration',
    title: 'Calendar Integration',
    description: 'Send the jobs and visits you are assigned to your Google Calendar or Microsoft Outlook calendar. One-way sync from Opscel to your calendar, with calendar busy times shown as a hint when scheduling.',
    lastUpdated: '2026-10-21',
    sections: [
        {
            id: 'overview',
            title: 'Overview',
            subsections: [
                {
                    title: '30-Second Version',
                    content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"><p class="text-sm text-blue-900"><strong>Who:</strong> Every user connects their own calendar (per-user connection)<br><strong>What:</strong> One-way sync: jobs and visits assigned to you appear as events in your Google or Outlook calendar<br><strong>Where:</strong> Settings → Calendar Integration (engineers connect from the field app&apos;s Settings page)<br><strong>Why:</strong> See your Opscel work alongside your personal diary, on your phone, without re-typing anything</p></div>'
                },
                {
                    title: 'Key Benefits',
                    content: '',
                    bullets: [
                        '<strong>Your work in your diary:</strong> Jobs and visits you are assigned to appear in your personal calendar',
                        '<strong>Stays up to date:</strong> If the job is rescheduled, the calendar event moves; if it is cancelled, the event is removed',
                        '<strong>Site details included:</strong> Customer, service, engineers, site address and (optionally) access notes are in the event',
                        '<strong>Travel buffer:</strong> Optionally start the calendar event earlier to allow for travel time',
                        '<strong>Scheduling hint:</strong> When a manager assigns engineers or books time in the Planner, Opscel can show whether an engineer&apos;s connected calendar is busy at that time'
                    ]
                },
                {
                    title: 'What It Does Not Do',
                    content: '',
                    bullets: [
                        '<strong>It is one-way.</strong> Opscel writes to your calendar; it does not import events from your calendar into Opscel, and edits you make to an event in your calendar are not read back into the job',
                        '<strong>It does not block scheduling.</strong> A busy calendar produces a warning or indicator, never a hard stop; a manager can still schedule the work',
                        '<strong>There is no calendar feed (ICS) option.</strong> Only Google Calendar and Microsoft Outlook connections are available'
                    ]
                },
                {
                    title: 'Supported Platforms',
                    content: '<p>Opscel integrates with two calendar platforms:</p>',
                    bullets: [
                        '<strong>Google Calendar:</strong> Gmail and Google Workspace accounts',
                        '<strong>Microsoft Outlook:</strong> Microsoft 365 work accounts and personal Outlook accounts'
                    ]
                }
            ]
        },
        {
            id: 'supported-platforms',
            title: 'Supported Platforms',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'Platform Comparison',
                    content: '',
                    table: {
                        headers: ['Platform', 'Sync Direction', 'Auth Method', 'Best For'],
                        rows: [
                            ['Google Calendar', 'One-way (Opscel → calendar)', 'OAuth 2.0', 'Gmail users, Android devices, Google Workspace'],
                            ['Microsoft Outlook / 365', 'One-way (Opscel → calendar)', 'OAuth 2.0', 'Outlook users, Microsoft 365 businesses']
                        ]
                    }
                },
                {
                    title: 'Google Calendar',
                    content: '<p><strong>OAuth connection, per-user basis.</strong> When you connect Google Calendar, Opscel can create, update and remove the events it creates for your assigned work, and can ask Google when you are busy (free/busy only) so it can show a scheduling hint.</p>'
                },
                {
                    title: 'Microsoft Outlook',
                    content: '<p><strong>OAuth connection via the Microsoft Identity Platform.</strong> Works with Microsoft 365 business accounts and personal Outlook accounts. Opscel requests permission to read and write your calendar so it can create and update its events and check when you are busy.</p>'
                }
            ]
        },
        {
            id: 'google-calendar',
            title: 'Connecting Google Calendar',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'What You Will Be Asked to Allow',
                    content: '<p>When you connect, Opscel sends you to Google&apos;s consent screen. Opscel asks for:</p>',
                    bullets: [
                        '<strong>Event access:</strong> To create, update and delete the events Opscel makes for your jobs and visits',
                        '<strong>Free/busy access:</strong> To check whether you are busy at a proposed time (used for the scheduling hint)',
                        '<strong>Your email address:</strong> To show which Google account is connected'
                    ]
                },
                {
                    content: '<p><strong>Privacy note:</strong> The scheduling hint uses busy/free times only. Opscel shows a manager that a time range is busy; it does not show the title or details of your personal events.</p>'
                },
                {
                    title: 'Which Calendar Is Used',
                    content: '<p>Opscel writes to the <strong>primary calendar</strong> of the Google account you connect. There is no calendar picker in Opscel. To use a different calendar, connect a Google account whose primary calendar is the one you want.</p>'
                },
                {
                    title: 'Steps to Connect Google Calendar',
                    content: '',
                    steps: [
                        'Open <strong>Settings → Calendar Integration</strong> (engineers: open <strong>Settings</strong> in the field app)',
                        'On the <strong>Google Calendar</strong> card, click <strong>Connect</strong>',
                        'Sign in to Google and choose the account to connect',
                        'Review the permissions and click <strong>Allow</strong>',
                        'You are returned to Opscel and shown a confirmation message',
                        'The card now shows <strong>Connected</strong> with your Google email address'
                    ]
                },
                {
                    title: 'What You Should See',
                    content: '<p>After a successful connection:</p>',
                    bullets: [
                        '<strong>Connection status:</strong> A green "Connected" badge with the account email',
                        '<strong>Last synced:</strong> Once a sync has run, the card shows the date and time of the most recent one',
                        '<strong>Existing jobs:</strong> Work that was already scheduled before you connected may not appear straight away. See "Jobs scheduled before you connected" below'
                    ]
                }
            ]
        },
        {
            id: 'microsoft-365',
            title: 'Connecting Microsoft Outlook',
            subsections: [
                {
                    title: 'Availability',
                    content: '<p class="text-sm bg-gray-100 px-3 py-1 rounded inline-block mb-4"><strong>Roles:</strong> All users (per-user connection)</p>'
                },
                {
                    title: 'What You Will Be Asked to Allow',
                    content: '<p>Opscel asks Microsoft for permission to read and write your calendar (<code>Calendars.ReadWrite</code>), to read your basic profile (to show the connected email) and to stay connected without you signing in again (<code>offline_access</code>). Some Microsoft 365 organisations require an administrator to approve new apps; if you see an approval message, ask your IT administrator.</p>'
                },
                {
                    title: 'Which Calendar Is Used',
                    content: '<p>As with Google, Opscel uses the <strong>primary (default) calendar</strong> of the connected account. There is no calendar picker.</p>'
                },
                {
                    title: 'Steps to Connect Outlook',
                    content: '',
                    steps: [
                        'Open <strong>Settings → Calendar Integration</strong> (engineers: open <strong>Settings</strong> in the field app)',
                        'On the <strong>Microsoft Outlook</strong> card, click <strong>Connect</strong>',
                        'Sign in with your Microsoft work or personal account',
                        'Review the permissions and accept',
                        'You are returned to Opscel and shown a confirmation message',
                        'The card shows <strong>Connected</strong> with your account email'
                    ]
                }
            ]
        },
        {
            id: 'how-sync-works',
            title: 'How Sync Works',
            subsections: [
                {
                    title: 'Direction and Scope',
                    content: '<p>Sync is <strong>one-way, from Opscel to your calendar</strong>. Only jobs and visits that are <strong>assigned to you</strong> are sent to your calendar. Colleagues see their own assignments in their own calendars; nobody&apos;s calendar receives another engineer&apos;s work.</p>'
                },
                {
                    title: 'When Events Are Created, Updated and Removed',
                    content: '',
                    table: {
                        headers: ['What happens in Opscel', 'What happens in your calendar'],
                        rows: [
                            ['A job with a schedule is created and assigned to you', 'An event is created'],
                            ['You are assigned to a scheduled job or visit', 'An event is created for you'],
                            ['The date, time, address or details change', 'The event is updated'],
                            ['The job is put on hold', 'The event title gets an [ON HOLD] prefix'],
                            ['You are removed from the job', 'The event is removed from your calendar'],
                            ['The job is cancelled', 'The event is removed'],
                            ['The job is completed', 'The event is left in place (it is not deleted)']
                        ]
                    }
                },
                {
                    title: 'How Quickly',
                    content: '<p>Changes are sent in the background shortly after you save them in Opscel; there is no manual "Sync Now" button and no fixed 15-minute cycle. If a sync fails (for example, the calendar service is briefly unavailable), Opscel retries the failed items automatically every 15 minutes, up to a limited number of attempts.</p>'
                },
                {
                    title: 'Jobs and Visits',
                    content: '<p>A job with a single schedule produces one event. A job split into dated visits produces one event per visit, for each engineer assigned to that visit.</p>'
                },
                {
                    title: 'What an Event Looks Like',
                    content: '',
                    bullets: [
                        '<strong>Job title:</strong> <code>[JOB-1042] Boiler service — Sunley House</code> (job number, job title, then the site name if there is one)',
                        '<strong>Visit title:</strong> <code>Visit 2: Boiler service (JOB-1042) — Sunley House</code>',
                        '<strong>On hold:</strong> <code>[ON HOLD]</code> is added to the front of the title',
                        '<strong>Location:</strong> The site address (street, town, postcode)',
                        '<strong>Description:</strong> Customer, service type, priority, the engineers assigned, access notes (if enabled), the job description, and a "View in Opscel" link to the job',
                        '<strong>Time zone:</strong> Visit events are created in UK time'
                    ]
                },
                {
                    title: 'Calendar Preferences (Admin)',
                    content: '<p>Two preferences on the Calendar Integration page apply to <strong>every calendar event for your business</strong>, not just your own. Changing them requires the configuration permission (typically an Admin):</p>',
                    bullets: [
                        '<strong>Travel buffer (0 to 60 minutes):</strong> Starts the calendar event this many minutes before the job or visit start. The job time in Opscel is unchanged, and the event description notes that the start includes the buffer',
                        '<strong>Include access instructions:</strong> On by default. Puts the site access notes (such as key safe details) in the event description. Turn it off if you do not want access details in personal calendars'
                    ]
                },
                {
                    title: 'Jobs Scheduled Before You Connected',
                    content: '<p>Connecting a calendar does not automatically copy work that was already scheduled. Existing assigned jobs and visits may not appear until they are next changed in Opscel. Opscel can be configured to add your upcoming assigned work (the next 180 days, up to 200 items) when you connect, but this is switched on by the Opscel team rather than by you; if your existing jobs are missing, contact support.</p>'
                }
            ]
        },
        {
            id: 'scheduling-hints',
            title: 'Calendar Busy Times When Scheduling',
            subsections: [
                {
                    title: 'A Hint, Not a Block',
                    content: '<p>Opscel does <strong>not</strong> stop anyone scheduling work when a calendar is busy. For engineers who have connected a calendar, Opscel asks Google or Microsoft whether they are free or busy during the proposed time, and shows the result as a guide:</p>',
                    bullets: [
                        '<strong>Assigning engineers to a job:</strong> A badge next to each engineer shows Available, Busy, Partial, No calendar or Unknown (if the calendar could not be checked). Hovering shows the busy time ranges',
                        '<strong>Engineer availability panel:</strong> Overlaps with the proposed slot are listed in a "Scheduling conflicts detected" warning, including all-day events such as leave',
                        '<strong>Planner:</strong> Busy times from connected calendars are shown on the board so you can see them when booking'
                    ]
                },
                {
                    title: 'What Is and Is Not Shared',
                    content: '<p>Only busy time ranges are used. Opscel does not read or display the titles, descriptions or attendees of personal events. An engineer without a connected calendar simply shows as "No calendar"; it does not count as available or busy. Calendar busy times never change a job&apos;s status or remove an engineer from it.</p>'
                }
            ]
        },
        {
            id: 'token-refresh',
            title: 'Connection Health and Reconnecting',
            subsections: [
                {
                    title: 'Automatic Token Refresh',
                    content: '<p>Google and Microsoft grant Opscel short-lived access tokens. Opscel checks every 5 minutes and renews any token that is within 5 minutes of expiring, so you should not need to do anything.</p>'
                },
                {
                    title: 'When a Connection Expires',
                    content: '<p>If the provider refuses to renew access (for example you revoked Opscel in your Google or Microsoft account, changed your password, or your organisation&apos;s policy changed), the connection is marked <strong>Expired</strong>. The card shows "Connection expired. Please reconnect." with a <strong>Reconnect</strong> button. Events stop updating until you reconnect. Brief provider outages do not expire the connection.</p>'
                }
            ]
        },
        {
            id: 'disconnecting',
            title: 'Disconnecting Calendars',
            subsections: [
                {
                    title: 'Steps to Disconnect',
                    content: '',
                    steps: [
                        'Open <strong>Settings → Calendar Integration</strong> (engineers: the field app Settings page)',
                        'On the connected card, click <strong>Disconnect</strong>',
                        'Confirm the prompt'
                    ]
                },
                {
                    title: 'What Happens',
                    content: '',
                    bullets: [
                        '<strong>Sync stops:</strong> No new events are created or updated for that calendar',
                        '<strong>Opscel forgets the access tokens:</strong> They are cleared from Opscel, and Opscel asks Google to revoke its access where possible',
                        '<strong>Events already in your calendar stay:</strong> Opscel does not delete them on disconnect. Delete them manually if you no longer want them',
                        '<strong>Your jobs are not affected:</strong> Nothing changes in Opscel'
                    ]
                },
                {
                    content: '<p>To be certain access is removed, you can also remove Opscel from the connected apps list in your Google or Microsoft account settings.</p>'
                }
            ]
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            subsections: [
                {
                    title: 'Recommendations',
                    content: '',
                    bullets: [
                        '<strong>Connect early:</strong> Connect before work is scheduled so events are created as jobs are assigned',
                        '<strong>Use the primary calendar you actually check:</strong> Events go to the primary calendar of the connected account',
                        '<strong>Set the travel buffer to suit your typical journeys:</strong> An admin sets one value for the whole business',
                        '<strong>Consider access notes:</strong> Turn off access instructions if personal calendars are shared with people who should not see key safe details',
                        '<strong>Make changes in Opscel:</strong> Reschedule or cancel in Opscel, not by editing or deleting the calendar event',
                        '<strong>Put leave and personal commitments in your calendar:</strong> Managers then see them as a busy hint when scheduling'
                    ]
                }
            ]
        },
        {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            subsections: [
                {
                    title: 'Existing jobs are not in my calendar',
                    content: '<p>Work scheduled before you connected may not be copied across. Open the job and make a change to its schedule, or ask support to run the catch-up for your account. New assignments after you connect sync automatically.</p>'
                },
                {
                    title: 'A new job has not appeared',
                    content: '',
                    bullets: [
                        'Check you are <strong>assigned</strong> to the job or visit, and that it has a date and time',
                        'Jobs with no scheduled date and time are not sent; give the job a start time and assign it to you',
                        'Check the Calendar Integration page shows <strong>Connected</strong> (not Expired)',
                        'Look in the <strong>primary</strong> calendar of the connected account, and check that calendar is switched on in your calendar app',
                        'Failed syncs are retried automatically every 15 minutes'
                    ]
                },
                {
                    title: 'The card says "Connection expired"',
                    content: '<p>Click <strong>Reconnect</strong> and sign in again. If it expires repeatedly, check that Opscel has not been removed from your Google or Microsoft account&apos;s connected apps, and that your organisation has approved it.</p>'
                },
                {
                    title: 'An event shows the wrong time',
                    content: '<p>Check the <strong>travel buffer</strong> setting: events start earlier than the job by that many minutes. The event description says when the buffer is included.</p>'
                },
                {
                    title: 'A completed job is still in my calendar',
                    content: '<p>This is intended. Completing a job leaves its calendar event in place as a record; only cancelling a job or removing you from it deletes the event.</p>'
                },
                {
                    title: 'Connection fails with an error',
                    content: '<p>The error text from the provider is shown at the top of the page. For Microsoft work accounts, ask your IT administrator whether new apps need approval. If it persists, email <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800">support@opscel.com</a> with the message shown.</p>'
                }
            ]
        },
        {
            id: 'faqs',
            title: 'Frequently Asked Questions',
            subsections: [
                {
                    title: 'Is it two-way?',
                    content: '<p>No. Opscel sends your assigned work to your calendar. It does not import events from your calendar, and changes made to an event in your calendar do not change the job. (Opscel can <em>check</em> when you are busy to show a scheduling hint, but that does not create or change anything in Opscel.)</p>'
                },
                {
                    title: 'Will Opscel see my personal calendar events?',
                    content: '<p>Only as busy time ranges for the scheduling hint. Titles, descriptions and attendees of your personal events are not displayed in Opscel.</p>'
                },
                {
                    title: 'Does a busy calendar stop a job being scheduled?',
                    content: '<p>No. It shows a warning or indicator so the person scheduling can make an informed choice. They can still schedule the work.</p>'
                },
                {
                    title: 'Can I choose which jobs appear in my calendar?',
                    content: '<p>No. Everything assigned to you that has a schedule is synced. If you do not want Opscel events in your calendar, do not connect one (or disconnect) and use the field app for your schedule.</p>'
                },
                {
                    title: 'Can I choose which calendar is used?',
                    content: '<p>No. Opscel uses the primary calendar of the account you connect.</p>'
                },
                {
                    title: 'Can I connect both Google and Outlook?',
                    content: '<p>Yes, each provider has its own card and you can connect one account per provider. Assigned work is sent to each connected calendar.</p>'
                },
                {
                    title: 'What if I delete an Opscel event from my calendar?',
                    content: '<p>The job in Opscel is unchanged. Deleting an event does not cancel or alter the job. To cancel or reschedule work, do it in Opscel.</p>'
                },
                {
                    title: 'How do I stop syncing?',
                    content: '<p>Click <strong>Disconnect</strong> on the Calendar Integration page. Sync stops; events already in your calendar remain until you delete them.</p>'
                },
                {
                    title: 'Is there a calendar feed (ICS) I can subscribe to?',
                    content: '<p>No. Only the Google Calendar and Microsoft Outlook connections are available.</p>'
                },
                {
                    title: 'Who can change the travel buffer and access-notes setting?',
                    content: '<p>Users with the configuration permission (typically Admins). The settings apply to every calendar event across the business.</p>'
                }
            ]
        },
        {
            id: 'need-help',
            title: 'Need More Help?',
            subsections: [
                {
                    title: '',
                    content: '<p>If you&apos;re stuck or have questions not covered here:</p>',
                    bullets: [
                        '<strong>Email support:</strong> <a href="mailto:support@opscel.com" class="text-blue-600 hover:text-blue-800">support@opscel.com</a>',
                        '<strong>Related guides:</strong> <a href="/docs/jobs" class="text-blue-600 hover:text-blue-800">Jobs & Multi-Visit Workflow</a> | <a href="/docs/field-service" class="text-blue-600 hover:text-blue-800">Field Service App</a> | <a href="/docs/settings-tour" class="text-blue-600 hover:text-blue-800">Settings Tour</a>'
                    ]
                }
            ]
        }
    ],
    relatedGuides: [
        {
            title: 'Jobs',
            description: 'Jobs assigned to you appear in your calendar',
            href: '/docs/jobs'
        },
        {
            title: 'Field Service App',
            description: 'Engineers connect their calendar from field app settings',
            href: '/docs/field-service'
        },
        {
            title: 'Planning Your Week with the Planner',
            description: 'The Planner shows connected calendars\' busy times as a hint when you book',
            href: '/docs/planner'
        },
        {
            title: 'Service Contracts',
            description: 'Recurring contract jobs sync like any other scheduled job',
            href: '/docs/service-contracts'
        },
        {
            title: 'Settings Tour',
            description: 'Calendar integration settings location',
            href: '/docs/settings-tour'
        }
    ]
};
