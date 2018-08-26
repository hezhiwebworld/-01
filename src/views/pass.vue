<template>
    <div>
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
            重置密码
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
