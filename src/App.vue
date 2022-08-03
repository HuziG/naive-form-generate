<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Cmps from './components/Cmps/index.vue'
</script>

<template>
  <div class="bg-gray-100 h-screen w-screen flex flex-col overflow-hidden">
    <div class="h-12 flex items-center flex-shrink-0 border-b">
      header
    </div>
    <div class="flex-1">
      <n-grid style="height: 100%;position: relative;">
        <n-gi :span="5">
          <div class="p-3 border-box overflow-hidden">
            <cmps />
          </div>
        </n-gi>
        <n-gi :span="14">
          <div class="border-l border-r h-full p-3 border-box overflow-hidden">
            12
          </div>
        </n-gi>
        <n-gi :span="5">
          <div class="p-3 border-box overflow-hidden">
            6
          </div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style>
</style>
