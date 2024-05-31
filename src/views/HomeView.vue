<template>
  <main>
    <a-range-picker v-model:value="time" />
    <a-button type="primary" @click="getTime">Primary Button</a-button>
  </main>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import type { Dayjs } from 'dayjs'
type RangeValue = [Dayjs, Dayjs]
const global = useGlobalStore()
const time = ref<RangeValue>()
const getTime = () => {}
</script>

<style lang="scss" scoped></style>
