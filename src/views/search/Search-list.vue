<template>
  <div class="search-list">

    <div class="headers">
      <Header></Header>
      <ul>
        <li
        v-for="(item,index) in searchList.data" 
        :key="index"
        @click="changeTab(index)"
        >
           <div :class='searchList.currentIndex == index ? "active":""'>{{item.name}}</div>
           <div class="search-filter" v-if="index !=0 ">
            <i class="iconfont icon-xiangshang"
            :class='item.status == 1 ? "active" : ""'
            ></i>
            <i class="iconfont icon-xiangxia"
            :class='item.status == 2 ? "active" : ""'
            ></i>
          </div>

        </li>
      </ul>
    </div>
    <section >
      <ul v-if="goodsList.length">
        <li v-for="(item,index) in goodsList" :key="index">
          <img :src="item.imgUrl" alt="">
          <h3>{{item.name}}</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>{{item.price}}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>

      </ul>
      <h1 v-else>暂无数据</h1>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Header from "@/components/search/Header.vue";
import Tabbar from "@/components/common/Tabbar.vue";
import http from'@/common/api/request.js'

export default{
  data(){
    return{
      goodsList:[],
      searchList:{
        currentIndex:0,
        data:[
          {name:'综合',key:'zh'},
          {name:'价格',status:0,key:'price'},
          {name:'销量',status:0,key:'num'}
        ]
      }
    }
  },
  computed: {
    orderBy(){
      let obj = this.searchList.data[this.searchList.currentIndex];
      let val = obj.status ==='1'? 'asc':'desc';
      return{
        [obj.key]:val
      }
    }
  
  },
  components: {
    Header,
    Tabbar
  },
  created(){
    this.getData();
  },
  methods: {
    getData(){
        http.$axios({
        url:'/api/goods/shopList',
        params:{
          searchName:this.$route.query.key,
          ...this.orderBy
        }
        }).then(res=>{
          this.goodsList = res;
        })
    },
    changeTab(index){
      this.searchList.currentIndex = index;
      let item = this.searchList.data[index];
      this.searchList.data.forEach((v,i)=>{
        if(i != index ){
          v.status = 0;
        }
      })
      if (index == this.searchList.currentIndex){
        item.status = item.status == 1 ?2 :1;
      }
      this.getData();
    }
  },
  watch: {
    $route(){
      this.getData();
    }
  }
}
</script>
<style scoped lang="less">
 
.search-list{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  h2{
    font-size: 18px;
      font-weight: 500;
  }

}
.headers ul{
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  font-size: 16px;
  li{
    .active{
      color:red;
    }
    display: flex;
    align-items: center;
    div{
      padding: 0 6px;
    }
    .search-filter{
      display: flex;
      flex-direction: column;
    }
  }
}

section{
  padding:5px 20px;
  flex: 1;
  overflow: hidden;
  background-color: #f5f5f5;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  ul li{
    width: 50%;
    box-sizing: border-box;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
      width:100%;
      overflow: hidden;
      font-size: 14px;
      color: #222;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price{
      display: flex;
      justify-content: space-between;
      padding: 20px;
      width: 100%;
      font-size: 14px;
      div:first-child{
        color: #b0352f;
      }
      div:last-child{
        padding:3px 6px;
        color:#fff;
        background-color: #b0352f;
      }
    }

  }
  ul li img{
    width: 160px;
    height: 160px;
  }
}

</style>