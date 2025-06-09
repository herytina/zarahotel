<template>
    <div class="events-page">
        <!-- <div class="page-header">
            <h1 class="page-title">Elegant Event Venues</h1>
            <p class="page-subtitle">Exceptional spaces for your unforgettable events</p>
        </div> -->
        <div class="rooms-gallery">
            <div class="room-item" v-for="(room, index) in eventRooms" :key="index">
                <div class="room-image-wrapper">
                    <img :src="room.image" :alt="room.name" class="room-image">
                    <div class="room-overlay">
                        <div class="room-details">
                            <h3>{{ room.name }}</h3>
                            <p class="capacity">Capacity: {{ room.capacity }}</p>
                            <div class="room-amenities">
                                <span v-for="amenity in room.amenities" :key="amenity" class="amenity-tag">
                                    {{ amenity }}
                                </span>
                            </div>
                            <button class="book-btn">Reserve Now</button>
                        </div>
                    </div>
                </div>
                <div class="room-info">
                    <h3 class="room-name">{{ room.name }}</h3>
                    <p class="room-description">{{ room.description }}</p>
                    <div class="room-specs">
                        <div class="spec-item">
                            <strong>Capacity:</strong> {{ room.capacity }}
                        </div>
                        <div class="spec-item">
                            <strong>Rate:</strong> {{ room.rate }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EventRoomPage",
    bodyClass: "eventRoom-page",
    data() {
        return {
            eventRooms: [
                {
                    name: "Grand Ballroom",
                    image: "https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg",
                    description: "Opulent ballroom perfect for weddings and gala dinners",
                    capacity: "200 people",
                    rate: "$500/hour",
                    amenities: ["Chandelier Lighting", "Dance Floor", "Premium Sound System", "Catering Services"]
                },
                {
                    name: "Garden Terrace",
                    image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg",
                    description: "Open-air venue for outdoor ceremonies and receptions",
                    capacity: "150 people",
                    rate: "$300/hour",
                    amenities: ["Scenic Garden View", "String Lighting", "Outdoor Seating", "Event Planning"]
                },
                {
                    name: "Skyline Lounge",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
                    description: "Chic rooftop space for cocktail parties and social events",
                    capacity: "80 people",
                    rate: "$250/hour",
                    amenities: ["City View", "Bar Setup", "Ambient Lighting", "DJ Booth"]
                },
                {
                    name: "Crystal Hall",
                    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
                    description: "Elegant hall for large-scale conferences and banquets",
                    capacity: "300 people",
                    rate: "$600/hour",
                    amenities: ["Stage Platform", "High-Tech AV", "Customizable Layout", "VIP Lounge"]
                },
                {
                    name: "Intimate Salon",
                    image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
                    description: "Cozy venue for private celebrations and small gatherings",
                    capacity: "30 people",
                    rate: "$150/hour",
                    amenities: ["Fireplace", "Luxury Seating", "Private Bar", "Mood Lighting"]
                },
                {
                    name: "Theater Studio",
                    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
                    description: "Modern space for performances and creative events",
                    capacity: "100 people",
                    rate: "$350/hour",
                    amenities: ["Theater Lighting", "Stage Setup", "Surround Sound", "Backstage Area"]
                }
            ]
        }
    },
}
</script>
<style scoped>
.events-page {
    padding: 2rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
}

.page-header {
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 2rem;
}

.page-title {
    font-size: 3rem;
    color: #1a237e;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: slideInFromLeft 1s ease-out;
}

.page-subtitle {
    font-size: 1.2rem;
    color: #666;
    font-weight: 300;
    animation: slideInFromRight 1s ease-out 0.3s both;
}

.rooms-gallery {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 3rem;
}

.room-item {
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: zoomIn 0.8s ease-out;
}

.room-item:hover {
    transform: translateY(-20px) rotateX(5deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.room-image-wrapper {
    position: relative;
    height: 280px;
    overflow: hidden;
}

.room-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.8s ease;
    filter: brightness(1.1) contrast(1.1);
}

.room-item:hover .room-image {
    transform: scale(1.15);
    filter: brightness(0.8) contrast(1.2);
}

.room-overlay {
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
    transition: all 0.5s ease;
    backdrop-filter: blur(5px);
}

.room-item:hover .room-overlay {
    opacity: 1;
}

.room-details {
    text-align: center;
    color: white;
    padding: 2rem;
    transform: translateY(30px) scale(0.9);
    transition: all 0.5s ease;
}

.room-item:hover .room-details {
    transform: translateY(0) scale(1);
}

.room-details h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.capacity {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.room-amenities {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.amenity-tag {
    background: #f0f4f8;
    color: #1a237e;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
}

.amenity-tag:hover {
    background: #D4AF37;
    color: white;
    transform: scale(1.05);
}

.book-btn {
    background: #D4AF37;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.book-btn:hover {
    background: #B8941F;
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.4);
}

.room-info {
    padding: 2.5rem;
}

.room-name {
    font-size: 1.5rem;
    color: #1a237e;
    font-weight: 600;
    margin-bottom: 1rem;
}

.room-description {
    color: #666;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1rem;
}

.room-specs {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.spec-item {
    font-size: 1rem;
    color: #333;
}

.spec-item:last-child {
    color: #D4AF37;
    font-size: 1.2rem;
    font-weight: 700;
}

@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media (max-width: 768px) {
    .rooms-gallery {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 0 1rem;
    }

    .page-title {
        font-size: 2.5rem;
    }

    .room-image-wrapper {
        height: 220px;
    }

    .room-info {
        padding: 2rem;
    }

    .room-specs {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }

    .rooms-gallery {
        padding: 0 0.5rem;
    }

    .room-details {
        padding: 1.5rem;
    }

    .room-details h3 {
        font-size: 1.5rem;
    }

    .amenity-tag {
        font-size: 0.8rem;
        padding: 0.2rem 0.6rem;
    }
}
</style>