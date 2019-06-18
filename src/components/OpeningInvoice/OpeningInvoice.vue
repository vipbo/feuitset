<template>
    <div class="opening-invoice">
        <m-header >
            <div slot="title">正在开票</div>
        </m-header>
        <div class="content">
            <img src="../../assets/img/invoice.png" alt="开票中" >
            <div>正在开票请耐心等待</div>
            <div>如需查看发票，请到开票记录中查阅</div>
             <fe-button 
                type="primary" 
                class='close-btn'
                link='/'
                  >
                  关闭
             </fe-button>
             <fe-button 
                type="default" 
                class='continue-btn'
                link='manualInvoice'
                  >
                  继续开票
             </fe-button>
        </div>
        <img class="advertising"  src="../../assets/img/gg.png" alt="广告" />
    </div>
</template>
<script>
import { Button } from "feui";
import MHeader from "../common/MHeader";
export default {
  components: {
    MHeader,
    [Button.name]: Button
  }
};
</script>
<style lang="less" scoped>
.opening-invoice {
  text-align: center;
  .content {
    width: 100%;
    background: #fff;
    text-align: center;
    border-bottom: 1px solid transparent;
    img {
      width: 75%;
      margin: 40px auto 0;
    }
    .close-btn,
    .continue-btn {
      width: 90%;
      margin: 20px auto;
    }
  }
  .advertising {
    width: 90%;
    margin: 20px auto;
  }
}
</style>

