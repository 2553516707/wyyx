<template>
    <div style="width:100%;overflow: hidden">
        <div class="dl-pase">
             <div class="info-con">
                 <div class="info-img">
                     <img id="goods_img" src="../../static/details-img/imer.png" alt="">
                 </div>
                 <div class="info-text">
                     <div>
                         <p class="price">价格：¥<span >89</span></p>
                         <p>已选择：<span>请选择规格数量</span></p>
                     </div>
                 </div>
             </div> 
             <div class="sty">
                 <div class="color">
                     <p>颜色</p>
                     <ul id="color">
                         <li v-for="(item,index) in color" :key="index">{{item}}</li>
                         
                     </ul>
                 </div>
                 <div class="color">
                    <p>数量</p>
                    <ul class="num">
                         <li>-</li>
                         <li id="goods_num">1</li>
                         <li>+</li>
                    </ul>
                 </div>
             </div>
        </div>
        <div class="inner">
            <div class="inner-but"><img src="../../static/details-img/but.png" alt=""></div>
            <button class="in-buttom">立即购买</button>
            <button class="inner-buttom">加入购物车</button>
        </div>
    </div>
</template>

<script>
export default {

data() {
    return {
        goods:{},
        color:["岩石灰","黑色","卡其色"]
        
    }
},
mounted() {
    this.goods=this.$route.query
    console.log(this.goods)
    var _this = this
    _this.goods['goods_img']=document.getElementById('goods_img').getAttribute('src')
    var oColor = document.querySelectorAll("#color li")
    for(var i=0;i<oColor.length;i++){
        oColor[i].onclick=function(){
            _this.goods.goods_color=this.innerHTML
            console.log(_this.goods)
        }
    }
    
    document.getElementsByClassName('inner-buttom')[0].onclick=function(){
        // _this.goods['goods_num']=document.getElementById('goods_tit').innerHTML
        console.log(_this.goods)
        
        _this.$http({
                method:'get',
                url:"http://localhost:3000/wyyx/add",
                params:_this.goods
            }).then((res)=>{
                console.log(res.data)
            })
     }
},

}
</script>

<style scope>
    .dl-pase{
        padding: .22rem .2rem .84rem;
    }
    .info-con{
        height: 1.32rem;
        margin-bottom: .28rem;
        position: relative;
    }
    .info-img{
        width: 1.0333333rem;
        overflow: hidden;
        float: left;
        border-radius: .02rem;
        margin-right: -1.033333rem;
        background-color: #f4f4f4;
    }
    .info-img img{
        width: 100%;
        height: 100%;
    }
    .info-text{
        position: absolute;
        display: flex;
        align-items: flex-end;
        line-height: 1;
        margin-left: 1.44rem;
        bottom: .3rem;
        line-height: 0.3rem;
        font-size: .16rem;
    }
    .price{
        color: #b4282d;
    }
    .color{
        font-size: 0.16rem;
        line-height: 0.5rem;
        overflow: hidden;
    }
    .color ul li{
        float: left;
        width: .6rem;
        line-height: 0.4rem;
        border: 1px double #7F7F7F;
        text-align: center;
        margin-right: 0.2rem
    }
    .color ul.num li{
        float: left;
        margin-right: 0rem;
        line-height: 0.3rem;
        width: 0.35rem;
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
