<template>
    <div class="invoice-record">
        <m-header >
            <div slot="title">开票记录</div>
        </m-header>

        <div class="content">
          <div class="search-area">
            <div class="month-filter">
                <div class="month">
                  <span>本月</span>
                  <i class="iconfont iconxiaosanjiaodown"></i>
                </div>
                <div class="filter">筛选</div>
            </div>
            <div class="search-btn">
              <span>搜索</span>
               <i class="iconfont iconfangdajing"></i>
            </div>

          </div>
          <div class="detail">
                 <invoice-record-item v-for="invoice in InvoiceDatas" :key="invoice.id" :invoice="invoice"/>
          </div>
          <divider>没有更多了</divider>

        </div>
    </div>
</template>
<script>
import { Divider } from "feui";
import MHeader from "../common/MHeader";
import InvoiceRecordItem from "./InvoiceRecordItem";
export default {
  components: {
    [Divider.name]: Divider,
    MHeader,
    InvoiceRecordItem
  },
  data() {
    return {
      InvoiceDatas: [
        {
          id: 1,
          name: "欢天喜地有限公司",
          price: 1800.32,
          time: "2018-05-11 23:22:36",
          invoiceType: 1, //发票种类： 1:蓝色,2:黄色
          invoiceStatus: 0 //开票状态： 0：开票中，1:发票生成,2:开票完成,3:开票失败
        },
        {
          id: 2,
          name: "喜洋洋有限公司",
          price: 1800.32,
          time: "2018-05-11 23:22:36",
          invoiceType: 2,
          invoiceStatus: 1 //开票状态： 0：开票中，1:发票生成,2:开票完成,3:开票失败
        },
        {
          id: 3,
          name: "欢天喜地有限公司",
          price: 1800.32,
          time: "2018-05-11 23:22:36",
          invoiceType: 1,
          invoiceStatus: 2 //开票状态： 0：开票中，1:发票生成,2:开票完成,3:开票失败
        },
        {
          id: 4,
          name: "欢天喜地有限公司",
          price: 1800.32,
          time: "2018-05-11 23:22:36",
          invoiceType: 2,
          invoiceStatus: 3 //开票状态： 0：开票中，1:发票生成,2:开票完成,3:开票失败
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.invoice-record {
  .content {
    .search-area {
      background: #fff;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      .month-filter {
        display: flex;
        align-items: center;
        .month {
          border: 1px solid #ccc;
          border-radius: 20px;
          padding: 0px 10px;
        }
        .filter {
          border-radius: 20px;
          border: 1px solid #ccc;
          padding: 0 15px;
          margin-left: 10px;
        }
      }
      .search-btn {
        border-radius: 20px;
        border: 1px solid #ccc;
        padding: 0 15px;
      }
    }
  }
}
</style>
