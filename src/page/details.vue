<template>
    <div style="width:100%;overflow: hidden">
        <div class="logo-img">
            <img id="goods_img" src="../../static/details-img/8eae3b3fdae1a8e4025836257ceaff4e.jpg" alt="">
        </div>
        <div class="detchara">
          <div class="det-item">
            <div class="det-left"><img src="../../static/details-img/8c7aaf78e22798df4ccc582fc876bdea.jpg" alt=""> </div>
            <div class="det-right"> <p>轻松面料</p><p>更好打理</p></div>
          </div>
          <div class="det-item">
            <div class="det-left"><img src="../../static/details-img/8c7aaf78e22798df4ccc582fc876bdea.jpg" alt=""> </div>
            <div class="det-right"> <p>轻松面料</p><p>更好打理</p></div>
          </div>
          <div class="det-item">
            <div class="det-left"><img src="../../static/details-img/8c7aaf78e22798df4ccc582fc876bdea.jpg" alt=""> </div>
            <div class="det-right"> <p>轻松面料</p><p>更好打理</p></div>
          </div>
        </div>
        <div class="dt-section-1">
            <div class="dt-conte">
                <div class="dt-pirce">
                    <div>
                        <span>￥</span>
                        <span id='price'>249</span>
                    </div>
                </div>
                <div class="dt-base">
                    <div class="base-left">
                        <p id="goods_tit">女式花卉度假飘逸连衣裙</p>
                        <p>浪漫茶歇裙，悠闲假日袅袅而至。</p>
                    </div>
                    <div class="base-right">
                        <div>
                            <p>97.3%</p>
                            <p>好评率</p>
                        </div>
                        <i style="background-image:url('../../static/details-img/icon.png');"></i>
                    </div>
                </div>
                <div class="dt-shop">
                    <p>购物返: 新用户最高返<span>¥2.49回馈金 + 24积分</span></p>
                    <i class="icon" style="background-image:url('../../static/details-img/icon.png');"></i>
                </div>
                <div class="dt-spet">
                    <p>请选择规格数量</p>
                    <i class="icon" style="background-image:url('../../static/details-img/icon.png');"></i>
                </div>
                <div class="dt-list">
                    <p>限制：该商品不可使用优惠券</p>
                </div>
                <div class="dt-list">
                    <p>配送：<span>请选择配送地址</span></p>
                    <i class="icon" style="background-image:url('../../static/details-img/icon.png');"></i>
                </div>
                <div class="dt-list">
                    <div class="list-left">服务: </div>
                    <ul class="list-right">
                        <li>支持7天无忧退换货</li>
                        <li>48小时快速退款</li>
                        <li>满88元免邮费</li>
                        <li>网易自营品牌</li>
                        <li>国内部分地区无法配送</li>
                        <li>不享受活动优惠</li>
                        <li>不享受企业特权</li>
                        <li>不享受学生特权</li> 
                    </ul>
                    <i class="icon" style="background-image:url('../../static/details-img/icon.png');"></i>
                </div>
                <div class="dt-detail">
                    <div class="dt-attr">
                        <div class="tt">商品参数</div>
                        <div class="show"><p>版型</p><span>修身型</span></div>
                        <div class="show"><p>适用人群</p><span>女士</span></div>
                        <div class="show"><p>适用季节</p><span>夏季</span></div>
                        <div class="show"><p>尺码</p><span>XL、L、M、S</span></div>
                        <div class="show"><p>颜色</p><span>绿叶仙踪</span></div>
                        <div class="show"><p>风格</p><span>休闲时尚</span></div>
                        <div class="show"><p>厚度</p><span>薄款</span></div>
                        <div class="show"><p>成分</p><span>100%聚酯纤维</span></div>
                        <div class="show"><p>温馨提示</p><span>实物标签品名与页面品名不一致，实际商品无误</span></div>
                    </div> 
                </div>
                <div class="inner">
                    <div class="inner-but"><img src="../../static/details-img/but.png" alt=""></div>
                    <button class="in-buttom">立即购买</button>
                    <button class="inner-buttom">加入购物车</button>
                </div>
            </div>
        </div>

  </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'
// axios.defaults.baseURL='http://localhost:3000';  //设置一个类似base_url的请求路径
global.axios=axios;  //设置一个全局axios便于调用
export default {
  data() {
    return {
        goods:{
            "goods_tit":'',
            "goods_img":'',
            "price":0,
            "goods_color":'',
            "goods_num":1,
        }
    };
  },
  mounted() {
      var _this= this
      document.getElementsByClassName('inner-buttom')[0].onclick=function(){
          _this.goods['goods_tit']=document.getElementById('goods_tit').innerHTML
        //   _this.goods['goods_img']=document.getElementById('goods_img').getAttribute('src')
          _this.goods['price']=document.getElementById('price').innerHTML
          _this.$router.push({name:'cycimnr',params:_this.goods})
        //   console.log(qs.stringify(_this.goods))
          
        //     var instance = axios.create({ headers: {'content-type': 'application/x-www-form-urlencoded'} });
        //     instance.post("http://localhost:3000/wyyx",qs.stringify(_this.goods)).then(function(response){
        //         console.log(response.data)
        //   }).catch(function(err){
        //       console.log(err)
        //   });
          
        //   post("http://localhost:3000/wyyx",qs.stringify(_this.goods)).then(function(response){
        //         console.log(response.data)
        //   }).catch(function(err){
        //       console.log(err)
        //   });

      }
  },
};
</script>

<style>
.detchara{
    padding: .08rem .1rem;
    background-color: #F9F9F9;
    display: -ms-flexbox;
    display: flex;
}
.logo-img{
    width: 100%;
    height: 4rem;
    margin-bottom: .2rem;
}
.logo-img img{
    width: 100%;
    height: 100%;
}
.det-item{
  display: flex;
  flex: 1;
}
.det-left{
  width: 0.48rem;
  height: .48rem;
  margin-right: .04rem;
}
.det-left img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.det-right p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: .75rem;
    font-size: .14rem;
    line-height: .21333333rem;
    margin-bottom: .1066666666rem;
}
.det-right p:nth-child(2){
  margin-bottom: 0;
}
.dt-section-1{
    border-bottom: none;
}
.dt-conte{
    position: relative;
    padding: .106666rem 0 .18rem .16rem;
}
.dt-pirce{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.dt-pirce span{
    color: #B4282D;
    font-family: PingFang-SC-Bold;
    font-size: .24rem;
    font-weight: 700;
}
.dt-base{
    margin-top: .086666rem;
}
.base-left{
    float: left;
    padding-right: .16rem;
}
.base-left p:nth-child(1){
    font-size: .16rem;
    margin-bottom: .0133333em;
    font-family: PingFangSC-Regular;
}
.base-left p:nth-child(2){
    font-size: .12rem;
    line-height: .24rem;
    color: #7f7f7f;
}
.base-right{
    display: block;
    float: right;
    margin-right: 0.1rem
}
.base-right{
    padding-left: .103333333rem;
    text-align: center;
    font-size: .12rem;
}
.base-right div{
    float: left;
}
.base-right p:nth-child(1){
    font-size: 0.14rem;
    color: #B4282D;
    font-weight: 700;
    line-height: .24rem;
}
.base-right p:nth-child(2){
    line-height: .2rem;
    font-size: .12rem;
    color: #7F7F7F;
}
.base-right i{
    display: block;
    width: .24rem;
    height: .24rem;
    display: block;
    margin-top: 0.1rem;
    background: no-repeat;
    background-size: 100%;
    float: left;
}
.dt-shop{
    position: relative;
    margin-top: .6rem;
    border-top: 0.10333333rem solid #f4f4f4;
    padding: .156rem 0;
    font-size: 0.13rem;
}
.dt-shop span{
    color: #DD1A21;
}
.icon{
    width: .24rem;
    height: .24rem;
    position: absolute;
    right: .106666666rem;
    top: 0;
    bottom: 0;
    margin: auto;
    background: no-repeat;
    background-size: 100%;
}
.dt-spet{
    position: relative;
    font-size: 0.13rem;
    line-height: 0.36rem;
    border-top: 0.10333333rem solid #f4f4f4;
}
.dt-list{
    position: relative;
    font-size: 0.13rem;
    line-height: 0.36rem;
    overflow: hidden;
}
.dt-list span{
    color: #7F7F7F;
}
.list-left{
    float: left;
}
.list-right{
    float: left;
    margin-left: 0.36rem;
    margin-top: -0.24rem;
}
.list-right li{
    position: relative;
    padding-left: .0833333rem;
    margin-right: .186rem;
    float: left;
    line-height: 1;
    margin-bottom: .0833333rem;
    color: #7f7f7f;
    font-size: .14rem;
}
.list-right li::before{
    content: "";
    position: absolute;
    width: .0533333rem;
    height: .0533333rem;
    background: #b4282d;
    border-radius: 100%;
    left: 0;
    top: .046666666rem;
}
.dt-detail{
    border-bottom: none;
    background: #fff;
}
/* .dt-attr{
    padding: 0.2rem;
} */
.dt-attr .tt{
    padding: .266666rem 0 .1066666rem;
    font-size: .17rem;
    line-height: 1;
}
.dt-attr .show{
    overflow: hidden;
    zoom: 1;
    font-size: .12rem;
    line-height: .24rem;
    padding: .06666666rem .2rem .06666666rem 0;
    background-image: linear-gradient(to right,#919191 33%,rgba(255,255,255,0) 0);
    background-position: top;
    background-size: 12px 1px;
    background-repeat: repeat-x;
}
.dt-attr .show p{
    display: block;
    float: left;
    width: 0.6rem;
}
.dt-attr .show span{
    display: block;
    float: left;;
    margin-right: .1rem;
    position: relative;
    color: #999;
}
.inner{
    display: flex;
    flex-flow: row nowrap;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    
}
.inner-but{
    flex-grow: 0;
    width: 1.04rem;
    border: 1px solid #b4282d;
}
.inner-but img{
    position: relative;
    width: .4rem;
    height: .4rem;
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    transform: translate(50%)
}
.in-buttom{
    width: 1.5rem;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    height: 0.4933333333rem;
    border-color: #c7c7c7;
    color: #333;
    background-color: #fff;
    border: 1px solid #b4282d;
    overflow: hidden;
    font-size: .15rem;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}
.inner-buttom{
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: .15rem;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    display: inline-block;
    vertical-align: middle;
    width:1.5rem;
    text-align: center;
    line-height: 0.4433333333rem;
}























</style>
