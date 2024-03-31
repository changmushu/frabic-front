<script setup>
import { login, register } from '@/api/user'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import { useRouter, useRoute } from 'vue-router'

const tabRef = ref('login')

const router = useRouter()
const route = useRoute()

const isLoading = ref(false)

const loginForm = ref({
  username: '',
  password: ''
})

const registerForm = ref({
  username: '',
  password: '',
  userType: ''
})

const options = [
  {
    value: '种植户',
    label: '种植户'
  },
  {
    value: '工厂',
    label: '工厂'
  },
  {
    value: '运输司机',
    label: '运输司机'
  },
  {
    value: '商店',
    label: '商店'
  },
  {
    value: '消费者',
    label: '消费者'
  }
]

const store = useUserStore()

// const loginSccessOpen = () => {
//   ElMessage('登陆成功！')
// }

function handleLogin() {
  isLoading.value = true
  login(loginForm.value).then((res) => {
    if (res.code === 200) {
      ElMessage({
        message: res.message,
        type: 'success'
      })
      console.log(res)
      store.setToken(res.token)
      router.push("/home")
      console.log(store.token)
      isLoading.value = false
    } else {
      isLoading.value = false
    }
  })
}

function handleRegister() {
  isLoading.value = true
  register(registerForm.value).then((res) => {
    if (res.code === 200) {
      ElMessage({
        message: res.message + 'txid' + res.txid,
        type: 'success'
      })
      tabRef.value = 'login'
      isLoading.value = false
    } else {
      ElMessage({
        message: res.message,
        type: 'success'
      })
      isLoading.value = false
    }
  })
}
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="flex items-center justify-center rounded-lg shadow-xl w-[1000px] h-[500px]">
      <div class="w-[500px] h-[500px] bg-[#f1f7fe] rounded-l-lg"></div>
      <div
        class="w-[500px] h-[500px] flex flex-col items-center justify-center bg-[#e1eefd] rounded-r-lg"
      >
        <el-tabs v-model="tabRef">
          <el-tab-pane label="登陆" name="login">
            <div class="flex flex-col items-center justify-center">
              <el-input
                v-model="loginForm.username"
                class="w-[300px] pb-[10px] shadow-none"
                placeholder="请输入账号"
              />
              <el-input
                v-model="loginForm.password"
                class="w-[300px] pb-[10px] shadow-none"
                type="password"
                placeholder="请输入密码"
                show-password
              />
              <div class="w-full flex justify-end">
                <el-button @click="handleLogin()" type="primary" class="">登陆</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <div class="flex flex-col items-center justify-center">
              <el-input
                v-model="registerForm.username"
                class="w-[300px] pb-[10px] shadow-none"
                placeholder="请输入账号"
              />
              <el-input
                v-model="registerForm.password"
                class="w-[300px] pb-[10px] shadow-none"
                type="password"
                placeholder="请输入密码"
                show-password
              />
              <el-select
                v-model="registerForm.userType"
                placeholder="请选择职位"
                class="w-[300px] pb-[10px] shadow-none"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="w-full flex justify-end">
                <el-button @click="handleRegister()" type="primary" :loading="isLoading"
                  >注册</el-button
                >
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style></style>
