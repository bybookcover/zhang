<template>
  <div class="search-index">
    <Header></Header>
    <section>
      <div class="search-history">
        <h2> <i class="iconfont icon-shijian"></i>
        <span> 历史搜索</span>
        <span @click="deleteStorage">清除历史纪录</span>
        </h2>
        <ul>
          <li v-for="(item,index) in searchArr" :key="index"
          @click="gosearchList(item)"
          >{{item}}</li>
        </ul>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
import Header from "@/components/search/Header.vue";
import { MessageBox } from 'mint-ui';
export default{
  data(){
    return{
      searchArr:[]
    }
  },
  components: {
    Tabbar,
    Header
  },
  created () {
    this.searchArr = JSON.parse(localStorage.getItem('searchList'));
  },
  methods: {
    deleteStorage(){
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      }).then(res=>{
        if(res ==='confirm'){
          localStorage.removeItem('searchList');
          this.searchArr = [];
        }
      })
    },
    gosearchList(item){
        this.$router.push({
        name:'list',
        query:{
          key:item
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
.search-index{
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
section{
  padding:5px 20px;
  flex: 1;
  overflow: hidden;
  background-color: #f5f5f5;
  .search-history{
    
    h2{
      font-size: 18px;
      font-weight: 500;
      i{
        color:red;
        padding-right: 3px;
        font-size: 16px;
      }
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0;
      li{
        font-size: 16px;
        border: 1px solid #ccc;
        padding: 3px 6px;
        margin: 10px 15px;
      }
    }
  }
}
</style>