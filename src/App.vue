<template>
  <a-config-provider
    :locale="locale"
    :theme="{
      components: {}
    }"
  >
    <a-app class="h-[100%]">
      <RouterView />
    </a-app>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('en')
const locale = ref(zhCN)
</script>
