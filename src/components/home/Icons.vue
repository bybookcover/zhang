<template>
  <ul class="icons">
    <li v-for="(item,index) in iconsList" :key="index">
    <img :src="item.imgUrl" alt="">
    <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default{
  props:{ 
  iconsList:Array
    },
  data(){
    return{
    }
  }
}
</script>

<style lang="less" scoped>
.icons{
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width:45px;
    height:38px;
  }
  span{
    font-size: 14px;
    padding: 3px;
  }
}
</style>