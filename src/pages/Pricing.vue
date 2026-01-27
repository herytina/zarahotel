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
                <div>
                    <button class="reservation_btn" @click="showBookingModal = true">
                        Faire une réservation
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

        <!-- Modal de réservation -->
        <div v-if="showBookingModal" class="modal-overlay" @click.self="showBookingModal = false">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Réservation</h2>
                    <button class="close-btn" @click="showBookingModal = false">×</button>
                </div>

                <form @submit.prevent="submitReservation" class="booking-form">
                    <div class="form-group">
                        <label>Nom complet *</label>
                        <input v-model="form.name" type="text" required placeholder="Nom et Prénom(s)" />
                    </div>

                    <div class="form-group">
                        <label>Email *</label>
                        <input v-model="form.email" type="email" required placeholder="votre@email.com" />
                    </div>

                    <div class="form-group">
                        <label>Téléphone / WhatsApp *</label>
                        <input v-model="form.phone" type="tel" required placeholder="+261 34 12 345 67" />
                    </div>

                    <div class="form-group">
                        <label>Type de chambre *</label>
                        <select v-model="form.room" required>
                            <option value="" disabled>Sélectionnez une chambre</option>
                            <option v-for="room in chambreOptions" :key="room.id" :value="room.name">
                                {{ room.name }} — ${{ room.price }}/nuit
                            </option>
                        </select>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Date d'arrivée *</label>
                            <input v-model="form.arrivee" type="date" required />
                        </div>
                        <div class="form-group">
                            <label>Date de départ *</label>
                            <input v-model="form.depart" type="date" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Nombre de nuits</label>
                        <input type="text" :value="nightsDisplay" readonly class="readonly-input" />
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn-cancel" @click="showBookingModal = false">
                            Annuler
                        </button>
                        <button type="submit" class="btn-submit" :disabled="nights <= 0">
                            Confirmer la réservation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { sendEmailService } from '@/services/sendEmail.service';

export default {
    name: 'HotelPricingApp',

    data() {
        return {
            selectedCategory: "All",
            showBookingModal: false,

            form: {
                name: "",
                email: "",
                phone: "",
                room: "",
                arrivee: "",
                depart: ""
            },

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

            if (this.selectedCategory !== 'All') {
                filtered = filtered.filter(service => service.category === this.selectedCategory);
            }

            if (this.searchQuery) {
                filtered = filtered.filter(service =>
                    service.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    service.category.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }

            return filtered;
        },

        chambreOptions() {
            return this.services.filter(s => s.category === 'Chambres');
        },

        nights() {
            if (!this.form.arrivee || !this.form.depart) return 0;
            const start = new Date(this.form.arrivee);
            const end = new Date(this.form.depart);
            if (end <= start) return 0;
            const diff = end - start;
            return Math.ceil(diff / (1000 * 60 * 60 * 24));
        },

        nightsDisplay() {
            return this.nights > 0 ? this.nights : '—';
        }
    },

    methods: {
        showSuccessToast() {
            this.$toast.success('Réservation confirmée ! Merci pour votre confiance.', {
                timeout: 2000
            });
        },
        async submitReservation() {
            const action = "reservation";


            if (this.nights <= 0) {
                alert("Veuillez choisir une date de départ postérieure à la date d'arrivée.");
                return;
            }
            const payload = {
                email: this.form.email,
                nom_prenoms: this.form.name,
                contact: this.form.phone,
                type_chambre: this.form.room,
                date: this.form.depart,
                sejours: this.nights
            }


            if (payload) {
                const response = await sendEmailService(payload, action);
                if (response) {
                    this.showSuccessToast();
                    this.showBookingModal = false;
                    this.form = {
                        name: "",
                        email: "",
                        phone: "",
                        room: "",
                        arrivee: "",
                        depart: ""
                    };
                }


            }


        }
    }
}
</script>

<style scoped>
/* ──────────────────────────────────────────────── */
/*         TON CSS ORIGINAL (inchangé)             */
/* ──────────────────────────────────────────────── */

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

/* ──────────────────────────────────────────────── */
/*               Styles MODALE (ajoutés)           */
/* ──────────────────────────────────────────────── */

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
}

.modal-content {
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 520px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
}

.modal-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    margin: 0;
    color: #1a237e;
}

.close-btn {
    background: none;
    border: none;
    font-size: 2.2rem;
    cursor: pointer;
    color: #777;
}

.close-btn:hover {
    color: #c62828;
}

.booking-form {
    padding: 1.5rem;
}

.form-group {
    margin-bottom: 1.2rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 600;
    color: #444;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
}

.form-row {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
}

.form-row .form-group {
    flex: 1;
    min-width: 45%;
}

.readonly-input {
    background: #f8f9fa;
    color: #555;
    font-weight: 500;
    cursor: default;
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.8rem;
    justify-content: flex-end;
}

.reservation_btn {
    background-color: #D4AF37;
    margin-top: 15px;
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;

}

.btn-cancel,
.btn-submit {
    padding: 0.8rem 1.6rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    border: none;
}

.btn-cancel {
    background: #f1f1f1;
    color: #333;
}

.btn-cancel:hover {
    background: #e0e0e0;
}

.btn-submit {
    background: #D4AF37;
    color: white;
}

.btn-submit:hover:not(:disabled) {
    background: #b8941f;
}

.btn-submit:disabled {
    background: #ccc;
    cursor: not-allowed;
}

/* Responsive modale */
@media (max-width: 520px) {
    .form-row {
        flex-direction: column;
        gap: 1rem;
    }

    .form-row .form-group {
        min-width: 100%;
    }

    .form-actions {
        flex-direction: column;
        gap: 0.8rem;
    }

    .btn-cancel,
    .btn-submit {
        width: 100%;
    }
}
</style>