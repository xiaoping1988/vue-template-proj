<template>
  <div class="p-noauth">
    <PHead></PHead>
    <div class="p-noauth-container p-middle">
      <div class="p-noauth-box">
        <div class="p-noauth--icon"></div>
        <div class="p-noauth--text">
          抱歉!您还没有权限访问该页面,如需帮助请联系管理员。
          <el-button type="primary" round size="small" onclick="goBack()">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .p-noauth {
    width: 100%;
    height: 100%;
  }

  .p-noauth-container {
    height: calc(100% - 60px);
  }

  .p-noauth-box {
    text-align: center;
  }

  .p-noauth--icon {
    width: 136px;
    height: 136px;
    background: url("../assets/img/noauth.gif") no-repeat;
    display: inline-block;
  }

  .p-noauth-text {
    font-size: 10px;
    font-weight: 700;
    color: #333;
    padding-top: 30px;
    text-align: center;
  }
</style>
