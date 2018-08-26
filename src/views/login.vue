<template>
    <div>
        <Box class="wrap">
            <div slot="ph">
            <label for="">手机号</label>
            <input type="text" placeholder="请输入手机号">
            </div>

            <div slot="pass">
            <label for="">手机号</label>
            <input type="text" placeholder="请输入6位登陆密码">
            </div>
            <div slot="submit">
            登陆
            </div>
            <div slot="pro" class="tips">
            点击注册表明您已阅读并同意<span>《服务协议》</span>
            </div>
    </Box>
    </div>
</template>
<script>
import Box from '@/components/box'
export default {
  components: {
    Box
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  padding-top: 40px;
}
.tips {
  font-size: 12px;
}
</style>
