<template>
    <div class="head-wrap">
       <i class="iconfont iconfanhui" ></i>
       <div class="title">
          <slot name="title"></slot>
       </div>
       <slot name="add"></slot>
     <div v-if="!three"></div>
    </div>
</template>
<script>
export default {
  props: {
    three: {
      type: String
    }
  }
};
</script>
<style scope lang='less'>
.head-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 2px 10px;
  height: 30px;
  .iconfanhui {
    color: rgb(0, 122, 255);
  }
  .title {
    font-weight: 600;
    color: rgb(117, 117, 117);
  }
}
</style>