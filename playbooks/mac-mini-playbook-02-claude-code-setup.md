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

1. Open **Safari** (it's in your dock or Applications folder)
2. Go to **google.com/chrome**
3. Click **"Download Chrome"**
4. Open the downloaded file — it appears in your Downloads folder or at the bottom of the Safari window
5. Drag the Chrome icon into your **Applications folder** when the window appears
6. Open Chrome from your Applications folder

Chrome will ask if you want to set it as your default browser. That's your call — no wrong answer.

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

The first time you run Claude Code, it will prompt you for your API key. Paste the key you saved earlier.

> **Can't find your key?** Go back to console.anthropic.com, create a new one named `mac-mini-2`, copy it immediately, and save it this time before closing the window.

Once your key is accepted, Claude Code opens a session and you're connected.

---

## Step 8: Verify It Works

In the Claude Code session, type:

```
Hello — are you working?
```

You'll get a response from Claude. If you do, everything is connected and working.

Type `/exit` or press **Ctrl + C** to close the session.

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

*You just set up a professional AI development environment. That's not a small thing.*

---

## What Comes Next

**Playbook 3: Cursor Setup**
Install and configure Cursor — the AI-powered code editor for your projects.

*Time Required: 15 minutes*

---

> **Remember:** You don't have to do Playbook 3 today. Each playbook is its own complete win. Come back when you have another focused window.

---

*Part of the Sage AI Studios Mac Mini AI Powerhouse Setup Series*
*Created with Claude Code — April 2026*
