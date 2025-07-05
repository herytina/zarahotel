<template>
    <div id="app">
        <!-- Hero Section with Title and Search -->
        <div class="hero-section">
            <div class="container">
                <h1 class="hero-title">Nos Services & Tarifs</h1>
                <div class="filter-buttons">
                    <button v-for="category in categories" :key="category" @click="selectedCategory = category"
                        :class="['filter-btn', { active: selectedCategory === category }]">
                        {{ category }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Pricing Section -->
        <main class="pricing-section">
            <div class="container">
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
            hotelName: "Grand Hôtel de Luxe",
            tagline: "Vivez l'excellence dans chaque détail",
            searchQuery: "",
            selectedCategory: "All",
            services: [
                {
                    id: 1,
                    name: 'Chambre Standard',
                    category: 'Chambres',
                    price: 150,
                    unit: 'par nuit',
                    icon: '🛏️',
                    featured: false,
                    features: ['Lit queen size', 'Vue sur la ville', 'WiFi gratuit', 'Service en chambre', 'Climatisation']
                },
                {
                    id: 2,
                    name: 'Suite Deluxe',
                    category: 'Chambres',
                    price: 280,
                    unit: 'par nuit',
                    icon: '🏨',
                    featured: true,
                    features: ['Lit king size', 'Vue sur l\'océan', 'Balcon', 'Mini-bar', 'Équipements haut de gamme']
                },
                {
                    id: 3,
                    name: 'Suite Présidentielle',
                    category: 'Chambres',
                    price: 650,
                    unit: 'par nuit',
                    icon: '👑',
                    featured: false,
                    features: ['Chambre principale', 'Salon', 'Terrasse privée', 'Service de majordome', 'Jacuzzi']
                },
                {
                    id: 4,
                    name: 'Restaurant Gastronomique',
                    category: 'Restauration',
                    price: 85,
                    unit: 'par personne',
                    icon: '🍽️',
                    featured: false,
                    features: ['Menu dégustation 5 plats', 'Accord mets et vins', 'Spécialité du chef', 'Ingrédients haut de gamme']
                },
                {
                    id: 5,
                    name: 'Buffet Petit-Déjeuner',
                    category: 'Restauration',
                    price: 35,
                    unit: 'par personne',
                    icon: '🥐',
                    featured: false,
                    features: ['Cuisine internationale', 'Pâtisseries fraîches', 'Options saines', 'Café premium']
                },
                {
                    id: 6,
                    name: 'Massage Complet',
                    category: 'Spa',
                    price: 120,
                    unit: 'par séance',
                    icon: '💆',
                    featured: true,
                    features: ['Séance de 90 minutes', 'Huiles essentielles', 'Thérapeute expert', 'Salle de relaxation']
                },
                {
                    id: 7,
                    name: 'Soin du Visage',
                    category: 'Spa',
                    price: 80,
                    unit: 'par séance',
                    icon: '✨',
                    featured: false,
                    features: ['Nettoyage en profondeur', 'Traitement anti-âge', 'Produits bio', 'Analyse de la peau']
                },
                {
                    id: 8,
                    name: 'Accès au Centre de Fitness',
                    category: 'Loisirs',
                    price: 25,
                    unit: 'par jour',
                    icon: '🏋️',
                    featured: false,
                    features: ['Équipements modernes', 'Coach personnel', 'Cours collectifs', 'Accès 24/7']
                },
                {
                    id: 9,
                    name: 'Piscine et Sauna',
                    category: 'Loisirs',
                    price: 40,
                    unit: 'par jour',
                    icon: '🏊',
                    featured: false,
                    features: ['Piscine olympique', 'Sauna chauffé', 'Bar au bord de la piscine', 'Service de serviettes']
                },
                {
                    id: 10,
                    name: 'Accès au Parcours de Golf',
                    category: 'Loisirs',
                    price: 95,
                    unit: 'par partie',
                    icon: '⛳',
                    featured: false,
                    features: ['Parcours 18 trous', 'Voiturette de golf incluse', 'Location de clubs', 'Accès à la boutique pro']
                },
                {
                    id: 11,
                    name: 'Salle de Conférence',
                    category: 'Affaires',
                    price: 200,
                    unit: 'par heure',
                    icon: '📊',
                    featured: false,
                    features: ['Jusqu\'à 50 personnes', 'Équipements audiovisuels', 'Service de restauration', 'Support technique']
                },
                {
                    id: 12,
                    name: 'Salle de Réunion Exécutive',
                    category: 'Affaires',
                    price: 350,
                    unit: 'par heure',
                    icon: '💼',
                    featured: true,
                    features: ['Emplacement premium', 'Jusqu\'à 20 personnes', 'Vidéoconférence', 'Rafraîchissements']
                },
                {
                    id: 13,
                    name: 'Service de Blanchisserie',
                    category: 'Services',
                    price: 15,
                    unit: 'par article',
                    icon: '👕',
                    featured: false,
                    features: ['Service le jour même', 'Nettoyage à sec', 'Repassage inclus', 'Écologique']
                },
                {
                    id: 14,
                    name: 'Transfert Aéroport',
                    category: 'Services',
                    price: 45,
                    unit: 'aller simple',
                    icon: '🚗',
                    featured: false,
                    features: ['Véhicule de luxe', 'Chauffeur professionnel', 'Accueil personnalisé', 'Assistance bagages']
                },
                {
                    id: 15,
                    name: 'Service de Voiturier',
                    category: 'Services',
                    price: 20,
                    unit: 'par nuit',
                    icon: '🅿️',
                    featured: false,
                    features: ['Service 24/7', 'Parking couvert', 'Lavage de voiture disponible', 'Surveillance sécurisée']
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
            alert(`Réservation de ${service.name} pour $${service.price} ${service.unit}. Merci d'avoir choisi notre hôtel !`);
        }
    }
}
</script>

<style scoped>
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

#app {
    margin-bottom: 4rem;
    min-height: 100vh;
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 4rem 2rem;
    background: url('https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg') no-repeat center center;
    background-size: cover;
    position: relative;
    color: white;
    width: 100vw;
    margin: 0;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    position: relative;
    animation: fadeInDown 1s ease-out;
    z-index: 1;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.filter-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    z-index: 1;
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
    content: 'POPULAIRE';
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
}

.service-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
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
    font-weight: 700;
    color: #1a237e;
    margin-bottom: 0.25rem;
}

.service-category {
    background: #f0f4f8;
    color: #1a237e;
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.price-container {
    text-align: center;
    margin-bottom: 1rem;
    padding: 0.75rem;
    background: linear-gradient(45deg, rgba(26, 35, 126, 0.8), rgba(212, 175, 55, 0.8));
    border-radius: 15px;
    color: white;
}

.price {
    font-size: 2rem;
    font-weight: 800;
    display: block;
}

.price-unit {
    font-size: 0.9rem;
    opacity: 0.9;
}

.features-list {
    list-style: none;
    margin-bottom: 1rem;
}

.features-list li {
    padding: 0.3rem 0;
    display: flex;
    align-items: center;
    color: #666;
    transition: transform 0.2s ease;
    font-size: 0.9rem;
}

.features-list li:hover {
    transform: translateX(5px);
}

.feature-check {
    color: #D4AF37;
    font-weight: bold;
    margin-right: 0.5rem;
    font-size: 1rem;
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
    font-size: 1rem;
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
    .hero-section {
        padding: 3rem 1rem;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .pricing-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .pricing-card {
        padding: 1rem;
    }

    .filter-buttons {
        flex-direction: column;
        align-items: center;
    }

    .filter-btn {
        width: 200px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .pricing-card {
        padding: 0.75rem;
    }

    .price {
        font-size: 1.8rem;
    }

    .service-icon {
        font-size: 1.5rem;
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
    .hero-section::before {
        background: rgba(0, 0, 0, 0.6);
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

    .filter-buttons,
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