<template>
    <div class="apartments-page">
        <div class="apartments-container">
            <div class="apartment-card" v-for="(apartment, index) in apartments" :key="index">
                <div class="image-container">
                    <img :src="apartment.image" :alt="apartment.name" class="apartment-image">
                    <div class="image-overlay">
                        <div class="overlay-content">
                            <h3>{{ apartment.name }}</h3>
                            <p>{{ apartment.price }}</p>
                            <button class="view-btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="apartment-info">
                    <h3 class="apartment-name">{{ apartment.name }}</h3>
                    <p class="apartment-description">{{ apartment.description }}</p>
                    <div class="apartment-features">
                        <span class="feature" v-for="feature in apartment.features" :key="feature">
                            {{ feature }}
                        </span>
                    </div>
                    <div class="apartment-price">{{ apartment.price }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ApartmentPage",
    bodyClass: "appartment-page",
    data() {
        return {
            apartments: [
                {
                    name: "Suite Penthouse Royale",
                    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
                    description: "Luxe ultime avec vues panoramiques sur la ville et commodités haut de gamme",
                    features: ["2 chambres", "Vue sur l'océan", "Balcon privé", "Jacuzzi"],
                    price: "899 Ar/nuit"
                },
                {
                    name: "Suite d'Affaires Exécutive",
                    image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg",
                    description: "Parfaite pour les voyageurs d'affaires avec espace de travail dédié",
                    features: ["1 chambre", "Bureau de travail", "Espace de réunion", "Vue sur la ville"],
                    price: "599 Ar/nuit"
                },
                {
                    name: "Suite Confort Familiale",
                    image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
                    description: "Hébergement spacieux conçu pour les familles",
                    features: ["3 chambres", "Salon", "Cuisine", "Vue sur le jardin"],
                    price: "799 Ar/nuit"
                },
                {
                    name: "Suite Romantique Lune de Miel",
                    image: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
                    description: "Suite de luxe intime parfaite pour les escapades romantiques",
                    features: ["1 chambre", "Cheminée", "Spa privé", "Champagne"],
                    price: "999 Ar/nuit"
                },
                {
                    name: "Appartement Studio Moderne",
                    image: "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg",
                    description: "Design contemporain avec toutes les commodités essentielles",
                    features: ["Studio", "Kitchenette", "Design moderne", "WiFi"],
                    price: "399 Ar/nuit"
                },
                {
                    name: "Suite Présidentielle de Luxe",
                    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
                    description: "Le summum de l'hébergement de luxe",
                    features: ["3 chambres", "Service de majordome", "Ascenseur privé", "Terrasse"],
                    price: "1299 Ar/nuit"
                }
            ]
        };
    }
}
</script>
<style scoped>
.apartments-page {
    padding: 2rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 0 2rem;
}

.page-title {
    font-size: 3rem;
    color: #1a237e;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: slideInFromTop 1s ease-out;
}

.page-subtitle {
    font-size: 1.2rem;
    color: #666;
    font-weight: 300;
    animation: slideInFromTop 1s ease-out 0.3s both;
}

.apartments-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2.5rem;
}

.apartment-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    animation: fadeInUp 0.8s ease-out;
}

.apartment-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.apartment-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.apartment-card:hover .apartment-image {
    transform: scale(1.1) rotate(2deg);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(26, 35, 126, 0.8), rgba(212, 175, 55, 0.8));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.4s ease;
}

.apartment-card:hover .image-overlay {
    opacity: 1;
}

.overlay-content {
    text-align: center;
    color: white;
    transform: translateY(20px);
    transition: transform 0.4s ease;
}

.apartment-card:hover .overlay-content {
    transform: translateY(0);
}

.overlay-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.overlay-content p {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.view-btn {
    background: #D4AF37;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-btn:hover {
    background: #B8941F;
    transform: scale(1.05);
}

.apartment-info {
    padding: 2rem;
}

.apartment-name {
    font-size: 1.4rem;
    color: #1a237e;
    font-weight: 600;
    margin-bottom: 1rem;
}

.apartment-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.apartment-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.feature {
    background: #f0f4f8;
    color: #1a237e;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
}

.feature:hover {
    background: #D4AF37;
    color: white;
    transform: scale(1.05);
}

.apartment-price {
    font-size: 1.5rem;
    color: #D4AF37;
    font-weight: 700;
    text-align: right;
}

@keyframes slideInFromTop {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .apartments-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 0 1rem;
    }

    .page-title {
        font-size: 2.5rem;
    }

    .apartment-card {
        margin: 0;
    }

    .image-container {
        height: 200px;
    }

    .apartment-info {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .apartments-container {
        padding: 0 0.5rem;
    }

    .apartment-features {
        justify-content: center;
    }
}
</style>