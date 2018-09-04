<template>
  <div class="counter-warp">
    <!-- <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <a href="/pages/index/main" class="home">去往首页</a> -->
    <div class="left">
      <p v-for="(item, index) in leftBtn" :key='index' class="leftBtn" :class="{isSerch: index === isSerch}" @click="isSerchClick(index)">
        {{item.name}}
      </p>
    </div>
    <div class="right">
      <div class="page__bd page__bd_spacing">
      <div class="weui-flex" v-for=" (item ,index) in 30" :key='index'>
        <div class="weui-flex__item" v-for="(key, num) in 3" :key='num'>
          <div class="placeholder" >
            <img src="../../../static/images/tea5.jpg" alt="" style="width: 50px; height: 50px">
            <br>
            乌龙茶
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      isSerch: 0,
      leftBtn: [
        {
          name: '茶叶',
          path: ''
        },
        {
          name: '品牌',
          path: ''
        },
        {
          name: '更多茶叶',
          path: ''
        }
      ]
    }
  },
  computed: {
    count () {
      return {}
    }
  },
  methods: {
    isSerchClick (data) {
      this.isSerch = data
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
/* .counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
} */
.counter-warp {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  width: 20%;
  height: 100%;
  text-align: center;
  background: #d5d5d5
}
.right{
  width: 80%;
  height: 100%;
  overflow-y: auto;
  text-align: center;
}
.leftBtn{
  padding: 5px 0;
  border-bottom: 1px solid #f8f8f8
}
.isSerch{
  background: skyblue;
  color: #f8f8f8
}
</style>
