<template>
    <div class="foot">
       <div><router-link to="/index">首页</router-link></div>
       <div><router-link to="/load">贷款</router-link></div>
       <div><router-link to="/credit">信用卡</router-link></div>
       <div><router-link to="/mine">我的</router-link></div>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.foot {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    div {
        flex: 1;
    }
}
</style>
