<template>
  <ModuleSteps @step="getValue"></ModuleSteps>
</template>

<script setup>
const getValue = (v) => {
  console.log(v.value - 1)
}
</script>
