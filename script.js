// Sample news data - In a real application, this would come from an API
const newsData = [
    {
        id: 1,
        title: "Global Climate Summit Reaches Historic Agreement",
        excerpt: "World leaders have reached a groundbreaking agreement at the COP28 climate summit, committing to phase out fossil fuels by 2050. The deal includes unprecedented funding for renewable energy projects and climate adaptation measures in developing nations.",
        category: "global",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
        date: "2024-01-15",
        wordCount: 120
    },
    {
        id: 2,
        title: "Local Community Garden Project Thrives",
        excerpt: "The downtown community garden has exceeded expectations in its first year, providing fresh produce to over 200 families. Volunteers have transformed an abandoned lot into a flourishing green space that serves as both a food source and community gathering place.",
        category: "local",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
        date: "2024-01-14",
        wordCount: 120
    },
    {
        id: 3,
        title: "Tech Giants Announce AI Safety Partnership",
        excerpt: "Major technology companies have formed a collaborative initiative to establish safety standards for artificial intelligence development. The partnership aims to prevent potential risks while promoting responsible AI innovation across the industry.",
        category: "global",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
        date: "2024-01-13",
        wordCount: 120
    },
    {
        id: 4,
        title: "New Public Library Opens Downtown",
        excerpt: "The city's newest public library facility officially opened its doors today, featuring state-of-the-art technology and dedicated spaces for community events. The modern building includes study rooms, a children's area, and digital literacy programs.",
        category: "local",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
        date: "2024-01-12",
        wordCount: 120
    },
    {
        id: 5,
        title: "International Space Station Celebrates 25 Years",
        excerpt: "The International Space Station marks a quarter-century of continuous human presence in space. This remarkable achievement has enabled groundbreaking scientific research and international cooperation in space exploration.",
        category: "global",
        image: "https://images.unsplash.com/photo-1446776811953-b23d0bd8431c?w=400&h=200&fit=crop",
        date: "2024-01-11",
        wordCount: 120
    },
    {
        id: 6,
        title: "Local Restaurant Wins National Award",
        excerpt: "A beloved downtown restaurant has been recognized with a prestigious national culinary award. The family-owned establishment is celebrated for its innovative fusion cuisine and commitment to using locally sourced ingredients.",
        category: "local",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop",
        date: "2024-01-10",
        wordCount: 120
    },
    {
        id: 7,
        title: "Global Economic Recovery Shows Promise",
        excerpt: "Recent economic indicators suggest a stronger-than-expected global recovery, with emerging markets leading the way. International trade has rebounded significantly, though challenges remain in certain regions.",
        category: "global",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
        date: "2024-01-09",
        wordCount: 120
    },
    {
        id: 8,
        title: "City Announces Major Infrastructure Project",
        excerpt: "Local officials have unveiled plans for a comprehensive infrastructure upgrade project. The initiative will improve roads, bridges, and public transportation systems across the metropolitan area.",
        category: "local",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=200&fit=crop",
        date: "2024-01-08",
        wordCount: 120
    }
];

// DOM elements
const newsGrid = document.getElementById('newsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// State variables
let currentFilter = 'all';
let displayedNews = [];
let currentPage = 1;
const newsPerPage = 6;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    displayNews();
    setupEventListeners();
    setupMobileNavigation();
}

function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            setActiveFilter(filter);
            filterNews(filter);
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreNews);
}

function setupMobileNavigation() {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function setActiveFilter(filter) {
    currentFilter = filter;
    
    // Update active button state
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
}

function filterNews(filter) {
    currentPage = 1;
    displayedNews = [];
    
    if (filter === 'all') {
        displayedNews = [...newsData];
    } else {
        displayedNews = newsData.filter(news => news.category === filter);
    }
    
    displayNews();
}

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        filterNews(currentFilter);
        return;
    }
    
    const searchResults = newsData.filter(news => 
        news.title.toLowerCase().includes(searchTerm) ||
        news.excerpt.toLowerCase().includes(searchTerm) ||
        news.category.toLowerCase().includes(searchTerm)
    );
    
    displayedNews = searchResults;
    currentPage = 1;
    displayNews();
}

function displayNews() {
    const startIndex = 0;
    const endIndex = currentPage * newsPerPage;
    const newsToShow = displayedNews.slice(startIndex, endIndex);
    
    if (newsToShow.length === 0) {
        newsGrid.innerHTML = `
            <div class="no-results">
                <h3>No news found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    const newsHTML = newsToShow.map(news => createNewsCard(news)).join('');
    newsGrid.innerHTML = newsHTML;
    
    // Show/hide load more button
    loadMoreBtn.style.display = endIndex >= displayedNews.length ? 'none' : 'block';
}

function createNewsCard(news) {
    const date = new Date(news.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    return `
        <article class="news-card" data-category="${news.category}">
            <img src="${news.image}" alt="${news.title}" class="news-image" loading="lazy">
            <div class="news-content">
                <span class="news-category">${news.category.charAt(0).toUpperCase() + news.category.slice(1)}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-meta">
                    <span class="news-date">${date}</span>
                    <span class="word-count">${news.wordCount} words</span>
                </div>
            </div>
        </article>
    `;
}

function loadMoreNews() {
    currentPage++;
    displayNews();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});

// Add loading animation for news cards
function addLoadingAnimation() {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Initialize with sample data
displayNews();
addLoadingAnimation();
