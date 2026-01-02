<template>
  <div id="download-section" class="footer-container">
    <div class="links-section">
      <div
        v-for="(item, i) in boutons"
        :key="i"
        v-motion="{
          initial: { opacity: 0, y: 100 },
          enter: { opacity: 1, y: 0, transition: { delay: 700 } },
        }"
        class="link-item"
      >
        <router-link v-popover:popover1 class="navbar-brand" :to="item.url">
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div class="contact-section">
      <div
        v-motion="{
          initial: { opacity: 0, y: 100 },
          enter: { opacity: 1, y: 0, transition: { delay: 700 } },
        }"
        class="logo-container"
      >
        <img :src="logo" alt="logo" class="logo" />
      </div>
      <div class="contact-info">
        <h5
          v-motion="{
            initial: { opacity: 0, y: 100 },
            enter: { opacity: 1, y: 0, transition: { delay: 700 } },
          }"
          class="contact-text"
        >
          Boulevard de l’Europe, Ankasina Antananarivo,
          <br />
          Madagascar
        </h5>
        <h5
          v-motion="{
            initial: { opacity: 0, y: 100 },
            enter: { opacity: 1, y: 0, transition: { delay: 700 } },
          }"
          class="contact-email"
        >
          mail: info@zarahotel.mg
        </h5>
        <h5
          v-motion="{
            initial: { opacity: 0, y: 100 },
            enter: { opacity: 1, y: 0, transition: { delay: 800 } },
          }"
          class="description"
        >
          +261 32 07 088 88
          <br />
          +261 33 50 088 88
        </h5>
      </div>
    </div>

    <div class="social-section">
      <h3
        v-motion="{
          initial: { opacity: 0, y: 100 },
          enter: { opacity: 1, y: 0, transition: { delay: 500 } },
        }"
        class="social-title"
      >
        Suivez-nous
      </h3>

      <div class="social-buttons">
        <!-- Twitter (ajouter un lien si besoin) -->
        <div class="social-item">
          <v-btn
            v-motion="{
              initial: { opacity: 0, x: 100 },
              enter: { opacity: 1, x: 0, transition: { delay: 900 } },
            }"
            variant="text"
            class="social-btn"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </v-btn>
        </div>

        <!-- Facebook -->
        <div class="social-item">
          <a
            href="https://www.facebook.com/ZaraHotels"
            target="_blank"
            rel="noopener"
            class="social-link"
            aria-label="ZARA HOTEL on Facebook"
          >
            <v-btn
              v-motion="{
                initial: { opacity: 0, x: 100 },
                enter: { opacity: 1, x: 0, transition: { delay: 1000 } },
              }"
              variant="text"
              class="social-btn"
            >
              <i class="fab fa-facebook-square"></i>
            </v-btn>
          </a>
        </div>

        <!-- Instagram -->
        <div class="social-item">
          <a
            href="https://www.instagram.com/zarahotel_antananarivo"
            target="_blank"
            rel="noopener"
            class="social-link"
            aria-label="ZARA HOTEL on Instagram"
          >
            <v-btn
              v-motion="{
                initial: { opacity: 0, x: 100 },
                enter: { opacity: 1, x: 0, transition: { delay: 1100 } },
              }"
              variant="text"
              class="social-btn"
            >
              <i class="fab fa-instagram"></i>
            </v-btn>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logo: require('@/assets/img/zara-hotel-logo-final.png'),
        boutons: [
          {
            url: 'hotel',
            name: 'HOTEL',
          },
          {
            url: 'service',
            name: 'SERVICES',
          },
          {
            url: 'chambre',
            name: 'CHAMBRE',
          },
          {
            url: 'contact',
            name: 'CONTACTS',
          },
        ],
        secondAnim: true,
      };
    },
  };
</script>

<style scoped>
  .footer-container {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .links-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .link-item {
    margin-bottom: 25px;
  }

  .navbar-brand {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .navbar-brand:hover {
    color: #ccc;
  }

  .contact-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-container {
    margin-bottom: 15px;
  }

  .contact-email {
    text-align: center;
    font-size: 17px;
    margin: 15px 0;
    margin-top: 10px;
    color: #fff;
  }

  .social-section {
    padding: 40px 0;
    text-align: center;
  }

  .logo {
    height: 80px;
    width: 110px;
    object-fit: contain;
  }

  .contact-text {
    text-align: center;
    font-size: 17px;
    margin: 15px 0;
    color: #fff;
  }

  .description {
    text-align: center;
    margin: 15px 0;
    color: #fff;
    font-size: 15px;
  }

  .social-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .social-title {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .social-btn {
    color: #fff;
    font-size: 1.5rem;
    height: auto;
  }

  .social-btn i {
    font-size: 2rem;
    margin: 10px 0;
    transition: color 0.3s ease;
  }

  .social-btn i:hover {
    color: #ccc;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
    }

    .links-section,
    .contact-section,
    .social-section {
      width: 100%;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .link-item {
      width: 100%;
      text-align: center;
    }

    .navbar-brand {
      font-size: 1rem;
    }

    .logo {
      height: 60px;
      width: 90px;
    }

    .contact-text,
    .description {
      font-size: 14px;
      margin: 10px 0;
    }

    .social-title {
      font-size: 1.2rem;
    }

    .social-btn i {
      font-size: 1.8rem;
      margin: 8px 0;
    }
  }

  @media (max-width: 480px) {
    .footer-container {
      padding: 1rem;
    }

    .navbar-brand {
      font-size: 0.9rem;
    }

    .logo {
      height: 50px;
      width: 80px;
    }

    .contact-text,
    .description {
      font-size: 13px;
      margin: 8px 0;
    }

    .social-title {
      font-size: 1rem;
    }

    .social-btn i {
      font-size: 1.5rem;
      margin: 6px 0;
    }
  }
</style>
