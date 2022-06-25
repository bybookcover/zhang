<template>
  <header>
    <div class="search-return">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
    </div>
    <div class="search-main">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false" @keyup.enter="goSearchList">
        <input type="search" placeholder="搜索您喜欢的产品..." v-model="searchVal">
      </form>
      
    </div>
    <div class="search-btn" @click="goSearchList">搜索</div>
  </header>
</template>
<script>
export default{
  data(){
    return{
      searchVal:this.$route.query.key||'',
      searchArr:[]
    }
  },
  methods: {
    goBack(){
      this.$router.back();
    },
    goSearchList(){

      if(!this.searchVal)return;
      if(!localStorage.getItem('searchList')){
        localStorage.setItem('searchList','[]');
      }else{
        this.searchArr = JSON.parse(localStorage.getItem('searchList'));
      }
      this.searchArr.unshift(this.searchVal);

      let newArr = new Set(this.searchArr);
      localStorage.setItem('searchList',JSON.stringify(Array.from(newArr)));
      console.log(this.searchVal);

     
      if(this.searchVal ===this.$route.query.key)return;
      
      this.$router.push({
        name:'list',
        query:{
          key:this.searchVal
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
  header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 44px;
    color: #fff;
    background-color: #b0352f;
    .search-main{
      border-radius: 12px;
      background-color: #fff;
      display: flex;
      align-items: center;
      width:260px;
      height: 30px;

      i{
        color:#666;
        font-size: 18px;
        padding: 2px 8px;
      }
      form{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
          font-size: 14px;
          height: 20px;
          width:100%;
        }
      }
    }
  }
</style>