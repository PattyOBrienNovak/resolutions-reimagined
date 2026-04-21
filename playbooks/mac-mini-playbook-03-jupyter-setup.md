# Playbook 3: Jupyter Notebook Setup
### For Women Building AI-Native Businesses

**Series:** Sage AI Studios — Mac Mini AI Powerhouse Setup
**Level:** Beginner-friendly
**Playbook:** 3 of 7

---

## Before You Begin

**⏱ Time Required: 20 minutes**
**Interruption Risk: Medium — steps are sequential but short**

*This playbook installs Jupyter Notebook locally on your Mac Mini. If you've used Google Colab before, you already know what Jupyter notebooks are — this is the same thing, running on your own machine instead of in a browser tab.*

**Who needs this playbook:**
- Anyone doing the Anthropic API certification course
- Anyone doing AI development work that requires local notebooks
- If neither applies to you right now, skip ahead to Playbook 4 and come back when you need it

**What to have nearby:**
- [ ] Playbook 2 complete — Homebrew must be installed first
- [ ] Terminal open (Command + Space → type Terminal → Enter)

---

## Why Local Jupyter vs Google Colab?

You may already use Google Colab for notebooks. Here's when local Jupyter makes sense:

| | Google Colab | Local Jupyter |
|---|---|---|
| **Setup** | None — works in browser | One-time setup (this playbook) |
| **Speed** | Depends on Google's servers | Your M4 — very fast |
| **Works offline** | No | Yes |
| **Your data stays local** | No — goes to Google | Yes — stays on your machine |
| **Cost** | Free (with limits) | Free forever |

For the Anthropic certification course and serious AI development work, local Jupyter is worth the one-time setup.

---

## A Note About Virtual Environments

Before we install anything, here's a concept worth understanding — your daughter probably lives in these.

> A **virtual environment** is a dedicated, isolated space for Python and its packages. Think of it like a separate room for each project — Jupyter gets its own room, nothing interferes with anything else on your machine.

This is standard Python development practice. We're going to create one called `jupyter-env` and install Jupyter inside it. Every time you want to use Jupyter, you'll step into that room first.

It sounds like extra work. It saves enormous headaches later.

---

## Step 1: Install Python 3.12

Your Mac Mini came with Python 3.9 — older and not ideal for AI development work. We'll install 3.12, which is stable and current.

In Terminal:

```
brew install python@3.12
```

When it finishes, verify it worked:

```
python3.12 --version
```

You should see `Python 3.12.x`. 

---

## Step 2: Install pipx

pipx is a tool for installing Python applications cleanly. We install it first, then use it — or work around it if needed (see Step 3).

```
brew install pipx
```

When it finishes, run:

```
pipx ensurepath
```

> **Terminal may celebrate with emojis here.** `✨ 🌟 ✨` — yes, really. It's telling you pipx is ready. You've now seen everything.

**Close Terminal completely and reopen it** — this applies the PATH changes pipx just made.

---

## Step 3: Create a Virtual Environment for Jupyter

> **⚠️ Why we're doing it this way:** Newer Python and pip installations protect themselves from having packages installed directly into them. If you try to install Jupyter straight into Python, you'll get an "externally managed environment" error. The solution — and the right approach — is a virtual environment.

Three commands, one at a time:

**1. Create the environment:**
```
python3.12 -m venv ~/jupyter-env
```

This creates a dedicated folder called `jupyter-env` in your home directory. That's Jupyter's room.

**2. Activate it:**
```
source ~/jupyter-env/bin/activate
```

You'll see `(jupyter-env)` appear at the start of your Terminal prompt. That means you're inside the environment — anything you install now goes into Jupyter's room, not the main system.

**3. Install Jupyter:**
```
pip install jupyter
```

This takes a minute or two — Jupyter has several packages. Text will scroll. That's normal.

> **"A new release of pip is available"** — you may see this notice at the end. It's not an error. Ignore it for now.

---

## Step 4: Launch Jupyter

Make sure your virtual environment is still active — you should see `(jupyter-env)` at the start of your Terminal prompt. If not, run `source ~/jupyter-env/bin/activate` first.

Then:

```
jupyter notebook
```

Jupyter will launch and open automatically in Chrome. You'll see the Jupyter file browser — a list of folders and files on your Mac Mini.

> **⚠️ Keep that Terminal window open.** Terminal is the engine running Jupyter in the background. As long as Jupyter is open in Chrome, that Terminal window must stay open. Close it and Jupyter stops immediately. You can minimize it — just don't close it.

---

## Step 5: Create Your First Notebook

1. Click **"New"** in the top right corner of the Jupyter browser
2. Select **"Python 3"** (or similar) from the dropdown
3. A new notebook opens — you'll see an empty cell
4. Type this in the cell:

```python
print("Hello from my Mac Mini!")
```

5. Click the **Run arrow** in the toolbar (or press **Shift + Enter**)

You should see `Hello from my Mac Mini!` appear below the cell. Jupyter is working.

---

## Step 6: Stop Jupyter When You're Done

When you're finished working in Jupyter:

1. Save your notebook (File → Save, or Command + S)
2. Go back to **Terminal**
3. Press **Ctrl + C** — Terminal will ask you to confirm
4. Press **Ctrl + C** again to confirm

> **Don't just close the Chrome tab.** That leaves Jupyter running in the background. Always stop it from Terminal when you're done.

---

## Every Time You Use Jupyter

Unlike Chrome or the Claude app, Jupyter doesn't stay running. Each time you want to use it, you'll do three steps in Terminal:

**1. Navigate to your project folder first:**
```
cd ~/your-course-folder
```
> **This matters.** Jupyter serves files from whatever folder you launch it from. Launch from your home directory and your notebooks end up scattered. Launch from your course or project folder and everything stays organized. Always navigate to the right folder before launching.

**2. Activate your virtual environment:**
```
source ~/jupyter-env/bin/activate
```

**3. Launch Jupyter:**
```
jupyter notebook
```

---

## ✅ What You Just Did

**Win 1 — Python 3.12 installed.**
Your Mac Mini is running a current, stable version of Python — ready for AI development work.

**Win 2 — You understand virtual environments.**
This is how serious Python developers work. You're doing it right from day one.

**Win 3 — Jupyter is running locally.**
Your notebooks run on your M4 Mac Mini — fast, private, and yours. No Google servers, no usage limits, no internet required.

**Win 4 — You ran your first local notebook.**
Same Jupyter you know from Colab, now living on your AI powerhouse.

*Your Mac Mini is becoming a real development machine.*

---

## What Comes Next

**Playbook 4: Dispatch Setup**
Connect to your Mac Mini remotely from your iPhone or laptop — your AI powerhouse, accessible from anywhere.

*Time Required: 15 minutes*

---

> **Remember:** You don't have to do Playbook 4 today. Each playbook is its own complete win. Come back when you have another focused window.

---

*Part of the Sage AI Studios Mac Mini AI Powerhouse Setup Series*
*Created with Claude Code — April 2026*
