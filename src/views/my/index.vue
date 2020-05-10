<template>
  <div class="my-container">
    <van-cell-group>
      <van-cell
        title="单元格"
        value="内容"
        center
      >
        <van-image
          slot="icon"
          width="50"
          height="50"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <van-button
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <van-grid :column-num="2">
      <van-grid-item
        icon-prefix="toutiao"
        icon="shoucang"
        text="文字"
      />
      <van-grid-item
        icon-prefix="toutiao"
        icon="lishi"
        text="文字"
      />
    </van-grid>

    <van-cell title="消息通知" is-link to="/" />
    <van-cell title="小智同学" is-link to="/" />
    <van-cell title="退出登录" />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
