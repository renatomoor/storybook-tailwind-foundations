<script setup>

const props = defineProps({
  colors: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    default: 'Root'
  },
  useDefaultBackgroundColor: {
    type: Boolean,
    default: false
  }
})

const getColorsSectionColor = () => {
  let colorValues = Object.values(props.colors)
  let middleColor = Object.values(props.colors).length / 3
  return colorValues[Math.round(middleColor)]
}

function hexToRgb(hex) {

  if (props.useDefaultBackgroundColor) {
    return '210 210 210'
  }

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;

  return `${rgb.r} ${rgb.g} ${rgb.b}`;
}
</script>


<template>
  <div class="color-section" :style="`border: 1px solid ${getColorsSectionColor()}; background-color: rgb(${hexToRgb(getColorsSectionColor())}/0.09);`">
    <h2>{{ title}}</h2>
    <div class="colors-container">
      <div v-for="(color, key) in colors">
        <div class="color" :style="`background-color: ${color}`" />
        <div class="color-description">
          <span>{{ key }}</span> <span>{{ color }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-transform: capitalize;
  color: #52525b;
  text-align: center;
;
}

.color-section {
  padding: 1rem;
  border-radius: .75rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
  box-sizing: border-box;
  margin-bottom: 2rem;
}

.colors-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 1.5rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.color-description {
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #52525b;
  font-family: monospace;
}

.color {
  width: 100%;
  border: rgba(190, 190, 190, 0.3) solid 0.1rem;
  border-radius: .25rem;
  height: 2.5rem;
}
</style>
