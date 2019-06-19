<template>
    <div class="invoice-detail">
        <m-header>
            <div slot="title">发票详情</div>
        </m-header>
        <div class="content">
            <company-name :name="'恭喜发财有限公司'" />
            <div class="blue-area"></div>
            <div class="code-area">
                <div>
                    <span class="text">订单编号</span>
                    <span>6548792123</span>
                </div>
                <div>
                    <span class="text">发票金额</span>
                    <span>￥2892.00</span>
                </div>
                <fe-qrcode :value="value" class="qcode"></fe-qrcode>
                <div>请消费者于2019-09-14 14:32:18前扫码开票，否则二维码将会失效！</div>
                 <fe-button type="primary" class='print-btn'>打印二维码小票</fe-button>
                 <fe-button type="default" class='close-btn' link='/'>关闭</fe-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Qrcode, Button } from "feui";
import MHeader from "../common/MHeader";
import CompanyName from "../common/CompanyName";
export default {
  components: {
    [Qrcode.name]: Qrcode,
    [Button.name]: Button,
    MHeader,
    CompanyName
  },
  data() {
    return {
      value: "https://feui.gitee.io"
    };
  }
};
</script>
<style lang="less" scoped>
.invoice-detail {
  .content {
    position: relative;
    .blue-area {
      width: 100%;
      height: 70px;
      background: #007aff;
      z-index: -100;
      position: absolute;
      top: 40px;
      left: 0;
    }
    .code-area {
      background: #fff;
      width: 80%;
      margin: 0 auto;
      padding: 20px;
      .text {
        display: inline-block;
        color: #ccc;
        margin-right: 10px;
      }
      .qcode {
        margin: 40px auto;
        width: 50%;
      }
      .print-btn {
        margin: 10px 0;
      }
    }
  }
}
</style>

