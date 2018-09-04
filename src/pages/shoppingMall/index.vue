<template>
  <div class="shoppingMall">
    <!-- 上层轮播图样式 -->
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
      <block v-for="(item, index) in bgList" :index="index" :key="index">
        <swiper-item>
          <div>
            <img :src="item" alt="" style="width:100%">
          </div>
        </swiper-item>
      </block>
    </swiper>
    <!-- 中间表格点击table组件 -->
    <div class="page__bd page__bd_spacing centerTitle">
      <div class="weui-flex" v-for=" (item ,index) in listMessage" :key='index'>
        <div class="weui-flex__item" v-for="(key, num) in item.list" :key='num'>
          <div class="placeholder">
            <img :src="key.path" alt="" style="width:50%;height:50px;border-radius: 50%">
            <br> {{key.name}}
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div v-for="(item, index) in messageList" :key='index' @click='goNext(item)'>
        <img :src="item.path" alt="" style="width:100%">
        <p>{{item.name}}</p>
        <p>{{item.content}}</p>
        <div>
          <strong>￥{{item.price}}</strong>
          <span>已售{{item.num}} 件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingMall',
  data () {
    return {
      messageList: [
        {
          name: '皇家普洱',
          content: '正宗皇家普洱',
          path: '../../../static/images/tea2.jpg',
          price: '125',
          num: 123
        },
        {
          name: '皇家普洱',
          content: '正宗皇家普洱',
          path: '../../../static/images/tea2.jpg',
          price: '125',
          num: 123
        },
        {
          name: '皇家普洱',
          content: '正宗皇家普洱',
          path: '../../../static/images/tea2.jpg',
          price: '125',
          num: 123
        },
        {
          name: '皇家普洱',
          content: '正宗皇家普洱',
          path: '../../../static/images/tea2.jpg',
          price: '125',
          num: 123
        }
      ],
      bgList: [
        '../../../static/images/teaBg1.jpg',
        '../../../static/images/teaBg2.jpg',
        '../../../static/images/teaBg3.jpg',
        '../../../static/images/teaBg4.jpg',
        '../../../static/images/teaBg5.jpg'
      ],
      listMessage: [
        {
          list: [
            {
              name: '我要开店',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '申请分销',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '黑茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '白茶',
              path: '../../../static/images/tea1.jpg'
            }
          ]
        },
        {
          list: [
            {
              name: '绿茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '红茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '普洱茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '凉茶',
              path: '../../../static/images/tea1.jpg'
            }
          ]
        },
        {
          list: [
            {
              name: '花果茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '龙井',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '大红袍',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '乌龙茶',
              path: '../../../static/images/tea1.jpg'
            }
          ]
        },
        {
          list: [
            {
              name: '岩茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '金骏眉',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '养生茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '滇茶',
              path: '../../../static/images/tea1.jpg'
            }
          ]
        },
        {
          list: [
            {
              name: '铁观音',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '减肥茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '养生茶',
              path: '../../../static/images/tea1.jpg'
            },
            {
              name: '更多',
              path: '../../../static/images/tea1.jpg'
            }
          ]
        }
      ]
    }
  },
  onLoad () {
  },
  methods: {
    goNext (data) {
      let url = 'messageInfo/main?id=' + JSON.stringify(data)
      wx.navigateTo({url})
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.content {
  display: flex;
  justify-content: space-between;
}
.content > div {
  width: 49%;
  padding-bottom: 5px;
}

.content > div strong {
  color: rgb(211, 37, 25);
}
.content > div > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.centerTitle {
  text-align: center;
}
</style>
