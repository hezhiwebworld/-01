<template>
    <div>
        <HeadTop></HeadTop>
        <Box class="wrap">
              <div slot="ph">
                <label for="">手机号</label>
                <input type="text">
              </div>
              <div slot="recode">
                <label for="">手机号</label>
                <input type="text">
              </div>
              <div slot="pass">
                <label for="">手机号</label>
                <input type="text">
              </div>
              <div slot="submit">
                注册
              </div>
              <div slot="pro" class="tips">
                点击注册表明您已阅读并同意<span>《服务协议》</span>
              </div>
        </Box>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/components/foot'
import HeadTop from '@/components/head'
import Box from '@/components/box'
export default {
  components: {
    foot, HeadTop, Box
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
