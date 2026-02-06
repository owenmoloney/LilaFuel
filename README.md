# ☕ Lila Fuel Alert - Free Button Notification System

A simple, free web application that sends push notifications to your phone when a button is clicked. Perfect for alerting when "caffeine is low" or any other quick notification need.

## 🎯 Features

- **100% Free** - No servers, no AWS, no costs
- **Instant Notifications** - Push notifications to your phone via Discord
- **Simple UI** - Clean, modern button interface
- **GitHub Pages Ready** - Deploy in minutes

## 🏗️ Architecture

```
User visits website (GitHub Pages)
        |
        v
User clicks "Caffeine Low" button
        |
        v
Website sends webhook to Discord
        |
        v
Discord sends push notification to your phone
```

## 🚀 Quick Setup (3 Minutes)

### Step 1: Create a Discord Webhook

1. Open Discord (app or web)
2. Go to your Discord server (or create a new one for personal use)
3. Click on your server name → **Server Settings** → **Integrations** → **Webhooks**
4. Click **"New Webhook"** or **"Create Webhook"**
5. Give it a name (e.g., "Lila Fuel Alert")
6. Choose which channel you want notifications sent to (you can create a private channel just for this)
7. Click **"Copy Webhook URL"** - it looks like:
   ```
   https://discord.com/api/webhooks/123456789/ABCdefGHIjklMNOpqrsTUVwxyz
   ```
8. **Save this URL** - you'll need it in Step 2

### Step 2: Configure the Website

1. Open `index.html` in a text editor

2. Find this line in the JavaScript section (around line 28):
   ```javascript
   const DISCORD_WEBHOOK = "YOUR_WEBHOOK_URL_HERE";
   ```

3. Replace `YOUR_WEBHOOK_URL_HERE` with your Discord Webhook URL from Step 1:
   ```javascript
   const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/123456789/ABC...";
   ```

### Step 3: Deploy to GitHub Pages

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Discord webhook"
   git push
   ```

2. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Click **Settings** → **Pages**
   - Under "Source", select **"Deploy from a branch"**
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click **Save**

3. **Your site will be live in a few minutes!**
   - URL will be: `https://yourusername.github.io/LilaFuel/`
   - You can find the exact URL in Settings → Pages after deployment

## 📱 Testing

1. Open your deployed website
2. Click the **"Caffeine Low"** button
3. Check your Discord app for the notification!
4. You'll also get a push notification on your phone if you have Discord mobile notifications enabled

## 🎨 Customization

### Change Button Text
Edit the button HTML in `index.html`:
```html
<button class="alert-button" id="alertButton" onclick="sendAlert()">
    <span class="emoji">⚠️</span>
    Your Custom Text Here
</button>
```

### Change Colors
Modify the CSS gradient in the `<style>` section:
```css
.alert-button {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Change Notification Message
Update the message in the JavaScript:
```javascript
const message = 'Your custom message here!';
```

## 🔒 Security Note

⚠️ **Important**: Your Discord Webhook URL is visible in the `index.html` source code. This means:
- Anyone who views your repository can see the webhook URL
- They could potentially send messages to your Discord channel
- **If this is a concern**, you can:
  - Regenerate your webhook URL in Discord if it gets exposed
  - Use a private repository instead of public
  - Or set up the GitHub Actions workflow with secrets (more complex)

For personal use, having the webhook visible is usually fine since you can regenerate it anytime in Discord.

## 🔥 Firebase (Optional)

The app can use Firebase Firestore to sync the caffeination level across devices.

### Setup

1. **Create a Web App** in [Firebase Console](https://console.firebase.google.com/) (project: LilaFuel / lilafuel)
2. Go to **Project Settings** → **Your apps** → **Add app** (Web)
3. Copy the `firebaseConfig` object
4. Copy `firebase.config.example.js` to `firebase.config.js` and paste your config (replace `YOUR_API_KEY` and `YOUR_APP_ID`)
5. **Enable Firestore**: Firebase Console → Build → Firestore Database → Create database
6. **Set Firestore rules** (for testing):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /caffeination/{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

When configured, the caffeination level is saved to Firestore and synced across devices. Without Firebase, it falls back to localStorage.

## 📋 Tech Stack

| Component            | Tool             | Cost |
| -------------------- | ---------------- | ---- |
| Website hosting      | GitHub Pages     | Free |
| Button trigger logic | JavaScript       | Free |
| Notification system  | Discord Webhooks | Free |
| Phone delivery       | Discord App      | Free |
| Level sync (optional)| Firebase Firestore | Free |

## 🐛 Troubleshooting

**No notification received?**
- Check that your Discord Webhook URL is correctly set in `index.html`
- Make sure the webhook URL is complete and includes `https://discord.com/api/webhooks/...`
- Verify the webhook is still active in Discord (Server Settings → Integrations → Webhooks)
- Check that you have Discord mobile notifications enabled on your phone
- Make sure you have access to the Discord channel where the webhook sends messages
- Look at the browser console for any error messages (F12 → Console tab)

**Slider doesn't work?**
- Open browser developer tools (F12) and check the Console tab for errors
- Verify the Webhook URL in `index.html` is not still set to `YOUR_WEBHOOK_URL_HERE`
- Make sure the URL is wrapped in quotes: `"https://discord.com/api/webhooks/..."`
- Check your internet connection
- Try testing the webhook URL directly by pasting it in your browser (you should see a JSON response)

## 📝 License

Free to use for any purpose!

---

**Made with ☕ for Lila's caffeine needs**
# LilaFuel
