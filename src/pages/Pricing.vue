<template>
    <div id="app">
        <!-- Header Section -->
        <!-- <header class="header">
      <div class="container">
        <h1 class="hotel-name">{{ hotelName }}</h1>
        <p class="hotel-tagline">{{ tagline }}</p>
      </div>
    </header> -->

        <!-- Search and Filter Section -->
        <section class="search-section" style="height: 200px; display: flex; align-items: center;">
            <div class="container">
                <!-- <div class="search-box">
          <input type="text" v-model="searchQuery" placeholder="Search services..." class="search-input">
        </div> -->
                <div class="filter-buttons">
                    <button v-for="category in categories" :key="category" @click="selectedCategory = category"
                        :class="['filter-btn', { active: selectedCategory === category }]">
                        {{ category }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <main class="pricing-section">
            <div class="container">
                <h2 class="section-title">Our Services & Pricing</h2>
                <div class="pricing-grid">
                    <div v-for="service in filteredServices" :key="service.id" class="pricing-card"
                        :class="service.featured ? 'featured' : ''">
                        <div class="card-header">
                            <div class="service-icon">{{ service.icon }}</div>
                            <h3 class="service-name">{{ service.name }}</h3>
                            <span class="service-category">{{ service.category }}</span>
                        </div>
                        <div class="card-body">
                            <div class="price-container">
                                <span class="price">${{ service.price }}</span>
                                <span class="price-unit">{{ service.unit }}</span>
                            </div>
                            <ul class="features-list">
                                <li v-for="feature in service.features" :key="feature">
                                    <span class="feature-check">✓</span>
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'HotelPricingApp',
    data() {
        return {
            hotelName: 'Grand Luxury Hotel',
            tagline: 'Experience Excellence in Every Detail',
            searchQuery: '',
            selectedCategory: 'All',
            services: [
                {
                    id: 1,
                    name: 'Standard Room',
                    category: 'Rooms',
                    price: 150,
                    unit: 'per night',
                    icon: '🛏️',
                    featured: false,
                    features: ['Queen size bed', 'City view', 'Free WiFi', 'Room service', 'Air conditioning']
                },
                {
                    id: 2,
                    name: 'Deluxe Suite',
                    category: 'Rooms',
                    price: 280,
                    unit: 'per night',
                    icon: '🏨',
                    featured: true,
                    features: ['King size bed', 'Ocean view', 'Balcony', 'Mini bar', 'Premium amenities']
                },
                {
                    id: 3,
                    name: 'Presidential Suite',
                    category: 'Rooms',
                    price: 650,
                    unit: 'per night',
                    icon: '👑',
                    featured: false,
                    features: ['Master bedroom', 'Living room', 'Private terrace', 'Butler service', 'Jacuzzi']
                },
                {
                    id: 4,
                    name: 'Fine Dining Restaurant',
                    category: 'Dining',
                    price: 85,
                    unit: 'per person',
                    icon: '🍽️',
                    featured: false,
                    features: ['5-course tasting menu', 'Wine pairing', 'Chef\'s special', 'Premium ingredients']
                },
                {
                    id: 5,
                    name: 'Breakfast Buffet',
                    category: 'Dining',
                    price: 35,
                    unit: 'per person',
                    icon: '🥐',
                    featured: false,
                    features: ['International cuisine', 'Fresh pastries', 'Healthy options', 'Premium coffee']
                },
                {
                    id: 6,
                    name: 'Full Body Massage',
                    category: 'Spa',
                    price: 120,
                    unit: 'per session',
                    icon: '💆',
                    featured: true,
                    features: ['90-minute session', 'Essential oils', 'Expert therapist', 'Relaxation room']
                },
                {
                    id: 7,
                    name: 'Facial Treatment',
                    category: 'Spa',
                    price: 80,
                    unit: 'per session',
                    icon: '✨',
                    featured: false,
                    features: ['Deep cleansing', 'Anti-aging treatment', 'Organic products', 'Skin analysis']
                },
                {
                    id: 8,
                    name: 'Fitness Center Access',
                    category: 'Recreation',
                    price: 25,
                    unit: 'per day',
                    icon: '🏋️',
                    featured: false,
                    features: ['Modern equipment', 'Personal trainer', 'Group classes', '24/7 access']
                },
                {
                    id: 9,
                    name: 'Swimming Pool & Sauna',
                    category: 'Recreation',
                    price: 40,
                    unit: 'per day',
                    icon: '🏊',
                    featured: false,
                    features: ['Olympic pool', 'Heated sauna', 'Pool bar', 'Towel service']
                },
                {
                    id: 10,
                    name: 'Golf Course Access',
                    category: 'Recreation',
                    price: 95,
                    unit: 'per round',
                    icon: '⛳',
                    featured: false,
                    features: ['18-hole course', 'Golf cart included', 'Club rental', 'Pro shop access']
                },
                {
                    id: 11,
                    name: 'Conference Room',
                    category: 'Business',
                    price: 200,
                    unit: 'per hour',
                    icon: '📊',
                    featured: false,
                    features: ['Up to 50 people', 'AV equipment', 'Catering service', 'Technical support']
                },
                {
                    id: 12,
                    name: 'Executive Meeting Room',
                    category: 'Business',
                    price: 350,
                    unit: 'per hour',
                    icon: '💼',
                    featured: true,
                    features: ['Premium location', 'Up to 20 people', 'Video conferencing', 'Refreshments']
                },
                {
                    id: 13,
                    name: 'Laundry Service',
                    category: 'Services',
                    price: 15,
                    unit: 'per item',
                    icon: '👕',
                    featured: false,
                    features: ['Same day service', 'Dry cleaning', 'Pressing included', 'Eco-friendly']
                },
                {
                    id: 14,
                    name: 'Airport Transfer',
                    category: 'Services',
                    price: 45,
                    unit: 'one way',
                    icon: '🚗',
                    featured: false,
                    features: ['Luxury vehicle', 'Professional driver', 'Meet & greet', 'Luggage assistance']
                },
                {
                    id: 15,
                    name: 'Valet Parking',
                    category: 'Services',
                    price: 20,
                    unit: 'per night',
                    icon: '🅿️',
                    featured: false,
                    features: ['24/7 service', 'Covered parking', 'Car wash available', 'Security monitored']
                }
            ]
        }
    },
    computed: {
        categories() {
            const cats = ['All', ...new Set(this.services.map(service => service.category))];
            return cats;
        },
        filteredServices() {
            let filtered = this.services;

            // Filter by category
            if (this.selectedCategory !== 'All') {
                filtered = filtered.filter(service => service.category === this.selectedCategory);
            }

            // Filter by search query
            if (this.searchQuery) {
                filtered = filtered.filter(service =>
                    service.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    service.category.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }

            return filtered;
        }
    },
    methods: {
        bookService(service) {
            alert(`Booking ${service.name} for $${service.price} ${service.unit}. Thank you for choosing our hotel!`);
        }
    }
}
</script>

<style>
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem 0;
    text-align: center;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.hotel-name {
    font-size: 3rem;
    font-weight: 700;
    color: #1a237e;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 1s ease-out 0.2s both;
}

.hotel-tagline {
    font-size: 1.2rem;
    color: #666;
    font-style: italic;
    animation: fadeInUp 1s ease-out 0.4s both;
}

@keyframes fadeInUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Search Section */
.search-section {
    padding: 2rem 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
}

.search-box {
    text-align: center;
    margin-bottom: 2rem;
}

.search-input {
    width: 100%;
    max-width: 400px;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    border: 2px solid #e2e8f0;
    border-radius: 50px;
    outline: none;
    transition: all 0.3s ease;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.search-input:focus {
    border-color: #D4AF37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    transform: translateY(-2px);
}

.filter-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #666;
}

.filter-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: #D4AF37;
}

.filter-btn.active {
    background: #D4AF37;
    color: white;
    border-color: #D4AF37;
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

/* Pricing Section */
.pricing-section {
    padding: 4rem 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #1a237e;
    margin-bottom: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease-out;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    animation: staggerIn 1s ease-out;
}

@keyframes staggerIn {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Pricing Cards */
.pricing-card {
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
    /* Reduced from 2rem to decrease height */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    animation: cardSlideIn 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(50px);
}

.pricing-card:nth-child(1) {
    animation-delay: 0.1s;
}

.pricing-card:nth-child(2) {
    animation-delay: 0.2s;
}

.pricing-card:nth-child(3) {
    animation-delay: 0.3s;
}

.pricing-card:nth-child(4) {
    animation-delay: 0.4s;
}

.pricing-card:nth-child(5) {
    animation-delay: 0.5s;
}

.pricing-card:nth-child(6) {
    animation-delay: 0.6s;
}

@keyframes cardSlideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.pricing-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.pricing-card.featured {
    border: 3px solid #D4AF37;
    transform: scale(1.05);
}

.pricing-card.featured::before {
    content: 'POPULAR';
    position: absolute;
    top: 20px;
    right: -30px;
    background: #D4AF37;
    color: white;
    padding: 0.5rem 2rem;
    font-size: 0.8rem;
    font-weight: bold;
    transform: rotate(45deg);
    letter-spacing: 1px;
}

.card-header {
    text-align: center;
    margin-bottom: 1rem;
    /* Reduced from 2rem to decrease height */
}

.service-icon {
    font-size: 2rem;
    /* Reduced from 3rem to decrease height */
    margin-bottom: 0.5rem;
    /* Reduced from 1rem */
    display: block;
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}

.service-name {
    font-size: 1.2rem;
    /* Reduced from 1.5rem to decrease height */
    font-weight: 700;
    color: #1a237e;
    margin-bottom: 0.25rem;
    /* Reduced from 0.5rem */
}

.service-category {
    background: #f0f4f8;
    color: #1a237e;
    padding: 0.2rem 0.8rem;
    /* Slightly reduced padding */
    border-radius: 15px;
    font-size: 0.8rem;
    /* Reduced from 0.9rem */
    font-weight: 600;
}

.price-container {
    text-align: center;
    margin-bottom: 1rem;
    /* Reduced from 2rem to decrease height */
    padding: 0.75rem;
    /* Reduced from 1rem */
    background: linear-gradient(45deg, rgba(26, 35, 126, 0.8), rgba(212, 175, 55, 0.8));
    border-radius: 15px;
    color: white;
}

.price {
    font-size: 2rem;
    /* Reduced from 2.5rem to decrease height */
    font-weight: 800;
    display: block;
}

.price-unit {
    font-size: 0.9rem;
    /* Reduced from 1rem */
    opacity: 0.9;
}

.features-list {
    list-style: none;
    margin-bottom: 1rem;
    /* Reduced from 2rem to decrease height */
}

.features-list li {
    padding: 0.3rem 0;
    /* Reduced from 0.5rem to decrease height */
    display: flex;
    align-items: center;
    color: #666;
    transition: transform 0.2s ease;
    font-size: 0.9rem;
    /* Added to reduce text size slightly */
}

.features-list li:hover {
    transform: translateX(5px);
}

.feature-check {
    color: #D4AF37;
    font-weight: bold;
    margin-right: 0.5rem;
    /* Reduced from 0.75rem */
    font-size: 1rem;
    /* Reduced from 1.2rem */
}

.card-footer {
    text-align: center;
}

.book-btn {
    width: 100%;
    background: #D4AF37;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    /* Reduced from 1rem 2rem to decrease height */
    font-size: 1rem;
    /* Reduced from 1.1rem */
    font-weight: 700;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
}

.book-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.book-btn:hover::before {
    left: 100%;
}

.book-btn:hover {
    background: #B8941F;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
}

.book-btn:active {
    transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hotel-name {
        font-size: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .pricing-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .pricing-card {
        padding: 1rem;
        /* Further reduced for smaller screens */
    }

    .filter-buttons {
        flex-direction: column;
        align-items: center;
    }

    .filter-btn {
        width: 200px;
    }

    .search-input {
        width: 90%;
    }
}

@media (max-width: 480px) {
    .hotel-name {
        font-size: 1.5rem;
    }

    .pricing-card {
        padding: 0.75rem;
        /* Further reduced for very small screens */
    }

    .price {
        font-size: 1.8rem;
        /* Adjusted for smaller screens */
    }

    .service-icon {
        font-size: 1.5rem;
        /* Further reduced */
    }
}

/* High-resolution display optimizations */
@media (min-resolution: 2dppx) {
    .pricing-card {
        border: 0.5px solid rgba(0, 0, 0, 0.1);
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .header {
        background: rgba(17, 24, 39, 0.95);
    }

    .hotel-name {
        color: #D4AF37;
    }

    .search-section {
        background: rgba(17, 24, 39, 0.9);
    }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Print styles */
@media print {

    .search-section,
    .book-btn {
        display: none;
    }

    .pricing-card {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ccc;
    }
}
</style>