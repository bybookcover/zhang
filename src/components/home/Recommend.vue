<template>
  <div class="recommend">
    <Card></Card>
    <ul>
      <li v-for="(item,index) in recommendList" :key="index">
        <h2>
          <img :src="item.imgUrl" alt="">
        </h2>
        <div>
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
          <div class="price">
            <span>￥</span>
            <b>{{item.price}}</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default{
    props:{ 
      recommendList:Array
    },
    data() {
        return {
        };
    },

    components: { Card }
}
</script>

<style lang="less" scoped>
.recommend{ 
  ul li{ 
    position: relative;
  img{ 
    width:100%;
    height: 284px;
    border-radius: 12px;
  }
  div{ 
    margin-top: 100px ;
    margin-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    color:gray;
    h3{ 
      text-align: center;
    }
    .price{ 
      color:red;
    }
  }
  }
}
</style>