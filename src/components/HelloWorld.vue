<template>
  <div class="hello">
    <h2>Essential Links</h2>
   <fe-button type="primary" >页面主要操作</fe-button>
   <fe-button type="warn" mini>页面主要操作</fe-button>
   <fe-button type="default" disabled>disabled</fe-button>
   <fe-qrcode value="https://feui.gitee.io"></fe-qrcode>

  </div>
</template>

<script>
import { Button, Qrcode } from "feui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    [Button.name]: Button,
    [Qrcode.name]: Qrcode
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.hello {
  color: yellow;
  h1,
  h2 {
    font-weight: normal;
    color: aqua;
  }
}
</style>
