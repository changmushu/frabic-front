<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function pushHome() {
  router.push('/home')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="flex items-center justify-center h-[60px] border-r border-b w-full cursor-pointer"
      @click="pushHome()"
    >
      物流溯源
    </div>
    <div class="w-full border-b">
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><User /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">管理员权限管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-2">用户注册管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">实名认证管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-4">用户奖罚权限</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><ShoppingCartFull /></el-icon>
            <span>商户模块</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">物流信息管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-2">产品溯源管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-3">智能合约管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-4">库存管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Van /></el-icon>
            <span>物流模块</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">物流信息管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-2">智能合约管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-3">实时位置跟踪管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><OfficeBuilding /></el-icon>
            <span>门店模块</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">物流存储录入管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-2">智能合约管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-3">举报管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="4-4">实时位置跟踪管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><GoodsFilled /></el-icon>
            <span>消费者模块</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">评价打分管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="5-2">举报管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="5-3">实时位置跟踪管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><ToiletPaper /></el-icon>
            <span>绿色物流模块</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">碳排放跟踪</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="6-2">可再生能源使用记录管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="7">
          <el-icon><ChromeFilled /></el-icon>
          <span>区块链浏览器</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style></style>
