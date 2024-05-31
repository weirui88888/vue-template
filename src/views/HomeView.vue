<template>
  <main>
    <a-space>
      <a-button @click="store.minus">-</a-button>
      {{ store.count }}
      <a-button @click="store.increment">+</a-button>
    </a-space>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<style lang="scss" scoped></style>
