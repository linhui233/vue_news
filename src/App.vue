<template>
  <div id="app">
    <view-box body-padding-bottom="50px" body-padding-top="46px" tyle="height: 100%;">
      <x-header class="header" slot="header" :left-options='{showBack: false, backText:"Back"}' title="新闻">
        <div slot="left">直播</div>
        <div slot="right">搜索</div>
        <div>新闻</div>
      </x-header>
      <div class="main">
        <router-view/>
      </div>
      <tabbar slot="bottom">
        <tabbar-item link="/" selected>
          <div slot="label" >
              首页
          </div>
        </tabbar-item>
        <tabbar-item link="/page2">
          <div slot="label">测试</div>
        </tabbar-item>
        <tabbar-item link="/page3">
          <div slot="label">测试2</div>
        </tabbar-item>
        <tabbar-item @on-item-click="toMine">
          <div slot="label">
            我的
          </div>
        </tabbar-item>
      </tabbar>
      

      
    </view-box>
    
    
  </div>
</template>

<script>
  
  import {ViewBox, XHeader, Tabbar, TabbarItem,} from 'vux'
  export default {
    name: 'App',
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
    },
    methods: {
      toMine() {
        this.$router.push({
          path: '/mine'
        })
      }
    }
  }
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
html, body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  overflow: hidden;
}
.main{
  overflow-x: hidden;
}
#app{
  .header{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
}
.weui-media-box__desc{
  height: 78px;
}
.weui-media-box__hd,.weui-media-box__hd .weui-media-box__thumb{
  width: 102px !important;
  height: 78px !important;
}
.weui-media-box__bd{
  height: 78px;
}
.my-marquee{
  margin: 10px 0;
  padding-left: 10px;
}
.my-scroller{
  margin-top: 90px;
}
.weui-tabbar a{
  color: #ccc;
}
</style>
