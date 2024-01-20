<template>
    <div class="page">
        <hero-section />
        <information-section />
        <newsfeed-section />
        <footer-section />
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Jus Mundi',
  ogTitle: 'Jus Mundi',
  description: 'This is Just Mundi site, let me tell you all about it.',
  ogDescription: 'This is Just Mundi site, let me tell you all about it.',
  ogImage: '/images/log_js.svg',
  twitterCard: 'summary_large_image',
})
</script>