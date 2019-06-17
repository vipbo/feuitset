<template>
    <div class="manual">
        <m-header >
            <div slot="title">手工开票</div>
        </m-header>
        <div class="company">恭喜发财有限公司</div>
        <div class="content">
             <p-component>发票信息</p-component>
             <div class="type">
                 <div class="name">发票种类</div>
                 <div class="detail">
                     <input type="text" placeholder="必填，请选择发票种类">
                     <i class="iconfont iconyoujiantou" ></i>
                 </div>
             </div>
             <div class="up-head">
                 <div>抬头类型</div>
                 <div class="who">
                    <div class="enterprise">企业</div>
                    <div class="person">个人/其他</div>
                 </div>
             </div>
             <div class="oli">
                 <div>成品油发票</div>
                <fe-switch title=""></fe-switch>
             </div>
             <div class="invoice-item">
                 <div class="invoice">发票抬头</div>
                 <input type="text" placeholder="必填，请输入企业名称">
             </div>
             <div class="tax-item">
                 <div class="tax">企业税号</div>
                 <input type="text" placeholder="必填，请输入15-20位企业税号">
             </div>
             <div :class="`extend ${ isExtend ?'low-height':'h-height'}`">
                 <span @click="changeExtend">展开选填项</span>
                 <i class="iconfont iconxiajiantou" ></i>
             </div>
        </div>
    </div>
</template>
<script>
import { Switch } from "feui";
import MHeader from "../common/MHeader";
import PComponent from "../common/PComponent";
export default {
  components: {
    [Switch.name]: Switch,
    MHeader,
    PComponent
  },
  data() {
    return {
      isExtend: true
    };
  },
  methods: {
    changeExtend: function() {
      this.isExtend = !this.isExtend;
    }
  }
};
</script>
<style scope lang='less'>
.manual {
  .company {
    height: 40px;
    line-height: 40px;
    color: #fff;
    background: #007aff;
    text-align: center;
  }
  .content {
    padding: 10px;
    background: #fff;
    .type {
      display: flex;
      margin: 10px auto;
      .name {
        flex: 1;
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
    .up-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px auto;
      .who {
        display: flex;
        align-items: center;
        .enterprise {
          border: 1px solid #ccc;
          padding: 2px 25px;
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }
        .person {
          border: 1px solid #ccc;
          padding: 2px 10px;
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
        }
      }
    }
    .oli {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px auto;
      border-bottom: 1px solid #ccc;
    }
    .invoice-item {
      display: flex;
      align-items: center;
      margin: 10px auto;
      .invoice {
        flex: 1;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .tax-item {
      display: flex;
      align-items: center;
      margin: 10px auto;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .tax {
        flex: 1;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .extend {
      text-align: center;
      color: rgb(132, 197, 252);
    }
    .low-height {
      //   border: 1px solid #ccc;
      height: 30px;
    }
    .h-height {
      //   border: 1px solid #ccc;
      height: 300px;
    }
  }
}
</style>