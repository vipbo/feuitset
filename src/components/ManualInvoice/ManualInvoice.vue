<template>
    <div class="manual">
        <m-header >
            <div slot="title">手工开票</div>
        </m-header>
          <company-name :name="'恭喜发财有限公司'"/>
        <div class='p-component'>
           <p-component >发票信息</p-component>
        </div>
        <fe-tab>
            <fe-tabitem selected >企业</fe-tabitem>
            <fe-tabitem >个人/其他</fe-tabitem>
        </fe-tab> 
        <div class="content">
          <fe-group >
           <popup-picker 
              :title="title" 
              :data="list" 
              v-model="value"
              @on-show="onShow" 
              @on-hide="onHide" 
              @on-change="onChange" 
              placeholder="请选择"
              value-text-align='left'
              >
            </popup-picker>
              </fe-group>
             <div class="oli">
                 <div>开成品油发票</div>
                <fe-switch title=""></fe-switch>
             </div>
             <div class="invoice-item">
                 <div class="invoice">发票抬头</div>
                 <input type="text" placeholder="必填，请输入企业名称">
             </div>
             <div class="tax-item">
                 <div class="tax">企业税号</div>
                 <input type="text" placeholder="必填，请输入6-20位企业税号">
             </div>
             <div :class="`extend ${ isExtend ?'low-height':'h-height'}`">
                  <div class="target" @click="changeExtend" v-show='isExtend'>
                       <span >展开选填项</span>
                       <i class="iconfont iconxiajiantou" ></i>
                  </div>               
                  <div class="address">
                      <div class="phone">地址电话</div>
                      <input type="text" placeholder="请填写地址及其电话信息">
                  </div>
                  <div class="bank-info">
                      <div class="bank-id">开户行及账号</div>
                      <input type="text" placeholder="请输入开户行及账号">
                  </div>
                  <div class="note-info">
                      <div class="note">备注</div>
                      <input type="text" placeholder="请输入备注文案">
                  </div>
                  <div class="show-note">
                      <div>发票显示备注</div>
                      <fe-switch title=""></fe-switch>
                  </div>
                  <div class="pull-item"  @click="changeExtend">
                      <span>收起</span>
                       <i class="iconfont iconshangjiantou" ></i>
                  </div>
             </div>
        </div>
        <div class="pay-type">
            <div class='p-component'>
                <p-component >支付方式</p-component>
            </div>
            <div class="receive-phone">
                <div class="telephone">手机号码</div>
                <input type="text" placeholder="请输入手机号码接收电子发票">
            </div>
            <div class="e-mail">
                <div class="mail">邮箱地址</div>
                <input type="text" placeholder="请输入邮箱地址接收电子发票">
            </div>
        </div>
        <div class="invoice-detail-wrap">
            <div class='p-component'>
                <p-component >发票明细</p-component>
            </div>
            <invoice-detail />
            <fe-button type="default" class='add-btn' link='addInvoiceDetail'>添加发票明细</fe-button>
        </div>
       
        <div class="foot-box">
          <div  class="foot-area">
            <div>
              <span>总额(元):</span>
              <span class="number">10984.00</span>
            </div>
            <div>
              <fe-button type="primary" class='submit-btn' @click.native="submitInvoice">提交开票</fe-button>
            </div>
          </div>
        </div>
        <fe-popup  v-model="isSubmitInvoice" class='self-popup' height='400px'  >
            <div class="popup-title">
              <div class="cancel" @click="popupCancel">取消</div>
              <div class="ok">确认开票</div>
            </div>
            <div class="open-company">
              <div class="company-type">开票企业</div>
              <div class="company-name">欢天喜地发红包有限公司</div>
            </div>
             <div class="open-company">
              <div class="company-type">发票种类</div>
              <div class="company-name">收购发票(电子)</div>
            </div>
             <div class="open-company">
              <div class="company-type">发票抬头</div>
              <div class="company-name">买买买公司</div>
            </div>
             <div class="open-company">
              <div class="company-type">企业税号</div>
              <div class="company-name">98745632158</div>
            </div>
             <div class="open-company">
              <div class="company-type">发票金额</div>
              <div class="company-name">￥300.00</div>
            </div>
             <div class="open-company">
              <div class="company-type">交付手机</div>
              <div class="company-name">17898986565</div>
            </div>
             <div class="open-company">
              <div class="company-type">交付邮箱</div>
              <div class="company-name">17898986565@qq.com</div>
            </div>
            <div class="open-company">
               <div class="company-type">备注</div>
              <textarea class="company-name">备注内容备注内容备注内容备注内容备注内容备注内容备注内容备注内容
              </textarea>
            </div>
            <fe-button 
                type="primary" 
                class='again-submit'
                link='openingInvoice'
                  >
                  确定开票
             </fe-button>
        </fe-popup>
    </div>
</template>
<script>
import { Tab, TabItem, Switch, Button, Group, PopupPicker, Popup } from "feui";
import MHeader from "../common/MHeader";
import CompanyName from "../common/CompanyName";
import PComponent from "../common/PComponent";
import InvoiceDetail from "../common/InvoiceDetail";
export default {
  components: {
    [Tab.name]: Tab,
    [TabItem.name]: TabItem,
    [Switch.name]: Switch,
    [Button.name]: Button,
    [PopupPicker.name]: PopupPicker,
    [Group.name]: Group,
    [Popup.name]: Popup,
    MHeader,
    CompanyName,
    PComponent,
    InvoiceDetail
  },
  data() {
    return {
      isExtend: true,
      isSubmitInvoice: false,
      title: "发票种类",
      list: [
        // ["小米1", "iPhone1", "华为1", "情怀1", "三星1", "其他1", "不告诉你1"]
        [
          "收购发票(电子)",
          "收购发票(纸质)",
          "普通发票(电子)",
          "普通发票(纸质)",
          "专用发票",
          "普通发票(卷式)"
        ]
      ],
      value: []
    };
  },
  methods: {
    submitInvoice() {
      this.isSubmitInvoice = true;
    },
    popupCancel() {
      this.isSubmitInvoice = false;
    },
    onShow() {
      console.log("show");
    },
    onHide() {
      console.log("hide");
    },
    onChange() {
      console.log("change");
    },
    changeExtend() {
      this.isExtend = !this.isExtend;
    }
  }
};
</script>
<style scope lang='less'>
.manual {
  .p-component {
    line-height: 30px;
    padding: 10px;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .content {
    background: #fff;
    .nuim-popup-picker-placeholder,
    .nuim-popup-picker-value {
      margin-left: 40px;
    }
    .oli {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
    .invoice-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .invoice {
        flex: 1.5;
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
    .extend {
      overflow: hidden;
      .target {
        text-align: center;
        padding: 10px;
        color: #1990fa;
      }
      .address {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .phone {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
      .bank-info {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .bank-id {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
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
      .show-note {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
      .pull-item {
        text-align: center;
        padding: 10px;
        color: #1990fa;
      }
    }
    .low-height {
      height: 50px;
    }
    .h-height {
      height: 250px;
    }
  }
  .pay-type {
    background: #fff;
    margin-top: 10px;
    .p-component {
      line-height: 30px;
      padding: 10px;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
    .receive-phone {
      display: flex;
      align-items: center;

      padding: 10px;
      border-bottom: 1px solid #ccc;
      .telephone {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
    .e-mail {
      display: flex;
      align-items: center;

      padding: 10px;
      border-bottom: 1px solid #ccc;
      .mail {
        flex: 1.5;
      }
      input {
        height: 25px;
        border: none;
        flex-grow: 1;
      }
    }
  }
  .invoice-detail-wrap {
    background: #fff;
    padding: 10px;
    margin-bottom: 70px;
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
      margin: 10px auto;
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
      .number {
        color: #1990fa;
      }
      .submit-btn {
        font-size: 16px;
      }
    }
  }
  .self-popup {
    background: rgb(255, 255, 255);
    overflow: scroll;
    .popup-title {
      padding: 10px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .cancel {
        flex: 1;
        color: #ccc;
        font-size: 14px;
      }
      .ok {
        flex: 2;
        margin-left: 30px;
      }
    }
    .open-company {
      display: flex;
      padding: 10px 10px 0;
      .company-type {
        flex: 1;
        color: #ccc;
      }
      .company-name {
        flex: 3;
        border: none;
      }
    }
    .again-submit {
      margin: 15px auto 0;
      width: 90%;
    }
  }
}
</style>