<template>
    <div class="invoice-record">
      <div class="head-search-wrap">
        <m-header >
            <div slot="title">开票记录</div>
        </m-header>
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
        </div>
        <div class="content">
          <div class="detail">
                 <invoice-record-item v-for="invoice in InvoiceDatas" :key="invoice.id" :invoice="invoice"/>
          </div>
          <divider>没有更多了</divider>

        </div>
    </div>
</template>
<script>
// //发票种类： 1:蓝色,2:黄色
//开票状态： 0：开票中，1:发票生成,2:开票完成,3:开票失败
import data from "./data.json";
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
      InvoiceDatas: data
    };
  }
};
</script>
<style lang="less" scoped>
.invoice-record {
  .head-search-wrap {
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    width: 100%;
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
  .content {
    margin-top: 80px;
  }
}
</style>
