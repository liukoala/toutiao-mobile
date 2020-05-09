<template>
  <div id="app">
    <h1>黑马头条</h1>
    <!-- 路由的出口 -->
    <router-view/>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="box" style="padding: 30px;">hello</div>

    <i class="toutiao toutiao-pinglun"></i>
    <i class="toutiao toutiao-shanchu"></i>
    <i class="toutiao toutiao-shoucang"></i>
    <div>
      <van-icon name="chat-o" />
      <van-icon name="chat" />
      <van-icon name="shopping-cart" />
      <van-icon name="shopping-cart" dot />
      <van-icon name="shopping-cart" badge="123" />
    </div>
    <div>
      <van-button icon="star-o" type="primary" />
      <van-button icon="chat" type="primary" />
      <van-button icon-prefix="toutiao" icon="yanzhengma" type="primary" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 100px;
  background-color: pink;
}
</style>
