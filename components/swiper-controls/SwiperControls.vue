
<template></template>
<script setup lang="ts">
const emit = defineEmits(['setSwiper'])
onMounted(() => {
    const swiper = useSwiper() 
    emit('setSwiper', swiper)
})

</script>