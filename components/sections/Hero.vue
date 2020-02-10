<template>
  <section class="hero bg-gray-100 bg-center bg-cover relative font-body pt-64 h-64 lg:pt-20 lg:h-screen">
    <svg class="hidden lg:block lg:absolute lg:bottom-0" width="975" height="800" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="1.0-Home" transform="translate(-80 -100)" fill="#EE2E24"><g id="Group" transform="translate(80 100)"><g id="Rectangle-2"><g id="Group-6" transform="translate(-39 -63)"><path id="Fill-2" style="mix-blend-mode:multiply" d="M709.53 0L1014 864 0 863.07V.27z"/></g></g></g></g></g></svg>
    <div class="w-full absolute px-4 py-6 bottom-0 mt-4">
      <div class="w-full m-auto lg:max-w-6xl">
        <badge title="Onze missie" color="black"/>
        <h3 class="text-white font-bold text-4xl uppercase mt-1 leading-none lg:text-6xl lg:max-w-xl">Wereldwijd de nummer 1 op het gebied van worktools</h3>
        <div class="flex mt-5 lg:max-w-xl lg:mb-16">
          <button class="bg-red text-xs text-white font-bold py-2 px-4 w-full uppercase mr-1">
            Nieuwe worktools
          </button>
          <button class="bg-red text-xs text-white font-bold py-2 px-4 w-full uppercase ml-1 mr-1">
            Used worktools
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/images/hero_background--m.jpg'
import badge from '~/components/badge/Badge'

export default {
  name: 'Hero',
  components: {
    badge,
  },
  data () {
    return {
      background: bg
    }
  }
}
</script>

<style scoped>
.pt-64 {
  height: 26rem;
}

.hero {
  background-image: url('~@/assets/images/hero_background--m.jpg');
}

@screen lg {
  .hero {
    background-image: url('~@/assets/images/hero_background.jpg');
    min-height: 90vh;
  }
}
</style>

