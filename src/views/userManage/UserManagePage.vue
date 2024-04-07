<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { getAllUsers } from '@/api/user'

const store = useUserStore()
const loading = ref(false)
const tableData = ref()

const handleClick = () => {
  console.log('click')
}

function getUserList() {
  getAllUsers(store.token).then((res) => {
    if (res.code === 200) {
      console.log(res)
      tableData.value = res.users
    }
  })
}

getUserList()
</script>

<template>
  <div v-loading="loading" >
    <div class="p-[20px] bg-white rounded-lg mb-[10px] shadow-lg">用户管理列表</div>
    <div class="p-[20px] bg-white rounded-lg shadow-lg">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="username" label="用户名" width="150" />
        <el-table-column prop="userid" label="用户id" width="200" />
        <el-table-column prop="realname" label="姓名" width="120" />
        <el-table-column prop="usertype" label="角色" width="120" />
        <el-table-column prop="card_id" label="身份证号码" width="500" />
        <el-table-column prop="telephone" label="联系方式" width="120" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">详情</el-button>
            <el-button link type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style></style>
