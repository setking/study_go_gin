<template>
  <div class="About">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>社区列表</span>
      </div>
      <div
        v-for="(item, index) in communityList"
        :key="index"
        class="text item"
      >
        <el-row :gutter="20">
          <el-col :span="10"> ID： {{ item.id }} </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20"> 内容： {{ item.name }} </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </el-card>
  </div>
</template>
<script>
import { community } from "@/config/api/community";
export default {
  data() {
    return {
      communityList: [],
    };
  },
  created() {
    this.InitData();
  },
  methods: {
    InitData() {
      community().then((res) => {
        console.log(res);
        this.communityList = res.data;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.box-card{
  text-align: left;
}
</style>
