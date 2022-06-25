<template>
      <div class="like">
        <Card>
          <span>猜你喜欢</span>
        </Card>
        <ul>
          <li 
           v-for="(item,index) in likeList"
           :key="index"
           @click="goDetail"
           >
            <h2><img v-lazy="item.imgUrl" alt=""></h2>
            <h3>{{item.name}}</h3>
            <div>
              <span>￥</span>
              <b>{{item.price}}</b>
            </div>
          </li>
        </ul>
      </div>
</template>
<script>
import Card from "./Card.vue";
export default{ 
  props:{ 
  likeList:Array
    },
  data () {
    return {
    }
  },
  components: {
     Card
  },
  methods:{
    goDetail(){
      this.$router.push({
        path:'/detail'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.like{ 
  h3{ 
  font-size: 12px;
  color:gray;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  padding: 6px;
  width: 90%;
  }
  img{ 
    width:176px;
    height:176px;
  
  }
  img [lazy=loading] {
     background-color: black;
      }
  ul{ 
    display: flex;
    flex-wrap: wrap;
    li{ 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:50%;
      div{ 
        width:93%;
        text-align: left;
      
        font-size: 14px;
        color:red;
        
      }
    }
  }
}
</style>