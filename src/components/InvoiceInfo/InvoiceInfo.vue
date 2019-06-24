<template>
    <div class="invoice-info">
        <m-header >
            <div slot="title">开票信息</div>
        </m-header>
        <div class="content">
            <div class="company">
                <div class="name-area">
                    <div class="name">企业名称</div>
                    <input type="text" placeholder="必填，请输入您的企业名称">
                </div>
                <div class="tax-area">
                    <div class="tax">企业税号</div>
                    <input type="text" placeholder="必填，请输入您的开票税号">
                </div>
                <div class="address-area">
                    <div class="address">地址</div>
                    <input type="text" placeholder="必填，请输入详细地址">
                </div>
                <div class="phone-area">
                    <div class="phone">电话</div>
                    <input type="text" placeholder="必填，请输入电话号码">
                </div>
                <div class="bank-number">
                    <div class="bank">开户行及账号</div>
                    <input type="text" placeholder="必填，请输入开户行及账号">
                </div>
              </div>
              <div class="payee-checker">
                   <div class="drawer-area">
                      <div class="drawer">开票人</div>
                      <input type="text" placeholder="必填，请输入开票人">
                   </div>
                   <div class="drawer-area">
                      <div class="drawer">收款人</div>
                      <input type="text" placeholder="请输入收款人">
                   </div>
                   <div class="drawer-area">
                      <div class="drawer">复核人</div>
                      <input type="text" placeholder="请输入复核人">
                   </div>
              </div>
              <div class="save-area">
                <div class="save">保存</div>
              </div>
        </div>
        
    </div>
</template>
<script>
import MHeader from "../common/MHeader";
export default {
  components: {
    MHeader
  }
};
</script>
<style lang="less" scoped>
.invoice-info {
  .content {
    .company {
      background: #ffffff;
      .name-area {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .name {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
      .tax-area,
      .address-area,
      .phone-area {
        display: flex;
        align-items: center;
        padding: 10px;
        .tax,
        .address,
        .phone {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
      .bank-number {
        display: flex;
        align-items: center;
        padding: 10px;
        border-top: 1px solid #ccc;
        .bank {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
    }
    .payee-checker {
      background: #ffffff;
      margin-top: 10px;
      .drawer-area {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .drawer {
          flex: 1.5;
        }
        input {
          height: 25px;
          border: none;
          flex-grow: 1;
        }
      }
    }
    .save-area {
      margin-top: 10px;
      background: #fff;
      padding: 15px;
      .save {
        border: 1px solid #ddd;
        background: #1990fa;
        color: #fff;
        text-align: center;
        line-height: 30px;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
}
</style>
