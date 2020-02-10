<template>
  <div class="badge uppercase inline-block p-0" :class="color">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black',
      validator: value => {
        return ['red', 'black'].find(color => value === color)
      }
    }
  }
}
</script>

<style scoped>
.red {
  @apply bg-red text-white text-xs font-bold py-1 px-1;
}

.black {
  @apply bg-black text-white text-xs font-bold py-1 px-1;
}

</style>
