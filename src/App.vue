<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { login, register } from '../src/api/user'
import { ref } from 'vue'
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

function handleLogin() {
  console.log(loginForm.value.username, loginForm.value.password)
  login(loginForm.value).then((res) => {
    console.log(res)
  })
}

function handleRegister(){
  register(registerForm.value).then((res)=>{
    console.log(res)
  })
}
</script>

<template>
  <div>
    <el-input v-model="loginForm.username" style="width: 240px" placeholder="Please input" />
    <el-input
      v-model="loginForm.password"
      style="width: 240px"
      type="password"
      placeholder="Please input password"
      show-password
    />
    <el-select v-model="registerForm.userType" placeholder="Select" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button @click="handleLogin()">login</el-button>
    <el-button @click="handleRegister()">register</el-button>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
