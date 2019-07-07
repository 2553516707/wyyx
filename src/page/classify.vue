<template>
    <div>
            <!-- 公共 -->
        <div class="csify_gong">
            <!-- 头部 -->
            <div class="csify_hander">
                <div class="csif_hander_soso">搜索商品</div>
            </div>
            <!-- 身体 -->
            <div class="csify_main">
                <!-- left classify -->
                <div class="csify_left">
                    <ul class="csify_left_ul">
                        <li  v-for="(item,index) in ad" :key="index" @click="bacClo(index,item.getId)" :class="active==index?'active':''">{{item.classify}}</li>
                    </ul>
                </div>
                <!-- right classify数据的分类样-->
                          <div v-if="item.getId==csifyId" class="csify_right" v-for="(item,index) in adright" :key="index">
                              <div class="socllo_y">
                                  <div class="csify_right_top">
                                    <img class="csify_right_top_img" :src="item.csifyTop" alt="">
                                  </div>
                                  
                                  <div  class="csify_right_bottom" v-for="(setone,s) in item.csifySetOne" :key="s">
                                    <p class="csify_right_bottom_p" v-if="setone.csifyTopText!=null">
                                    {{setone.csifyTopText}}
                                    </p>
                                    <ul class="csify_right_bottom_ul">
                                      <li v-for="(csifyset,i) in setone.csifySet" :key="i" @click="csifySkip(csifyset.setId)">
                                        <span class="csify_right_bottom_ul_sp1">
                                          <img class="csify_right_bottom_ul_img" :src="csifyset.csifySetImg" alt="">
                                        </span>
                                        <span class="csify_right_bottom_ul_tex">{{csifyset.csifySetTex}}</span>
                                        
                                      </li>
                                    </ul>
                              </div>
                        </div>
                </div>
                
            </div>
            <!-- 尾部 -->
            <div class="csify_footer">公共</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ad: [],
      adright: [],
      active: 0,
      csifyId: 1,
      adringthBot: null,
      // Tag: null
    };
  },
  methods: {
    bacClo(index, id) {
      
      this.active = index;
      // console.log(id);
      this.csifyId = id;
      // console.log(this.adright.csifyTop);
    },
    csifySkip(id) {
      // console.log(id)
      this.$router.push({ name: "csifySet",params:{id:id}});
    }
  },
  mounted() {
    this.$http({
      url: "../../static/classify.json",
      method: "get",
      params: {}
    }).then(res => {
      this.ad = res.data.leftList;
      this.adright = res.data.rightList;
    });
  }
};
</script>

<style>
/* 去除默认边距 */
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.csify_gong {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 头部搜索*/
.csify_hander {
  width: 100%;
  height: 0.45rem;
  /* background: red; */
  overflow: hidden;
  /* background-color: #d9d9d9; */
  border-bottom: 1px solid #d9d9d9;
}
.csif_hander_soso {
  width: 94%;
  height: 0.3rem;
  background: blue;
  margin: 0.065rem 0.1125rem 0 0.1125rem;
  font-size: 0.13rem;
  background-color: #ededed;
  border-radius: 0.03rem;
  line-height: 0.3rem;
  text-align: center;
  color: #666;
}

/* 身体 */
.csify_main {
  width: 100%;
  height: 5.75rem;
  overflow: hidden;
}

.csify_left {
  width: 0.85rem;
  height: 100%;
  float: left;
}

.csify_left_ul {
  width: 0.85rem;
  font-size: 0.15rem;
  padding: 0.2rem 0 0.2rem 0;
}

.csify_left_ul > li {
  font-size: 0.142rem;
  text-align: center;
  margin-top: 0.26rem;
  position: relative;
}
.csify_left_ul > li:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0.04rem;
}
.csify_left_ul > li:nth-child(1) {
  margin: 0;
  /* color: #ab2b2b; */
}
/* .csify_left_ul > li:nth-child(1):before {
  background-color: #ab2b2b;
} */
/* 动画颜色 */
.active {
  color: #ab2b2b;
}
.active:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0.04rem;
  background-color: #ab2b2b;
}
.socllo_y {
  width: 2.65rem;
  height: 5.5rem;
  padding-right: 0.4rem;
  overflow-y: scroll;
}
.csify_right {
  width: 2.65rem;
  height: 5.5rem;
  float: right;
  padding: 0.125rem 0.125rem 0.125rem 0.125rem;
  overflow: hidden;
}
.csify_right_top {
  width: 100%;
  height: 0.95rem;
  background: green;
  margin-bottom: 0.15rem;
}
.csify_right_top_img {
  display: block;
  width: 100%;
  height: 0.95rem;
  background: green;
}
.csify_right_bottom {
  float: left;
  width: 100%;
  margin-bottom: 0.1rem;
}
.csify_right_bottom_p {
  width: 100%;
  /* height: 0.3rem; */
  font-size: 0.14rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
  line-height: 0.22rem;
  border-bottom: 0.01rem solid #d9d9d9;
}

.csify_right_bottom_ul {
  width: 3.75rem;
}

.csify_right_bottom_ul > li {
  float: left;
  width: 0.75rem;
  height: 1.1rem;
  margin-right: 0.2rem;
}

.csify_right_bottom_ul_sp1 {
  display: block;
  width: 0.75rem;
  height: 0.73rem;
}
.csify_right_bottom_ul_img {
  display: block;
  width: 0.75rem;
  height: 0.73rem;
  background: white;
}
.csify_right_bottom_ul_tex {
  width: 100%;
  height: 0.37rem;
  font-size: 0.12rem;
  color: #333;
  text-align: center;
  line-height: 0.2rem;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 尾部 */
.csify_footer {
  width: 100%;
  height: 0.46rem;
  background: red;
  font-size: 0.15rem;
}
</style>
