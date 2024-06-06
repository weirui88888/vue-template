<template>
  <a-config-provider
    :locale="locale"
    :theme="{
      components: {}
    }"
  >
    <a-app>
      <main>
        <h1>Hello App!</h1>
        <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
        <nav>
          <RouterLink to="/">Go to Home</RouterLink> |
          <RouterLink to="/about">Go to About</RouterLink> |
          <RouterLink to="/test">Go to Test</RouterLink>
        </nav>
        <main>
          <RouterView />
        </main>
      </main>
    </a-app>
  </a-config-provider>
</template>

<script setup lang="ts">
// import enUS from 'ant-design-vue/es/locale/en_US'
console.log(import.meta.env)
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('en')
const locale = ref(zhCN)
</script>
