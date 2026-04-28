# Playbook 4: Dispatch Setup
### For Women Building AI-Native Businesses

**Series:** Sage AI Studios — Mac Mini AI Powerhouse Setup
**Level:** Beginner-friendly
**Playbook:** 4 of 7

---

## Before You Begin

**⏱ Time Required: 30 minutes**
**Interruption Risk: Medium — complete the onboarding flow in one sitting**

*This playbook sets up Dispatch — the feature that lets you send tasks to Claude on your Mac Mini from your phone. You'll walk away with Claude working on your computer while you're anywhere else, delivering finished results to your phone.*

**What to have nearby:**
- [ ] Your Mac Mini on and in front of you
- [ ] Your iPhone with the Claude mobile app already installed and signed in
- [ ] Your Mac Mini system password — macOS will ask for it during setup
- [ ] 30 uninterrupted minutes — the onboarding flow is worth completing in one session

> **Download the Claude mobile app before you start.** You'll need it during the Dispatch pairing step. If it's not on your phone yet, get it from the App Store and sign in with the same account you use on your Mac Mini.

---

## What You're Setting Up

**Claude Cowork** is Claude's non-technical agent — it works directly with your local files, folders, and applications to complete tasks from start to finish. No coding required. You describe the outcome, Claude handles the steps.

**Dispatch** is the feature inside Cowork that connects your phone to your Mac Mini. Once it's set up, you can send a task from your phone — "pull this week's metrics," "draft a summary of these files," "clean up my downloads" — and come back to finished work. Your Mac Mini does the work. You get the result.

This is what the Mac Mini AI Powerhouse is built for.

---

## Step 1: Open Cowork in the Claude Desktop App

1. Open the **Claude desktop app** on your Mac Mini
2. At the top of the app, you'll see three options: **Chat, Cowork, and Code**
3. Click **Cowork**

You'll land on a chat interface. Before you type anything, look at the left sidebar.

---

## Step 2: Follow the "Get to Know Cowork" Onboarding Flow

In the left sidebar, find **"Get to Know Cowork."** This is your guide through the full setup — follow it in sequence rather than jumping into the chat directly. The steps build on each other.

The first item in the list is **"See Claude Work."** That's where we're headed next.

> **Don't skip the onboarding flow.** It walks you through the permissions and setup that Cowork needs to function. Jumping straight into the chat before completing it will lead to missing permissions and a frustrating first experience.

---

## Step 3: Grant macOS Permissions

When you reach the permissions step in the onboarding flow, you'll be asked to grant two macOS permissions. Both are required for Cowork to do its job.

**Accessibility**
This allows Claude to control your mouse and keyboard — to open apps, click buttons, fill in fields, and navigate your screen. Without it, Claude can see your screen but can't take action.

Click **Request**. macOS will open System Settings and show you a toggle for Claude. Turn it on and enter your system password to confirm.

**Screen Recording**
This allows Claude to see what's on your screen — required for it to understand what's open, what needs to change, and where things are. Without it, Claude is working blind.

Click **Request**. macOS will open System Settings to the Screen Recording section.

> **Heads up:** Screen Recording doesn't show Claude in the list automatically. You'll see a **+** button — click it. This opens a file browser that defaults to your Documents folder. Navigate to **Applications** in the left sidebar, find **Claude**, and click **Open**. Claude now appears in the list.

macOS will then tell you that Claude may not be able to record your screen until it's restarted.

**Click "Quit and Reopen."** This is required — don't choose "Later."

After Claude reopens, go back to **Cowork** and resume the onboarding flow. Your permissions are now set.

---

## Step 4: Choose Your Permission Mode

During setup, you'll be asked how you want Claude to handle file changes. You have three options:

**Accept Edits** — Claude makes changes automatically without asking first.

**Ask Permission** — Claude asks before every change.

**Plan Mode** — Claude shows you its plan and waits for your approval before doing anything.

**Choose Plan Mode to start.**

Cowork is capable of opening apps, editing files, sending messages, and navigating your browser. That's powerful — and it means you want to see what Claude intends to do before it does it. Plan Mode keeps you in control while you're learning what Cowork can and can't do well. Once you've seen a task work correctly a few times, you can switch to Accept Edits for that type of task.

> You can change this setting anytime. Go to the Dispatch section in Cowork and look for settings.

---

## Step 5: Grant Folder Access

As you work through the onboarding, macOS will ask Claude to access specific folders. You'll see a popup for each one.

You'll be asked about:
- **Desktop** — where screenshots and working files often land
- **Documents** — where most of your day-to-day files live
- **Downloads** — where email attachments, browser downloads, and exported files go

**Choose "Always Allow" for each one.**

These are the folders where your real work happens. Granting access once means Claude can reach them when you send tasks from your phone — without interrupting you for permission every time.

> Giving Claude access to these folders does not give it permission to act on files without your approval. With Plan Mode on, Claude still shows you its plan before touching anything. Access and action are separate — you've granted the first, and you control the second.

---

## Step 6: Pair Your Phone

In the left sidebar of Cowork, click **Dispatch**. You'll see a **"Pair your phone"** button.

Click it. You'll see a screen with a QR code.

> **What the QR code is for:** This code is for downloading the Claude mobile app — not for pairing. If you already have the app installed and signed in (which you should from the Before You Begin checklist), skip the QR code entirely.

Click the button that says **"I'm signed in on my phone."**

Now pick up your phone. Open the Claude mobile app and navigate to **Dispatch**. You'll see a screen that says "Set up Dispatch on desktop first" with three steps. Since you've already completed desktop setup, tap **Done**.

Your phone and Mac Mini are now paired.

---

## Step 7: Enable Push Notifications on Your Phone

During pairing, your phone will ask if you want to enable push notifications from Claude. **Say yes.**

Push notifications are how Dispatch closes the loop — you send a task from your phone, walk away, and your phone taps you when Claude is done. If the Claude app is open when a task completes, the result appears directly in the Dispatch chat instead of as a notification. Both work. The notification is for when you've put your phone down and moved on.

If you missed the prompt, go to **iPhone Settings → Notifications → Claude** and turn notifications on.

---

## Step 8: Create Your First Project

In the left sidebar of Cowork, find **Projects** and click **Start Project** in the onboarding flow. Then click **New Project** and choose **Start from Scratch.**

You'll be asked for a name, instructions, and a location.

**Name:** My AI Tasks

**Instructions:**
> You are helping me manage my daily work. I prefer concise summaries. Always show me your plan before taking action. When you complete a task, tell me what you did in plain language.

**Files:** Skip for now.

**Location:** Leave the default — Claude suggests Documents → Claude Projects, which is a sensible place.

Click **Create.**

You'll land on your project workspace — a chat area, your instructions on the right, a Scheduled section for recurring tasks, and a Memory section where Claude stores things you've asked it to remember across sessions.

---

## Step 9: Test It From Your Phone

This is the moment. Put down your Mac Mini and pick up your phone.

Open the Claude mobile app, go to **Dispatch**, and send this task:

> *"Create a short text file in my My AI Tasks folder in Cowork. Name it test.txt and write today's date and the words 'Dispatch is working.' "*

**Be specific:** tell Claude which folder and mention that it's in Cowork. Your phone can reach multiple Claude sessions — being clear about where the task should happen prevents confusion.

Watch your Mac Mini. Claude will show you its plan, wait for your approval, and then create the file.

When it's done, you'll either get a push notification (if the app is closed) or see the result appear in your Dispatch chat.

Check your Mac Mini — the file should be there.

---

## If Dispatch Can't Connect

If you pick up your phone and Dispatch says it can't connect to your Mac Mini, work through these in order:

**1. Check if your Mac Mini went to sleep.**
A black screen doesn't always mean sleep — but if the Mac Mini itself slept, Dispatch loses the connection. Walk to your desk and move the mouse to wake it. If this is the culprit, the fix is in Energy settings (see below).

**2. Check that the Claude desktop app is still running.**
Dispatch needs the Claude app open in the background on your Mac Mini. If it was quit or crashed, open it again and go back to Cowork. Your pairing is still intact — you don't need to set up again.

**3. Check your Energy settings — this is the most common culprit.**
On a new Mac Mini, the default energy settings will put the machine to sleep and kill your Dispatch connection. Here's how to fix it permanently:

- Click the **Apple logo in the top left corner of your screen**
- Select **System Settings**
- In the left sidebar, scroll up toward the top — look for **Energy** just below Wi-Fi, Bluetooth, and Network (it's easy to miss because most people expect it lower down)
- Click **Energy** and set the following:

| Setting | What to do |
|---|---|
| **Low Power Mode** | Turn **OFF** — this throttles your Mac Mini's performance |
| **Prevent automatic sleeping when the display is off** | Turn **ON** |
| **Wake for network access** | Turn **ON** |
| **Start up automatically after a power failure** | Turn **ON** |

> **Why these settings matter:** Low Power Mode and automatic sleep are the two most common reasons Dispatch disconnects. Turning them off keeps your Mac Mini fully awake and reachable. "Start up automatically after a power failure" is a bonus — if there's ever a power outage, your Mac Mini restarts on its own without you needing to be there.

> **"Never letting your display turn off may shorten its lifespan"** — you'll see this warning next to the display setting in Lock Screen. It's technically true but not a real concern for most people. Your Mac Mini's display going dark while the machine stays awake is different from the machine sleeping. The display can sleep; the machine should not.

---

## ✅ What You Just Did

**Win 1 — Cowork is set up and has the permissions it needs.**
Accessibility and Screen Recording are granted. Claude can see your screen and take action on it.

**Win 2 — Your phone is paired to your Mac Mini.**
Dispatch is live. You can send tasks from anywhere and come back to finished work.

**Win 3 — You have a starter project.**
My AI Tasks is ready. Add files to it, refine the instructions over time, and watch it get more useful as Claude learns how you work.

**Win 4 — You tested the full loop.**
Task sent from phone → executed on Mac Mini → result delivered. That's the AI powerhouse working the way it's supposed to.

*Your Mac Mini is no longer just a computer on your desk. It's working for you wherever you are.*

---

## What Comes Next

**Playbook 5: Git and GitHub Setup**
Connect your Mac Mini to GitHub — version control, backup, and collaboration for everything you build.

*Time Required: 20 minutes*

---

> **Remember:** You don't have to do Playbook 5 today. Each playbook is its own complete win. Come back when you have another focused window.

---

*Part of the Sage AI Studios Mac Mini AI Powerhouse Setup Series*
*Created with Claude Code — April 2026*
