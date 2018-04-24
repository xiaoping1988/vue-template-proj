<template>
  <PLayout>
    <PMenu>
      <PMenuItem path="/sys/user" icon="address-book" name="用户管理"  v-if="getLoginUser().authDom && getLoginUser().authDom.sys_user"/>
      <PMenuItem path="/sys/role" icon="address-book" name="角色管理"  v-if="getLoginUser().authDom && getLoginUser().authDom.sys_role"/>
    </PMenu>
  </PLayout>
</template>

<script>
  export default {}
</script>

<style>

</style>
