<template>
    <Swiper
        :modules="[SwiperFreeMode]"
        :slides-per-view="4"
        :breakpoints = "{
            320: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            480: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            1441: {
                slidesPerView: 5,
                spaceBetween: 24
            }
        }"
        :loop="false"
        :spaceBetween="24"
        :slidesOffsetBefore="slidesOffsetBefore"
        :slidesOffsetAfter="slidesOffsetAfter"
        :freeMode="{
            enabled: true,
            freeModeMomentum: true,
            freeModeMomentumRatio: 0.5, 
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
      <!-- <SwiperControls @setSwiper="onSetSwiper"/> -->
    </Swiper>
  </template>

<script setup>
const slidesOffsetBefore = ref(0)
const slidesOffsetAfter = ref(0)
onBeforeMount(() => {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const containerWidth = document.querySelector('.content')?.offsetWidth
    slidesOffsetBefore.value = (windowWidth - containerWidth)
    slidesOffsetAfter.value = (windowWidth - containerWidth) / 2
})
const props = defineProps(['sliderInitialOffset'])
let swiperInstace = null
const onSetSwiper = (swiper) => {
    swiperInstace = swiper
    watch(() => props.sliderInitialOffset, () => {
        swiperInstace.value.translateTo(0)
    })
}
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