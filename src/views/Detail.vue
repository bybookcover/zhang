<template>
  <div class="detail">
    <div class="swiper-main">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide 
        v-for='(item,index) in swiperList' :key='index'>
        <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <footer>
      <div class="add-cart">加入购物车</div>
      <div>立即购买</div>
    </footer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:'Detail',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
        swiperOption: {
          autoplay:3000,
          speed:1000,
          pagination: {
            el: '.swiper-pagination',
            type:'fraction'
          }
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        swiperList:[
          {
            imgUrl:'./images/cases/fabric1.jpg'
          },
           {
            imgUrl:'./images/cases/fabric2.jpg'
          },
           {
            imgUrl:'./images/cases/fabric3.jpg'
          }
        ]
    }
  }
}
</script>

<style scoped lang="less">
footer{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 47px;
  border-top: 1px solid #cccccc;
  background-color: #fff;
  div{
    width: 50%;
    line-height: 47px;
    text-align: center;
    font-size: 16px;
    color: white;
    background-color: red;
    &.add-cart{
      background-color: orange;
    }
  }

}
.swiper-main{
  width:100%;
  height: 300px;
  color: #fff;
  text-align: right;
  font-size: 14px;
  img{
    width:100%;
    height: 300px;
  }

}
</style>