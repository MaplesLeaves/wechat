<template>
  <div class="page">
    <img :src="messageInfo.path" alt="" style="width:100%">
    <div>
      <p>{{messageInfo.name}}</p>
      <p>{{messageInfo.content}}</p>
      <p>￥{{messageInfo.num}} 元</p>
    </div>
    <footer>
      <span @click='add'>添加到购物车</span>
      <span @click='submit'>立即结算</span>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageInfo: {}
    }
  },
  methods: {
    add () {
      let array = this.$store.getters.getMessage
      array.push(this.messageInfo)
      this.$store.commit('MESSAGE', array)
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 3000,
        mask: true
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 3000)
    },
    submit () {
      let array = this.$store.getters.getMessage
      array.push(this.messageInfo)
      this.$store.commit('MESSAGE', array)
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 3000,
        mask: true
      })
      setTimeout(() => {
        let url = '../../index/main'
        wx.switchTab({ url })
      }, 3000)
    }
  },
  mounted () {
    this.messageInfo = JSON.parse(this.$root.$mp.query.id)
  }
}
</script>

<style>
footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 0 1px #555;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer>span{
  display: inline-block;
  width: 50%;
  padding: 10px 0 ;
  color: white;
}
footer>span:nth-child(1){
  background: rgb(136, 55, 55)
}
footer>span:nth-child(2){
  background: rgb(55, 102, 55)
}
</style>