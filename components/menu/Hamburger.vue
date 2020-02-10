<template>
  <button class="hamburger relative w-5 h-3 self-center" @click="$emit('clicked')">
    <div class="bg-gray w-full absolute"></div>
    <div class="bg-gray w-full absolute"></div>
    <div class="bg-gray w-full absolute"></div>
  </button>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 1px;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
  }

  &:nth-child(3) {
    top: 100%;
  }
}
</style>