<template>
    <div>
        <div class="dl-pase">
             <div class="info-con">
                 <div class="info-img">
                     <img src="../../static/details-img/imer.png" alt="">
                 </div>
                 <div class="info-text">
                     <div>
                         <p class="price">价格：¥<span>89</span></p>
                         <p>已选择：<span>请选择规格数量</span></p>
                     </div>
                 </div>
             </div> 
             <div class="sty">
                 <div class="color">
                     y=
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {

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

    }
</style>
