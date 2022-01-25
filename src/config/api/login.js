import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    headers: {
      isToken: false,
    },
    method: "post",
    data: data,
  });
}

// 注册方法
export function register(data) {
  return request({
    url: "/signup",
    headers: {
      isToken: false,
    },
    method: "post",
    data: data,
  });
}
