<template>
    <div class="wrap">
      <div :class="choosedStatus?'common-button-choosed':'common-button'" >
          <div>{{text}}</div>
          <!-- <div>✔</div> -->
          <div class="triangle" v-if="choosedStatus"></div>
          <div class="right-symbol" v-if="choosedStatus">✔</div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    text: String,
    choosedStatus: Boolean
  }
};
</script>

<style lang="less" scoped>
.wrap {
  .common-button {
    width: 106px;
    line-height: 36px;
    background: #f0f2f3;
    font-size: 12px;
    color: #666666;
    border-radius: 4px;
    text-align: center;
  }
  .common-button-choosed {
    position: relative;
    width: 106px;
    line-height: 36px;
    background: #ffffff;
    font-size: 12px;
    color: #1091fb;
    border: 1px solid #1091fb;
    border-radius: 4px;
    text-align: center;
    .triangle {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 0;
      width: 0;
      border: 8px solid #000;
      border-color: transparent #1091fb #1091fb transparent;
      border-style: solid solid dashed dashed;
    }
    .right-symbol {
      position: absolute;
      right: 0;
      bottom: -12px;
      color: #fff;
    }
  }
}
</style>

