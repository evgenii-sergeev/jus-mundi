
<template>
    <Swiper
      :slides-per-view="4"
      :loop="false"
      :centeredSlides="true"
      :spaceBetween="24"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(card, idx) in cards" :key="idx">
        <div class="newsfeed-card">
            <p class="newsfeed-card__text">{{ card.text }}</p>
            <a href="#" class="newsfeed-card__link">Read more</a>
        </div>
      </SwiperSlide>
    </Swiper>
  </template>

<script setup>
const cards = useState(() => [
    {
        id: 1,
        text: 'Corsair becomes the latest airline to pilot ICC AOKpass',
        url: '#'
    },
    {
        id: 2,
        text: 'ICC warns EU vaccine export controls must be rolled back without delay',
        url: '#'
    },
    {
        id: 3,
        text: 'Eduardo Silva Romero talks of advancing diversity, scope of ICC Institute as new Chair',
        url: '#'
    },
    {
        id: 4,
        text: 'ICC/UNICEF: Funding shortfalls and supply chain challenges threaten equitable vaccine distribution',
        url: '#'
    },
    {
        id: 5,
        text: 'ICC Trading Thoughts with Karima-Catherine Goundiam, founder of B2beeMatch',
        url: '#'
    },
    {
        id: 6,
        text: 'Guest blog: Making arbitration work in a down market',
        url: '#'
    }
])
</script>