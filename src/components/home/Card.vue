<template>
      <div class="title">
        <slot>
          <span>火爆推荐</span>
        </slot>
      
    </div>
</template>

<style lang="less" scoped>

.title{ 
  padding:10px 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
  span{ 
    position:relative;
  }
  span::after{ 
    content: "";
    position:absolute;
    width:8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background-color: #d4c0a7;
    top:50%;
    left:-18px;

    margin-top:-4px;
  }
    span::before{ 
    content: "";
    position:absolute;
    width:8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background-color: #d4c0a7;
    top:50%;
        right: -18px;
    margin-top:-4px;
  }
}
</style>