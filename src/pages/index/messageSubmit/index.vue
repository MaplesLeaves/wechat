<template>
  <div class="page">
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value_in-hd">¥{{num}}</div>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">商品</div>
          <div class="weui-form-preview__value">{{message[0].name}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">标题标题</div>
          <div class="weui-form-preview__value">{{message[0].name}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">标题标题</div>
          <div class="weui-form-preview__value">{{message[0].content}}</div>
        </div>
      </div>
      <div class="weui-form-preview__ft" >
        <!-- <navigator  class="weui-form-preview__btn weui-form-preview__btn_primary" hover-class="weui-form-preview__btn_active" @click="submitInfo">付款</navigator> -->
        <p class="submitMessage" @click="submitInfo">付款</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: [
        {}
      ],
      num: 0
    }
  },
  methods: {
    submitInfo () {
      wx.showToast({
        title: '付款成功',
        icon: 'success',
        duration: 3000,
        mask: true
      })
      this.$store.commit('MESSAGE', [])
      setTimeout(() => {
        console.error(this.$store.getters.getMessage)
        // let url = '../../shoppingMall/main'
        // wx.switchTab({ url })
      }, 3000)
    }
  },
  mounted () {
    this.message = JSON.parse(this.$root.$mp.query.message)
    for (let index = 0; index < this.message.length; index++) {
      this.num += this.message[index].num
    }
  }
}
</script>

<style>
page {
}
.submitMessage{
  text-align: center;
  display: inline-block;
  width: 100%;
}
</style>