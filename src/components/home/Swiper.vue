<template>
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

</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
 export default {
    name: 'carrousel',
    components: {
      swiper,
      swiperSlide
    },
    props:{ 
      swiperList:Array
    },
    data() {
      return {
          swiperOption: {
          autoplay:3000,
          speed:1000,
          pagination: {
            el: '.swiper-pagination'
          }
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
 }
</script>
<style lang="less" scoped>
.swiper-main{
  width:100%;
  height: 205px;
  img{
    width:100%;
    height: 205px;
  }

}
</style>