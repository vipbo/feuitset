<template>
    <div class="chioce-box">
       <div class="batch-chioce" v-if="bacth">批量选择</div>
       <div class="many-btn" v-if="!bacth">
           <div class="cancel">取消</div>
           <div class="delete">删除</div>
           <div class="submit">提交开票</div>
       </div>
    </div>
</template>
<script>
export default {
  props: {
    bacth: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.chioce-box {
  margin: 15px;
  .batch-chioce {
    background-color: #1990fa;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }
  .many-btn {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #555;
    .cancel {
      flex: 1;
      border: 1px solid #ccc;
    }
    .delete {
      flex: 1;
      border: 1px solid #ccc;
    }
    .submit {
      color: #fff;
      flex: 2;
      border: 1px solid #1990fa;
      background-color: #1990fa;
    }
  }
}
</style>
