<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { getUserInfo, updateUserInfo } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import router from '@/router'

const store = useUserStore()
const loading = ref(false)
const isEdit = ref(true)

// do not use same name with ref
const form = ref({
  username: '',
  realname: '',
  telephone: '',
  cardID: ''
})

function getUser() {
  getUserInfo(store.token).then((res) => {
    if (res.code === 200) {
      form.value.username = res.userName
      console.log(res)
    }
  })
}

getUser()

const onEdit = () => {
  isEdit.value = false
}

const onSubmit = () => {
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
    <div class="p-[20px] bg-white rounded-lg  mb-[10px] shadow-lg">个人信息</div>
    <div class="p-[20px] bg-white rounded-lg shadow-lg">
      <el-form :model="form" label-width="auto" label-position="left">
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户名">
              <el-input
                class="w-full pr-[10px]"
                v-model="form.username"
                :disabled="isEdit"
              /> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系方式">
              <el-input class="w-full" v-model="form.realname" :disabled="isEdit" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="姓名">
              <el-input
                class="w-full pr-[10px]"
                v-model="form.telephone"
                :disabled="isEdit"
              /> </el-form-item
          ></el-col>
          <el-col :span="12"
            ><el-form-item label="身份证">
              <el-input class="w-full" v-model="form.cardID" :disabled="isEdit" /> </el-form-item
          ></el-col>
        </el-row>
        <el-row class="flex justify-end">
          <div>
            <el-button type="primary" @click="onEdit" v-if="isEdit">编辑</el-button>
            <el-button type="primary" @click="onSubmit" v-if="!isEdit">修改</el-button>
            <el-button @click="router.push('/home')">取消</el-button>
          </div>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<style>
.el-form-item__label {
  font-weight: 700;
}
</style>
