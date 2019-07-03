<template>
  <div class="ad1">
    <div v-show="show" class="ad1f">
      <ul>
        <li v-for="(item,index) in f" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="ad1s">
      <div class="ad1s1"></div>
      <div class="ad1s2"></div>
      <div class="ad1s3"></div>
    </div>
    <div class="ad1ss1"></div>
    <div class="ad1ss2"></div>
    <div class="ad1ss3"></div>
    <div class="content">
      <ul class="ul">
        <li v-for="(item,index) in data" :key="index">
          <img class="m1" :src="item.img" alt>
          <div class="mm">
            <p class="p1">{{item.p1}}</p>
            <p class="p2">{{item.p2}}</p>
            <p class="p3">{{item.p3}}</p>
            <div class="b">
              <button>立即购买</button>
              <div class="b-i"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      f: [
        "明星商品榜",
        "夏凉商品榜",
        "划算商品榜",
        "新品尝鲜榜",
        "囤货剁手榜",
        "品类排行榜"
      ],
      data: {},
      show:false
    };
  },
  mounted() {
    this.$http.get("../../static/ad1.json").then(result => {
      this.data = result.data.list;
      //  for(var i=0;i<this.data.length;i++){
      //     //  this.img.push(this.data[i].img)
      //  }
    });
    var _this=this
   window.onscroll = function () {
            // scrollTop  滚轮滑过的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            
            var a = document.documentElement.clientHeight
            if(scrollTop>800){
                  _this.show=true
            }else{
              _this.show=false
            }
            
        }
  }
  ,methods: {
  },
};
</script>

<style>
</style>
