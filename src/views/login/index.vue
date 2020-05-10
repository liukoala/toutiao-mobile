<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <!--
      基于 Vant 的表单验证：
      1、使用 van-form 组件包裹所有的表单项 van-field
      2、给 van-form 绑定 submit 事件
         当表单提交的时候会触发 submit 事件
         提示：只有表单验证通过，它才会调用 submit
      3、使用 Field 的rules属性定义校验规则
     -->
    <van-form
      :show-error="false"
      :show-error-message="false"
      validate-first
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button
            class="send-btn"
            size="mini"
            round
          >发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          type="info"
          block
        >登录</van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // Toast.loading({
      this.$toast.loading({
        message: '登录中...', // 提示文本
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      // 1. 找到数据接口
      // 2. 封装请求方法
      // 3. 请求调用登录
      try {
        const res = await login(this.user)
        // 4. 处理响应结果
        console.log(res)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },

    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: 'top' // 防止手机键盘太高看不见提示消息
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
