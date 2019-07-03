<template>
  <div class="health">
    <div class="Opening-card">
      <p class="helperLine"></p>
      <div class="privilegeWrap">
        <div class="title">
          <span>开通超级会员</span>
          <i></i>
          <span>专享9大权益</span>
        </div>
        <div class="Jiu">
          <ul class="Nian">
            <li>
              <i></i>
              <p>36张/年</p>
               <p>每月免邮券</p>
            </li>
            <li>
              <i class="xiaoti1"></i>
              <p>96折起</p>
               <p>超级会员价</p>
            </li>
            <li>
              <i class="xiaoti2"></i>
              <p>每日低价</p>
               <p>超级闪购</p>
            </li>
            <li>
              <i class="xiaoti3"></i>
              <p>每月一件</p>
               <p>免费使用</p>
            </li>
            <li >
              <i class="xiaoti4"></i>
              <p>任选100元</p>
               <p>每月转向卷</p>
            </li>
            <li>
              <i class="xiaoti5"></i>
              <p>反6%</p>
               <p>超级反馈金</p>
            </li>
            <li>
              <i class="xiaoti6"></i>
              <p>双倍</p>
               <p>购物返积分</p>
            </li>
            <li>
              <i class="xiaoti7"></i>
              <p>24小时</p>
               <p>超级管家</p>
            </li>
            <li>
              <i class="xiaoti8"></i>
              <p>36张/年</p>
               <p>每月免邮券</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="JianSuan">
        <i class="JianSuan_xiao"></i>
          <span class="txt">开通超级会员预计年均可省</span>
          <div class="txt2">
            <span>￥2646</span>
          </div>
          <p class="xiaobiao"></p>
        </div>
    </div>
    <div class="Admission">
        <span class="Admission_kai">立即开通</span>
        <span class="Admission_xie">￥</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
html {
  width: 100%;
  height: 6.67rem;
  overflow: hidden;
}
.health {
  width: 100%;
}
.Opening {
  width: 0.1rem;
  height: 1rem;
  font-size: 0.2rem;
}
.Opening-card {
  position: relative;
  background: white;
}
.helperLine {
  width: 0.18rem;
  height: 0.18rem;
  background: url(../../static/Super-img/Super2.png) no-repeat;
  position: absolute;
  background-size: contain;
  top: 0.1rem;
  right: 0.2rem;
}
.privilegeWrap {
  width: 100%;
  height: 3.8rem;
  /* padding-top: .5rem; */
  background-image: url(../../static/Super-img/Super.png);
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
}
.title {
  height: 0.39rem;
  font-size: 0.23rem;
  font-family: PingFangSC-Semibold;
  color: #fff;
  padding: 0 0 0 0.28rem;
  margin-top: 0.2rem;
}
.title i {
  display: inline-block;
  width: 0.35rem;
  height: 0.35rem;
  background: url(../../static/Super-img/Super3.png) no-repeat center;
  background-size: 100%;
  line-height: 0.39rem;
}
.Jiu {
  /* width: 100%; */
  height: 2.9rem;
  padding: 0.2rem 0.2rem 0rem 0.2rem;
}
.Nian li {
  width: 1.1rem;
  height: 0.9rem;
  float: left;
  margin-bottom: 0.1rem;
}
.Nian li i {
  display: block;
  width: 0.48rem;
  height: 0.48rem;
  background: url(../../static/Super-img/Super1.png) no-repeat center;
  background-size: 100%;
  background-position: 0 -8.1rem;
  margin: 0 auto;
  margin-bottom: 0.05rem
}
.Nian li p{
  color: #FEE3C7;
  font-size: .15rem;
  text-align: center;
}
.Nian li p:nth-of-type(2){
  text-align: center;
  color: #7F7F7F;
   font-size: .1rem;
}
.Nian li .xiaoti1{
  background-position: 0 -0.54rem;
}
.Nian li .xiaoti2{
  background-position: 0 -2.7rem;
}
.Nian li .xiaoti3{
  background-position: 0 -4.32rem;
}
.Nian li .xiaoti4{
  background-position: 0 -6.48rem;
}
.Nian li .xiaoti5{
  background-position: 0 -4.32rem;
}
.Nian li .xiaoti6{
  background-position: 0 -4.32rem;
}
.Nian li .xiaoti7{
  background-position: 0 -2.7rem;
}
.Nian li .xiaoti8{
  background-position: 0 -4.32rem;
}
.JianSuan{
  width: 100%;
  height: 0.5rem;
  color: #333;
  position: relative;
}
.JianSuan .txt{
  width: 100%;
  display: block;
  font-size: 0.15rem;
  text-align: center;
  line-height: 0.5rem;
}
.JianSuan_xiao{
  position: absolute;
  display: block;
  width: 0.16rem;
  height: 0.16rem;
  background: url(../../static/Super-img/Super4.png)no-repeat center;
  background-size: 100%;
  left: 0.75rem;
  top: 0.18rem;
}
.txt2{
  position: absolute;
  height: 100%;
  top: -0.75rem;
  right: 0.45rem;
}
.txt2>span{
color: #BEA36E;
font-weight: 700;
font-size: 0.15rem;
}
.xiaobiao{
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
  width: 0.13rem;
  height: 0.13rem;
  background: url(../../static/Super-img/Super5.png)no-repeat center;
  background-size: 100%;
}
.Admission{
  width: 3.45rem;
  height: 0.5rem;
  background: #BEA36E;
  margin: 0 auto;
  border-radius: 0.05rem;
  text-align: center;
}
.Admission_kai{
  color: #4D3A12;
  font-weight: 700;
  line-height: 0.5rem;
  font-size:0.15rem;
  display: block;
  
}
.Admission_xie{
    color: #4D3A12;
  display:block ;
  font-size: 0.15rem;
  height: 0.1rem;
  width: 0.1rem;
}
</style>
