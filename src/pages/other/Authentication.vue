<template>
  <div class="order-content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
      <el-breadcrumb-item>碳金融</el-breadcrumb-item>
    </el-breadcrumb>
    <p>碳金融</p>
  </div>
</template>

<script>


export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.order-content{
  & .el-table .cell{
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
