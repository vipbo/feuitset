<template>
    <div class="invoice-item-box">
        <div class="name-price">
            <div class="name">{{invoice.name}}</div>
            <div class="price">￥{{invoice.price}}</div>
        </div>
        <div class="time-action">
            <div class="time">{{invoice.time}}</div>
            <div class="action">
                <fe-button mini type="primary" class='search-btn'>开票</fe-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Button } from "feui";
export default {
  components: {
    [Button.name]: Button
  },
  props: {
    invoice: Object
  }
};
</script>

<style lang="less" scoped>
.invoice-item-box {
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .name-price {
    display: flex;
    align-items: center;
    .name {
      flex: 1;
    }
    .price {
      flex: 1;
      text-align: right;
    }
  }
  .time-action {
    display: flex;
    align-items: center;
    .time {
      flex: 1;
      font-size: 12px;
      color: #ccc;
    }
    .action {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
