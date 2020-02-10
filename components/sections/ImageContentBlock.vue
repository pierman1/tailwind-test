<template>
  <div class="image-content-block pt-6 lg:pb-48 bg-light-gray">
    <div class="lg:max-w-4xl lg:m-auto lg:flex lg:flex-row-reverse lg:relative">
      <div class="w-full h-64 bg-cover lg:h-auto overflow-hidden relative lg:bg-center" :style="{'background-image': `url(${require('~/assets/images/dummy.jpg')})`}">
        <svg class="absolute right-0 lg:hidden" width="87" height="261" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-288 -1919)" fill="#EE2E24"><g id="Group-12" transform="translate(-1 1899)"><g id="Rectangle-Copy-21"><path id="Fill-2" style="mix-blend-mode:multiply" transform="matrix(-1 0 0 1 889.95 0)" d="M507.28 0l93.67 281-311.95-.3V.09z"/></g></g></g></g></svg>
        <svg class="absolute right-0 hidden lg:block" width="184" height="546" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="1.0-Home" transform="translate(-1086 -2668)" fill="#EE2E24"><g id="Group-9" transform="translate(330 2668)"><g id="Rectangle-Copy-8" transform="translate(480)"><path id="Fill-2" style="mix-blend-mode:multiply" transform="matrix(-1 0 0 1 1163.23 0)" d="M703.35-3l183 549-609.47-.6V-2.81z"/></g></g></g></g></svg>
      </div>
      <div class="w-full bg-black px-4 py-6 lg:px-10 lg:py-12">
        <badge title="Verhuur" color="red" class="lg:mb-4"/>
        <h3 class="font-body-light text-4xl text-white mb-4 mt-2 leading-none lg:mb-6">Tijdelijke tools nodig?<br>
        Huur nu bij Verachtert.</h3>

        <p class="text-gray font-sans mb-2">
          In 60 jaar heeft Verachtert zich ontwikkeld tot specialist in Work Tools voor alle merken en typen graafmachines en wielladers.
        </p>
        <p class="text-gray font-sans mb-2">
          Verachtert producten staan voor kwaliteit en productiviteit, en worden dagelijks intensief ingezet.
        </p>

        <a href="#" class="btn text-white border border-white px-4 py-2 mt-6 inline-block">
          Bekijk verhuur
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '~/components/badge/Badge'
export default {
  name: 'ImageContentBlock',
  components: {
    Badge
  }
}
</script>

