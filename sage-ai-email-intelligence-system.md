# Sage AI — Email Intelligence System Design
**Session Date:** March 30, 2026
**Status:** Design Complete — Ready to Build
**Next Step:** Mac Mini setup (target: week of April 7)

---

## The Core Insight

> Email was designed for senders. You're just the destination.

This system flips that. You become the one in control.

**Email is an intake pipe, not storage.** Once data is extracted, the email is garbage. You don't keep the box a package came in.

---

## The Four Pain Points This Solves

| Pain Point | Solution |
|---|---|
| Time spent triaging | Eliminate the inbox as an interface — get a brief instead |
| Anxiety about buried things | Audit trail + natural language querying ("did anything come in about X?") |
| Endless unsubscribe loop | Go on offense — patterns, not individual emails |
| Feeling reactive | Your weekly context becomes the filter, not static rules |

---

## Design Principles

1. **Email as intake, not storage** — extract data, delete the envelope
2. **Lifecycle awareness** — terminal state makes prior states irrelevant
   - Delivered → Ordered/Shipped/Out for delivery are all garbage
   - One purchase = one record, not 4-5 emails
3. **Surface unknown unknowns, don't catalog known knowns**
   - No subscriptions tracker — you know your subscriptions
   - Surface things you can't see because volume is too high
4. **Vaults emerge from pattern analysis, not prescription**
   - AI suggests vaults based on YOUR email patterns
   - You approve, modify, rename before anything is touched
5. **Check what's already handled** — don't rebuild what works
   - Church already adds events to your calendar — skip that
6. **Direct API beats email parsing**
   - GitHub and Zulip have better APIs than their notification emails
7. **Build for Patricia first** — validate on real data before building for others

---

## What This Actually Is

Not an email client. Not a triage tool. Not a filter system.

An **intelligence layer** that sits above all your accounts — extracts what matters, routes it where it belongs, and makes the email itself irrelevant.

> Your "inbox" becomes a daily brief. One screen. Across everything.
> "2 things need your response. Your Shapermint order delivered. Everything else: handled."

---

## Your Accounts & Sources

| Source | Type | Access Method | Purpose |
|---|---|---|---|
| patty7088@gmail.com | Personal Gmail | OAuth2 | Full triage + vaults |
| Work Gmail | Gmail | OAuth2 | Full triage + vaults |
| Side project Gmail | Gmail | OAuth2 | Full triage + vaults |
| Robotics .org | Google Workspace (not admin) | IMAP or forwarding pipe | Digest only |
| GitHub (WPILib) | GitHub API | Direct API | Programming mentor filter |
| Zulip | Zulip API | Direct API | @mentions + relevant channels |

---

## Vault Types

### Type 1: Data Extraction Vaults
*Email arrives → AI pulls structured data → email deleted → data lives somewhere useful*

**Purchase History / Expenses**
- Vendor, amount, date, category
- Built automatically from receipt emails — zero manual entry
- Retroactively populated from backlog

**Warranty Tracker**
- Product name + model
- Purchase date
- Warranty length → expiry date calculated automatically
- Who to contact when something breaks
- Receipt as proof of purchase
- Alerts before warranties expire

**Delivery Log**
- Item + delivered date + confirmed
- Searchable proof of delivery
- "Did I actually receive that?" answered in 2 seconds

### Type 2: Content Transformation Vaults
*Email arrives → AI reads and transforms it → you consume the intelligence, not the email*

**Reading Intelligence** (Newsletter Summaries)
- Lenny's Newsletter
- Allie Miller
- Others discovered during pattern analysis
- Mobile-friendly summaries — the actual value without the friction
- Original email: gone

**Community Digest**
- Church weekly digest (events already handled by church calendar)
- Consolidates multiple church emails into one weekly summary
- AI formats for mobile reading

**Robotics Brief** (Programming Mentor context)
- WPILib issues that affect FRC student robot code only
- Bugs, breaking changes, common subsystems (drivetrain, vision)
- NOT feature requests or other ecosystems
- Zulip: @mentions + programming channel items needing mentor input
- Formatted as: what matters to Patricia as a mentor, nothing else

### Type 3: Action Vault
*Things that need Patricia specifically — human response required*

- Direct messages from real people
- Decisions pending
- Time-sensitive items

### + Vaults TBD
Pattern analysis will surface additional vault suggestions from actual email data before anything is touched.

---

## The Build Plan

### Phase 1 — Connect & Survey *(read-only, zero risk)*
- OAuth connect all Gmail accounts
- Pull metadata only (sender, subject, date, labels, thread ID)
- Build statistical picture across all accounts
- Output: real report of what's actually there

```
Account: patty7088@gmail.com
Total emails: ~41,000
Automated senders: 89%
Top senders by volume: [discovered from data]
Category breakdown: [real numbers]
```

### Phase 2 — Pattern Recognition + Vault Suggestions
- Claude analyzes metadata in batches
- Identifies lifecycle clusters, terminal states, extraction candidates
- Output: suggested vault list based on YOUR patterns

```
SUGGESTED VAULTS — approve, modify, or add before we proceed
─────────────────────────────────────────────
💳 Purchase History      [X] events detected
🔧 Warranty Tracker      [X] warranty-eligible items
📦 Delivery Log          [X] delivery confirmations
📖 Reading Intelligence  [X] newsletters, rarely opened
⛪ Community             Church emails — digest
🤖 Robotics Brief        WPILib + Zulip → mentor filter
🗑️ Promotions            [X] emails — bulk action needed
🗑️ Notifications         [X] emails — bulk action needed
```

### Phase 3 — Decision Dashboard
- ~20 batch decisions, not individual emails
- Pattern-level: "Amazon order lifecycles: 1,247 emails, 340 complete orders. Recommend: extract + delete. [Yes/No]"
- You approve or modify each batch

### Phase 4 — Data Extraction
- Claude reads full content of approved extraction candidates
- Populates vaults BEFORE any deletion
- Every record saved before anything is removed

### Phase 5 — Demolition
- Emails move to Trash (30-day recovery buffer)
- Unsubscribes sent
- Final report: X emails processed, Y records saved, Z emails trashed

### Phase 6 — The New Normal
- Ongoing intelligence — lifecycle engine keeps running
- New emails intercepted before they pile up
- Daily brief across all accounts
- Vaults update automatically

---

## The Daily Brief (What You'll Actually See)

```
Good morning Patricia — March 30

NEEDS YOU (2)
→ [Person] about [topic] — context summary
→ [Person] about [topic] — context summary

HAPPENED TODAY (5)
→ Shapermint order delivered
→ New contact reached out about side project — looks legitimate
→ Church: 2 updates this week [tap for digest]
→ WPILib: bug affecting CAN motor controllers — likely affects your team
→ Zulip: student asking about vision pipeline latency

HANDLED (47)
Everything else processed. Nothing needs you.
```

---

## The Backlog Reality

Your current situation across accounts:
- **12,774** Inbox
- **18,246** Updates
- **8,320** Promotions
- **760** Purchases
- **238** Social
- **159** Forums

These are not emails to triage. They are **data trapped in the wrong format.**

The backlog is a data mining project, not a cleanup project. AI extracts what matters, routes it to the right vault, and the emails disappear. You end up with years of warranties, expenses, and purchase records — organized, searchable, useful.

---

## The Bigger Vision

> This is not a personal productivity hack. This is a missing product.

**Built for Patricia first.** Once validated on real data across real accounts, this becomes something others need too.

Everyone with an email address has this problem. Nobody has solved it because everyone keeps building better email clients instead of asking: *"what if email just fed into something smarter?"*

---

## What's Already Decided

- **Stack:** Python, Gmail API (OAuth2), Claude API (Sonnet), SQLite, simple Flask UI
- **Security:** Read-only OAuth scope, tokens on your own hardware, revocable anytime
- **Hardware:** Mac Mini (always-on personal server — no cloud costs)
- **No external server needed** — Mac Mini IS the server
- **Gmail filters:** Not used for this system (one exception: Maven email tripwire below)

---

## Immediate Action Item

**Maven Email Tripwire** — set before anything else

You're on the waitlist for:
> "Build an Agent Native OS in One Day with Claude Code"
> ~$500 | Around May 3 | Senders: Maven, Sara Davison, or Tyler Fisk

This workshop is the foundation for Sage AI — Claude Code + Obsidian + agent-native workflows.

**Gmail filter to create:**
- From: `maven OR "sara davison" OR "tyler fisk"`
- Has the words: `"agent native" OR "claude code" OR obsidian`
- Action: Apply label `WATCH-NOW`
- iPhone Gmail: enable notifications for `WATCH-NOW` label only

**Act immediately when it arrives. Do not miss this.**

---

## Next Sessions

1. **iPad workflow** — Obsidian vs GoodNotes vs Notability, church notes, iPad as work device
2. **Mac Mini setup** — AI powerhouse configuration from scratch (target: week of April 7)
3. **Email system Phase 1** — first thing deployed on Mac Mini

---

*Designed in conversation with Claude Code — March 30, 2026*
*Part of Sage AI Studios*
