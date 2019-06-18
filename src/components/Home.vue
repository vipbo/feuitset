<template>
  <div class="home">
   <!-- <fe-button type="primary" >页面主要操作</fe-button>
   <fe-button type="warn" mini>页面主要操作</fe-button>
   <fe-button type="default" disabled>disabled</fe-button>
   <fe-qrcode value="https://feui.gitee.io"></fe-qrcode> -->
    <m-header >
      <div slot="title">XXXX</div>
      <!-- <div slot="add">添加</div> -->
    </m-header>
    <div class="top"></div>
      <div class="company" >
        <img src="../assets/img/zwt.png" alt="" >
        <div class='text'>
          <div class="name" @click='showDetailName'>
              <span class="detail">恭喜发财有限公司</span>
             <i :class="`iconfont iconfanhui ${isRotate?'is-roate270':'is-roate90'}`" ></i>
          </div> 
          <div class="other">开票代码：4615</div>
        </div>
      </div>
    <div class="content"  >
      <router-link to='manualInvoice' class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>手工开票</div>
      </router-link>
      <router-link to='scanInvoice' class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>扫码开票</div>
      </router-link>
      <router-link to='checkInvoice' class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>审核开票</div>
      </router-link>
      <router-link to='invoiceRecord' class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>开票记录</div>
      </router-link >
      <router-link to='goodsInfo' class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>商品信息</div>
      </router-link >
      <router-link to='invoiceInfo'  class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>开票信息</div>
      </router-link >
    </div>

    <div class="advertising"></div>
  </div>
</template>

<script>
import { Button, Qrcode } from "feui";
import MHeader from "./common/MHeader";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isRotate: true
    };
  },
  methods: {
    showDetailName: function() {
      this.isRotate = !this.isRotate;
    }
  },
  components: {
    MHeader,
    [Button.name]: Button,
    [Qrcode.name]: Qrcode
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.home {
  .top {
    height: 150px;
    width: 100%;
    position: fixed;
    z-index: -100;
    background: rgb(0, 122, 255);
  }
  .company {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 90%;
    margin: 65px auto 0;
    color: #fff;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .text {
      width: 80%;
      .name {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .detail {
          display: inline-block;
          width: 95%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .is-roate270 {
          transform: rotateZ(270deg);
        }
        .is-roate90 {
          transform: rotateZ(90deg);
        }
      }
      .other {
        width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    border: 1px solid #ccc;
    margin: 20px auto 0;
    background: #fff;
    border-radius: 5px;
    .item {
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      i {
        font-size: 30px;
        color: blue;
      }
    }
  }
  .advertising {
    height: 100px;
    width: 90%;
    border-radius: 5px;
    margin: 10px auto;
    background: url("../assets/img/gg1.png") no-repeat;
    background-size: cover;
  }
}
</style>
