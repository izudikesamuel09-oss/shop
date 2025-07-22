/* =============================================
   Global Variables and Data
   ============================================= */

// Sample products data - In a real application, this would come from a database/API
const products = [
    {
        id: 1,
        name: 'Premium Gel Pen Set (12 Colors)',
        category: 'stationery',
        price: 24.99,
        originalPrice: 34.99,
        image: 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg',
        images: [
            'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg',
            'https://images.pexels.com/photos/265076/pens-fountain-pen-ink-fountain-265076.jpeg',
            'https://images.pexels.com/photos/1329296/pens-ballpoint-pen-felt-tip-pen-fountain-pen-1329296.jpeg'
        ],
        rating: 4.8,
        reviews: 156,
        description: 'High-quality gel pens with smooth ink flow and vibrant colors. Perfect for note-taking, art projects, and everyday writing tasks.',
        features: ['Smooth gel ink formula', '0.7mm tip size', 'Comfortable grip design', 'Quick-dry ink', 'Refillable'],
        badge: 'bestseller',
        stock: 45,
        sku: 'PEN-GEL-12'
    },
    {
        id: 2,
        name: 'College Ruled Notebook Pack (5 Pack)',
        category: 'notebooks',
        price: 19.99,
        image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
        images: [
            'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
            'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg',
            'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg'
        ],
        rating: 4.6,
        reviews: 89,
        description: 'Durable spiral-bound notebooks with college-ruled pages. Ideal for students and professionals who need reliable note-taking solutions.',
        features: ['80 sheets per notebook', 'College-ruled pages', 'Spiral-bound design', 'Perforated pages', 'Hard covers'],
        badge: 'popular',
        stock: 32,
        sku: 'NB-COL-5PK'
    },
    {
        id: 3,
        name: 'Complete Art Supply Kit',
        category: 'art',
        price: 89.99,
        originalPrice: 119.99,
        image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
        images: [
            'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
            'https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg',
            'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg'
        ],
        rating: 4.9,
        reviews: 234,
        description: 'Everything you need to get started with art! This comprehensive kit includes colored pencils, markers, paintbrushes, and more.',
        features: ['48 colored pencils', '24 washable markers', '12 watercolor paints', '6 paintbrushes', 'Carrying case included'],
        badge: 'new',
        stock: 18,
        sku: 'ART-KIT-COMP'
    },
    {
        id: 4,
        name: 'Ergonomic School Backpack',
        category: 'backpacks',
        price: 59.99,
        originalPrice: 79.99,
        image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
        images: [
            'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
            'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg'
        ],
        rating: 4.7,
        reviews: 167,
        description: 'Comfortable and durable backpack designed for students. Features multiple compartments and padded straps for all-day comfort.',
        features: ['Multiple compartments', 'Padded laptop sleeve', 'Ergonomic straps', 'Water-resistant material', '2-year warranty'],
        badge: 'sale',
        stock: 28,
        sku: 'BP-ERG-STD'
    },
    {
        id: 5,
        name: 'Scientific Calculator Pro',
        category: 'tech',
        price: 34.99,
        image: 'https://images.pexels.com/photos/6956000/pexels-photo-6956000.jpeg',
        images: [
            'https://images.pexels.com/photos/6956000/pexels-photo-6956000.jpeg',
            'https://images.pexels.com/photos/5625113/pexels-photo-5625113.jpeg'
        ],
        rating: 4.5,
        reviews: 78,
        description: 'Advanced scientific calculator with comprehensive mathematical functions. Perfect for high school and college students.',
        features: ['240+ built-in functions', 'Natural textbook display', 'Fraction calculations', 'Statistics functions', '2-line display'],
        badge: '',
        stock: 55,
        sku: 'CALC-SCI-PRO'
    },
    {
        id: 6,
        name: 'Desk Organizer Set',
        category: 'organization',
        price: 39.99,
        image: 'https://images.pexels.com/photos/159832/pencils-color-colorful-colored-pencils-159832.jpeg',
        images: [
            'https://images.pexels.com/photos/159832/pencils-color-colorful-colored-pencils-159832.jpeg',
            'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg'
        ],
        rating: 4.4,
        reviews: 92,
        description: 'Keep your workspace tidy with this comprehensive desk organizer set. Includes multiple compartments for all your supplies.',
        features: ['Multiple compartments', 'Bamboo construction', 'Non-slip base', 'Easy assembly', 'Space-saving design'],
        badge: '',
        stock: 37,
        sku: 'ORG-DESK-SET'
    },
    {
        id: 7,
        name: 'Mechanical Pencil Set (6 Pack)',
        category: 'stationery',
        price: 16.99,
        image: 'https://images.pexels.com/photos/265076/pens-fountain-pen-ink-fountain-265076.jpeg',
        images: [
            'https://images.pexels.com/photos/265076/pens-fountain-pen-ink-fountain-265076.jpeg',
            'https://images.pexels.com/photos/1329296/pens-ballpoint-pen-felt-tip-pen-fountain-pen-1329296.jpeg'
        ],
        rating: 4.3,
        reviews: 134,
        description: 'Reliable mechanical pencils with comfortable grip and consistent lead advancement. Includes extra lead refills.',
        features: ['0.5mm lead size', 'Comfortable grip', 'Extra lead included', 'Retractable tip', 'Eraser included'],
        badge: '',
        stock: 64,
        sku: 'PEN-MECH-6PK'
    },
    {
        id: 8,
        name: 'Watercolor Paint Set (36 Colors)',
        category: 'art',
        price: 29.99,
        originalPrice: 39.99,
        image: 'https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg',
        images: [
            'https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg',
            'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg'
        ],
        rating: 4.6,
        reviews: 201,
        description: 'Professional-grade watercolor paints with brilliant, vibrant colors. Perfect for artists of all skill levels.',
        features: ['36 vibrant colors', 'High pigment quality', 'Easy to blend', 'Non-toxic formula', 'Compact design'],
        badge: 'sale',
        stock: 43,
        sku: 'ART-WC-36'
    },
    {
        id: 9,
        name: 'Graph Paper Notebook',
        category: 'notebooks',
        price: 8.99,
        image: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg',
        images: [
            'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg',
            'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg'
        ],
        rating: 4.2,
        reviews: 67,
        description: 'High-quality graph paper notebook perfect for math, engineering, and technical drawing. Smooth paper surface for precise work.',
        features: ['5mm grid squares', '120 pages', 'Hard cover', 'Lay-flat binding', 'Acid-free paper'],
        badge: '',
        stock: 71,
        sku: 'NB-GRAPH'
    },
    {
        id: 10,
        name: 'Student Laptop Bag',
        category: 'backpacks',
        price: 45.99,
        image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg',
        images: [
            'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg',
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
        ],
        rating: 4.5,
        reviews: 89,
        description: 'Professional laptop bag designed for students and professionals. Fits laptops up to 15.6 inches.',
        features: ['Fits 15.6" laptops', 'Multiple pockets', 'Shoulder strap', 'Water-resistant', 'Professional design'],
        badge: '',
        stock: 25,
        sku: 'BAG-LAPTOP'
    },
    {
        id: 11,
        name: 'USB Flash Drive (32GB)',
        category: 'tech',
        price: 12.99,
        image: 'https://images.pexels.com/photos/5625113/pexels-photo-5625113.jpeg',
        images: [
            'https://images.pexels.com/photos/5625113/pexels-photo-5625113.jpeg'
        ],
        rating: 4.1,
        reviews: 45,
        description: 'High-speed USB 3.0 flash drive for storing and transferring files. Compact design with keychain attachment.',
        features: ['32GB storage', 'USB 3.0 speed', 'Keychain attachment', 'Compact design', '5-year warranty'],
        badge: '',
        stock: 88,
        sku: 'USB-32GB'
    },
    {
        id: 12,
        name: 'File Folder Set (25 Pack)',
        category: 'organization',
        price: 14.99,
        image: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg',
        images: [
            'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg'
        ],
        rating: 4.0,
        reviews: 56,
        description: 'Durable file folders for organizing documents and papers. Available in assorted colors for easy categorization.',
        features: ['25 folders included', 'Assorted colors', '1/3 cut tabs', 'Letter size', 'Durable construction'],
        badge: '',
        stock: 94,
        sku: 'ORG-FOLD-25'
    }
];

// Cart data stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Currently viewed filters
let currentFilters = {
    category: 'all',
    price: 'all',
    search: ''
};

// Current sort option
let currentSort = 'name';

/* =============================================
   DOM Content Loaded Event
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/* =============================================
   App Initialization
   ============================================= */

function initializeApp() {
    // Initialize navigation
    initializeNavigation();
    
    // Update cart count
    updateCartCount();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'shop':
            initializeShopPage();
            break;
        case 'product':
            initializeProductPage();
            break;
        case 'cart':
            initializeCartPage();
            break;
        case 'about':
            initializeAboutPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
    }
    
    // Initialize newsletter form
    initializeNewsletter();
}

/* =============================================
   Navigation Functions
   ============================================= */

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on menu items (mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page;
}

/* =============================================
   Home Page Functions
   ============================================= */

function initializeHomePage() {
    loadFeaturedProducts();
}

function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredProductsGrid');
    if (!featuredGrid) return;
    
    // Get first 4 products as featured
    const featuredProducts = products.slice(0, 4);
    
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners for add to cart buttons
    addProductCardListeners(featuredGrid);
}

/* =============================================
   Shop Page Functions
   ============================================= */

function initializeShopPage() {
    // Check for category filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        currentFilters.category = categoryParam;
        // Select the appropriate radio button
        const categoryRadio = document.querySelector(`input[name="category"][value="${categoryParam}"]`);
        if (categoryRadio) {
            categoryRadio.checked = true;
        }
    }
    
    // Initialize filters and search
    initializeFilters();
    initializeSearch();
    initializeSorting();
    
    // Load and display products
    loadProducts();
}

function initializeFilters() {
    // Category filters
    const categoryFilters = document.querySelectorAll('input[name="category"]');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                currentFilters.category = this.value;
                loadProducts();
            }
        });
    });
    
    // Price filters
    const priceFilters = document.querySelectorAll('input[name="price"]');
    priceFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                currentFilters.price = this.value;
                loadProducts();
            }
        });
    });
    
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentFilters.search = this.value.toLowerCase();
            loadProducts();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                currentFilters.search = this.value.toLowerCase();
                loadProducts();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                currentFilters.search = searchInput.value.toLowerCase();
                loadProducts();
            }
        });
    }
}

function initializeSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            loadProducts();
        });
    }
}

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    if (!productsGrid) return;
    
    // Apply filters
    let filteredProducts = products.filter(product => {
        // Category filter
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }
        
        // Price filter
        if (currentFilters.price !== 'all') {
            const price = product.price;
            switch(currentFilters.price) {
                case '0-25':
                    if (price > 25) return false;
                    break;
                case '25-50':
                    if (price < 25 || price > 50) return false;
                    break;
                case '50-100':
                    if (price < 50 || price > 100) return false;
                    break;
                case '100+':
                    if (price < 100) return false;
                    break;
            }
        }
        
        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search;
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.description.toLowerCase().includes(searchTerm) ||
                   product.category.toLowerCase().includes(searchTerm);
        }
        
        return true;
    });
    
    // Apply sorting
    filteredProducts.sort((a, b) => {
        switch(currentSort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    // Update results count
    if (resultsCount) {
        resultsCount.textContent = filteredProducts.length;
    }
    
    // Show/hide no results message
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
    } else {
        productsGrid.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        
        // Render products
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        
        // Add event listeners
        addProductCardListeners(productsGrid);
    }
}

function clearAllFilters() {
    currentFilters = {
        category: 'all',
        price: 'all',
        search: ''
    };
    
    // Reset form controls
    document.querySelector('input[name="category"][value="all"]').checked = true;
    document.querySelector('input[name="price"][value="all"]').checked = true;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reload products
    loadProducts();
}

// Make clearAllFilters globally available
window.clearAllFilters = clearAllFilters;

/* =============================================
   Product Page Functions
   ============================================= */

function initializeProductPage() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId) {
        loadProductDetails(productId);
        loadRelatedProducts(productId);
    } else {
        // Redirect to shop if no product ID
        window.location.href = 'shop.html';
    }
    
    initializeProductActions();
}

function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    
    // Update page title
    document.title = `${product.name} - EduSupply`;
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('productBreadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    // Update product images
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.getElementById('imageThumbnails');
    
    if (mainImage && product.images && product.images.length > 0) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
        
        if (thumbnails && product.images.length > 1) {
            thumbnails.innerHTML = product.images.map((image, index) => 
                `<div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${image}', this)">
                    <img src="${image}" alt="${product.name}">
                </div>`
            ).join('');
        }
    }
    
    // Update product info
    const badge = document.getElementById('productBadge');
    const title = document.getElementById('productTitle');
    const stars = document.getElementById('productStars');
    const ratingCount = document.getElementById('ratingCount');
    const currentPrice = document.getElementById('currentPrice');
    const originalPrice = document.getElementById('originalPrice');
    const discount = document.getElementById('discount');
    const description = document.getElementById('productDescription');
    const featuresList = document.getElementById('featuresList');
    const sku = document.getElementById('productSku');
    const category = document.getElementById('productCategory');
    
    if (badge) {
        if (product.badge) {
            badge.textContent = product.badge.charAt(0).toUpperCase() + product.badge.slice(1);
            badge.className = `product-badge ${product.badge}`;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
    
    if (title) title.textContent = product.name;
    
    if (stars) {
        stars.innerHTML = '⭐'.repeat(Math.floor(product.rating)) + 
                         (product.rating % 1 !== 0 ? '☆' : '');
    }
    
    if (ratingCount) {
        ratingCount.textContent = `(${product.reviews} reviews)`;
    }
    
    if (currentPrice) {
        currentPrice.textContent = `$${product.price.toFixed(2)}`;
    }
    
    if (originalPrice && product.originalPrice) {
        originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
        originalPrice.style.display = 'inline';
        
        if (discount) {
            const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100);
            discount.textContent = `${discountPercent}% OFF`;
            discount.style.display = 'inline';
        }
    } else {
        if (originalPrice) originalPrice.style.display = 'none';
        if (discount) discount.style.display = 'none';
    }
    
    if (description) {
        description.textContent = product.description;
    }
    
    if (featuresList && product.features) {
        featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    }
    
    if (sku) sku.textContent = product.sku;
    if (category) category.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    // Store current product for cart functionality
    window.currentProduct = product;
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Make changeMainImage globally available
window.changeMainImage = changeMainImage;

function initializeProductActions() {
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    
    // Quantity controls
    if (decreaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (increaseBtn && quantityInput) {
        increaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            const maxValue = parseInt(quantityInput.getAttribute('max')) || 10;
            if (currentValue < maxValue) {
                quantityInput.value = currentValue + 1;
            }
        });
    }
    
    // Add to cart button
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput?.value || 1);
            if (window.currentProduct) {
                addToCart(window.currentProduct.id, quantity);
                showNotification('Product added to cart!', 'success');
            }
        });
    }
    
    // Buy now button
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput?.value || 1);
            if (window.currentProduct) {
                addToCart(window.currentProduct.id, quantity);
                window.location.href = 'cart.html';
            }
        });
    }
}

function loadRelatedProducts(currentProductId) {
    const currentProduct = products.find(p => p.id === currentProductId);
    if (!currentProduct) return;
    
    // Get products from the same category, excluding current product
    const relatedProducts = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProductId)
        .slice(0, 4);
    
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (relatedGrid && relatedProducts.length > 0) {
        relatedGrid.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
        addProductCardListeners(relatedGrid);
    }
}

/* =============================================
   Cart Page Functions
   ============================================= */

function initializeCartPage() {
    loadCartItems();
    loadRecommendedProducts();
    initializePromoCode();
    initializeCheckout();
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';
        
        return `
            <div class="cart-item" data-product-id="${item.productId}">
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>SKU: ${product.sku}</p>
                </div>
                <div class="cart-item-price">
                    $${(product.price * item.quantity).toFixed(2)}
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button type="button" onclick="updateQuantity(${item.productId}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" max="10" 
                               onchange="updateQuantity(${item.productId}, this.value)">
                        <button type="button" onclick="updateQuantity(${item.productId}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.productId})">Remove</button>
                </div>
            </div>
        `;
    }).join('');
    
    updateCartSummary();
}

function loadRecommendedProducts() {
    const recommendedList = document.getElementById('recommendedList');
    if (!recommendedList) return;
    
    // Get random products not in cart
    const cartProductIds = cart.map(item => item.productId);
    const availableProducts = products.filter(p => !cartProductIds.includes(p.id));
    const recommended = availableProducts.slice(0, 3);
    
    recommendedList.innerHTML = recommended.map(product => `
        <div class="recommended-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="recommended-info">
                <h4>${product.name}</h4>
                <p>${product.category}</p>
            </div>
            <div class="recommended-price">$${product.price.toFixed(2)}</div>
        </div>
    `).join('');
}

function initializePromoCode() {
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', function() {
            const promoInput = document.getElementById('promoInput');
            if (promoInput) {
                const code = promoInput.value.trim().toUpperCase();
                applyPromoCode(code);
            }
        });
    }
}

function applyPromoCode(code) {
    const validCodes = {
        'STUDENT10': 0.10,
        'BACK2SCHOOL': 0.15,
        'NEWBIE5': 0.05
    };
    
    if (validCodes[code]) {
        localStorage.setItem('promoCode', code);
        localStorage.setItem('promoDiscount', validCodes[code]);
        updateCartSummary();
        showNotification(`Promo code applied! ${Math.round(validCodes[code] * 100)}% discount`, 'success');
    } else {
        showNotification('Invalid promo code', 'error');
    }
}

function initializeCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            
            // Simulate checkout process
            showNotification('Redirecting to checkout...', 'info');
            
            // In a real application, this would redirect to a payment processor
            setTimeout(() => {
                alert('This is a demo. In a real application, you would be redirected to a secure payment page.');
            }, 1000);
        });
    }
}

function updateCartSummary() {
    const itemCount = document.getElementById('itemCount');
    const subtotal = document.getElementById('subtotal');
    const shipping = document.getElementById('shipping');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    const discountLine = document.getElementById('discountLine');
    const discountAmount = document.getElementById('discount');
    
    if (!cart.length) {
        if (itemCount) itemCount.textContent = '0';
        if (subtotal) subtotal.textContent = '$0.00';
        if (shipping) shipping.textContent = '$0.00';
        if (tax) tax.textContent = '$0.00';
        if (total) total.textContent = '$0.00';
        if (discountLine) discountLine.style.display = 'none';
        return;
    }
    
    let subtotalAmount = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) {
            subtotalAmount += product.price * item.quantity;
            totalItems += item.quantity;
        }
    });
    
    // Calculate shipping (free over $75)
    const shippingAmount = subtotalAmount >= 75 ? 0 : 8.99;
    
    // Calculate tax (8.5%)
    const taxAmount = subtotalAmount * 0.085;
    
    // Apply promo discount
    const promoDiscount = parseFloat(localStorage.getItem('promoDiscount')) || 0;
    const discountAmountValue = subtotalAmount * promoDiscount;
    
    const totalAmount = subtotalAmount + shippingAmount + taxAmount - discountAmountValue;
    
    // Update display
    if (itemCount) itemCount.textContent = totalItems.toString();
    if (subtotal) subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    if (shipping) shipping.textContent = shippingAmount === 0 ? 'FREE' : `$${shippingAmount.toFixed(2)}`;
    if (tax) tax.textContent = `$${taxAmount.toFixed(2)}`;
    if (total) total.textContent = `$${totalAmount.toFixed(2)}`;
    
    if (promoDiscount > 0) {
        if (discountLine) discountLine.style.display = 'flex';
        if (discountAmount) discountAmount.textContent = `-$${discountAmountValue.toFixed(2)}`;
    } else {
        if (discountLine) discountLine.style.display = 'none';
    }
}

/* =============================================
   About Page Functions
   ============================================= */

function initializeAboutPage() {
    // Add any specific about page functionality here
    // For now, just basic initialization
    console.log('About page initialized');
}

/* =============================================
   Contact Page Functions
   ============================================= */

function initializeContactPage() {
    initializeContactForm();
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['firstName', 'lastName', 'email', 'inquiryType', 'subject', 'message'];
            const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
            
            if (missingFields.length > 0) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Sending message...', 'info');
            
            // Simulate API call delay
            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
                this.reset();
                
                // If newsletter checkbox was checked, show additional message
                if (data.newsletter) {
                    setTimeout(() => {
                        showNotification('You\'ve been subscribed to our newsletter!', 'success');
                    }, 2000);
                }
            }, 1500);
        });
    }
}

/* =============================================
   Cart Management Functions
   ============================================= */

function addToCart(productId, quantity = 1) {
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    
    // Reload cart page if we're on it
    if (getCurrentPage() === 'cart') {
        loadCartItems();
    }
}

function updateQuantity(productId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > 10) {
        showNotification('Maximum quantity is 10', 'error');
        return;
    }
    
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        loadCartItems();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    updateCartCount();
    loadCartItems();
    showNotification('Item removed from cart', 'info');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems.toString();
    }
}

// Make cart functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

/* =============================================
   Product Card Functions
   ============================================= */

function createProductCard(product) {
    const badgeHtml = product.badge ? 
        `<div class="product-badge ${product.badge}">${product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}</div>` : '';
    
    const originalPriceHtml = product.originalPrice ? 
        `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : '';
    
    const discountHtml = product.originalPrice ? 
        `<span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>` : '';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <div class="product-rating">
                    <div class="stars">${'⭐'.repeat(Math.floor(product.rating))}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${originalPriceHtml}
                    ${discountHtml}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                    <button class="quick-view-btn" data-product-id="${product.id}" title="Quick View">👁️</button>
                </div>
            </div>
        </div>
    `;
}

function addProductCardListeners(container) {
    // Add to cart buttons
    const addToCartBtns = container.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId, 1);
            showNotification('Added to cart!', 'success');
        });
    });
    
    // Quick view buttons
    const quickViewBtns = container.querySelectorAll('.quick-view-btn');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-product-id'));
            window.location.href = `product.html?id=${productId}`;
        });
    });
    
    // Product card clicks
    const productCards = container.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

/* =============================================
   Newsletter Functions
   ============================================= */

function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate newsletter subscription
            showNotification('Thank you for subscribing!', 'success');
            this.reset();
        });
    }
}

/* =============================================
   Notification Functions
   ============================================= */

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/* =============================================
   Utility Functions
   ============================================= */

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '⭐'.repeat(fullStars);
    
    if (hasHalfStar) {
        starsHtml += '☆';
    }
    
    return starsHtml;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* =============================================
   Performance Optimizations
   ============================================= */

// Lazy loading for images (modern browsers)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe all lazy images when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

/* =============================================
   Error Handling
   ============================================= */

window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    showNotification('Something went wrong. Please try again.', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    showNotification('Something went wrong. Please try again.', 'error');
});

/* =============================================
   Export for testing (if in Node.js environment)
   ============================================= */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        addToCart,
        updateQuantity,
        removeFromCart,
        formatPrice,
        generateStars
    };
}