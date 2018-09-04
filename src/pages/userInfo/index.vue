<template>
  <div class="userInfo">
    <div>
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <!-- <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div> -->
    </div>
    <!-- 底部导航栏 -->
    <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active" v-for="(item, index) in listMessage" :key='index'>
      <div class="weui-cell__bd">{{item.name}}</div>
      <div class="weui-cell__ft weui-cell__ft_in-access"></div>
    </navigator>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  name: 'userInfo',
  data () {
    return {
      userInfo: {},
      listMessage: [
        {
          name: '我的拼团',
          path: ''
        },
        {
          name: '我的预约',
          path: ''
        },
        {
          name: '成为分销商',
          path: ''
        },
        {
          name: '我的卡券',
          path: ''
        },
        {
          name: '领券中心',
          path: ''
        },
        {
          name: '我的收藏',
          path: ''
        },
        {
          name: '在线客服',
          path: ''
        },
        {
          name: '联系我们',
          path: ''
        },
        {
          name: '服务中心',
          path: ''
        },
        {
          name: '关于我们',
          path: ''
        },
        {
          name: '秒杀',
          path: ''
        },
        {
          name: '收货地址',
          path: ''
        },
        {
          name: '绑定手机号',
          path: ''
        },
        {
          name: '入住商',
          path: ''
        },
        {
          name: '代付款',
          path: ''
        },
        {
          name: '代发货',
          path: ''
        },
        {
          name: '待收货',
          path: ''
        },
        {
          name: '已完成',
          path: ''
        },
        {
          name: '售后我的兑换来',
          path: ''
        }
      ]
    }
  },
  components: {
    card
  },
  methods: {
    getUserInfo () {
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
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
</style>
