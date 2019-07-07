<template>
  <div id="index-page">
    <div id="target">首页</div>
    <div class="hd-warp">
      <div class="hd-index">
        <a
          href="javacript:;"
          class="logo"
          :style="{backgroundImage: 'url(' + hd_warp.logoImg + ')'}"
        ></a>
        <div class="hd-inp">
          <i :style="{backgroundImage: 'url(' + hd_warp.iconImg + ')'}"></i>
          <span class="hd-search">{{hd_warp.hdsearch}}</span>
        </div>
        <div class="hd-login">{{hd_warp.hdlogin}}</div>
      </div>
      <div class="hd-tab">
        <div class="tab-warp">
          <div class="tab-list">
            <ul>
              <li v-for="(item,index) in hd_warp.tablist" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="tab-toggle">
          <div class="hd-toggle">
            <i :style="{backgroundImage: 'url(' + hd_warp.hdtoggleimg + ')'}"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="hd-banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in hd_warp.hdbanner" :key="index">
          <img :src="item" alt>
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="licy-index">
      <ul>
        <li>
          <a href="javascript:;">
            <i class="licy-icon1" :style="{backgroundImage: 'url(' + hd_warp.licy_icon1 + ')'}"></i>
            <span>{{hd_warp.hd_licy1}}</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="licy-icon2" :style="{backgroundImage: 'url(' + hd_warp.licy_icon2 + ')'}"></i>
            <span>{{hd_warp.hd_licy2}}</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="licy-icon3" :style="{backgroundImage: 'url(' + hd_warp.licy_icon3 + ')'}"></i>
            <span>{{hd_warp.hd_licy3}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="reacd-index">
      <div class="reacd-warp" :style="{backgroundImage: 'url(' + hd_warp.reacd_warp + ')'}">
        <ul>
          <li v-for="(item,index) in arrimg" :key="index">
            <a href="javascript:;">
              <img :src="item" alt>
              <div class="reacd-txt">{{hd_warp.hd_warp_txt[index]}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flor-index">
      <div class="flor-module">
        <span>{{flor_index.flor_module}}</span>
      </div>
      <div class="flor-cont">
        <a href="javascript">
          <div class="flor-txt">{{flor_index.flor_txt}}</div>
          <div class="flor-img">
            <img :src="flor_index.flor_img" alt>
          </div>
        </a>
        <div class="flor-right" v-for="(item,index) in flor_index.flor_pic1" :key="index">
          <div class="folr-moudle">
            <a href="javascript:;">
              <img class="flor-pic1" :src="item" alt>
            </a>
            <div class="flor-text">
              <div class="flor-line1">{{flor_index.flor_line1[index]}}</div>
              <div class="flor-line2">{{flor_index.flor_line2[index]}}</div>
            </div>
            <div class="flor-cnt">
              <p class="flor-title1">{{flor_index.flor_title1[index]}}</p>
              <p class="flor-title2">{{flor_index.flor_title2[index]}}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="supp-index">
      <div class="supp-title">
        <div class="supp-left">
          <span>{{supp_index.supp_left}}</span>
        </div>
        <a href="javascript:;">
          <span>{{supp_index.supp_left_txet}}</span>
          <i :style="{backgroundImage: 'url(' + supp_index.supp_left_img + ')'}"></i>
        </a>
      </div>
      <ul class="supp-list">
        <li v-for="(item,index) in supp_index.supp_left_imgs" :key="index">
          <a class="supp-pic" href="javascript:;" :style="{backgroundImage:'url(' + item+ ')'} ">
            <div class="supp-txt1">{{supp_index.supp_txt1[index]}}</div>
            <div class="supp-txt2">{{supp_index.supp_txt2[index]}}</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="host-index">
      <div class="host-tag">{{host_index.host_tag}}</div>
      <div class="host-warp">
        <div class="host-lin1" v-for="(item,index) in host_index.host_warps_img" :key="index">
          <a href="javascript:;" class="host-item1">
            <div class="host-name">{{host_index.host_name[index]}}</div>
            <div class="host-warps">
              <img :src="item" alt>
            </div>
          </a>
        </div>
        <div class="host-lin2">
          <a href="javascript:;" v-for="(item,index) in host_index.host_pci" :key="index">
            <div class="host-text">{{host_index.host_text[index]}}</div>
            <div class="host-pci">
              <img :src="item" alt>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="supp-index">
      <div class="supp-title">
        <div class="supp-left">
          <span>{{sup_index.supp_left}}</span>
        </div>
        <a href="javascript:;">
          <span>{{sup_index.supp_left_text}}</span>
          <i :style="{backgroundImage: 'url(' + sup_index.supp_left_img + ')'}"></i>
        </a>
      </div>
      <ul class="supp-list">
        <li style="width:3.5rem;height:1.4rem;margin-left:-0.09rem;margin-bottom:0.04rem">
          <a id="supp-indexs" href="javascript:;">
            <div class="sup-warp" :style="{backgroundImage: 'url(' + sup_index.sup_warp + ')'}">
              <img :src="sup_index.sup_warp_img" alt>
              <div class="sup-text">
                {{sup_index.sup_text}}
                <div class="sup-name1">{{sup_index.sup_name1}}</div>
                <div class="sup-name2">{{sup_index.sup_name2}}</div>
              </div>
            </div>
          </a>
        </li>
        <li style="width:31%;margin-right:0.082rem" class="sup-lists" v-for="(item,index) in sup_index.sup_pic1_img" :key="index">
          <a class="sup-pic1" href="javascript:;" style="width:100%;position: relative;">
            <img :src="item" alt>
            <div class="sup-txt1">
              {{sup_index.sup_txt1[index]}}
              <span>{{sup_index.sup_txt2[index]}}</span>
            </div>
            <div class="sup-tog">
              <p>{{sup_index.sup_tog_p1[index]}}</p>
              <p>{{sup_index.sup_tog_p2[index]}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="supp-index">
      <div class="supp-title">
        <div class="supp-left">
          <span>{{supp_index3.supp_left}}</span>
          <div class="m-down">
            <span class="sup-time">00</span>
            <span>:</span>
            <span class="sup-time">00</span>
            <span>:</span>
            <span class="sup-time">00</span>
          </div>
        </div>
        <a href="javascript:;">
          <span>{{supp_index3.supp_right}}</span>
          <i :style="{backgroundImage: 'url(' + sup_index.supp_left_img + ')'}"></i>
        </a>
      </div>
      <ul class="supp-list">
        <li style="width:31%;margin-right:0.082rem" class="sup-lists" v-for="(item,index) in supp_index3.sup_pic1_img" :key="index">
          <a class="sup-pic1" href="javascript:;" style="width:100%;position: relative;">
            <img :src="item" alt>
            <div class="sup-txt-a">
              <span>{{supp_index3.sup_txt_a1[index]}}</span>
              <span>{{supp_index3.sup_txt_a2[index]}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="supp-index">
      <div class="supp-title">
        <div class="supp-left">
          <span>{{supp_index2.supp_left}}</span>
        </div>
        <a href="javascript:;">
          <span>{{supp_index2.supp_left_text}}</span>
          <i></i>
        </a>
      </div>
      <ul class="supp-list">
        <li style="width:31%;margin-right:0.082rem" class="sup-lists" v-for="(item,index) in supp_index2.supp_pic" :key="index">
          <a class="sup-pic1" href="javascript:;" style="width:100%;position: relative;">
            <img :src="item" alt>
            <div class="sup-txt1">
              {{supp_index2.sup_txt1[index]}}
              <span> {{supp_index2.sup_txt2[index]}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="shop-index">
      <div class="shop-banner" v-for="(item,index) in shop_banner.picList_img1" :key="index">
        <a href="javascript:;">
          <div class="shop-title">{{shop_banner.shop_title[index]}}</div>
          <div class="shop-desc">{{shop_banner.shop_desc[index]}}</div>
          <div class="picList">
            <img :src="item" alt>
            <img :src="shop_banner.picList_img2[index]" alt>
          </div>
        </a>
      </div>
    </div>
    <div class="modu-index">
      <div class="modu-cate">
        <a
          style="background:url(../../static/index-img/0c8422eb3135ad7df287bb0520f1bc7b.jpg);background-size:cover"
        ></a>
        <div>
          <div class="mode-inner">
            <ul class="modu-list">
              <li class>
                <a href="javascript:;">
                  <div class="modu-wraper">
                    <img src="../../static/index-img/eb4646775f4c74a0ea7629bfb0862f34.png?" alt>
                    <div class="modu-name">女式经典纯色polo裙升级款</div>
                    <div class="modu-price">
                      <span>￥99.9</span>
                      <span>￥169</span>
                    </div>
                    <div class="modu-tog-warp">
                      <p>满减</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class>
                <a href="javascript:;">
                  <div class="modu-wraper">
                    <img
                      src="../../static/index-img/eb4646775f4c74a0ea7629bfb0862f34.png?imageView&quality=65&thumbnail=330x330"
                      alt
                    >
                    <div class="modu-name">女式经典纯色polo裙升级款</div>
                    <div class="modu-price">
                      <span>￥99.9</span>
                      <span>￥169</span>
                    </div>
                    <div class="modu-tog-warp">
                      <p>满减</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class>
                <a href="javascript:;">
                  <div class="modu-wraper">
                    <img
                      src="../../static/index-img/eb4646775f4c74a0ea7629bfb0862f34.png?imageView&quality=65&thumbnail=330x330"
                      alt
                    >
                    <div class="modu-name">女式经典纯色polo裙升级款</div>
                    <div class="modu-price">
                      <span>￥99.9</span>
                      <span>￥169</span>
                    </div>
                    <div class="modu-tog-warp">
                      <p>满减</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class>
                <a href="javascript:;">
                  <div class="modu-wraper">
                    <img
                      src="../../static/index-img/eb4646775f4c74a0ea7629bfb0862f34.png?imageView&quality=65&thumbnail=330x330"
                      alt
                    >
                    <div class="modu-name">女式经典纯色polo裙升级款</div>
                    <div class="modu-price">
                      <span>￥99.9</span>
                      <span>￥169</span>
                    </div>
                    <div class="modu-tog-warp">
                      <p>满减</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class>
                <a href="javascript:;">
                  <div class="modu-wraper">
                    <img
                      src="../../static/index-img/eb4646775f4c74a0ea7629bfb0862f34.png?imageView&quality=65&thumbnail=330x330"
                      alt
                    >
                    <div class="modu-name">女式经典纯色polo裙升级款</div>
                    <div class="modu-price">
                      <span>￥99.9</span>
                      <span>￥169</span>
                    </div>
                    <div class="modu-tog-warp">
                      <p>满减</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class>
                <a href="javascript:;">
                  <div class="modu-wraper">
                    <img
                      src="../../static/index-img/eb4646775f4c74a0ea7629bfb0862f34.png?imageView&quality=65&thumbnail=330x330"
                      alt
                    >
                    <div class="modu-name">女式经典纯色polo裙升级款</div>
                    <div class="modu-price">
                      <span>￥99.9</span>
                      <span>￥169</span>
                    </div>
                    <div class="modu-tog-warp">
                      <p>满减</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div @click="but" id="but">返回顶部</div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      data: "",
      hd_warp: "",
      sup_index: "",
      flor_index: "",
      supp_index: "",
      host_index: "",
      supp_index3:"",
      supp_index2:'',
      arrimg: "",
      shop_banner:'',
      swiperOption: {
        loop: true,
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
        // ...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    but() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    this.$http({
      url: "../static/index.json",
      method: "get",
      params: {}
    })
      .then(result => {
        console.log(result.data);
        this.data = result.data;
        this.hd_warp = result.data.hd_warp;
        this.sup_index = result.data.sup_index;
        this.flor_index = result.data.flor_index;
        this.host_index = result.data.host_index;
        this.supp_index = result.data.supp_index;
        this.arrimg = result.data.hd_warp.hd_warp_img;
        this.supp_index3=result.data.supp_index3
        this.supp_index2=result.data.supp_index2
        this.shop_banner=result.data.shop_banner


      })
      .catch(err => {});
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>


<style scoped>
.swiper-pagination {
  display: inline-block;
  height: 0.1rem;
  position: absolute;
  left: 40%;
  top: 2.5rem;
  padding-left: 0.1rem;
}
</style>
