import { request } from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/getInfo',
    method: 'post',
    headers: {
      Authorization: `${token}`
    }
  })
}

export function getAllUsers(token) {
  return request({
    url: '/getAllUsers',
    method: 'post',
    headers: {
      Authorization: `${token}`
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
