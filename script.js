// Sample news data - In a real application, this would come from an API
const newsData = {
    en: [
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
    ],
    
    hi: [
        {
            id: 1,
            title: "वैश्विक जलवायु शिखर सम्मेलन में ऐतिहासिक समझौता",
            excerpt: "COP28 जलवायु शिखर सम्मेलन में विश्व नेताओं ने 2050 तक जीवाश्म ईंधन को चरणबद्ध तरीके से हटाने का ऐतिहासिक समझौता किया है। इस समझौते में नवीकरणीय ऊर्जा परियोजनाओं और विकासशील देशों में जलवायु अनुकूलन उपायों के लिए अभूतपूर्व धन शामिल है।",
            category: "global",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
            date: "2024-01-15",
            wordCount: 120
        },
        {
            id: 2,
            title: "स्थानीय सामुदायिक उद्यान परियोजना फल-फूल रही है",
            excerpt: "शहर के मध्य में स्थित सामुदायिक उद्यान ने अपने पहले वर्ष में अपेक्षाओं को पार कर लिया है, 200 से अधिक परिवारों को ताजा उपज प्रदान कर रहा है। स्वयंसेवकों ने एक परित्यक्त भूखंड को एक समृद्ध हरे स्थान में बदल दिया है जो भोजन के स्रोत और सामुदायिक सभा स्थल दोनों के रूप में काम करता है।",
            category: "local",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
            date: "2024-01-14",
            wordCount: 120
        }
    ],
    
    zh: [
        {
            id: 1,
            title: "全球气候峰会达成历史性协议",
            excerpt: "世界领导人在COP28气候峰会上达成了一项突破性协议，承诺到2050年逐步淘汰化石燃料。该协议包括为可再生能源项目和气候适应措施提供前所未有的资金支持。",
            category: "global",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
            date: "2024-01-15",
            wordCount: 120
        },
        {
            id: 2,
            title: "当地社区花园项目蓬勃发展",
            excerpt: "市中心的社区花园在第一年就超出了预期，为200多个家庭提供新鲜农产品。志愿者们将一个废弃的地块改造成了一个繁荣的绿色空间，既是食物来源又是社区聚会场所。",
            category: "local",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
            date: "2024-01-14",
            wordCount: 120
        }
    ],
    
    es: [
        {
            id: 1,
            title: "Cumbre Climática Global Alcanza Acuerdo Histórico",
            excerpt: "Los líderes mundiales han alcanzado un acuerdo histórico en la cumbre climática COP28, comprometiéndose a eliminar gradualmente los combustibles fósiles para 2050. El acuerdo incluye financiamiento sin precedentes para proyectos de energía renovable.",
            category: "global",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
            date: "2024-01-15",
            wordCount: 120
        },
        {
            id: 2,
            title: "Proyecto de Jardín Comunitario Local Prospera",
            excerpt: "El jardín comunitario del centro de la ciudad ha superado las expectativas en su primer año, proporcionando productos frescos a más de 200 familias. Los voluntarios han transformado un lote abandonado en un espacio verde floreciente.",
            category: "local",
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
            date: "2024-01-14",
            wordCount: 120
        }
    ]
};

// DOM elements
const newsGrid = document.getElementById('newsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const languageSelect = document.getElementById('languageSelect');
const themeToggle = document.getElementById('themeToggle');

// State variables
let currentFilter = 'all';
let displayedNews = [];
let currentPage = 1;
const newsPerPage = 6;
let currentLanguage = 'en';
let isDarkMode = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeLanguage();
    initializeTheme();
    displayNews();
    setupEventListeners();
    setupMobileNavigation();
}

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        languageSelect.value = savedLanguage;
        changeLanguage(savedLanguage);
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
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
    
    // Language selector
    languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
        updateNewsLanguage(e.target.value);
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
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

function toggleTheme() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

function updateNewsLanguage(langCode) {
    currentLanguage = langCode;
    currentPage = 1;
    displayedNews = [];
    
    if (currentFilter === 'all') {
        displayedNews = [...(newsData[langCode] || newsData.en)];
    } else {
        displayedNews = (newsData[langCode] || newsData.en).filter(news => news.category === currentFilter);
    }
    
    displayNews();
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
        displayedNews = [...(newsData[currentLanguage] || newsData.en)];
    } else {
        displayedNews = (newsData[currentLanguage] || newsData.en).filter(news => news.category === filter);
    }
    
    displayNews();
}

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        filterNews(currentFilter);
        return;
    }
    
    const currentNewsData = newsData[currentLanguage] || newsData.en;
    const searchResults = currentNewsData.filter(news => 
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
                <h3>${translations[currentLanguage]?.['no-results'] || 'No news found'}</h3>
                <p>${translations[currentLanguage]?.['no-results-desc'] || 'Try adjusting your search or filter criteria.'}</p>
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
    const date = new Date(news.date).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : currentLanguage, {
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
                    <span class="word-count">${news.wordCount} ${translations[currentLanguage]?.['words'] || 'words'}</span>
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
        header.style.background = isDarkMode ? 'rgba(45, 45, 45, 0.95)' : 'rgba(102, 126, 234, 0.95)';
    } else {
        header.style.background = isDarkMode ? 'linear-gradient(135deg, #2d2d2d 0%, #404040 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
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
