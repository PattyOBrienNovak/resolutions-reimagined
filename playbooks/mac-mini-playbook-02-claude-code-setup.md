# Playbook 2: Claude Code Setup
### For Women Building AI-Native Businesses

**Series:** Sage AI Studios — Mac Mini AI Powerhouse Setup
**Level:** Beginner-friendly
**Playbook:** 2 of 7

---

## Before You Begin

**⏱ Time Required: 20 minutes**
**Interruption Risk: Medium — steps are short but sequential**

*This playbook installs the tools you need to start working with Claude Code — your AI development partner. By the end, you'll have Chrome, Claude Code, and your API key configured and ready to use.*

**Not a good time?** The safest stopping points are after Step 1 (Chrome installed) or after Step 2 (API key saved). Don't stop mid-Terminal session.

**What to have nearby:**
- [ ] Your Anthropic account login (console.anthropic.com)
- [ ] A password manager or secure note app — you'll be saving your API key
- [ ] The Mac account password you created in Playbook 1

---

## Why These Tools

Before installing anything, here's what you're installing and why:

| Tool | What It Is | Why You Need It |
|---|---|---|
| **Chrome** | Google's web browser | Your familiar browser — access to Google tools, Colab, and more |
| **Homebrew** | Package manager for Mac | The easiest way to install tools that aren't in the App Store |
| **Node.js** | A runtime environment | Claude Code is built on it — it won't run without it |
| **Claude Code** | Anthropic's AI CLI | Your AI development partner — the whole point of this playbook |

---

## Step 1: Install Chrome

Your Mac Mini came with Safari. Chrome is not in the Mac App Store — you download it directly from Google.

> **First time setting up your own machine?** This is how most Mac apps that aren't in the App Store work — download from the company's website, drag to Applications. You'll do this a few more times in this series. It gets familiar fast.

1. Open **Safari** — look for it in your **dock** (the bar of icons at the bottom of your screen) or press **Command + Space**, type Safari, and press Enter
2. Go to **google.com/chrome**
3. Click **"Download Chrome"**
4. Open the downloaded file — it appears in your Downloads folder or at the bottom of the Safari window
5. An installer window opens showing the Chrome icon and an Applications folder. **Drag the Chrome icon into the Applications folder.** Don't close this window until the drag is complete — same rule as your API key.
6. Once Chrome is in Applications, **eject the Chrome disk image.** You'll see a small drive icon appear in the upper right corner of your monitor. Right-click it and select **"Eject"** — or drag it to the Trash (the Trash icon becomes an eject arrow when you do this). This is just cleanup — Chrome is already installed.
7. Open Chrome — press **Command + Space**, type Chrome, press Enter. Or open **Finder** (the blue and white smiley face in your dock) → click **Applications** in the left sidebar → double-click Chrome

**Chrome will open with a "Welcome to Google Chrome" screen.** Two things to do here:

- **"Make Google Chrome your default browser"** — click it. Chrome is where you'll be doing most of your work on this machine.
- **"Automatically send usage statistics and crash reports to Google"** — this is pre-checked. **Uncheck it.** Your AI powerhouse shares data on your terms, not Google's by default.

**macOS will pop up a confirmation dialog asking if you're sure you want Chrome as your default browser.** Click **"Use Chrome."**

**Chrome will then show a "Sign in to Chrome" screen.** This syncs your bookmarks, saved passwords, and history across your devices via your Google account.

> **Should you sign in?** Yes — especially if you use Google Colab, Drive, or any Google tools for your AI work. Signing in means your bookmarks and passwords are already waiting for you on this machine. Use whichever Google account you do most of your business work from.
>
> Prefer to keep things separate? Click **"Skip"** — Chrome works completely fine without a Google account attached.

**⚠️ Gotcha: Google may sign you in using a passkey through your iPhone.**
Instead of asking for your password, Google sends an approval request to your iPhone — you confirm with Face ID. This is more secure than a password, but it's unexpected if you're not ready for it.
- When Chrome asks to "use a passkey," approve it
- Pick up your iPhone — a notification or prompt will appear
- Confirm with Face ID
- You're signed in

> **Have multiple Google accounts?** Sign in to your primary one now. You can add additional Google accounts to Chrome later through the profile icon in the top right corner of the browser.

> **⚠️ You may see a notification: "Google Updater is running in background activity."** That's Chrome's auto-updater keeping itself current. It's normal — dismiss the notification and let it run. Nothing is wrong.

**⚠️ Chrome may ask to save your passwords as you sign in — including your password manager's master password. Click "Never" for your master password.**

> Your Bitwarden (or 1Password) master password is the key to your entire vault — every password, every API key, everything you store. Saving it inside Chrome means if Chrome is ever compromised, everything is. The master password is the **one password you memorize.** Everything else goes in the vault. If you're worried about forgetting it, write it on paper and store it somewhere physically secure — not in any app.

**A note on password managers: Bitwarden vs 1Password**

Both are excellent. Here's the honest comparison for AI and developer work:

| | Bitwarden | 1Password |
|---|---|---|
| **Cost** | Free (or $10/year for premium) | ~$3/month |
| **Security** | Excellent — open source, audited | Excellent |
| **For AI/developer work** | Works great | Has a CLI that injects secrets into terminal commands |
| **Switching cost** | — | Its own project — don't do it mid-setup |

**Recommendation:** If Bitwarden is working for you, stay with it for now. 1Password's CLI is genuinely useful when you're managing many API keys across many projects — but that's a future decision, not a today one. Finish setting up your Mac Mini first. Switching password managers can be its own playbook when the time is right.


**Chrome will also ask to send you notifications.** Click **"Block"** — this machine is for building, not for getting pinged by websites. You can always allow notifications for specific sites later if you need to.

---

## Step 2: Create Your Anthropic API Key

Your API key is what proves to Claude Code that you're you. It connects Claude Code on your Mac Mini to Anthropic's servers.

> **Important:** Anthropic only shows you the complete key once — the moment you create it. After you close that window, the full key is hidden forever. You can always create a new one, but you can never recover an old one. Create it fresh and save it immediately.

1. In Chrome, go to **console.anthropic.com**
2. Sign in with your Anthropic account
3. Click **"API Keys"** in the left sidebar
4. Click **"Create Key"**
5. Name it **`mac-mini`** — so you know exactly which device is using it
6. Copy the key the moment it appears — it starts with `sk-ant-`
7. **Immediately save it** to your password manager or a secure note on your iPhone

> **Don't close that window until your key is saved somewhere.** Once you close it, that key is masked forever.

---

## Step 3: Open Terminal

Terminal is your Mac's command line — a text window where you type instructions directly to your computer. It looks plain, but it's powerful. For installing tools, it's faster and more reliable than clicking through graphical interfaces.

**You'll use Terminal a lot as you build. This is your first look at it.**

To open Terminal:
1. Press **Command + Space** to open Spotlight Search
2. Type **Terminal**
3. Press **Enter**

A window opens with a blinking cursor. That's Terminal. That's all it is.

> **Don't be put off by how it looks.** Every step in this playbook tells you exactly what to type. You're not expected to know Terminal — you just need to follow the steps. It gets comfortable quickly.

---

## Step 4: Install Homebrew

Homebrew is a package manager — think of it as an App Store for tools that don't have graphical installers. Install Homebrew once, and from then on installing almost anything is a single command.

In Terminal, paste this entire line and press Enter:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> **It will ask for your Mac password.** This is the password you created in Playbook 1 — your Mac account password, not your Apple ID. Type it and press Enter. You won't see the characters appear as you type — that's normal and intentional. Just type your password and hit Enter.

Installation takes 2–5 minutes. Text will scroll by — that's Homebrew working.

**When it finishes, look for a section that says "Next steps."**

Homebrew will give you two or three commands to run. They'll look something like this (with your actual username in place of `patty`):

```
echo >> /Users/patty/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/patty/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

**Run those commands exactly as they appear in your Terminal** — use the ones Homebrew gives you, not the example above. This step tells your Mac where to find Homebrew.

> **What is PATH and why does this matter?** Your Mac has a list of locations it checks when you run a command. Without this step, your Mac won't know Homebrew exists even though it's installed. These commands add Homebrew to that list permanently.

After running those commands, **close Terminal completely and reopen it.** This makes the changes take effect.

---

## Step 5: Install Node.js

Claude Code requires Node.js to run. With Homebrew installed, this is one command:

```
brew install node
```

Press Enter. Wait 1–3 minutes.

When it finishes, confirm it worked:

```
node --version
```

You'll see a version number like `v22.x.x`. That means Node.js is installed and ready.

---

## Step 6: Install Claude Code

> **⚠️ Heads up — installation method may have changed.**
> Anthropic is transitioning Claude Code from npm to a native installer. The npm method below worked at the time this playbook was written, but if you see a message about a native installer during or after setup, follow that link instead. Check **docs.anthropic.com** for the most current installation instructions if anything looks different.

One command:

```
npm install -g @anthropic-ai/claude-code
```

This installs Claude Code globally — meaning you can use it from any folder on your Mac Mini.

When it finishes, confirm it worked:

```
claude --version
```

You'll see a version number. Claude Code is installed.

---

## Step 7: Connect Your API Key

Now you connect Claude Code to your Anthropic account using the key you saved in Step 2.

Type:

```
claude
```

Claude Code will walk you through a short setup. Use your **arrow keys** to move between options and press **Enter** to select. No mouse needed — Terminal is keyboard-driven.

> **Can't find your key?** Go back to console.anthropic.com, create a new one named `mac-mini-2`, copy it immediately, and save it this time before closing the window.

**macOS may ask: "Terminal wants to access files managed by iCloud Drive."**
→ This is macOS protecting your files — not Claude doing anything unexpected. Your answer depends on where your files live:
> - **Your files are in iCloud Drive** → Click **"Allow"** — one-time permission, won't ask again.
> - **Your files are in Google Drive** → Click **"Don't Allow"** — you're not working out of iCloud, so Terminal doesn't need access to it.

**macOS may ask: "Terminal would like to access files in your Downloads folder."**
→ Click **"Allow."** Downloads is where installers and files land — Terminal needs access to work with them.

> **"Why didn't it ask about my Documents folder?"** macOS doesn't always ask upfront for every folder. It may ask about Documents later when something actually tries to access it, or it may already be covered. If it never asks, that's fine — nothing is wrong.

**macOS will ask Terminal for access to several folders and apps.** You'll see a series of permission prompts — one at a time — for things like:
- Downloads folder
- Desktop folder
- Documents folder
- Data from other apps

→ **Allow all of them — except Photos.** You're building an AI powerhouse. Terminal needs access to your files and apps to do its job. These are one-time prompts — macOS won't keep asking.

> **Photos: choose "Limit Access."** Your working files live in Downloads and Documents — not your photo library. Your iPhone photos have no place in an AI development workflow, and there's no reason to give Terminal access to your entire personal photo library.

**Claude Code will ask: "Do you trust the workspace you started in?"**
→ Click **Yes**. This is a security check — Claude Code is asking permission to work in the folder you opened it from. You'll see this every time you start Claude Code in a new folder. Always glance at the folder name to confirm it's where you meant to be, then trust it.

Claude Code is now open and connected.

---

## Step 8: Verify It Works

In the Claude Code session, type:

```
Hello — are you working?
```

You'll get a response from Claude. If you do, everything is connected and working.

Type `/exit` or press **Ctrl + C** to close the session.

---

## Bonus: Install the Claude Desktop App

While you're here — install the Claude desktop app. It gives you Claude as a native Mac app, always one click away, separate from your browser.

1. Go to **claude.ai** in Chrome
2. Look for a **"Download the app"** link — it's typically in the sidebar or the bottom of the page
3. Click **macOS** to download the Mac version
4. Open your **Downloads folder** — click the Finder icon in your dock (the blue and white smiley face), then click Downloads in the left sidebar
5. **Double-click the Claude file** you just downloaded
6. An installer window opens. **Drag the Claude icon into the Applications folder** — same as Chrome
7. **Don't close the window until the drag is complete**
8. Open **Spotlight** — press **Command + Space** — type **Claude** — press **Enter**
9. macOS will ask **"Are you sure you want to open this?"** — click **Open**. This is standard Mac security for apps downloaded from the internet, not the App Store. It's not a warning — it's just a check.
10. Once Claude opens, find the **Claude icon in your dock** at the bottom of the screen → **right-click it** → choose **"Keep in Dock"** so it stays there permanently

That's it. Claude is now a permanent part of your Mac Mini.

**After Claude opens, it will ask for a few permissions. Allow all of these:**
- **"Claude would like to find devices on your local network"** → Allow. This is needed for Dispatch and for Claude to work with other devices on your network as you build.

> These are one-time prompts. macOS won't keep asking.

---

## ✅ What You Just Did

**Win 1 — Chrome installed.**
Your familiar browser is on your Mac Mini. Google Colab, Drive, and all your Google tools are accessible.

**Win 2 — API key created and saved.**
Your connection to Anthropic is established and secured. And you now know how API keys work — a skill you'll use constantly in this work.

**Win 3 — Homebrew installed.**
You have a package manager. Installing future tools is now a one-line command.

**Win 4 — Claude Code is live on your Mac Mini.**
Your AI development partner is running on your AI powerhouse. This is the tool you'll use to build everything in this series.

**Win 5 — Claude desktop app installed.**
You have Claude available as a native Mac app — always one click away.

*You just set up a professional AI development environment. That's not a small thing.*

---

## What Comes Next

**Playbook 3: Jupyter Notebook Setup**
Install Jupyter locally — required for the Anthropic certification course and AI development work.

*Time Required: 20 minutes*

---

> **Remember:** You don't have to do Playbook 3 today. Each playbook is its own complete win. Come back when you have another focused window.

---

*Part of the Sage AI Studios Mac Mini AI Powerhouse Setup Series*
*Created with Claude Code — April 2026*
