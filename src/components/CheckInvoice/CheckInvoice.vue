<template>
    <div class="check-invoice">
        <m-header >
            <div slot="title">审核开票</div>
        </m-header>
        <no-invoice v-if='!allInvoices.length'/>
        <div class="content" v-if='allInvoices.length'>
            <fe-button type="default" class='search-btn'>搜索</fe-button>
            <invoice-item v-for='invoice in allInvoices' :key='invoice.id' :invoice='invoice'/>
       
        <div class="no-more">
            <hr>
            <div class='text'>没有更多了</div>
         </div>
         <div class='fixed-footer'>
           <batch-choice bacth />
         </div>
         </div> 
    </div>
</template>
<script>
import data from "./data.json";
import { Button } from "feui";
import MHeader from "../common/MHeader";
import NoInvoice from "./NoInvoice";
import InvoiceItem from "./InvoiceItem";
import BatchChoice from "./BatchChoice";
export default {
  components: {
    [Button.name]: Button,
    MHeader,
    NoInvoice,
    InvoiceItem,
    BatchChoice
  },
  data() {
    return {
      allInvoices: data
    };
  }
};
</script>
<style lang="less" scoped>
.check-invoice {
  position: relative;
  overflow: scroll;
  padding-bottom: 120px;
  .content {
    background: #fff;
    border-top: 1px solid transparent;
    .search-btn {
      width: 90%;
      margin-top: 10px;
    }
  }
  .no-more {
    position: relative;
    padding-top: 20px;
    background: #f0f2f3;
    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      padding: 0 32px;
      transform: translateX(-50%) translateY(-16%);
      background: #f0f2f3;
      color: #ccc;
    }
  }
  .fixed-footer {
    width: 100%;
    height: 80px;
    background: #fff;
    position: fixed;
    bottom: -1px;
    left: 0;
  }
}
</style>
