<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { getUserInfo, updateUserInfo } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import router from '@/router'

const store = useUserStore()
const loading = ref(false)
const isEdit = ref(true)

const form = ref({})

function getUser() {
  getUserInfo(store.token).then((res) => {
    if (res.code === 200) {
      form.value = res.result
    }
  })
}

getUser()

function onEdit() {
  isEdit.value = false
}

function handleCancle() {
  isEdit.value = true
}

function onSubmit() {
  updateUserInfo(store.token, form.value).then((res) => {
    if (res.code === 200) {
      isEdit.value = true
      ElMessage({
        message: res.message,
        type: 'success'
      })
    }
  })
}
</script>

<template>
  <div v-loading="loading">
    <div class="p-[20px] bg-white rounded-lg mb-[10px] shadow-lg">个人信息</div>
    <div class="p-[20px] bg-white rounded-lg shadow-lg">
      <el-descriptions border column="2">
        <el-descriptions-item label="用户名">
          {{ form.username }}
        </el-descriptions-item>
        <el-descriptions-item label="联系方式">
          {{ form.telephone }}
        </el-descriptions-item>
        <el-descriptions-item label="姓名">
          {{ form.realname }}
        </el-descriptions-item>
        <el-descriptions-item label="身份证">
          {{ form.cardID }}
        </el-descriptions-item>
        <el-descriptions-item label="交易哈希">
          {{ form.txid }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<style>
.el-descriptions__label {
  font-weight: 700;
}
</style>
