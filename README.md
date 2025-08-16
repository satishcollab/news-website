# Global News Hub - News Website

A modern, responsive news website that delivers concise news summaries in exactly 120 words, covering both global and local news stories. Now featuring **multi-language support** and **dark mode**!

## 🌟 Features

- **120-Word News Format**: All news articles are precisely 120 words for quick reading
- **Global & Local Coverage**: Comprehensive news from around the world and local communities
- **🌍 Multi-Language Support**: Available in 13 languages including:
  - **Indian Languages**: Hindi, Marathi, Bengali, Tamil, Telugu, Kannada, Odia, Assamese
  - **International**: English, Chinese, Spanish, French, German
- **🌙 Dark Mode**: Easy toggle between light and dark themes
- **Responsive Design**: Mobile-first design that works on all devices
- **Search Functionality**: Find news by keywords, categories, or topics
- **Filtering System**: Easily switch between global, local, or all news
- **Modern UI/UX**: Beautiful gradients, smooth animations, and professional design
- **GitHub Pages Ready**: Optimized for free hosting

## 🚀 New Features

### Multi-Language Support
- **13 Languages**: Comprehensive coverage of major world languages
- **Easy Switching**: Dropdown selector in the navigation bar
- **Localized Content**: News content available in multiple languages
- **Persistent Settings**: Language preference saved in browser
- **RTL Support**: Ready for right-to-left languages

### Dark Mode
- **Theme Toggle**: Easy switch between light and dark themes
- **Persistent Settings**: Theme preference saved in browser
- **Smooth Transitions**: Beautiful animations when switching themes
- **Optimized Colors**: Carefully crafted color schemes for both themes
- **Accessibility**: High contrast ratios for better readability

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS Variables, Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for modern typography
- **Local Storage**: For saving user preferences

## 📱 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A GitHub account (for hosting)

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website will work locally with all features
4. Try switching languages and themes!

### File Structure

```
news-website/
├── index.html          # Main HTML file with multi-language support
├── styles.css          # CSS styling with dark mode themes
├── script.js           # JavaScript functionality
├── translations.js     # Multi-language translations
├── .github/workflows/  # GitHub Actions for deployment
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## 🌍 Language Support

| Language | Code | Native Name | Status |
|----------|------|-------------|---------|
| English | `en` | English | ✅ Complete |
| Hindi | `hi` | हिंदी | ✅ Complete |
| Marathi | `mr` | मराठी | ✅ Complete |
| Bengali | `bn` | বাংলা | ✅ Complete |
| Tamil | `ta` | தமிழ் | ✅ Complete |
| Telugu | `te` | తెలుగు | ✅ Complete |
| Kannada | `kn` | ಕನ್ನಡ | ✅ Complete |
| Odia | `or` | ଓଡ଼ିଆ | ✅ Complete |
| Assamese | `as` | অসমীয়া | ✅ Complete |
| Chinese | `zh` | 中文 | ✅ Complete |
| Spanish | `es` | Español | ✅ Complete |
| French | `fr` | Français | ✅ Complete |
| German | `de` | Deutsch | ✅ Complete |

## 🎨 Theme System

### Light Theme
- Clean, modern design with blue gradients
- High contrast for excellent readability
- Professional appearance suitable for all users

### Dark Theme
- Easy on the eyes for low-light environments
- Reduced blue light emission
- Modern, sleek appearance
- Perfect for night-time browsing

## 🚀 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., `news-website`)
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Your Files

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from the `news-website` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `translations.js`
   - `README.md`
   - `.github/workflows/deploy.yml`
   - `CNAME`
3. Add a commit message (e.g., "Initial commit with multi-language and dark mode")
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository's "Settings" tab
2. Scroll down to "GitHub Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your website will be available at: `https://yourusername.github.io/repository-name`

### Step 4: Custom Domain (Optional)

If you have a custom domain:
1. In GitHub Pages settings, enter your domain
2. Add a CNAME record pointing to `yourusername.github.io`
3. Wait for DNS propagation (up to 24 hours)

## 🔧 Customization

### Adding New Languages

1. Add new language to `translations.js`:
```javascript
newLang: {
    "site-title": "Your Title",
    "nav-home": "Home",
    // ... more translations
}
```

2. Add language option to HTML:
```html
<option value="newLang">🇺🇸 Language Name</option>
```

3. Add news content in `script.js`:
```javascript
newLang: [
    {
        title: "Your News Title",
        excerpt: "Your 120-word news excerpt...",
        // ... other properties
    }
]
```

### Adding Real News Content

Replace the sample news data in `script.js` with real news from APIs:

```javascript
// Example: Replace sample data with API calls
async function fetchNews(language) {
    try {
        const response = await fetch(`YOUR_NEWS_API_ENDPOINT?lang=${language}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}
```

### Popular News APIs

- **NewsAPI**: `https://newsapi.org/`
- **GNews**: `https://gnews.io/`
- **The Guardian**: `https://open-platform.theguardian.com/`
- **New York Times**: `https://developer.nytimes.com/`

### Styling Changes

Modify `styles.css` to customize:
- Colors and themes using CSS variables
- Typography and layouts
- Animations and transitions
- Dark mode color schemes

### Adding New Features

Extend `script.js` with additional functionality:
- User authentication
- News bookmarks
- Social sharing
- Newsletter subscription
- Comments system
- More language support

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Images**: Responsive images with appropriate sizes
- **Minimal Dependencies**: Lightweight external resources
- **Efficient CSS**: CSS variables and optimized selectors
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Local Storage**: Fast access to user preferences

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly design
- Fast loading times
- Multi-language support

## ♿ Accessibility

- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Semantic HTML elements
- ARIA labels where appropriate
- Multi-language support
- Theme switching for visual comfort

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly in multiple languages
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Ensure GitHub Pages is enabled
4. Check repository settings and permissions
5. Test language switching and theme toggle

## 🚀 Future Enhancements

- **Real-time Updates**: Live news feeds in multiple languages
- **User Accounts**: Personalized news preferences and language settings
- **Offline Support**: Service worker for offline reading
- **Push Notifications**: Breaking news alerts
- **More Languages**: Additional regional and minority languages
- **Advanced Themes**: Custom color schemes and themes
- **Voice Navigation**: Speech-to-text and text-to-speech support
- **RTL Languages**: Full support for Arabic, Hebrew, and other RTL languages

---

**Happy News Reading in Your Preferred Language! 📰✨🌍🌙**
