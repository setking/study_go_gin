import request from "@/utils/request";

// 社区列表
export function community(data) {
  return request({
    url: "/community",
    method: "get",
    data: data,
  });
}
