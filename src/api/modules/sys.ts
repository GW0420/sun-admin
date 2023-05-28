import request from "@/api"

/**
 * 登录
 */
export const login = data => {
  return request({
    url: "/sys/login",
    method: "POST",
    data
  })
}
