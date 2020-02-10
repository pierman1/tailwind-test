<template>
  <header class="fixed w-full z-50 lg:m-auto lg:flex lg:justify-center">
    <div class="w-full flex items-center bg-white lg:max-w-6xl">
      <div class="w-12 h-12 bg-black shadow-inner flex justify-center lg:h-20 lg:w-24">
        <svg class="self-center" width="34" height="16" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-8 -17)" fill="#EE2E24"><g id="Group-7"><g id="Group-6"><g id="Group-5" transform="translate(8 17)"><path d="M0 .07c.82 3.1 2.94 8.81 0 15.27h7.67s1.8-5.32 1.46-8.58c-.32-3.27-.98-5.22-1.47-6.7L0 .08" id="Fill-1"/><path id="Fill-2" d="M8.84 5.62h8L20.29 15l5.64-15h7.76l-5.23 15.33h-16.5l-3.11-9.7"/></g></g></g></g></g></svg>
      </div>
      <menu-main hideOnMobile></menu-main>
      <div class="flex w-12 h-12 shadow-inner justify-center lg:hidden">
        <hamburger :open="false" @clicked="toggleMenu"/>
      </div>
      <div class="flex-grow content-center lg:hidden">
        <svg class="mx-auto" width="114" height="9" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-130 -21)" fill="#000"><g id="Group-7"><g id="Group" transform="translate(130 21)"><path id="Fill-4" d="M0 .39h4.61L6 5.7h.03L7.2.38h4.6l-2.7 8.39H2.91L0 .4"/><path id="Fill-6" d="M12.5.38h9.79V2.4h-5.68v1.02h5.6V5.7h-5.6v.97h5.6v2.1H12.5V.38"/><path d="M23.23.38h7.02c2.36 0 4.46.11 4.46 2.4 0 1.64-.9 2.59-2.43 2.88 0 0 2.42 3.1 2.39 3.1h-4.75l-2.2-2.62v2.62h-4.49V.38zm4.5 3.85h1.08c.84 0 1.67.08 1.67-.93 0-.97-.78-.86-1.61-.86h-1.14v1.79zM92.25.35h7.02c2.36 0 4.46.12 4.46 2.4 0 1.64-.9 2.59-2.43 2.88 0 0 2.42 3.1 2.39 3.1h-4.75l-2.2-2.61v2.61h-4.49V.36zm4.5 3.85h1.08c.84 0 1.67.08 1.67-.93 0-.97-.78-.86-1.61-.86h-1.14V4.2z" id="Combined-Shape"/><path d="M38.07.37h6.96l2.66 8.38H43.4l-.42-1.27H40.1l-.43 1.28h-4.37L38.07.37zm2.66 5.06h1.65l-.84-2.47-.81 2.47z" id="Fill-9"/><path d="M57.9 8.56c-.75.3-2.84.45-3.89.45-3.56 0-6.42-1.58-6.43-4.57 0-2.8 2.99-4.44 6.43-4.44a12 12 0 0 1 3.85.49V3.2c-.67-.16-2.3-.3-2.99-.3-1.75 0-2.88.46-2.88 1.58 0 1.16 1.04 1.72 2.75 1.72.75 0 2.4-.17 3.16-.38v2.73" id="Fill-11"/><path id="Fill-13" d="M65.41.36h4.53v8.39H65.4V6.29h-2.09v2.46h-4.38V.36h4.38v3.01h2.1v-3"/><path id="Fill-14" d="M80.38 3.56h-2.73v5.18h-4.38V3.56h-2.7V.36h9.81v3.2"/><path id="Fill-15" d="M113.9 3.55h-2.73v5.18h-4.38V3.55h-2.7V.35h9.81v3.2"/><path id="Fill-16" d="M81.33.36h9.8v2.01h-5.7v.99h5.72v2.31h-5.67v.98h5.68v2.09h-9.82V.36"/></g></g></g></g></svg>
      </div>
      <div class="w-12 h-12 shadow-inner flex justify-center lg:h-20 lg:w-20 lg:hidden">
        <svg class="self-center" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-293 -19)" fill="#606060" fill-rule="nonzero"><g id="Group-7"><g id="Group-3" transform="translate(275)"><path d="M31.2 31.31l-.89.89-3.29-3.3a5.08 5.08 0 0 1-6.75-.4 5.07 5.07 0 0 1 0-7.23 5.1 5.1 0 0 1 7.64 6.75l3.29 3.3zm-10.05-3.7a3.84 3.84 0 0 0 5.47 0 3.86 3.86 0 1 0-5.47 0z" id="s"/></g></g></g></g></svg>
      </div>
      <div class="w-12 h-12 shadow-inner flex justify-center lg:h-20 lg:w-auto lg:px-4 lg:items-center lg:hidden">
        <svg class="self-center lg:hidden" width="15" height="14" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-342 -19)" fill="#606060" fill-rule="nonzero"><g id="Group-7"><g id="Group-2" transform="translate(325)"><path d="M20.88 33c-1.61 0-2.84-1.66-3.3-3.22-.21-.76-.03-1.18.7-1.5a182.7 182.7 0 0 0 2.87-1.3c.2-.08.4-.17.63-.17.42 0 .7.28.84.42l.7.7a9.16 9.16 0 0 0 3.1-3.11l-.7-.7c-.52-.52-.48-.93-.24-1.46a182.7 182.7 0 0 0 1.31-2.88c.1-.26.34-.78.98-.78.17 0 .35.05.51.1 1.56.45 3.24 1.68 3.22 3.31-.02 1.63-1.29 4.53-3.68 6.92-2.38 2.38-5.28 3.65-6.91 3.67h-.03zm-2.1-3.58v.02c.34 1.14 1.21 2.31 2.1 2.31h.01c1.16 0 3.79-1.05 6.06-3.3 2.25-2.26 3.3-4.9 3.3-6.05.02-.9-1.17-1.77-2.32-2.11l-.82 1.8-.5 1.07c0 .03 0 .04-.02.06l.02.02 1.34 1.34-.2.4c-.02.04-.6 1.26-1.8 2.47-1.2 1.2-2.43 1.78-2.47 1.8l-.4.2-1.35-1.34-.01-.02-.06.03-1.08.49c-.6.28-1.28.59-1.8.81z" id="p"/></g></g></g></g></svg>
        <button class="hidden bg-red w-full text-xs text-white font-bold uppercase h-12 px-4 lg:block">Neem contact op</button>
      </div>
    </div>
  </header>
</template>

<script>
import Hamburger from  '~/components/menu/Hamburger'
import MenuMain from  '~/components/menu/Menu'
import { MenuEventBus } from '~/components/menu/Menu.vue';

export default {
  name: 'Header',
  components: {
    Hamburger,
    MenuMain
  },
  methods: {
    toggleMenu () {
      console.log('joe')
      MenuEventBus.$emit('toggle-got-clicked', () => {
        console.log('emit!')
      })
    }
  }
}
</script>

<style lang="scss">
.shadow-inner {
  box-shadow: inset -1px 0 4px 0 rgba(0, 0, 0, 0.06);
}
</style>