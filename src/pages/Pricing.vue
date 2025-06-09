<template>
    <div class="hotel-pricing-app">
        <!-- Animated Background -->
        <div class="background-animation">
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
                <div class="shape shape-5"></div>
            </div>
        </div>

        <!-- Header Section -->
        <header class="header">
            <div class="header-overlay"></div>
            <div class="container">
                <div class="header-content">
                    <div class="logo-container">
                        <div class="logo-ring">
                            <div class="logo-inner">
                                <span class="logo-text">GL</span>
                            </div>
                        </div>
                    </div>
                    <h1 class="hotel-name">
                        <span class="name-part">Grand</span>
                        <span class="name-part">Luxe</span>
                        <span class="name-part">Hotel</span>
                    </h1>
                    <p class="hotel-tagline">
                        <span class="tagline-word">Experience</span>
                        <span class="tagline-word">Luxury.</span>
                        <span class="tagline-word">Embrace</span>
                        <span class="tagline-word">Excellence.</span>
                    </p>
                    <div class="header-decoration">
                        <div class="decoration-line"></div>
                        <div class="decoration-diamond"></div>
                        <div class="decoration-line"></div>
                    </div>
                </div>
            </div>
            <div class="header-waves">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25" class="shape-fill"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5" class="shape-fill"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        class="shape-fill"></path>
                </svg>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <!-- Intro Section -->
                <section class="intro-section">
                    <div class="intro-badge">
                        <span class="badge-text">Premium Services</span>
                    </div>
                    <h2 class="section-title">
                        <span class="title-line">Our Exclusive</span>
                        <span class="title-line highlight">Collection</span>
                    </h2>
                    <p class="section-description">
                        Discover our comprehensive range of world-class amenities and services,
                        meticulously crafted to exceed your every expectation and create unforgettable experiences.
                    </p>
                    <div class="intro-stats">
                        <div class="stat-item">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">Premium Services</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Concierge Support</div>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat-item">
                            <div class="stat-number">5★</div>
                            <div class="stat-label">Luxury Rating</div>
                        </div>
                    </div>
                </section>

                <!-- Service Categories -->
                <div class="services-grid">
                    <div v-for="(category, index) in serviceCategories" :key="category.id" class="service-category"
                        :class="`category-${index + 1}`" :style="{ '--animation-delay': `${index * 0.15}s` }">
                        <div class="category-glow"></div>
                        <div class="category-header">
                            <div class="category-icon-container">
                                <div class="icon-background"></div>
                                <div class="category-icon">
                                    <span class="icon" v-html="category.icon"></span>
                                </div>
                                <div class="icon-ring"></div>
                            </div>
                            <h3 class="category-title">{{ category.name }}</h3>
                            <p class="category-description">{{ category.description }}</p>
                            <div class="category-badge">
                                <span class="badge-count">{{ category.services.length }} Services</span>
                            </div>
                        </div>

                        <div class="services-list">
                            <div v-for="(service, serviceIndex) in category.services" :key="service.id"
                                class="service-item" :style="{ '--service-delay': `${serviceIndex * 0.1}s` }">
                                <div class="service-indicator"></div>
                                <div class="service-content">
                                    <div class="service-info">
                                        <h4 class="service-name">{{ service.name }}</h4>
                                        <p class="service-description">{{ service.description }}</p>
                                        <div class="service-features">
                                            <span class="feature-dot"></span>
                                            <span class="feature-text">Premium Quality</span>
                                        </div>
                                    </div>
                                    <div class="service-pricing">
                                        <div class="price-container">
                                            <span class="price-currency">$</span>
                                            <span class="price">{{ service.price.replace('$', '') }}</span>
                                        </div>
                                        <span class="price-unit">{{ service.unit }}</span>
                                        <div class="price-decoration"></div>
                                    </div>
                                </div>
                                <div class="service-hover-effect"></div>
                            </div>
                        </div>

                        <div class="category-footer">
                            <button class="view-all-btn">
                                <span class="btn-text">View All Services</span>
                                <span class="btn-arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Premium Features Section -->
                <section class="premium-features">
                    <div class="features-header">
                        <h2 class="features-title">Why Choose Grand Luxe?</h2>
                        <p class="features-subtitle">Experience the difference with our exclusive amenities</p>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card" v-for="(feature, index) in premiumFeatures" :key="feature.id"
                            :style="{ '--feature-delay': `${index * 0.1}s` }">
                            <div class="feature-icon">
                                <span v-html="feature.icon"></span>
                            </div>
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-description">{{ feature.description }}</p>
                        </div>
                    </div>
                </section>

                <!-- Contact Section -->
                <section class="contact-section">
                    <div class="contact-background">
                        <div class="contact-pattern"></div>
                    </div>
                    <div class="contact-content">
                        <div class="contact-header">
                            <div class="contact-badge">
                                <span class="badge-text">Get In Touch</span>
                            </div>
                            <h2 class="contact-title">
                                <span class="title-line">Ready to Experience</span>
                                <span class="title-line highlight">Luxury?</span>
                            </h2>
                            <p class="contact-description">
                                Contact our dedicated concierge team for personalized service recommendations
                                and exclusive package deals tailored to your preferences.
                            </p>
                        </div>

                        <div class="contact-cards">
                            <div class="contact-card">
                                <div class="contact-icon">
                                    <span>📞</span>
                                </div>
                                <div class="contact-details">
                                    <h4 class="contact-method">Phone</h4>
                                    <p class="contact-text">+1 (555) 123-4567</p>
                                    <span class="contact-availability">Available 24/7</span>
                                </div>
                            </div>

                            <div class="contact-card">
                                <div class="contact-icon">
                                    <span>✉️</span>
                                </div>
                                <div class="contact-details">
                                    <h4 class="contact-method">Email</h4>
                                    <p class="contact-text">concierge@grandluxehotel.com</p>
                                    <span class="contact-availability">Response within 1 hour</span>
                                </div>
                            </div>

                            <div class="contact-card">
                                <div class="contact-icon">
                                    <span>💬</span>
                                </div>
                                <div class="contact-details">
                                    <h4 class="contact-method">Live Chat</h4>
                                    <p class="contact-text">Instant Support</p>
                                    <span class="contact-availability">Online now</span>
                                </div>
                            </div>
                        </div>

                        <div class="contact-cta">
                            <button class="cta-button">
                                <span class="cta-text">Book Your Experience</span>
                                <div class="cta-shine"></div>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-pattern"></div>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-logo">
                        <div class="logo-ring small">
                            <div class="logo-inner">
                                <span class="logo-text">GL</span>
                            </div>
                        </div>
                        <span class="footer-brand">Grand Luxe Hotel</span>
                    </div>
                    <p class="footer-text">© 2025 Grand Luxe Hotel. All rights reserved. | Crafted with excellence.</p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: "PricingPage",
    bodyClass: "pricing-page",
    data() {
        return {
            serviceCategories: [
                {
                    id: 'accommodations',
                    name: 'Luxury Accommodations',
                    description: 'Exquisite rooms and suites with breathtaking views and premium amenities',
                    icon: '🏨',
                    services: [
                        {
                            id: 'standard-room',
                            name: 'Signature Room',
                            description: 'Elegant comfort with panoramic city or garden views, marble bathroom',
                            price: '$299',
                            unit: 'per night'
                        },
                        {
                            id: 'deluxe-room',
                            name: 'Executive Suite',
                            description: 'Spacious rooms with premium furnishings and private balcony',
                            price: '$399',
                            unit: 'per night'
                        },
                        {
                            id: 'junior-suite',
                            name: 'Grand Suite',
                            description: 'Separate living area with luxury amenities and butler service',
                            price: '$599',
                            unit: 'per night'
                        },
                        {
                            id: 'presidential-suite',
                            name: 'Presidential Suite',
                            description: 'Ultimate luxury with panoramic views and private terrace',
                            price: '$1,299',
                            unit: 'per night'
                        }
                    ]
                },
                {
                    id: 'dining',
                    name: 'Culinary Excellence',
                    description: 'World-class dining experiences crafted by renowned chefs',
                    icon: '🍽️',
                    services: [
                        {
                            id: 'fine-dining',
                            name: 'Michelin Star Restaurant',
                            description: 'Award-winning cuisine with sommelier-selected wine pairings',
                            price: '$125',
                            unit: 'per person'
                        },
                        {
                            id: 'casual-dining',
                            name: 'Garden Terrace',
                            description: 'Fresh, seasonal dishes in an elegant outdoor setting',
                            price: '$65',
                            unit: 'per person'
                        },
                        {
                            id: 'room-service',
                            name: 'Private Dining Service',
                            description: 'Gourmet meals delivered with white-glove service',
                            price: '$35',
                            unit: 'delivery fee'
                        },
                        {
                            id: 'champagne-bar',
                            name: 'Crystal Lounge',
                            description: 'Premium spirits, vintage champagnes, and artisan cocktails',
                            price: '$18',
                            unit: 'per drink'
                        }
                    ]
                },
                {
                    id: 'spa-wellness',
                    name: 'Wellness Sanctuary',
                    description: 'Rejuvenating treatments and holistic wellness experiences',
                    icon: '🧘‍♀️',
                    services: [
                        {
                            id: 'signature-massage',
                            name: 'Royal Treatment Massage',
                            description: 'Therapeutic full-body massage with aromatic oils (90 minutes)',
                            price: '$195',
                            unit: 'per session'
                        },
                        {
                            id: 'facial-treatment',
                            name: 'Diamond Facial Experience',
                            description: 'Anti-aging facial with 24k gold and diamond infusion',
                            price: '$145',
                            unit: 'per session'
                        },
                        {
                            id: 'sauna-steam',
                            name: 'Thermal Wellness Circuit',
                            description: 'Access to sauna, steam room, and vitality pools',
                            price: '$45',
                            unit: 'per day'
                        },
                        {
                            id: 'personal-trainer',
                            name: 'Elite Fitness Coaching',
                            description: 'One-on-one training with certified wellness experts',
                            price: '$85',
                            unit: 'per hour'
                        }
                    ]
                },
                {
                    id: 'recreation',
                    name: 'Exclusive Recreation',
                    description: 'Premium leisure activities and entertainment experiences',
                    icon: '🏊‍♂️',
                    services: [
                        {
                            id: 'pool-access',
                            name: 'Infinity Pool Paradise',
                            description: 'Rooftop infinity pool with private cabana and butler service',
                            price: '$125',
                            unit: 'per day'
                        },
                        {
                            id: 'tennis-court',
                            name: 'Championship Tennis',
                            description: 'Professional court with equipment and coaching available',
                            price: '$75',
                            unit: 'per hour'
                        },
                        {
                            id: 'golf-course',
                            name: 'Signature Golf Experience',
                            description: '18-hole championship course with cart and personal caddie',
                            price: '$195',
                            unit: 'per round'
                        },
                        {
                            id: 'yacht-charter',
                            name: 'Private Yacht Charter',
                            description: 'Luxury yacht with professional crew and gourmet catering',
                            price: '$1,850',
                            unit: 'per charter'
                        }
                    ]
                },
                {
                    id: 'business',
                    name: 'Executive Services',
                    description: 'State-of-the-art business facilities and professional support',
                    icon: '💼',
                    services: [
                        {
                            id: 'meeting-room',
                            name: 'Executive Boardroom',
                            description: 'Premium boardroom for up to 12 people with tech support',
                            price: '$295',
                            unit: 'per day'
                        },
                        {
                            id: 'conference-hall',
                            name: 'Grand Ballroom',
                            description: 'Elegant venue for up to 200 guests with full event planning',
                            price: '$1,250',
                            unit: 'per day'
                        },
                        {
                            id: 'business-center',
                            name: 'Business Concierge',
                            description: 'Full-service business support with dedicated assistant',
                            price: '$25',
                            unit: 'per day'
                        },
                        {
                            id: 'av-equipment',
                            name: 'Premium A/V Suite',
                            description: 'Professional presentation equipment with technical support',
                            price: '$125',
                            unit: 'per day'
                        }
                    ]
                },
                {
                    id: 'transportation',
                    name: 'Luxury Transportation',
                    description: 'Premium travel services and exclusive transportation options',
                    icon: '🚗',
                    services: [
                        {
                            id: 'airport-transfer',
                            name: 'Private Chauffeur Service',
                            description: 'Luxury vehicle with professional driver and refreshments',
                            price: '$95',
                            unit: 'one way'
                        },
                        {
                            id: 'city-tours',
                            name: 'Curated City Experience',
                            description: 'Personalized sightseeing with expert local guide',
                            price: '$185',
                            unit: 'per tour'
                        },
                        {
                            id: 'luxury-car-rental',
                            name: 'Exotic Car Collection',
                            description: 'Premium and exotic vehicles available for daily rental',
                            price: '$275',
                            unit: 'per day'
                        },
                        {
                            id: 'helicopter-tour',
                            name: 'Sky-High Adventure',
                            description: 'Aerial sightseeing with champagne service',
                            price: '$495',
                            unit: 'per person'
                        }
                    ]
                }
            ],
            premiumFeatures: [
                {
                    id: 'concierge',
                    title: '24/7 Concierge',
                    description: 'Personal assistance for all your needs, any time of day',
                    icon: '🎩'
                },
                {
                    id: 'exclusive',
                    title: 'Exclusive Access',
                    description: 'VIP access to private events and premium locations',
                    icon: '🔑'
                },
                {
                    id: 'personalized',
                    title: 'Tailored Experience',
                    description: 'Customized services designed around your preferences',
                    icon: '✨'
                },
                {
                    id: 'luxury',
                    title: 'Unmatched Luxury',
                    description: 'The finest amenities and attention to every detail',
                    icon: '👑'
                }
            ]
        }
    }
}
</script>

<style scoped>
/* Enhanced CSS with premium animations and effects */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #0f1419;
    --primary-light: #1a365d;
    --accent-color: #d4af37;
    --accent-light: #f6d55c;
    --accent-dark: #b8941f;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --text-light: #718096;
    --text-white: #ffffff;
    --background-light: #f8fafc;
    --background-white: #ffffff;
    --card-background: rgba(255, 255, 255, 0.95);
    --glass-background: rgba(255, 255, 255, 0.1);
    --border-color: #e2e8f0;
    --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-large: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-glow: 0 0 30px rgba(212, 175, 55, 0.3);
    --border-radius: 16px;
    --border-radius-large: 24px;
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.2s ease;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 48px;
    --spacing-3xl: 64px;
}

/* Background Animation */
.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.floating-shapes {
    position: relative;
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
    animation: float 20s ease-in-out infinite;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: -10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: -5%;
    animation-delay: -5s;
}

.shape-3 {
    width: 150px;
    height: 150px;
    top: 30%;
    left: 70%;
    animation-delay: -10s;
}

.shape-4 {
    width: 100px;
    height: 100px;
    top: 80%;
    left: 20%;
    animation-delay: -15s;
}

.shape-5 {
    width: 250px;
    height: 250px;
    top: 40%;
    right: 30%;
    animation-delay: -7s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 0.3;
    }

    25% {
        transform: translateY(-30px) rotate(90deg) scale(1.1);
        opacity: 0.5;
    }

    50% {
        transform: translateY(-60px) rotate(180deg) scale(0.9);
        opacity: 0.3;
    }

    75% {
        transform: translateY(-30px) rotate(270deg) scale(1.1);
        opacity: 0.4;
    }
}

/* Typography */
.hotel-pricing-app {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: linear-gradient(135deg, var(--background-light) 0%, #edf2f7 50%, var(--background-light) 100%);
    min-height: 100vh;
    overflow-x: hidden;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* Enhanced Header */
.header {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 50%, #2c5282 100%);
    color: var(--text-white);
    padding: var(--spacing-3xl) 0 var(--spacing-2xl);
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
    animation: shimmer 15s ease-in-out infinite;
}

@keyframes shimmer {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

.header-content {
    text-align: center;
    position: relative;
    z-index: 2;
    animation: fadeInUp 1.2s ease-out;
}

.logo-container {
    margin-bottom: var(--spacing-xl);
    animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.logo-ring {
    width: 120px;
    height: 120px;
    border: 3px solid var(--accent-color);
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-glow);
}

.logo-ring::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid transparent;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--accent-color), transparent, var(--accent-color));
    animation: rotate 4s linear infinite;
    z-index: -1;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.logo-inner {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo-text {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hotel-name {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.name-part {
    display: inline-block;
    background: linear-gradient(45deg, #ffffff, var(--accent-color), #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShine 3s ease-in-out infinite;
}

.name-part:nth-child(2) {
    animation-delay: 0.5s;
}

.name-part:nth-child(3) {
    animation-delay: 1s;
}

@keyframes textShine {

    0%,
    100% {
        filter: brightness(1);
    }

    50% {
        filter: brightness(1.3);
    }
}

.hotel-tagline {
    font-size: 1.5rem;
    opacity: 0.9;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-xl);
    display: flex;
    justify-content: center;
    gap: var(--spacing-md);
    flex-wrap: wrap;
}

.tagline-word {
    display: inline-block;
    animation: fadeInWord 0.8s ease-out both;
}

.tagline-word:nth-child(1) {
    animation-delay: 0.2s;
}

.tagline-word:nth-child(2) {
    animation-delay: 0.4s;
}

.tagline-word:nth-child(3) {
    animation-delay: 0.6s;
}

.tagline-word:nth-child(4) {
    animation-delay: 0.8s;
}

@keyframes fadeInWord {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.header-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    animation: fadeIn 1.5s ease-out 1s both;
}

.decoration-line {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    animation: pulse 2s ease-in-out infinite;
}

.decoration-diamond {
    width: 12px;
    height: 12px;
    background: var(--accent-color);
    transform: rotate(45deg);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    animation: diamondSpin 4s ease-in-out infinite;
}

@keyframes diamondSpin {

    0%,
    100% {
        transform: rotate(45deg) scale(1);
    }

    50% {
        transform: rotate(225deg) scale(1.2);
    }
}

.header-waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.header-waves svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
}

.shape-fill {
    fill: var(--background-light);
}

/* Enhanced Main Content */
.main-content {
    padding: var(--spacing-3xl) 0;
    position: relative;
}

/* Enhanced Intro Section */
.intro-section {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
    animation: fadeInUp 1s ease-out 0.3s both;
}

.intro-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    color: var(--primary-color);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-lg);
    box-shadow: var(--shadow-glow);
    animation: badgePulse 3s ease-in-out infinite;
}

@keyframes badgePulse {

    0%,
    100% {
        transform: scale(1);
        box-shadow: var(--shadow-glow);
    }

    50% {
        transform: scale(1.05);
        box-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
    }
}

.section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    line-height: 1.1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.title-line {
    display: block;
}

.title-line.highlight {
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
}

.title-line.highlight::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
}

.section-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto var(--spacing-xl);
    line-height: 1.7;
}

.intro-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xl);
    flex-wrap: wrap;
    margin-top: var(--spacing-xl);
}

.stat-item {
    text-align: center;
    animation: statCounter 2s ease-out 1s both;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--accent-color);
    line-height: 1;
    margin-bottom: var(--spacing-xs);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-divider {
    width: 2px;
    height: 40px;
    background: linear-gradient(to bottom, transparent, var(--border-color), transparent);
}

@keyframes statCounter {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Enhanced Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-3xl);
}

.service-category {
    background: var(--card-background);
    border-radius: var(--border-radius-large);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-light);
    border: 1px solid var(--border-color);
    transition: var(--transition);
    animation: slideInUp 0.8s ease-out var(--animation-delay) both;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.category-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: var(--transition);
    animation: rotate 20s linear infinite;
}

.service-category:hover .category-glow {
    opacity: 1;
}

.service-category:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: var(--shadow-large), var(--shadow-glow);
    border-color: var(--accent-color);
}

/* Category Header */
.category-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
    position: relative;
    z-index: 2;
}

.category-icon-container {
    position: relative;
    display: inline-block;
    margin-bottom: var(--spacing-lg);
}

.icon-background {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    border-radius: 50%;
    opacity: 0.2;
    animation: iconPulse 3s ease-in-out infinite;
}

@keyframes iconPulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.2;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.3;
    }
}

.category-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    border-radius: 50%;
    box-shadow: var(--shadow-medium);
    transition: var(--transition);
    position: relative;
    z-index: 1;
}

.service-category:hover .category-icon {
    transform: scale(1.15) rotate(10deg);
    box-shadow: var(--shadow-large);
}

.icon-ring {
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border: 2px solid var(--accent-color);
    border-radius: 50%;
    opacity: 0;
    animation: ringExpand 2s ease-in-out infinite;
}

@keyframes ringExpand {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
        opacity: 0.5;
    }

    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}

.icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.category-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
    line-height: 1.2;
}

.category-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
}

.category-badge {
    display: inline-block;
    background: rgba(212, 175, 55, 0.1);
    color: var(--accent-dark);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(212, 175, 55, 0.3);
}

/* Enhanced Services List */
.services-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.service-item {
    position: relative;
    border-radius: var(--border-radius);
    border: 1px solid transparent;
    transition: var(--transition);
    overflow: hidden;
    animation: fadeInService 0.6s ease-out var(--service-delay) both;
}

@keyframes fadeInService {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.service-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--accent-color), var(--accent-light));
    transform: scaleY(0);
    transition: var(--transition);
    border-radius: 0 2px 2px 0;
}

.service-item:hover .service-indicator {
    transform: scaleY(1);
}

.service-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: var(--spacing-lg);
    background: var(--background-light);
    transition: var(--transition);
    position: relative;
    z-index: 1;
}

.service-hover-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
    transition: left 0.6s ease;
}

.service-item:hover .service-hover-effect {
    left: 100%;
}

.service-item:hover .service-content {
    background: var(--background-white);
    transform: translateX(8px);
    box-shadow: var(--shadow-medium);
}

.service-info {
    flex: 1;
    margin-right: var(--spacing-lg);
}

.service-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
    line-height: 1.3;
}

.service-description {
    color: var(--text-light);
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: var(--spacing-sm);
}

.service-features {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.feature-dot {
    width: 6px;
    height: 6px;
    background: var(--accent-color);
    border-radius: 50%;
    animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

.feature-text {
    font-size: 0.75rem;
    color: var(--accent-dark);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.service-pricing {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
    position: relative;
}

.price-container {
    display: flex;
    align-items: baseline;
    gap: 2px;
    margin-bottom: var(--spacing-xs);
}

.price-currency {
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-color);
}

.price {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--accent-color);
    line-height: 1;
}

.price-unit {
    font-size: 0.75rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--spacing-sm);
}

.price-decoration {
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color));
    border-radius: 1px;
}

/* Category Footer */
.category-footer {
    text-align: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--border-color);
}

.view-all-btn {
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    color: var(--primary-color);
    border: none;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    box-shadow: var(--shadow-medium);
}

.view-all-btn:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: var(--shadow-large);
}

.btn-arrow {
    transition: var(--transition);
}

.view-all-btn:hover .btn-arrow {
    transform: translateX(4px);
}

/* Premium Features Section */
.premium-features {
    margin-bottom: var(--spacing-3xl);
    animation: fadeInUp 1s ease-out 0.5s both;
}

.features-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.features-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
}

.features-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
}

.feature-card {
    background: var(--card-background);
    padding: var(--spacing-xl);
    border-radius: var(--border-radius);
    text-align: center;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--border-color);
    transition: var(--transition);
    animation: slideInUp 0.8s ease-out var(--feature-delay) both;
}

.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-large);
    border-color: var(--accent-color);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
}

.feature-description {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Enhanced Contact Section */
.contact-section {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
    color: var(--text-white);
    padding: var(--spacing-3xl);
    border-radius: var(--border-radius-large);
    position: relative;
    overflow: hidden;
    animation: fadeInUp 1s ease-out 0.6s both;
}

.contact-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.contact-pattern {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    animation: rotate 30s linear infinite;
}

.contact-content {
    position: relative;
    z-index: 2;
}

.contact-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.contact-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    color: var(--text-white);
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-lg);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.contact-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    line-height: 1.2;
}

.contact-description {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: var(--spacing-xl);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}

.contact-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
}

.contact-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    padding: var(--spacing-xl);
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    transition: var(--transition);
}

.contact-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: var(--shadow-large);
}

.contact-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    background: rgba(212, 175, 55, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.contact-details {
    flex: 1;
}

.contact-method {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.contact-text {
    font-size: 1rem;
    margin-bottom: var(--spacing-xs);
}

.contact-availability {
    font-size: 0.875rem;
    opacity: 0.8;
    color: var(--accent-light);
}

.contact-cta {
    text-align: center;
}

.cta-button {
    background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
    color: var(--primary-color);
    border: none;
    padding: var(--spacing-lg) var(--spacing-2xl);
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-large);
}

.cta-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}

.cta-button:hover .cta-shine {
    left: 100%;
}

.cta-button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
}

/* Enhanced Footer */
.footer {
    background: var(--primary-color);
    color: var(--text-white);
    padding: var(--spacing-2xl) 0;
    position: relative;
    overflow: hidden;
}

.footer-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 49%, rgba(212, 175, 55, 0.1) 50%, transparent 51%);
    background-size: 20px 20px;
    opacity: 0.3;
}

.footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    position: relative;
    z-index: 1;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.logo-ring.small {
    width: 50px;
    height: 50px;
}

.logo-ring.small .logo-inner {
    width: 35px;
    height: 35px;
}

.logo-ring.small .logo-text {
    font-size: 1rem;
}

.footer-brand {
    font-size: 1.125rem;
    font-weight: 600;
}

.footer-text {
    opacity: 0.8;
    font-size: 0.875rem;
}

/* Enhanced Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(60px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

/* Enhanced Responsive Design */
@media (max-width: 1024px) {
    .services-grid {
        grid-template-columns: 1fr;
    }

    .features-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 var(--spacing-md);
    }

    .header {
        min-height: 80vh;
        padding: var(--spacing-2xl) 0;
    }

    .hotel-name {
        font-size: clamp(2rem, 8vw, 3rem);
    }

    .hotel-tagline {
        font-size: 1.125rem;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .intro-stats {
        flex-direction: column;
        gap: var(--spacing-lg);
    }

    .stat-divider {
        width: 40px;
        height: 2px;
    }

    .services-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .service-category {
        padding: var(--spacing-lg);
    }

    .service-content {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-md);
    }

    .service-info {
        margin-right: 0;
    }

    .service-pricing {
        align-items: flex-start;
    }

    .contact-cards {
        grid-template-columns: 1fr;
    }

    .contact-card {
        flex-direction: column;
        text-align: center;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .logo-ring {
        width: 80px;
        height: 80px;
    }

    .logo-inner {
        width: 60px;
        height: 60px;
    }

    .logo-text {
        font-size: 1.5rem;
    }

    .category-icon {
        width: 80px;
        height: 80px;
    }

    .icon {
        font-size: 2rem;
    }

    .service-item:hover .service-content {
        transform: none;
    }

    .contact-section {
        padding: var(--spacing-xl);
    }
}

/* Accessibility and Performance */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

@media (prefers-color-scheme: dark) {
    :root {
        --background-light: #1a202c;
        --background-white: #2d3748;
        --card-background: rgba(45, 55, 72, 0.95);
        --text-primary: #f7fafc;
        --text-secondary: #e2e8f0;
        --border-color: #4a5568;
    }
}

/* Print Styles */
@media print {

    .header,
    .contact-section,
    .footer {
        background: white !important;
        color: black !important;
    }

    .service-category {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ccc;
    }

    .floating-shapes,
    .background-animation {
        display: none;
    }
}
</style>