<template>
  <div class="list">
    <header>
      <div class="return">
        <i class="iconfont icon-fanhui "></i>
      </div>
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜你喜欢的</span>
      </div>
      <div class="go-home">
        <i class="iconfont icon-fangdajing"></i>
      </div>
    </header>
    <section>
      <div class="list-l" ref="left">
        <ul class="l-item">
          <li 
          v-for="(item,index) in leftData" :key="index"
          @click="goScroll(index)"
          :class="{active:index==currentIndex}">
          {{item.name}}</li>
        </ul>
      </div> 
      <div class="list-r" ref="right">
        <div>
          <ul 
            v-for="(item,index) in rightData" :key="index"
            class="shop-list"
          >
          <li 
            v-for="(k,i) in item" :key="i"
            
          >
            <h2>{{k.name}}</h2>
            <ul class="r-content">
              <li 
                v-for="(j,idx) in k.list" :key="idx"
              >
                <img :src="j.imgUrl" alt="">
                <span>{{j.name}}</span>
              </li>
                
            </ul>
          </li>
        </ul>
        </div>
      </div> 
    </section>
    <Tabbar></Tabbar>
    
  </div>
 
</template>

<script>
// @ is an alias to /src

import Tabbar from '@/components/common/Tabbar.vue'
import http from'@/common/api/request.js'
import BetterScroll from 'better-scroll'


export default {
  name: 'List',
  data(){
    return{
      leftData:[],
      rightData:[],
      rightBScroll:'',
      allHeight:[],
      scrollY:''
    }
  },
  computed: {
    currentIndex(){
      return this.allHeight.findIndex((item,index)=>{
        return this.scrollY >= item && this.scrollY< this.allHeight[index+1]
      })
    }
  },
  components: {
    Tabbar
  },
  async created(){

      let res = await http.$axios({
        url:'/api/goods/list',
      });
      let leftArr = [];
      let rightArr = [];

      res.forEach(v => {
        leftArr.push({
          id:v.id,
          name:v.name
        })
        rightArr.push(v.data);
      });
      this.leftData =leftArr;
      this.rightData=rightArr;

       this.$nextTick(()=>{
         new BetterScroll(this.$refs.left,{
           click:true
         });
         this.rightBScroll = new BetterScroll(this.$refs.right,{
           click:true,
           probeType:3
         });
        let height = 0;
        this.allHeight.push(height);
        let uls  = this.$refs.right.getElementsByClassName('shop-list')
        Array.from(uls).forEach(v=>{
          height += v.offsetHeight || v.clientHeight;
          this.allHeight.push(height)
                 
        })
          this.rightBScroll.on('scroll',(pos)=>{
            this.scrollY =Math.abs(pos.y)
          })
        })
  },
  methods: {
    goScroll(index){
      this.rightBScroll.scrollTo(0,-this.allHeight[index],300);
    }
  }
}
</script>

<style scoped lang="less">

.list{
  display: flex;
  flex-direction: column;
  width:100vw;
  height: 100vh ;
  overflow: hidden;
  section{
    display: flex;
    flex:1;;
    overflow: hidden;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    background-color: #b0352f;
    .return{
      color:#fff;
      font-size: 26px;
      padding: 0 20px;
      line-height: 44px;
    }
    .search{
      display: flex;
      align-items: center;
      flex:1;
      background-color: #fff;
      border-radius: 20px;
      padding:0 10px;
      i{
        font-size: 24px;
        color:grey;
      }
      span{
        align-content: center;
        font-size: 14px;
      }
    }
    .go-home{
      padding:0 10px;
      line-height: 44px;
      color:#fff;
      i{
        font-size: 20px;
        }
    }
  }

}


.list-l{
  width:93px;
  background-color: #fff;
  overflow: hidden;
  border-right: 1px solid #cccccc;
  .l-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li{
      width:100%;
      padding: 3px 0;
      margin: 15px 0;
      text-align: center;
      font-size: 16px;
      &.active{
  color:#b0352f;
  border-left: 8px solid #b0352f;
}

    }
  }
}
.list-r{
  width:100%;
  height: 100%;
  overflow: hidden;
  .shop-list{
    text-align: center;
    h2{
      margin-top: 20px;
      font-size: 24px;
      font-weight: 400;
    }
    .r-content{
      display: flex;
      flex-wrap: wrap;
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:33.3%;
        margin-top: 20px;
        img{
          width:53px;
          height:43px;
        }
      }
    }
  }

}
</style>
