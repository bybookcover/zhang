<template>
  <div class="tabbar">
    <ul>
      <li v-for= '(item,index) in routerList' 
      :key='index'
      @click='switchTab(item.path)'
      >
        <img :src="$route.path.includes(item.path) ? item.selected : item.active" alt="">
        <span :class='$route.path.includes(item.path) ? "active" : ""'>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default{
    data (){
      return{
        routerList:[
          {
            title:'首页',
            path:'/home',
            active:'/images/1-1.png',
            selected:'/images/1.png'
          },
          {
            title:'分类',
            path:'/list',
            active:'/images/2-2.png',
            selected:'/images/2.png'
          },
          {
            title:'购物车',
            path:'/cart',
            active:'/images/3-3.png',
            selected:'/images/3.png'
          },
          {
            title:'我的',
            path:'/my',
            active:'/images/5-5.png',
            selected:'/images/5.png'
          }
          
        ]
      }
    },
    methods: {
      switchTab(path){
        //判断是否点击的是同一个路由  
        if (this.$route.path == path ) return;
        //对应跳转路径
        this.$router.replace(path);
      }
    }
};
</script>

<style lang="less" scoped>

.tabbar{
  width: 100%;
  height: 58px;
  background-color: bisque;
  ul {
    display: flex;
    justify-content:space-around;
    li{
      display: flex;
      flex-direction: column;
      align-content: center
    }
  };
  img {
    width: 47px;
    height: 37px;
    };
  span{
    text-align: center;
    font-size: 14px;
  }
}
.active{
  color:red;
}

</style>