# ☕ Lila Fuel Alert - Free Button Notification System

A simple, free web application that sends push notifications to your phone when a button is clicked. Perfect for alerting when "caffeine is low" or any other quick notification need.

## 🎯 Features

- **100% Free** - No servers, no AWS, no costs
- **Instant Notifications** - Push notifications to your phone via IFTTT
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
Website sends Webhook request to IFTTT
        |
        v
IFTTT triggers Applet
        |
        v
Push notification sent to your phone
```

## 🚀 Quick Setup (5 Minutes)

### Step 1: Set Up IFTTT Webhook

1. Go to [IFTTT.com](https://ifttt.com) and create a free account (if you don't have one)
2. Visit [IFTTT Webhooks](https://ifttt.com/maker_webhooks)
3. Click **"Documentation"** to get your unique webhook key
4. Copy your key (looks like: `abc123xyz456...`)

### Step 2: Create IFTTT Applet

1. Go to [IFTTT Create](https://ifttt.com/create)
2. Click **"+ This"** and search for **"Webhooks"**
3. Select **"Receive a web request"**
4. Enter event name: `lila_low` (or any name you prefer)
5. Click **"+ That"** and search for **"Notifications"**
6. Select **"Send a notification from the IFTTT app"**
7. Customize the message: `⚠️ Lila clicked "Caffeine Low"!`
8. Finish creating the applet

### Step 3: Configure the Website

1. Open `index.html` in a text editor
2. Find this line in the JavaScript section:
   ```javascript
   const IFTTT_KEY = 'YOUR_IFTTT_KEY';
   ```
3. Replace `YOUR_IFTTT_KEY` with your actual IFTTT webhook key
4. (Optional) Change the event name if you used a different one:
   ```javascript
   const IFTTT_EVENT_NAME = 'lila_low';
   ```

### Step 4: Deploy to GitHub Pages

1. Create a new GitHub repository (or use this one)
2. Push `index.html` to the repository
3. Go to repository **Settings** → **Pages**
4. Select source branch (usually `main` or `master`)
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

## 📱 Testing

1. Open your deployed website
2. Click the **"Caffeine Low"** button
3. Check your phone for the IFTTT notification!

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

### Change Event Name
Update the JavaScript constant:
```javascript
const IFTTT_EVENT_NAME = 'your_custom_event_name';
```
(Don't forget to update your IFTTT applet to match!)

## 🔒 Security Note

⚠️ **Important**: Your IFTTT key is visible in the HTML source code. This is fine for personal use, but if you want to keep it private, consider:
- Using environment variables (requires a build step)
- Using a simple backend proxy (adds complexity)
- For personal use, the exposed key is acceptable since it only triggers your own notifications

## 📋 Tech Stack

| Component            | Tool             | Cost |
| -------------------- | ---------------- | ---- |
| Website hosting      | GitHub Pages     | Free |
| Button trigger logic | JavaScript       | Free |
| Notification system  | IFTTT Webhooks   | Free |
| Phone delivery       | IFTTT Mobile App | Free |

## 🐛 Troubleshooting

**No notification received?**
- Check that your IFTTT key is correctly set in `index.html`
- Verify the event name matches in both IFTTT and the code
- Make sure your IFTTT applet is active
- Check that you have the IFTTT app installed on your phone
- Look at the browser console for any error messages

**Button doesn't work?**
- Open browser developer tools (F12) and check the Console tab
- Verify the IFTTT key is not still set to `YOUR_IFTTT_KEY`
- Check your internet connection

## 📝 License

Free to use for any purpose!

---

**Made with ☕ for Lila's caffeine needs**
# LilaFuel
