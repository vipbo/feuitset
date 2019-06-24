<template>
     <div class="no-good" >
            <img src="../../assets/img/noInvoice.png" alt="搜索图" >
            <div>{{tip}}</div>
            <div class="add-text">{{descript}}</div>
          </div>
</template>
<script>
export default {
  props: {
    tip: String,
    descript: String
  }
};
</script>

<style lang="less" scoped>
.no-good {
  text-align: center;
  height: 300px;
  img {
    width: 200px;
    margin: 50px auto 0px;
  }
  .add-text {
    color: #bbb;
    font-size: 13px;
  }
}
</style>

