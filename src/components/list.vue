<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <div v-for="item in data"  :key="item" class="item">{{item}}</div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      data: [ 1, 23, 2, 3, 4, 5, 6, 67, 7, 8, 32 ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    }
  },
  components: {
    BScroll
  }
}
</script>
<style lang="scss" scoped>
.item {
    height: 80px;
    line-height: 80px;
}
</style>
