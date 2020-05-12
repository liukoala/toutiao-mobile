<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell
        class="base-info"
        title="单元格"
        value="内容"
        center
        :border="false"
      >
        <van-image
          class="avatar"
          slot="icon"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="name" slot="title">昵称</div>
        <van-button
          class="update-btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid :border="false">
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

<style scoped lang="less">
.my-container {
  .my-info {
    background: url("./banner.png") no-repeat;
    background-size: cover;
    .base-info {
      box-sizing: border-box;
      height: 115px;
      background-color: unset;
      padding-top: 38px;
      padding-bottom: 11px;
      .avatar {
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .name {
        font-size: 15px;
        color: #fff;
      }
      .update-btn {
        height: 16px;
        font-size: 10px;
        color: #666666;
      }
    }
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }
}
</style>
