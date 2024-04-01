import { useUserStore } from '@/stores/userStore'

export function RESEETSTORE() {
  const userStore = useUserStore()

  userStore.$reset()
  // 清除用户信息缓存
  localStorage.removeItem('user')
  console.log("success")
}