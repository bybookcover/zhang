<template>
  <div class="my">
   我的
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

import Tabbar from '@/components/common/Tabbar.vue'

export default {
  name: 'My',
  components: {
    Tabbar
  }
}
</script>
