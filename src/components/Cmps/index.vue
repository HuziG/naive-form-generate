<script lang="ts" setup>
import { ref } from 'vue'
import { layoutComponents } from './baseCmp'

const cmpCellStyle = ref('text-sm py-2 px-5 flex items-center rounded bg-gray-200 border border-transparent hover:text-primary hover:border-primary hover:border hover:border-dashed border-box cursor-move')
</script>

<template>
  <div class="mb-3">
    布局型组件
  </div>

  <n-grid x-gap="12">
    <n-gi v-for="item in layoutComponents" :key="item.__config__.tag" :span="12">
      <div :class="`${cmpCellStyle}`">
        <div :class="`inline-block text-base ${item.__config__.tagIcon}`" />
        <span class="ml-3">{{ item.__config__.label }}</span>
      </div>
    </n-gi>
  </n-grid>
</template>

<style lang="scss" scoped>

</style>
