<script setup>
import ColorsGrid from "./ColorsGrid.vue";

const props = defineProps({
  colors: {
    type: Object,
    required: true
  }
})

const isObject = (obj) => {
  return obj && typeof obj === 'object'
}

</script>


<template>
  <div class="colors-padding">
    <div v-for="(color, key) in colors">
      <div v-if="isObject(color)">
        <ColorsGrid :colors="color" :title="key" />
      </div>
    </div>
  </div>
</template>


<style>
.colors-padding {
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}
</style>
