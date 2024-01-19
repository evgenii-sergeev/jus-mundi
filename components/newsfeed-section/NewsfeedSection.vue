<template>
    <main class="newsfeed" @mousemove.stop="onMouseOver">
        <div class="content newsfeed__content">
            <h5 class="newsfeed__title">Newsfeed</h5>
            <p class="newsfeed__text">
                ICC International Court of Arbitration News & Links
            </p>
        </div>
        <div class="cards-swiper">
            <CardsSwiper :sliderInitialOffset="sliderInitialOffset"/>
        </div>
        <div class="content newsfeed__content">
            <a href="#" class="newsfeed__link">
                read all news
            </a>
        </div>
    </main>
</template>

<script setup>
const sliderInitialOffset = ref(85)
const onMouseOver = () => {
    if (!sliderInitialOffset.value) return
    sliderInitialOffset.value = 0
}

</script>