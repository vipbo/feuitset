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
    <div class="content">
      <div class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>XXXX</div>
      </div>
      <div  class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>XXXX</div>
      </div>
      <div  class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>XXXX</div>
      </div>
      <div  class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>XXXX</div>
      </div>
      <div  class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>XXXX</div>
      </div>
      <div  class="item">
          <i class="iconfont iconshenfenzheng" ></i>
          <div>XXXX</div>
      </div>
    </div>

    <div class="advertising">
      
    </div>
  </div>
</template>

<script>
import { Button, Qrcode } from "feui";
import MHeader from "./common/MHeader";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
    height: 130px;
    width: 100%;
    padding: 10px;
    position: fixed;
    z-index: -100;
    background: lightblue;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    border: 1px solid #ccc;
    margin: 130px auto 0;
    background: #fff;
    border-radius: 5px;
    .item {
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
  }
  .advertising {
    height: 100px;
    width: 90%;
    border-radius: 5px;
    margin: 10px auto;
    background: url("../assets/img/zwt.png") no-repeat;
    background-size: cover;
  }
}
</style>
