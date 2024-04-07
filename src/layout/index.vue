<script setup>
import HeaderLayout from './Header/HeaderLayout.vue'
import AsideLayout from './Aside/AsideLayout.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><AsideLayout /></el-aside>
      <el-container>
        <el-header class="p-0">
          <HeaderLayout />
        </el-header>
        <el-main class="bg-[#e5e7eb] p-[10px]"><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-main {
  height: calc(100vh - 60px);
}
</style>
