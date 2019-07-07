<template>
  <div>
    <div class="g-row">
      <div class="m-mainView">
        <div style="height: 0.44rem;" class="hdWraper">
          <div class="m-hd">
            <div class="m-cartHd">
              <span class="logo">购物车</span>
              <div class="right">
                <div class="cart-coupon withSpecialIcon">
                  <span class="txt">领券</span>
                </div>
                <span v-if="goods>=1" class="cart-btn" style="font-size:.15rem">编辑</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-notice" v-if="price>=88">
          <span>已满足免邮条件</span>
        </div>
        <div v-else>
          <ul class="m-servicePolicy">
            <li class="item">
              <i class="u-icon u-icon-servicePolicy"></i>
              <span>30天无忧退货</span>
            </li>
            <li class="item">
              <i class="u-icon u-icon-servicePolicy"></i>
              <span>48小时快速退款</span>
            </li>
            <li class="item">
              <i class="u-icon u-icon-servicePolicy"></i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </div>
        <div>
          <ul class="cartGroupList">
            <li class="item">
              <div class="m-cartGroup m-cartGroup-empty m-cartGroup-overall">
                <div>
                  <header class="hd">
                    <div class="promotion">
                      <div class="promotion-left"></div>
                      <a class="promotion-right" href="javascript:;">
                        <span class="cart-tag tag"  style="-webkit-transform:scale(0.9);">全场加价购</span>
                        <p class="promTip">再购130元立享满130元可超值换购</p>
                        <div class="promBtn">
                          <span>去凑单</span>
                          <i class="u-icon u-icon-arrow_red_ic"></i>
                        </div>
                      </a>
                    </div>
                    <a class="promGuide getGift" href="javascript:;">
                      <span>查看换购商品</span>
                      <i class="u-icon u-icon-arrow_black_ic"></i>
                    </a>
                  </header>
                </div>
                <ul class="list"></ul>
              </div>
            </li>
            <li class="item cartList">
              <div class="m-cartGroup">
                <div>
                  <header class="hd">
                    <div class="promotion">
                      <div class="promotion-left">
                        <i class="m-checkbox checkbox"></i>
                      </div>
                      <a class="promotion-right" href="javascript:;">
                        <span class="cart-tag tag">满额减</span>
                        <p class="promTip">再购150元立享每满150元减25元</p>
                        <div class="promBtn">
                          <span>去凑单</span>
                          <i class="u-icon u-icon-arrow_red_ic"></i>
                        </div>
                      </a>
                    </div>
                  </header>
                </div>
                <ul class="list">
                  <li class="item">
                    <div class="m-swipeOut">
                      <div class="inner" style="transform:translate3d(0px, 0, 0);">
                        <div class="cnt" style="transform:translate3d(0px, 0, 0);">
                          <div class="m-cartGood">
                            <div class="m-cartGoodIn">
                              <i class="m-checkbox checkbox"></i>
                              <div class="imgWrap">
                                <img
                                  src="http://yanxuan.nosdn.127.net/6dbf167f17960ec395af8ce9d6732014.png?imageView&amp;thumbnail=160x0&amp;quality=75"
                                  class="img"
                                >
                              </div>
                              <div class="cnt">
                                <div class="line1">
                                  <div class="name">
                                    <span class="nameIn">
                                      <span></span>
                                      <span>青梅饼 56克</span>
                                    </span>
                                  </div>
                                </div>
                                <div class="line2 valid">
                                  <span class="spec">陈皮梅饼 56克*1袋</span>
                                  <i class="u-icon u-icon-arrow_black_ic"></i>
                                </div>
                                <div class="line3">
                                  <span class="price f-ff-m">
                                    <span>¥</span>
                                    <span>16</span>
                                  </span>
                                </div>
                                <div class="m-selnum m-selnum-2 dl">
                                  <i class="less z-dis" style="display:inline-block"></i>
                                  <div class="textWrap">
                                    <input type="tel" value="1">
                                  </div>
                                  <div class="more"></div>
                                </div>
                              </div>
                            </div>
                            <div class="goodExtraInfo"></div>
                          </div>
                        </div>
                        <a class="del">
                          <i class="u-icon u-icon-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="item cartList">
              <div class="m-cartGroup">
                <div>
                  <header class="hd">
                    <div class="promotion">
                      <div class="promotion-left">
                        <i class="m-checkbox checkbox"></i>
                      </div>
                      <a class="promotion-right" href="javascript:;">
                        <span class="cart-tag tag">满额减</span>
                        <p class="promTip">再购150元立享每满150元减25元</p>
                        <div class="promBtn">
                          <span>去凑单</span>
                          <i class="u-icon u-icon-arrow_red_ic"></i>
                        </div>
                      </a>
                    </div>
                  </header>
                </div>
                <ul class="list">
                  <li class="item">
                    <div class="m-swipeOut">
                      <div class="inner" style="transform:translate3d(0px, 0, 0);">
                        <div class="cnt" style="transform:translate3d(0px, 0, 0);">
                          <div class="m-cartGood">
                            <div class="m-cartGoodIn">
                              <i class="m-checkbox checkbox"></i>
                              <div class="imgWrap">
                                <img
                                  src="http://yanxuan.nosdn.127.net/6dbf167f17960ec395af8ce9d6732014.png?imageView&amp;thumbnail=160x0&amp;quality=75"
                                  class="img"
                                >
                              </div>
                              <div class="cnt">
                                <div class="line1">
                                  <div class="name">
                                    <span class="nameIn">
                                      <span></span>
                                      <span>青梅饼 56克</span>
                                    </span>
                                  </div>
                                </div>
                                <div class="line2 valid">
                                  <span class="spec">陈皮梅饼 56克*1袋</span>
                                  <i class="u-icon u-icon-arrow_black_ic"></i>
                                </div>
                                <div class="line3">
                                  <span class="price f-ff-m">
                                    <span>¥</span>
                                    <span>16</span>
                                  </span>
                                </div>
                                <div class="m-selnum m-selnum-2 dl">
                                  <i class="less z-dis" style="display:inline-block"></i>
                                  <div class="textWrap">
                                    <input type="tel" value="1">
                                  </div>
                                  <div class="more"></div>
                                </div>
                              </div>
                            </div>
                            <div class="goodExtraInfo"></div>
                          </div>
                        </div>
                        <a class="del">
                          <i class="u-icon u-icon-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div>
            <div style="height: 96px;"></div>
            <div class="m-billingFt m-cartFt">
              <div class="left">
                <div class="checkAll f-vc">
                  <i class="m-checkbox checkbox" style="margin-top:15px"></i>
                  <span class="txt">
                    <span>已选(</span>
                    <span v-model="num">{{num}}</span>
                    <span>)</span>
                  </span>
                </div>
                <div class="right f-vc">
                  <p class="price u-text-red s">
                    <span>合计: ¥</span>
                    <span v-model="price">{{price}}</span>
                  </p>
                </div>
              </div>
              <div class="btn w-button disabled">下单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Cart></Cart> -->
  </div>
</template>

<script>
import Cart from "../components/cart";
export default {
  components: { Cart },
  data() {
    return {
      goods: 0,
      price: 0,
      num:0
    };
  },
  mounted(){
    var _this = this
    var oItem = document.querySelectorAll(".cartGroupList .cartList .m-cartGroup .list")    
    var oHead = document.querySelectorAll(".promotion .promotion-left .m-checkbox")  
    var oCheckAll =  document.querySelectorAll('.checkAll .m-checkbox')[0]
    var oAll=document.querySelectorAll(".m-checkbox")

    
    
	  for(var i=0;i<oHead.length;i++){
      oHead[i].index=i
		    oHead[i].onclick=function(){
        var oGoods = oItem[this.index].querySelectorAll(".m-checkbox")
			  this.classList.toggle("checked")
			  for(var j=0;j<oGoods.length;j++){
				  oGoods[j].classList.toggle("checked")
        }
        _this.checkAll()
        _this.num = document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .inner .checked').length
        _this.price = document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .inner .m-cartGoodIn')
		  }
    }
    oCheckAll.onclick=function(){
      if(document.querySelectorAll(".m-checkbox").length==document.querySelectorAll(".checked").length){
          for(var i=0;i<oAll.length;i++){
            oAll[i].classList.remove('checked')
          }
      }else{
          for(var i=0;i<oAll.length;i++){
            oAll[i].classList.add('checked')
          }
      }
    }
    var oList=document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .m-checkbox')
    console.log(oList)
    for(var i=0;i<oList.length;i++){
      oList[i].index=i
      oList[i].onclick=function(){
        this.classList.toggle('checked')
        if(oItem[this.index].querySelectorAll('.cartList .m-cartGroup .list .m-checkbox').length==oItem[this.index].querySelectorAll('.cartList .m-cartGroup .list .m-checkbox.checked').length){
          document.querySelectorAll(".cartGroupList .cartList .m-cartGroup")[this.index].querySelectorAll('.promotion-left .m-checkbox')[0].classList.add('checked')
        }else{
          document.querySelectorAll(".cartGroupList .cartList .m-cartGroup")[this.index].querySelectorAll('.promotion-left .m-checkbox')[0].classList.remove('checked')
        }
        _this.checkAll()
        _this.num = document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .inner .checked').length

      }
    }
  // add
    var oBox = document.querySelectorAll(".m-selnum ")
    var oMore = document.querySelectorAll(".m-selnum .more")
    var oLess = document.querySelectorAll(".m-selnum .less")
    var oNum = document.querySelectorAll(".m-selnum .textWrap input")
    for(var i=0;i<oMore.length;i++){
      oMore[i].index=i
      oMore[i].onclick=function(){
        oNum[this.index].value=Number(oNum[this.index].value)+1;
        if(Number(oNum[this.index].value)>1){
          oBox[this.index].style.backgroundPositionY='-435px'
        }
        oList[this.index].classList.add('checked')
        if(oItem[this.index].querySelectorAll('.cartList .m-cartGroup .list .m-checkbox').length==oItem[this.index].querySelectorAll('.cartList .m-cartGroup .list .m-checkbox.checked').length){
          document.querySelectorAll(".cartGroupList .cartList .m-cartGroup")[this.index].querySelectorAll('.promotion-left .m-checkbox')[0].classList.add('checked')
        }else{
          document.querySelectorAll(".cartGroupList .cartList .m-cartGroup")[this.index].querySelectorAll('.promotion-left .m-checkbox')[0].classList.remove('checked')
        }
        _this.checkAll()
        _this.num = document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .inner .checked').length

      }
    }
    for(var i=0;i<oLess.length;i++){
      oLess[i].index=i
      oLess[i].onclick=function(){
        oNum[this.index].value=Number(oNum[this.index].value)-1;
        if(Number(oNum[this.index].value)>1){
          oBox[this.index].style.backgroundPositionY='-435px'
        }else{
          oBox[this.index].style.backgroundPositionY='-342px'
          oNum[this.index].value=1
        }
        oList[this.index].classList.add('checked')
        if(oItem[this.index].querySelectorAll('.cartList .m-cartGroup .list .m-checkbox').length==oItem[this.index].querySelectorAll('.cartList .m-cartGroup .list .m-checkbox.checked').length){
          document.querySelectorAll(".cartGroupList .cartList .m-cartGroup")[this.index].querySelectorAll('.promotion-left .m-checkbox')[0].classList.add('checked')
        }else{
          document.querySelectorAll(".cartGroupList .cartList .m-cartGroup")[this.index].querySelectorAll('.promotion-left .m-checkbox')[0].classList.remove('checked')
        }
        checkAll()
      }
    }

    
    //侧滑显示删除按钮
    var container = document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .inner');
    // var container1 = document.querySelectorAll('.cartGroupList .cartList .m-cartGroup .list .inner .cnt');

    for(var i = 0; i < container.length; i++){    
        var x, y, X, Y, swipeX, swipeY;
        container[i].index=i;
        container[i].addEventListener('touchstart', function(event) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
            swipeX = true;
            swipeY = true ;
              
        });
        container[i].addEventListener('touchmove', function(event){
            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY;   
            var oX=X - x   
            // 左右滑动
            if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
                // 阻止事件冒泡
                event.stopPropagation();
                if(X - x > 10){   //右滑
                    event.preventDefault();
                      this.style.transform="translate3d(0px, 0, 0)";   //右滑收起 
                }
                if(x - X > 10){   //左滑
                    event.preventDefault();
                      this.style.transform="translate3d(-80px, 0, 0)";   //左滑展开
                }
                swipeY = false;
            }
            // 上下滑动
            if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                swipeX = false;
            }     
        });
    }
    //计算根节点HTML的字体大小
    function resizeRoot(){
        var deviceWidth = document.documentElement.clientWidth,
            num = 375,
            num1 = num / 100;
        if(deviceWidth > num){
            deviceWidth = num;  
        }
        document.documentElement.style.fontSize = deviceWidth / num1 + "px";
    }
    //根节点HTML的字体大小初始化
    resizeRoot();
    
    window.onresize = function(){
        resizeRoot();
    };

    //已选数量：

    //总价格：
    this.price=0
   
    
  },
  methods:{
    checkAll(){
      var oCheckAll =  document.querySelectorAll('.checkAll .m-checkbox')[0]

      if(document.querySelectorAll(".cartGroupList .m-checkbox").length==document.querySelectorAll(".cartGroupList .m-checkbox.checked").length){
          oCheckAll.classList.add('checked')
          // console.log(document.querySelectorAll(".cartGroupList .m-checkbox").length,document.querySelectorAll(".cartGroupList .m-checkbox.checked").length)
      }else{
          // console.log(document.querySelectorAll(".cartGroupList .m-checkbox").length,document.querySelectorAll(".cartGroupList .m-checkbox.checked").length)
          oCheckAll.classList.remove('checked')
      }

    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 0.12rem;
  text-decoration: none;
  font-family: PingFangSC-Light,helvetica,'Heiti SC';
}
ul,
li {
  list-style: none;
}
.g-row {
  width: 3.75rem;
  margin-right: auto;
  margin-left: auto;
}
.m-mainView {
  padding-bottom: 0.99rem;
}
.m-hd {
  position: fixed !important;
  left: 0;
  top: 0;
  z-index: 5;
  width: 100%;
}
.m-cartHd {
  height: 0.44rem;
  padding: 0 0.15rem;
  line-height: 0.44rem;
  text-align: center;
  background-color: #fff;
  position: relative;
}
.m-cartHd .logo {
  float: left;
  font-size: 0.18rem;
}
.txt {
  font-size: 0.15rem;
}
.m-cartHd .right {
  position: absolute;
  top: 0;
  right: 0.15rem;
  height: 0.44rem;
  font-size: 0.15rem;
}
.m-cartHd .right .cart-coupon {
  display: inline-block;
  position: relative;
  height: 0.19rem;
  line-height: 0.19rem;
  color: #b4282d;
  vertical-align: top;
  margin-top: 0.125rem;
  margin-right: 0.15rem;
}
.m-cartHd:after {
  content: "";
  position: absolute;
  background-color: #d9d9d9;
  left: 0;
  width: 100%;
  height: 1px;
  transform-origin: 50% 100% 0;
  bottom: 0;
}
.m-servicePolicy {
  position: relative;
  z-index: 1;
  height: 0.35rem;
  padding: 0 0.15rem;
  background: #f4f4f4;
}
.m-servicePolicy .item {
  line-height: 0.35rem;
  font-size: 0.12rem;
  color: #666;
  float: left;
}
.m-servicePolicy .item:nth-of-type(2) {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.m-servicePolicy .item:nth-of-type(3) {
  position: absolute;
  right: 0.15rem;
}
.m-servicePolicy .item .u-icon-servicePolicy,
.m-servicePolicy .item .u-icon-servicePolicySolid {
  margin-right: 0.03rem;
  position: relative;
  top: -1px;
}
.u-icon-servicePolicy {
  display: inline-block;
  vertical-align: middle;
  background-image: url("../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_servicePolicy-0ec842d966.png");
  background-repeat: no-repeat;
  background-size: 98%;
  width: 0.05rem;
  height: 0.05rem;
}
.m-defaultPage {
  position: fixed;
  top: 0.44rem;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  background-color: #f4f4f4;
  text-align: center;
}
.m-defaultPage .container {
  position: absolute;
  top: -0.25rem;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1.5rem;
  margin: auto;
}
.m-defaultPage-noCart .img {
  background-image: url("../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_noCart-d6193bd6e4.png");
}
.m-defaultPage .img {
  display: inline-block;
  vertical-align: middle;
  width: 1.24rem;
  height: 1.24rem;
  margin-bottom: 0.04rem;
  background-size: 1.24rem 1.24rem;
  background-position: center center;
  background-repeat: no-repeat;
}
.m-defaultPage .txt {
  font-size: 0.14rem;
  line-height: 1;
  color: #7f7f7f;
}
.noCart-login {
  margin-top: -0.1rem;
}
.noCart-login .noCart-title {
  margin-bottom: 0.25rem;
  line-height: 1;
  font-size: 0.14rem;
  color: #999;
}
.noCart-login .noCart-btn {
  margin: auto;
  width: 2.4rem;
  height: 0.46rem;
  font-size: 0.15rem;
  line-height: 0.46rem;
  color: #fff;
  background-color: #b4282d;
  border-radius: 0.03rem;
}
.m-mainView .m-notice {
  font-size: 0.15rem;
}
.m-notice {
  padding: 0 0.3rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  color: #f48f18;
  background-color: #fff8d8;
}
.m-notice span {
  display: block;
}
.m-mainView .cartGroupList>.item {
    margin-bottom: .1rem;
}
.m-cartGroup {
    background-color: #fff;
}
.m-cartGroup .hd {
    overflow: hidden;
}
.m-cartGroup .hd .promotion {
    margin-left: .15rem;
    padding: .1rem .15rem .1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.m-cartGroup .hd .promotion, .m-customInfo .line {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
}
.m-cartGroup .hd .promotion .promotion-right {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
}
.m-cartGroup .hd .promotion .promotion-right, .m-cartGroup .suit .con {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
}
.m-cartGroup .hd .promotion .promotion-right .cart-tag {
    background-color: #FC865F;
    background-image: linear-gradient(-225deg,#FC865F 0,#FC625F 100%);
    border-radius: .02rem;
    padding: 0 .04rem;
    line-height: .16rem;
    font-size: .1rem;
    text-align: center;
    color: #FFF;
    margin: 0 .06rem 0 .02rem;
    white-space: nowrap;
    -webkit-flex-shrink: 0;
    -moz-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
	font-size : 12px;
    display:block;
}
.m-cartGroup .hd .promotion .promotion-right .promTip {
    font-size: .14rem;
    line-height: .2rem;
    color: #333;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
	white-space: nowrap;
}
.m-cartGroup .hd .promotion .promotion-right .promBtn {
    -webkit-flex-shrink: 0;
    -moz-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: .15rem;
    color: #B4282D;
    font-size: .12rem;
    line-height: .18rem;
}
.m-cartGroup .hd .promotion .promotion-right .promBtn .u-icon {
    vertical-align: top;
    margin: .04rem 0 0 .04rem;
}
.u-icon-arrow_red_ic {
    background-image: url('../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_arrow_red_ic-8ef796200c.png');
    width: .05rem;
    height: .09rem;
}
.u-icon-arrow-right, .u-icon-arrow-right-red, .u-icon-arrow-right-white, .u-icon-arrow-right1, .u-icon-arrow-right4, .u-icon-arrow_black_ic, .u-icon-arrow_red_ic, .u-icon-topicAllProducts, .u-icon-unfoldedDesc, .u-icon-videoDuration, .u-icon-videoListReadCount, .u-icon-videoLookPlay, .u-icon-videoPlay, .u-icon-videoPlayLg, .u-icon-videoRcmdPlay {
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.m-cartGroup .hd .getGift {
    color: #333;
    white-space: nowrap;
}
.m-cartGroup .hd .promGuide {
    display: block;
    margin: 0 .15rem .05rem .43rem;
    padding: 0 .1rem;
    font-size: .12rem;
    line-height: .26rem;
    background-image: linear-gradient(-225deg,rgba(252,134,95,.05),rgba(252,98,95,.05) 100%);
    border-radius: .02rem;
    position: relative;
}
.u-icon-arrow_black_ic {
    background-image: url('../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_arrow_black_ic-b6eb851bba.png');
    width: .05rem;
    height: .09rem;
	position: absolute;
	right: 0.09rem;
	top: 0.1rem
}
.m-cartGroup .hd .promotion .promotion-left .m-checkbox {
    margin-right: .08rem;
    -webkit-flex-shrink: 0;
    -moz-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.m-checkbox {
    display: inline-block;
    width: .19rem;
    height: .19rem;
    background-position: 0 -2.44rem;
}
.m-checkbox, .m-checkbox-1, .m-checkbox.small {
    background-image: url('../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_sprites_checkbox-s5698dc1449-767bf63b53.png');
    background-repeat: no-repeat;
    background-size: .19rem 2.63rem;
    vertical-align: middle;
}
.m-cartGroup>.list>.item {
    position: relative;
}
.m-swipeOut {
    overflow: hidden;
    width: 100%;
    background-color: #fff;
}
.m-swipeOut .inner {
    width: 100%;
    min-height: .97rem;
    position: relative;
    transition: all .5s;
}
.m-cartGood {
    padding-left: .43rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.m-cartGood, .m-cartGood .m-cartGoodIn {
    position: relative;
}
.m-cartGood .m-cartGoodIn {
    display: block;
    padding: .12rem .15rem 0 0;
    height: 1.1rem;
}
.m-cartGood .checkbox {
    position: absolute;
    left: -.28rem;
    top: .46rem;
    margin: auto;
}
.m-cartGood .m-cartGoodIn .imgWrap {
    float: left;
    position: relative;
    margin-right: .1rem;
    border-radius: 2px;
    overflow: hidden;
    background-color: #eee;
}
.m-cartGood .m-cartGoodIn .imgWrap img {
    display: block;
    width: .86rem;
    height: .86rem;
}
.m-cartGood .m-cartGoodIn .cnt {
    position: relative;
    height: .86rem;
    margin: 0 0 0 .96rem;
    transition: all .5s;
}
.m-cartGood .m-cartGoodIn .cnt .line1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
    font-size: .14rem;
}
.m-cartGood .m-cartGoodIn .cnt .line1 .nameIn {
    max-height: .36rem;
    line-height: .18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.m-cartGood .m-cartGoodIn .cnt .line1 .nameIn span{
    font-size: .14rem;
}
.m-cartGood .m-cartGoodIn .cnt .line2.valid {
    padding: 0 .05rem;
    height: .19rem;
    color: #7F7F7F;
    background: #FAFAFA;
    border: .005rem solid #EFEFEF;
    border-radius: .01rem;
}

.m-cartGood .m-cartGoodIn .cnt .line2 {
    display: inline-block;
    margin-top: .05rem;
    font-size: .12rem;
    line-height: .18rem;
    white-space: nowrap;
}
.m-cartGood .m-cartGoodIn .cnt .line2 .spec {
    display: inline-block;
    max-width: 1.63rem;
    color: #7F7F7F;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.m-cartGood .m-cartGoodIn .cnt .line2.valid .u-icon {
    display: inline-block;
    margin: .05rem .05rem 0 .065rem;
    vertical-align: top;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    position: initial;
}
.m-cartGood .m-cartGoodIn .cnt .line3 {
    position: absolute;
    bottom: -.05rem;
    left: 0;
    font-size: .14rem;
    line-height: .2rem;
    width: 1.33rem;
}
.m-cartGood .m-cartGoodIn .m-selnum, .m-cartGood .m-cartGoodIn .openPromotions {
    position: absolute;
    right: 0;
    bottom: -.02rem;
    padding-top: .01rem;
    width: .89rem;
    height: .27rem;
    background-origin: content-box;
}
.m-selnum-2.dl {
    background-position: 0 -3.42rem;
}
.m-selnum-2 {
    display: inline-block;
    width: .88rem;
    background-position: 0 -11.6rem;
}
.m-selnum, .m-selnum-1, .m-selnum-2 {
    background-image: url('../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_sprites_selnum-s47503e6ace-b4dda2963a.png');
    background-repeat: no-repeat;
    background-size: 1.545rem 5rem;
    vertical-align: middle;
}
.m-selnum-2 .less, .m-selnum-2 .more {
    width: .295rem;
}
.m-selnum-2, .m-selnum-2 .less, .m-selnum-2 .more, .m-selnum-2 .textWrap, .m-selnum-2 input {
    height: .26rem;
}
.m-selnum .less, .m-selnum .more, .m-selnum .textWrap {
    position: relative;
    float: left;
    height: .33rem;
}
.m-selnum .less, .m-selnum .more, .m-selnum .textWrap, .m-selnum input {
    border: none;
    background-color: transparent;
}
.m-selnum-2 .textWrap {
    width: .29rem;
    line-height: .26rem;
}
.m-selnum-2, .m-selnum-2 .less, .m-selnum-2 .more, .m-selnum-2 .textWrap, .m-selnum-2 input {
    height: .26rem;
}
.m-selnum .textWrap input {
    z-index: 1;
}
.m-selnum .textWrap, .m-selnum .textWrap input, .m-statusbar .statusCnt {
    font-size: .12rem;
    position: relative;
}
.m-selnum input {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    text-align: center;
    color: #333;
}
.m-mainView .m-billingFt {
    bottom: .49rem;
}
.m-billingFt {
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-right: 1.13rem;
    background-color: #fff;
}
.m-billingFt>.left {
    width: 100%;
    padding-left: .15rem;
    height: .48rem;
    position: relative;
    line-height: .48rem;
}
.m-cartFt>.left .checkAll {
    float: left;
    line-height: .48rem;
    font-size: .14rem;
}
.m-cartFt>.left .checkAll .checkbox {
    margin-right: .08rem;
}
.m-cartFt>.left .checkAll .checkbox, .m-cartFt>.left .checkAll .txt {
    float: left;
    color: #7f7f7f;
}
.m-cartFt>.left>.right {
    float: right;
    line-height: 1;
    text-align: right;
    margin-right: .04rem;
}
.m-cartFt>.left>.right .price {
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 1.5rem;
}
.clearInvalidItemBar .con .cl, .m-cartFt>.left>.right .s {
    font-size: .14rem;
    line-height: .48rem
}
.u-text-red {
    color: #b4282d;
}
.m-billingFt>.left:after {
    content: '';
    position: absolute;
    background-color: #d9d9d9;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: 50% 100% 0;
    top: 0;
}
.m-billingFt>.btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.13rem;
    border: 0!important;
    line-height: .48rem;
    height: .48rem;
    border-radius: 0;
}
.w-button, .w-button:focus, .w-button:visited {
    display: inline-block;
    vertical-align: middle;
    width: 1.26rem;
    text-align: center;
    line-height: .34rem;
    font-size: .14rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    border-radius: 4px;
    overflow: hidden;
}
.m-checkbox.checked {
    background-position: 0 -1.16rem;
}
.m-swipeOut .del {
    position: absolute;
    left: 100%;
    top: 0;
    width: .70rem;
    background-color: #e83a3a;
    height: 100%;
}
.m-swipeOut .del .u-icon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: .44484rem auto;
}
.u-icon-trash {
    display: inline-block;
    vertical-align: middle;
    background-image: url('../../static/cart/hxm_yanxuan-wap_p_20161201_style_img_icon-normal_trash-7104b898c7.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .205rem;
    height: .21rem;
}
</style>
