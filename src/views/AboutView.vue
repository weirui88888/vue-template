<template>
  <a-button type="primary" @click="showMessage">Open message</a-button>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()
const showMessage = () => {
  global.modal.success({
    title: '好呀',
    content: 'hello',
    onOk() {
      console.log('哈哈哈')
    }
  })
}
</script>
