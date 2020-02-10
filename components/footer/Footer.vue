<template>
  <div class="footer w-full bg-black flex flex-col">
    <!-- <div>
      Joe
    </div> -->
    <div class="w-full lg:border-t lg:border-gray bg-off-black lg:h-24 flex justify-center">
      <div class="w-full flex flex-row lg:max-w-6xl lg:m-auto">
        <ul class="w-full p-4 py-10 lg:w-auto lg:flex lg:flex-row">
          <li class="sub-list-item">
            Verachtert Nederland B.V.
          </li>
          <li class="sub-list-item">
            De Bloemdaal 8
          </li>
          <li class="sub-list-item">
            5221 EC 's Hertogenbosch
          </li>
          <li class="sub-list-item">
            +31 73 640 41 11
          </li>
        </ul>
        <ul class="w-full p-4 py-10 lg:w-auto lg:flex lg:flex-row">
          <li class="sub-list-item">
            Beleidsvoorwaarden
          </li>
          <li class="sub-list-item">
            Privacy
          </li>
          <li class="sub-list-item">
            Terms of sale
          </li>
          <li class="sub-list-item">
            Terms of service
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="postcss">
.sub-list-item {
  @apply text-xxs;
  color: #606060;
}

.sub-list-item:first-of-type {
  @apply text-white;
  @apply font-sans-medium;
}

@screen lg {
  .sub-list-item {
    @apply mr-4;
    @apply border-0;
  }
}
</style>
