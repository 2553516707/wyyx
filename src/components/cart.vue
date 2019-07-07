<template>
    <div>
        <div class="m-defaultPage m-defaultPage-noCart" v-if="goods==0">
          <div class="container">
            <div class="img"></div>
            <div class="txt" >
              <div class="noCart-login">
                <div class="noCart-title">去添加点什么吧</div>
                <div class="noCart-btn" v-if="login==false">登录</div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            login:true,
            goods:1
        }
    }
}
</script>

<style>

</style>
