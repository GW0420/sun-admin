import request from "@/api"

// 登录
export const login = data => {
  return request({
    url: "/sys/login",
    method: "POST",
    data
  })
}

// 获取用户信息
export const profile = () => {
  return request({
    url: "/sys/profile",
    method: "GET"
  })
}
