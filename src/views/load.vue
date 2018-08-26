<template>
    <div class="load_page">
        <HeadTop class="top"></HeadTop>
        <List class="list_wrap"></List>
        <foot></foot>
    </div>
</template>
<script>
import foot from '@/components/foot'
import HeadTop from '@/components/head'
import List from '@/components/list'
export default {
  components: {
    foot, HeadTop, List
  }
}
</script>
<style lang="scss" scoped>
.top {
  height: 100px;
  border: 1px solid #CCC;
}
.list_wrap {
  // height: 200px;
  overflow: hidden;
  top: 100px;
  bottom: 40px;
  left: 0;
  right: 0;
  position:absolute;
}
.load_page{
  height: 100%;
  position: relative;
}
</style>
