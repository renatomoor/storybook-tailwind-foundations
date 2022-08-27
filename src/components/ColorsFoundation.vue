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

const getRootColors = () => {
  let rootColors = {}
  for (let key in props.colors) {
    if (!isObject(props.colors[key])) {
      rootColors[key] = props.colors[key]
    }
  }
  console.log(rootColors)
  return rootColors
}

</script>


<template>
  <div class="colors-padding">
    <div v-for="(color, key) in colors">
      <div v-if="isObject(color)">
        <ColorsGrid :colors="color" :title="key" />
      </div>
    </div>
    <ColorsGrid :colors="getRootColors()" title="Root Colors" :use-default-background-color="true" />
  </div>
</template>


<style>
.colors-padding {
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}
</style>
