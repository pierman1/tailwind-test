<template>
  <div class="bg-black h-screen w-full fixed z-40 t-0 flex flex-col justify-between lg:bg-white lg:hidden lg:relative lg:h-auto" 
    v-show="menuOpen"
    :class="{'visible': menuOpen, 'show-it hidden lg:block': hideOnMobile}">
    <div class="flex w-full flex-col mt-12 lg:flex-row lg:mt-0 justify-between">
      <div class="lg:flex lg:flex-row">
        <button v-for="(item, index) in menuItems"
        :key="`menu_item_${index}`"
        class="menu-item-primary shadow-inner" @mouseover="showMenu(item.subMenuRef)"  @mouseout="hideMenu">
          <span>{{item.title}}</span>
          <svg class="arrow self-center" width="13" height="12" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.2-Menu" transform="translate(-328 -79)" fill="#C1C1C1"><g id="Group-11" transform="translate(0 50)"><g id="Group-6" transform="translate(320 20)"><path d="M20.64 14.75a.9.9 0 0 0-.07-.33v-.02a.94.94 0 0 0-.2-.3l-4.46-4.46a.92.92 0 0 0-1.3 1.3l2.9 2.9H9.67a.91.91 0 0 0 0 1.83h7.86l-2.9 2.9a.92.92 0 0 0 1.29 1.3l4.46-4.47a.92.92 0 0 0 .2-.3v-.01c.04-.1.07-.22.07-.34z" id="Page-1"/></g></g></g></g></svg>
          <svg v-if="item.subMenu" :class="{active: activeMenu === item.subMenuRef}" class="chevron hidden self-center lg:block ml-2" width="10" height="5" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="1.3-Home-Menu-Foldout" transform="translate(-405 -138)" fill="#80868A" fill-rule="nonzero"><g id="Group-14" transform="translate(170 100)"><g id="Stacked-Group-Copy-2" transform="translate(110 30)"><g id="Stacked-Group" transform="translate(87)"><path id="n" d="M43.06 13.04l-4.2-4.2.65-.67 3.55 3.54 3.54-3.54.67.66z"/></g></g></g></g></g></svg>
        </button>
      </div>

      <div class="hidden lg:block lg:flex lg:flex-row">
        <div class="hidden border-l border-light-gray w-12 h-12 shadow-inner flex justify-center lg:h-20 lg:w-20 lg:flex">
          <svg class="self-center" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-293 -19)" fill="#606060" fill-rule="nonzero"><g id="Group-7"><g id="Group-3" transform="translate(275)"><path d="M31.2 31.31l-.89.89-3.29-3.3a5.08 5.08 0 0 1-6.75-.4 5.07 5.07 0 0 1 0-7.23 5.1 5.1 0 0 1 7.64 6.75l3.29 3.3zm-10.05-3.7a3.84 3.84 0 0 0 5.47 0 3.86 3.86 0 1 0-5.47 0z" id="s"/></g></g></g></g></svg>
        </div>
        <div class="hidden border-l border-light-gray w-12 h-12 shadow-inner flex justify-center lg:h-20 lg:w-56 lg:px-4 lg:items-center lg:flex">
          <svg class="self-center lg:hidden" width="15" height="14" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-342 -19)" fill="#606060" fill-rule="nonzero"><g id="Group-7"><g id="Group-2" transform="translate(325)"><path d="M20.88 33c-1.61 0-2.84-1.66-3.3-3.22-.21-.76-.03-1.18.7-1.5a182.7 182.7 0 0 0 2.87-1.3c.2-.08.4-.17.63-.17.42 0 .7.28.84.42l.7.7a9.16 9.16 0 0 0 3.1-3.11l-.7-.7c-.52-.52-.48-.93-.24-1.46a182.7 182.7 0 0 0 1.31-2.88c.1-.26.34-.78.98-.78.17 0 .35.05.51.1 1.56.45 3.24 1.68 3.22 3.31-.02 1.63-1.29 4.53-3.68 6.92-2.38 2.38-5.28 3.65-6.91 3.67h-.03zm-2.1-3.58v.02c.34 1.14 1.21 2.31 2.1 2.31h.01c1.16 0 3.79-1.05 6.06-3.3 2.25-2.26 3.3-4.9 3.3-6.05.02-.9-1.17-1.77-2.32-2.11l-.82 1.8-.5 1.07c0 .03 0 .04-.02.06l.02.02 1.34 1.34-.2.4c-.02.04-.6 1.26-1.8 2.47-1.2 1.2-2.43 1.78-2.47 1.8l-.4.2-1.35-1.34-.01-.02-.06.03-1.08.49c-.6.28-1.28.59-1.8.81z" id="p"/></g></g></g></g></svg>
          <button class="hidden bg-red w-full text-xs text-white font-bold uppercase h-12 px-4 lg:block">Neem contact op</button>
        </div>
      </div>
    </div>

    <div class="sub-menu border-t border-light-gray flex"
      v-for="(menuSecondary, index) in menuItems"
      :key="`prim_${index}`"
      v-if="menuSecondary.subMenu && activeMenu === menuSecondary.subMenuRef"
      :class="{'active': activeMenu === menuSecondary.subMenuRef}">

      <ul class="w-3/12 bg-white">
        <li v-for="(item, index) in menuSecondary.subMenu"
          :index="`sub_${index}`"
          class="font-body-light h-20"
          @mouseover="setActiveSubMenu(item.subMenuRef)">
          <a class="w-full h-full px-8 flex items-center cursor-pointer bg-white hover:bg-light-gray border-l-4 border-transparent hover:bg-light-red hover:border-red">
            <span class="uppercase">
              {{item.title}}
            </span>
          </a>
        </li>
      </ul>

      <ul class="w-9/12 bg-white bg-light-gray flex flex-wrap border-r border-light-gray"
      :key="`menu_${index}`"
      v-if="menuSecondary.subSubMenu">
        <li v-for="(it, index) in menuSecondary.subSubMenu" class="font-body-light h-20 w-2/6 border-b border-l border-menu-darker">
          <a class="w-full h-full px-8 flex items-center cursor-pointer border-l-4 border-transparent hover:bg-light-red hover:border-red">
            <span class="uppercase">
              {{it.title}}
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div class="bottom-section flex flex-col w-full lg:hidden">
      <div class="flex w-full h-16 shadow-inner">
        <div class="flex w-full justify-center content-center">
          <svg class="self-center" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g id="Desktop---design" fill="none" fill-rule="evenodd"><g id="M1.1-Home-Copy" transform="translate(-293 -19)" fill="#ffffff" fill-rule="nonzero"><g id="Group-7"><g id="Group-3" transform="translate(275)"><path d="M31.2 31.31l-.89.89-3.29-3.3a5.08 5.08 0 0 1-6.75-.4 5.07 5.07 0 0 1 0-7.23 5.1 5.1 0 0 1 7.64 6.75l3.29 3.3zm-10.05-3.7a3.84 3.84 0 0 0 5.47 0 3.86 3.86 0 1 0-5.47 0z" id="s"/></g></g></g></g></svg>
        </div>
        <div class="flex w-full justify-center text-white align-middle items-center border-left">
          <span>NL</span>
        </div>
      </div>
      <div class="w-full p-4">
        <button class="bg-red w-full text-xs text-white font-bold uppercase h-12">
          Neem contact op
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export const MenuEventBus = new Vue();

export default {
  name: 'Menu',
  props: {
    hideOnMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuOpen: false,
      activeMenu: '',
      activeSubMenu: '',
      menuItems: [
        {
          title: 'Nieuw',
          url: '',
          subMenuRef: 'new',
          subMenu: [
            {
              title: 'Snelwissels',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2,
              subMenu: [
                {
                  title: 'Palletvorken 2'
                }
              ]
            },
            {
              title: 'Sloophamers',
              url: '',
              subMenuRef: 3,
              subMenu: [
                {
                  title: 'Sloophamers 2'
                }
              ]
            }
          ],
          subSubMenu: [
            {
              title: 'Snelwissels 1',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken 1',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Palletvorken 1',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Snelwissels 1',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Snelwissels',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
          ]
        },
        {
          title: 'Used',
          url: '',
          subMenuRef: 'used',
          subMenu: [
            {
              title: 'Snelwissels 1',
              url: '',
              subMenuRef: 1,
              subMenu: [
                {
                  title: 'Snelwissels 2'
                }
              ]
            },
            {
              title: 'Palletvorken 1',
              url: '',
              subMenuRef: 2,
              subMenu: [
                {
                  title: 'Palletvorken 2'
                }
              ]
            },
            {
              title: 'Sloophamers 1',
              url: '',
              subMenuRef: 3,
              subMenu: [
                {
                  title: 'Sloophamers 2'
                }
              ]
            }
          ],
          subSubMenu: [
            {
              title: 'Snelwissels',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Snelwissels',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Snelwissels',
              url: '',
              subMenuRef: 1
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
            {
              title: 'Palletvorken',
              url: '',
              subMenuRef: 2
            },
          ]
        },
        {
          title: 'Verhuur',
          url: ''
        },
        {
          title: 'Parts & Service',
          url: ''
        },
        {
          title: 'Over verachtert',
          url: ''
        }
      ]
    }
  },
  methods: {
    showMenu (menu) {
      console.log('showMenu', menu)
      this.activeMenu = menu
    },
    setActiveSubMenu (menu) {
      console.log('activeSubMenu', menu)
      this.activeSubMenu = menu
    },
    hideMenu () {
      // this.activeMenu = ''
    }
  },
  mounted () {
    MenuEventBus.$on('toggle-got-clicked', () => {
      this.menuOpen = !this.menuOpen
    })
  }
}
</script>

<style lang="postcss" scoped>
.menu-item-primary {
  /* border-bottom: 1px solid gray; */
  @apply w-full;
  @apply flex;
  @apply justify-between; 
  @apply align-middle;
  @apply content-center; 
  @apply text-left;
  @apply font-body-light;
  @apply uppercase;
  @apply h-20;
  @apply text-white;
  @apply px-8;
  @apply relative;
}

.menu-item-primary:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  @apply bg-red;
  opacity: 0;
}

.menu-item-primary:hover:before, .menu-item-primary.active:before {
  content: '';
  opacity: 1;
}

@screen lg {
  .menu-item-secondary {
    @apply w-1/4;
    margin-left: -32px;
    padding: 0 30px;
    @apply h-20;
    @apply flex;
    @apply justify-between; 
    @apply items-center;
    @apply content-center; 
    @apply bg-white;
    @apply text-center;
    
    span {
      @apply block;
      margin: 0 auto;
    }
  }

  .sub-menu {
    @apply absolute w-full;
    width: calc(100% + 1px);
  }
}


.shadow-inner {
  box-shadow: inset 0 -1px 0 0 #383E42;
}

.bottom-section {
  border-top: 1px solid #383E42;
}

.border-left {
  border-left: 1px solid #383E42;
}

.chevron {
  margin-top: -4px;
  transition: 250ms;
}

.chevron.active {
  transform: rotate(-180deg);
}

.visible {
  /* @apply block; */
}

@screen lg {
  .show-it {
    display: block !important;
  }

  .menu-item-primary { 
    @apply text-black;
  }

  .menu-item-primary > .arrow {
    display: none;
  }

  .shadow-inner {
    box-shadow: none;
  }
}
</style>