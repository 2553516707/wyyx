<template>
    <div>
        <div class="csify2_gong">
            <div class="csify2_hander"></div>
            <div class="csify2_ify"></div>
      <div v-for="(item,index) in Tag" :key="index" v-if='item.tagId==TagId'> <!-- 循环用的主box-->
            <div class="csify2_handmainer">{{item.tagText}}</div>
            <div class="csify2_csmain">
                <ul class="csify_scmain_ul">
                    <li v-for="(sp,i) in item.tagIfy" :key="i">
                        <div class="csify_shop">
                            <div class="csify_shop_img">
                                <img class="csify_shop_imgvip" :src="sp.shopImg">
                            </div>
                            <div v-if="sp.discountsBol==null" class="csify_shop_tex">
                                <span class="csify_shop_tex_g">特价</span>
                                <span class="csify_shop_tex_g_p">仅剩<span>{{sp.discountsDay}}</span>天</span>
                            </div>
                            <div v-else class="csify_shop_tex">
                                <span class="csify_shop_tex_g">{{sp.discountsBol}}</span>
                            </div>
                        </div>
                        <div class="csify_shop_introduce">{{sp.shopDetails}}</div>
                        <div class="csify_shop_money">
                          <span class="csify_shop_money_one">￥<span>{{sp.shopMoney}}</span></span>
                          <span v-if="sp.shopNoMoney!=null" class="csify_shop_money_two"> <del>￥<span>{{sp.shopNoMoney}}</span></del></span>
                        </div>
                        <div class="csif_shop_miney_tag" >
                            <span v-if="tags.tag!=null" class="csif_shop_miney_tagv" @click="get(index)" v-for="(tags,index) in sp.paasTag" :key="index"><span class="csif_shop_miney_tagv_min">{{tags.tag}}</span></span>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      Tag: [],
      TagId: null
    };
  },
  methods: {
    get(i) {
      console.log(i);
    }
  },
  mounted() {
    this.TagId = this.$route.params.id;
    // console.log(this.TagId);
    // this.TagId = this.TagId.id;
    // console.log(this.$route.params)
    this.$http({
      url: "../../static/classifyTag.json",
      method: "get",
      params: {}
    }).then(res => {
      this.Tag = res.data.classifyTag;
      // console.log(this.Tag);
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.csify2_gong {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #eeeeee;
}
.csify2_hander {
  width: 100%;
  height: 0.45rem;
  background: rebeccapurple;
}
.csify2_ify {
  width: 100%;
  height: 0.3rem;
  background: green;
}
.csify2_handmainer {
  width: 100%;
  height: 0.55rem;
  background: white;
  margin-top: 0.1rem;
  font-size: 0.14rem;
  text-align: center;
  line-height: 0.55rem;
}
.csify2_csmain {
  width: 100%;
}
.csify_scmain_ul {
  float: left;
  width: 100%;
  background: white;
  overflow: hidden;
}
.csify_scmain_ul > li {
  position: relative;
  float: left;
  width: 1.75rem;
  height: 2.65rem;
  padding: 0rem 0.04rem 0.15rem 0.085rem;
}
.csify_shop_img {
  width: 100%;
  height: 1.95rem;
  background: #f4f4f4;
}
.csify_shop_imgvip {
  display: block;
  width: 100%;
  height: 100%;
}
.csify_shop_tex {
  width: 1.65rem;
  height: 0.2rem;
  background: #eeeeee;
  padding: 0.03rem 0.05rem 0.03rem 0.05rem;
  background: #ffe8cd;
  color: #f48f18;
}
.csify_shop_tex_g {
  font-size: 0.11rem;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
}
.csify_shop_tex_g_p {
  margin-left: 0.05rem;
  font-size: 0.12rem;
  float: left;
}
.csify_shop_introduce {
  width: 100%;
  height: 0.195rem;
  font-size: 0.14rem;
  color: black;
  line-height: 0.2rem;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.csify_shop_money {
  width: 100%;
  height: 0.24rem;
  font-size: 0.15rem;
  line-height: 0.24rem;
}
.csify_shop_money_one {
  font-size: 0.15rem;
  color: #ce2424;
}
.csify_shop_money_two {
  font-size: 0.13rem;
  margin-left: 0.05rem;
  color: #999;
}
.csif_shop_miney_tag {
  width: 100%;
  height: 0.165rem;
}
.csif_shop_miney_tagv {
  float: left;
  display: block;
  width: 0.5rem;
  height: 0.11rem;
  border: 0.01rem solid#CE2424;
  border-radius: 0.04rem;
  font-size: 0.12rem;
  text-align: center;
  padding: 0 0.03rem 0 0.03rem;
  color: #ce2424;
}
.csif_shop_miney_tagv:not(:nth-child(1)) {
  margin-left: 0.05rem;
}
.csif_shop_miney_tagv_min {
  font-size: 0.12rem;
  line-height: 0.11rem;
  display: block;
  transform: scale(0.85);
}
</style>
