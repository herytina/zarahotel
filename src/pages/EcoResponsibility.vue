<template>
  <div>
    <div class="page-header page-header-small">
      <v-parallax
        class="page-header-image"
        :src="require('@/assets/img/ecologie.jpg')"
      />
      <div class="content-center">
        <div class="container">
          <div
            v-motion="{
              initial: { opacity: 0, y: 200 },
              enter: { opacity: 1, y: 0, transition: { delay: 400 } },
            }"
            class="text-center"
          >
            <n-button type="warning" size="lg">
              <router-link
                to="/pricing"
                class="text-white"
                style="text-decoration: none"
              >
                <h1 class="hero-title">
                  Notre engagement pour un avenir durable
                </h1>
                <p class="hero-subtitle">
                  Nous agissons chaque jour pour réduire notre impact
                  environnemental et promouvoir un tourisme plus responsable.
                </p>
              </router-link>
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="eco-responsibility-page">
    <!-- <div class="hero-section">
      <h1 class="hero-title">Notre engagement pour un avenir durable</h1>
      <p class="hero-subtitle">
        Découvrez comment notre hôtel adopte des pratiques éco-responsables pour
        protéger la planète
      </p>
    </div> -->

    <div class="eco-commitments">
      <div
        class="commitment-card"
        v-for="(commitment, index) in commitments"
        :key="index"
      >
        <div class="commitment-icon">
          <img
            :src="commitment.icon"
            :alt="commitment.title"
            class="icon-image"
          />
        </div>
        <h3 class="commitment-title">{{ commitment.title }}</h3>
        <p class="commitment-description">{{ commitment.description }}</p>
      </div>
    </div>

    <div class="eco-gallery">
      <h2 class="gallery-title">Preuve de nos pratiques éco-responsables</h2>
      <div class="gallery-grid">
        <div
          class="gallery-item"
          v-for="(image, index) in ecoImages"
          :key="index"
        >
          <div class="gallery-image-wrapper">
            <img :src="image.src" :alt="image.caption" class="gallery-image" />
            <div class="gallery-overlay">
              <p class="gallery-caption">{{ image.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="eco-stats">
      <h2 class="stats-title">Notre impact environnemental</h2>
      <div class="stats-grid">
        <div class="stat-item" v-for="(stat, index) in stats" :key="index">
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- <div class="call-to-action">
      <h2 class="cta-title">Rejoignez-nous pour faire la différence</h2>
      <p class="cta-description">
        Séjournez chez nous et participez à notre démarche éco-responsable.
      </p>
      <button class="cta-button">En savoir plus</button>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'EcoResponsibilityPage',
    bodyClass: 'ecoResponsibility-page',
    data() {
      return {
        commitments: [
          {
            title: 'Efficacité Énergétique',
            description:
              'Nous utilisons des panneaux solaires et un éclairage économe en énergie pour réduire notre empreinte carbone.',
            icon: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
          },
          {
            title: 'Réduction des Déchets',
            description:
              'Nos programmes zéro déchet incluent des initiatives de compostage et de recyclage.',
            icon: 'https://images.pexels.com/photos/747999/pexels-photo-747999.jpeg',
          },
          {
            title: 'Matériaux Durables',
            description:
              'Nous privilégions les matériaux écologiques pour nos meubles et commodités.',
            icon: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg',
          },
          {
            title: "Conservation de l'Eau",
            description:
              "Des appareils à faible débit et la collecte d'eau de pluie nous aident à économiser l'eau.",
            icon: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg',
          },
        ],
        ecoImages: [
          {
            src: 'https://images.pexels.com/photos/110857/pexels-photo-110857.jpeg',
            caption: 'Panneaux solaires alimentant nos installations',
          },
          {
            src: 'https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg',
            caption: 'Station de recyclage et de compostage sur place',
          },
          {
            src: 'https://images.pexels.com/photos/103094/pexels-photo-103094.jpeg',
            caption: 'Meubles en bambou écologiques',
          },
          {
            src: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
            caption: "Système de collecte d'eau de pluie",
          },
        ],
        stats: [
          { value: '75%', label: 'Énergie issue des renouvelables' },
          { value: '90%', label: 'Déchets recyclés' },
          { value: '50k', label: "Litres d'eau économisés" },
          { value: '200+', label: 'Arbres plantés' },
        ],
      };
    },
  };
</script>

<style scoped>
  .eco-responsibility-page {
    padding: 0;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
  }

  .hero-section {
    text-align: center;
    padding: 4rem 2rem;
    background: url('https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg')
      no-repeat center center;
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
    margin-bottom: 1rem;
    position: relative;
    animation: fadeInDown 1s ease-out;
    z-index: 1;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    animation: fadeInUp 1s ease-out 0.3s both;
    z-index: 1;
  }

  .eco-commitments {
    max-width: 1200px;
    margin: 4rem auto 0;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .commitment-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    animation: fadeInUp 0.8s ease-out;
  }

  .commitment-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .commitment-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
    overflow: hidden;
    border-radius: 50%;
  }

  .icon-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .commitment-card:hover .icon-image {
    transform: scale(1.1);
  }

  .commitment-title {
    font-size: 1.5rem;
    color: rgb(221, 186, 71);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .commitment-description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  .eco-gallery {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;
  }

  .gallery-title {
    font-size: 2.5rem;
    color: rgb(221, 186, 71);
    font-weight: 700;
    margin-bottom: 2rem;
    animation: fadeInDown 1s ease-out;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10kx;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 0.8s ease-out;
  }

  .gallery-image-wrapper {
    position: relative;
    height: 200px;
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .gallery-item:hover .gallery-image {
    transform: scale(1.1);
  }

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(46, 125, 50, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .gallery-caption {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    text-align: center;
  }

  .eco-stats {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;
  }

  .stats-title {
    font-size: 2.5rem;
    color: rgb(221, 186, 71);
    font-weight: 700;
    margin-bottom: 2rem;
    animation: fadeInDown 1s ease-out;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .stat-item {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    animation: zoomIn 0.8s ease-out;
  }

  .stat-item:hover {
    transform: scale(1.05);
  }

  .stat-number {
    font-size: 2.5rem;
    color: rgb(221, 186, 71);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    color: #555;
  }

  .call-to-action {
    text-align: center;
    padding: 4rem 2rem;
    border-radius: 20px;
    margin: 0 2rem;
  }

  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: fadeInDown 1s ease-out;
  }

  .cta-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-button {
    background: #d4e157;
    color: rgb(221, 186, 71);
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

  .cta-button:hover {
    background: #c0ca33;
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeInDown {
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
    .hero-section {
      padding: 3rem 1rem;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .eco-commitments {
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }

    .gallery-grid {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .call-to-action {
      padding: 3rem 1rem;
      margin: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .gallery-title {
      font-size: 2rem;
    }

    .stats-title {
      font-size: 2rem;
    }

    .cta-title {
      font-size: 2rem;
    }

    .cta-button {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
  }
</style>
