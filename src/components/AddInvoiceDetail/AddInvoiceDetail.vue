<template>
    <div class="add">
        <m-header>
             <div slot="title">添加发票明细</div>
        </m-header>
        <div class="goods-area">
             <div  class="good">
                 <div class="name">商品名称</div>
                 <div class="detail">
                     <input type="text" placeholder="必填，请选择商品">
                     <router-link to='chooseGoods'>
                        <i class="iconfont iconyoujiantou" ></i>
                     </router-link> 
                 </div>
             </div> 
             <div class="invoice-amount">
                 <div class="amount">开票金额</div>
                 <input type="text" placeholder="必填，请输入开票金额">
             </div>
             <div class="invoice-tax">
                 <div class="tax">税率</div>
                 <input type="text" placeholder="选择商品后将自动获取">
             </div>
        </div>
        <div class="number-type">
            <div class="specification-type">
                <div class="specification">规格型号</div>
                <input type="text" placeholder="请输入规格型号">
            </div>
            <div class="number-area">
                <div class="number">规格型号</div>
                <input type="text" placeholder="请输入数量">
            </div>
             <div class="include-tax">
                <div class="include">含税单价</div>
                <input type="text" placeholder="请输入含税单价">
            </div>
        </div>
        <fe-button type="default" class='save-btn'>保存</fe-button>
    </div>
</template>
<script>
import { Button } from "feui";
import MHeader from "../common/MHeader";
export default {
  components: {
    [Button.name]: Button,
    MHeader
  }
};
</script>
<style lang="less" scoped>
.add {
  .goods-area {
    margin-top: 10px;
    background: #fff;
    .good {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .name {
        flex: 1.8;
      }
      .detail {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          height: 25px;
          border: none;
        }
      }
    }
    .invoice-amount {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .amount {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .invoice-tax {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .tax {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
  }
  .number-type {
    margin-top: 10px;
    background: #fff;
    .specification-type {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .specification {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .number-area {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .number {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .include-tax {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .include {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
  }
  .save-btn {
    background: #ccc;
    color: #fff;
    width: 90%;
    margin: 10px auto;
  }
}
</style>

