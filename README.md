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
2. Find this line in the JavaScript section:
   ```javascript
   const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL';
   ```
3. Replace `YOUR_DISCORD_WEBHOOK_URL` with your Discord Webhook URL from Step 1
   - Make sure to keep the quotes around it!
   - Example: `const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/123456789/ABC...';`

### Step 3: Deploy to GitHub Pages

1. Create a new GitHub repository (or use this one)
2. Push `index.html` to the repository
3. Go to repository **Settings** → **Pages**
4. Select source branch (usually `main` or `master`)
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

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

⚠️ **Important**: Your Discord Webhook URL is visible in the HTML source code. This is fine for personal use, but keep in mind:
- Anyone with the webhook URL can send messages to your Discord channel
- If you want to keep it private, consider:
  - Using environment variables (requires a build step)
  - Using a simple backend proxy (adds complexity)
  - For personal use, the exposed URL is acceptable since it only sends messages to your own Discord channel
- If your webhook URL is ever exposed publicly, you can regenerate it in Discord settings

## 📋 Tech Stack

| Component            | Tool             | Cost |
| -------------------- | ---------------- | ---- |
| Website hosting      | GitHub Pages     | Free |
| Button trigger logic | JavaScript       | Free |
| Notification system  | Discord Webhooks | Free |
| Phone delivery       | Discord App      | Free |

## 🐛 Troubleshooting

**No notification received?**
- Check that your Discord Webhook URL is correctly set in `index.html`
- Make sure the webhook URL is complete and includes `https://discord.com/api/webhooks/...`
- Verify the webhook is still active in Discord (Server Settings → Integrations → Webhooks)
- Check that you have Discord mobile notifications enabled on your phone
- Make sure you have access to the Discord channel where the webhook sends messages
- Look at the browser console for any error messages (F12 → Console tab)

**Button doesn't work?**
- Open browser developer tools (F12) and check the Console tab
- Verify the Webhook URL is not still set to `YOUR_DISCORD_WEBHOOK_URL`
- Make sure the URL is wrapped in quotes: `'https://discord.com/api/webhooks/...'`
- Check your internet connection
- Try testing the webhook URL directly by pasting it in your browser (you should see a JSON response)

## 📝 License

Free to use for any purpose!

---

**Made with ☕ for Lila's caffeine needs**
# LilaFuel
