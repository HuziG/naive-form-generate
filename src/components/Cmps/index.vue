<script lang="ts" setup>
import { ref } from 'vue'

const cmpCellStyle = ref('text-sm py-1 px-5 rounded bg-gray-200 border border-transparent hover:text-primary hover:border-primary hover:border hover:border-dashed border-box cursor-move')
</script>

<template>
  <div class="mb-3">
    布局型组件
  </div>

  <n-grid x-gap="12">
    <n-gi :span="12">
      <div :class="cmpCellStyle">
        栅格
      </div>
    </n-gi>
    <n-gi :span="12">
      <div :class="cmpCellStyle">
        按钮
      </div>
    </n-gi>
  </n-grid>
</template>

<style lang="scss" scoped>

</style>
