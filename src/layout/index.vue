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
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style></style>
