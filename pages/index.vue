<template>
  <main class="overflow-hidden">
    <hero/>
    <categories/>
    <new-tools/>
    <image-content-block/>
  </main>
</template>

<script>
import Hero from '~/components/sections/Hero'
import Categories from '~/components/sections/Categories'
import NewTools from '~/components/sections/NewTools'
import ImageContentBlock from '~/components/sections/ImageContentBlock'

export default {
  components: {
    Hero,
    Categories,
    NewTools,
    ImageContentBlock
  }
}
</script>

