<template>
  <div class="container">

    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">123123</a> -->


    <div class="messageInfo">
      <div class="weui-cells weui-cells_after-title" >
        <div class="weui-cell" v-for="(item, index) in message" :key='index' >
          <div class="weui-cell__hd" >
            <img :src="item.path" alt="" style="width: 50px;height:50px">
          </div>
          <div class="weui-cell__bd">{{item.name}}</div>
          <div class="weui-cell__ft">{{item.content}}</div>
        </div>
      </div>
    </div>
    <footer>
      <div class="left">
        <span>总计: ￥{{num}}</span>
        </div>     
      
      <button type="submit" class="submit" @click='submit'>结算</button>
    </footer>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      message: [],
      num: 0
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      console.error(123)
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.error(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.error(this.$store)
    },
    submit () {
      if (!this.num) {
        wx.showToast({
          title: '请选择商品',
          duration: 3000,
          mask: true
        })
        return false
      }
      let url = './messageSubmit/main?message=' + JSON.stringify(this.message)
      wx.navigateTo({url})
    }
  },
  watch: {
    '$state.getters.getMessage': {
      handler (newval, oldval) {
        console.error(newval, oldval)
        this.messageList = newval
      },
      deep: true
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  },
  mounted () {
    this.message = this.$store.getters.getMessage
    for (var i = 0; i < this.message.length; i++) {
      this.num += this.message[i].num
    }
    if (this.message.length === 1) {
      this.num = this.message[0].num
    }
  }
}
</script>

<style scoped>
.container{
  height: 100%;
  padding: 0;
  
}
.messageInfo{
  width:100%;
  margin-bottom: 100px;
  overflow-y: scroll;
  height: 100%;
}
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
}
footer>.left{
  width: 80%;
}
.left>span{
  color: red;
}
footer>.submit{
  width: 20%;
  background: green;
  color: white;
}

</style>
