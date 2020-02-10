<template>
  <div class="categories w-full pt-20 pb-4 bg-light-gray">
    <div class="container lg:max-w-6xl lg:m-auto">
      <div class="w-full px-4 lg:px-0">
        <badge title="Nieuwe" color="red"/>
        <h2 class="title-primary">Work tools</h2>
      </div>

      <div class="flex flex-col w-full lg:flex-row">
        <div class="h-48 bg-black w-full relative bg-cover bg-center lg:w-full lg:h-block-height"
          :style="{'background-image': `url(${require('~/assets/images/background_graafmachines.jpg')})`}">
          <div class="background absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>

          <div class="skewd bg-white inline-block font-bold text-xl uppercase px-4 pr-6 py-6 absolute bottom-0 flex items-center h-20">
            <a href="#">
              <h3 class="flex flex-col title trans">
                <span class="inline-block text-xxs h-0 opacity-0 trans">Bekijk</span>
                Graafmachines
              </h3>
              <div class="arrow-container bg-white absolute right-0 top-2 z-20 vertical-align-center rounded-full border border-transparent p-2 flex justify-center items-center vertical-align-center">
                <svg class="" width="13" height="12" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g class="arrow" id="M1.2-Menu" transform="translate(-328 -79)" fill="#C1C1C1"><g id="Group-11" transform="translate(0 50)"><g id="Group-6" transform="translate(320 20)"><path d="M20.64 14.75a.9.9 0 0 0-.07-.33v-.02a.94.94 0 0 0-.2-.3l-4.46-4.46a.92.92 0 0 0-1.3 1.3l2.9 2.9H9.67a.91.91 0 0 0 0 1.83h7.86l-2.9 2.9a.92.92 0 0 0 1.29 1.3l4.46-4.47a.92.92 0 0 0 .2-.3v-.01c.04-.1.07-.22.07-.34z" id="Page-1"/></g></g></g></g></svg>
              </div>
            </a>
          </div>
        </div>
        <div class="h-48 bg-black w-full relative bg-cover bg-center lg:w-full lg:h-block-height"
          :style="{'background-image': `url(${require('~/assets/images/background-minigravers.jpg')})`}">
          <div class="background absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>

          <div class="skewd bg-white inline-block font-bold text-xl uppercase px-4 pr-6 py-6 absolute bottom-0 flex items-center h-20">
            <a href="#">
              <h3 class="flex flex-col title trans">
                <span class="inline-block text-xxs h-0 opacity-0 trans">Bekijk</span>
                Minigravers
              </h3>
              <div class="arrow-container bg-white absolute right-0 top-2 z-20 vertical-align-center rounded-full border border-transparent p-2 flex justify-center items-center vertical-align-center">
                <svg class="" width="13" height="12" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g class="arrow" id="M1.2-Menu" transform="translate(-328 -79)" fill="#C1C1C1"><g id="Group-11" transform="translate(0 50)"><g id="Group-6" transform="translate(320 20)"><path d="M20.64 14.75a.9.9 0 0 0-.07-.33v-.02a.94.94 0 0 0-.2-.3l-4.46-4.46a.92.92 0 0 0-1.3 1.3l2.9 2.9H9.67a.91.91 0 0 0 0 1.83h7.86l-2.9 2.9a.92.92 0 0 0 1.29 1.3l4.46-4.47a.92.92 0 0 0 .2-.3v-.01c.04-.1.07-.22.07-.34z" id="Page-1"/></g></g></g></g></svg>
              </div>
            </a>
          </div>
        </div>
        <div class="h-48 bg-black w-full relative bg-cover bg-center lg:w-full lg:h-block-height"
          :style="{'background-image': `url(${require('~/assets/images/background_wielladers.jpg')})`}">
          <div class="background absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>

          <div class="skewd bg-white inline-block font-bold text-xl uppercase px-4 pr-6 py-6 absolute bottom-0 flex items-center h-20">
            <a href="#">
              <h3 class="flex flex-col title trans">
                <span class="inline-block text-xxs h-0 opacity-0 trans">Bekijk</span>
                Wielladers
              </h3>
              <div class="arrow-container bg-white absolute right-0 top-2 z-20 vertical-align-center rounded-full border border-transparent p-2 flex justify-center items-center vertical-align-center">
                <svg class="" width="13" height="12" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g class="arrow" id="M1.2-Menu" transform="translate(-328 -79)" fill="#C1C1C1"><g id="Group-11" transform="translate(0 50)"><g id="Group-6" transform="translate(320 20)"><path d="M20.64 14.75a.9.9 0 0 0-.07-.33v-.02a.94.94 0 0 0-.2-.3l-4.46-4.46a.92.92 0 0 0-1.3 1.3l2.9 2.9H9.67a.91.91 0 0 0 0 1.83h7.86l-2.9 2.9a.92.92 0 0 0 1.29 1.3l4.46-4.47a.92.92 0 0 0 .2-.3v-.01c.04-.1.07-.22.07-.34z" id="Page-1"/></g></g></g></g></svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Badge from '~/components/badge/Badge'
export default {
  name: 'Categories',
  components: {
    Badge
  }
}
</script>

<style scoped>
.title-primary {
  @apply font-body text-black text-5xl uppercase font-bold;
}

.skewd:after {
  content: '';
  clip-path: polygon(100% 100%, 0 100%, 0 0, 55% 0);
  position: absolute;
  @apply bg-white;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -66px;
  width: 75px;
}

.skewd:before {
  transition: 250ms;
  content: '';
  clip-path: polygon(100% 100%, 0 100%, 0 0, 55% 0);
  position: absolute;
  @apply bg-red;
  top: 0;
  opacity: .7;
  bottom: 0;
  right: -67px;
  width: 75px;
}

.skewd:hover:before {
  content: '';
  right: -85px;
}

.title {
  height: 30px;
  transition: all .25s;
}

.skewd:hover .title {
  height: 50px;
}

.skewd .arrow-container:after {
  content: '';
  position: absolute;
  right: -33px;
  top: 50%;
  transform: translateY(-50%);
  @apply bg-red;
  height: 1px;
  width: 0px;
  transition: 250ms;
  transition-delay: 250ms;
  z-index: 0;
}

.skewd:hover .arrow-container:after {
  content: '';
  position: absolute;
  right: -33px;
  top: 50%;
  transform: translateY(-50%);
  @apply bg-red;
  height: 1px;
  width: 33px;
}

.skewd:hover .arrow-container {
  transition: 250ms;
  transition-delay: 500ms;
  @apply border-red;
}

.skewd:hover span {
  opacity: 1;
  height: auto;
  transition: 250ms;
}

.skewd:hover svg .arrow {
  transition: 250ms;
  transition-delay: 500ms;
  fill: #EE2E24;
}

.vertical-align-center {
  top: 50%;
  transform: translateY(-50%);
  right: -18px;
}


</style>
