# Playbook 4: Dispatch Setup
### For Women Building AI-Native Businesses

**Series:** Sage AI Studios — Mac Mini AI Powerhouse Setup
**Level:** Beginner-friendly
**Playbook:** 4 of 7

---

## Before You Begin

**⏱ Time Required: 15 minutes**
**Interruption Risk: Low — steps are short and independent**

*This playbook turns your Mac Mini into a machine you can reach from anywhere — your iPhone, your laptop, a coffee shop. Your AI powerhouse doesn't have to be in the room with you to be working for you.*

**Who needs this playbook:**
- Anyone who wants to start AI tasks on the Mac Mini and check on them from their phone
- Anyone who works in multiple locations and doesn't want to be tethered to the desk
- Anyone who wants to leave long-running jobs running overnight and peek in remotely

**What to have nearby:**
- [ ] Playbook 1 complete — your Mac Mini is set up and on your home network
- [ ] Your home Wi-Fi network name and password (you'll need it for a second device)
- [ ] Your iPhone or another laptop nearby — you'll use it to test the connection

---

## What "Dispatch" Means Here

The name is intentional. Once this playbook is done, you can **dispatch work to your Mac Mini from anywhere** — fire off an AI task, check on a running notebook, or pick up where you left off — without being at your desk.

There are two layers to this:

| Layer | What It Gives You | When You Need It |
|---|---|---|
| **Screen Sharing** | Full visual access — see and control your Mac Mini's screen | When you need the GUI, running a notebook, browsing files |
| **SSH (Remote Login)** | Command-line access — run Terminal commands remotely | When you're comfortable in Terminal, running scripts |

This playbook sets up both. Screen Sharing is what most people use daily. SSH is there when you want it.

> **On the same Wi-Fi network?** Both options work immediately. At a coffee shop or away from home? There's a free tool called Tailscale covered at the end of this playbook — a 5-minute add-on that makes your Mac Mini reachable from anywhere in the world.

---

## A Note on Security

You're opening up your Mac Mini to connections. Two things keep this safe:

1. **Your macOS login password is the gatekeeper.** Anyone who connects has to know it. Choose a strong password — if you didn't during Playbook 1, now is a good time to set one. (System Settings → Lock Screen → Change Password)
2. **Your home network is a protective layer.** The connections you're enabling only work within your home network by default. The Tailscale section extends this securely.

---

## Step 1: Enable Screen Sharing

Screen Sharing lets you see and control your Mac Mini's desktop from another device — like having a window into your Mac Mini from your couch.

1. Click the **Apple menu** (top-left corner of your screen)
2. Select **System Settings**
3. In the left sidebar, scroll down and click **General**
4. Click **Sharing**
5. Find **Screen Sharing** in the list
6. Click the toggle to turn it **On** — it turns green

> **You'll see a line that says something like:** *"Other users can access your computer's screen at vnc://192.168.1.XX"*
> That address is your Mac Mini's local address. **Write it down or take a photo of it.** You'll use it in Step 3.

That's it for Screen Sharing. One toggle.

---

## Step 2: Enable Remote Login (SSH)

Remote Login lets you connect via Terminal — useful for running commands on your Mac Mini from anywhere.

Still in **System Settings → General → Sharing:**

1. Find **Remote Login** in the list
2. Click the toggle to turn it **On** — it turns green
3. Click the **"ⓘ" info button** next to Remote Login
4. You'll see: *"To log in to this computer remotely, type: ssh yourusername@192.168.1.XX"*
5. **Write down or screenshot this command.** This is how you'll connect from Terminal on another machine.

> **"Allow access for: All users" vs "Only these users"** — "All users" is fine for now. It still requires your macOS password to connect.

---

## Step 3: Find Your Mac Mini's Name and Address

You now have two ways to reach your Mac Mini on your local network:

**By IP address** — the numbers you wrote down (e.g., `192.168.1.47`)

**By name** — easier to remember. In Terminal:

```
hostname
```

You'll see something like `patricias-mac-mini.local`. This is your Mac Mini's name on the network. Both the IP address and this `.local` name work for connecting.

> **Why note both?** IP addresses on home networks can occasionally change. The `.local` name usually stays the same. If one stops working, try the other.

---

## Step 4: Test Screen Sharing From Another Device

**From a Mac laptop (easiest):**

1. Open **Finder** on your laptop
2. In the left sidebar, look for your Mac Mini under **Network** or **Locations**
3. Click on it — you'll see a **"Share Screen"** button
4. Click Share Screen, enter your macOS username and password
5. Your Mac Mini's desktop appears in a window on your laptop

Alternatively, from your laptop's Terminal:

```
open vnc://192.168.1.XX
```

(Replace XX with your actual address from Step 1.)

**From an iPhone:**

The App Store has several Screen Sharing apps. Two reliable free options:
- **Apple Remote Desktop** (Apple's own app — free to use, paid to manage multiple machines)
- **Screens 5** (paid, ~$20, the most polished option for ongoing use)
- **Jump Desktop** (free tier available)

For a quick test, search "VNC Viewer" in the App Store — there are several free options. Enter your Mac Mini's IP address and your macOS password to connect.

> **Which app should you buy?** If you're going to use this regularly, Screens 5 is worth it. If you want free, the VNC Viewer apps work fine. Don't spend money until you've tested the connection and know you'll use it.

---

## Step 5: Test SSH From Another Device

**From a Mac laptop:**

Open Terminal and type:

```
ssh yourusername@192.168.1.XX
```

(Use the exact command you wrote down in Step 2 — it includes your actual username and IP.)

The first time, Terminal will ask: *"Are you sure you want to continue connecting (yes/no)?"* Type `yes` and press Enter.

Enter your macOS password when prompted. You'll see your Mac Mini's Terminal prompt appear — you're in.

To disconnect:

```
exit
```

**From an iPhone:**

Search for **Termius** in the App Store — it's free and has a clean interface. Enter your Mac Mini's IP address, username, and password to connect.

> **Don't want to type your password every time?** SSH keys eliminate the password prompt entirely. That's a 10-minute setup covered in the appendix at the end of this playbook — worth doing once you've confirmed everything works.

---

## Optional: Tailscale — Access From Anywhere

Everything above works on your **home network**. If you want to reach your Mac Mini from a coffee shop, a client's office, or your phone on cellular — Tailscale makes this simple.

**What Tailscale is:** A free, secure networking tool that connects your devices together as if they're on the same Wi-Fi network, no matter where they are. Your Mac Mini gets a permanent address you can reach from anywhere.

**Setup (5 minutes):**

1. Go to **tailscale.com** in Chrome on your Mac Mini
2. Click **"Get started for free"** — sign in with your Google account
3. Download and install **Tailscale for Mac**
4. Install **Tailscale** on your iPhone from the App Store
5. Sign in to the same account on both devices

That's it. Tailscale gives your Mac Mini a permanent address like `100.XX.XX.XX` — use it exactly like the local IP address from Steps 1 and 2, from anywhere in the world.

> **Is it secure?** Yes. Tailscale uses WireGuard, which is the same encryption standard that security professionals use. Your connection is end-to-end encrypted. Tailscale cannot see your traffic.
>
> **Is the free plan enough?** For personal use, yes. The free plan supports up to 3 users and 100 devices.

---

## ✅ What You Just Did

**Win 1 — Screen Sharing is live.**
You can see and control your Mac Mini from your laptop or iPhone without leaving the couch. Your desk setup is no longer the only place to work.

**Win 2 — SSH is live.**
Your Mac Mini accepts Terminal connections. When you're ready to run commands remotely, the door is open.

**Win 3 — You know your Mac Mini's address.**
You have the IP address and `.local` name written down. These are your keys.

**Win 4 (if you did Tailscale) — Your AI powerhouse goes with you.**
Coffee shop, client visit, travel — your Mac Mini is reachable from anywhere, securely.

*This is what "AI powerhouse" actually means — a machine that works for you wherever you are.*

---

## Appendix: SSH Keys (Skip the Password Prompt)

Once SSH is working, you can set it up so your laptop connects without a password — using a cryptographic key pair instead. Faster and more secure.

On your **laptop**, in Terminal:

**1. Generate a key pair:**
```
ssh-keygen -t ed25519 -C "your-email@example.com"
```
Press Enter through all the prompts (accepting defaults is fine).

**2. Copy your public key to your Mac Mini:**
```
ssh-copy-id yourusername@192.168.1.XX
```
Enter your Mac Mini password one last time.

**3. Test it:**
```
ssh yourusername@192.168.1.XX
```
You should connect immediately — no password prompt.

> **What just happened:** You created a key pair — a public key and a private key. The public key lives on your Mac Mini. The private key lives on your laptop. When you connect, they match each other automatically. Your password is never sent over the network.

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
