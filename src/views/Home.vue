<template>
  <div class="home">
    <div class="headers">
   
      <Header></Header>
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeTab">
      </ly-tab>
    </div>
    
    <section class="wrapper"> 
      <!--  ref 可以获取dom元素 与class效果一样 具体搜索了解 -->
      <div>
        <div
          v-for="(item,index) in newData" :key="index"
        >
          <Swiper 
            v-if="item.type=='swiperList'"
            :swiperList="item.data"
          ></Swiper>
          <Icons   
            v-if="item.type=='iconsList'"
            :iconsList="item.data"
          ></Icons>
          <Recommend   
            v-if='item.type=="recommendList"'
            :recommendList="item.data"
          ></Recommend>
          <Like   
            v-if="item.type=='likeList'"
            :likeList="item.data"
          ></Like>
          <Ad  
            v-if="item.type=='adList'"
            :adList="item.data"
          
          ></Ad>
        </div>
      </div>
      
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from '@/components/common/Tabbar.vue'
import Swiper from '@/components/home/Swiper.vue'
import Icons from '@/components/home/Icons.vue'
import Recommend from '@/components/home/Recommend.vue'
import Header from '@/components/home/Header.vue'
import BetterScroll from 'better-scroll'
import Like from '@/components/home/Like.vue'
import Ad from '@/components/home/Ad.vue'
import http from'@/common/api/request.js'





export default {
  name: 'Home',
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Ad,
},
  data() {
    return  {
      selectedId: 0,
      items:[],
      newData:[],
      oBetterScroll:'',
      tBetterScroll:'',
      options: {
        activeColor: '#b0352f'
      }
    }
  },
  created(){
    this.getData();

  },
  mounted () {

  },
  methods: {
    async getData(){
      let res = await http.$axios({
        url:'/api/index_list/0/data/1'
      });
        this.items = Object.freeze(res.topBar);
        this.newData = Object.freeze(res.data);
     
        // 当dom都加载完毕了再取执行 nextTick
        this.$nextTick(()=>{
            this.oBetterScroll = new BetterScroll('.wrapper', {
            movable: true,
            zoom: true,
            click:true
          })
        })
    },
    async addData(index){
      let res = await http.$axios({
      url:'/api/index_list/'+index+'/data/1'
      });
      console.log(res);
      if( res.constructor !=Array){
        this.newData = res.data
      }else{
        this.newData =res;
      }
      
      this.$nextTick(()=>{
          this.tBetterScroll = new BetterScroll('.wrapper', {
          movable: true,
          zoom: true,
          click:true
        })
      })
    },
    changeTab(item,index){
      this.addData(index)
      console.log(index)
      
    }
  }
}
</script>

<style lang="less" scoped>

.home{ 
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.headers{ 
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 87px;
}
section{ 
  margin-top: 90px;
  flex: 1;
  overflow: hidden;
}
</style>