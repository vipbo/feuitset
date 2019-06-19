<template>
    <div class="scan-invoice">
        <m-header >
            <div slot="title">扫码开票</div>
        </m-header>
         <company-name :name="'恭喜发财有限公司'"/>
         <div class="oil-invoice">
             <div class="oli">
                 <div>开成品油发票</div>
                <fe-switch title="" class="open-close"></fe-switch>
             </div>
             <div class="note-info">
                <div class="note">备注</div>
                <input type="text" placeholder="请输入备注信息">
             </div>
             <div class="show-note">
                 <div>发票显示备注</div>
                <fe-switch title="" class="open-close"></fe-switch>
             </div>
         </div>
         <div class="detail-area">
           <div class='p-component'>
                <p-component >发票明细</p-component>
            </div>
            <invoice-detail />
             <fe-button type="default" class='add-btn' link='addInvoiceDetail'>添加发票明细</fe-button>
         </div>
         <div class="foot-box">
         <div  class="foot-area">
              <div>
                <span class="price">总额(元):</span>
                <span class="number">103.00</span>
              </div>
              <div>
                <fe-button type="primary" class='submit-btn' link='invoiceDetail'>生成开票码</fe-button>
              </div>
         </div>
        </div>
    </div>
</template>
<script>
import { Switch, Button } from "feui";
import MHeader from "../common/MHeader";
import CompanyName from "../common/CompanyName";
import PComponent from "../common/PComponent";
import InvoiceDetail from "../common/InvoiceDetail";
export default {
  components: {
    [Switch.name]: Switch,
    [Button.name]: Button,
    MHeader,
    CompanyName,
    PComponent,
    InvoiceDetail
  }
};
</script>
<style lang="less" scoped>
.scan-invoice {
  .oil-invoice {
    background: #fff;
    .oli,
    .show-note {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .open-close {
        position: inherit;
      }
    }
    .note-info {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .note {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .open-close {
      position: inherit;
    }
  }
  .detail-area {
    background: #fff;
    margin-top: 10px;
    border-bottom: 1px solid transparent;
    .p-component {
      line-height: 30px;
      padding: 10px;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
    .add-btn {
      width: 90%;
      border: 1px solid #1990fa;
      color: #1990fa;
      background: #fff;
      margin: 15px auto;
    }
  }
  .foot-box {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    .foot-area {
      display: flex;
      height: 60px;
      line-height: 60px;
      padding: 0 15px;
      background: #fff;
      align-items: center;
      justify-content: space-between;
      .price {
        font-size: 12px;
        color: #aaa;
      }
      .number {
        color: #1990fa;
      }
      .submit-btn {
        font-size: 16px;
      }
    }
  }
}
</style>
