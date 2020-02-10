<template>
  <div class="categories w-full pt-20 pb-4 bg-light-gray">
    <div class="container lg:max-w-6xl lg:m-auto">
      <div class="w-full px-4 lg:px-0">
        <badge title="Nieuwe" color="red"/>
        <h2 class="title-primary">Work tools</h2>
      </div>

      <div class="flex flex-wrap px-4 lg:px-0">
        
        <no-ssr>
          <Flickity class="flick flex flex-wrap flex-row w-full lg:h-block-height" :options="{watchCSS: true, prevNextButtons: false, pageDots: false, contain: true, cellAlign: 'left', setGallerySize: false}">
            <div id="tools-carousel" class="w-6/12 bg-white lg:w-4/12 mb-4 lg:mr-4" v-for="(tool, index) in tools" :key="`tool_${index}`">
              <div class="w-full h-64 overflow-hidden">
                <img class="w-full" :src="require('~/assets/images/demo-tool-1.jpg')"/>
              </div>
              <div class="p-4">
                <h4 class="font-body-normal mb-2">{{tool.title}}</h4>

                <ul>
                  <li class="flex flex-col">
                    <span class="block text-gray">
                      Stock Number:
                    </span>
                    <span class="block">
                      {{tool.stock_number}}
                    </span>
                  </li>
                  <li class="flex flex-col">
                    <span class="block text-gray">
                      Hinges:
                    </span>
                    <span class="block">
                      {{tool.hinges}}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Flickity>
        </no-ssr>
        

      </div>
    </div>
  </div>
</template>
<script>
import Badge from '~/components/badge/Badge'

export default {
  name: 'NewTools',
  components: {
    Badge
  },
  data () {
    return {
      tools: [
        {
          title: 'Snelwissel CW30S-D.4.N',
          stock_number: '018804',
          hinges: 'CW55E'
        },
        {
          title: 'Snelwissel CW30S-D.4.N',
          stock_number: '018804',
          hinges: 'CW55E'
        },
        {
          title: 'Snelwissel CW30S-D.4.N',
          stock_number: '018804',
          hinges: 'CW55E'
        },
        {
          title: 'Snelwissel CW30S-D.4.N',
          stock_number: '018804',
          hinges: 'CW55E'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/flickity.css';

.title-primary {
  @apply font-body text-black text-5xl uppercase font-bold;
}

.flick:after {
  content: '';
  @media (min-width: 640px) {
    content: 'flickity';
    display: none;
  }
}

</style>

<style>
.flickity-viewport {
  overflow: visible !important;
  width: 100%;
}
</style>