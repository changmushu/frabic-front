import { defineStore } from 'pinia'
import { getUserInfo, logout } from '@/api/user'
// import { changeGlobalNodesTarget } from 'element-plus/es/utils'
// import { useAuthStore } from './auth'
import { ElMessage } from 'element-plus'
// import { RESEETSTORE } from '@/utils/reset'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    userInfo: null
  }),
  actions: {
    // setToken
    setToken(token) {
      this.token = token
    },
    // setUserInfo
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
    async getUserInfoAction(token) {
      const res = await getUserInfo(token)
      const { userName, userType } = res
      // const authStore = useAuthStore()
      // 存储用户信息
      this.setUserInfo({ userName, userType })
      // 存储用户权限信息
      // authStore.setAuth({ buttons, roles, routes })
    },
    async logout() {
      await logout().then((res) => {
        if (res.code === 200) {
          ElMessage({
            message: res.message,
            type: 'success'
          })
          // RESEETSTORE()
        }
      })
    }
  },
  // 设置为true，缓存state
  persist: true
})
