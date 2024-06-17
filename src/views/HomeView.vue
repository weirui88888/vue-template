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
import request from '@/api/axios'

interface GetListResponse {
  code: number
  dataGoods: {
    list: Record<string, any>[]
  }
}

onMounted(() => {
  request.get<GetListResponse>('mock/getList').then((res) => {
    console.log('👀 ~ request.get ~ res:', res.code)
  })
})

const store = useCounterStore()
</script>

<style lang="scss" scoped></style>
