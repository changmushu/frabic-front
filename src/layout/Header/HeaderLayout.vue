<script setup>
import { useUserStore } from '@/stores/userStore'
import { RESEETSTORE } from '@/utils/reset'
import { useRouter, useRoute } from 'vue-router'

const store = useUserStore()

const router = useRouter()
const route = useRoute()

function handleLogout() {
  store.logout()
  RESEETSTORE()
  router.push("/login")
}
</script>

<template>
  <div class="border-b h-full flex justify-end items-center pr-[10px]">
    <el-dropdown v-if="store.userInfo">
      <span>
        {{ store.userInfo.userName }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item divided @click="handleLogout()">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style></style>
