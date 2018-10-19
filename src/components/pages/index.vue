<template>
    <div class="index">
        <tab>
            <tab-item selected @on-item-click="tabClick(0)">推荐</tab-item>
            <tab-item @on-item-click="tabClick(1)">要闻</tab-item>
        </tab>
        <scroller ref="scroller" class="my-scroller" :on-infinite="infinite" :on-refresh="refresh">
            <div v-if="tabIndex === 0">
                <swiper :list="swiperList" v-model="swiperIndex" :loop="true">

                </swiper>

                <marquee class="my-marquee">
                <marquee-item v-bind:key="index" v-for="(list,index) in marqueeList">
                    {{list.title}}
                </marquee-item>
                </marquee>

                <panel :list="list"></panel>
                <panel :list="moreList"></panel>
            </div>
            <div v-else>
                <panel :list="impNews"></panel>
                <panel :list="impMoreNews"></panel>
                
            </div>
        </scroller>
    </div>
</template>
<script>
  import {ViewBox, XHeader, Tabbar, TabbarItem, Tab, TabItem, Swiper, Marquee, MarqueeItem, Panel, Toast} from 'vux'
  const refreshKey = ['A','B01','B02','B03','B04','B05','B06','B07','B08','B09','B010']
  var key = 0
  var loadKey = [
      {start: 0,end: 9},
      {start: 0,end: 9}
      ]
  var keyValue = 'A'
  var initLoaded = false //初始化数据是否加载完毕
  function getRefreshKey() {
    key++
    if(key === refreshKey.length) {
      key = 0;
    }
    keyValue = refreshKey[key]
    return true
  }
  export default {
    name: 'Index',
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Tab,
      TabItem,
      Swiper,
      Marquee,
      MarqueeItem,
      Panel,
      Toast
    },
    data() {
      return {
        tabIndex: 0,
        swiperList: [{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }],
        swiperIndex: 0,
        marqueeList: [],
        list: [
          // {
          //   src: 'http://somedomain.somdomain/x.jpg',
          //   title: '标题一',
          //   desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          //   url: '/component/cell'
          // }
        ],
        moreList: [],
        impMoreNews: []
      }
    },
    created() {
      this.$jsonp('https://3g.163.com/touch/jsonp/sy/recommend/0-1.html').then( data => {
        
        //轮播数据
        this.swiperList = data.focus.filter( item => item.addata == null).map(item => {
          return {
            url: item.link,
            img: item.picInfo[0].url,
            title: item.title
          }
        })
        this.list = data.list.map(item => {
          
          return {
            src: item.picInfo[0] && item.picInfo[0].url,
            title: item.title,
            desc: item.digest,
            url: item.link
          }
        })

        this.marqueeList = data.live.map(item => {
          return {
            title: item.title
          }
        })
        this.impNews = data.news.map(item => {
            return {
                src: item.picInfo[0] && item.picInfo[0].url,
                title: item.title,
                desc: item.digest,
                url: item.link
            }
        })
        initLoaded = true
      })
    },
    methods: {
      refresh() {
        getRefreshKey()
        this.$jsonp('https://3g.163.com/touch/jsonp/sy/recommend/0-9.html', {
          miss: '00',
          refresh: keyValue 
        }).then(data => {
          
          this.list = data.list.map(item => {
          
            return {
              src: item.picInfo[0] && item.picInfo[0].url,
              title: item.title,
              desc: item.digest,
              url: item.link
            }
          })
          this.impNews = data.news.map(item => {
          
            return {
              src: item.picInfo[0] && item.picInfo[0].url,
              title: item.title,
              desc: item.digest,
              url: item.link
            }
          })
          this.$refs.scroller.finishPullToRefresh();
          this.$vux.toast.show('刷新完毕')
          
        })
      },
      infinite() {
        if(!initLoaded) {
          this.$refs.scroller.finishInfinite()
          return
        }
        let tabIndex = this.tabIndex
        if(tabIndex === 0) {

            setTimeout(() => {
                this.$jsonp(`https://3g.163.com/touch/jsonp/sy/recommend/${loadKey[tabIndex].start}-${loadKey[tabIndex].end}.html`, {
                  miss: '00',
                  refresh: keyValue
                }).then(data => {
                  console.log(data);
                  
                  var loadlist = data.list.map(item => {
                  
                    return {
                      src: item.picInfo[0] && item.picInfo[0].url,
                      title: item.title,
                      desc: item.digest,
                      url: item.link
                    }
                  })
                  //不要试图改变data里数据的引用地址
                  this.moreList = this.moreList.concat(loadlist)
                  
                  loadKey[tabIndex].start += 10
                  loadKey[tabIndex].end = loadKey[tabIndex].start + 9
                  this.$refs.scroller.finishInfinite()
                })
            }, 1000);
        }else if(tabIndex === 1) {
            setTimeout(() => {
                this.$jsonp(`https://3g.163.com/touch/jsonp/sy/recommend/${loadKey[tabIndex].start}-${loadKey[tabIndex].end}.html`, {
                  miss: '00',
                  refresh: keyValue
                }).then(data => {
                  console.log(data);
                  
                  var impLoadlist = data.news.map(item => {
                  
                    return {
                      src: item.picInfo[0] && item.picInfo[0].url,
                      title: item.title,
                      desc: item.digest,
                      url: item.link
                    }
                  })
                  //不要试图改变data里数据的引用地址
                  this.impMoreNews = this.impMoreNews.concat(impLoadlist)
                  
                   loadKey[tabIndex].start += 10
                  loadKey[tabIndex].end = loadKey[tabIndex].start + 9
                  this.$refs.scroller.finishInfinite()
                })
            }, 1000);
        }
        
      },
      tabClick(value) {
          this.tabIndex = value
      }
    }
  }
</script>
