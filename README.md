# Global News Hub - News Website

A modern, responsive news website that delivers concise news summaries in exactly 120 words, covering both global and local news stories.

## Features

- **120-Word News Format**: All news articles are precisely 120 words for quick reading
- **Global & Local Coverage**: Comprehensive news from around the world and local communities
- **Responsive Design**: Mobile-first design that works on all devices
- **Search Functionality**: Find news by keywords, categories, or topics
- **Filtering System**: Easily switch between global, local, or all news
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **GitHub Pages Ready**: Optimized for free hosting on GitHub Pages

## Technologies Used

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter font family for modern typography

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A GitHub account (for hosting)

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website will work locally with all features

### File Structure

```
news-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Hosting on GitHub Pages

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
   - `README.md`
3. Add a commit message (e.g., "Initial commit")
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

## Customization

### Adding Real News Content

Replace the sample news data in `script.js` with real news from APIs:

```javascript
// Example: Replace sample data with API calls
async function fetchNews() {
    try {
        const response = await fetch('YOUR_NEWS_API_ENDPOINT');
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
- Colors and themes
- Typography
- Layout and spacing
- Animations and transitions

### Adding New Features

Extend `script.js` with additional functionality:
- User authentication
- News bookmarks
- Social sharing
- Newsletter subscription
- Comments system

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Images**: Responsive images with appropriate sizes
- **Minimal Dependencies**: Lightweight external resources
- **Efficient CSS**: Optimized selectors and minimal reflows
- **Smooth Animations**: Hardware-accelerated CSS transitions

## SEO Optimization

- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly design
- Fast loading times

## Accessibility

- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Semantic HTML elements
- ARIA labels where appropriate

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Ensure GitHub Pages is enabled
4. Check repository settings and permissions

## Future Enhancements

- **Real-time Updates**: Live news feeds
- **User Accounts**: Personalized news preferences
- **Offline Support**: Service worker for offline reading
- **Push Notifications**: Breaking news alerts
- **Multi-language Support**: International news coverage
- **Dark Mode**: Theme switching option

---

**Happy News Reading! 📰✨**
