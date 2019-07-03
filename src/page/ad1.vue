<template>
  <div class="ad1">
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
            <li><img class="m1" :src="img" alt=""></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            img:"",
            msg:"",
            msg1:"",
            
        }
    },
    mounted() {
        // console.log(this.$http)
     this.$http.get("../../static/ad1.json").then((result)=>{
         this.img=result.data[0].list.img
     })
    },
};
</script>

<style>

</style>
