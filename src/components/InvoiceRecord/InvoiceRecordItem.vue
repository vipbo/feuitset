<template>
  <div class="invoice-record-item">
      <div class="name-price">
        <div class="name">{{invoice.name}}</div>
        <div class="price">￥{{invoice.price}}</div>
      </div>
      <div class="time-status">
          <div class="time">
              <span :class="{'blue':invoice.invoiceType==1,'yellow':invoice.invoiceType==2}">普</span>
              <span>{{invoice.time}}</span>
          </div>
         <div  v-if="invoice.invoiceStatus==3" class="fail">
              <div class="reason">失败原因</div>
              <div class="reopen">重开</div>
         </div>
         <div class="status" v-else>{{invoiceStatus(invoice.invoiceStatus)}}</div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    invoice: Object
  },
  methods: {
    invoiceStatus(status) {
      switch (status) {
        case 0:
          return "开票中";
          break;
        case 1:
          return "发票生成";
          break;
        case 2:
          return "开票完成";
          break;
          // case 3:
          //   return "开票失败";
          break;
        default:
          return "";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.invoice-record-item {
  background: #fff;
  height: 85px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 15px;
  .name-price,
  .time-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name,
    .price {
      font-weight: 600;
    }
    .name {
      width: 70%;
      text-overflow: ellipsis;
      word-break: keep-all;
      overflow: hidden;
    }
    .time {
      font-size: 14px;
      color: #666666;
    }
    .fail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .reason {
        background: #fa515c;
        color: #fff;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 12px;
      }
      .reopen {
        background: #1091fb;
        color: #fff;
        padding: 3px 15px;
        border-radius: 20px;
        margin-left: 10px;
        font-size: 12px;
      }
    }
    .status {
      font-size: 12px;
      color: #1091fb;
      font-weight: 600;
    }
    .blue {
      background: #009ffd;
      color: white;
    }
    .yellow {
      background: #f5a623;
      color: white;
    }
  }
}
</style>


