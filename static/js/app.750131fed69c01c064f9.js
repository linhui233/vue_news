webpackJsonp([1],{"5U0s":function(t,e){},"6Erz":function(t,e){},"8vzP":function(t,e){},F2QK:function(t,e){},IwgP:function(t,e){},"K+kO":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-tab"},[this._t("header"),this._v(" "),e("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:this.bodyPaddingTop,paddingBottom:this.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[this._t("default")],2),this._v(" "),this._t("bottom")],2)},staticRenderFns:[]};var a=i("VU/8")({name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}},s,!1,function(t){i("5U0s")},null,null).exports,r=i("BEQ0"),o=i.n(r),l=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return o()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(t){i("j62E")},null,null).exports,d=i("piuB"),h=(d.b,String,{mounted:function(){},name:"tabbar",mixins:[d.b],props:{iconClass:String}}),m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var f=i("VU/8")(h,m,!1,function(t){i("gXWh")},null,null).exports,p=(String,Number,{name:"badge",props:{text:[String,Number]}}),v={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var _=i("VU/8")(p,v,!1,function(t){i("oR1u")},null,null).exports,b=(d.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:_},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[d.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},w=i("VU/8")(b,g,!1,null,null,null).exports,x={name:"App",components:{ViewBox:a,XHeader:u,Tabbar:f,TabbarItem:w},methods:{toMine:function(){this.$router.push({path:"/mine"})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("view-box",{attrs:{"body-padding-bottom":"50px","body-padding-top":"46px",tyle:"height: 100%;"}},[i("x-header",{staticClass:"header",attrs:{slot:"header","left-options":{showBack:!1,backText:"Back"},title:"新闻"},slot:"header"},[i("div",{attrs:{slot:"left"},slot:"left"},[t._v("直播")]),t._v(" "),i("div",{attrs:{slot:"right"},slot:"right"},[t._v("搜索")]),t._v(" "),i("div",[t._v("新闻")])]),t._v(" "),i("div",{staticClass:"main"},[i("router-view")],1),t._v(" "),i("tabbar",{attrs:{slot:"bottom"},slot:"bottom"},[i("tabbar-item",{attrs:{link:"/",selected:""}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("\n            首页\n        ")])]),t._v(" "),i("tabbar-item",{attrs:{link:"/page2"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("测试")])]),t._v(" "),i("tabbar-item",{attrs:{link:"/page3"}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("测试2")])]),t._v(" "),i("tabbar-item",{on:{"on-item-click":t.toMine}},[i("div",{attrs:{slot:"label"},slot:"label"},[t._v("\n          我的\n        ")])])],1)],1)],1)},staticRenderFns:[]};var k=i("VU/8")(x,C,!1,function(t){i("XH0C")},null,null).exports,y=i("/ocq"),S=(d.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[d.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function n(){var s=t.$refs.nav;s.scrollLeft+=(e.offsetLeft-(s.offsetWidth-e.offsetWidth)/2-s.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)})}}}}),$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]};var I=i("VU/8")(S,$,!1,function(t){i("K+kO")},null,null).exports,B=(d.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[d.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},N=i("VU/8")(B,T,!1,null,null,null).exports,L=i("mvHQ"),O=i.n(L),M=i("NjrX"),P=i("0FxO"),R=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(P.b)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(O()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new M.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){O()(t)!==O()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]};var H=i("VU/8")(R,j,!1,function(t){i("p9A2")},null,null).exports,V=(Number,Number,String,Number,{name:"marquee",props:{interval:{type:Number,default:2e3},duration:{type:Number,default:300},direction:{type:String,default:"up"},itemHeight:Number},beforeDestroy:function(){this.destroy()},data:function(){return{currenTranslateY:0,height:"",length:0,currentIndex:0,noAnimate:!1}},methods:{destroy:function(){this.timer&&clearInterval(this.timer)},init:function(){this.destroy(),this.cloneNode&&this.$refs.box.removeChild(this.cloneNode),this.cloneNode=null;var t=this.$refs.box.firstElementChild;return!!t&&(this.length=this.$refs.box.children.length,this.height=this.itemHeight||t.offsetHeight,"up"===this.direction?(this.cloneNode=t.cloneNode(!0),this.$refs.box.appendChild(this.cloneNode)):(this.cloneNode=this.$refs.box.lastElementChild.cloneNode(!0),this.$refs.box.insertBefore(this.cloneNode,t)),!0)},start:function(){var t=this;"down"===this.direction&&this.go(!1),this.timer=setInterval(function(){"up"===t.direction?(t.currentIndex+=1,t.currenTranslateY=-t.currentIndex*t.height):(t.currentIndex-=1,t.currenTranslateY=-(t.currentIndex+1)*t.height),t.currentIndex===t.length?setTimeout(function(){t.go(!0)},t.duration):-1===t.currentIndex?setTimeout(function(){t.go(!1)},t.duration):t.noAnimate=!1},this.interval+this.duration)},go:function(t){this.noAnimate=!0,t?(this.currentIndex=0,this.currenTranslateY=0):(this.currentIndex=this.length-1,this.currenTranslateY=-(this.currentIndex+1)*this.height)}}}),A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vux-marquee",style:{height:this.height+"px"}},[e("ul",{ref:"box",staticClass:"vux-marquee-box",style:{transform:"translate3d(0,"+this.currenTranslateY+"px,0)",transition:"transform "+(this.noAnimate?0:this.duration)+"ms"}},[this._t("default")],2)])},staticRenderFns:[]};var E=i("VU/8")(V,A,!1,function(t){i("F2QK")},null,null).exports,U={render:function(){var t=this.$createElement;return(this._self._c||t)("li",[this._t("default")],2)},staticRenderFns:[]},F=i("VU/8")({name:"marquee-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.destroy(),t.$parent.init(),t.$parent.start()})}},U,!1,null,null,null).exports,W=(String,Object,Array,String,{name:"panel",props:{header:String,footer:Object,list:Array,type:{type:String,default:"1"}},methods:{onImgError:function(t,e){this.$emit("on-img-error",JSON.parse(O()(t)),e),t.fallbackSrc&&(e.target.src=t.fallbackSrc)},getUrl:function(t){return Object(P.a)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),Object(P.b)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),Object(P.b)(t.url,this.$router)}}}),D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header)},on:{click:t.onClickHeader}},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[t._t("body",["1"===t.type?t._l(t.list,function(e){return i("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])])}):t._e(),t._v(" "),"2"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])}):t._e(),t._v(" "),"3"===t.type?[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[i("div",{staticClass:"weui-cells"},t._l(t.list,function(e){return i("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-cell__hd"},[i("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),i("span",{staticClass:"weui-cell__ft"})])}))])]:t._e(),t._v(" "),"4"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e(),t._v(" "),"5"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-media-box_appmsg"},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])]),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title&&"3"!==t.type?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:t.getUrl(t.footer.url)},on:{click:function(e){return e.preventDefault(),t.onClickFooter(e)}}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()])])},staticRenderFns:[]};var q=i("VU/8")(W,D,!1,function(t){i("UKxk")},null,null).exports,X=i("rLAy");X.a;var z=["A","B01","B02","B03","B04","B05","B06","B07","B08","B09","B010"],Y=0,K=[{start:0,end:9},{start:0,end:9}],Z="A",J=!1;var G={name:"Index",components:{ViewBox:a,XHeader:u,Tabbar:f,TabbarItem:w,Tab:I,TabItem:N,Swiper:H,Marquee:E,MarqueeItem:F,Panel:q,Toast:X.a},data:function(){return{tabIndex:0,swiperList:[{url:"javascript:",img:"https://static.vux.li/demo/1.jpg",title:"送你一朵fua"},{url:"javascript:",img:"https://static.vux.li/demo/5.jpg",title:"送你一次旅行",fallbackImg:"https://static.vux.li/demo/3.jpg"}],swiperIndex:0,marqueeList:[],list:[],moreList:[],impMoreNews:[]}},created:function(){var t=this;this.$jsonp("https://3g.163.com/touch/jsonp/sy/recommend/0-1.html").then(function(e){t.swiperList=e.focus.filter(function(t){return null==t.addata}).map(function(t){return{url:t.link,img:t.picInfo[0].url,title:t.title}}),t.list=e.list.map(function(t){return{src:t.picInfo[0]&&t.picInfo[0].url,title:t.title,desc:t.digest,url:t.link}}),t.marqueeList=e.live.map(function(t){return{title:t.title}}),t.impNews=e.news.map(function(t){return{src:t.picInfo[0]&&t.picInfo[0].url,title:t.title,desc:t.digest,url:t.link}}),J=!0})},methods:{refresh:function(){var t=this;++Y===z.length&&(Y=0),Z=z[Y],this.$jsonp("https://3g.163.com/touch/jsonp/sy/recommend/0-9.html",{miss:"00",refresh:Z}).then(function(e){t.list=e.list.map(function(t){return{src:t.picInfo[0]&&t.picInfo[0].url,title:t.title,desc:t.digest,url:t.link}}),t.impNews=e.news.map(function(t){return{src:t.picInfo[0]&&t.picInfo[0].url,title:t.title,desc:t.digest,url:t.link}}),t.$refs.scroller.finishPullToRefresh(),t.$vux.toast.show("刷新完毕")})},infinite:function(){var t=this;if(J){var e=this.tabIndex;0===e?setTimeout(function(){t.$jsonp("https://3g.163.com/touch/jsonp/sy/recommend/"+K[e].start+"-"+K[e].end+".html",{miss:"00",refresh:Z}).then(function(i){console.log(i);var n=i.list.map(function(t){return{src:t.picInfo[0]&&t.picInfo[0].url,title:t.title,desc:t.digest,url:t.link}});t.moreList=t.moreList.concat(n),K[e].start+=10,K[e].end=K[e].start+9,t.$refs.scroller.finishInfinite()})},1e3):1===e&&setTimeout(function(){t.$jsonp("https://3g.163.com/touch/jsonp/sy/recommend/"+K[e].start+"-"+K[e].end+".html",{miss:"00",refresh:Z}).then(function(i){console.log(i);var n=i.news.map(function(t){return{src:t.picInfo[0]&&t.picInfo[0].url,title:t.title,desc:t.digest,url:t.link}});t.impMoreNews=t.impMoreNews.concat(n),K[e].start+=10,K[e].end=K[e].start+9,t.$refs.scroller.finishInfinite()})},1e3)}else this.$refs.scroller.finishInfinite()},tabClick:function(t){this.tabIndex=t}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("tab",[i("tab-item",{attrs:{selected:""},on:{"on-item-click":function(e){t.tabClick(0)}}},[t._v("推荐")]),t._v(" "),i("tab-item",{on:{"on-item-click":function(e){t.tabClick(1)}}},[t._v("要闻")])],1),t._v(" "),i("scroller",{ref:"scroller",staticClass:"my-scroller",attrs:{"on-infinite":t.infinite,"on-refresh":t.refresh}},[0===t.tabIndex?i("div",[i("swiper",{attrs:{list:t.swiperList,loop:!0},model:{value:t.swiperIndex,callback:function(e){t.swiperIndex=e},expression:"swiperIndex"}}),t._v(" "),i("marquee",{staticClass:"my-marquee"},t._l(t.marqueeList,function(e,n){return i("marquee-item",{key:n},[t._v("\n                "+t._s(e.title)+"\n            ")])})),t._v(" "),i("panel",{attrs:{list:t.list}}),t._v(" "),i("panel",{attrs:{list:t.moreList}})],1):i("div",[i("panel",{attrs:{list:t.impNews}}),t._v(" "),i("panel",{attrs:{list:t.impMoreNews}})],1)])],1)},staticRenderFns:[]},tt=i("VU/8")(G,Q,!1,null,null,null).exports,et={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.msg)+"\n")])},staticRenderFns:[]},it=i("VU/8")({name:"Mine",data:function(){return{msg:"我的页面"}}},et,!1,null,null,null).exports,nt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.msg)+"\n")])},staticRenderFns:[]},st=i("VU/8")({name:"Page2",data:function(){return{msg:"测试"}}},nt,!1,null,null,null).exports,at={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.msg)+"\n")])},staticRenderFns:[]},rt=i("VU/8")({name:"Page3",data:function(){return{msg:"测试2"}}},at,!1,null,null,null).exports;n.a.use(y.a);var ot=new y.a({routes:[{path:"/",component:tt},{path:"/mine",component:it},{path:"/page2",component:st},{path:"/page3",component:rt}]}),lt=i("qJdI"),ct=i.n(lt),ut=i("POcy"),dt=i.n(ut),ht=(i("Peep"),i("3BeM"));n.a.config.productionTip=!1,n.a.use(ct.a),n.a.use(dt.a),n.a.use(ht.a),new n.a({el:"#app",router:ot,components:{App:k},template:"<App/>"})},UKxk:function(t,e){},XH0C:function(t,e){},gXWh:function(t,e){},j62E:function(t,e){},mzja:function(t,e,i){"use strict";var n=i("JkZY"),s=(n.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[n.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var r=i("VU/8")(s,a,!1,function(t){i("6Erz")},null,null).exports,o=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:r},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var c=i("VU/8")(o,l,!1,function(t){i("IwgP")},null,null);e.a=c.exports},oR1u:function(t,e){},p9A2:function(t,e){},rLAy:function(t,e,i){"use strict";var n=i("xNvf"),s=(n.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[n.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var r=i("VU/8")(s,a,!1,function(t){i("8vzP")},null,null);e.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.750131fed69c01c064f9.js.map