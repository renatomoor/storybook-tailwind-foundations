<script setup>
const props = defineProps({
  spaces: {
    type: Object,
    required: true
  }
})
</script>


<template>
  <h2 class="title">
    Spaces
  </h2>
  <div class="spaces">
    <div v-for="(space, key) in spaces">
      <div class="spaces__space" :style="`width: ${space}`"/>
        <div>{{ key }}</div>
    </div>
  </div>
</template>


<style scoped>
.title {
  text-align: center;
}

.spaces {
  padding: 5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.spaces__space {
  border-radius: 0.75rem;
  background-color: gray;
  margin-bottom: 1rem;
  height: 5rem;
}
</style>
