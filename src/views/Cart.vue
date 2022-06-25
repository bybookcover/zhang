<template>
  <div class="cart">
    购物车
     <Tabbar></Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

import Tabbar from '@/components/common/Tabbar.vue'


export default {
  name: 'Cart',
  components: {
    Tabbar
  }
}
</script>
