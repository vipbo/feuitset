<template>
    <div>
      <div class="box" v-if='title'>
        <div  class="name">商品名称</div>
        <div  class="type">规格型号</div>
        <div  class="tax">税率</div>
      </div>
      <div class="box" v-if='item'>
        <div class="name">{{obj.name}}</div>
        <div class="type">{{obj.type}}</div>
        <div class="tax">{{obj.tax}}</div>
    </div>
    </div>
    
</template>
<script>
export default {
  props: {
    title: Boolean,
    item: Boolean,
    obj: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  height: 30px;
  background: #fff;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  .name {
    flex: 1;
  }
  .type {
    flex: 1;
  }
  .tax {
    flex: 1;
  }
}
</style>

