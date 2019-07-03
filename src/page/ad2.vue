<template>
  <div>
    <div class="header">
      <div class="headerl"></div>
    </div>
    <div class="banner">
      <img src="../../static/img/ad32.jpg" alt />
    </div>
    <div class="main">
      <div class="main_top">
        <div class="title">福利栏目</div>
        <div class="desc">吃穿家清, 每周有新折扣</div>
      </div>
      <div class="imgWrap">
        <img src="../../static/img/ad35.jpg" alt />
        <img src="../../static/img/ad36.png" alt />
      </div>
      <div class="saleMorningMarket">
        <div class="mmContent">
          <i class="mmRedPacket"></i>
          <span class="mmTitle">福利社红包:</span>
          <span style="font-size:0.14rem">您有一个红包待领取，24点失效</span>
        </div>
      </div>
    </div>
    <div class="saleCenterContent">
      <div class="place"></div>
      <ul class="m_navigator">
        <li class="item">
          <div class="icon one"></div>
          <div class="quan">领券中心</div>
        </li>
        <li class="item">
          <div class="icon two"></div>
          <div class="quan">今日折扣</div>
        </li>
        <li class="item">
          <div class="icon three"></div>
          <div class="quan">量贩组合</div>
        </li>
        <li class="item">
          <div class="icon four"></div>
          <div class="quan">我的福利</div>
        </li>
      </ul>
      <div class="m_couponWraper">
        <div class="headerx">领券中心</div>
        <ul class="ul1">
          <div class="m_saleCouponWraper">
            <li v-for="item in data">
              <section class="m_saleCouponGrid">
                <div class="left">
                  <img :src="item.img" alt />
                </div>
                <div class="right">
                  <div class="name">{{item.p1}}</div>
                  <div class="description">{{item.p2}}</div>
                  <div class="validTime">{{item.p3}}</div>
                  <div class="ft_slot-2_column">
                    <div class="m_saleProgress">{{item.p4}}</div>
                    <div class="btn">立即领取</div>
                  </div>
                </div>
              </section>
            </li>
          </div>
        </ul>
        <div class="zk">
            查看全部
        </div>
      </div>
      <div class="ks">
          <div class="ks_title">今日特价</div>
          <div class="ks_title_bottom">汇聚每日新折扣</div>
      </div>
      <div class="er">
          <ul class="ul2">
              <li v-for="item in date_two">
                  <div class="ul2s">
                      <div class="ul2sl">{{item.title}}</div>
                     <img class="ul2sy" :src="item.img" alt="">
                  </div>
                  <div class="ul2x">
                      <p class="ul2x_p1">{{item.p1}}</p>
                      <p class="ul2x_p2">
                          <span>{{item.p2_sp1}}</span>
                          <span>{{item.p2_sp2}}</span>
                      </p>
                      <p class="ul2x_p3">
                          <button>{{item.p3}}</button>
                      </p>
                  </div>
              </li>
          </ul>
      </div>
       <div class="zk">
            查看全部
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      date_two:""
    };
  },
  mounted() {
    this.$http.get("../../static/ad2.json").then(result => {
      this.data = result.data.list;
      this.date_two=result.data.list_two
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
/* .header{
  width: 100%;
  height: 0.5rem;
  background-color: #fafafa;
}
.headerl{
  width: 0.24rem;
  height: 0.22rem;
  float: left;
  background: url(../../static/img/ad49.png) no-repeat;
  background-position: 1px 77px;
  background-size: cover
} */
.banner {
  /* margin-top: 0.1rem; */
  height: 1.5rem;
  background-color: red;
}
.banner img {
  width: 100%;
  height: 100%;
}
.main {
  overflow: hidden;
}
.main_top {
  height: 0.44rem;
}
.title {
  font-size: 0.16rem;
  font-weight: 700;
  line-height: 0.24rem;
  float: left;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
.desc {
  font-size: 0.12rem;
  float: left;
  line-height: 0.13rem;
  margin-left: 0.03rem;
  margin-top: 0.15rem;
  color: rgb(127, 127, 127);
}
.imgWrap {
  height: 1.89rem;
}
.imgWrap img {
  height: 1.89rem;
  float: left;
  border-radius: 0.03rem;
  margin-left: 0.12rem;
}
.saleMorningMarket {
  height: 0.24rem;
  margin-top: 0.07rem;
}
.mmContent {
  border-radius: 0.05rem;
  background: #ffe8e9;
  font-size: 0.16rem;
  color: #b4282d;
  width: 3.4rem;
  height: 0.3rem;
  margin: 0 auto;
}
.mmRedPacket {
  width: 0.14rem;
  height: 0.17rem;
  float: left;
  line-height: 0.36rem;
  background-color: red;
  margin-left: 0.12rem;
  margin-right: 0.06rem;
  margin-top: 0.05rem;
  background: url("../../static/img/ad37.png");
  background-size: contain;
}
.mmTitle {
  font-weight: 700;
  font-size: 0.12rem;
  line-height: 0.3rem;
}
.place {
  height: 0.1rem;
  background: #f4f4f4;
  margin-top: 0.05rem;
}
.m_navigator {
  width: 100%;
  overflow: hidden;
}
.m_navigator .item {
  text-align: center;
  width: 0.93rem;
  height: 0.4rem;
  line-height: 0.4rem;
  float: left;
  color: rgb(127, 127, 127);
}
.item .icon {
  float: left;
  width: 0.17rem;
  height: 0.18rem;
  line-height: 0.4rem;
  background-color: red;
  margin-right: 0.05rem;
  margin-top: 0.1rem;
  background: url("../../static/img/ad38png.png");
  background-size: 0.72rem 0.36rem;
}
.item .quan {
  float: left;
}
.item div {
  font-size: 0.16rem;
}
.item .one {
  background: url("../../static/img/ad38png.png");
  background-position: 0 -0.36rem;
  background-size: 0.72rem 0.36rem;
}
.item .two {
  background-position: -0.36rem 0;
}
.item .three {
  background-position: -0.72rem 0;
}
.item .four {
  background-position: -1.08rem 0;
}
.headerx {
  font-size: 0.22rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
  font-weight: 700;
}
.m_saleCouponGrid {
  width: 3.5rem;
  height: 1.36rem;
  margin: 0 auto;
  background-color: #f1f3f3;
}
.m_saleCouponGrid .left {
  height: 1.36rem;
  width: 1.36rem;
  float: left;
}
.m_saleCouponGrid .left img {
  width: 100%;
  height: 100%;
}
.m_saleCouponGrid .right {
  width: 2rem;
  padding-top: 0.14rem;
  /* padding-right: 0.15rem; */
  padding-bottom: 0.14rem;
  /* padding-left: 0.12rem; */
  float: left;
}
.right .name {
  width: 2.92rem;
  font-size: 0.16rem;
  font-weight: 700;
}
.right .description {
  height: 0.2rem;
  font-size: 0.14rem;
  width: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right .validTime {
  font-size: 0.12rem;
  line-height: 0.18rem;
  color: #7f7f7f;
}
.m_saleProgress {
  width: 0.89rem;
  overflow: hidden;
  border: 1px solid #f48f18;
  border-radius: 0.1rem;
  font-size: 0.12rem;
  color: #f48f18;
  float: left;
  margin-top: 0.05rem;
  margin-right: 0.1rem;
  text-align: center;
}
.right .btn {
  border: 0.01rem solid #f48f18;
  background-color: #f48f18;
  color: #fff;
  text-align: center;
  width: 0.83rem;
  height: 0.28rem;
  line-height: 0.28rem;
  font-size: 0.14rem;
  float: left;
  border-radius: 0.03rem;
}
.ft_slot-2_column {
  overflow: hidden;
  margin-top: 0.1rem;
}
.zk{
    width: 100%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.14rem;
}
.ul1 li{
    margin-top: 0.15rem
}
.ks{
    width: 100%;
    height: 1.5rem;
    background: url(../../static/img/ad40.jpg);
    background-size: 100% 100%
}
.ks_title{
    font-size: 0.16rem;
    margin-top: 0.5rem;
    margin-left: 1.55rem;
    font-weight: 700
}
.ks_title_bottom{
        font-size: 0.14rem;
    margin-top: 0.1rem;
    margin-left: 1.42rem;
    /* font-weight: 700 */
}
.er{
    width: 100%;
    overflow: hidden;
}
.ul2>li{
    float: left;
    width: 50%;
    overflow: hidden;
    border-right: 0.005rem solid #d9d9d9;
    border-bottom: 0.005rem solid #d9d9d9
}
/* .ul2>li:nth-last-child(1){
    border-bottom: 0.005rem solid gray
}
.ul2>li:nth-last-child(2){
    border-bottom: 0.005rem solid gray
} */
.ul2s{
    width: 100%;
    height: 1.4rem;
    position: relative;
}
.ul2sl{
    width: 0.16rem;
    height: 0.7rem;
    text-align: center;
    font-size: 0.12rem;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
    border: 0.005rem solid #b4a078;
    color: #b4a078;
    border-radius: 0.03rem;
    float: left;
}
.ul2sy{
    width: 1.4rem;
    height: 1.4rem;
   float: left;
   margin-top: 0.1rem;
}
.ul2x{
    padding-left: .2rem;
    padding-bottom: .16rem;
}
.ul2x_p1{
    font-size: 0.13rem;
    margin-top: 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.ul2x_p2{
    margin-top: 0.05rem;
    line-height: 0.17rem;
}
.ul2x_p2>span:nth-child(1){
    font-size: 0.13rem;
    color: red;
    display: block;
    float: left;
}
.ul2x_p2>span:nth-child(2){
    font-size: 0.12rem;
    color: gray;
    display: block;
    text-decoration:line-through
}
.ul2x_p3>button{
    font-size: 0.12rem;
    display: block;
    height: 0.18rem;
    text-align: center;
    line-height: 0.15rem;
    background-color: transparent;
    border: none;
    color: #B4282D;
    border: 0.005rem solid #B4282D;
    padding: 0 0.05rem 0 0.05rem;
    margin-top: 0.05rem;
}
</style>
