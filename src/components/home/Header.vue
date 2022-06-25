<template>
  <header>
    <div id="logo"><img src="@/assets/images/logo.png" alt=""></div>
    <div class="search" @click="goSearch">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false">
        <input type="search" placeholder="搜索您喜欢的产品...">
      </form>
    </div>
    <div>
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goSearch(){
      this.$router.push('/search')
    }
  }
}
</script>
<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height: 47px;
  background-color: #b0352f;
  #logo{
    width: 48px;
    height: 48px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .search{
      border-radius: 12px;
      background-color: #fff;
      display: flex;
      align-items: center;
      width:260px;
      height: 30px;
  }
}
</style>